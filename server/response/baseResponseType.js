/**
 * Created by ouyangshan09 on 2017/3/28.
 * 响应返回对象基类
 */
class BaseResponseType{
    constructor(){
        this.info = this.getInfo();
        this.code = this.getCode();
        this.data = this.getData();
    }
    getInfo(){
        return '';
    }
    getCode(){
        return 0;
    }
    getData(){
        return null;
    }
}
export default BaseResponseType;