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
                            <th scope="row"><img src="${dato.img}" alt="${dato.name}" 
                            style="width: 30px; height: 30px;"></th>
                            <td>${dato.name}</td>
                            <td>$${dato.price.toFixed(2)}</td>
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