const db = require('../Configs/dbMysql');
const multer = require("multer");
const path = require('path');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');

    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const fileType = /jpg|jpeg|gif|png/;
    const checkFile = fileType.test(path.extname(file.originalname).toLowerCase());
    if(checkFile) {
        cb(null, true);
    } else {
        cb('Image file only');
    }
};

const limits = {
    fileSize: 1 * 1000 * 1000
};

const upload = multer({
    storage,
    fileFilter,
    limits,
});



const uploadModel = {

    singleUpload: (req, res, next) => {
        const single = upload.single('image');
        single(req, res, (err) => {
            if(err) {
                res.json({
                    msg: err
                });
            } else {
                const query = `INSERT INTO image (image) VALUES ('${urlImg}')`;
                const urlImg = `localhost:8000/images/${filename}`;
                return new Promise((resolve, reject) => {
                    db.query(query, filename, (err, data) => {
                        if(!err) {
                            resolve(data);
                        } else {
                            reject(err);
                        }
                    });
                    next();
                });

                
            }
        });
    },
  
};

module.exports = uploadModel;