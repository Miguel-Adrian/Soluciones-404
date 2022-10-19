let contenido = document.getElementById("contenido");
let totalCarrito = 0.0;

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
                            <td id="info">$${parseFloat(dato.price).toFixed(2)}</td>
                            
                            <td> <a class="btn"><img class="bote" value="${dato.id}" src="../src/images/carrito/trash3-fill.svg" alt="" name="borrarcar"></a></td>
                        </tr>
                        `;
                        totalCarrito += parseFloat(dato.price);
                    }
                    // document.getElementById("totalCarrito").innerHTML =
                    // `<i class="bi bi-cart-check-fill"></i> Total: $${totalCarrito.toFixed(2)}`
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

let filtroEliminar = [];
class UI {
    deleteProduct(element){
        if (element.name === "borrarcar") {
            // console.log(element.parentElement);
            filtroEliminar = localStorage.getItem('cartIds').split(",")
            .filter(item => parseInt(item) != element.value);
            localStorage.setItem('cartIds', filtroEliminar);
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

document.getElementById("card").addEventListener("click", function(event) {
//   let ui = new UI();
//   ui.deleteProduct(e.target)
if (event.target.name === "borrarcar") {
    // console.log(element.parentElement);
    filtroEliminar = localStorage.getItem('cartIds').split(",")
    .filter(item => parseInt(item) != event.target.value);
    localStorage.setItem('cartIds', filtroEliminar);
    event.target.parentElement.parentElement.parentElement.remove();
}
})