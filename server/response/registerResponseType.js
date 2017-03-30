/**
 * Created by ouyangshan09 on 2017/3/28.
 * 注册业务逻辑 响应对象
 * @author Ouyang
 */
import BaseResponseType from './baseResponseType';
import {RegisterType} from '../constant';

/**注册成功响应对象*/
class ResponseSuccess extends BaseResponseType{
    constructor(){
        super();
        if(arguments && arguments.length > 0){
            for(let [key, value] of Object.entries(arguments)){
                this.data = value;
            }
        }
        // Error.captureStackTrace(this, ResponseSuccess);
    }

    getInfo() {
        return RegisterType.LOGIN_SUCCESS.getInfo();
    }

    getCode() {
        return RegisterType.LOGIN_SUCCESS.getCode();
    }

    getData() {
        return {};
    }
}

/**注册失败响应对象*/
class ResponseFailure extends BaseResponseType {
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
class ResponseExist extends BaseResponseType {
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
    ResponseExist,
    ResponseSuccess,
    ResponseFailure,
};