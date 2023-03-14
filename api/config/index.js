require('dotenv').config();
const { createPool } = require('mysql');
//Error: Handshake inactivity timeout
//https://stackoverflow.com/questions/35553432/error-handshake-inactivity-timeout-in-node-js-mysql-module
let connection = createPool({
    
    connectionLimit : 10000,
    connectTimeout  : 60 * 60 * 10000,
    acquireTimeout  : 60 * 60 * 10000,
    timeout         : 60 * 60 * 10000,

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DB,
    multipleStatements: true
});

module.exports = connection;