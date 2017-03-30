/**
 * Created by ouyangshan09 on 2017/3/28.
 * 响应对象测试
 */
import {
    ResponseSuccess,
    ResponseFailure,
    ResponseExist,
} from '../response/registerResponseType';

describe('响应对象创建测试', function () {
    describe('register', function () {
        it('construct: ', function () {
            console.log('result: ', new ResponseSuccess());
            console.log('result2: ', new ResponseExist());
            console.log('result3: ', new ResponseFailure());
        });
    })
});