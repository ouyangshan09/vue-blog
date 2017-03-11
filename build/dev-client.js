/**
 * Created by ouyangshan09 on 2017/3/11.
 * 开发环境中 客户端自动刷新服务
 */
// require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
    if(event.action === 'reload'){
        window.location.reload();
    }
});