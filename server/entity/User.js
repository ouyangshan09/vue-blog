/**
 * Created by OUYANG on 2017/3/15.
 * 用户实体类
 * @author Ouyang
 * @version 1.0
 */
var db = require('../db/baseApi');

module.exports = db.model('User', {
    account: {type: 'string'},
    password: {type: 'string'}
});