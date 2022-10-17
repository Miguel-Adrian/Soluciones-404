-- Usuarios
INSERT INTO `qpetsdb`.`usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `telefono`, `contrasenia`) VALUES ('Master', 'Q-Pets', 'soporteQpets@gmail.com', '529999999999', 'Pa$$w0rd');


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
-- 2. Hueso de caucho
INSERT INTO `qpetsdb`.`productos` (`nombre_producto`, `descripcion`, `precio`, `imagen`, `mascota_id`, `categoria_id`) VALUES ('Huesito Fiu Fiu', 'Hueso de caucho de uso rudo. Ideal para canes adultos. Este juguete puede ser útil para evitar que tu perro muerda objetos que no debería morder. Antiestrés.', '120.00', '../src/images/catalogo/DogSqueakyDonut.png', '1', '1');
