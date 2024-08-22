require('dotenv').config();
const mysql = require('mysql2');

const conncection = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME 

});

conncection.connect( err => {

    if(err){
        console.error('Databse Connection failed :'+ err.stack);
        return;
    }
    console.log('Connected to database.');

});

module.exports = conncection;
