/**
 * Created by OUYANG on 2017/3/22.
 * 文件上传路由
 */
const express = require('express');
const router = express.Router();

router.post('/fileUpload', (request, response, next) => {
    console.log('/fileUpload');
    response.send({
        msg: 'Success',
    });
});

module.exports = router;