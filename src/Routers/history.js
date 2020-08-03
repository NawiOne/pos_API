const express = require('express');

const historyController = require('../Controllers/history');

const historyRouter = express.Router();

// show all history
historyRouter.get('/', historyController.showHistory)
// show by cashier
historyRouter.get('/search/:cashier', historyController.showByCashier)


module.exports = historyRouter