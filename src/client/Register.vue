<template>
    <div class="container">

        <el-form class="register-form" :moder="user" :rules="rules" ref="userForm" v-loading="loadObj.loading" :element-loading-text="loadObj.loadingText">
            <h3 class="title">注册用户管理</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="user.account" placeholder="账号">
                    <template slot="prepend">账号</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" v-model="user.password" placeholder="请输入密码,长度6-8位">
                    <template slot="prepend">密码</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="verifyPd">
                <el-input type="text" v-model="user.verifyPd" placeholder="请输入密码,长度6-8位">
                    <template slot="prepend">确认密码</template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handlerRegisterUser">提交</el-button>
                <el-button @click="toBack">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script type="es6">

    export default {
        data(){
            return {
                loadObj: {
                    loading: false,
                    loadingText: '注册中',
                },
                user: {
                    account: '',
                    password: '',
                    verifyPd: ''
                },
                rules: {
                    account: [{
                        required: true,
                        message: '注册账号不能为空',
                        tigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        tigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            handlerRegisterUser(){
                this.$refs['userForm'].validate(value => {
                    if(value === true){
                        console.log('register user');
                    }else {
                        return false;
                    }
                })

                //TODO
            },
            toHome(){
                this.$router.push({ path: 'register' });
            },
            toBack(){
                this.$router.go(-1);
            }
        },
    }

</script>