create database clientes_db;

use clientes_db;

CREATE TABLE clientes(
	nome varchar(255) NOT NULL UNIQUE PRIMARY KEY,
    cpf varchar(255) UNIQUE,
    email varchar(255),
    telefone varchar(255) NOT NULL UNIQUE,
    adress varchar(255),
    statuscl varchar(255)
);