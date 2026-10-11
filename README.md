# ExamHub – Repositorio gratuito de exámenes universitarios

Página estática (HTML + CSS + JS), sin dependencias ni instalación.

## Estructura
- `config.js` → **todo el contenido editable**: nombre, colores, facultades, carreras, exámenes y sección beta.
- `index.html` → estructura de la página.
- `styles.css` → diseño.
- `app.js` → lógica (no necesitas tocarlo).

## Cómo editar
- **Añadir un examen:** en `config.js`, dentro de la carrera, agrega `{ curso: "…", anio: 2025, tipo: "Parcial", enlace: "URL" }`.
- **Cambiar colores:** objeto `TEMA` en `config.js`.
- **Ocultar la beta:** `mostrarBeta: false`.
- **Cambiar facultades/carreras:** edita el arreglo `FACULTADES` (hay 4 facultades y 18 carreras de ejemplo).

## Publicar en GitHub Pages
1. Sube la carpeta a un repositorio nuevo.
2. Settings → Pages → Branch: `main` / carpeta `/root` → Save.
3. Tu página estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

> Nota: los pagos de la sección beta se gestionan por contacto directo (WhatsApp/correo) mientras esté en pruebas.
