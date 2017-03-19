/**
 * Created by ouyangshan09 on 2017/3/18.
 * 常量信息提示
 */
const Register = require('./register');

class BaseType {
    constructor(info, code){
        this.info = info;
        this.code = code;
    }
    getInfo(){
        return this.info;
    }
    getCode(){
        return this.code;
    }
}

const Base ={
    PARAMS_EXCEPTION: new BaseType('参数异常', 100),
    LOGIN_OUT_OF_DATE: new BaseType('登陆过期,请重新登录', 101),
    NO_ACCESS: new BaseType('无权限', 150),
    NO_READ_ACCESS: new BaseType('无读取权限', 151),
    NO_WRITE_ACCESS: new BaseType('无写入权限', 152)
};

module.exports = {
    Base,
    Register,
};