/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
import path from 'path';
import fs from 'fs';
import express from 'express';
import ErrorBuilder from '../error/ErrorBuilder';
import db from '../db/dbConnection';
import User from '../model/User';
import TimeUtils from '../utils/timeUtils';
import * as InfoUtils from '../utils/infoUtils';
import UUIDUtils from '../utils/uuidUtils';
import {Base, Register } from '../constant';

let router = express.Router();


//判断user对象是否存在,存在继续流程, 不存在则返回错误
const userObj = function (request, response, next) {
    if(InfoUtils.isNull(request.body.user)){
        next(ErrorBuilder.create({
            code: Base.PARAMS_EXCEPTION.getCode(),
            info: Base.PARAMS_EXCEPTION.getInfo()
        }));
    }
    next();
};


//拦截器
router.use((req, res, next) => {
    console.log('Time: ', TimeUtils.getFormatTime());
    console.log('body: ', req.body);
    next();
});

router.post('/register', userObj, (request, response, next) => {
    let {
        account,
        password,
    } = request.body.user;
    if(InfoUtils.isNull(account) || InfoUtils.isNull(password)){
        next(ErrorBuilder.create({
            code: Base.PARAMS_EXCEPTION.getCode(),
            info: Base.PARAMS_EXCEPTION.getInfo()
        }));
    }
    const uuid = UUIDUtils.createUUID();
    const createTime = TimeUtils.getTime();
    let userModel = db.model(User.getName());
    userModel.findOne({account: account}).exec(function (code, value) {
        //查询不到数据则插入
        if(InfoUtils.isNull(code) && InfoUtils.isNull(value)){
            userModel.create({
                id: uuid,
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
