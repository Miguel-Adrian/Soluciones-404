let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function (e){
    e.preventDefault();
    let campo1 = document.getElementById("validationDefault01");
    let campo2 = document.getElementById("validationDefault02");
    let campo3 = document.getElementById("validationDefault03");
    
        if (campo1.value, campo2.value, campo3.value === ""){
            alert ("Por favor ingresa la información faltante")
        }else{
            alert (`Muchas Gracias todos los campos estan llenos`)
        }
    
    if (campo1.value.length >= 3) {   //validación producto
        campo1.classList.remove("is-invalid");
        campo1.classList.add("is-valid");
    }else {
        campo1.classList.remove("is-valid");
        campo1.classList.add("is-invalid");
    }//campo 1
    for (let i = 0; i < campo1.value.length; i++) {
        console.log((!isNaN(campo1.value.charAt(i))) );
        console.log(campo1.value.charAt(i));
        console.log(campo1.value.toUpperCase().charCodeAt(i));
        if (  (
                 (campo1.value.toUpperCase().charCodeAt(i)<65)
                 ||
                 (campo1.value.toUpperCase().charCodeAt(i)>90)
              )
              && ((campo1.value.toUpperCase().charCodeAt(i)!=32) )  //espacio
              && ((campo1.value.toUpperCase().charCodeAt(i)!=193) ) //Á
              && ((campo1.value.toUpperCase().charCodeAt(i)!=201) ) //É
              && ((campo1.value.toUpperCase().charCodeAt(i)!=205) ) //Í
              && ((campo1.value.toUpperCase().charCodeAt(i)!=211) ) //Ó
              && ((campo1.value.toUpperCase().charCodeAt(i)!=218) ) //Ú
              && ((campo1.value.toUpperCase().charCodeAt(i)!=209) ) //Ñ
        ) {         
            campo1.classList.remove("is-valid");
            campo1.classList.add("is-invalid");
            break;
        }//if
    }//for i

    if (campo2.value.length >= 3) {   //validación descripción
        campo2.classList.remove("is-invalid");
        campo2.classList.add("is-valid");
    }else {
        campo2.classList.remove("is-valid");
        campo2.classList.add("is-invalid");
    }//campo2

    let precio = campo3.value;
    console.log(campo3.value.length);
    console.log(isNaN(precio));
    if( 
        (campo3.value.length<=10)
         &&
        (! isNaN(precio)) 
          ) {                           //validación precio
        campo3.classList.remove("is-invalid");
        campo3.classList.add("is-valid");
    }else{
        campo3.classList.remove("is-valid");
        campo3.classList.add("is-invalid");
    }// ==5






})