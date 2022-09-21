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

//1. Pelota de caucho
addItem({'id':1,'name':'Pelota K-Nina',
    'img':'.//src/images/catalogo/DogTretBallPink.png',
    'description':'Pelota de caucho rosa, ¡puede almacenar premios de comida en su interior, ya que cuenta con un compartimento! Útil para ejercitar a tu mascota y enseñarle uno que otro truco de una sola vez.',
    'price': 123.50,'pet':'dog','category':'toys'});

//2. Dona de tela con silbato
addItem({'id':2,'name':'Dona chillona',
    'img':'../src/images/catalogo/DogSqueakyDonut.png',
    'description':'El juguete emite un chillido cuando es presionada, algo que le encantará a tu perro, sea cachorro o adulto.',
    'price':199.00,'pet':'dog','category':'toys'})
//3. Hueso de caucho
addItem({'id':3,'name':'Huesito Fiu-Fiu',
'img':'../src/images/catalogo/DogRubberBone.png',
'description':'Hueso de caucho de uso rudo. Ideal para canes adultos. Este juguete puede ser útil para evitar que tu perro muerda objetos que no debería morder. Antiestrés.',
'price':120.00,'pet':'dog','category':'toys'})

//4. Juguete de fibra
addItem({'id':4,'name':'Juguete de fibra',
'img':'../src/images/catalogo/DogRopeToy.png',
'description':'Juguete de fibra 100% natural. Ideal para canes adultos. Dale a tu amigo horas de diversión y relajamiento con este juguete.',
'price':99.00,'pet':'dog','category':'toys'})

//5. Kit para masticar
addItem({'id':5,'name':'Kit de sandalias y zapatos',
'img':'../src/images/catalogo/DogKitSandalsSneakersChewies.png',
'description':'Pensado principalmente para cachorros, haz que éste pase horas de diversión masticando su juguete y no tu calzado diario. Precaución: exceso de dulzura al ver a tu amiguito pasándola bien.',
'price':216.00,'pet':'dog','category':'toys'})


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
// 16. Shampoo líquido
addItem({'id' :16, 'name':'Shampo para perro liquido',
    'img':'../src/images/catalogo/Shampoo perro.png',
    'description':'Shampo líquido para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso', 
    'price': 50.00, 
    'pet':'dog',
    'category':'cleaning'
    });
//17. Shampoo en barra
addItem({'id' :17, 'name':'Shampo para perro en barra',
    'img':'../src/images/catalogo/Shampoo-perro-barra.png',
    'description':'Shampo en barra para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso previene de pulgas y garrapatas',
     'price': 30.00,
      'pet':'dog',
    'category':'cleaning'});
//18. Quitamanchas
addItem({'id' :18, 'name':'Quitamanchas de mascotas',
    'img':'../src/images/catalogo/Quita-manchas.png',
    'description':'Elimina esas manchas y malos olores causadas por tu mascota en superficies',
     'price': 150.00,
      'pet':'dog',
    'category':'cleaning'});
//19. Limpieza dental
addItem({'id' :19, 'name':'Limpieza dental para perro',
    'img':'../src/images/catalogo/limpieza-dental.png',
    'description':'Dale un buen cuidado bucal a tu perro previniendo así enfermedades/bacterias y malos olores',
     'price': 120.00, 
     'pet':'dog',
    'category':'cleaning'});
//20. Quita olores
addItem({'id': 20, 'name':'Quita olores de mascota',
    'img':'../src/images/catalogo/Limpiador-para-perro.png',
    'description':'Elimina olor dejado por tu mascota despues de hacer sus necesidades y previene que no vuelva hacerlo en el mismo lugar',
     'price': 170.00,
      'pet':'dog',
    'category':'cleaning'});

//21. Camita para perro
addItem({'id':21,'name':'Camita P-rruna',
'img':'../src/images/catalogo/DogBed1.png',
'description':'¿Un día agotador? Dale el descanso que se merece a tu peludo con esta preciosa cama en forma de sandalia. Hecha con materiales 100% naturales, le dará a tu amig@ un descanso reparador.',
'price':1314.00,'pet':'dog','category':'toys'})

//22. Casita para perro una planta
addItem({'id':22,'name':'K-sita K9',
'img':'../src/images/catalogo/DogHouse1.png',
'description':'Pensado principalmente para cachorros, haz que éste pase horas de diversión masticando su juguete y no tu calzado diario. Precaución: exceso de dulzura al ver a tu amiguito pasándola bien.',
'price':5163,'pet':'dog','category':'accesory'})

//23. Casita para perro 2 plantas
addItem({'id':23,'name':'K-sita K9 Suite de 2 plantas',
'img':'../src/images/catalogo/DogBed2.png',
'description':'¿Acaso hay más un un miembro peludo en la familia? ¡No hay problema! Esta hermosa suite para dos amiguit@s está pensada exclusivamente para ahorrar espacio.',
'price':10011.00,'pet':'dog','category':'accesory'})


// 24. Dispensador de snack para gato 
addItem({
    'id': 24,'name':'Dispensador de snack para gato',
    'img':'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png',
    'description':'Logra que tu gatito se mantenga saludable y entretenido con este dispensador de bocadillos, que lo estimula física y mentalmente','price': 500, 
    'pet':'cat','category':'toys'
});

// 25. Tunel para gatos 
addItem({
    'id': 25,'name':'Tunel para gatos',
    'img':'https://aristopet.com/wp-content/uploads/2020/11/tunel-1.png',
    'description':'Dale un lugar seguro, obscuro y muy entretenido a tu gato, su instinto de cacería siempre estará en sus juegos con este tunel','price': 350,
    'pet':'cat','category':'toys'
});

// 26. Vara juguete para gato
addItem({
    'id': 26,'name':'Vara juguete para gato',
    'img':'https://nakanpets.com/wp-content/uploads/2022/06/2-12.png',
    'description':'Ejercita la mente, reflejos y físico de tu gatito con esta varita, pasando grandes momentos de diversión','price': 100,
    'pet':'cat','category':'toys'
});

// 27. Ratoncitos para gato 
addItem({
    'id': 27,'name':'Ratoncitos para gato "Kitten',
    'img':'https://www.nutypet.com/wp-content/uploads/2021/08/juguete-de-raron-500x500.png',
    'description':'Ratoncitos de peluche para gato, con materiales no tóxicos y ecológicos','price': 150,
    'pet':'cat','category':'toys'
});

// 28. Pelotas para gato 
addItem({
    'id': 28,'name':'Pelotas para gato',
    'img':'https://w7.pngwing.com/pngs/538/164/png-transparent-cat-play-and-toys-cat-play-and-toys-fish-ball-cat-toy-pet-ball-cat-thumbnail.png',
    'description':'¿Quién dijo que a los gatos no les gusta ir por la pelota?, crea un vínculo con tu mascota con este set de pelotas','price': 200,
    'pet':'cat','category':'toys'
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