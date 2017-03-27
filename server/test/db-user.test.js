/**
 * Created by OUYANG on 2017/3/24.
 * 数据库User模型测试
 */
const assert = require('assert');
const db = require('../db/dbConnection');
const User = require('../model/User');

//查询测试
const queryAccount = async function (account) {
    const userModel = db.model(User.getName());
    const userEntity = new userModel({
        account: account
    });
    const result = await userEntity.findAccountIsExist();
    // console.log('result: ', result);
    return result;
};
//创建测试
const createAccount = async function () {
    const userModel = db.model(User.getName());
    const userEntity = new userModel({
        id: '100010',
        account: 'ouyangshan09',
        password: 'lixiaoshan',
        createTime: 1490348342
    });
    const result = await userEntity.createAccount();
    return result;
};
//查询用户后创建用户
const queryAccountAfterCreateThat = async function (acObj) {
    const userModel = db.model(User.getName());
    const userEntity = new userModel(acObj);
    const queryResult = await userEntity.findAccountIsExist();
    if(!queryResult){
        const result = await userEntity.createAccount();
        return result;
    }
    return null;
};

//创建用户Token和过期时间
const createAccountTokenAndExpiresTime = async function (account) {
    const userModel = db.model(User.getName());
    const userEntity = new userModel({ account: account});
    try {
        const queryResult = await userEntity.findAccountIsExist();
        // const createAccountToken = await queryResult.createAccountTokenAndTokenTime('token2', 10001);
        const createAccountToken = await queryResult.updateTest2('ouyang7', 7);
        return createAccountToken;
    }catch(e) {
        return null;
    }
};

describe('数据库测试', function () {
    describe('User Token', function () {
        it('结果', function (done) {
            createAccountTokenAndExpiresTime('ouyangshan0914').then(data => {
                console.log('data: ', data);
                done();
            });
        })
    });
    describe('User query', function () {
        it('结果', function (done) {
            // queryAccount('123').then(data => {
            //     console.log('result: ', data);
            //     done();
            // });
            done()
        });
    });
    describe('User create', function () {
        it('结果', function (done) {
            // createAccount().then(data => {
            //     console.log('result: ', data);
            //     done();
            // });
            done()
        });
    });
    describe('User query after create', function () {
        it('结果', function (done) {
            queryAccountAfterCreateThat({
                id: '100010',
                account: 'ouyangshan0914',
                password: 'lixiaoshan',
                createTime: 1490348342
            }).then(data => {
                console.log('result: ', data);
                done();
            });
        })
    });
});