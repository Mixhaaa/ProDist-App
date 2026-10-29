# 🌿 ProbDist Pro — Calculadora & Formulario de Distribuciones de Probabilidad (Terra Edition)

<p align="center"><img src="icons/icon-192.png" width="96" alt="Icono de ProbDist Pro" /></p>

[![Abrir app](https://img.shields.io/badge/▶_Abrir_app-en_el_navegador-2e6f40?style=for-the-badge)](https://mixhaaa.github.io/ProDist-App/)
[![Descargar APK](https://img.shields.io/badge/⬇_Descargar-APK_Android-3d8c52?style=for-the-badge&logo=android&logoColor=white)](https://github.com/Mixhaaa/ProDist-App/releases/latest/download/ProbDist-Pro.apk)

![versión](https://img.shields.io/badge/versi%C3%B3n-5.9.1_Pro-2e6f40)
![distribuciones](https://img.shields.io/badge/distribuciones-18_modelos-3d8c52)
![precisión](https://img.shields.io/badge/precisi%C3%B3n-IEEE_754-d97706)
![idioma](https://img.shields.io/badge/idioma-Espa%C3%B1ol_%7C_English-1b291e)
![licencia](https://img.shields.io/badge/licencia-MIT-blue)
[![Android APK](https://github.com/Mixhaaa/ProDist-App/actions/workflows/android-apk.yml/badge.svg)](https://github.com/Mixhaaa/ProDist-App/actions/workflows/android-apk.yml)

**ProbDist Pro (Terra Edition)** es una aplicación web y Android interactiva diseñada para el cálculo exacto, la visualización gráfica y la enseñanza de **18 distribuciones de probabilidad** (discretas y continuas) en cursos de estadística de colegio, universidad e ingeniería.

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
* **Normal Estándar $\Phi(z)$**: Calculada a partir de la función Gamma incompleta ($\text{erf}(x) = P(\tfrac12, x^2)$), con precisión de ~$10^{-15}$ incluso en las colas extremas.
* **Cuantiles Inversos ($F^{-1}(p)$)**: Aproximación racional de Acklam para la inversa de la Normal estándar $\Phi^{-1}(p)$ combinada con bisección monótona de alta precisión ($10^{-9}$) para distribuciones continuas y búsqueda acumulada exacta para modelos discretos.

## 🚀 Cómo usar la app

### 📱 Opción 1 — Instalar el APK en Android

1. Desde el celular, descarga **[ProbDist-Pro.apk](https://github.com/Mixhaaa/ProDist-App/releases/latest/download/ProbDist-Pro.apk)** (también está en la sección [Releases](https://github.com/Mixhaaa/ProDist-App/releases)).
2. Abre el archivo descargado. Android te pedirá permitir **"Instalar apps desconocidas"** para tu navegador o gestor de archivos: acéptalo.
3. Toca **Instalar**. La app aparecerá en tu menú como **ProbDist Pro** y funciona **sin internet**.

> El APK se genera automáticamente con **GitHub Actions** cada vez que se sube un cambio a `main` (ver [`.github/workflows/android-apk.yml`](.github/workflows/android-apk.yml)). Está firmado con una clave de depuración: sirve para instalar y compartir, pero no para publicar en Google Play.

### 🌐 Opción 2 — Usarla en el navegador (GitHub Pages)

Abre **https://mixhaaa.github.io/ProDist-App/** desde cualquier computadora o celular.
En Chrome para Android también puedes tocar **⋮ → Agregar a la pantalla principal / Instalar app**: queda como una app más y funciona sin conexión.

### 💻 Opción 3 — Ejecutarla en tu computadora

Es un sitio estático: basta con abrir `index.html` en el navegador. Para probar también el modo sin conexión, sírvela con un servidor local:

```bash
git clone https://github.com/Mixhaaa/ProDist-App.git
cd ProDist-App
python3 -m http.server 8080   # luego abre http://localhost:8080
```

## 🗂️ Estructura del Proyecto

```text
ProDist-App/
├── index.html                  # La app completa (HTML + CSS + motor numérico en JavaScript)
├── manifest.webmanifest        # Datos para instalarla como app (nombre, iconos, colores)
├── sw.js                       # Service worker: guarda la app para usarla sin internet
├── icons/                      # Iconos de la app web
├── vendor/katex/               # KaTeX incluido localmente (fórmulas LaTeX sin conexión)
├── assets/                     # Icono y pantalla de inicio para generar los recursos Android
├── capacitor.config.json       # Configuración de Capacitor (empaqueta la web como app Android)
├── package.json                # Dependencias y scripts para compilar el APK
├── scripts/build-web.mjs       # Copia los archivos web a www/ antes de empaquetar
└── .github/workflows/
    └── android-apk.yml         # Compila el APK y lo publica en Releases
```

## 🔧 Compilar el APK manualmente (opcional)

Solo si quieres compilarlo en tu PC en lugar de usar GitHub Actions. Requiere **Node.js 22+**, **JDK 21** y **Android Studio** (Android SDK 36).

```bash
npm install
npm run android:add      # genera la carpeta android/
npm run android:icons    # crea iconos y pantalla de inicio a partir de assets/
cd android && ./gradlew assembleDebug
# APK resultante: android/app/build/outputs/apk/debug/app-debug.apk
```

Después de modificar `index.html`, ejecuta `npm run android:sync` para actualizar la app Android.

## 📚 Referencias

* Bognar, M. — [Statistical applets, University of Iowa](https://mabognar.github.io/apps/).
* American Statistical Association — [GAISE College Report](https://www.amstat.org/docs/default-source/amstat-documents/gaisecollege_full.pdf).
* Press, W. H. et al. — *Numerical Recipes*, 3.ª ed. (funciones Gamma y Beta incompletas, fracciones continuas de Lentz).
* Acklam, P. J. — Algoritmo para la inversa de la distribución Normal.

## 📄 Licencia

Distribuido bajo la licencia **MIT** — ver [`LICENSE`](LICENSE). KaTeX se incluye bajo su propia licencia MIT ([`vendor/katex/LICENSE`](vendor/katex/LICENSE)).

Autor: [@Mixhaaa](https://github.com/Mixhaaa)
