const express = require('express');

const orderUserController = require('../Controllers/orderUser');

const orderUserRouter = express.Router();

orderUserRouter.get('/', orderUserController.showOrder);
orderUserRouter.post('/', orderUserController.insertOrder)

module.exports = orderUserRouter;