const express = require('express');

const historyController = require('../Controllers/history');

const historyRouter = express.Router();

// show all history
historyRouter.get('/show', historyController.showHistory)
// show by cashier
historyRouter.get('/showcashier/:cashier', historyController.showByCashier)


module.exports = historyRouter