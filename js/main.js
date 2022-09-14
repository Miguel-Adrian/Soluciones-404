let btnValidar = document.getElementById("btnValidar");
let campoEmail = document.getElementById("validationServer031");


btnValidar.addEventListener("click", function(e){
    e.preventDefault();
    

    if ((campoEmail.value.length !== 0)&& (campoEmail == (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))){
        console.log(campoEmail.value.length);
        campoEmail.classList.remove("is-invalid");
        campoEmail.classList.add("is-valid");
       } else {
        campoEmail.classList.remove("is-valid");
        campoEmail.classList.add("is-invalid");
       }
})

function sendEmail(){
    Email.send({
     Host : "smtp.gmail.com",
     Username : document.getElementById(validationServer01).value,
     Password : "password",
     To : 'qpets.officialstore@gmail.com',
     From : document.getElementById(validationServer031).value,
     Subject : "This is the subject",
     Body : "And this is the body",
 }).then(
   message => alert(message)
 );
 }

