/**
 * Created by OUYANG on 2017/3/15.
 * 基础Mongodb数据库 封装
 * @author Ouyang
 * @version 1.0
 */
var Mongolass = require('mongolass');
var DB = new Mongolass();
DB.connect('mongodb://localhost:27017/ouyang-site');

module.exports = DB;