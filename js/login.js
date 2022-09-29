// inicializa el contador para usuarios 
id =1;
let usuarios = [];

//Arreglo para cada usuario 

class User {
    constructor(nombre, apellido, correo, numero, contrasenia1, contrasenia2) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.numero = numero;
        this.contrasenia1 = contrasenia1;
        this.contrasenia2 = contrasenia2;

    }
}

    
    //Evento submit para el boton 
    document.getElementById("btnRegistrar").addEventListener("click", function(e) {
        e.preventDefault();

        let newUserName = document.getElementById("newUserName");
        let newUserLastName = document.getElementById("newUserLastName");
        let newUserEmail = document.getElementById("newUserEmail");
        let newUserNumber = document.getElementById("newUserNumber");
        let newUserPass1 = document.getElementById("newUserPass1");
        let newUserPass2 = document.getElementById("newUserPass2");
        let checkTyC = document.getElementById("tycCasilla");
        let contador=0;

 //Validación para campo Nombre
 if ((newUserName.value.length >= 3) && (newUserName.value.length <= 20)) {
    contador++;
    for (let i = 0; i < newUserName.value.length; i++) {
    if (
    ((newUserName.value.toUpperCase().charCodeAt(i) < 65)
    || (newUserName.value.toUpperCase().charCodeAt(i) > 90))
    
        && (newUserName.value.toUpperCase().charCodeAt(i) != 32)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 193)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 201)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 205)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 211)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 218)
        && (newUserName.value.toUpperCase().charCodeAt(i) != 209)
    ) {
        flag=true;
    };
                
    }
        newUserName.classList.remove("is-invalid");
        newUserName.classList.add("is-valid");
    } else {
            newUserName.classList.remove("is-valid");
            newUserName.classList.add("is-invalid");
            const aviso = document.getElementById("alertaPass");//A donde va
            //Se crea un "vinculo" al div con el id "alertaPass"
            aviso.innerHTML = '<div class="alert alert-danger" role="alert"><p class="text-center"> Verifica tu nombre </p></div>';
            aviso.style.display = "block";
            setTimeout(()=>{aviso.style.display = "none"}, 3000);
            }

    //Validación para campo Apellido
    if ((newUserLastName.value.length >= 3) && (newUserLastName.value.length <= 30)) {
        contador++;
        
    for (let i = 0; i < newUserLastName.value.length; i++) {
        if (
            ((newUserLastName.value.toUpperCase().charCodeAt(i) < 65)
            || (newUserLastName.value.toUpperCase().charCodeAt(i) > 90))
        
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 32)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 193)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 201)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 205)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 211)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 218)
            && (newUserLastName.value.toUpperCase().charCodeAt(i) != 209)
        ) {

    };
        }
    newUserLastName.classList.remove("is-invalid");
    newUserLastName.classList.add("is-valid");
    } else {
    newUserLastName.classList.remove("is-valid");
    newUserLastName.classList.add("is-invalid");
    const aviso = document.getElementById("alertaPass");//A donde va
        //Se crea un "vinculo" al div con el id "alertaPass"
    aviso.innerHTML += '<div class="alert alert-danger" role="alert"><p class="text-center"> Verifica tu Apellido </p></div>';
    aviso.style.display = "block";
        setTimeout(()=>{aviso.style.display = "none"}, 3000);
    }

//Validación Correo electrónico

    function isEmailValid(email) {
      let regex =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return !!regex.exec(email);
    }
                
    if (isEmailValid(newUserEmail.value)) {
     contador++;

    newUserEmail.classList.remove("is-invalid");
    newUserEmail.classList.add("is-valid");
    } else {
     newUserEmail.classList.remove("is-valid");
    newUserEmail.classList.add("is-invalid");
      const aviso = document.getElementById("alertaPass");//A donde va
    //Se crea un "vinculo" al div con el id "alertaPass"
        aviso.innerHTML += '<div class="alert alert-danger" role="alert"><p class="text-center"> Verifica tu dirección de correo electrónico </p></div>';
        aviso.style.display = "block";
        setTimeout(()=>{aviso.style.display = "none"}, 3000);
    }
                
     //Validación Número de teléfono
     if ((newUserNumber.value.length == 10) && (!isNaN(newUserNumber.value))) {
    contador++;
      newUserNumber.classList.remove("is-invalid");
      newUserNumber.classList.add("is-valid");
    } else {
      newUserNumber.classList.remove("is-valid");
      newUserNumber.classList.add("is-invalid");

         const aviso = document.getElementById("alertaPass");//A donde va
    //Se crea un "vinculo" al div con el id "alertaPass"
         aviso.innerHTML += '<div class="alert alert-danger" role="alert"><p class="text-center"> Verifica tu número de contacto</p></div>';
         aviso.style.display = "block";
     setTimeout(()=>{aviso.style.display = "none"}, 3000);;
    }

    //Validación Terminos y condiciones

    if (checkTyC.checked) {
         contador++;

        checkTyC.classList.remove("is-invalid");
        checkTyC.classList.add("is-valid");
    } else {
        checkTyC.classList.remove("is-valid");
        checkTyC.classList.add("is-invalid");
        const aviso = document.getElementById("alertaPass");//A donde va
    //Se crea un "vinculo" al div con el id "alertaPass"
        aviso.innerHTML += '<div class="alert alert-danger" role="alert"><p class="text-center"> Verifica términos y condiciones </p></div>';
        aviso.style.display = "block";
        setTimeout(()=>{aviso.style.display = "none"}, 3000);;
     }

    //Validacion contraseñas
      if ((newUserPass1.value == "") && (newUserPass2.value == "")) { 
                        
        newUserPass1.classList.remove("is-valid");
        newUserPass2.classList.remove("is-valid");
        newUserPass1.classList.add("is-invalid");
        newUserPass2.classList.add("is-invalid");
    const aviso = document.getElementById("alertaPass");//A donde va
//Se crea un "vinculo" al div con el id "alertaPass"
        aviso.innerHTML += '<div class="alert alert-danger w-auto" role="alert"><p class="text-center"> Ingresa una contraseña válida </p></div>';
    aviso.style.display = "block";
    setTimeout(()=>{aviso.style.display = "none"}, 3000);

   } else if ((newUserPass1.value === newUserPass2.value)) {
      contador++;
        newUserPass1.classList.remove("is-invalid");
        newUserPass2.classList.remove("is-invalid");
        newUserPass1.classList.add("is-valid");
        newUserPass2.classList.add("is-valid");
    } 
    else {

        newUserPass1.classList.remove("is-valid");
        newUserPass2.classList.remove("is-valid");
        newUserPass1.classList.add("is-invalid");
        newUserPass2.classList.add("is-invalid");
            
    const aviso = document.getElementById("alertaPass");
//Se crea un "vinculo" al div con el id "alertaPass"
        aviso.innerHTML += '<div class="alert alert-danger w-auto" role="alert"><p class="text-center"> Las contraseñas no coinciden </p></div>';
        aviso.style.display = "block";
        setTimeout(()=>{aviso.style.display = "none"}, 3000);
    }

    if (contador==6) {
      const key = "info";

 //localStorage 
     usuarios.push(new User (newUserName.value, newUserLastName.value,newUserEmail.value,
     newUserNumber.value, newUserPass1.value, newUserPass2.value));
     id++;
     localStorage.setItem(key, JSON.stringify(usuarios));

    } else {
    //alert("No pasa");
        }

    });