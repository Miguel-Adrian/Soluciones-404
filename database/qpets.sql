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
  `mascota_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`producto_id`, `mascota_id`, `categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`mascotas_has_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`mascotas_has_categorias` (
  `mascota_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`mascota_id`, `categoria_id`))
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
  `contrasenia` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`carritos` (
  `carrito_id` INT NOT NULL AUTO_INCREMENT,
  `costo_total` DECIMAL(7,2) NOT NULL,
  `total_productos` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`carrito_id`, `usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qpetsdb`.`carritos_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `qpetsdb`.`carritos_has_productos` (
  `cantidad_producto` INT NOT NULL,
  `carrito_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `mascota_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`carrito_id`, `usuario_id`, `producto_id`, `mascota_id`, `categoria_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
