const menuModel = require('../Models/menu');
const formRespon = require('../Helpers/form-respon')

const menuController = {
    getAllMenus : (_, res) =>{
        menuModel.getAllMenus()
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    insertMenus: (req, res) =>{
        menuModel.insertMenu(req.body)
        .then((data) =>{
            formRespon.success(res,data);
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })

    },
    deleteByid: (req, res) =>{
        menuModel.deleteById(req.body)
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    updateById: (req, res) =>{
        menuModel.updateById(req.body, req.query.id)
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    searchByName: (req, res) =>{
        menuModel.searchByName(req.query)
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    sortBy:(req, res) =>{
        menuModel.sortBy(req.query)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
   
}


module.exports = menuController;