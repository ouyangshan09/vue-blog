/**
 * Created by OUYANG on 2017/3/15.
 * 用户实体类
 * @author Ouyang
 * @version 1.0
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Name = 'User';

let User = Schema({
    id: String,
    account: String,
    password: String,
    createTime: Number,
});
User.methods.findTest = function (callback) {
    console.log('测试findTest:', this.model('User'));
    // return this.model('User')
};
User.methods.findAccount = function (callback) {

};
User.getName = function () {
    return Name;
};

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