/**
 * Created by ouyangshan09 on 2017/3/25.
 * @author Ouyang
 */

const assert = require('assert');
const timeUtils = require('../utils/timeUtils');

describe('时间戳工具测试', function () {
    describe('calculateScheduledTime', function () {
        it('结果', function () {
            const temp = timeUtils.calculateScheduledHourTime('10');
            const nowTemp = timeUtils.getTime() + temp;
            console.log('temp: ', temp);
            console.log('nowTemp: ', nowTemp);
            console.log('结果: ', timeUtils.defaultFormat(nowTemp));
        })
    });
});
