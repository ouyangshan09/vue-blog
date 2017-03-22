/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
var path = require('path');
var fs = require('fs');
const express = require('express');
const uuid = require('node-uuid');
var co = require('co');
const router = express.Router();
const ErrorBuilder = require('../error/ErrorBuilder');
const db = require('../db/dbConnection');
const User = require('../model/User');
const TimeUtils = require('../utils/timeUtils');
const InfoUtils = require('../utils/infoUtils');
const {
    Base,
    Register
} = require('../constant');

// const id = 1000;

// co(function *() {
//     var now = Date.now();
//     yield sleep(3000);
//     console.log(Date.now() - now);
// });
// function sleep(ms) {
//     return function (cb) {
//         setTimeout(cb, ms);
//     }
// }

var sleep2 = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 模拟出错了，返回 ‘error’
            resolve('error');
        }, time);
    })
};

var start = async function () {
    for(let i = 0; i < 10; i++){
        console.log(`当前是第${i}次等待`);
        await sleep2(1000);
    }
};

var readFile = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile(path.join(__dirname, '../.babelrc2'), 'utf-8', (err, data) => {
            if(err == null){
                resolve(data);
            }else {
                reject(err);
            }
        });
    });

};

var readFileRun = async function () {
    try {
        var file = await readFile();
        console.log('file: ', file);
    }catch(err) {
        console.log('error: ', err);
    }

};

readFileRun();

//拦截器
router.use((req, res, next) => {
    console.log('Time: ', TimeUtils.getFormatTime());
    console.log('body: ', req.body);
    next();
});

router.post('/register', (request, response, next) => {
    // console.log('next1');
    let {
        account,
        password,
    } = request.body.user;
    if(InfoUtils.isNull(account) || InfoUtils.isNull(password)){
        let error = new Error(Base.PARAMS_EXCEPTION.getInfo());
        error.code = Base.PARAMS_EXCEPTION.getCode();
        next(error);
    }
    const createTime = TimeUtils.getTime();
    const id = uuid.v1();
    let userModel = db.model(User.getName());
    userModel.findOne({account: account}).exec(function (code, value) {
        //查询不到数据则插入
        if(InfoUtils.isNull(code) && InfoUtils.isNull(value)){
            userModel.create({
                id: id,
                account: account,
                password: password,
                createTime: createTime
            }).then(value => {
                console.log('value2: ', value);
            });
        }
    });

    // userModel.findOne({
    //     account: account
    // }).then(value => {
    //     if(InfoUtils.isNull(value)){
    //         userModel.create({
    //             id: id,
    //             account: account,
    //             password: password,
    //             createTime: createTime
    //         }).then(value => {
    //             console.log("create value: ", value);
    //         });
    //     }
    //     console.log('find: ', value);
    // });
    // userModel.find({account: account}).where('password').equals(password).exec((value, user) =>{
    //     console.log('value: ', value);
    //     console.log('user: ', user);
    // });
    // next(new Error(Base.LOGIN_OUT_OF_DATE.getCode()));
    next();
}, (req, res, next) => {
    // console.log('next2');
    res.send({
        name: 'hello'
    });
});
//业务错误处理
router.use((err, req, res, next) => {
    console.log('error1: ', err);
    res.send({
        msg: "error"
    });
});


module.exports = router;
