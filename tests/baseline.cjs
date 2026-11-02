// Baseline de cálculos de ProbDist.
// Uso:  node tests/baseline.cjs           -> escribe tests/baseline.json
//       node tests/baseline.cjs --check   -> compara con tests/baseline.json (sale con código 1 si algo cambia)
// Ejecuta la app real (index.html) en Chromium y guarda:
//   - engine: valores crudos del motor (pmf/pdf, cdf, cuantiles, momentos) con precisión completa
//   - ui: los textos exactos que muestra la pantalla de Cálculo (7 decimales)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'baseline.json');

// [distribución, parámetros, x]  — 3 casos por distribución
const CASES = [
  ['normal', { mu: 0, sigma: 1 }, 1.96], ['normal', { mu: 100, sigma: 15 }, 130], ['normal', { mu: -2, sigma: 0.5 }, -2.5],
  ['binomial', { n: 10, p: 0.5 }, 5], ['binomial', { n: 20, p: 0.35 }, 7], ['binomial', { n: 15, p: 0.1 }, 3],
  ['poisson', { lambda: 3 }, 2], ['poisson', { lambda: 2.5 }, 3], ['poisson', { lambda: 10 }, 12],
  ['geometric1', { p: 0.3 }, 2], ['geometric1', { p: 0.5 }, 0], ['geometric1', { p: 0.1 }, 10],
  ['geometric2', { p: 0.3 }, 3], ['geometric2', { p: 0.5 }, 1], ['geometric2', { p: 0.2 }, 5],
  ['hypergeometric', { N: 20, M: 5, n: 4 }, 1], ['hypergeometric', { N: 50, M: 10, n: 10 }, 2], ['hypergeometric', { N: 10, M: 3, n: 5 }, 3],
  ['negbin1', { r: 3, p: 0.5 }, 5], ['negbin1', { r: 2, p: 0.3 }, 4], ['negbin1', { r: 5, p: 0.8 }, 6],
  ['negbin2', { r: 3, p: 0.5 }, 2], ['negbin2', { r: 1, p: 0.4 }, 0], ['negbin2', { r: 4, p: 0.6 }, 3],
  ['t', { df: 10 }, 2.228], ['t', { df: 1 }, 1], ['t', { df: 30 }, -1.5],
  ['chisquare', { df: 5 }, 11.07], ['chisquare', { df: 1 }, 3.84], ['chisquare', { df: 20 }, 15],
  ['f', { df1: 5, df2: 10 }, 3.33], ['f', { df1: 2, df2: 20 }, 1], ['f', { df1: 10, df2: 3 }, 0.5],
  ['exponential', { lambda: 0.5 }, 2], ['exponential', { lambda: 2 }, 0.3], ['exponential', { lambda: 1 }, 3],
  ['gamma', { alpha: 2, beta: 2 }, 1], ['gamma', { alpha: 3, beta: 0.5 }, 5], ['gamma', { alpha: 0.7, beta: 1 }, 0.4],
  ['weibull', { alpha: 2, beta: 1 }, 1], ['weibull', { alpha: 1.5, beta: 3 }, 2], ['weibull', { alpha: 0.8, beta: 2 }, 0.5],
  ['beta', { alpha: 2, beta: 3 }, 0.5], ['beta', { alpha: 0.5, beta: 0.5 }, 0.2], ['beta', { alpha: 5, beta: 1 }, 0.9],
  ['lognormal', { mu: 0, sigma: 1 }, 1], ['lognormal', { mu: 1, sigma: 0.5 }, 3], ['lognormal', { mu: 0, sigma: 0.25 }, 1.2],
  ['pareto', { m: 1, alpha: 3 }, 2], ['pareto', { m: 2, alpha: 1.5 }, 5], ['pareto', { m: 1, alpha: 1 }, 10],
  ['uniform', { a: 0, b: 1 }, 0.3], ['uniform', { a: 2, b: 10 }, 7], ['uniform', { a: -1, b: 1 }, 0],
];

// Casos del enunciado, escritos en los campos como lo haría un estudiante
const TYPED = [
  { label: 'Normal estándar P(Z < 1.96)', dist: 'normal', params: { mu: 0, sigma: 1 }, x: 1.96, mode: 'le' },
  { label: 'Binomial n=10 p=0.5 P(X = 5)', dist: 'binomial', params: { n: 10, p: 0.5 }, x: 5, mode: 'eq' },
  { label: 'Poisson λ=3 P(X = 2)', dist: 'poisson', params: { lambda: 3 }, x: 2, mode: 'eq' },
];

async function collect() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(ROOT, 'index.html'));
  await page.waitForFunction(() => typeof DISTRIBUTIONS !== 'undefined' && document.getElementById('resMainValue'));
  await page.waitForTimeout(300);

  const result = await page.evaluate(async ({ CASES, TYPED }) => {
    const S = (v) => (typeof v === 'number' ? (Number.isNaN(v) ? 'NaN' : String(v)) : v === undefined ? 'undefined' : v);
    const txt = (id) => (document.getElementById(id) ? document.getElementById(id).textContent.trim() : null);
    const engine = [];
    const ui = [];
    setDecimals(7);

    for (const [dist, params, x] of CASES) {
      const d = DISTRIBUTIONS[dist];
      const rec = { dist, params, x };
      rec.density = S(d.type === 'discrete' ? d.pmf(x, params) : d.pdf(x, params));
      rec.cdf = S(d.cdf(x, params));
      if (d.inv) rec.inv = [0.05, 0.5, 0.95].map((q) => S(d.inv(q, params)));
      const m = d.moments(params);
      rec.moments = Object.fromEntries(Object.entries(m).map(([k, v]) => [k, S(v)]));
      engine.push(rec);

      // Pantalla: fija estado y lee lo que se muestra en cada modo de consulta
      selectDistribution(dist, true);
      state.params = { ...params };
      const step = d.type === 'discrete' ? 2 : 1;
      for (const mode of ['eq', 'le', 'ge', 'interval']) {
        state.x = x; state.b = x + step;
        setQueryMode(mode);
        ui.push({
          dist, params, x, mode,
          main: txt('resMainValue'), pct: txt('resMainPct'),
          left: txt('valLeftTail'), right: txt('valRightTail'),
          mean: txt('qValMean'), variance: txt('qValVar'), sd: txt('qValSD'),
        });
      }
      // Cálculo inverso (P -> x) desde la pantalla
      setQueryMode('le');
      document.getElementById('inputInverseProb').value = '0.95';
      onUserTypedInverseProb();
      ui.push({ dist, params, inverseOf: 0.95, x: document.getElementById('inputTargetX').value });
    }

    const typed = [];
    for (const t of TYPED) {
      selectDistribution(t.dist, true);
      for (const [k, v] of Object.entries(t.params)) {
        const el = document.getElementById('pnum_' + k);
        el.value = String(v);
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }
      setQueryMode(t.mode);
      const xi = document.getElementById('inputTargetX');
      xi.value = String(t.x);
      onUserTypedX();
      typed.push({ label: t.label, main: txt('resMainValue'), pct: txt('resMainPct') });
    }
    return { engine, ui, typed };
  }, { CASES, TYPED });

  await browser.close();
  return result;
}

(async () => {
  const data = await collect();
  if (process.argv.includes('--check')) {
    const base = JSON.parse(fs.readFileSync(OUT, 'utf8'));
    let diffs = 0;
    for (const section of ['engine', 'ui', 'typed']) {
      base[section].forEach((b, i) => {
        const a = JSON.stringify(data[section][i]);
        if (a !== JSON.stringify(b)) {
          diffs++;
          console.log(`DIFERENCIA en ${section}[${i}]\n  antes:   ${JSON.stringify(b)}\n  después: ${a}`);
        }
      });
      if (base[section].length !== data[section].length) { diffs++; console.log(`Cantidad distinta en ${section}`); }
    }
    const total = data.engine.length + data.ui.length + data.typed.length;
    console.log(diffs ? `${diffs} diferencias de ${total} registros` : `OK: ${total} registros idénticos a la línea base`);
    process.exit(diffs ? 1 : 0);
  } else {
    fs.writeFileSync(OUT, JSON.stringify(data, null, 1) + '\n');
    console.log(`Línea base guardada: ${data.engine.length} casos del motor, ${data.ui.length} lecturas de pantalla, ${data.typed.length} casos escritos`);
    for (const t of data.typed) console.log(`  ${t.label}: ${t.main} ${t.pct}`);
  }
})();
