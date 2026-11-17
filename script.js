// Elementos de la página que vamos a usar
var botonTema = document.getElementById("tema");
var visor = document.getElementById("visor");
var visorImg = document.getElementById("visor-img");
var visorTexto = document.getElementById("visor-texto");
var botonCerrar = document.getElementById("cerrar");
var botonesFoto = document.querySelectorAll("#portafolio button");

// 1. Modo oscuro: agrega o quita la clase "oscuro" en el body
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});

// 2. Visor de fotos: al hacer clic en una foto del portafolio se abre grande
botonesFoto.forEach(function (boton) {
  boton.addEventListener("click", function () {
    var foto = boton.querySelector("img");
    var descripcion = boton.parentElement.querySelector("figcaption");

    visorImg.src = foto.src;
    visorImg.alt = foto.alt;
    visorTexto.textContent = descripcion.textContent;

    visor.showModal();
  });
});

// Cerrar el visor con el botón
botonCerrar.addEventListener("click", function () {
  visor.close();
});

// Cerrar el visor al hacer clic fuera de la foto
visor.addEventListener("click", function (evento) {
  if (evento.target === visor) {
    visor.close();
  }
});
