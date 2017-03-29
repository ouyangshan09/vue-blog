/**
 * Created by OUYANG on 2017/3/29.
 * 错误基类
 */
class BaseException {
    constructor(){
        this.info = this.getInfo();
        this.code = this.getCode();
        this.data = this.getData();
    }
    getInfo(){
        return '';
    }
    getCode(){
        return -1;
    }
    getData(){
        return null;
    }
}
export default BaseException;