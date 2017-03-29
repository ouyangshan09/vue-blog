/**
 * Created by OUYANG on 2017/3/28.
 * 用户(User)接口测试
 */
import assert from 'assert';
import UserApi from '../api/user.api';

describe('用户接口测试', function () {
    describe.skip('updateTokenExpires', function () {
        it('update result', function (done) {
            const userApi = new UserApi();
            try {
                userApi.updateTokenExpires({
                    account: 'ouyangshan0914',
                    expires: '2'
                }).then(data => {
                    console.log('update result: ', data);
                    done();
                });
            }catch (e){
                done();
            }
        });
    });
    describe.skip('findByAccountAndCreateToken', function () {
        it('account result', function (done) {
            const userApi = new UserApi();
            try {
                userApi.findByAccountAndCreateToken({
                    account: 'ouyangjun091',
                    expires: 1
                }).then(data => {
                    console.log('account token: ', data);
                    done();
                });
            }catch (e){
                done();
            }
        })
    });
    describe.skip('findByAccountAfterCreateThat', function () {
        it('account result', function (done) {
            const userApi = new UserApi();
            try{
                userApi.findByAccountAfterCreateThat({
                    account: 'ouyangjun091'
                }).then(data => {
                    console.log('account result: ', data);
                    done();
                })

            }catch (e){
                done();
            }
        });
    });
    describe('findByAccount', function () {
        it('account result', function (done) {
            const userApi = new UserApi();
            try {
                userApi.findByAccount('ouyangshan09').then(data => {
                    console.log('account result: ', data);
                    done();
                });
            }catch (e){
                done();
            }
        });
    });
    describe.skip('createAccount', function () {
        it('account result', function (done) {
           const userApi = new UserApi();
           try {
               userApi.createAccount({
                   account: 'ouyangjun09',
                   password: 'woxihuanLi'
               }).then(data => {
                   console.log('account result: ', data);
                   done();
               });

           }catch (e){
               done();
           }
       });
    });
});