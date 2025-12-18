document.addEventListener("DOMContentLoaded", () => {

  const ramos = [
    { id: "anatomia", nombre: "Anatomía", aprobado: false, prerequisitos: [] },
    { id: "fisiologia", nombre: "Fisiología", aprobado: false, prerequisitos: ["anatomia"] },
    { id: "farmacologia", nombre: "Farmacología", aprobado: false, prerequisitos: ["fisiologia"] }
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
