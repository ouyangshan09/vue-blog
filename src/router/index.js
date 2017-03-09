/**
 * Created by OUYANG on 2017/2/27.
 * 应用路由组件
 * @author Ouyang
 * @version 1.0
 */
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../component/Hello';
import Client from '../client/client.vue';
import Home from '../client/home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        //客户端路由访问
        {
            path: '/',
            name: 'Home',
            component: Client,
            children: [
                {path: '', redirect: 'home'},
                {path: 'home', component: Home},
            ]
        }
        //客户端管理路由

        //无路由组件
    ]
});