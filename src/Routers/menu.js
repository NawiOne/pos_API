const express = require('express');

const menuController = require('../Controllers/menu');

const menuRouter = express.Router();

// get all menu
menuRouter.get('/getalldata', menuController.getAllMenus);
// insert new menu
menuRouter.post('/insert', menuController.insertMenus);
// delete existing menu
menuRouter.delete('/delete', menuController.deleteByid);
// update existing menu
menuRouter.patch('/update', menuController.updateById);
// search menu by name
menuRouter.get('/search/', menuController.searchByName);
// sort by 
menuRouter.get('/sortby', menuController.sortBy);


module.exports = menuRouter;