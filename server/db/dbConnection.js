/**
 * Created by OUYANG on 2017/3/15.
 * 基础Mongodb数据库 封装
 * @author Ouyang
 * @version 1.0
 */
import mongoose from 'mongoose';
import entity from '../model';

mongoose.Promise = global.Promise;
let db = mongoose.createConnection('mongodb://localhost:27017/ouyang_site');
db.on('error', console.error.bind(console, '连接错误'));
db.once('open', function () {
    // console.log('数据库open');
});
Object.keys(entity).forEach(key => {
    let obj = entity[key];
    db.model(key, obj);
});

export default db;