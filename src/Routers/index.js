const express = require('express');

const menuRouter = require('./menu');

const indexRouter = express.Router();

indexRouter.use('/', menuRouter);

module.exports = indexRouter;