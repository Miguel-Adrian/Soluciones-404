let inputdireccion = document.getElementById("validationServer03.1");
let check = true;
let btn = document.getElementById("btncheck");






  function isEmailValid(email) {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!regex.exec(email);
  }


  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isEmailValid(inputdireccion.value)) {
      inputdireccion.classList.remove("is-invalid");
      inputdireccion.classList.add("is-valid");
    } else {
      inputdireccion.classList.remove("is-valid");
      inputdireccion.classList.add("is-invalid");
    }
});





/* let inputdireccion= document.getElementById("validationServer03.1");
let check = true;
let btn=document.getElementsById("btncheck");

btn.addEventListener("click", function (e) {
  e.preventDefault();


if (ValidateEmail(inputdireccion.value)) {
    inputdireccion.classList.remove("is-invalid");
    inputdireccion.classList.add("is-valid");
  } else {
    inputdireccion.classList.remove("is-valid");
    inputdireccion.classList.add("is-invalid");
    check = false;

  }
 
   function ValidateEmail(input) {
    let valid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(valid)) {
      return true;
    } else {
      return false;
    }
  }
 
 
  }); */