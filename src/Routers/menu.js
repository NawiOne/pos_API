const express = require('express');

const menuController = require('../Controllers/menu');
const upload = require('../Helpers/midleware/upload')
const admin = require('../Helpers/midleware/admin')
const checkToken = require('../Helpers/midleware/checktoken')

const menuRouter = express.Router();

// get all menu
menuRouter.get('/getalldata', menuController.getAllMenus);
// insert new menu
menuRouter.post('/insert', upload.singleUpload, menuController.insertMenus);
// delete existing menu
menuRouter.delete('/delete', admin,menuController.deleteByid);
// update existing menu
menuRouter.patch('/update', admin, menuController.updateById);
// search menu by name
menuRouter.get('/search', menuController.searchByName);
// sort by 
menuRouter.get('/sortby', admin,menuController.sortBy);
menuRouter.post('/insertTrans', menuController.insertTrans);
menuRouter.get('/category', menuController.getCategory)


module.exports = menuRouter;