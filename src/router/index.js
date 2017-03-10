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
import Login from '../server/Login.vue';
import Manager from '../server/Manager.vue';
import Home from '../client/home.vue';
import NotFound from '../component/NotFound.vue';

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
        },
        //后台管理登录路由
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        //后台管理界面项路由
        {
            path: '/manager',
            name: 'Manager',
            component: Manager
        },
        //无路由组件
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});