/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
import express from 'express';
import ErrorBuilder from '../error/ErrorBuilder';
import * as Utils from '../utils/infoUtils';
import {BaseType} from '../constant';
import {
    RegisterResponseExist,
    RegisterResponseSuccess,
    RegisterResponseFailure
} from '../responseObj/registerResponseObj';
import UserApi from '../api/user.api';


let router = express.Router();
let userApi = new UserApi();

//判断user对象是否存在,存在继续流程, 不存在则返回错误对象
const verifyUserObj = function (request, response, next) {
    if(Utils.isNull(request.body.user)){
        next(ErrorBuilder.create({
            code: BaseType.PARAMS_EXCEPTION.getCode(),
            info: BaseType.PARAMS_EXCEPTION.getInfo()
        }));
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
    if(Utils.isNull(account) || Utils.isNull(password)){
        next(ErrorBuilder.create({
            code: BaseType.PARAMS_EXCEPTION.getCode(),
            info: BaseType.PARAMS_EXCEPTION.getInfo()
        }));
    }
    try {
        userApi.findByAccountAfterCreateThat({
            account: account,
            password: password
        }).then(data => {
            if(!Utils.isNull(data)){
                response.json(new RegisterResponseSuccess(data));
            }else {
                response.json(new RegisterResponseExist());
            }
        });
    }catch (e){
        next(ErrorBuilder.create({
            code: BaseType.LOGIC_EXCEPTION.getCode(),
            info: BaseType.LOGIC_EXCEPTION.getInfo()
        }));
    }
});
/**
 * 业务逻辑错误处理
 * */
router.use((err, req, res, next) => {
    console.log('error1: ', err);
    const msg = err.getInfo() || '';
    const code = err.getCode() || 0;
    const error = {
        msg: msg,
        code: code
    };
    res.json(error);
});

module.exports = router;