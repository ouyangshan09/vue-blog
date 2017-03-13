/**
 * Created by OUYANG on 2017/3/13.
 * 模拟测试更好的方法
 */
class VueEntity{

    constructor(){
        this.data = this._data;
        this.methods = this._methods();
    }
    _data(){
        return {
            _name: 'vueEntity'
        }
    }
    _methods(){
        return {

        }
    }
}

export default VueEntity;