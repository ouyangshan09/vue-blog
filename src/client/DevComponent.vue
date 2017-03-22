<template>
    <div class="container">
        <div>test</div>
        <upload
                :action="Url.uploadUrl"
        >
            <button>上传</button>
            <div slot="tip">测试</div>
        </upload>
    </div>
</template>
<script type="es6">
    import upload from '../component/upload';
    export default {
        components: {
            "upload": upload
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