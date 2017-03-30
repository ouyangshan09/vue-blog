/**
 * Created by ouyangshan09 on 2017/3/29.
 * 登录业务异常信息
 */
import EnumType from './enumType';

const Login = {
    EXIST: new EnumType("账号已存在", 150),
    NO_EXIST: new EnumType("账号不存在,请注册", 151),
    LOGIN_SUCCESS: new EnumType("登录成功", 152),
    REG_SUCCESS: new EnumType("注册成功", 153),
    PASSWORD_ERROR: new EnumType("密码错误", 154),
    ACCOUNT_PARAM: new EnumType("account参数不存在", 155),
    PASSWORD_PARAM: new EnumType("password参数不存在", 156),
    USER_OBJ_PARAM: new EnumType("user对象不存在", 157),
    TIME_OUT: new EnumType("登录过期,请重新登录", 158),
    SQL_TASK_ERROR: new EnumType("SQL任务执行异常", 200),
    TAG_ERROR: new EnumType("TAG为null", 900),
};

export default Login

