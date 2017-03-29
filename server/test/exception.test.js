/**
 * Created by OUYANG on 2017/3/29.
 * 异常测试用例
 */
import {
    Params,
    Logic,
    LoginOutOfData,
    NoReadAccess,
    NoWriteAccess
} from '../exception/oyException';

describe('异常对象创建测试', function () {
    describe('oyException', function () {
        it('construct', function () {
            console.log('result: ', new Params());
            console.log('result: ', new Logic());
            console.log('result: ', new LoginOutOfData());
            console.log('result: ', new NoReadAccess());
            console.log('result: ', new NoWriteAccess());
        });
    });
});