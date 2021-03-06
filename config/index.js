/**
 * Created by OUYANG on 2017/2/27.
 */
var path = require('path');

function resolve(_path) {
    return path.join(__dirname, '..', _path);
}

module.exports = {
    build: {
        env: require('./prod.env'),
        index: resolve('dist/index.html'),
        assetsRoot: resolve('dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        assetsLib: resolve('lib'),
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 12306,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://192.168.22.70:3009',
                //target: 'http://192.168.1.100:3009',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        cssSourceMap: false
    }
};