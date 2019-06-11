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

create table Libro(
    cod_libro int not null,
    titulo varchar(50) not null,
    editorial varchar(50) not null,
    primary key (cod_libro));
    
create table Libro_Autor(
    cod_libro int not null,
    cod_autor int not null,
    primary key (cod_libro, cod_autor),
    foreign key (cod_libro) references Libro (cod_libro),
    foreign key (cod_autor) references Autor (cod_autor));
    

create table Ejemplar(
    isbn int not null,
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
    
create table Alumno(
    idAlumno int not null,
    dni int not null,
    telefono int not null,
    direccion varchar(100) not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    repetidor boolean not null,
    fechaNacimiento date not null,
    fechaIngreso date not null,
    primary key (idAlumno));
    
create table Roles(
    idRol int not null,
    rol varchar(100) not null,
    primary key (idRol));
    
create table Autoridades_Roles(
    idAutoridad int not null,
    idRol int not null,
    primary key(idRol, idAutoridad),
    foreign key (idRol) references Roles (idRol));
  
    
create table Autoridades(
    idAutoridad int not null,
    idRol int not null,
    dni int not null,
    telefono int not null,
    direccion varchar(100) not null,
    nombre varchar(50) not null,
    apellido varchar (50) not null,
    fechaIngreso date not null,
    fechaNacimiento date not null,
    fichaMedica varchar(50),
    primary key (idAutoridad),
    foreign key (idRol) references Autoridades_Roles (idRol));

ALTER TABLE Autoridades_Roles ADD foreign key (idAutoridad) references Autoridades (idAutoridad);
    
    
create table Alumno_Socio(
    idAlumno int not null,
    cod_socio int not null,
    primary key (idAlumno, cod_socio),
    foreign key (idAlumno) references Alumno (idAlumno),
    foreign key (cod_socio) references Socio (cod_socio));
    
create table Autoridad_Socio(
    idAutoridad int not null,
    cod_socio int not null,
    primary key (idAutoridad, cod_socio),
    foreign key (idAutoridad) references Autoridades (idAutoridad),
    foreign key (cod_socio) references Socio (cod_socio));