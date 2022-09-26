
let btnSubmit = document.getElementById("btnSubmit");
let nombre = document.getElementById("validationDefault01");
let description = document.getElementById("validationDefault02");
let price = document.getElementById("validationDefault03");
let pet = document.getElementById("validationDefault04");
let category = document.getElementById("validationDefault4");
const key = "info";
let container = [];
let cont = 0;



btnSubmit.addEventListener("click", function(e){
    e.preventDefault();

    let producto = {"id":cont,"name":nombre.value,"description":description.value,"price":price.value,"pet":pet.value,"category":category.value};
    cont ++;
    container.push(producto);

    JSON.stringify(container);

    localStorage.setItem(key, JSON.stringify(container));

})