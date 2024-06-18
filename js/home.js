
let menuBoton;

menuBoton = document.querySelector(".boton");
console.log(menuBoton);

function menuMostrar() {

    let menuNav = document.querySelector(".navegacion");

    if (menuNav.style.display === "block") {

        menuNav.style.display = "none";

    } else {

        menuNav.style.display = "block";
    }
};

menuBoton.addEventListener("click", menuMostrar);