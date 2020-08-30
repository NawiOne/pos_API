const historyModel = require('../Models/history');
const formRespon = require('../Helpers/form-respon')

const historyController = {
    showHistory: ( _, res) =>{
        historyModel.showHistory()
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },

    getAllHis: (_, res) =>{
        historyModel.selectAllHis()
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    } ,
    // insertHis:(req, res) =>{
    //     historyModel.insertHistory(req.body)
    //     .then((data) =>{
    //         const resData={
    //             ...req.body
    //         }
    //         formRespon.success(res, resData)
    //     })
    //     .catch((err) =>{
    //         formRespon.error(res,err)
    //     })
    // },
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