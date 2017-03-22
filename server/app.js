/**
 * Created by OUYANG on 2017/3/15.
 * 后台管理服务器入口
 * @author Ouyang
 * @version 1.0
 */
require('babel-core/register');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes');
let app = express();

//注意，该中间件的顺序不要写错了，如果在router后面会造成请求无法解析参数
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.create(app);

app.get('/', function (request, response, next) {
    response.send('Hello world');
});
app.use((err, req, res, next) => {
    console.log('App 根节点处理错误: ', err.stack);
    res.send({
        msg: "错误",
        state: false
    });
});

app.set('port', process.env.PROT || 3009);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port: ' + app.get('port'));
});