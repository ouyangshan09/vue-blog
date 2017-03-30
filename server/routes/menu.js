/**
 * Created by OUYANG on 2017/3/30.
 * 菜单管理 业务路由
 * @author Ouyang
 */
import express from 'express';
import * as Utils from '../utils/infoUtils';

let router = express.Router();

/**验证Menu对象是否存在*/
const verifyMenuObj = function (request, response, next) {
    if(Utils.isNull(request.body.menu)){
        //TODO 返回menu对象不存在信息
        return;
    }
    next();
};

/**创建菜单*/
router.post('/createMenu', verifyMenuObj, (request, response, next) => {
    let {

    } = request.body.menu;
});

/**删除菜单*/
router.post('/removeMenu', verifyMenuObj, (request, response, next) => {

});

/**查询菜单集合*/
router.get('/getMenus/:userId', (request, response, next) => {

});

/**业务错误处理*/
router.use((err, req, res, next) => {
    res.json(err);
});

module.exports = router;