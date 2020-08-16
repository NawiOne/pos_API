const db = require('../Configs/dbMysql');

const querySelectMenu = "SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id ORDER BY id_menu ASC LIMIT ? OFFSET ?";

const querySelect = "SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id ORDER BY id_menu ASC ";

const menuModel = {
    getAllMenus: (page, limit) => {
        return new Promise((resolve, reject) => {
            const offset = (page-1)* limit;
            const getMenu = `${querySelectMenu}`;
            db.query(getMenu, [Number(limit), offset], (err, data) => {
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
    deleteById: (id) => {;
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM menu WHERE id_menu=${id}`;
            db.query(queryString,(err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    updateById: (body, id) => {
        const {name, price} = body;
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE menu SET name=?, price=? WHERE id_menu=?`;
            db.query(queryString, [name, price, id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    searchByName: ({name}) => {
        return new Promise((resolve, reject) => {
            const searchMenuByName = `${querySelect} WHERE menu.name LIKE '%${name}%'`;
            db.query(searchMenuByName, (err, data) => {
                console.log(name.toString())
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
    sortBy: (query) => {
        return new Promise((resolve, reject) => {
            const sortBy= query.by;
            const sortOrder = query.order;
            const sortByName = `${querySelect} ORDER BY menu.${sortBy} ${sortOrder}`;
            db.query(sortByName, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })

        });
    },

  
};

module.exports = menuModel;