/**
 * Created by OUYANG on 2017/3/29.
 * 错误基类
 * 废弃 对象文件 by 2017/03/30
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