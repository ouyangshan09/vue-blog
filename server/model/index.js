/**
 * Created by OUYANG on 2017/3/17.
 * 导出集合
 */
// let mongoose = require('mongoose');
// let User = new mongoose.Schema({
//     account: String,
//     password: String
// });
// let Article = new mongoose.Schema({
//     title: String,
//     content: String,
//     time: Number
// });
const User = require('./User');
const Article = require('./Article');


module.exports = {
    User,
    Article
};