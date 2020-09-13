const orderUSerModel = require('../Models/orderUser');
const formRespon = require('../Helpers/form-respon');

const orderUSerController = {
    showOrder : (_, res) =>{
        orderUSerModel.showOrder()
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    },
    insertOrder: (req, res) =>{
        orderUSerModel.insertOrder(req.body)
        .then((data) =>{
            const resData={
                ...req.body
            }
            formRespon.success(res, resData)
        }).catch((err) =>{
            formRespon.error(res,err)
        })
    }
}

module.exports= orderUSerController;