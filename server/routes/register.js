/**
 * Created by OUYANG on 2017/3/15.
 * 注册业务路由
 */
import express from 'express';
import * as Utils from '../utils/infoUtils';
import UserApi from '../api/user.api';
import UserInfo from '../constant/userInfo';
import BaseResultJSON from '../response/baseResultJSON';

let router = express.Router();
let userApi = new UserApi();

//判断user对象是否存在,存在继续流程, 不存在则返回错误对象
const verifyUserObj = function (request, response, next) {
    if(Utils.isNull(request.body.user)){
        next(new BaseResultJSON(UserInfo.USER_OBJ_PARAM));
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
    if(Utils.isEmptyString(account)){
        next(new BaseResultJSON(UserInfo.ACCOUNT_PARAM));
        return;
    }
    if(Utils.isEmptyString(password)){
        next(new BaseResultJSON(UserInfo.PASSWORD_PARAM));
        return;
    }
    try {
        userApi.findByAccountAfterCreateThat({
            account: account,
            password: password
        }).then(data => {
            if(!Utils.isNull(data)){
                response.json(new BaseResultJSON(UserInfo.REG_SUCCESS, data));
            }else {
                response.json(new BaseResultJSON(UserInfo.EXIST));
            }
        });
    }catch (e){
        response.json(new BaseResultJSON(UserInfo.SQL_TASK_ERROR));
    }
});
/**
 * 业务逻辑错误处理
 * */
router.use((err, req, res, next) => {
    res.json(err);
});

module.exports = router;