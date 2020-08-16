const cartModel = require("../Models/cart");
const formRespon = require("../Helpers/form-respon");

const cartController = {
    getCart : (_, res) =>{
        cartModel.getCart()
        .then((data) =>{
            console.log(data)
            formRespon.success(res, data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    insertCart: (req, res) =>{
        cartModel.insertCart(req.body)
        .then((data) =>{
            formRespon.success(res,data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    },
    getCartById: (req, res) =>{
        cartModel.getCartById(req.params.id)
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    },

    delAllCart:(req,res) =>{
        cartModel.delAllCart()
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    },
    delCartById: (req, res) =>{
        cartModel.delCartById(req.params.id)
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    },
    updateCart: (req, res) =>{
        cartModel.updateCart(req.body)
        .then((data) =>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
    }
}

module.exports = cartController