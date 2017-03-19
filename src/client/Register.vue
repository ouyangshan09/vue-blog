<template>
    <div class="container">
        <el-form class="register-form" :model="user" :rules="rules" ref="userForm" v-loading="loadObj.loading" :element-loading-text="loadObj.loadingText">
            <h3 class="title">注册用户管理</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="user.account" placeholder="帐号">
                    <template slot="prepend">账号</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="user.password" placeholder="密码">
                    <template slot="prepend">密码</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="text" v-model="user.checkPass" placeholder="请输入密码,长度6-8位">
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
            const checkPass = (rule, value, callback) => {
                console.log('value: ', value);
                if(value === ''){
                    callback(new Error('请输入密码'));
                }else if(value !== this.user.password){
                    callback(new Error('两次输入密码不一致'));
                }else {
                    callback()
                }
            };

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
                        message: '帐号不能为空',
                        tigger: 'blur'
                    },{
                        min: 3,
                        max: 12,
                        message: '长度在3到12个字符',
                        tigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        tigger: 'blur'
                    }],
                    checkPass: [{
                        validator: checkPass,
                        tigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            handlerRegisterUser(){
                const userObj = {
                    account: this.user.account,
                    password: this.user.password
                };
                console.log('userObj: ', userObj);
                this.$refs['userForm'].validate(value => {
                    if(value === true){
                        this.$http.post('/api/register', {
                            user: userObj
                        }).then(res => res.json()).then(json => {
                            console.log('json: ', json)
                        });
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