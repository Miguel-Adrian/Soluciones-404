

btnEnviar.addEventListener("click", function (e){
    e.preventDefault();
    let mensaje = document.getElementById("textArea");

    // Validacion para campo de mensaje

    if ((mensaje.value.length > 0) && (mensaje.value.length < 300) ) 
    {
        //prompt("¿Ingres un mensaje para enviar!");
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add("is-valid");

    } else {
        mensaje.classList.remove("is-valid");
        mensaje.classList.add("is-invalid");
        //alert("Ingresa un mensaje en al campo de texto");
    }

    // Validacion para check de Términos y Condiciones

    let TyC = document.getElementById("tycCheck");
    
    if (TyC.checked) {
        TyC.classList.remove("is-invalid");
        TyC.classList.add("is-valid");
    }else{
        TyC.classList.remove("is-valid");
        TyC.classList.add("is-invalid");
    }
});

