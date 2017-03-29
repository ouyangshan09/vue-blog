/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
// const express = require('express');
// const router = express.Router();
// const db = require('../db/dbConnection');
// const User = require('../model/User');
import express from 'express';
import UserApi from '../api/user.api';
import Login from '../constant/login';
import * as Response from '../responseObj/loginResponseType';
import * as Utils from '../utils/infoUtils';
import * as Exception from '../exception/oyException';

let router = express.Router();
let userApi = new UserApi();

//判断post请求user对象是否存在
const verifyUserObj = (request, response, next) => {
    if(Utils.isNull(request.body.user)){
        next(new Exception.Params());
        return;
    }
    next();
};

router.post('/login', verifyUserObj, (request, response, next) => {
    let {
        account,
        password
    } = request.body.user;
    if(Utils.isEmptyString(account) || Utils.isEmptyString(password)){
        next(new Exception.Params());
        return;
    }
    try {
        userApi.findByAccountAndPasswordWitchCreateToken({
            account: account,
            password: password,
            expires: 1
        }).then(data => {
            if(Utils.isNull(data)){
                //TODO 账号不存在信息
                response.json(new Response.NoExist());
            }else if(data.password === password + ""){
                //TODO 符合条件
                response.json(new Response.Success(data));
            }else{
                //TODO 密码或其它错误
                response.json(new Response.PdError())
            }
            // console.log('data: ', data);
        });
    }catch (e){
        next(new Exception.Logic());
    }
    // let userModel = db.model(User.getName());
    // userModel.find({
    //     account: account,
    //     password: password
    // }).then(value => {
    //     console.log('login value: ', value);
    // });
});

router.post('/mongodTest', (request, response, next) => {
    const {
        account = null,
        password = null
    } = request.body.user;
    let UserModel = db.model(User.getName());
    // UserModel.find({
    //     account: account
    // }).then(value => {
    //     console.log('find: ', value);
    // });
    let userEntity = new UserModel({account: account, password: password});
    // UserModel.create({
    //     account: account,
    //     password: password
    // }).then(value => {
    //     console.log("value: ", value);
    // });
    // userEntity.find({
    //     account: account
    // }).then(value => {
    //     console.log("value: ", value);
    //     return value;
    // }).then(value => {
    //     console.log("value2: ", value);
    // });
    // userEntity.findTest();
    console.log('User Module: ', userEntity);
    console.log('login request: ', `account: ${account} - password: ${password}`);

    response.send('login');
});

module.exports = router;
