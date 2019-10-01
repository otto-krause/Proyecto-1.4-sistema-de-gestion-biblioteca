drop database if exists Biblioteca;
create database Biblioteca;
use Biblioteca;
create table Socio(
    cod_socio int not null,
    nombre varchar(40) not null,
    apellido varchar(40) not null,
    anio int not null,
    especialidad varchar(40) not null,
    division int not null,
    turno varchar(15) not null,
    primary key(cod_socio));
    
create table Autor(
    cod_autor int not null,
    nacionalidad varchar(50) not null,
    nombre varchar(40) not null,
    apellido varchar(40) not null,
    primary key (cod_autor));

ALTER TABLE Autor MODIFY cod_autor INT NOT NULL AUTO_INCREMENT;


create table Libro(
    cod_libro int not null,
    titulo varchar(50) not null,
    editorial varchar(50) not null,
    primary key (cod_libro));
    
ALTER TABLE Libro MODIFY cod_libro INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
    
create table Libro_Autor(
    cod_libro int not null,
    cod_autor int not null,
    primary key (cod_libro, cod_autor),
    foreign key (cod_libro) references Libro (cod_libro),
    foreign key (cod_autor) references Autor (cod_autor));

    

create table Ejemplar(
    isbn int(15) not null,
    cod_libro int not null,
    estado varchar(50) not null,
    primary key (isbn, cod_libro),
    foreign key (cod_libro) references Libro (cod_libro));
    
create table Prestamo(
    cod_prestamo int not null,
    cod_socio int not null,
    isbn int not null,
    fecha_inicio date not null,
    fecha_fin date not null,
    primary key (cod_prestamo, cod_socio, isbn),
    foreign key (cod_socio) references Socio (cod_socio),
    foreign key (isbn) references Ejemplar (isbn));
    
create table Alumno_Socio(
    idAlumno int not null,
    cod_socio int not null,
    primary key (idAlumno, cod_socio),
    /*foreign key (idAlumno) references Alumno (idAlumno),*/
    foreign key (cod_socio) references Socio (cod_socio));
    
create table Autoridad_Socio(
    idAutoridad int not null,
    cod_socio int not null,
    primary key (idAutoridad, cod_socio),
    /*foreign key (idAutoridad) references Autoridades (idAutoridad),*/
    foreign key (cod_socio) references Socio (cod_socio));