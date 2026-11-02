# ProbDist — Sistema de diseño

Calculadora de probabilidad para clase. Debe sentirse **clara, precisa y tranquila**: un instrumento de estudio, no un póster. Lo principal en cada pantalla es el número que el estudiante busca; todo lo demás lo explica.

Todos los valores de este archivo existen como variables CSS en `index.html` (`:root` y `[data-theme="dark"]`). En el código se usan siempre por nombre (`var(--color-primary)`), nunca como valores sueltos.

> Dirección elegida sin referencias externas (la biblioteca UXKIN no estaba conectada). Se basa en el verde original de la app, en WCAG 2.1 AA y en reglas de interfaz para herramientas de cálculo.

---

## 1. Color

Un solo color de acción (verde), un acento (ámbar) para lo que el estudiante seleccionó, y un rojo solo para errores. Neutros con un toque verde para que todo combine.

| Token | Claro | Oscuro | Función |
|---|---|---|---|
| `--color-bg` | `#F4F7F5` | `#0D1310` | Fondo de la página |
| `--color-surface` | `#FFFFFF` | `#141C17` | Tarjetas |
| `--color-surface-sunken` | `#EDF2EE` | `#1B251F` | Paneles dentro de tarjetas, pista del control segmentado, gráfica |
| `--color-border` | `#D5DED8` | `#2A3830` | Bordes decorativos de tarjetas y separadores |
| `--color-border-strong` | `#6F8276` | `#7A9283` | Bordes de campos, interruptores y controles (≥ 3:1) |
| `--color-text` | `#142019` | `#E5EDE7` | Texto principal y números |
| `--color-text-muted` | `#45554B` | `#B3C2B8` | Etiquetas y texto secundario |
| `--color-text-subtle` | `#56675C` | `#9AAC9F` | Pistas, ejes de la gráfica |
| `--color-primary` | `#1D6B44` | `#5CCB92` | Botones principales, enlaces, pestaña activa, curva de la gráfica |
| `--color-primary-hover` | `#165636` | `#79DAA8` | Hover y presionado del botón principal |
| `--color-primary-soft` | `#E2F0E7` | `#173726` | Fondo de opción seleccionada y del resultado |
| `--color-on-primary` | `#FFFFFF` | `#062313` | Texto sobre verde |
| `--color-accent` | `#A24E0A` | `#F0A54E` | Valor `x` seleccionado y región sombreada en la gráfica |
| `--color-accent-soft` | `#FDF1E3` | `#3A260F` | Fondo de notas didácticas |
| `--color-error` | `#B42318` | `#F2867B` | Texto y borde de error |
| `--color-error-soft` | `#FDECEA` | `#3B1714` | Fondo del mensaje de error |
| `--color-focus` | `#1D6B44` | `#79DAA8` | Anillo de foco del teclado |

Contraste verificado (texto ≥ 4.5:1, controles ≥ 3:1) en todas las combinaciones de la tabla; el par más justo es `accent` sobre `surface-sunken` en claro, 5.1:1.

**Reglas**
- El verde marca *lo que se puede tocar* o *lo que está activo*. No se usa como decoración.
- El ámbar solo señala la selección del estudiante (x, intervalo). Nunca botones.
- El rojo solo aparece con un error. Siempre acompañado de texto, nunca color solo.
- Sin degradados ni brillos.

## 2. Tipografía

- **Inter** (variable, OFL, incluida en `vendor/inter`) para toda la interfaz. Funciona sin internet.
- **KaTeX** (incluido) para fórmulas matemáticas. Para fórmulas escritas en HTML se usa `--font-math: KaTeX_Main`.
- **Monoespaciada del sistema** (`ui-monospace`) solo para código LaTeX/ASCII copiable.
- Todos los números usan cifras tabulares (`font-variant-numeric: tabular-nums`) para que no "bailen" al cambiar.

| Token | Tamaño / interlineado | Peso | Uso |
|---|---|---|---|
| `--text-xs` | 12 / 16 | 500 | Ejes de la gráfica, contadores (mínimo absoluto) |
| `--text-sm` | 14 / 20 | 400–600 | Etiquetas de campo, pistas, texto secundario |
| `--text-md` | 16 / 24 | 400 | Texto de lectura, valores de campos |
| `--text-lg` | 18 / 26 | 600 | Títulos de tarjeta |
| `--text-xl` | 22 / 28 | 700 | Título de pantalla (h1) |
| `--text-result` | 40 / 44 | 700 | Valor del resultado principal |

Pesos en uso: 400, 500, 600, 700. Mayúsculas sostenidas no se usan para texto (solo siglas).

## 3. Espaciado y layout

Escala de 4 px: `--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 20 · `--space-6` 24 · `--space-8` 32 · `--space-12` 48.

- Margen lateral en celular: `--space-4` (16 px). Entre tarjetas: `--space-4`. Dentro de tarjetas: `--space-4` (celular) / `--space-6` (escritorio).
- Ancho máximo del contenido: `--content-max` 1120 px.
- **Celular** (< 1024 px): una columna. En Cálculo el orden es: distribución → parámetros → consulta → **resultado** → gráfica → desarrollo.
- **Escritorio** (≥ 1024 px): dos columnas en Cálculo — izquierda: parámetros y consulta; derecha (fija al hacer scroll): resultado y gráfica. Navegación como pestañas en el encabezado.
- Ninguna pantalla puede tener scroll horizontal a 320 px.

## 4. Forma y profundidad

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8 px | Campos, botones, opciones segmentadas |
| `--radius-md` | 12 px | Paneles internos, gráfica |
| `--radius-lg` | 16 px | Tarjetas |
| `--radius-full` | 999 px | Interruptores, indicador de pestaña |
| `--shadow-sm` | `0 1px 2px rgb(20 32 25 / .06)` | Tarjetas |
| `--shadow-md` | `0 6px 20px rgb(20 32 25 / .10)` | Tarjeta de resultado, encabezado fijo |

En modo oscuro las sombras se reemplazan por el borde (`--color-border`).

## 5. Componentes

**Área táctil mínima: 44 × 44 px** en todo lo que se puede tocar. **Foco:** anillo de 2 px `--color-focus` con 2 px de separación (`:focus-visible`), en todos los controles, incluidos los campos.

### Botón
| Variante | Aspecto | Uso |
|---|---|---|
| Principal | Fondo `primary`, texto `on-primary` | Una acción principal por bloque ("Calcular", "Exportar CSV") |
| Secundario | Fondo `surface`, borde `border-strong`, texto `text` | Acciones de apoyo ("Copiar", "Copiar LaTeX") |
| Silencioso | Sin fondo ni borde, texto `primary` | Mostrar/ocultar detalles |
| Ícono | 44 × 44, sin fondo, ícono 20 px, `aria-label` obligatorio | Encabezado, − / + |

Estados: hover (`primary-hover` o `surface-sunken`), foco (anillo), deshabilitado (opacidad .5, `cursor: not-allowed`).

### Campo numérico
- Etiqueta visible arriba (`text-sm`, 600) unida con `<label for>`; pista debajo (`text-sm`, `text-subtle`) unida con `aria-describedby`.
- Caja de 44 px de alto, borde `border-strong`, fondo `surface`, texto `text-md` tabular.
- Botones − / + de 44 × 44 a los lados.
- **Sin límites artificiales:** se acepta cualquier número que tenga sentido matemático. El campo nunca se reescribe mientras se escribe; el valor se valida en cada tecla y se aplica solo si es válido.

### Mensaje de error
- Aparece **debajo del campo** que falla, con ícono de alerta + texto en `color-error` sobre `color-error-soft`, borde izquierdo de 3 px `color-error`.
- El campo recibe `aria-invalid="true"` y borde `color-error`.
- El texto dice **qué está mal y cómo corregirlo**, con el valor escrito: *"p debe estar entre 0 y 1 (sin incluirlos). Escribiste 1.5."*
- Mientras haya un error, la tarjeta de resultado muestra "Corrige los datos marcados para ver el resultado" en lugar de un número viejo.
- Se anuncia con `role="alert"`.

### Tarjeta de resultado
- Fondo `primary-soft`, borde `primary` 1 px, `shadow-md`, radio `lg`.
- Etiqueta de la consulta (`text-sm`, `text-muted`): "P(X ≤ 7)".
- Valor (`text-result`, tabular) + porcentaje (`text-lg`, `text-muted`).
- Línea de sustitución (`text-sm`, mono del sistema).
- Debajo, dos paneles `surface` con cola izquierda y cola derecha.
- Región `aria-live="polite"` para que el lector de pantalla anuncie el nuevo resultado.

### Control segmentado (modo de consulta, decimales, idioma, tema)
Pista `surface-sunken`, opciones de 44 px de alto, opción activa con fondo `surface`, borde `primary` y texto `primary`. Cada opción es un `<button aria-pressed>`.

### Interruptor
`role="switch"` + `aria-checked`, 52 × 32 px visibles dentro de un área de 44 px, pista `border-strong` (apagado) / `primary` (encendido).

### Tarjeta
Fondo `surface`, borde `border`, radio `lg`, `shadow-sm`, padding `space-4`/`space-6`. Título `text-lg` con un ícono opcional de 20 px en `primary`.

### Gráfica
- Fondo `surface-sunken`, curva y barras `primary`, selección `accent`, ejes `text-subtle` (`text-xs`).
- Cada gráfica tiene `role="img"` con un `aria-label` que resume la forma y la selección, y una **tabla de valores** desplegable ("Ver valores de la gráfica").
- Las barras también se pueden elegir con el teclado (flechas ← → sobre la gráfica).

### Navegación
Celular: barra inferior de 4 pestañas (ícono + texto, 56 px de alto), activa en `primary` con indicador `primary-soft`, `aria-current="page"`. Escritorio: las mismas pestañas en el encabezado. Configuración se abre con el engranaje y se cierra con el botón atrás o **Esc**.

## 6. Íconos e imágenes

- Un solo set: íconos de trazo (estilo Lucide), 24 × 24, trazo 1.75 px, `currentColor`, definidos una vez como `<symbol>` en el HTML.
- **Sin emojis** como íconos.
- No hay fotos ni ilustraciones; la única imagen es la gráfica de datos.

## 7. Números

- Probabilidades y momentos: con los decimales elegidos en Configuración (3, 4, 5 o 7). Por defecto 5.
- Porcentajes: siempre 2 decimales.
- Etiquetas rápidas de la gráfica (μ, σ, máximo): 2 decimales.
- Separador decimal: punto. Sin separador de miles. Infinito como `∞`; valor no definido como "No definido".
- Signo menos tipográfico `−` en textos y botones.

## 8. Movimiento

Transiciones de 150 ms solo en color y fondo. Con `prefers-reduced-motion: reduce` se desactivan todas.
