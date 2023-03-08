require('dotenv').config();
const { createPool } = require('mysql');

let connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DB,
    multipleStatements: true
});

module.exports = connection;