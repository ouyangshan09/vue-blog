/**
 * Created by OUYANG on 2017/3/17.
 * 文章数据模块
 * @author
 */
let mongoose = require('mongoose');

const Name = 'Article';

let Article = new mongoose.Schema({
    title: String,
    content: String,
    createTime: String,
    authorId: String,
    author: String,
    disable: Number,
});
Article.getName = function () {
    return Name;
};
module.exports = Article;