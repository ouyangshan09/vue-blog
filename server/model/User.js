/**
 * Created by OUYANG on 2017/3/15.
 * 用户实体类
 * @author Ouyang
 * @version 1.0
 */
let mongoose = require('mongoose');

let User = new mongoose.Schema({
    id: String,
    account: String,
    password: String,
    createTime: Number,
});
module.exports = User;


// var db = require('../db/dbConnection');
//
//
// var User = db.model('User', {
//     account: String,
//     password: String
// });
//
// module.exports = User;