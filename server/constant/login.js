/**
 * Created by OUYANG on 2017/3/29.
 * 登录业务逻辑响应信息
 */
import EnumType from './enumType';

const Login = {
    NO_EXIST: new EnumType("账号不存在,请注册", 150),
    PD_ERROR: new EnumType("密码错误", 151),
    SUCCESS: new EnumType("登录成功", 152),
};
export default Login;