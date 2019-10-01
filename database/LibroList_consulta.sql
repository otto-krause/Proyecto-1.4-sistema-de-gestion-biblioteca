SELECT
    A.cod_Libro,
    A.isbn,
    A.estado,
    B.titulo,
    B.Editorial,
    D.nombre
FROM
    Ejemplar AS A
INNER JOIN Libro AS B
ON
    A.cod_Libro = B.cod_Libro
INNER JOIN Libro_Autor AS C
ON
    B.cod_Libro=C.cod_Libro
INNER JOIN Autor AS D
ON 
    C.cod_autor = D.cod_autor