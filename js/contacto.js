let campoEstados = document.getElementById("validationServer04");
let btnEnviar = document.getElementById("btnEnviar");
let flagEstados = false;
let campoName = document.getElementById("validationServer01");
let campoApe = document.getElementById("validationServer02");
let campoData = document.getElementById("validationServer03");
let inputdireccion = document.getElementById("validationServer031");
let check = true;
let campoCP = document.getElementById("validationServer05");
let cp = campoCP.value;
let TyC = document.getElementById("tycCheck");
let mensaje = document.getElementById("textArea");

btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();

    // Validación campo Nombre
    campoName.classList.remove("is-invalid");
    campoName.classList.add("is-valid");

    if ((campoName.value.length >= 3) && (campoName.value.length <= 20)) {

        for (let i = 0; i < campoName.value.length; i++) {
            console.log(campoName.value.charAt(i));
            if (
                ((campoName.value.toUpperCase().charCodeAt(i) < 65)
                    || (campoName.value.toUpperCase().charCodeAt(i) > 90))

                && (campoName.value.toUpperCase().charCodeAt(i) != 32)
                && (campoName.value.toUpperCase().charCodeAt(i) != 193)
                && (campoName.value.toUpperCase().charCodeAt(i) != 201)
                && (campoName.value.toUpperCase().charCodeAt(i) != 205)
                && (campoName.value.toUpperCase().charCodeAt(i) != 211)
                && (campoName.value.toUpperCase().charCodeAt(i) != 218)
                && (campoName.value.toUpperCase().charCodeAt(i) != 209)
            ) {
                campoName.classList.remove("is-valid");
                campoName.classList.add("is-invalid");
                break;
            };

        }
    } else {
        campoName.classList.remove("is-valid");
        campoName.classList.add("is-invalid");
    }



    campoApe.classList.remove("is-invalid");
    campoApe.classList.add("is-valid");

    // Validacion campo Apellido    
    campoApe.classList.remove("is-invalid");
    campoApe.classList.add("is-valid");

    if ((campoApe.value.length >= 3) && (campoApe.value.length <= 30)) {

        for (let i = 0; i < campoApe.value.length; i++) {
            console.log(campoApe.value.charAt(i));
            if (
                ((campoApe.value.toUpperCase().charCodeAt(i) < 65)
                    || (campoApe.value.toUpperCase().charCodeAt(i) > 90))

                && (campoApe.value.toUpperCase().charCodeAt(i) != 32)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 193)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 201)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 205)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 211)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 218)
                && (campoApe.value.toUpperCase().charCodeAt(i) != 209)
            ) {
                campoApe.classList.remove("is-valid");
                campoApe.classList.add("is-invalid");
                break;
            };

        }
    } else {
        campoApe.classList.remove("is-valid");
        campoApe.classList.add("is-invalid");
    }

    //Validación Número de teléfono
    if ((campoData.value.length == 10) && (!isNaN(campoData.value))) {
        campoData.classList.remove("is-invalid");
        campoData.classList.add("is-valid");
    } else {
        campoData.classList.remove("is-valid");
        campoData.classList.add("is-invalid");
    }

    //Validación Correo electrónico

    function isEmailValid(email) {
        let regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !!regex.exec(email);
    }
    
    if (isEmailValid(inputdireccion.value)) {
        inputdireccion.classList.remove("is-invalid");
        inputdireccion.classList.add("is-valid");
    } else {
        inputdireccion.classList.remove("is-valid");
        inputdireccion.classList.add("is-invalid");
    }

    // Validación Estado

    if (campoEstados.selectedIndex == 0) {
        campoEstados.classList.remove("is-valid");
        campoEstados.classList.add("is-invalid");
        flagEstados = false;
    }
    else {
        campoEstados.classList.remove("is-invalid");
        campoEstados.classList.add("is-valid");
        flagEstados = true;
    }

    // Validación Código Potal
    if (
        (campoCP.value.length == 5)
        &&
        (!isNaN(cp))
    ) {
        campoCP.classList.remove("is-invalid");
        campoCP.classList.add("is-valid");
    } else {
        campoCP.classList.remove("is-valid");
        campoCP.classList.add("is-invalid");
    }

    //Validación Terminos y condiciones

    if (TyC.checked) {
        TyC.classList.remove("is-invalid");
        TyC.classList.add("is-valid");
    } else {
        TyC.classList.remove("is-valid");
        TyC.classList.add("is-invalid");

    }

    //Validación Mensaje

    if ((mensaje.value.length > 0) && (mensaje.value.length < 300)) {
        //prompt("¿Ingres un mensaje para enviar!");
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add("is-valid");

    } else {
        mensaje.classList.remove("is-valid");
        mensaje.classList.add("is-invalid");
    }
});