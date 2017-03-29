/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
import express from 'express';
import UserApi from '../api/user.api';
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
});

module.exports = router;