/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
var express = require('express');
var router = express.Router();
var User = require('../entity/User');

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
    // const account = request.body.user.account;
    // const password = response.body.user.password;
    // User.insertOne({account: account, password: password}).exec().then(value => {
    //     console.log('insertOne value: ', value);
    // });
    console.log('login request: ', request.body.user.password);
    // console.log('User Module: ', User);
    response.send('login');
});

module.exports = router;
