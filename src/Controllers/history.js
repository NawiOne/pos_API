const historyModel = require('../Models/history');

const historyController = {
    showHistory: ( _, res) =>{
        historyModel.showHistory()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    showByCashier: (req, res) =>{
        historyModel.showByCashier(req.params.cashier)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    }
}

module.exports = historyController;