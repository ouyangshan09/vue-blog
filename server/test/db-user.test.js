/**
 * Created by OUYANG on 2017/3/24.
 * 数据库User模型测试
 */
// const assert = require('assert');
// const db = require('../db/dbConnection');
// const User = require('../model/User');
// const timeUtils = require('../utils/timeUtils');
// const infoUtils = require('../utils/infoUtils');
// import jwt from 'jsonwebtoken';
// import * as fileUtils from '../utils/fileUtils';
import assert from 'assert';
import db from '../db/dbConnection';
import User from '../model/User';
import timeUtils from '../utils/timeUtils';
import infoUtils from '../utils/infoUtils';
import jwt from 'jsonwebtoken';
import * as fileUtils from '../utils/fileUtils';

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
const createAccountToken = async function (account) {
    const userModel = db.model(User.getName());
    const userEntity = new userModel({ account: account});
    try {
        //查询结果
        const queryResult = await userEntity.findAccountIsExist();
        //密钥
        const privateKey = await fileUtils.readFile('./private.key');
        //令牌
        const token = jwt.sign({
            account: queryResult.account,
            _id: queryResult._id,
            id: queryResult.id,
            createTime: queryResult.createTime
        }, privateKey, {algorithm: 'RS256'});
        //持续时间
        const expires = timeUtils.calculateScheduledHourTimestamp(1);
        return await queryResult.createAccountTokenAndTokenTime(token, expires);
    }catch(e) {
        return null;
    }
};
const updateTokenExpires = async function (account) {
    const userModel = db.model(User.getName());
    const userEntity = new userModel({ account: account});
    const queryResult = await userEntity.findAccountIsExist();
    return await queryResult.updateTokenExpires(3);
};

describe('数据库测试', function () {
    describe('时间单位计算', function () {
        it('result', function () {
            const day = infoUtils.calculateDayTemp(1);
            const hour = infoUtils.calculateHourTemp(1);
            assert(day, 86400);
            assert(hour, 3600);
        });
    });
    describe('createAccountTokenAndExpiresTime', function () {
        // it('result', function (done) {
        //     createAccountToken('ouyangshan0914').then(data => {
        //         done();
        //         console.log('data: ', data);
        //     });
        // });
        it('result', function (done) {
            updateTokenExpires('ouyangshan0914').then(data => {
                done();
                console.log('data: ', data);
            });
        });
    });
    describe('findAccountIsExist', function () {
        it('result', function (done) {
            // queryAccount('123').then(data => {
            //     console.log('result: ', data);
            //     done();
            // });
            done()
        });
    });
    describe('createAccount', function () {
        it('result', function (done) {
            // createAccount().then(data => {
            //     console.log('result: ', data);
            //     done();
            // });
            done()
        });
    });
    describe('query and create', function () {
        it('result', function (done) {
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