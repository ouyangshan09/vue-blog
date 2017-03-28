/**
 * Created by ouyangshan09 on 2017/3/28.
 * 注册业务逻辑 响应对象
 * @author Ouyang
 */
import BaseResponseObj from './baseResponseObj';
import {RegisterType} from '../constant';

/**注册成功响应对象*/
class RegisterResponseSuccess extends BaseResponseObj{
    constructor(){
        super();
        if(arguments && arguments.length > 0){
            for(let [key, value] of Object.entries(arguments)){
                this.data = value;
            }
        }
        Error.captureStackTrace(this, RegisterResponseSuccess);
    }

    getInfo() {
        return RegisterType.SUCCESS.getInfo();
    }

    getCode() {
        return RegisterType.SUCCESS.getCode();
    }

    getData() {
        return {};
    }
}


/**注册失败响应对象*/
class RegisterResponseFailure extends BaseResponseObj {
    constructor(){
        super();
        if(arguments && arguments.length > 0){
            for(let [key, value] of Object.entries(arguments)){
                this.data = value;
            }
        }
    }

    getInfo() {
        return RegisterType.FAILURE.getInfo();
    }

    getCode() {
        return RegisterType.FAILURE.getCode();
    }

    getData() {
        return {};
    }
}

/**帐号已存在响应对象*/
class RegisterResponseExist extends BaseResponseObj {
    constructor(){
        super();
        if(arguments && arguments.length > 0){
            for(let [key, value] of Object.entries(arguments)){
                this.data = value;
            }
        }
    }

    getInfo() {
        return RegisterType.EXIST.getInfo();
    }

    getCode() {
        return RegisterType.EXIST.getCode();
    }

    getData() {
        return {};
    }
}

export {
    RegisterResponseExist,
    RegisterResponseSuccess,
    RegisterResponseFailure,
};