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
import Base from '../constant/base';

let router = express.Router();
let userApi = new UserApi();

//判断post请求user对象是否存在
const verifyUserObj = (request, response, next) => {
    if(Utils.isNull(request.body.user)){
        // next(new Exception.Params());
        next(Base.PARAMS_EXCEPTION);
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
                //账号不存在
                response.json(new Response.NoExist());
            }else if(data.password === password + ""){
                //符合条件
                response.json(new Response.Success(data));
            }else{
                //密码或其它错误
                response.json(new Response.PdError())
            }
            // console.log('data: ', data);
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
    res.json(err);
});


module.exports = router;