/**
 * Created by ouyangshan09 on 2017/3/28.
 * 响应对象测试
 */
import {
    RegisterResponseSuccess,
    RegisterResponseFailure,
    RegisterResponseExist,
} from '../responseObj/registerResponseObj';

describe('响应对象创建测试', function () {
    describe('register', function () {
        it('construct: ', function () {
            console.log('result: ', new RegisterResponseSuccess().stack);
            console.log('result2: ', new RegisterResponseExist());
            console.log('result3: ', new RegisterResponseFailure());
        });
    })
});