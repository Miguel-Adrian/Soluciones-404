function addItem(item){
    const itemHTML = '<div class="card col-xl-3 col-md-5 col-sm-12 mx-auto mx-md-1 mx-lg-4 mb-4" style="max-width: 300px;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text text-justify">'+item.description.slice(0,70)+'...</p><p class="text-right h5 text-success font-weight-bold">$'+item.price.toFixed(2)+'</p>\n' +
        '        <a href="#" class="btn btnCard btn-warning">Ver más...</a> \n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("listaDeProductos");
    itemsContainer.innerHTML += itemHTML;
}




//1. Pelota de caucho
addItem({
    'id': 1, 'name': 'Pelota K-Nina',
    'img': '../src/images/catalogo/DogTreatBallPink.png',
    'description': 'Pelota de caucho rosa, ¡puede almacenar premios de comida en su interior, ya que cuenta con un compartimento! Útil para ejercitar a tu mascota y enseñarle uno que otro truco de una sola vez.',
    'price': 123.50, 'pet': 'dog', 'category': 'toys'
});

//2. Dona de tela con silbato
addItem({
    'id': 2, 'name': 'Dona chillona',
    'img': '../src/images/catalogo/DogSqueakyDonut.png',
    'description': 'El juguete emite un chillido cuando es presionada, algo que le encantará a tu perro, sea cachorro o adulto.',
    'price': 199.00, 'pet': 'dog', 'category': 'toys'
})
//3. Hueso de caucho
addItem({
    'id': 3, 'name': 'Huesito Fiu-Fiu',
    'img': '../src/images/catalogo/DogRubberBone.png',
    'description': 'Hueso de caucho de uso rudo. Ideal para canes adultos. Este juguete puede ser útil para evitar que tu perro muerda objetos que no debería morder. Antiestrés.',
    'price': 120.00, 'pet': 'dog', 'category': 'toys'
})

//4. Juguete de fibra
addItem({
    'id': 4, 'name': 'Juguete de fibra',
    'img': '../src/images/catalogo/DogRopeToy.png',
    'description': 'Juguete de fibra 100% natural. Ideal para canes adultos. Dale a tu amigo horas de diversión y relajamiento con este juguete.',
    'price': 99.00, 'pet': 'dog', 'category': 'toys'
})

//5. Kit para masticar
addItem({
    'id': 5, 'name': 'Kit de sandalias y zapatos',
    'img': '../src/images/catalogo/DogKitSandalsSneakersChewies.png',
    'description': 'Pensado principalmente para cachorros, haz que éste pase horas de diversión masticando su juguete y no tu calzado diario. Precaución: exceso de dulzura al ver a tu amiguito pasándola bien.',
    'price': 216.00, 'pet': 'dog', 'category': 'toys'
})


// 6. Blazer de perro
addItem({
    'id': 6, 'name': 'Blazer para Perro',
    'img': '../src/images/catalogo/blazerPerro.png',
    'description': 'Dale un look cool a tu perro en la temporada de invierno con este blazer',
    'price': 750,
    'pet': 'dog',
    'category': 'accesory'
});

// 7. Hoodie de perro
addItem({
    'id': 7, 'name': 'Hoodie para Perro',
    'img': '../src/images/catalogo/HoodiePerro.png',
    'description': 'Protege a tu perrito del frío con este adorable hoodie',
    'price': 400,
    'pet': 'dog',
    'category': 'accesory'
});

// 8. Filipina de perro
addItem({
    'id': 8, 'name': 'Filipina para Perro',
    'img': '../src/images/catalogo/filipinaPerro.png',
    'description': '¿Quieres un ayudante de cocina? Con esta filipina podrás convertir a tu perro en un verdadero chef',
    'price': 600,
    'pet': 'dog',
    'category': 'accesory'
});

// 9. Beanie de perro
addItem({
    'id': 9, 'name': 'Beanie para Perro',
    'img': '../src/images/catalogo/beaniePerro.png',
    'description': 'Perfecto para salir a la calle',
    'price': 100,
    'pet': 'dog',
    'category': 'accesory'
});

// 10. Mameluco de perro
addItem({
    'id': 10, 'name': 'Mameluco para Perro',
    'img': '../src/images/catalogo/mamelucoPerro.png',
    'description': '¡Hora de dormir!',
    'price': 300,
    'pet': 'dog',
    'category': 'accesory'
});

//11. alimento para perro
addItem({
    'id': 11, 'name': 'Alimento Purina Dow Chow de 15 Kg',
    'img': '../src/images/catalogo/alimentoparaperro1.jpg',
    'description': 'Alimento PURINA DOG CHOW para adulto. Tamaño de raza: medianos y grandes.',
    'price': 749,
    'pet': 'dog',
    'category': 'food'
});
//12. alimento para perro
addItem({
    'id': 12, 'name': 'Alimento para perro Ganador 20 Kg',
    'img': '../src/images/catalogo/alimentoparaperro2.jpg',
    'description': 'Alimento para perro de la marca Ganador para adulto de razas medianas y grandes.',
    'price': 899,
    'pet': 'dog',
    'category': 'food'
});

//13. alimento para perro
addItem({
    'id': 13, 'name': 'Alimento para perro de la marca Perron 25Kg',
    'img': '../src/images/catalogo/alimentoparaperro3.jpg',
    'description': 'Alimento de mayor nutrición a menor precio, para perros adultos de todas las razas y tamaños',
    'price': 899,
    'pet': 'dog',
    'category': 'food'
});

//14. alimento para perro
addItem({
    'id': 14, 'name': 'Alimento para perro de la marca Purina ONE 3,5 Kg',
    'img': '../src/images/catalogo/alimentoparaperro4.jpg',
    'description': 'Alimento super premium de la marca Purina ONE con pollo y cordero de verdad contribuye a un corazón sano y musculos fuertes',
    'price': 459,
    'pet': 'dog',
    'category': 'food'
});

//15. alimento para perro
addItem({
    'id': 15, 'name': 'Alimento para perro de la marca NUPEC 2 Kg',
    'img': '../src/images/catalogo/alimentoparaperro5.jpg',
    'description': 'alimento con el balance de vitaminas, minerales, grasas, proteínas y energía adecuados para esta etapa de vida que definirá su calidad de vida adulta.',
    'price': 265,
    'pet': 'dog',
    'category': 'food'
});

// 16. Shampoo líquido
addItem({
    'id': 16, 'name': 'Shampo para perro liquido',
    'img': '../src/images/catalogo/Shampoo perro.png',
    'description': 'Shampo líquido para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso',
    'price': 50.00,
    'pet': 'dog',
    'category': 'cleaning'
});
//17. Shampoo en barra
addItem({
    'id': 17, 'name': 'Shampo para perro en barra',
    'img': '../src/images/catalogo/Shampoo-perro-barra.png',
    'description': 'Shampo en barra para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso previene de pulgas y garrapatas',
    'price': 30.00,
    'pet': 'dog',
    'category': 'cleaning'
});
//18. Quitamanchas
addItem({
    'id': 18, 'name': 'Quitamanchas de mascotas',
    'img': '../src/images/catalogo/Quita-manchas.png',
    'description': 'Elimina esas manchas y malos olores causadas por tu mascota en superficies',
    'price': 150.00,
    'pet': 'dog',
    'category': 'cleaning'
});
//19. Limpieza dental
addItem({
    'id': 19, 'name': 'Limpieza dental para perro',
    'img': '../src/images/catalogo/limpieza-dental.png',
    'description': 'Dale un buen cuidado bucal a tu perro previniendo así enfermedades/bacterias y malos olores',
    'price': 120.00,
    'pet': 'dog',
    'category': 'cleaning'
});
//20. Quita olores
addItem({
    'id': 20, 'name': 'Quita olores de mascota',
    'img': '../src/images/catalogo/Limpiador-para-perro.png',
    'description': 'Elimina olor dejado por tu mascota despues de hacer sus necesidades y previene que no vuelva hacerlo en el mismo lugar',
    'price': 170.00,
    'pet': 'dog',
    'category': 'cleaning'
});

//21. Camita para perro
addItem({
    'id': 21, 'name': 'Camita P-rruna',
    'img': '../src/images/catalogo/DogBed1.png',
    'description': '¿Un día agotador? Dale el descanso que se merece a tu peludo con esta preciosa cama en forma de sandalia. Hecha con materiales 100% naturales, le dará a tu amig@ un descanso reparador.',
    'price': 1314.00, 'pet': 'dog', 'category': 'toys'
})

//22. Casita para perro una planta
addItem({
    'id': 22, 'name': 'K-sita K9',
    'img': '../src/images/catalogo/DogHouse1.png',
    'description': 'Pensado principalmente para cachorros, haz que éste pase horas de diversión masticando su juguete y no tu calzado diario. Precaución: exceso de dulzura al ver a tu amiguito pasándola bien.',
    'price': 5163, 'pet': 'dog', 'category': 'accesory'
})

//23. Casita para perro 2 plantas
addItem({
    'id': 23, 'name': 'K-sita K9 Suite de 2 plantas',
    'img': '../src/images/catalogo/DogHouse2.png',
    'description': '¿Acaso hay más un un miembro peludo en la familia? ¡No hay problema! Esta hermosa suite para dos amiguit@s está pensada exclusivamente para ahorrar espacio.',
    'price': 10011.00, 'pet': 'dog', 'category': 'accesory'
})


// 24. Dispensador de snack para gato 
addItem({
    'id': 24, 'name': 'Dispensador de snack para gato',
    'img': 'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png',
    'description': 'Logra que tu gatito se mantenga saludable y entretenido con este dispensador de bocadillos, que lo estimula física y mentalmente', 'price': 500,
    'pet': 'cat', 'category': 'toys'
});

// 25. Tunel para gatos 
addItem({
    'id': 25, 'name': 'Tunel para gatos',
    'img': 'https://aristopet.com/wp-content/uploads/2020/11/tunel-1.png',
    'description': 'Dale un lugar seguro, obscuro y muy entretenido a tu gato, su instinto de cacería siempre estará en sus juegos con este tunel', 'price': 350,
    'pet': 'cat', 'category': 'toys'
});

// 26. Vara juguete para gato
addItem({
    'id': 26, 'name': 'Vara juguete para gato',
    'img': 'https://nakanpets.com/wp-content/uploads/2022/06/2-12.png',
    'description': 'Ejercita la mente, reflejos y físico de tu gatito con esta varita, pasando grandes momentos de diversión', 'price': 100,
    'pet': 'cat', 'category': 'toys'
});

// 27. Ratoncitos para gato 
addItem({
    'id': 27, 'name': 'Ratoncitos para gato "Kitten',
    'img': 'https://www.nutypet.com/wp-content/uploads/2021/08/juguete-de-raron-500x500.png',
    'description': 'Ratoncitos de peluche para gato, con materiales no tóxicos y ecológicos', 'price': 150,
    'pet': 'cat', 'category': 'toys'
});

// 28. Pelotas para gato 
addItem({
    'id': 28, 'name': 'Pelotas para gato',
    'img': 'https://w7.pngwing.com/pngs/538/164/png-transparent-cat-play-and-toys-cat-play-and-toys-fish-ball-cat-toy-pet-ball-cat-thumbnail.png',
    'description': '¿Quién dijo que a los gatos no les gusta ir por la pelota?, crea un vínculo con tu mascota con este set de pelotas', 'price': 200,
    'pet': 'cat', 'category': 'toys'
});

// 29. Ropa para gato ejecutivo corbata azul lisa
addItem({
    'id': 29, 'name': 'Ropa para gato ejecutivo corbata azul lisa',
    'img': '../src/images/catalogo/ropa gato ejecutiva azul lisa.jpg',
    'description': 'Elegante y casual, corbata azul marino lisa',
    'price': 250,
    'pet': 'cat',
    'category': 'accesory'
});
// 30. Ropa para gato ejecutivo corbata salmon con franjas
addItem({
    'id': 30, 'name': 'Ropa para gato ejecutivo corbata salmon con franjas',
    'img': '../src/images/catalogo/ropa gato ejecutiva franjas.jpg',
    'description': 'Elegante y casual, corbata salmon con franjas negras',
    'price': 250,
    'pet': 'cat',
    'category': 'accesory'
});
// 31. Ropa para gato hawaii
addItem({
    'id': 31, 'name': 'Ropa para gato hawaiana',
    'img': '../src/images/catalogo/ropa gato hawaianai.jpg.jpg',
    'description': 'Fresca y comoda camisa  hawaiana ',
    'price': 350,
    'pet': 'cat',
    'category': 'accesory'
});
// 32. Ropa para gato kimono
addItem({
    'id': 32, 'name': 'Ropa para gato kimono',
    'img': '../src/images/catalogo/ropa gato kimono.jpg',
    'description': 'Tradicional kimono japones neko',
    'price': 400,
    'pet': 'cat',
    'category': 'accesory'
});
// 33. Ropa para gato casino mixologo
addItem({
    'id': 33, 'name': 'Ropa para gato casino mixologo',
    'img': '../src/images/catalogo/ropa gato mixologo.jpg',
    'description': 'Casino mixologo, porte profesional gatuno',
    'price': 400,
    'pet': 'cat',
    'category': 'accesory'
});



//34 comida premium
addItem({
    'id': 34, 'name': 'Gato especial',
    'img': 'https://www.perfectsense.mx/wp-content/uploads/Gato.jpg',
    'description': 'Deliciosa comida preparada por los mejores chefs del mundo para ,para ese gato quisquilloso en la comida,contiene proteína para esos reyes de la casa. ', 'price': 1600
    , 'pet': 'cat', 'category': 'food'
});
//35 comida loco
addItem({
    'id': 35, 'name': 'loco pro la comida',
    'img': 'https://http2.mlstatic.com/D_NQ_NP_884668-MLM50166068178_062022-O.jpg',
    'description': 'Deliciosa comida para compartir para todos los gatos, contiene pescado producto importado.', 'price': 150
    , 'pet': 'cat', 'category': 'food'
});
//36 comida delicias
addItem({
    'id': 36,
    'name': 'Delicia',
    'img': 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/6/6/666193_1240134170.jpg',
    'description': 'Delicia, mejor alimento para tu gato, contiene pescado, camarón y otras cosas más para esos gatos que les gusta comer de más.',
    'price': 325,
    'pet': 'cat',
    'category': 'food'
});
// 37 sobre
addItem({
    'id': 37, 'name': 'Me gusta sobre',
    'img': 'https://www.costco.com.mx/medias/sys_master/products/hc7/hce/62467576070174.jpg',
    'description': 'Deliciosos sobres de Whiskas, caja con 24 piezas para tener en todo el mes y poder darle ese regalo a tu gato glotón.', 'price': 436
    , 'pet': 'cat', 'category': 'food'
});
//38 paquete
addItem({
    'id': 38,
    'name': 'El Paquete',
    'img': 'https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:eco/mg/gm/1p/images/product-images/img_large/00750107221577l.jpg',
    'description': 'un increible paquete para tu gato gloton una bolsa de comida de gato y sobres para ese gato que tanto quieres',
    'price': 750,
    'pet': 'cat',
    'category': 'food'
});


// 39. Shampoo para gato
addItem({
    'id': 39,
    'name': 'Shampoo para gato',
    'img': '../src/images/catalogo/ShampooGato.png',
    'description': 'Shampoo para gato, elimina malos olores de tu felino dejando su pelo suave y con un agradable aroma.',
    'price': 145.00,
    'pet': 'cat',
    'category': 'cleaning'
});

// 40. Cepillo para gato
addItem({
    'id': 40,
    'name': 'Cepillo para gato',
    'img': '../src/images/catalogo/CepilloParaGato.png',
    'description': 'Cepillo de cerda fina para remover el pelo muesrto de tu gato.',
    'price': 120.00,
    'pet': 'cat',
    'category': 'cleaning'
});

// 41. Cepillo dental para gato
addItem({
    'id': 41,
    'name': 'Cepillo dental para gato',
    'img': '../src/images/catalogo/CepilloDientesGato.png',
    'description': 'Este kit de cuidado dental cuenta con un cepillo de dientes y una pasta de dientes para gatos con sabor a pollo para que no tengas líos con la aceptación de tu felino hacia la pasta. ',
    'price': 140.00, 'pet': 'cat',
    'category': 'cleaning'
});

// 42. Talco antipulgas
addItem({
    'id': 42,
    'name': 'Talco antipulgas para perro y gato',
    'img': '../src/images/catalogo/TalcoGato.png',
    'description': 'Talco Bolfo ayuda a eliminar los problemas de pulgas y garrapatas de tu mascota',
    'price': 150.00, 'pet': 'cat',
    'category': 'cleaning'
});

// 43. Jabón para gato
addItem({
    'id': 43,
    'name': 'Jabón limpieza profunda gato',
    'img': '../src/images/catalogo/JabonGato.png',
    'description': 'Limpia y desinfecta profundamente, da brillo, desodoriza y restaura la condición del pelo y la piel de tu felinos.',
    'price': 80.00, 'pet': 'cat',
    'category': 'cleaning'
});

// 44. Cama gato mimbre
addItem({
    'id': 44, 'name': 'Cama para gato de mimbre',
    'img': '../src/images/catalogo/camaGato1.png',
    'description': 'Dale comodidad y espacio a tu gatito con esta cama',
    'price': 400,
    'pet': 'cat',
    'category': 'accesory'
});

// 45. Cama gato fibra
addItem({
    'id': 45, 'name': 'Cama para gato de microfibra',
    'img': '../src/images/catalogo/camaGato2.png',
    'description': 'Suavecita, con superficie de microfibra',
    'price': 350,
    'pet': 'cat',
    'category': 'accesory'
});

// 46. Cama gato algodón
addItem({
    'id': 46, 'name': 'Cama para gato de algodón',
    'img': '../src/images/catalogo/camaGato3.png',
    'description': 'Comodidad y frescura el minino',
    'price': 350,
    'pet': 'cat',
    'category': 'accesory'
});
