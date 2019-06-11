var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var n;
    con.query("SELECT * FROM Biblioteca.Alumno;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);    
        n=result;
    });
    res.writeHead(200,n);
    res.write(200,toString(n));
    res.end();
}).listen(8080);