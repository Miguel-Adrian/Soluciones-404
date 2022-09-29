// inicializa el contador para usuarios 
id =1;
let usuarios = [];

//Arreglo para cada usuario 

class User {
    constructor (nombre, apellido, correo, numero, contrasenia1, contrasenia2){
       this.nombre = nombre;
       this. apellido = apellido;
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
   

    const key = "info";
    let cont = 0;

    //localStorage 
    usuarios.push(new User (newUserName.value, newUserLastName.value,newUserEmail.value,
        newUserNumber.value, newUserPass1.value, newUserPass2.value));
    id++;
    localStorage.setItem(key, JSON.stringify(usuarios))

});