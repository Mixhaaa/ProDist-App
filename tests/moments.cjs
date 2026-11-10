// Comprueba media, varianza, asimetría y curtosis de las 18 distribuciones contra la
// integración/suma numérica de su propia pmf/pdf.  Uso: node tests/moments.cjs
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + require('path').resolve(__dirname, '..', 'index.html')); await p.waitForFunction(() => typeof DISTRIBUTIONS !== 'undefined');
  const out = await p.evaluate(() => {
    const cases = { binomial:{n:12,p:0.3}, poisson:{lambda:4}, geometric1:{p:0.3}, geometric2:{p:0.3}, hypergeometric:{N:30,M:8,n:10}, negbin1:{r:3,p:0.4}, negbin2:{r:3,p:0.4},
      normal:{mu:1,sigma:2}, t:{df:12}, chisquare:{df:6}, f:{df1:5,df2:40}, exponential:{lambda:1.5}, gamma:{alpha:3,beta:2}, weibull:{alpha:1.5,beta:2}, beta:{alpha:2,beta:5}, lognormal:{mu:0,sigma:0.4}, pareto:{m:1,alpha:12}, uniform:{a:1,b:4} };
    const res = [];
    for (const [id, pr] of Object.entries(cases)) {
      const d = DISTRIBUTIONS[id]; let m = [0,0,0,0,0];
      const acc = (x, w) => { let t = w; for (let i = 0; i < 5; i++) { m[i] += t; t *= x; } };
      if (d.type === 'discrete') { for (let k = 0; k < 3000; k++) acc(k, d.pmf(k, pr)); }
      else { // integrate via quantile transform is unavailable for all; use wide Simpson grid
        let lo, hi; const mm = d.moments(pr); const sd = mm.sd;
        if (id === 'beta') { lo = 0; hi = 1; } else if (id === 'uniform') { lo = pr.a; hi = pr.b; } else if (id === 'pareto') { lo = pr.m; hi = 4000; } else if (id === 'normal' || id === 't') { lo = mm.mean - 60 * sd; hi = mm.mean + 60 * sd; } else { lo = 1e-12; hi = mm.mean + 400 * sd; }
        const N = 2000000, h = (hi - lo) / N;
        for (let i = 0; i <= N; i++) { const x = lo + i * h; const w = (i === 0 || i === N ? 1 : i % 2 ? 4 : 2) * h / 3; const f = d.pdf(x, pr); if (Number.isFinite(f)) acc(x, w * f); }
      }
      const mu = m[1] / m[0], v = m[2] / m[0] - mu * mu;
      const c3 = m[3] / m[0] - 3 * mu * m[2] / m[0] + 2 * mu ** 3, c4 = m[4] / m[0] - 4 * mu * m[3] / m[0] + 6 * mu * mu * m[2] / m[0] - 3 * mu ** 4;
      const num = { mean: mu, variance: v, skew: c3 / v ** 1.5, kurt: c4 / (v * v) - 3 }; const th = d.moments(pr);
      const bad = Object.keys(num).filter(k => Math.abs(num[k] - th[k]) > 2e-3 * Math.max(1, Math.abs(num[k])));
      res.push(`${bad.length ? 'DIFF ' + bad.join(',') : 'ok  '} ${id} mass=${m[0].toFixed(5)} ` + Object.keys(num).map(k => `${k}: ${th[k].toFixed(4)}/${num[k].toFixed(4)}`).join('  '));
    }
    return res;
  });
  console.log(out.join('\n')); await b.close();
  if (out.some(l => l.startsWith('DIFF'))) process.exit(1);
})();
