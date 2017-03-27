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
    //登录令牌
    token: String,
    //令牌过期时间
    tokenExpectTime: Number,
});
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
/**
 * 创建帐号登录Token和持续时间
 * @field account 查询帐号
 * @field token 登录令牌
 * @field tokenTime 令牌持续时间
 * */
User.methods.createAccountTokenAndTokenTime = function ({account, token, tokenTime}) {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {

    })
};
//测试数据库更新方法
User.methods.updateTest = function () {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.findById('58cfaf179830ae3480490c06', function (err, value) {
            if(err) reject(err);
            resolve(value);
        })
    });
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