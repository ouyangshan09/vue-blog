/**
 * Created by ouyangshan09 on 2017/3/18.
 * 注册业务逻辑常量信息
 * @author Ouyang
 * @version 1.0
 */
import EnumType from './enumType';

const Register = {
    SUCCESS: new EnumType('注册成功', 100),
    FAILURE: new EnumType('注册失败', 101),
    EXIST: new EnumType('帐号已存在', 102),
};
export default Register;