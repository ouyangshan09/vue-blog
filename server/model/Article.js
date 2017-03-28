/**
 * Created by OUYANG on 2017/3/17.
 * 文章数据模块
 * @author
 */
import mongoose from 'mongoose';

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
export default Article;