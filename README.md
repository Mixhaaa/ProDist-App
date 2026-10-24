# 🌿 ProbDist Pro — Calculadora & Formulario de Distribuciones de Probabilidad (Terra Edition)

[https://img.shields.io/badge/versi%C3%B3n-5.9.1_Pro-2e6f40]
[https://img.shields.io/badge/distribuciones-18_modelos-3d8c52]
[https://img.shields.io/badge/precisi%C3%B3n-IEEE_754-d97706]
[https://img.shields.io/badge/idioma-Espa%C3%B1ol_%7C_English-1b291e]
[https://img.shields.io/badge/licencia-MIT-blue]

**ProbDist Pro (Terra Edition)** es una aplicación móvil e interactiva diseñada para el cálculo exacto, la visualización gráfica y la enseñanza de **18 distribuciones de probabilidad** (discretas y continuas) en cursos de estadística de colegio, universidad e ingeniería.

Inspirada en los applets estadísticos de [Matthew Bognar, Ph.D. (University of Iowa)](https://mabognar.github.io/apps/) y fundamentada en las recomendaciones pedagógicas [GAISE de la American Statistical Association](https://www.amstat.org/docs/default-source/amstat-documents/gaisecollege_full.pdf), la aplicación combina un motor numérico de alta precisión en tiempo real con el sistema de diseño orgánico **Terra Natural / Terra Nocturno** creado en [Google Stitch](https://stitch.withgoogle.com/).

## ✨ Características Principales

* **Cálculo Bidireccional en Tiempo Real ($x \leftrightarrow P$)**: Evalúa probabilidades puntuales $P(X = x)$, funciones de densidad $f(x)$, colas izquierdas $P(X \le x)$, colas derechas $P(X \ge x)$ e intervalos cerrados $P(a \le X \le b)$, o ingresa directamente una probabilidad acumulada $P \in (0, 1)$ para obtener el **percentil / cuantil inverso $x$**.
* **Gráficas SVG Interactivas con Curva Envolvente**: Representación dinámica de funciones de masa (`PMF`), densidad (`PDF`) y distribución acumulada (`CDF F(x)`), con selección táctil directa sobre cada barra o punto de la curva.
* **Desarrollo Matemático Paso a Paso en $\LaTeX$**: Desglosa la sustitución numérica exacta de los parámetros activos en la fórmula teórica e incluye la **aproximación Normal con corrección por continuidad de Yates ($\pm 0.5$)** para modelos discretos.
* **Formulario Científico en Formato Cuaderno ($\LaTeX$ y ASCII)**: Renderizado tipográfico mediante [KaTeX](https://katex.org/) y motor matemático nativo sin conexión, con botón para copiar el código fuente $\LaTeX$ puro para diapositivas o exámenes, y modo alternativo en sintaxis ASCII para Python, R o Excel.
* **Laboratorio de Momentos y Banda Empírica $2\sigma$**: Visualización del intervalo $\mu \pm 2\sigma$ ($\approx 95.45\%$ de masa), cálculo en vivo de Esperanza $E[X]$, Varianza $\text{Var}(X)$, Desviación Estándar $\sigma$, Coeficiente de Variación ($CV$) y medidores morfológicos de **Asimetría ($\gamma_1$)** y **Curtosis ($\gamma_2$)**.
* **Diseño Ergonómico *Terra* y Soporte Bilingüe (`ES` / `EN`)**: Alternancia instantánea entre **Terra Natural** (modo claro estilo cuaderno botánico) y **Terra Nocturno** (modo oscuro OLED diseñado para reducir la fatiga visual), además de traducción completa entre Español e Inglés.

## 📊 Catálogo de las 18 Distribuciones Incluidas

| Modelo | Tipo | Notación | Parámetros | Aplicación Principal en Ingeniería y Aula |
| :--- | :--- | :--- | :--- | :--- |
| **Binomial** | Discreta | $X \sim \text{Bin}(n, p)$ | $n \in \mathbb{N},\; p \in [0,1]$ | Conteo de éxitos en $n$ ensayos de Bernoulli independientes con reemplazo. |
| **Poisson** | Discreta | $X \sim \text{Pois}(\lambda)$ | $\lambda > 0$ | Conteo de eventos en intervalos fijos de tiempo o espacio a tasa constante $\lambda$. |
| **Geométrica (I)** | Discreta | $X \sim \text{Geom}_I(p)$ | $p \in (0,1]$ | Número de **fracasos** ($x = 0, 1, 2, \dots$) antes de conseguir el primer éxito. |
| **Geométrica (II)** | Discreta | $X \sim \text{Geom}_{II}(p)$ | $p \in (0,1]$ | Número total de **ensayos** ($x = 1, 2, 3, \dots$) necesarios hasta el primer éxito. |
| **Hipergeométrica** | Discreta | $X \sim \text{Hyper}(N, M, n)$ | $N, M, n \in \mathbb{N}$ | Muestreo **sin reemplazo** en auditoría de lotes finitos y control de calidad. |
| **Binomial Negativa (I)** | Discreta | $X \sim \text{NB}_I(r, p)$ | $r \in \mathbb{N},\; p \in (0,1]$ | Número total de **ensayos** ($x \ge r$) hasta acumular exactamente $r$ éxitos. |
| **Binomial Negativa (II)** | Discreta | $X \sim \text{NB}_{II}(r, p)$ | $r \in \mathbb{N},\; p \in (0,1]$ | Número de **fracasos** ($x \ge 0$) ocurridos antes de alcanzar el $r$-ésimo éxito. |
| **Normal / Gaussiana** | Continua | $X \sim \text{N}(\mu, \sigma)$ | $\mu \in \mathbb{R},\; \sigma > 0$ | Teorema Central del Límite, errores de medición, biometría y estandarización $Z$. |
| **t de Student** | Continua | $X \sim t(\nu)$ | $\nu = \text{df} > 0$ | Inferencia sobre la media poblacional en muestras pequeñas con $\sigma$ desconocida. |
| **Chi-Cuadrada ($\chi^2$)** | Continua | $X \sim \chi^2(k)$ | $k = \text{df} > 0$ | Pruebas de bondad de ajuste de Pearson, tablas de contingencia y varianza $\sigma^2$. |
| **F de Snedecor** | Continua | $X \sim \text{F}(d_1, d_2)$ | $d_1 > 0,\; d_2 > 0$ | Análisis de Varianza (ANOVA) y comparación del cociente de dos varianzas. |
| **Exponencial** | Continua | $X \sim \text{Exp}(\lambda)$ | $\lambda > 0$ | Tiempo de espera entre eventos de Poisson continuos (propiedad sin memoria). |
| **Gamma** | Continua | $X \sim \text{Gamma}(\alpha, \beta)$ | $\alpha > 0,\; \beta > 0$ | Tiempo total de espera hasta que ocurren $\alpha$ eventos en un proceso de Poisson. |
| **Weibull** | Continua | $X \sim \text{Weibull}(\alpha, \beta)$ | $\alpha > 0,\; \beta > 0$ | Ingeniería de confiabilidad, fatiga de materiales y análisis de supervivencia. |
| **Beta** | Continua | $X \sim \text{Beta}(\alpha, \beta)$ | $\alpha > 0,\; \beta > 0$ | Modelado de proporciones y porcentajes en $[0, 1]$ e inferencia bayesiana ($a\text{ priori}$). |
| **Log-Normal** | Continua | $X \sim \text{LogN}(\mu, \sigma)$ | $\mu \in \mathbb{R},\; \sigma > 0$ | Retornos de activos financieros, distribución de ingresos y procesos multiplicativos. |
| **Pareto (Tipo I)** | Continua | $X \sim \text{Pareto}(m, \alpha)$ | $m > 0,\; \alpha > 0$ | Fenómenos de cola pesada, regla 80/20 de Pareto y riesgos extremos en seguros. |
| **Uniforme Continua** | Continua | $X \sim \text{Unif}(a, b)$ | $a < b$ | Equiprobabilidad en un intervalo cerrado $[a, b]$ y simulación Monte Carlo. |

## 🧭 Estructura de Pantallas de la Aplicación

1. **`Cálculo` (Calculadora Interactiva)**: Tarjeta de identidad del modelo, gráfica interactiva `PMF/PDF` y `CDF`, controles de parámetros con botones paso a paso (`−`/`+`) y deslizadores, selector de consulta (`P(X=x)`, `P(X≤x)`, `P(X≥x)`, `a≤X≤b`), buscador de percentiles inversos, tarjeta de resultado con colas acumuladas y acordeón desplegable de resolución paso a paso.
2. **`Fórmulas` (Formulario Científico $\LaTeX$)**: Apunte teórico en formato cuaderno con ecuaciones renderizadas en $\LaTeX$, identidad combinatoria o de estandarización, código $\LaTeX$ copiable, recuadro de dominio (*"DONDE:"*) y lista de supuestos clave (*Regla de Oro*).
3. **`Momentos` (Momentos Botánicos y Rango $2\sigma$)**: Gráfica de campana empírica con sombreado del intervalo $[\mu - 2\sigma, \mu + 2\sigma]$, tarjetas de Esperanza, Varianza, Desviación Estándar y Coeficiente de Variación, barras de Asimetría ($\gamma_1$) y Curtosis ($\gamma_2$), nota de control estadístico de procesos y exportación a `.csv` o $\LaTeX$.
4. **`Catálogo` (Explorador de Modelos)**: Árbol de decisión desplegable para elegir la distribución adecuada según el problema, buscador en tiempo real y filtros por categoría (**Todas**, **Discretas**, **Continuas**, **Ingeniería & Inferencia**).
5. **`Configuración` (`⚙️`)**: Selector de tema (**Terra Natural** vs. **Terra Nocturno**), contraste reforzado para fórmulas, selector de idioma (**Español** / **English**), precisión decimal configurable (**3, 4, 5 o 7 decimales**), interruptor de **Corrección de Yates ($\pm 0.5$)** y selector de formato de fórmulas (**Cuaderno $\LaTeX$** vs. **Código ASCII**).

## 🧮 Arquitectura del Motor Numérico

El núcleo matemático está escrito en JavaScript puro bajo precisión de doble punto flotante **IEEE 754**, sin dependencias pesadas de servidor:

* **Función Log-Gamma de Lanczos ($\ln\Gamma(z)$)**: Aproximación de 9 términos con reflexión de Euler para evaluar factoriales y combinatorias $\binom{n}{x} = \exp(\ln\Gamma(n+1) - \ln\Gamma(x+1) - \ln\Gamma(n-x+1))$ sin desbordamiento numérico incluso para tamaños de muestra grandes ($n = 200$).
* **Funciones Especiales Regularizadas**: Evaluación de la función Gamma incompleta inferior $P(a, x)$ mediante desarrollo en serie y fracciones continuas de Lentz (para **Gamma** y **Chi-Cuadrada**), y de la función Beta incompleta regularizada $I_x(a, b)$ (para **Beta**, **t de Student** y **F de Snedecor**).
* **Cuantiles Inversos ($F^{-1}(p)$)**: Aproximación racional de Acklam para la inversa de la Normal estándar $\Phi^{-1}(p)$ combinada con bisección monótona de alta precisión ($10^{-9}$) para distribuciones continuas y búsqueda acumulada exacta para modelos discretos.

## 🚀 Instalación y Despliegue

### 1. Ejecución Directa en Navegador o GitHub Pages

La aplicación está empaquetada en un único archivo autónomo (`probdist_stitch_terra_app.html`), por lo que no requiere pasos de compilación:

```bash
# Clonar el repositorio
git clone [https://github.com/tu-usuario/probdist-pro-terra.git](https://github.com/tu-usuario/probdist-pro-terra.git)
cd probdist-pro-terra

# Renombrar a index.html si deseas publicarlo directamente en GitHub Pages
cp probdist_stitch_terra_app.html index.html
