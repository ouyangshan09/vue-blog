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
import Login from '../client/Login.vue';
import Register from '../client/Register.vue';
import Manager from '../client/Manager.vue';
import Home from '../client/home.vue';
import NotFound from '../component/NotFound.vue';
import DevComponent from '../client/DevComponent.vue';

Vue.use(Router);

export default new Router({
    // mode:'history',
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
        //后台管理注册用户路由
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        //后台管理界面项路由
        {
            path: '/manager',
            name: 'Manager',
            component: Manager
        },
        //组件测试开发
        {
            path: '/component-dev',
            name: 'ComponentDev',
            component: DevComponent
        },
        //无路由组件
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});