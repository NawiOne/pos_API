const db = require('../Configs/dbMysql');

const querySelect = "SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id";

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
        console.log(body)
        const{name, picture, price, id_category} = body
        return new Promise((resolve, reject) => {
            const queryInsert = "INSERT INTO menu SET name =?, picture=?, price =?, id_category =?";
            db.query(queryInsert, [name, picture, price, id_category], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);

                }
            });
        });
    },
    deleteById: (body) => {
        const {id_menu} = body;
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM menu WHERE id_menu=${id_menu}`;
            db.query(queryString,(err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    updateById: (body) => {
        const {name, price, id_menu} = body;
        return new Promise((resolve, reject) => {
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