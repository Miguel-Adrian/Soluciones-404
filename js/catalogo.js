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
//11. alimento para perro
addItem({ 'id':11, 'name': 'Alimento Purina Dow Chow de 15 Kg',
    'img':'../src/images/catalogo/alimentoparaperro1.jpg',
    'description':'Alimento PURINA DOG CHOW para adulto. Tamaño de raza: medianos y grandes.', 
    'price':749, 
    'pet':'dog',
    'category':'food' });
//12. alimento para perro
addItem({'id':12, 'name': 'Alimento para perro Ganador 20 Kg', 
    'img':'../src/images/catalogo/alimentoparaperro2.jpg',
    'description':'Alimento para perro de la marca Ganador para adulto de razas medianas y grandes.' , 
    'price':899, 
    'pet':'dog',
    'category':'food'});

//13. alimento para perro
addItem({'id':13, 'name': 'Alimento para perro de la marca Perron 25Kg',
    'img':'../src/images/catalogo/alimentoparaperro3.jpg',
    'description':'Alimento de mayor nutrición a menor precio, para perros adultos de todas las razas y tamaños', 
    'price':899, 
    'pet':'dog',
    'category':'food'});

//14. alimento para perro
addItem({'id':14, 'name': 'Alimento para perro de la marca Purina ONE 3,5 Kg',
    'img':'../src/images/catalogo/alimentoparaperro4.jpg',
    'description':'Alimento super premium de la marca Purina ONE con pollo y cordero de verdad contribuye a un corazón sano y musculos fuertes',
    'price':459, 
    'pet':'dog',
    'category':'food'});

//15. alimento para perro
addItem({'id':15, 'name': 'Alimento para perro de la marca NUPEC 2 Kg',
    'img':'../src/images/catalogo/alimentoparaperro5.jpg',
    'description':'alimento con el balance de vitaminas, minerales, grasas, proteínas y energía adecuados para esta etapa de vida que definirá su calidad de vida adulta.',
    'price':265, 
    'pet':'dog',
    'category':'food'});