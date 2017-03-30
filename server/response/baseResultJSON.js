/**
 * Created by OUYANG on 2017/3/30.
 * 响应结果JSON基类
 * @author Ouyang
 */
import * as Utils from '../utils/infoUtils';

class BaseResponse {
    constructor(){
        this.code = this.getCode();
        this.info = this.getInfo();
    }
    getInfo(){
        return 'TAG参数为null,返回此基类信息';
    }
    getCode(){
        return -1;
    }
    static create(){
        return new BaseResponse();
    }
}

class BaseResultJSON {
    constructor(res){
        const data = arguments[1];
        const response = res || BaseResponse.create();
        this.info = response.getInfo();
        this.code = response.getCode();
        if(!Utils.isNull(data)){
            this.data = data;
        }
    }
}
export default BaseResultJSON;
export {
    BaseResponse
}