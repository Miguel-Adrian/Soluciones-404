// Inicializa contador para artículos
id = 1;
let articulos = [];

// Éste arreglo lo que va a tener dentro son todas las listas de artículos 

class Product{

 constructor (id, nombreproduct, imgURL, descripcion, costo, opcion, categoria,){

        this.id = id;
        this.name = nombreproduct;
        this.img = imgURL;
        this.description = descripcion;
        this.price = costo;
        this.pet = opcion;
        this.category = categoria;    

    }
} 
//método para agregar un producto y para eliminarllo. Esto tambien nos va a permitir modificar el html, interactua con el 
class UI{
    addProduct(articulo){

        let listaDeProductos = document.getElementById("product-list");
        let element =document.createElement("div");
       

     element.innerHTML = '<h3>Vista previa</h3><div class="card col-xl-3 col-md-5 col-sm-12 mx-auto mb-4" style="max-width: 300px;">\n' +
     '    <img src="'+ articulo.img +'" class="card-img-top" alt="image">\n' +
     '    <div class="card-body">\n' +
     '        <h5 class="card-title">'+articulo.name+'</h5>\n' +
     '        <p class="card-text text-justify">'+articulo.description.slice(0,70)+'...</p>\n'+
     '        <p class="card-text text-justify"><small class="text-muted">'+ articulo.category +' para '+ articulo.pet.toLowerCase() +'</small></p>\n'+
     '        <p class="text-right h5 text-success font-weight-bold">$'+ articulo.price +'</p>\n' +
     '        <a href="#" class="btn btn-primary btnCard" name="guardar">Guardar</a><a href="#" class="btn btn-danger ml-2" id="eliminar" style="border: none;" name="delete">Eliminar</a>\n' +
     '    </div>\n' +
     '</div>\n' +
     '<br/>';
     //vamos a insertar la informacion 
       listaDeProductos.appendChild(element);
    }

    //resetear form
    
    resetForm(){
        document.getElementById("formulario").reset();
        
    }
    deleteProduct(element){
        if(element.name === "delete"){
          element.parentElement.parentElement.parentElement.remove();

          Swal.fire(
            'Estas seguro que quieres eliminar el producto?',
            'You clicked the button!',
            'success'
          )
           
        }
       



    }

   

    guardarAlert(element){

        if(element.name === "guardar"){
            element.parentElement.parentElement.parentElement.remove();

            Swal.fire(
                'Producto agregado con éxito',
                'Gracias, equipo Q-Pets!',
                'success'
              )
             
          }

    }
}

// Eventos del DOM (Documento Object Model) un evento del html, cuando un usuario da click en un botÓn, cuando escribe, etc 
// Aquí vamos a capturar su evento de submit, es decir que cuando presione el boton enviar ocurra algo
document.getElementById("formulario").addEventListener("click", function(e) {
    e.preventDefault();
   //quiero camputar lo que hay dentro de nombre del producto y por eso pongo el .value tambien
    let nombreproduct = document.getElementById("validationDefault01").value;
    let imagen = document.getElementById("campoImagen");   
    let descripcion= document.getElementById("validationDefault02").value;   
    let costo= document.getElementById("validationDefault03").value;
    let opcion= document.getElementById("validationDefault04").value;
    let categoria= document.getElementById("validationDefault05").value;
     
    let imgFile = imagen.files[0];
    const reader = new FileReader();
    let imgURL = reader.readAsDataURL(imgFile);
    const key = "info";
    let cont = 0;
    
    //Este new product lo que hace es crear un objeto con una estreuctura de nuestra clase producto
    const articulo =new Product(id, nombreproduct, imgURL, descripcion,costo, opcion, categoria);
    //tengo que almacenar este objeto también dentreo de ua constante. estoy creando una nueva instancia de la clase UI
    //una vez se crea me da un objeto con los metodos que estan dentro de la clase 
    let ui = new UI();
    //voy a acceder al metodo agregar producto y le voy a dar el articulo  que he creado para que lo muestre en pantalla
    ui.addProduct(articulo);
  
    ui.resetForm();
 
    // console.log(nombreproduct,descripcion, costo,opcion,categoria);

    //Validacion de los campos de selección y checkbox de TyC
let campo1 = document.getElementById("validationDefault01");
let campo2 = document.getElementById("validationDefault02");
let campo3 = document.getElementById("validationDefault03");
let campoBoth = document.getElementById("validationDefault04");
let flagBoth = false;
let campoCatego = document.getElementById("validationDefault05");
let flagCatego = false;

// if (campo1.value, campo2.value, campo3.value === ""){
//     alert ("Por favor ingresa la información faltante")
// }else{
//     alert (`Muchas Gracias todos los campos estan llenos`)
// }

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

// if (TyC.checked) {
//     cont++;

//     TyC.classList.remove("is-invalid");
//     TyC.classList.add("is-valid");
// } else {
//     TyC.classList.remove("is-valid");
//     TyC.classList.add("is-invalid");

// }
    articulos.push(new Product (id, nombreproduct, imgURL, descripcion, costo, opcion, categoria));
    id++;
    localStorage.setItem(key, JSON.stringify(articulos));
});

document.getElementById("product-list").addEventListener("click", function(e){
    console.log(e.target);
    let ui = new UI;
    ui.deleteProduct(e.target);
});

document.getElementById("product-list").addEventListener("click", function(e){
    console.log(e.target);
    let ui = new UI;
    ui.guardarAlert(e.target);
})



