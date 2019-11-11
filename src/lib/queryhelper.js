module.exports = {
    searchFormQuery(datos, consulta){
        console.log(datos);
        if(datos && datos != 0){
            console.log(Object.keys(datos).length);
            console.log(Object.values(datos)[0]);
            for(let i = 0; i < Object.keys(datos).length; i++)
            {
                if(Object.values(datos)[i]){
                    var count = parseInt(0);
                    for (let key in datos) {
                        if (!datos[key]) {
                            count ++;
                        }
                    }
                    console.log(count)
                    console.log(consulta === 'select * from tabla_Libros where '?true:false);
                    if (count != 6 && consulta != 'select * from tabla_Libros where '){
                        consulta += ' and ';
                    }
                    console.log(i);
                    switch(i){
                            case 0:
                                consulta += (`cod_libro like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 1:
                                consulta += (`isbn like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 2:
                                consulta += (`titulo like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 3:
                                consulta += (`nombre like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 4:
                                consulta += (`apellido like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 5:
                                consulta += (`editorial like "%${Object.values(datos)[i]}%"`);
                                break;
                            case 6:
                                consulta += (`estado like "%${Object.values(datos)[i]}%"`);
                                break;
                    }
                }
            }
        }
        else{
            consulta = "select * from tabla_Libros";
        }
        console.log(consulta);
        return consulta;
    }
}