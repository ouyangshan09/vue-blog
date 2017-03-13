<template>
    <div class="container">
        <el-form class="login-form" :model="user" ref="userForm">
            <h3 class="title">欢迎登录后台管理系统</h3>
            <el-form-item>
                <el-input type="text" v-model="user.account" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toManager">登录</el-button>
                <el-button @click="toRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <video width="300" height="300" controls>
            <source src="http://videos.kpie.com.cn/videos/20170313/5ABA1778-2EAA-4F53-9C19-1CEE7E203D59.mp4">
            <!--<source src="http://sz-kpie-test.oss-cn-shenzhen.aliyuncs.com/videos/20160725/0ea50d43-a043-4d31-bac1-aaa020541406.mp4">-->
        </video>
    </div>
</template>
<script type="es6">
    import VueEntity from '../base/vueEntity';

    export default {
        data(){
            return {
                user: {
                    account: '',
                    password: ''
                }
            }
        },
        methods: {
            toRegister(){

            },
            toManager(){

            }
        },
    }
</script>
<!--<style lang="scss">-->
    <!--.login{-->
        <!--font-size: 16px;-->
        <!--color: red;-->
    <!--}-->
<!--</style>-->
