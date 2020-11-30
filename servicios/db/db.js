const mysql = require('mysql');
const router = require('../routes/routes');
const connection = mysql.createConnection({
    host: 'b1byj05ekqftus7btkkj-mysql.services.clever-cloud.com',
    user: 'utgxsayswedztbqi',
    password:'UxTdDwUmLTfspt8poJh6',
    database:'b1byj05ekqftus7btkkj',
    port: '3306',
    url: 'mysql://utgxsayswedztbqi:UxTdDwUmLTfspt8poJh6@b1byj05ekqftus7btkkj-mysql.services.clever-cloud.com:3306/b1byj05ekqftus7btkkj',
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