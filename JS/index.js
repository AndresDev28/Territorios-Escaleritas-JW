
const area_1 = document.getElementById("ruta-1");
const area_68 = document.getElementById("ruta-68");
const punteroMapa = document.getElementById("mapa-escaleritas");

punteroMapa.addEventListener("click", event => {
    console.log (event);
})

area_1.addEventListener("click", () => {
    alert("Haz clicado en el area 1");
}); 

area_68.addEventListener("click", () => {
    alert("Haz clicado en el area 68");
});
