document.addEventListener("DOMContentLoaded", () => {

  const ramos = [
  { id: "CBI111", nombre: "Biología Celular (6 créditos)", aprobado: false, prerequisitos: [] },
  { id: "MAT110", nombre: "Introducción a la Matemática Aplicada (6 créditos)", aprobado: false, prerequisitos: [] },
  { id: "LIC001", nombre: "Fundamento del Actuar Comunitario (4 créditos)", aprobado: false, prerequisitos: [] },
  { id: "MYF101", nombre: "Morfología y Función (6 créditos)", aprobado: false, prerequisitos: [] },
  { id: "ENF110", nombre: "Primeros Auxilios (2 créditos)", aprobado: false, prerequisitos: [] },
  { id: "ENF102", nombre: "Introducción a los Estudios de Enfermería (3 créditos)", aprobado: false, prerequisitos: [] }
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
        ramo.nombre +
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
