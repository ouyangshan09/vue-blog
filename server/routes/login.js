/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
var express = require('express');
var router = express.Router();

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
    // const account = request.body.account;
    // const password = response.body.password;
    console.log('login request: ', request.body);
    response.send('login');
});

module.exports = router;
