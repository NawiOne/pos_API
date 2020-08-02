const express = require('express');

const historyController = require('../Controllers/history');

const historyRouter = express.Router();

// show all history
historyRouter.get('/show', historyController.showHistory)
// show by cashier
historyRouter.get('/searchcashier/:cashier', historyController.showByCashier)


module.exports = historyRouter