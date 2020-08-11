const db = require('../Configs/dbMysql');

const querySelect = "SELECT cart.id_cart, menu.name, menu.price, menu.picture, cart.quantity, cart.total, menu.picture FROM menu JOIN cart ON cart.id_menu= menu.id_menu"
;

const cartModel = {
    getCart: () =>{
        return new Promise((resolve, reject) => {
            const getCart = `${querySelect}`;
            db.query(getCart, (err, data) =>{
                if(!err){
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    },
    insertCart: (body) => {
        const {id_menu, quantity, total} = body
        return new Promise((resolve, reject) =>{
            const queryInsert = "INSERT INTO cart set id_menu=?, quantity=?, total=?";
            db.query(queryInsert, [id_menu, quantity, total], (err, data) =>{
                if(!err){
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    },

    delAllCart : () =>{
        return new Promise((resolve, reject) =>{
            const queryDellAll = "DELETE FROM cart";
            db.query(queryDellAll, (err, data) =>{
                if(!err) {
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    },

    getCartById: (id) =>{
        return new Promise((resolve, reject) =>{
            const querySBI = "SELECT * FROM cart WHERE id_menu=?";
            db.query(querySBI,[id], (err, data) =>{
                if(!err){
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }, delCartById: (id) =>{
        return new Promise((resolve, reject) =>{
            const queryDel = "DELETE FROM cart WHERE id_menu=?"
            db.query(queryDel, [id], (err, data) =>{
                if(!err){
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    },
    updateCart: (body) =>{
        return new Promise ((resolve, reject) =>{
            const {quantity, total, id_cart} = body;
            const queryUpdate = "UPDATE cart SET quantity=?, total=? WHERE id_cart=?";
            db.query(queryUpdate, [quantity, total, id_cart], (err, data) =>{
                if(!err) {
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    }
}
module.exports = cartModel