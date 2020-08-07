const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    // Your Username
    user: "root",
    // Your password
    password: "password",
    database: "employees"
});

connection.connect(function (err) {
    if (Err) throw err;
});

module.exports = connection;
