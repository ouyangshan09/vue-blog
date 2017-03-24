/**
 * Created by OUYANG on 2017/3/24.
 * 数据库User模型测试
 */
const assert = require('assert');
const db = require('../server/db/dbConnection');
const User = require('../server/model/User');

describe('数据库测试', function () {
    describe('User', function () {
        it('结果', function () {
            const userModel = db.model(User.getName());
            const userEntity = new userModel();
            assert.equal(userEntity.findAccount(), 'findAccount');
        });
    });
});
