<script>
import ajax from './ajax';

export default {
    props: {
        type: String,
        action: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: 'file'
        },
        data: Object,
        headers: Object,
        withCredentials: Boolean,
        multiple: Boolean,
        accept: String,
        drag: Boolean,
        autoUpload: Boolean,
        onStart: Function,
        onProgress: Function,
        onSuccess: Function,
        onError: Function,
        beforeUpload: Function,
        onPreview: {
            type: Function,
            default: function () {}
        },
        onRemove: {
            type: Function,
            default: function () {}
        },
        httpRequest: Function,
        fileList: Array,
        listType: String,
    },
    data(){
        return {

        }
    },
    methods: {
        isImage(str){
            return str.indexOf('image') !== -1;
        },
        //input控件回调监听, 是整个上传文件的开始点, 当用户选择文件后,便开始上传流程
        handleChange(ev){
            console.log('upload->handleChange');
            const files = ev.target.files;
            if(!files) return;
            this.uploadFiles(files);
            this.$refs.input.value = null;
        },
        //提取files(数组)中需要的文件
        //文件不为图片则终止上传
        uploadFiles(files){
            console.log('upload->uploadFiles: ', files);
            let postFiles = Array.prototype.slice.call(files);
            if(!this.multiple){
                postFiles = postFiles.slice(0, 1);
            }
            if(postFiles.length === 0){
                return;
            }
            postFiles.forEach(rawFile => {
                if(!this.thumbnailMode || this.isImage(rawFile.type)){
                    //调用外部钩子(handleStart)
                    this.onStart(rawFile);
                    this.upload(rawFile);
                }
            });
        },
        //准备上传阶段, 调用外部钩子, 根据外部钩子操作流程
        upload(rawFile, file){
            console.log('upload->upload: ', rawFile);
            if(!this.beforeUpload){
                return this.post(rawFile);
            }
            //调用外部钩子(beforeUpload)
            const before = this.beforeUpload(rawFile);
            if(before && before.then){
                before.then(processedFile => {
                    if(Object.prototype.toString.call(processedFile) === '[object File]'){
                        this.post(processedFile);
                    }else {
                        this.post(rawFile);
                    }
                }, () => {
                    if(file) this.onRemove(file);
                });
            }else if(before !== false){
                this.post(rawFile);
            }else {
                if(file) this.onRemove(file);
            }
        },
        //上传阶段 ajax 请求
        post(rawFile){
            const option = {
                headers: this.headers,
                withCredentials: this.withCredentials,
                file: rawFile,
                data: this.data,
                filename: this.name,
                action: this.action,
                onProgress: e => {
                    this.onProgress(e, rawFile);
                },
                onSuccess: res => {
                    this.onSuccess(res, rawFile);
                },
                onError: err => {
                    this.onError(err, rawFile);
                }
            };
            console.log('upload->post: ', option);
            ajax(option);
        },
        //通过隐藏input，通过定义元素来调用input点击事件
        handleClick(){
            this.$refs.input.click();
            console.log('upload->handleClick')
        },
    },
    render(h){
        let {
                handleClick,
                handleChange,
                multiple,
                accept,
                listType,
                uploadFiles
        } = this;
        const data = {
            class: {
                'el-upload': true
            },
            //该方法覆盖原来组件上的v-on 指令,对应的key,比如click需要自行查阅文档
            on: {
                click: handleClick
            }
        };
        return (
            <div {...data}>
                {this.$slots.default}
                <input class="el-upload__input" type="file" ref="input" on-change={handleChange} multiple={multiple} accept={accept}></input>
            </div>
        );
    }
}

</script>