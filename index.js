hidden = document.getElementById("main_btn");
// Si el dispositivo tiene un ancho menor a 375px, se oculta el botón
if (window.innerWidth < 480) {
  hidden.style.display = "none";
}
else if (window.innerWidth > 480) {
  hidden.style.display = "flex";
}

// Menu hamburguesa
burguer = document.getElementById("menu_burguer");
if (window.innerWidth < 480) {
  burguer.style.display = "block";
}
else if (window.innerWidth > 480) {
    burguer.style.display = "none";
}

x = document.getElementById("x");
// Ponerle la clase show a la navbar al tocar el boton burguer
// Mostrar la X en el menu hamburguesa cuando este no esta oculto
nav = document.getElementById("nav");
burguer.addEventListener("click", function() {
    nav.classList.toggle("show");
    x.classList.toggle("x_show")
    }
);
// Ocultar la X cuando se deja de tocar el boton burguer
x.addEventListener("click", function() {
    nav.classList.toggle("show");
    x.classList.toggle("x_show")
    }
);
