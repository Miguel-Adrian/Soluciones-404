let contenido = document.getElementById("contenido");

function traer() {
    fetch('../src/json/productos.json')
        .then(res => res.json())
        .then(datos => {
         let filtroCarrito = localStorage.getItem('cartIds').split(",");
            filtroCarrito.forEach(id => {
                datos.forEach(dato => {
                    if (dato.id == id) {
                        contenido.innerHTML += `
                        <tr>
                            <th scope="row" id="info"><img src="${dato.img}" alt="${dato.name}" 
                            style="width: 100px; height: 100px;"></th>
                            <td id="info">${dato.name}</td>
                            <td id="info">$${dato.price.toFixed(2)}</td>
                            
                            <td> <a class="btn" id="bote"><img src="../src/images/carrito/trash3-fill.svg" alt="" name="borrarcar"></a></td>
                        </tr>
                        `;
                    }
                })
            })
        })
}

// function tabla(datos){
//         contenido.innerHTML += `
//        <tr>
//         <th scope="row">${datos.img}</th>
//         <td>${datos.name}</td>
//         <td>${datos.price}</td>
//       </tr>
//        `;
// }

window.addEventListener("load", function (event) {
    traer();
})



class UI {
    deleteProduct(element){
        if (element.name === "borrarcar") {
           // console.log(element.parentElement);
          element.parentElement.parentElement.parentElement.remove();
          
        }


    }
}

document.getElementById("card").addEventListener("click", function(e) {
  let ui = new UI();
  ui.deleteProduct(e.target)
})


