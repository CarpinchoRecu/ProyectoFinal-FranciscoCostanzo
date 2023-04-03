// Funciones para los botones de la barra

document.getElementById("logo").addEventListener("click", function (event) {
  event.preventDefault();

  this.querySelector("img").style.animation = "animation_logo 0.3s ease-in-out";

  setTimeout(() => {
    window.location.href = this.href;
  }, 500);
});

// obtenemos todos los elementos "a" en la página
const links = document.getElementsByTagName("a");

// recorremos cada elemento "a"
for (let i = 0; i < links.length; i++) {
  const link = links[i];

  // verificamos si el enlace tiene el atributo "target" y si su valor es "_blank"
  const isBlank = link.getAttribute("target") === "_blank";

  // agregamos el evento "click" a cada enlace
  link.addEventListener("click", function (event) {

    // prevenimos que el enlace se redirija automáticamente
    event.preventDefault();

    // redirigimos a la URL después de medio segundo (500 milisegundos)
    setTimeout(function () {
      if (isBlank) {
        // si el enlace tiene el atributo "target" y su valor es "_blank", lo abrimos en una nueva pestaña
        window.open(link.href, "_blank");
      } else {
        // de lo contrario, redirigimos en la misma pestaña
        window.location.href = link.href;
      }
    }, 800);
  });
}

// Menu hamburguesa en modo Mobile

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvas = document.querySelector('.offcanvas');
const menuSpan = document.querySelector('.menu-btn span');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('close');
  offcanvas.classList.toggle('show');
  menuSpan.classList.toggle('hide');
});

closeBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('close');
  offcanvas.classList.toggle('show');
  menuSpan.classList.toggle('hide');
});

// pasar de nota

let currentText = 1;

function noteAnimate() {
  // Obtiene los elementos de texto
  const text1 = document.querySelector(".note1");
  const text2 = document.querySelector(".note2");

  // Determina qué texto debe ser visible y cuál debe estar oculto
  if (currentText === 1) {
    text1.style.display = "none";
    text2.style.display = "block";
    currentText = 2;
  } else {
    text1.style.display = "block";
    text2.style.display = "none";
    currentText = 1;
  }
}

// Inicia la animación cada 4 segundos
setInterval(noteAnimate, 6000);
