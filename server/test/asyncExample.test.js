/**
 * Created by OUYANG on 2017/3/23.
 * 测试执行
 */
const AsyncExample = require('../example/asyncEample');


describe('ES7标准测试 异步', function () {
    describe('Async', function () {
        it('返回文件结果', function () {
            AsyncExample.asyncReadFile().then(file => {
                console.log('读取文件 file: ', file);
            });
            AsyncExample.asyncWriteFile().then(state => {
                console.log('写入文件', state);
            });
        });
    });
});
module.exports = {};
