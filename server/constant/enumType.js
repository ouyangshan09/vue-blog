/**
 * Created by OUYANG on 2017/3/29.
 * 枚举类型对象
 */
class EnumType {
    constructor(info, code){
        this.info = info;
        this.code = code;
        // Error.captureStackTrace(this, EnumType);
    }
    getInfo(){
        return this.info;
    }
    getCode(){
        return this.code;
    }
}
export default EnumType;