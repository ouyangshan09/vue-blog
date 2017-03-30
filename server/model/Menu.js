/**
 * Created by OUYANG on 2017/3/30.
 * 菜单模型类
 * @author Ouyang
 * @version 1.0
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Name = 'Menu';

let Menu = Schema({
    //菜单id
    id: String,
    //菜单名字
    menuName: String,
    //菜单路径
    menuPath: String,
    //菜单权限
    menuAccess: Number,
    //父菜单id
    parentMenuID: String,
    //子菜单id
    subMenuId: String,
});

/**创建菜单*/
Menu.methods.createMenu = function () {

};
Menu.methods.getMenuCount = function () {

};
Menu.methods.removeMenu = function () {

};
//查询菜单id
Menu.methods.findByMenuId = function () {

};
Menu.methods.getMenus = function () {

};

Menu.getName = function () {
    return Name;
};
export default Menu;