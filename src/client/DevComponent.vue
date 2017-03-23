<template>
    <div class="container">
        <div>test</div>
        <upload
                :action="Url.uploadUrl"
                list-type="picture-card"
        >
            <oy-button size="small" type="success" :disabled="false" >上传</oy-button>
        </upload>
        <el-upload :action="Url.uploadUrl" list-type="picture" v-if="false">
            <el-button>上传2</el-button>
        </el-upload>
        <oy-button size="small" type="primary" :plain="false" :loading="false">成功按钮</oy-button>
    </div>
</template>
<script type="es6">
    import upload from '../component/upload';
    import button from '../component/button/button.vue';
    export default {
        components: {
            "upload": upload,
            "oy-button": button
        },
        data(){
            return {
                Url: {
                    uploadUrl: '/api/fileUpload',
                }
            }
        },
        methods: {

        }
    }
</script>