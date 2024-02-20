// const mapa = document.getElementById("mapa");
// const areas = document.querySelector("area");
// const datosTerritorios = await fetch("territorios.json").then(response => response.json());

// areas.forEach(area => {
//     area.addEventListener("click", () => {
//         const numeroTerritorio = area.getAttribute("id");
//         const territorio = datosTerritorios.territorios.find(t => t.numero === parseInt(numeroTerritorio));
//         console.log("Has seleccionado el territorio 1")
//     })
// })

function mifuncionClick() {
    alert("Has hecho click en la imagen")
}

const svgElement1 =document.getElementById("mapa-escaleritas");

svgElement1.addEventListener("click", mifuncionClick);
