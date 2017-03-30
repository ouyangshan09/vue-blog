/**
 * Created by OUYANG on 2017/3/15.
 * 路由控制器
 */

class Router{

    constructor(app){
        app.use('/api', require('./login'));
        app.use('/api', require('./register'));
        app.use('/api', require('./upload'));
        // app.use('/api', require('./menu'));
    }

    //创建
    static create(app){
        return new Router(app);
    }
}

module.exports = Router;