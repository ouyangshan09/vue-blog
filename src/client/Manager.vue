<template>
    <!--<div>管理,需要在登录后</div>-->
    <div class="container">
        <nav class="oy-console--top">
            <section class="nav-path">
                <aside class="logo">LOGO</aside>
                <ul class="oy-menu oy-menu--dark clearfix">
                    <li class="oy-menu-item">控制台</li>
                    <li class="oy-menu-item">博客地址</li>
                    <li class="oy-menu-item oy-menu-item--right">icon + 帐号 + 退出</li>
                </ul>
            </section>
        </nav>
        <section class="oy-console--left">
            <ul class="oy-menu clearfix">
                <li class="oy-menu-item">菜单按钮1</li>
                <li class="oy-menu-item">菜单按钮2</li>
                <li class="oy-menu-item">菜单按钮3</li>
                <li class="oy-menu-item">菜单按钮4</li>
            </ul>
        </section>
        <section class="oy-console--center">
            <router-view></router-view>
        </section>
    </div>
</template>
<script type="es6">


    export default {
        name: 'Manager',
        data(){
            return {

            }
        }
    }

    class Parent{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.parentMethod = function () {
                return 'parent';
            };
        }
        say(){
            return this.name + '-parent';
        }
    }
    class Sub extends Parent{
        constructor(name, age){
            super(name, age);
            this.subMethod = function () {
                return 'sub';
            };
        }
        subSay(){
            return this.name + '-sub';
        }
        // say(){
        //     return this.name + '-sub';
        // }
        static staticSay(){
            return 'static';
        }
    }
</script>
<style lang="scss"></style>