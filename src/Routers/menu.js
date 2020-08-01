const express = require('express');

const menuController = require('../Controllers/menu');

const menuRouter = express.Router();

menuRouter.get('/getalldata', menuController.getAllMenus);
menuRouter.post('/insert', menuController.insertMenus);
menuRouter.delete('/delete', menuController.deleteByid);
menuRouter.patch('/update', menuController.updateById);

module.exports = menuRouter;