/**
 * Created by OUYANG on 2017/3/15.
 * 用户实体类
 * @author Ouyang
 * @version 1.0
 */
import mongoose from 'mongoose';
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
    tokenExpiresTime: Number,
});
/**
 * 查询账号是否存在
 *
 * Y: 则返回查询结果
 * N: 则返回null
 * */
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
 * @field token 登录令牌
 * @field tokenTime 令牌持续时间
 * */
User.methods.createAccountTokenAndTokenTime = function (token, expiresTime) {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(this._id, {token: token, tokenExpiresTime: expiresTime}, {new: true}, function (err, value) {
            if(err) reject(err);
            resolve(value);
        });
        // this.token = token;
        // this.tokenExpiresTime = expiresTime;
        // this.save((err, value) =>{
        //     if(err) reject(err);
        //     resolve(value);
        // });
    });
};
/**
 * 更新Token持续时间
 * @field expires 时间戳,单位秒
 * */
User.methods.updateTokenExpires = function (expires) {
    this.tokenExpiresTime = expires;
    return new Promise((resolve, reject) => {
        this.save((err, value) => {
            if(err) reject(err);
            resolve(value);
        });
    })
};

//虽然说curd是异步的，但回调中的数据还是上一次的，非最新,已解决，{new: true}
User.methods.updateTest2 = function (token, time) {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(this._id, {token: token, tokenExpiresTime: time}, {new: true}, function (err, value) {
            if(err) reject(err);
            resolve(value);
        })
    });
};
//测试数据库更新方法
User.methods.updateTest = function () {
    const model = this.model(User.getName());
    return new Promise((resolve, reject) => {
        model.findById('58d612306c150f106865bdb4', function (err, value) {
            if(err) reject(err);
            resolve(value);
        })
    });
};
User.getName = function () {
    return Name;
};
export default User;