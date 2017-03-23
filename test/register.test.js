/**
 * Created by ouyangshan09 on 2017/3/22.
 * 注册接口测试用例
 */

const request = require('supertest');
const assert = require('assert');
const app = require('../server/app');

describe('注册路由接口', function () {
    describe('/register 接口', function () {
        it('返回成功', function (done) {
            request(app)
                .post('/api/register')
                .set('Accept', 'application/json')
                .send({
                    user: {
                        account: 'ouyang',
                        password: '123'
                    }
                })
                .expect(200)
                .expect(function (res) {
                    assert.deepEqual(res.body, {name: 'hello'});
                })
                .end(done);
        });
    })
});