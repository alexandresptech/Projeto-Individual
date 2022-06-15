create database Mitologia;

use Mitologia;

create table usuario (
	idUsuario int primary key auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50)
);

create table jogo (
	fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario),
	pontos int
);