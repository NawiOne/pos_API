const express = require('express');

const menuRouter = require('./menu');
const historyRouter = require('./history');
const cartRouter = require('../Routers/cart')

const indexRouter = express.Router();

indexRouter.use('/', menuRouter);
indexRouter.use('/history', historyRouter)
indexRouter.use('/cart', cartRouter)

module.exports = indexRouter;