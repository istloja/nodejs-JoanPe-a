const mysql = require('mysql');
const config = require('../Config/db-config');

const conection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.name
});

conection.connect(err =>{
    if (err){
        console.log(err)
        throw err;
    }
    console.log('Conectado')
});

module.exports=conection;