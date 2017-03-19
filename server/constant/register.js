/**
 * Created by ouyangshan09 on 2017/3/18.
 * 注册业务逻辑常量信息
 * @author Ouyang
 * @version 1.0
 */

class RegisterType {
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

let Register = {
    SUCCESS: new RegisterType('注册成功', 100),
    FAILURE: new RegisterType('注册失败', 101),
    EXIST: new RegisterType('帐号已存在', 102),
};

module.exports = Register;