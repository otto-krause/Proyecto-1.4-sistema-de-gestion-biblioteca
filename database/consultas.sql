INSERT INTO `autor` (`nacionalidad`, `nombre`, `apellido`) VALUES ('argentino', 'José Luis', 'Espert');
INSERT INTO `libro` (`titulo`, `editorial`) VALUES ('La Sociedad Cómplice', 'Sudamericana');
INSERT INTO `ejemplar` (`isbn`, `cod_libro`, `estado`) VALUES ('978950076', '2', 'Disponible');
INSERT INTO `libro` (`titulo`, `editorial`) VALUES ('DOU', 'Sudamericana');
INSERT INTO `ejemplar` (`isbn`, `cod_libro`, `estado`) VALUES ('565489875', '4', 'Disponible');

CREATE VIEW tabla_Libros AS SELECT A.cod_libro, A.isbn, A.estado, B.titulo, B.editorial, D.nombre, D.apellido FROM ejemplar AS A INNER JOIN libro AS B ON A.cod_libro = B.cod_libro INNER JOIN libro_autor AS C ON B.cod_libro=C.cod_libro INNER JOIN autor AS D ON C.cod_autor = D.cod_autor order by A.cod_libro DESC;

CREATE TABLE `usuarios` (
  `username` varchar(18) NOT NULL,
  `password` varchar(64) NOT NULL
);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`) VALUES
('admin', '$2a$10$skqPX7ITqVEOvNlyjSHcQu9YNujBXawtc3TN4v6UcyKyk.TOU8JVy');