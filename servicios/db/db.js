const mysql = require('mysql');
const router = require('../routes/routes');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'equipoppi_8',
    multipleStatements: true
});

connection.connect(function(err){
    if (err){
        console.error(err);
        return;
    } else{
        console.log('base de datos conectada');
    }
});


module.exports = connection;