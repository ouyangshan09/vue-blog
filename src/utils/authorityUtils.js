/**
 * Created by OUYANG on 2017/3/14.
 * 后台管理业务组件辅助工具库
 * @author Ouyang
 * @version 1.0
 */

/**
 * 权限选项和权限Url查找
 * */
class AuthorityUtils{
    static findAccessURL(array, tag){
        let url = '';
        if(array && array.length > 0){
            array.every(value => {
                if(tag == value.optname){
                    url = value.opturl;
                }
                return tag !== value.optname;
            });
            return url;
        }
    }
    static findAccessOpt(array, tag){
        let state = false;
        if(array && array.length > 0){
            array.every(value =>{
                if(tag == value.optname){
                    state = true;
                }
                return tag !== value.optname;
            });
        }
        return state
    }
}
export default AuthorityUtils;