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
    </div>
</template>
<script type="es6">
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
<style lang="scss">
    .login{
        font-size: 16px;
        color: red;
    }
</style>
