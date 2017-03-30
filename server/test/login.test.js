/**
 * Created by OUYANG on 2017/3/30.
 * 登录业务响应对象测试
 */
import Login from '../constant/userInfo';
import BaseResultJSON from '../response/baseResultJSON';


describe('响应对象测试', function () {
    describe('LOGIN_SUCCESS', function () {
        it('result', function () {
            console.log(new BaseResultJSON(Login.NO_EXIST));
        });
    });
});