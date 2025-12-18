const malla = {
  "Primer Semestre": [
    {codigo: "CBI111", nombre: "Biología Celular", creditos: 6, prereq: []},
    {codigo: "MAT110", nombre: "Introducción A La Matemática Aplicada", creditos: 6, prereq: []},
    {codigo: "LIC001", nombre: "Fundamento Del Actuar Comunitario", creditos: 4, prereq: []},
    {codigo: "MYF101", nombre: "Morfología Y Función", creditos: 6, prereq: []},
    {codigo: "ENF110", nombre: "Primeros Auxilios", creditos: 2, prereq: []},
    {codigo: "ENF102", nombre: "Introducción A Los Estudios De Enfermería", creditos: 3, prereq: []}
  ],
  "Segundo Semestre": [
    {codigo: "ENF201", nombre: "Enfermería En El Curso De La Vida Humana", creditos: 4, prereq: ["ENF110","ENF102"]},
    {codigo: "CBI202", nombre: "Histoembriología", creditos: 6, prereq: ["CBI111","MYF101"]},
    {codigo: "LIC002", nombre: "Fundamentos Éticos Del Actuar Comunitario", creditos: 3, prereq: ["LIC001"]},
    {codigo: "LCE001", nombre: "Inglés I", creditos: 4, prereq: []},
    {codigo: "CQU203", nombre: "Fundamentos De Química Y Bioquímica Para El Área De La Salud", creditos: 6, prereq: []}
  ],
  "Tercer Semestre": [
    {codigo: "ENF301", nombre: "Procesó De Atención En Enfermería I", creditos: 3, prereq: ["ENF201","MYF101"]},
    {codigo: "MYF302", nombre: "Fisiología General", creditos: 6, prereq: ["MYF101","CBI202"]},
    {codigo: "CBI302", nombre: "Microbiología Y Parasitología Para Enfermería", creditos: 6, prereq: ["CBI111","CQU203"]},
    {codigo: "LIC003", nombre: "Salud Pública Y Políticas Públicas", creditos: 3, prereq: ["LIC001","LIC002"]},
    {codigo: "AES519", nombre: "Bioestadística", creditos: 6, prereq: ["MAT110"]},
    {codigo: "LCE002", nombre: "Inglés II", creditos: 4, prereq: ["LCE001"]}
  ],
  "Cuarto Semestre": [
    {codigo: "ENF401", nombre: "Fisiopatología", creditos: 6, prereq: ["MYF302"]},
    {codigo: "ENF410", nombre: "Fundamentos De Enfermería En Salud Comunitaria", creditos: 6, prereq: ["LIC001","ENF102","ENF201","ENF301"]},
    {codigo: "ENF402", nombre: "Procesó De Atención En Enfermería II", creditos: 5, prereq: ["MYF302","ENF301"]},
    {codigo: "ENF404", nombre: "Farmacología", creditos: 8, prereq: ["MAT110","MYF302"]},
    {codigo: "ENF302", nombre: "Psicología Para El Ejercer De La Enfermería", creditos: 2, prereq: ["ENF301","LIC002"]},
    {codigo: "LIC004", nombre: "Metodologías Participativas E Interacción Comunitaria", creditos: 3, prereq: ["LIC003"]}
  ],
  "Quinto Semestre": [
    {codigo: "ENF500", nombre: "Práctica Integrada I", creditos: 9, prereq: ["ENF302","ENF401","ENF402","ENF404","LCE002","ENF410","LIC004","CBI302"]},
    {codigo: "ENF504", nombre: "Epidemiología", creditos: 4, prereq: ["LIC004","AES519"]},
    {codigo: "ENF506", nombre: "Educación Para La Salud", creditos: 4, prereq: ["LIC004","ENF402","ENF301"]},
    {codigo: "ENF501", nombre: "Salud Y Morbilidad Adulto I", creditos: 6, prereq: ["ENF401","ENF402","ENF404"]},
    {codigo: "LIC005", nombre: "Taller De Intervención Comunitaria Interdisciplinar I", creditos: 3, prereq: ["LIC004","LIC003"]},
    {codigo: "ENF505", nombre: "Gestión Y Administración En Enfermería I", creditos: 4, prereq: ["AES519","ENF402"]}
  ],
  "Sexto Semestre": [
    {codigo: "ENF600", nombre: "Práctica Integrada II", creditos: 9, prereq: ["ENF500","ENF501","ENF505","ENF504","ENF506","LIC005","ENF410"]},
    {codigo: "ENF602", nombre: "Salud Y Morbilidad Adulto II", creditos: 6, prereq: ["ENF501","ENF500"]},
    {codigo: "LIC006", nombre: "Taller De Intervención Comunitaria Interdisciplinar II", creditos: 3, prereq: ["LIC005"]},
    {codigo: "ENF606", nombre: "Bioética", creditos: 4, prereq: ["LIC004","ENF500"]},
    {codigo: "ENF605", nombre: "Gestión Y Administración En Enfermería II", creditos: 4, prereq: ["ENF505"]},
    {codigo: "ENF701", nombre: "Salud Del Adulto Mayor", creditos: 4, prereq: ["ENF501"]}
  ],
  "Séptimo Semestre": [
    {codigo: "ENF700", nombre: "Práctica Integrada III", creditos: 9, prereq: ["ENF600","ENF602","ENF605","ENF506","ENF606","ENF701","ENF410","LIC006"]},
    {codigo: "ENF705", nombre: "Metodología De La Investigación", creditos: 6, prereq: ["ENF606","ENF605","ENF602","ENF600","ENF504","LCE002","LCE001","LIC006","LIC004","AES519"]},
    {codigo: "ENF804", nombre: "Salud Del Niño Y Adolescente I", creditos: 6, prereq: ["ENF602","ENF506","ENF600"]},
    {codigo: "ENF805", nombre: "Enfermería En Urgencias", creditos: 6, prereq: ["ENF602","ENF600","ENF701"]},
    {codigo: "ENF603", nombre: "Enfermería En Salud Mental", creditos: 3, prereq: ["ENF602","ENF302"]}
  ],
  "Octavo Semestre": [
    {codigo: "ENF800", nombre: "Práctica Integrada IV", creditos: 9, prereq: ["ENF603","ENF700","ENF804","ENF805"]},
    {codigo: "ENF904", nombre: "Seminario De Grado", creditos: 3, prereq: ["ENF805","ENF804","ENF705","ENF700","ENF606"]},
    {codigo: "ENF802", nombre: "Salud Del Niño Y El Adolescente II", creditos: 7, prereq: ["ENF804","ENF700"]},
    {codigo: "ENF801", nombre: "Cuidados Paliativos Integrales", creditos: 3, prereq: ["ENF602","ENF804","ENF700"]},
    {codigo: "ENF803", nombre: "Salud Ocupacional Y Ambiental", creditos: 4, prereq: ["ENF602","ENF504"]},
    {codigo: "ENF703", nombre: "Infecciones Y Atención De Salud", creditos: 4, prereq: ["ENF602","ENF600"]}
  ],
  "Noveno Semestre": [
    {codigo: "ENF906", nombre: "Soporte Vital Avanzado Para Personas", creditos: 3, prereq: ["ENF904","ENF803","ENF802","ENF801","ENF800","ENF703"]},
    {codigo: "ENF901", nombre: "Internado I", creditos: 24, prereq: ["ENF904","ENF803","ENF802","ENF801","ENF800","ENF703"]}
  ],
  "Décimo Semestre": [
    {codigo: "ENF903", nombre: "Preparación Examen De Título", creditos: 6, prereq: ["ENF904","ENF803","ENF802","ENF801","ENF800","ENF703","ENF906"]},
    {codigo: "ENF902", nombre: "Internado II", creditos: 24, prereq: ["ENF904","ENF803","ENF802","ENF801","ENF800","ENF703"]}
  ]
};

// Guardar y cargar estado
function guardarEstado() {
  const estado = {};
  document.querySelectorAll("li").forEach(li => {
    estado[li.dataset.codigo] = li.classList.contains("aprobado");
  });
  localStorage.setItem("mallaEnfermeria", JSON.stringify(estado));
}

function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem("mallaEnfermeria") || "{}");
  document.querySelectorAll("li").forEach(li => {
    if (estado[li.dataset.codigo]) li.classList.add("aprobado");
  });
}

// Desbloqueo
function actualizarDesbloqueo() {
  document.querySelectorAll("li").forEach(li => {
    const prereq = li.dataset.prereq ? li.dataset.prereq.split(",") : [];
    const aprobado = prereq.every(r => document.querySelector(`li[data-codigo="${r}"]`)?.classList.contains("aprobado"));
    if (aprobado || prereq.length === 0) {
      li.classList.remove("bloqueado");
      li.classList.add("desbloqueado");
      li.style.pointerEvents = "auto";
    } else {
      li.classList.add("bloqueado");
      li.classList.remove("desbloqueado");
      li.style.pointerEvents = "none";
    }
  });
}

// Crear malla
const mallaGrid = document.getElementById("malla-grid");
for (let semestre in malla) {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${semestre}</h2><ul></ul>`;
  const ul = div.querySelector("ul");

  malla[semestre].forEach(ramo => {
    const li = document.createElement("li");
    li.textContent = `${ramo.codigo} - ${ramo.nombre} (${ramo.creditos} créditos)`;
    li.dataset.codigo = ramo.codigo;
    li.dataset.prereq = ramo.prereq.join(",");
    li.classList.add("bloqueado");

    li.addEventListener("click", () => {
      if (!li.classList.contains("bloqueado")) {
        li.classList.toggle("aprobado");
        guardarEstado();
        actualizarDesbloqueo();
      }
    });

    ul.appendChild(li);
  });

  mallaGrid.appendChild(div);
}

// Reiniciar
document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("mallaEnfermeria");
  document.querySelectorAll("li").forEach(li => li.classList.remove("aprobado"));
  actualizarDesbloqueo();
});

// Inicializar
cargarEstado();
actualizarDesbloqueo();
