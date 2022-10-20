-- Usuarios
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('Master', 'Q-Pets', 'soporteQpets@gmail.com', '529999999999', 'Pa$$w0rd');
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('Sunny', 'Orange', 'sunnyorange@gmail.com', '525583580974', 'Sun342h');
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('Moro', 'Cat', 'gatitos@gmail.com', '526678456372', 'ar3n3r0s');
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('Leonora', 'Pardo', 'gatitosesponjados@gmail.com', '523453678987', 'c0lit4sfelices');
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('El', 'Ruffs', 'elruffs@gmail.com', '529874637457', 'p3rr1t0sun1d0s');

-- Mascotas
INSERT INTO `qpetsdb`.`mascotas` (`nombre_mascota`) VALUES ('Perro');
INSERT INTO `qpetsdb`.`mascotas` (`nombre_mascota`) VALUES ('Gato');
INSERT INTO `qpetsdb`.`mascotas` (`nombre_mascota`) VALUES ('Conejo');
INSERT INTO `qpetsdb`.`mascotas` (`nombre_mascota`) VALUES ('Iguana');
INSERT INTO `qpetsdb`.`mascotas` (`nombre_mascota`) VALUES ('Elefante blanco');


-- Categorías
INSERT INTO `qpetsdb`.`categorias` (`nombre_categoria`) VALUES ('Juguetes');
INSERT INTO `qpetsdb`.`categorias` (`nombre_categoria`) VALUES ('Accesorios');
INSERT INTO `qpetsdb`.`categorias` (`nombre_categoria`) VALUES ('Alimento');
INSERT INTO `qpetsdb`.`categorias` (`nombre_categoria`) VALUES ('Limpieza');
INSERT INTO `qpetsdb`.`categorias` (`nombre_categoria`) VALUES ('Misceláneo');


-- Carritos
INSERT INTO `qpetsdb`.`carritos` (`costo_total`, `total_productos`, `usuario_id`) VALUES ('500', '2', '2');
INSERT INTO `qpetsdb`.`carritos` (`costo_total`, `total_productos`, `usuario_id`) VALUES ('1000', '2', '3');
INSERT INTO `qpetsdb`.`carritos` (`costo_total`, `total_productos`, `usuario_id`) VALUES ('750', '3', '4');
INSERT INTO `qpetsdb`.`carritos` (`costo_total`, `total_productos`, `usuario_id`) VALUES ('650', '3', '5');
INSERT INTO `qpetsdb`.`carritos` (`costo_total`, `total_productos`, `usuario_id`) VALUES ('1000', '5', '6');

-- Productos

-- 1. Dona chillona
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Dona chillona', 'El juguete emite un chillido cuando es presionada, algo que le encantará a tu perro, sea cachorro o adulto.', '199.00', '../src/images/catalogo/DogSqueakyDonut.png', '1', '1');
-- 2. Hueso Fiu-Fiu
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Huesito Fiu Fiu', 'Hueso de caucho de uso rudo. Ideal para canes adultos. Este juguete puede ser útil para evitar que tu perro muerda objetos que no debería morder. Antiestrés.', '120.00', '../src/images/catalogo/DogSqueakyDonut.png', '1', '1');
-- 3. Hoodie para perro
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Hoodie para perro', 'Protege a tu perrito del frío con este adorable hoodie.', '400.00', '../src/images/catalogo/HoodiePerro.png', '1', '2');
-- 4. Beanie para perro
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Beanie para Perro', 'Perfecto para salir a la calle', '100.00', '../src/images/catalogo/beaniePerro.png', '1', '2');
-- 5. Alimento Purina Dog Chow de 15 Kg
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Alimento Purina Dog Chow de 15 Kg', 'Alimento PURINA DOG CHOW para adulto. Tamaño de raza: medianos y grandes.', '749.00', '../src/images/catalogo/alimentoparaperro1.jpg', '1', '3');
-- 6. Alimento para perro de la marca NUPEC 2 Kg
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Alimento para perro de la marca NUPEC 2 Kg', 'Alimento con el balance de vitaminas, minerales, grasas, proteínas y energía adecuados para esta etapa de vida que definirá su calidad de vida adulta.', '265.00', '../src/images/catalogo/alimentoparaperro5.jpg', '1', '3');
-- 7. Shampoo en barra para perro
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Shampo en barra para perro', 'Shampo en barra para perros, elimina malos olores de tu perro y deja su pelo suave y brilloso previene de pulgas y garrapatas', '30.00', '../src/images/catalogo/Shampoo-perro-barra.png', '1', '4');
-- 8. Limpieza dental para perro
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Limpieza dental para perro', 'Dale un buen cuidado bucal a tu perro previniendo así enfermedades/bacterias y malos olores', '120.00', '../src/images/catalogo/limpieza-dental.png', '1', '4');
-- 9. Dispensador de snack para gato
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Dispensador de snack para gato', 'Logra que tu gatito se mantenga saludable y entretenido con este dispensador de bocadillos, que lo estimula física y mentalmente', '500.00', 'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png', '2', '1');
-- 10. Túnel para gatos
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Túnel para gatos', 'Dale un lugar seguro, obscuro y muy entretenido a tu gato, su instinto de cacería siempre estará en sus juegos con este túnel', '350.00', 'https://aristopet.com/wp-content/uploads/2020/11/tunel-1.png', '2', '1');
-- 11. Ropa para gato hawaiana
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Ropa para gato hawaiana', 'Fresca y comoda camisa  hawaiana.', '350.00', '../src/images/catalogo/RopaGatoHawaianai.jpg', '2', '2');
-- 12. Ropa para gato kimono
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Ropa para gato kimono', 'Tradicional kimono japonés neko', '400.00', '../src/images/catalogo/RopaGatoKimono.jpg', '2', '2');
-- 13. Loco por la comida
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Loco por la comida', 'Deliciosa comida para compartir para todos los gatos, contiene pescado producto importado.', '150.00', 'https://http2.mlstatic.com/D_NQ_NP_884668-MLM50166068178_062022-O.jpg', '2', '3');
-- 14. Me gusta sobre
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Me gusta sobre', 'Deliciosos sobres de Whiskas, caja con 24 piezas para tener en todo el mes y poder darle ese regalo a tu gato glotón.', '436.00', 'https://www.costco.com.mx/medias/sys_master/products/hc7/hce/62467576070174.jpg', '2', '3');
-- 15. Shampoo para gato
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Shampoo para gato', 'Shampoo para gato, elimina malos olores de tu felino dejando su pelo suave y con un agradable aroma.', '145.00', '../src/images/catalogo/ShampooGato.png', '2', '4');
-- 16. Cepillo dental para gato
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Cepillo dental para gato', 'Este kit de cuidado dental cuenta con un cepillo de dientes y una pasta de dientes para gatos con sabor a pollo para que no tengas líos con la aceptación de tu felino hacia la pasta.', '140.00', '../src/images/catalogo/CepilloDientesGato.png', '2', '4');
-- 17. K-sita K9 Suite de 2 plantas
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('K-sita K9 Suite de 2 plantas', '¿Acaso hay más un un miembro peludo en la familia? ¡No hay problema! Esta hermosa suite para dos amiguit@s está pensada exclusivamente para ahorrar espacio.', '1011.00', '../src/images/catalogo/DogHouse2.png', '1', '2');