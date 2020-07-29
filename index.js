const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mySQL = require('mysql');


const app = express();

const port = 8000;
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});


const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    database: "pos",
    password: "",
  });


db.connect((err) => {
    if(err) throw err;
    console.log('database conected');
});

const Router = express.Router();
app.use(logger('dev'));
app.use(Router);

Router.get("/ex", (req, res) => {
    res.send('hello ini contoh router');
});


const queryPromise = () => {
  return  new Promise((resolve, reject) => {
        const queryString = "SELECT menu.name, menu.price, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id_category";
        db.query(queryString, (err, data) => {
            if(!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

Router.get('/getDb', (_,res) =>{
    queryPromise().then(data =>{
        res.send(data)
    }).catch(err =>{
        res.send(err)
    })
})
