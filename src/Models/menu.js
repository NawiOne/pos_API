const db = require('../Configs/dbMysql');

const querySelect = "SELECT menu.id_menu, menu.name, menu.price, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id";

const menuModel = {
    getAllMenus: () => {
        return new Promise((resolve, reject) => {
            const getMenu = `${querySelect}`;
            db.query(getMenu, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    insertMenu: (body) => {
        return new Promise((resolve, reject) => {
            const {name, price, id_category} = body;
            const queryString = "INSERT INTO menu SET name = ? , price = ?, id_category = ?";
            db.query(queryString, [name, price, id_category], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);

                }
            });
        });
    },
    deleteById: (body) => {
        return new Promise((resolve, reject) => {
            const {id} = body;
            const queryString = "DELETE FROM menu WHERE id_menu=?";
            db.query(queryString, [id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    updateById: (body) => {
        return new Promise((resolve, reject) => {
            const {name, price, id_menu} = body;
            const queryString = "UPDATE menu SET name=?, price=? WHERE id_menu=?";
            db.query(queryString, [name, price, id_menu], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    searchByName: (name) => {
        return new Promise((resolve, reject) => {
            const searchMenuByName = `${querySelect} WHERE menu.name LIKE '%${name}%'`;
            db.query(searchMenuByName, (err, data) => {
                if(!err) {
                    if(data.length === 0){
                      reject({
                          msg : 'Data not found'
                      })
                    }else{
                        resolve(data);
                    }
                    
                } else {
                    reject(err);
                }
            });

        });
    },
    sortByName: () => {
        return new Promise((resolve, reject) => {
            const sortByName = `${querySelect} ORDER BY menu.name ASC`;
            db.query(sortByName, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })

        });
    },
    sortByCategory:() =>{
        return new Promise((resolve, reject) =>{
            const sortByCategory =  `${querySelect} ORDER BY name_category ASC`;
            db.query(sortByCategory, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    sortByNewest: ()=>{
        return new Promise((resolve, reject) =>{
            const sortByNewest = `${querySelect} ORDER BY menu.created_at DESC`;
            db.query(sortByNewest, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(data)
                }
            })
        })
    },
    sortByPrice: () =>{
        return new Promise((resolve, reject) =>{
            const sortByPrice =  `${querySelect} ORDER BY price ASC`;
            db.query(sortByPrice, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(data)
                }
            })
        })
    }

};

module.exports = menuModel;