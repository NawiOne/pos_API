const mySQL = require("mysql");

const db = mySQL.createConnection({
    host : process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
});
db.connect((err)=>{
    if(err) throw err;
    console.log('Database connected');
});

module.exports = db;