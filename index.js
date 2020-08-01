const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./src/Routers/index');

const app = express();

//membuat web server dengan port 8000
const port = 8000;
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});

app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(logger('dev'));

app.use(indexRouter);



