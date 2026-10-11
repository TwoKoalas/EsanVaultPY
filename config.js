/* ============================================================
   CONFIGURACIÓN — edita solo este archivo para cambiar el contenido.
   ============================================================ */

const SITE = {
  nombre: "ExamHub",
  titulo: "Exámenes universitarios, gratis y ordenados",
  subtitulo: "Practica con pruebas reales de años anteriores. Elige tu facultad y tu carrera.",
  contacto: "https://wa.me/51999999999",   // WhatsApp, correo (mailto:...) o formulario
  aportarTexto: "Envíanos tus exámenes resueltos o sin resolver y ayuda a otros estudiantes.",
  aportarBoton: "Enviar un examen",
  footer: "© 2026 ExamHub · Proyecto estudiantil sin fines de lucro",
  mostrarBeta: true                         // false = oculta toda la sección beta
};

/* Colores: cámbialos aquí y se aplican a toda la página */
const TEMA = {
  fondo: "#F4F6FA",
  tinta: "#16213A",
  acento: "#2F5BEA",
  beta: "#E8A317"
};

/* ------------------------------------------------------------
   FACULTADES → CARRERAS → EXÁMENES
   Para añadir un examen, copia una línea dentro de "examenes".
   "enlace" puede ser Google Drive, Dropbox o un PDF en /pdfs/
   ------------------------------------------------------------ */
const FACULTADES = [
  {
    id: "ingenieria", nombre: "Ingeniería", emoji: "⚙️",
    carreras: [
      { nombre: "Ingeniería Civil", examenes: [
        { curso: "Estática", anio: 2025, tipo: "Parcial", enlace: "#" },
        { curso: "Mecánica de Suelos", anio: 2024, tipo: "Final", enlace: "#" }
      ]},
      { nombre: "Ingeniería de Sistemas", examenes: [
        { curso: "Estructura de Datos", anio: 2025, tipo: "Parcial", enlace: "#" }
      ]},
      { nombre: "Ingeniería Industrial", examenes: [] },
      { nombre: "Ingeniería Electrónica", examenes: [] },
      { nombre: "Ingeniería Mecánica", examenes: [] }
    ]
  },
  {
    id: "salud", nombre: "Ciencias de la Salud", emoji: "🩺",
    carreras: [
      { nombre: "Medicina Humana", examenes: [
        { curso: "Anatomía I", anio: 2025, tipo: "Final", enlace: "#" }
      ]},
      { nombre: "Enfermería", examenes: [] },
      { nombre: "Odontología", examenes: [] },
      { nombre: "Psicología", examenes: [] },
      { nombre: "Nutrición", examenes: [] }
    ]
  },
  {
    id: "economia", nombre: "Economía y Negocios", emoji: "📊",
    carreras: [
      { nombre: "Administración", examenes: [] },
      { nombre: "Contabilidad", examenes: [] },
      { nombre: "Economía", examenes: [] },
      { nombre: "Marketing", examenes: [] }
    ]
  },
  {
    id: "humanidades", nombre: "Humanidades y Derecho", emoji: "⚖️",
    carreras: [
      { nombre: "Derecho", examenes: [] },
      { nombre: "Comunicaciones", examenes: [] },
      { nombre: "Educación", examenes: [] },
      { nombre: "Arquitectura", examenes: [] }
    ]
  }
];

/* ------------------------------------------------------------
   SECCIÓN BETA — asesorías y material premium (modo prueba)
   ------------------------------------------------------------ */
const BETA = {
  descripcion: "Estamos probando esta sección. Todo el repositorio de exámenes sigue siendo gratis.",
  items: [
    { tipo: "Asesoría", titulo: "Asesoría 1 a 1 de Cálculo", detalle: "Sesión de 60 min por videollamada.", precio: "S/ 25", enlace: "https://wa.me/51999999999" },
    { tipo: "Asesoría", titulo: "Taller grupal pre-examen", detalle: "Repaso intensivo de 2 horas.", precio: "S/ 15", enlace: "https://wa.me/51999999999" },
    { tipo: "Material", titulo: "Pack de 30 exámenes resueltos", detalle: "PDF con soluciones paso a paso.", precio: "S/ 12", enlace: "#" },
    { tipo: "Material", titulo: "Resúmenes y formularios", detalle: "Material de estudio condensado.", precio: "S/ 8", enlace: "#" }
  ]
};
