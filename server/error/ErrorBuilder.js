/**
 * Created by OUYANG on 2017/3/20.
 * 错误信息包装
 * msg: 错误信息
 * code: 错误代码
 */

class ErrorBuilder {

    static build(info, code){
        let error = new Error(info);
        error.code = code;
        return error;
    };
}

class Exception extends Error{

    constructor(){
        super();
        this.info = null;
        this.code = null;
    }
    getInfo(){
        return this.info;
    }
    getCode(){
        return this.code;
    }
}

let exception = new Exception();

class ExceptionBuilder {

    constructor(){
        this.code = '';
        this.info = '';
    }
    static Exception(){
        return exception
    }
    // setInfo(value){
    //     this.info = value;
    //     return this;
    // }
    // setCode(value){
    //     this.code = value;
    //     return this;
    // }
    // build(){
    //     return new Exception(this.builder());
    // }
}

module.exports = ExceptionBuilder;