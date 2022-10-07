-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema qpetsdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema qpetsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `qpetsdb` DEFAULT CHARACTER SET utf8 ;
USE `qpetsdb` ;

-- -----------------------------------------------------
-- Table `qpetsdb`.`mascotas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`mascotas` (
  `mascota_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_mascota` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`mascota_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`categorias` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` DECIMAL(6,2) NOT NULL,
  `imagen` MEDIUMTEXT NOT NULL,
  `mascotas_mascota_id` INT NOT NULL,
  `categorias_categoria_id` INT NOT NULL,
  PRIMARY KEY (`producto_id`, `mascotas_mascota_id`, `categorias_categoria_id`),
  INDEX `fk_productos_mascotas1_idx` (`mascotas_mascota_id` ASC) VISIBLE,
  INDEX `fk_productos_categorias1_idx` (`categorias_categoria_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`mascotas_has_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`mascotas_has_categorias` (
  `mascotas_mascota_id` INT NOT NULL,
  `categorias_categoria_id` INT NOT NULL,
  PRIMARY KEY (`mascotas_mascota_id`, `categorias_categoria_id`),
  INDEX `fk_mascotas_has_categorias_categorias1_idx` (`categorias_categoria_id` ASC) VISIBLE,
  INDEX `fk_mascotas_has_categorias_mascotas1_idx` (`mascotas_mascota_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `apellido_usuario` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(12) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`carritos` (
  `carrito_id` INT NOT NULL AUTO_INCREMENT,
  `costo_total` DECIMAL(7,2) NOT NULL,
  `total_productos` INT NOT NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`carrito_id`, `usuarios_usuario_id`),
  INDEX `fk_carritos_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`carritos_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`carritos_has_productos` (
  `carritos_carrito_id` INT NOT NULL,
  `carritos_usuarios_usuario_id` INT NOT NULL,
  `productos_producto_id` INT NOT NULL,
  `productos_mascotas_mascota_id` INT NOT NULL,
  `productos_categorias_categoria_id` INT NOT NULL,
  PRIMARY KEY (`carritos_carrito_id`, `carritos_usuarios_usuario_id`, `productos_producto_id`, `productos_mascotas_mascota_id`, `productos_categorias_categoria_id`),
  INDEX `fk_carritos_has_productos_productos1_idx` (`productos_producto_id` ASC, `productos_mascotas_mascota_id` ASC, `productos_categorias_categoria_id` ASC) VISIBLE,
  INDEX `fk_carritos_has_productos_carritos1_idx` (`carritos_carrito_id` ASC, `carritos_usuarios_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
