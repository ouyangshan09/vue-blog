/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
import express from 'express';
import * as Utils from '../utils/infoUtils';
import * as Register from '../responseObj/registerResponseType';
import * as Exception from '../exception/oyException';
import UserApi from '../api/user.api';

let router = express.Router();
let userApi = new UserApi();

//判断user对象是否存在,存在继续流程, 不存在则返回错误对象
const verifyUserObj = function (request, response, next) {
    if(Utils.isNull(request.body.user)){
        next(new Exception.Params());
        return;
    }
    next();
};

//拦截器
// router.use((req, res, next) => {
//     console.log('Time: ', TimeUtils.getFormatTime());
//     console.log('body: ', req.body);
//     next();
// });

/**
 * 注册业务逻辑路由处理
 * */
router.post('/register', verifyUserObj, (request, response, next) => {
    let {
        account,
        password,
    } = request.body.user;
    if(Utils.isEmptyString(account) || Utils.isEmptyString(password)){
        next(new Exception.Params());
        return;
    }
    try {
        userApi.findByAccountAfterCreateThat({
            account: account,
            password: password
        }).then(data => {
            if(!Utils.isNull(data)){
                response.json(new Register.ResponseSuccess(data));
            }else {
                response.json(new Register.ResponseExist());
            }
        });
    }catch (e){
        next(new Exception.Logic());
    }
});
/**
 * 业务逻辑错误处理
 * */
router.use((err, req, res, next) => {
    console.log('error1: ', err.stack);
    console.log('error1: ', err);
    res.json(err);
});

module.exports = router;