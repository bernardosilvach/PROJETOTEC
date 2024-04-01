create database ClientKey;

use clientkey;

CREATE TABLE usuarios(
	cpf varchar(255) NOT NULL UNIQUE PRIMARY KEY, 
    nome_completo varchar(255) NOT NULL, 
    senha varchar(255) NOT NULL,
    email varchar(255) UNIQUE,
    foto_perfil varchar(255),
    nome_empresa varchar(255) NOT NULL,
    logo_empresa varchar(255),
    endereço varchar(255)
);