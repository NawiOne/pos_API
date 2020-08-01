const express = require('express');

const menuRouter = require('./menu');
const historyRouter = require('./history');

const indexRouter = express.Router();

indexRouter.use('/', menuRouter);
indexRouter.use('/history', historyRouter)

module.exports = indexRouter;