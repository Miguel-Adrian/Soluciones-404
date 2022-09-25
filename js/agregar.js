let campoBoth = document.getElementById("validationDefault04");
let flagBoth = false;
let campoCatego = document.getElementById("validationDefault4");
let flagCatego = false;
let check = true;
let TyC = document.getElementById("invalidCheck2");

if (campoBoth.selectedIndex == 0) {
    cont++;

    campoBoth.classList.remove("is-valid");
    campoBoth.classList.add("is-invalid");
    flagBoth = false;
}
else {
    campoBoth.classList.remove("is-invalid");
    campoBoth.classList.add("is-valid");
    flagBoth = true;
}

if (campoCatego.selectedIndex == 0) {
    cont++;

    campoCatego.classList.remove("is-valid");
    campoCatego.classList.add("is-invalid");
    flagCatego = false;
}
else {
    campoCatego.classList.remove("is-invalid");
    campoCatego.classList.add("is-valid");
    flagCatego = true;
}

if (TyC.checked) {
    cont++;

    TyC.classList.remove("is-invalid");
    TyC.classList.add("is-valid");
} else {
    TyC.classList.remove("is-valid");
    TyC.classList.add("is-invalid");

}
if (cont==7){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Bien hecho!',
        text: `${campoName.value}, Avancemos a la vista preliminar`,
        showConfirmButton: true,
    });

} else {
    Swal.fire({
        title: 'Error al enviar mensaje',
        text: "Por favor, verifica que todos los campos sean válidos.",
        icon: 'error',
    });
}