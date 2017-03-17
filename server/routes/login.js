/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
var express = require('express');
var router = express.Router();
// var User = require('../model/User');
var db = require('../db/dbConnection');

router.get('/testLogin', (request, response, next) => {

    let name = "ouyang";
    let age = "23";
    var user = {
        name: name,
        age: age
    };
    response.send(user);
});
router.post('/login', (request, response, next) => {
    const account = request.body.user.account;
    const password = request.body.user.password;
    // var user = new User({account: account, password: password});
    // user.save(error => {
    //     console.log('error: ', error);
    // });
    let UserModel = db.model('User');
    let userEntity = new UserModel({account: account, password: password});
    userEntity.save();
    console.log('User Module: ', userEntity.account);
    console.log('login request: ', `account: ${account} - password: ${password}`);

    response.send('login');
});

module.exports = router;
