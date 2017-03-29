/**
 * Created by ouyangshan09 on 2017/3/29.
 * 登录业务异常信息
 */
import EnumType from '../constant/enumType';

const Login = {
    NO_EXIST: new EnumType("账号不存在,请注册", 150),
    SUCCESS: new EnumType("登录成功", 151),
    PASSWORD_ERROR: new EnumType("密码错误", 152),
    ACCOUNT_PARAM: new EnumType("account参数不存在", 153),
    PASSWORD_PARAM: new EnumType("password参数不存在", 154),
    USER_OBJ_PARAM: new EnumType("user对象不存在"),
    TIME_OUT: new EnumType("登录过期,请重新登录", 155),
    SQL_TASK_ERROR: new EnumType("SQL任务执行异常", 200)
};

export default Login;

