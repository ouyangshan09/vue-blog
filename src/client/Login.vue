<template>
    <div class="container">
        <el-form class="login-form" :model="user" :rules="rules" ref="userForm" v-loading="loadObj.loading" :element-loading-text="loadObj.loadingText">
            <h3 class="title">欢迎登录后台管理系统</h3>
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
            <el-form-item>
                <el-button type="primary" @click="toManager">登录</el-button>
                <el-button @click="toRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <!--<title-component :level="1">OUYANG</title-component>-->
        <!--<video width="300" height="300" controls>-->
            <!--<source src="http://videos.kpie.com.cn/videos/20170313/5ABA1778-2EAA-4F53-9C19-1CEE7E203D59.mp4">-->
            <!--<source src="http://sz-kpie-test.oss-cn-shenzhen.aliyuncs.com/videos/20160725/0ea50d43-a043-4d31-bac1-aaa020541406.mp4">-->
        <!--</video>-->
    </div>
</template>
<script type="es6">
    // import {BooleanUtils, NumberUtils, ObjectUtils, DataType} from '../utils';
    import Title from '../component/title';
    import User from '../entity/user';

    var name2 = 'world';
    var name = 'World!';
    (function () {
        // console.log('name1: ', typeof name);
        // console.log('name2: ', typeof name2);
        if (typeof name2 === 'undefined') {
            var name = 'Jack';
            var name2 = 'Ouyang';
            console.log('Goodbye ' + name2);
            console.log(typeof name2);
        } else {
            console.log('Hello ' + name2);
        }
    })();
    
    // function mul(x) {
    //     const result = y => mul(x * y);
    //     result.valueOf = () => x;
    //     return result;
    // }
    // console.log('mul: ',mul(3));

    //快速排序
    var quickSort = function(arr) {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([pivot], quickSort(right));
    };
    console.log(quickSort([3,4,5,6,9,11,23,2]));

    //二分查找
    function binary_search(arr, key) {
        let low = 0,
          high = arr.length - 1;
        while(low <= high){
            let mid = parseInt((high + low) / 2);
            if(key == arr[mid]){
                return  mid;
            }else if(key > arr[mid]){
                low = mid + 1;
            }else if(key < arr[mid]){
                high = mid -1;
            }else{
                return -1;
            }
        }
    };
    var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
    console.log('binary: ', binary_search(arr,10));
    
    export default {
        components: {
            'title-component': Title
        },
        created(){
            // const user = User.id('1').account('ouyang').password('123').build();
            // console.log('user: ', user);
        },
        data(){
            return {
                loadObj: {
                    loading: false,
                    loadingText: '页面跳转中',
                    loadingflag: false,
                },
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
                this.$router.push({ path: '/register'});
            },
            toManager(){
                const userObj = {
                    account: this.user.account,
                    password: this.user.password
                }
                this.loadObj.loading = true;
                this.$refs['userForm'].validate(value => {
                    if(value){
                        this.$http.post('/api/login', {
                            user: userObj
                        }).then(res => res.json()).then(json => {
                            // if(json.code === 151){
                            //     this.$router.push({path: '/manager'})
                            // }
                            // console.log('client login: ', json);
                            this.loadObj.loading = false;
                        }).catch(error => {
                            this.loadObj.loading = false;
                        });
                    }else {
                        console.log('exception');
                        this.loadObj.loading = false;
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
