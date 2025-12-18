alert("SCRIPT V2 FUNCIONA"); document.addEventListener("DOMContentLoaded", () => {

  const ramos = [

    // ===== SEMESTRE 1 =====
    { id: "CBI111", nombre: "Biología Celular (6 créditos)", aprobado: false, prerequisitos: [] },
    { id: "MAT110", nombre: "Introducción a la Matemática Aplicada (6 créditos)", aprobado: false, prerequisitos: [] },
    { id: "LIC001", nombre: "Fundamento del Actuar Comunitario (4 créditos)", aprobado: false, prerequisitos: [] },
    { id: "MYF101", nombre: "Morfología y Función (6 créditos)", aprobado: false, prerequisitos: [] },
    { id: "ENF110", nombre: "Primeros Auxilios (2 créditos)", aprobado: false, prerequisitos: [] },
    { id: "ENF102", nombre: "Introducción a los Estudios de Enfermería (3 créditos)", aprobado: false, prerequisitos: [] },

    // ===== SEMESTRE 2 =====
    { id: "ENF201", nombre: "Enfermería en el Curso de la Vida Humana (4 créditos)", aprobado: false, prerequisitos: ["ENF110", "ENF102"] },
    { id: "CBI202", nombre: "Histoembriología (6 créditos)", aprobado: false, prerequisitos: ["CBI111", "MYF101"] },
    { id: "LIC002", nombre: "Fundamentos Éticos del Actuar Comunitario (3 créditos)", aprobado: false, prerequisitos: ["LIC001"] },
    { id: "LCE001", nombre: "Inglés I (4 créditos)", aprobado: false, prerequisitos: [] },
    { id: "CQU203", nombre: "Fundamentos de Química y Bioquímica para el Área de la Salud (6 créditos)", aprobado: false, prerequisitos: [] }

  ];

  function puedeDesbloquear(ramo) {
    return ramo.prerequisitos.every(id =>
      ramos.find(r => r.id === id && r.aprobado)
    );
  }

  function render() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    ramos.forEach(ramo => {
      const bloqueado = ramo.prerequisitos.length > 0 && !puedeDesbloquear(ramo);

      const boton = document.createElement("button");
      boton.textContent =
        `${ramo.id} – ${ramo.nombre}` +
        (ramo.aprobado ? " ✅" : bloqueado ? " 🔒" : "");

      boton.disabled = bloqueado;

      boton.onclick = () => {
        ramo.aprobado = true;
        render();
      };

      contenedor.appendChild(boton);
    });
  }

  render();
});
