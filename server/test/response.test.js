/**
 * Created by ouyangshan09 on 2017/3/28.
 * 响应对象测试
 */
// import {
//     ResponseSuccess,
//     ResponseFailure,
//     ResponseExist,
// } from '../response/registerResponseType';

describe('响应对象创建测试', function () {
    describe('register', function () {
        it('construct: ', function () {
            // console.log('result: ', new ResponseSuccess());
            // console.log('result2: ', new ResponseExist());
            // console.log('result3: ', new ResponseFailure());
            // let a = fun(0);
            // a.fun(1);
            // a.fun(2);
            // a.fun(3);
            //
            // let b = fun(0);
            // b.fun(1).fun(2).fun(3);
        });
    })
});

function fun(n,o) {
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}