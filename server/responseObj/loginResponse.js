/**
 * Created by ouyangshan09 on 2017/3/29.
 * 登录业务逻辑响应对象
 * @author Ouyang
 */
import LoginException from '../exception/loginException';

class LoginResponse {
    constructor(){
        const data = arguments[0] ? arguments[0] : {};
        this.info = LoginException.SUCCESS.getCode();
        this.code = LoginException.SUCCESS.getCode();
        this.data = {
            id: data.id,
            createTime: data.createTime,
            token: data.token,
            tokenExpiresTime: data.tokenExpiresTime,
        };
    }
}
export default LoginResponse;