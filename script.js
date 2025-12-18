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
  const div = document.getElementById("malla");
  div.innerHTML = "";

  ramos.forEach(ramo => {
    const bloqueado = !puedeDesbloquear(ramo) && ramo.prerequisitos.length > 0;

    const btn = document.createElement("button");
    btn.textContent = ramo.nombre + (ramo.aprobado ? " ✅" : bloqueado ? " 🔒" : "");
    btn.disabled = bloqueado;

    btn.onclick = () => {
      ramo.aprobado = true;
      render();
    };

    div.appendChild(btn);
    div.appendChild(document.createElement("br"));
  });
}

render();
