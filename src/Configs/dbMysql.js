const mySQL = require("mysql");

const db = mySQL.createConnection({
    host : 'localhost',
    user: 'root',
    database: 'pos',
    password: '',
});
db.connect((err)=>{
    if(err) throw err;
    console.log('Database connected');
});

module.exports = db;