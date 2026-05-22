-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE SpiralOutnet ;
USE spiralOutnet;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
	pontuacaoFinal INT,
	porcentagem INT,
	data_horario DATETIME DEFAULT NOW(),
	id_usuario INT,
	CONSTRAINT fk_usuario
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE resposta (
id_resposta INT PRIMARY KEY AUTO_INCREMENT,
numero_questao INT,
acertou BOOLEAN,
fk_quiz INT,
CONSTRAINT ctfkquiz
FOREIGN KEY (fk_quiz)
REFERENCES quiz(id_quiz)
);