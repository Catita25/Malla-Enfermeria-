// Malla completa (usa la versión completa de los 10 semestres)
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
  // ... agrega los demás semestres igual
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

// Desbloqueo de ramos
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
      li.classList.toggle("aprobado");
      guardarEstado();
      actualizarDesbloqueo();
    });

    ul.appendChild(li);
  });

  mallaGrid.appendChild(div);
}

// Reiniciar malla
document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("mallaEnfermeria");
  document.querySelectorAll("li").forEach(li => li.classList.remove("aprobado"));
  actualizarDesbloqueo();
});

// Inicializar
cargarEstado();
actualizarDesbloqueo();
