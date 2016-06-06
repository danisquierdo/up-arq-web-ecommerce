//codigo para utilizar mysql

var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'interactive-books-db'
});


connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

exports.query = function(sql){
    connection.query(sql, function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
}

//como usar:
//var db = require('../model/db');
//db.query('SELECT * from users LIMIT 2');