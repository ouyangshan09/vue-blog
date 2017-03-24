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
User.methods.findAccount = function () {
    const model = this.model(User.getName());
    return this.account;
};
/**查询账号是否存在*/
User.methods.findAccountIsExist = function () {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.findOne({ account: this.account}).exec(function (err, value) {
            if(err) reject(err);
            resolve(value);
        });
    });
};
/**创建账号*/
User.methods.createAccount = function () {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.create({
            id: this.id,
            account: this.account,
            password: this.password,
            createTime: this.createTime
        }, function (err, value, snickers) {
            if(err) reject(err);
            resolve(value);
        });
    })
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