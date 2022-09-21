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
//Dispensador de snack para gato 
addItem({
    'id': 24,'name':'Dispensador de snack para gato',
    'img':'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png',
    'description':'Logra que tu gatito se mantenga saludable y entretenido con este dispensador de bocadillos, que lo estimula física y mentalmente','price': 500, 
    'pet':'cat','category':'toys'
});
//Tunel para gatos 
addItem({
    'id': 25,'name':'Tunel para gatos',
    'img':'https://aristopet.com/wp-content/uploads/2020/11/tunel-1.png',
    'description':'Dale un lugar seguro, obscuro y muy entretenido a tu gato, su instinto de cacería siempre estará en sus juegos con este tunel','price': 350,
    'pet':'cat','category':'toys'
});
//Vara juguete para gato
addItem({
    'id': 26,'name':'Vara juguete para gato',
    'img':'https://nakanpets.com/wp-content/uploads/2022/06/2-12.png',
    'description':'Ejercita la mente, reflejos y físico de tu gatito con esta varita, pasando grandes momentos de diversión','price': 100,
    'pet':'cat','category':'toys'
});
//Ratoncitos para gato 
addItem({
    'id': 27,'name':'Ratoncitos para gato "Kitten',
    'img':'https://www.nutypet.com/wp-content/uploads/2021/08/juguete-de-raron-500x500.png',
    'description':'Ratoncitos de peluche para gato, con materiales no tóxicos y ecológicos','price': 150,
    'pet':'cat','category':'toys'
});
//Pelotas para gato 
addItem({
    'id': 28,'name':'Pelotas para gato',
    'img':'https://w7.pngwing.com/pngs/538/164/png-transparent-cat-play-and-toys-cat-play-and-toys-fish-ball-cat-toy-pet-ball-cat-thumbnail.png',
    'description':'¿Quién dijo que a los gatos no les gusta ir por la pelota?, crea un vínculo con tu mascota con este set de pelotas','price': 200,
    'pet':'cat','category':'toys'
});