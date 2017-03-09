<template>
    <div id="app" v-cloak>
        <router-view></router-view>
    </div>
</template>
<script>
    import Hello from './component/Hello';
    export default {
        name: 'app',
        components: {

        }
    }
</script>