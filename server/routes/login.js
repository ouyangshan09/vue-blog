/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 * @author Ouyang
 */
import express from 'express';
import UserApi from '../api/user.api';
import * as Utils from '../utils/infoUtils';
import UserInfo from '../constant/userInfo';
import BaseResultJSON from '../response/baseResultJSON';

let router = express.Router();
let userApi = new UserApi();

//判断post请求user对象是否存在
const verifyUserObj = (request, response, next) => {
    if(Utils.isNull(request.body.user)){
        next(new BaseResultJSON(UserInfo.USER_OBJ_PARAM));
        return;
    }
    next();
};

router.post('/login', verifyUserObj, (request, response, next) => {
    let {
        account,
        password
    } = request.body.user;
    //帐号参数不存在
    if(Utils.isEmptyString(account)){
        next(new BaseResultJSON(UserInfo.ACCOUNT_PARAM));
        return;
    }
    //密码参数不存在
    if(Utils.isEmptyString(password)){
        next(new BaseResultJSON(UserInfo.PASSWORD_PARAM));
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
                response.json(new BaseResultJSON(UserInfo.NO_EXIST));
            }else if(data.password === password + ""){
                //符合条件
                response.json(new BaseResultJSON(UserInfo.LOGIN_SUCCESS, data));
            }else{
                //密码或其它错误
                response.json(new BaseResultJSON(UserInfo.PASSWORD_ERROR));
            }
        });
    }catch (e){
        next(new BaseResultJSON(UserInfo.SQL_TASK_ERROR));
    }
});
/**
 * 业务逻辑错误处理
 * */
router.use((err, req, res, next) => {
    res.json(err);
});

module.exports = router;