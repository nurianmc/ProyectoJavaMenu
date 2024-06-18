window.onload = function () {
   
    /* +++ VARIABLES +++ */

    // Almacenamos el nombre de la foto para cargar en src=""
    let fotos = ["foto1-pase.jpg", "foto2-pase.jpg", "foto3-pase.jpg"];
    // 0 1 2

    
    //Almacenamos la descripción de cada foto para cargar en alt=""
    let descripcio = ["Descripción de Foto1-pase", 
    "Descripción de Foto2-pase", "Descripción de Foto3-pase"];
    // 0 1 2

    let posicionActual = 0;
    let descripcionActual = 0;

    let $botonRetroceder = document.getElementById("retroceder");
    let $botonAvanzar = document.getElementById("avanzar");

    /* +++ FUNCIONES +++ */

    //Función que "hace avanzar" en la ARRAY 
    function pasarFoto() {
        
            if((posicionActual >= fotos.length - 1) && 
            (descripcionActual >= descripcio.length -1)) {

                posicionActual = 0;
                descripcionActual = 0;

                } else {

                    posicionActual++;
                    descripcionActual++;

                }
            renderizarImagen();
    };
    
    //Función que "hace retroceder" en la ARRAY 
    function retrocederFoto() {

            if((posicionActual <= 0) && 
            (descripcionActual <= 0)) {

                posicionActual = fotos.length - 1;
                descripcionActual = descripcio.length - 1; 

            } else {

                posicionActual--;
                descripcionActual--;

            }
        renderizarImagen();
    };

    //Pinta la imagen en el navegador
    function renderizarImagen() {

        document.getElementById("imagen").innerHTML = 
        `<img src="img/${fotos[posicionActual]}" alt="${descripcio[descripcionActual]}">`;

    }

    /* +++ EVENTOS +++ */

    $botonAvanzar.addEventListener("click", pasarFoto);
    $botonRetroceder.addEventListener("click", retrocederFoto);

    /* +++ INICIALIZAR EL RENDERIZADO +++ */

    renderizarImagen();

}