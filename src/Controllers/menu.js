const menuModel = require('../Models/menu');

const menuController = {
    getAllMenus : (_, res) =>{
        menuModel.getAllMenus()
        .then((data) =>{
            res.json(data)
        })
        .catch((err) =>{
            res.json(err)
        })
    },
    insertMenus: (req, res) =>{
        menuModel.insertMenu(req.body)
        .then((data) =>{
            res.json(data);
        })
        .catch((err) =>{
            res.json(err)
        })

    },
    deleteByid: (req, res) =>{
        menuModel.deleteById(req.body)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    updateById: (req, res) =>{
        menuModel.updateById(req.body)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    searchByName: (req, res) =>{
        menuModel.searchByName(req.params.name)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    sortByName:(_, res) =>{
        menuModel.sortByName()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    sortByCategory: (_, res) =>{
        menuModel.sortByCategory()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    }, 
    sortByNewest: (_, res) =>{
        menuModel.sortByNewest()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    sortByPrice: (_, res) =>{
        menuModel.sortByPrice()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    }
}


module.exports = menuController;