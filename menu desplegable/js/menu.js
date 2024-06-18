/*Declarar la variable*/
let botonMenu;

/*Inicializar la variable*/
botonMenu = document.getElementById("boton");
console.log(botonMenu);

function mostrarMenu() {

    /*Declarar e inicializar la variable*/
    let navMenu = document.getElementById("navegacion");

    /*ESTRUCTURA DE DECISIÓN CONDICIONAL*/
    if(navMenu.style.display === "block") {

        /*Si navMenu se muestra, cambia el valor a "none"*/ 
        navMenu.style.display = "none";

    } else {

        /*De no cumplirse la condición de if(), pasa por else */
        /*En else le pedimos que cambie su estado a "block", por tanto se muestra*/
        navMenu.style.display = "block";
    };
}

botonMenu.addEventListener("click", mostrarMenu);