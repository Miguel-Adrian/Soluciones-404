//este arreglo lo que va a tener dentro son todas las listas de aticulos 
const articulos =[]

class Product{
   /*  producto = "";
    descripcion="";
    costo = "";
    opcion = "";
    categoria = "";  */

 constructor (nombreproduct, descripcion,costo, opcion, categoria,){

        this.nombreproduct = nombreproduct;
        this.descripcion = descripcion;
        this.costo = costo;
        this.opcion = opcion;
        this.categoria = categoria;    

    }
} 
//método para agregar un producto y para eliminarllo. Esto tambien nos va a permitir modificar el html, interactua con el 
class UI{
    addProduct(articulo){
//para poder darle un producto y poder mostrarlo por pantalla: con esto accedo al div de html
        const productlist= document.getElementById("product-list");
        //voy a crear un elemento dentro de mi html 
        const element = document.createElement ("div");
//vamos a llenar el div, vamosa insertarle un elemento html

     element.innerHTML = '<div class="card col-xl-3 col-md-5 col-sm-12 mx-auto mb-4" style="max-width: 300px;">\n' +
     '    <img src="'+ '...' +'" class="card-img-top" alt="image">\n' +
     '    <div class="card-body">\n' +
     '        <h5 class="card-title">'+articulo.nombreproduct+'</h5>\n' +
     '        <p class="card-text text-justify">'+articulo.descripcion.slice(0,70)+'...</p>\n'+
     '        <p class="card-text text-justify"><small class="text-muted">'+ articulo.categoria +' para '+ articulo.opcion.toLowerCase() +'</small></p>\n'+
     '        <p class="text-right h5 text-success font-weight-bold">$'+ articulo.costo +'</p>\n' +
     '        <a href="#" class="btn btn-primary btnCard">Guardar</a><a href="#" class="btn btn-danger ml-2" style="border: none;" name="delete">Eliminar</a>\n' +
     '    </div>\n' +
     '</div>\n' +
     '<br/>';
     //vamos a insertar la informacion 
        productlist.appendChild(element);
        this.resetForm();
    }

    //resetear form
    
    resetForm(){
       document.getElementById("formulario").reset();

    }
    deleteProduct(){

    }

    showMessage(){

    }
}

//eventos del DOM (Documento object model ) un evento del html, ciuiando un usuario da click en un boton, cuando escribe, etc 
//aqui vamos a capturar su evento de submit, es decir que cuando presione el boton enviar ocurra algo
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
   //quiero camputar lo que hay dentro de nombre del producto y por eso pongo el .value tambien
    const nombreproduct = document.getElementById("validationDefault01").value;   
    const descripcion= document.getElementById("validationDefault02").value;   
    const costo= document.getElementById("validationDefault03").value;
    const opcion= document.getElementById("validationDefault04").value;
    const categoria= document.getElementById("validationDefault05").value; 

    //Este new product lo que hace es crear un objeto con una estreuctura de nuestra clase producto
    
    //console.log(new Product(nombreproduct, descripcion,costo, opcion, categoria))

    //vamos a gusrdar esto en una constante 

    const articulo =new Product(nombreproduct, descripcion,costo, opcion, categoria);
    //tengo que almacenar este objeto también dentreo de ua constante. estoy creando una nueva instancia de la clase UI
    //una vez se crea me da un objeto con los metodos que estan dentro de la clase 
    const ui = new UI();
//voy a acceder al metodo agregar producto y le voy a dar el articulo  que he creado para que lo muestre en pantalla
    ui.addProduct(articulo);
   
   
    // console.log(nombreproduct,descripcion, costo,opcion,categoria);

    //Validacion de los campos de selección y checkbox de TyC
let campo1 = document.getElementById("validationDefault01");
let campo2 = document.getElementById("validationDefault02");
let campo3 = document.getElementById("validationDefault03");
let campoBoth = document.getElementById("validationDefault04");
let flagBoth = false;
let campoCatego = document.getElementById("validationDefault05");
let flagCatego = false;
let check = true;
// let TyC = document.getElementById("invalidCheck2");

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

//alerts del formulario 
// if (cont==7){
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: '¡Bien hecho!',
//         text: `${campoName.value}, Avancemos a la vista preliminar`,
//         showConfirmButton: true,
//     });

// } else {
//     Swal.fire({
//         title: 'Error al enviar mensaje',
//         text: "Por favor, verifica que todos los campos sean válidos.",
//         icon: 'error',
//     });
// }

});

//para resetear los eventos del formulario 
