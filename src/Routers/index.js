const express = require('express');
const checkToken = require('../Helpers/midleware/checktoken')

const menuRouter = require('./menu');
const historyRouter = require('./history');
const cartRouter = require('../Routers/cart');
const authRouter = require('../Routers/auth');


const indexRouter = express.Router();

indexRouter.use('/', menuRouter);
indexRouter.use('/history',checkToken, historyRouter)
indexRouter.use('/cart', cartRouter);




indexRouter.use("/auth", authRouter);
module.exports = indexRouter;