//Area de validacion de numero telefonico
//Campos        validationServer03
let btnValidacion = document.getElementById("validacion03");
let campoData = document.getElementById("validationServer03")

//Validacion campo numero telefonico solo 10 digitos.
btnValidacion.addEventListener("click", function(event){
       event.preventDefault();

    if ((campoData.value.length ==10) && (!isNaN(campoData.value)) ) {
        campoData.classList.remove("is-invalid");
        campoData.classList.add("is-valid");
    } else {
        campoData.classList.remove("is-valid");
        campoData.classList.add("is-invalid");        
    }

});
//Validacion campo numero telefonico solo 10 digitos.

