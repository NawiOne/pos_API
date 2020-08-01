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
menuRouter.get('/search/:name', menuController.searchByName);
// sort by name
menuRouter.get('/sortbyname', menuController.sortByName);
// sort by category
menuRouter.get('/sortbycategory', menuController.sortByCategory);
// sort by newest
menuRouter.get('/sortbynewest', menuController.sortByNewest);
// sort by price
menuRouter.get('/sortbyprice', menuController.sortByPrice);

module.exports = menuRouter;