/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection');
const User = require('../model/User');

router.post('/login', (request, response, next) => {
    let {
        account = null,
        password = null
    } = request.body.user;
    let userModel = db.model(User.getName());
    // let userEntity = new userModel({
    //     account: account,
    //     password: password
    // });
    userModel.find({
        account: account,
        password: password
    }).then(value => {
        console.log('login value: ', value);
    });
    console.log('next1');
    next();
}, (request, response, next) => {
    console.log('next2');
    response.send('Login Info');
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
