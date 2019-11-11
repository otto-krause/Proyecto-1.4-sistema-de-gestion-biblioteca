const Handlebars = require('handlebars');
Handlebars.registerHelper('selected0', (datos)=> {
    if(datos.disponible != '')
    {
        //alert('dou?');
        return 'selected'; 
    }
    else{

    }
    
});
Handlebars.registerHelper('ifUser',(user)=>{
    console.log(user);
    if(user){
        return Handlebars.SafeString(`td><img src="/public/img/icon-add.png" role="button" onclick="addToCart($('libDataRow{{@index}}'))"></td>` );
    }
    return "";
});

module.exports = Handlebars;