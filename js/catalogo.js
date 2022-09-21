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

// 39. Shampoo para gato
addItem({'id':39,
'name':'Shampoo para gato',
'img':'../src/images/catalogo/ShampooGato.png',
'description':'Shampoo para gato, elimina malos olores de tu felino dejando su pelo suave y con un agradable aroma.',
'price':145.00,
'pet':'cat',
'category':'cleaning'
});

// 40. Cepillo para gato
addItem({'id':40,
'name':'Cepillo para gato',
'img':'../src/images/catalogo/CepilloParaGato.png',
'description':'Cepillo de cerda fina para remover el pelo muesrto de tu gato.',
'price':120.00,
'pet':'cat',
'category':'cleaning'
});

// 41. Cepillo dental para gato
addItem({'id':41,
'name':'Cepillo dental para gato',
'img':'../src/images/catalogo/CepilloDientesGato.png',
'description':'Este kit de cuidado dental cuenta con un cepillo de dientes y una pasta de dientes para gatos con sabor a pollo para que no tengas líos con la aceptación de tu felino hacia la pasta. ',
'price':140.00,'pet':'cat',
'category':'cleaning'
});

// 42. Talco antipulgas
addItem({'id':42,
'name':'Talco antipulgas para perro y gato',
'img':'../src/images/catalogo/TalcoGato.png',
'description':'Talco Bolfo ayuda a eliminar los problemas de pulgas y garrapatas de tu mascota',
'price':150.00,'pet':'cat',
'category':'cleaning'
});

// 43. Jabón para gato
addItem({'id':43,
'name':'Jabón limpieza profunda gato',
'img':'../src/images/catalogo/JabonGato.png',
'description':'Limpia y desinfecta profundamente, da brillo, desodoriza y restaura la condición del pelo y la piel de tu felinos.',
'price':80.00,'pet':'cat',
'category':'cleaning'
});