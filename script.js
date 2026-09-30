document.addEventListener("DOMContentLoaded", function () {

    const publicarBtn = document.getElementById("publicarBtn");
    const formulario = document.getElementById("formularioAnuncio");

    publicarBtn.addEventListener("click", function () {
        formulario.style.display = "block";
    });

});
