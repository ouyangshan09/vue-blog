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
    //账号id
    id: String,
    //账号
    account: String,
    //密码
    password: String,
    //创建时间
    createTime: Number,
});
User.methods.findTest = function (callback) {
    console.log('测试findTest:', this.model('User'));
    // return this.model('User')
};
User.methods.findAccount = function (callback) {
    const model = this.model(User.getName());
    return 'findAccount';
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