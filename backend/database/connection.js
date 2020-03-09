var mysql = require('mysql');
var config = require('../config/config');

var connection = mysql.createConnection(config.dbObj);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

module.exports = connection;