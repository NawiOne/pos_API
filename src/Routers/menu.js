const express = require('express');

const menuController = require('../Controllers/menu');
const upload = require('../Helpers/midleware/upload')
const admin = require('../Helpers/midleware/admin')

const menuRouter = express.Router();

// get all menu
menuRouter.get('/getalldata', menuController.getAllMenus);
// insert new menu
menuRouter.post('/insert',admin, upload.singleUpload, menuController.insertMenus);
// delete existing menu
menuRouter.delete('/delete', admin,menuController.deleteByid);
// update existing menu
menuRouter.patch('/update', admin, menuController.updateById);
// search menu by name
menuRouter.get('/search/',admin, menuController.searchByName);
// sort by 
menuRouter.get('/sortby', admin,menuController.sortBy);


module.exports = menuRouter;