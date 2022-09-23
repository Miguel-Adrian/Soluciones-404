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
        element.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
 
  <div class="card-body">
  
  <h5 class="card-title"></h5> ${articulo.nombreproduct}

  <strong>Descripcion:</strong>${articulo.descripcion}
  <br>
  <strong>Precio del producto $</strong> ${articulo.costo}
  <br>
  <strong>Opcion:</strong> ${articulo.opcion}
  <br>
  <strong>Categoria:</strong> ${articulo.categoria}

 
  <br>
  <a href="#" class="btn btn-primary">Guardar</a>
  <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
  
  </div>
</div>
        
     `;

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

});

//para resetear los eventos del formulario 
