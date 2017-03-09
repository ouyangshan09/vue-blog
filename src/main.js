/**
 * Created by OUYANG on 2017/2/27.
 * 后台管理系统入口程序
 * @author Ouyang
 * @version 1.0
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import Router from './router';
import Store from './store';
import 'element-ui/lib/theme-default/index.css';
import './assets/css/index.scss';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    components: {
        App,
    },
    template: '<App/>'
});