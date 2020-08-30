const db = require('../Configs/dbMysql');

const selectQuery = "SELECT history.invoice, history.cashier, history.date, menu.name AS menu_name, order_menu.quantity AS menu_quantity, history.amount AS total_amount FROM history JOIN order_menu ON order_menu.invoice = history.invoice JOIN menu ON order_menu.id_menu = menu.id_menu";

const historyModel ={
    showHistory: ()=>{
        return new Promise((resolve, reject) =>{
            const showQuery = selectQuery;
            db.query(showQuery, (err, data) =>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    },
    selectAllHis : ()=>{
        return new Promise((resolve, reject) =>{
            const getAll = "SELECT * FROM history ORDER BY date";
            db.query(getAll, (err, data) =>{
                if(!err) {
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    },
    // insertHistory: (body) =>{
    //     const {invoice, cashier, orders, amount} = body
    //     return new Promise((resolve, reject) =>{
    //         const insert = "INSERT INTO history SET invoice=?, cashier=?, orders=?, amount=?";
    //         db.query(insert, [invoice, cashier,orders, amount], (err, data) =>{
    //             if(!err){
    //                 resolve(data)
    //             } else{
    //                 reject(err)
    //             }
    //         })
    //     })

    // },

    showByCashier: (cashier) =>{
        return new Promise((resolve, reject) =>{
            const showByCashier = `${selectQuery} WHERE cashier LIKE '%${cashier}%'`;
            db.query(showByCashier, (err, data) =>{
                if(!err){
                    if(data.length === 0){
                        reject({
                            msg : "Data Not Found"
                        })
                    }else{
                         resolve(data)
                    }
                }else{
                    reject(err)
                }
            })
        })
    }
}

module.exports = historyModel;
