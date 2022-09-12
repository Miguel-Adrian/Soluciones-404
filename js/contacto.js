let campoEstados = document.getElementById("validationServer04");
let btnEnviar = document.getElementById("btnEnviar");
let flagEstados = false;

campoEstados.addEventListener("blur", function (event) {
    event.preventDefault();
    if(campoEstados.selectedIndex == 0){
        campoEstados.classList.remove("is-valid");
        campoEstados.classList.add("is-invalid");
        flagEstados = false;
    }
    else{
        campoEstados.classList.remove("is-invalid");
        campoEstados.classList.add("is-valid");
        flagEstados = true;
    }
    
})

btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    if (flagEstados == false){
        alert("Favor de rellenar correctamente todos los campos");
    } 
})