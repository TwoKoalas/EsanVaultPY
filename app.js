const $ = (id) => document.getElementById(id);
const estado = { facultad: FACULTADES[0].id, carrera: null, busqueda: "" };

/* Tema y textos */
Object.entries(TEMA).forEach(([k, v]) => document.documentElement.style.setProperty(`--${k}`, v));
document.title = `${SITE.nombre} · Exámenes universitarios`;
$("brand").textContent = SITE.nombre;
$("hero-title").textContent = SITE.titulo;
$("hero-sub").textContent = SITE.subtitulo;
$("aportar-txt").textContent = SITE.aportarTexto;
$("aportar-btn").textContent = SITE.aportarBoton;
$("aportar-btn").href = SITE.contacto;
$("footer").textContent = SITE.footer;

/* Facultades */
function pintarTabs() {
  $("tabs").innerHTML = FACULTADES.map(f =>
    `<button role="tab" class="tab ${f.id === estado.facultad ? "on" : ""}" data-id="${f.id}">
       <span>${f.emoji}</span> ${f.nombre}</button>`).join("");
  $("tabs").querySelectorAll(".tab").forEach(b => b.onclick = () => {
    estado.facultad = b.dataset.id; estado.carrera = null; estado.busqueda = ""; $("buscador").value = "";
    pintar();
  });
}

/* Carreras */
function pintarCarreras() {
  const fac = FACULTADES.find(f => f.id === estado.facultad);
  $("carreras").innerHTML = fac.carreras.map(c =>
    `<button class="chip ${c.nombre === estado.carrera ? "on" : ""}" data-n="${c.nombre}">
       ${c.nombre} <small>${c.examenes.length}</small></button>`).join("");
  $("carreras").querySelectorAll(".chip").forEach(b => b.onclick = () => {
    estado.carrera = estado.carrera === b.dataset.n ? null : b.dataset.n; pintar();
  });
}

/* Exámenes */
function pintarExamenes() {
  const q = estado.busqueda.toLowerCase();
  let lista = [];
  FACULTADES.forEach(f => {
    if (!q && f.id !== estado.facultad) return;
    f.carreras.forEach(c => {
      if (!q && estado.carrera && c.nombre !== estado.carrera) return;
      c.examenes.forEach(e => lista.push({ ...e, carrera: c.nombre }));
    });
  });
  if (q) lista = lista.filter(e => `${e.curso} ${e.carrera} ${e.anio} ${e.tipo}`.toLowerCase().includes(q));
  lista.sort((a, b) => b.anio - a.anio);

  $("examenes").innerHTML = lista.length
    ? lista.map(e => `<a class="examen" href="${e.enlace}" target="_blank" rel="noopener">
        <strong>${e.curso}</strong>
        <span>${e.carrera}</span>
        <em>${e.tipo} · ${e.anio}</em></a>`).join("")
    : `<p class="vacio">Aún no hay exámenes aquí. <a href="#aportar">Sé la primera persona en subir uno.</a></p>`;
}

function pintar() { pintarTabs(); pintarCarreras(); pintarExamenes(); }
$("buscador").oninput = (e) => { estado.busqueda = e.target.value.trim(); pintarExamenes(); };

/* Beta */
if (!SITE.mostrarBeta) { $("beta").remove(); $("nav-beta").remove(); }
else {
  $("beta-desc").textContent = BETA.descripcion;
  $("beta-grid").innerHTML = BETA.items.map(i =>
    `<article class="oferta">
       <small>${i.tipo}</small>
       <h3>${i.titulo}</h3>
       <p>${i.detalle}</p>
       <div><b>${i.precio}</b><a class="btn sm" href="${i.enlace}" target="_blank" rel="noopener">Consultar</a></div>
     </article>`).join("");
}

pintar();
