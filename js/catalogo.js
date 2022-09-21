function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



// 6. Blazer de perro
addItem({
    'id': 6, 'name': 'Blazer para Perro',
    'img': '../src/images/catalogo/blazerPerro.png',
    'description': 'Dale un look cool a tu perro en la temporada de invierno con este blazer',
    'price': 750,
    'pet':'dog',
    'category':'accesory'
});

// 7. Hoodie de perro
addItem({
    'id': 7, 'name': 'Hoodie para Perro',
    'img': '../src/images/catalogo/HoodiePerro.png',
    'description': 'Protege a tu perrito del frío con este adorable hoodie',
    'price': 400,
    'pet':'dog',
    'category':'accesory'
});

// 8. Filipina de perro
addItem({
    'id': 8, 'name': 'Filipina para Perro',
    'img': '../src/images/catalogo/filipinaPerro.png',
    'description': '¿Quieres un ayudante de cocina? Con esta filipina podrás convertir a tu perro en un verdadero chef',
    'price': 600,
    'pet':'dog',
    'category':'accesory'
});

// 9. Beanie de perro
addItem({
    'id': 9, 'name': 'Beanie para Perro',
    'img': '../src/images/catalogo/beaniePerro.png',
    'description': 'Perfecto para salir a la calle',
    'price': 100,
    'pet':'dog',
    'category':'accesory'
});

// 10. Mameluco de perro
addItem({
    'id': 10, 'name': 'Mameluco para Perro',
    'img': '../src/images/catalogo/mamelucoPerro.png',
    'description': '¡Hora de dormir!',
    'price': 300,
    'pet':'dog',
    'category':'accesory'
});

// 44. Cama gato mimbre
addItem({
    'id': 44, 'name': 'Cama para gato de mimbre',
    'img': '../src/images/catalogo/camaGato1.png',
    'description': 'Dale comodidad y espacio a tu gatito con esta cama',
    'price': 400,
    'pet':'cat',
    'category':'accesory'
});

// 45. Cama gato fibra
addItem({
    'id': 45, 'name': 'Cama para gato de microfibra',
    'img': '../src/images/catalogo/camaGato2.png',
    'description': 'Suavecita, con superficie de microfibra',
    'price': 350,
    'pet':'cat',
    'category':'accesory'
});

// 46. Cama gato algodón
addItem({
    'id': 46, 'name': 'Cama para gato de algodón',
    'img': '../src/images/catalogo/camaGato3.png',
    'description': 'Comodidad y frescura el minino',
    'price': 350,
    'pet':'cat',
    'category':'accesory'
});