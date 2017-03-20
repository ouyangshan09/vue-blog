/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
const express = require('express');
const uuid = require('node-uuid');
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

const id = 1000;

//拦截器
router.use((req, res, next) => {
    console.log('Time: ', TimeUtils.getFormatTime());
    console.log('body: ', req.body);
    next();
});

router.post('/register', (request, response, next) => {
    console.log('next1');
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
    userModel.findOne({
        account: account
    }).then(value => {
        if(InfoUtils.isNull(value)){
            userModel.create({
                id: id,
                account: account,
                password: password,
                createTime: createTime
            }).then(value => {
                console.log("create value: ", value);
            });
        }
        console.log('find: ', value);
    });
    // userModel.find({account: account}).where('password').equals(password).exec((value, user) =>{
    //     console.log('value: ', value);
    //     console.log('user: ', user);
    // });
    // next(new Error(Base.LOGIN_OUT_OF_DATE.getCode()));
    next();
}, (req, res, next) => {
    console.log('next2');
    res.send({
        name: 'hello'
    });
});
//业务错误处理
router.use((err, req, res, next) => {
    console.log('error1: ', err.message);
    res.send({
        msg: "error"
    });
});


module.exports = router;
