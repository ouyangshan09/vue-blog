/**
 * Created by ouyangshan09 on 2017/3/23.
 */
const uuid = require('node-uuid');

class UUIDUtils {

    //创建uuid
    static createUUID(){
        return uuid.v1();
    }
}
module.exports = UUIDUtils;