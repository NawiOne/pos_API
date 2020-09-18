const menuModel = require('../Models/menu');
const formRespon = require('../Helpers/form-respon')

const menuController = {
    getAllMenus : (req, res) =>{
        const {page, limit} = req.query
        menuModel.getAllMenus(page, limit)
        .then((data) =>{
            formRespon.pagination(req,res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    insertMenus: (req, res) =>{
        menuModel.insertMenu(req.body)

        .then((data) =>{
            const respondata = {
                ...req.body,
                data: data,
            }
            formRespon.success(res,respondata);
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })

    },
    deleteByid: (req, res) =>{
        menuModel.deleteById(req.query.id)
        .then((data) =>{
            formRespon.success(res,data)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    updateById: (req, res) =>{
        menuModel.updateById(req.body)
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
        .then((data) => {
            formRespon.paginationSort(req.query, res, data);
        }).catch((err) => {
            console.log(err)
            formRespon.error(res, err);
        })
    },
    insertTrans:(req, res) =>{
        menuModel.insertToTrans(req.body)
        .then((data) =>{
            const resData={
                ...req.body
            }
            formRespon.success(res, resData)
        })
        .catch((err) =>{
            formRespon.error(res,err)
        })
    },
    getCategory: (_, res) =>{
        menuModel.getCategory()
        .then((data)=>{
            formRespon.success(res, data)
        }).catch((err) =>{
            formRespon.error(res, err)
        })
        
    }
   
}


module.exports = menuController;