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

module.exports = ErrorBuilder;