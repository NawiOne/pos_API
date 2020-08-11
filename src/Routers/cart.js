const express = require('express');

const cartController = require('../Controllers/cart');

const menuRouter = express.Router();

// get data cart
menuRouter.get('/getcart', cartController.getCart);
// insert to cart
menuRouter.post('/insertcart', cartController.insertCart);
// get cart by id
menuRouter.get('/getbyid/:id', cartController.getCartById)
// delete cart by id
menuRouter.delete('/delete/:id', cartController.delCartById)
// update cart
menuRouter.patch('/update', cartController.updateCart)
// delete all cart
menuRouter.delete('/deleteAll', cartController.delAllCart)

module.exports = menuRouter;