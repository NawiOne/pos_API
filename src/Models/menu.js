const db = require('../Configs/dbMysql');

const menuModel = {
    getAllMenus: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT menu.id_menu, menu.name, menu.price, category.name_category FROM `category` JOIN menu ON menu.id_category=category.id";
            db.query(queryString, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    insertMenu: (body) => {
        const {name, price, id_category} = body;
        const queryString = "INSERT INTO menu SET name = ? , price = ?, id_category = ?";
        return new Promise((resolve, reject) => {
            db.query(queryString, [name, price, id_category], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                   
                }
            });
        });
    },
    deleteById:(body) =>{
        const {id}= body
        const queryString = "DELETE FROM menu WHERE id_menu=?";
        return new Promise((resolve, reject) =>{
            db.query(queryString, [id], (err, data) =>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    },
    updateById: (body) =>{
        const{name, price,id_menu}= body;
        const queryString = "UPDATE menu SET name=?, price=? WHERE id_menu=?";
        return new Promise((resolve, reject) =>{
            db.query(queryString,[name, price,id_menu], (err,data) =>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    }
};

module.exports = menuModel;