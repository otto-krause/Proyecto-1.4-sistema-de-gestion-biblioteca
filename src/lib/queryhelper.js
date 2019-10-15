module.exports = {
    searchFormQuery(datos, consulta){
        if(datos){
            if(datos.codlibro)
            {
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                console.log(consulta === 'select * from tabla_Libros where '?true:false);
                if (count === 6 || consulta === 'select * from tabla_Libros where '){
                    consulta += ('cod_libro like ' + '"%'+datos.codlibro+'%"');
                }
                else{
                    consulta += (' and cod_libro like ' + '"%'+datos.codlibro+'%"');
                }
            }
            if(datos.isbn){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                if (count === 6 || consulta === 'select * from tabla_Libros where '){
                    consulta += ('isbn like ' + '"%'+datos.isbn+'%"');
                }
                else{
                    consulta += (' and isbn like ' + '"%'+datos.isbn+'%"');
                }
            }
            if(datos.titulo){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                if (count === 6 || consulta === 'select * from tabla_Libros where '){
                    consulta += ('titulo like ' + '"%'+ datos.titulo + '%"');
                    console.log(consulta)
                }
                else{
                    consulta += (' and titulo like ' + '"%'+ datos.titulo + '%"');
                    console.log(consulta)
                }
            }
            if(datos.nombre){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                if (count === 6 || consulta === 'select * from tabla_Libros where '){
                    consulta += ('nombre like ' + '"%'+ datos.nombre + '%"');
                    console.log(consulta);
                }
                else{
                    consulta += (' and nombre like ' + '"%'+ datos.nombre + '%"');
                    console.log(consulta);
                }
            }
            if(datos.apellido){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                if (count === 6 || consulta === 'select * from tabla_Libros where '){
                    consulta += ('apellido like ' + '"%'+ datos.apellido + '%"');
                    console.log(consulta);
                }
                else{
                    consulta += (' and apellido like ' + '"%'+ datos.apellido + '%"');
                    console.log(consulta);
                }
            }
            if(datos.editorial){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                if (count === 6 && consulta === 'select * from tabla_Libros where '){
                    consulta += ('editorial like ' + '"%'+ datos.editorial + '%"');
                    console.log(consulta);
                }
                else{
                    consulta += (' and editorial like ' + '"%'+ datos.editorial + '%"');
                    console.log(consulta);
                }
            }
            if(datos.disponible){
                var count = parseInt(0);
                for (const key in datos) {
                    if (!datos[key]) {
                        count ++;
                    }
                }
                console.log(count)
                   if (count === 6 && consulta === 'select * from tabla_Libros where '){
                    consulta += ('estado = '+datos.disponible);
                    console.log(consulta);
                    } 
                    else{
                    consulta += (' and estado = '+ datos.disponible);
                    console.log(consulta);
                    }
            }   
            
        }
        else{
            consulta = "select * from tabla_Libros";
        }

        return consulta;
    }
}