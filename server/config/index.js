/**
 * Created by OUYANG on 2017/3/28.
 * 全局配置环境，基于process.env.NODE_ENV变量判断加载配置
 * @author Ouyang
 * @version 1.0
 */
const development = require('./development.conf');
const production = require('./production.conf');
const testing = require('./testing.conf');

const ENV = process.env.NODE_ENV;

if(ENV === 'production'){
    console.log('production');
}else if(ENV === 'development'){
    console.log('development');
}else if(ENV === 'testing'){
    console.log('testing');
}

//当前环境状态
const getEnvironment = function () {
    return ENV;
};

module.exports = {
    getEnvironment
};

