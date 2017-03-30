/**
 * Created by OUYANG on 2017/3/29.
 * 基本业务逻辑异常信息对象
 * @author Ouyang
 * 废弃 对象文件 by 2017/03/30
 */
import {BaseType} from '../constant';
import BaseException from './baseException';

/**参数异常对象*/
class Params extends BaseException {
    constructor(){
        super();
        if(arguments && arguments.length > 0){
            for(let [key, value] of Object.entries(arguments)){
                this.data = value;
            }
        }
        Error.captureStackTrace(this, Params);
    }
    getInfo(){
        return BaseType.PARAMS_EXCEPTION.getInfo();
    }
    getCode(){
        return BaseType.PARAMS_EXCEPTION.getCode();
    }
    getData(){
        return {};
    }
}
/**登录过期异常*/
class LoginOutOfData extends BaseException {
    constructor(){
        super();
        Error.captureStackTrace(this, LoginOutOfData);
    }

    getInfo() {
        return BaseType.LOGIN_OUT_OF_DATE.getInfo();
    }

    getCode() {
        return BaseType.LOGIN_OUT_OF_DATE.getCode();
    }

    getData() {
        return {};
    }
}
/**执行逻辑异常*/
class Logic extends BaseException {
    constructor(){
        super();
        Error.captureStackTrace(this, Logic);
    }

    getInfo() {
        return BaseType.LOGIC_EXCEPTION.getInfo();
    }

    getCode() {
        return BaseType.LOGIC_EXCEPTION.getCode();
    }

    getData() {
        return {};
    }
}
/**无写入权限异常*/
class NoReadAccess extends BaseException {
    constructor(){
        super();
        Error.captureStackTrace(this, NoReadAccess);
    }

    getInfo() {
        return BaseType.NO_READ_ACCESS.getInfo();
    }

    getCode() {
        return BaseType.NO_READ_ACCESS.getCode();
    }

    getData() {
        return {};
    }
}
/**无读入权限异常*/
class NoWriteAccess extends BaseException {
    constructor(){
        super();
        Error.captureStackTrace(this, NoWriteAccess);
    }

    getInfo() {
        return BaseType.NO_WRITE_ACCESS.getInfo();
    }

    getCode() {
        return BaseType.NO_WRITE_ACCESS.getCode();
    }

    getData() {
        return {};
    }
}
export {
    Params,
    LoginOutOfData,
    Logic,
    NoReadAccess,
    NoWriteAccess
}
