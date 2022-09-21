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

addItem({'id' :21, 'name':'Shampo para perro liquido',
    'img':'../src/images/catalogo/Shampoo perro.png',
    'description':'Shampo líquido para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso', 
    'price': 50.00, 
    'pet':'dog',
    'category':'cleaning'
    });

addItem({'id' :22, 'name':'Shampo para perro en barra',
    'img':'../src/images/catalogo/Shampoo-perro-barra.png',
    'description':'Shampo en barra para perros,elimina malos olores de tu perro y deja su pelo suave y brilloso previene de pulgas y garrapatas',
     'price': 30.00,
      'pet':'dog',
    'category':'cleaning'});

addItem({'id' :23, 'name':'Quitamanchas de mascotas',
    'img':'../src/images/catalogo/Quita-manchas.png',
    'description':'Elimina esas manchas y malos olores causadas por tu mascota en superficies',
     'price': 150.00,
      'pet':'dog',
    'category':'cleaning'});

addItem({'id' :24, 'name':'Limpieza dental para perro',
    'img':'../src/images/catalogo/limpieza-dental.png',
    'description':'Dale un buen cuidado bucal a tu perro previniendo así enfermedades/bacterias y malos olores',
     'price': 120.00, 
     'pet':'dog',
    'category':'cleaning'});

addItem({'id': 25, 'name':'Quita olores de mascota',
    'img':'../src/images/catalogo/Limpiador-para-perro.png',
    'description':'Elimina olor dejado por tu mascota despues de hacer sus necesidades y previene que no vuelva hacerlo en el mismo lugar',
     'price': 170.00,
      'pet':'dog',
    'category':'cleaning'})