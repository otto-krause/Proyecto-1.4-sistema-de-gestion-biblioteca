INSERT INTO `autor` (`cod_autor`, `nacionalidad`, `nombre`, `apellido`) VALUES (NULL, 'argentino', 'José Luis', 'Espert');
INSERT INTO `libro` (`cod_libro`, `titulo`, `editorial`) VALUES (NULL, 'La Sociedad Cómplice', 'Sudamericana');
INSERT INTO `ejemplar` (`isbn`, `cod_libro`, `estado`) VALUES ('978950076', '2', 'Disponible');
INSERT INTO `libro` (`cod_libro`, `titulo`, `editorial`) VALUES (NULL, 'DOU', 'Sudamericana');
INSERT INTO `ejemplar` (`isbn`, `cod_libro`, `estado`) VALUES ('565489875', '4', 'Disponible');

CREATE VIEW tabla_Libros AS SELECT A.cod_libro, A.isbn, A.estado, B.titulo, B.editorial, D.nombre, D.apellido FROM ejemplar AS A INNER JOIN libro AS B ON A.cod_libro = B.cod_libro INNER JOIN libro_autor AS C ON B.cod_libro=C.cod_libro INNER JOIN autor AS D ON C.cod_autor = D.cod_autor order by A.cod_libro DESC;