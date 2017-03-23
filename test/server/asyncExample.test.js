/**
 * Created by OUYANG on 2017/3/23.
 * 测试执行
 */
const AsyncReadFile = require('../../server/example/asyncEample');


describe('ES7标准测试 异步', function () {
    describe('Async', function () {
        it('返回文件结果', function () {
            AsyncReadFile();
        });
    });
});

