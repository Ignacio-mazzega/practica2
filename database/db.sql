CREATE DATABASE Cosecha;

USE Cosecha;

CREATE TABLE Encargado (
    id_encargado INT NOT NULL,
    cuil varchar(20) NOT NULL PRIMARY KEY,
    nombre varchar(45) NOT NULL,
    fecha_nacimiento DATE,
    dni INT
);

CREATE TABLE Cosechador (
    id_cosechador INT NOT NULL,
    cuil varchar(20) NOT NULL PRIMARY KEY,
    nombre varchar(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    fecha_nacimiento DATE,
    nacionalidad varchar(20),
    direccion varchar(100),
    dni INT
);

SELECT*FROM Cosechador,

ALTER TABLE Encargado
    MODIFY id_encargado INT NOT NULL PRIMARY KEY AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE Encargado;