const Handlebars = require('handlebars');
Handlebars.registerHelper('selected0', (datos)=> {
    if(datos.disponible != '')
    {
        alert('dou?');
        return 'selected'; 
    }
    else{

    }
    
});
Handlebars.registerHelper('DOU',()=>{
    var Lib = $('#LibTable').html();
    alert (String(Lib));
});
module.exports = Handlebars;