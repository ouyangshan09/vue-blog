/**
 * Created by OUYANG on 2017/3/28.
 * 基本信息常量
 */
import EnumType from './enumType';

const Base = {
    PARAMS_EXCEPTION: new EnumType('参数异常', 200),
    LOGIN_OUT_OF_DATE: new EnumType('登陆过期,请重新登录', 201),
    LOGIC_EXCEPTION: new EnumType('执行逻辑异常,中断执行任务', 202),
    NO_ACCESS: new EnumType('无权限', 250),
    NO_READ_ACCESS: new EnumType('无读取权限', 251),
    NO_WRITE_ACCESS: new EnumType('无写入权限', 252)
};
export default Base;