const historyModel = require('../Models/history');
const formRespon = require('../Helpers/form-respon')

const historyController = {
    showHistory: ( _, res) =>{
        historyModel.showHistory()
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.err(res,err)
        })
    },
    showByCashier: (req, res) =>{
        historyModel.showByCashier(req.params.cashier)
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    }
}

module.exports = historyController;