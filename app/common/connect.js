let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anvip123',
    database: 'demo.nodejs',
})

connection.connect((err) => {
    if (err) console.log('ket noi CSDL ko thanh cong: ', err);
});

module.exports = connection;