/**
 * Created by OUYANG on 2017/3/29.
 * 登录业务逻辑响应对象
 */
import BaseResponseType from './baseResponseType';
import { LoginType } from '../constant';

/**用户不存在*/
class NoExist extends BaseResponseType {
    constructor(){
        super();
        const data = arguments ? arguments[0] : {};
    }

    getInfo() {
        return LoginType.NO_EXIST.getInfo();
    }

    getCode() {
        return LoginType.NO_EXIST.getCode();
    }

    getData() {
        return {};
    }
}

/**登录成功*/
class Success extends BaseResponseType {
    constructor(){
        super();
        const data = arguments ? arguments[0] : {};
        this.data = {
            id: data.id,
            createTime: data.createTime,
            token: data.token,
            tokenExpiresTime: data.tokenExpiresTime
        };
    }

    getInfo() {
        return LoginType.SUCCESS.getInfo();
    }

    getCode() {
        return LoginType.SUCCESS.getCode();
    }

    getData() {
        return {};
    }
}

/**密码错误*/
class PdError extends BaseResponseType {
    constructor(){
        super();
    }

    getInfo() {
        return LoginType.PD_ERROR.getInfo();
    }

    getCode() {
        return LoginType.PD_ERROR.getCode();
    }

    getData() {
        return {};
    }
}

export {
    NoExist,
    Success,
    PdError
}