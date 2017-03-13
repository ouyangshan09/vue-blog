<template>
    <div class="container">
        <el-form class="login-form" :model="user" :rules="rules" ref="userForm" v-loading="loadObj.loading" :element-loading-text="loadObj.loadingText">
            <h3 class="title">欢迎登录后台管理系统</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="user.account" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toManager">登录</el-button>
                <el-button @click="toRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <!--<video width="300" height="300" controls>-->
            <!--<source src="http://videos.kpie.com.cn/videos/20170313/5ABA1778-2EAA-4F53-9C19-1CEE7E203D59.mp4">-->
            <!--<source src="http://sz-kpie-test.oss-cn-shenzhen.aliyuncs.com/videos/20160725/0ea50d43-a043-4d31-bac1-aaa020541406.mp4">-->
        <!--</video>-->
    </div>
</template>
<script type="es6">
    import VueEntity from '../base/vueEntity';

    export default {
        data(){
            return {
                loadObj: {
                    loading: false,
                    loadingText: '页面跳转中',
                    loadingflag: false,
                },
                loading: false,
                user: {
                    account: '',
                    password: ''
                },
                rules: {
                    account: [{
                        required: true,
                        message: '帐号不能为空',
                        tigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        tigger: 'blur'
                    }],
                },
                msgObj: {
                    errorMessage: false,
                },
            }
        },
        methods: {
            toRegister(){
                // this.$router.push({ path: '/register'});
            },
            toManager(){
                const userObj = {
                    account: this.user.account,
                    password: this.user.password
                }
                this.$refs['userForm'].validate(value => {
                    console.log("12312");
                    if(value){
                        console.log('success: ', value);
                    }else {
                        console.log('error submit');
                        return false;
                    }
                });
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
