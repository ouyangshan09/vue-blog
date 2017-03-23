/**
 * Created by OUYANG on 2017/3/15.
 * 基础Mongodb数据库 封装
 * @author Ouyang
 * @version 1.0
 */
// var Mongolass = require('mongolass');
// var DB = new Mongolass();
// DB.connect('mongodb://localhost:27017/ouyang-site');
//
// module.exports = DB;
let mongoose = require('mongoose');
let entity = require('../model');
let db = mongoose.createConnection('mongodb://localhost:27017/ouyang_site');
db.on('error', console.error.bind(console, '连接错误'));
db.once('open', function () {
    // console.log('数据库open');
});
Object.keys(entity).forEach(key => {
    let obj = entity[key];
    db.model(key, obj);
});

module.exports = db;
