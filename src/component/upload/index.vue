<script>
import Upload from './upload.vue';

function noop() {}

export default{

    components: {
        Upload
    },
    props: {
        headers: {
            type: Object,
            default() {
                return {};
            }
        },
        action: {
            type: String,
            required: true
        },
        data: Object,
        multiple: Boolean,
        name: {
            type: String,
            default: 'file'
        },
        accept: String,
        drag: Boolean,
        dragger: Boolean,
        type: {
            type: String,
            default: 'select'
        },
        beforeUpload: Function,
        onRemove: {
            type: Function,
            default: noop
        },
        onChange: {
            type: Function,
            default: noop
        },
        onPreview: {
            type: Function
        },
        onSuccess: {
            type: Function,
            default: noop
        },
        onProgress: {
            type: Function,
            default: noop
        },
        onError: {
            type: Function,
            default: noop
        },
        fileList: {
            type: Array,
            default() {
                return [];
            }
        },
        listType: {
            type: String,
            default: 'text'   // text,picture,picture-card
        }
    },
    data(){
        return {
            uploadFiles: [],
            tempIndex: 1,
        }
    },
    watch: {
        fileList: {
            immediate: true,
            handler(fileList){
                this.uploadFiles = fileList.map(item => {
                    item.uid = item.uid || (Date.now() + this.tempIndex++);
                    item.status = 'success';
                    return item;
                });
            }
        }
    },
    methods: {
        //准备上传阶段
        handleStart(rawFile){
            rawFile.uid = Date.now() + this.tempIndex++;
            let file = {
                status: 'ready',
                name: rawFile.name,
                size: rawFile.size,
                percentage: 0,
                uid: rawFile.uid,
                raw: rawFile
            };
            try {
                file.url = URL.createObjectURL(rawFile);
            } catch (err) {
                console.error(err);
                return;
            }
            this.uploadFiles.push(file);
            console.log('handleStart: ', this.uploadFiles);
        },
        //上传中阶段
        handleProgress(ev, rawFile){
            let file = this.getFile(rawFile);
            this.onProgress(ev, file, this.uploadFiles);
            file.status = 'uploading';
            file.percentage = ev.percent || 0;
            console.log('handleProgress: ', ev);
        },
        //上传成功阶段
        handleSuccess(res, rawFile){
            let file = this.getFile(rawFile);
            if(file){
                file.status = 'success';
                file.response = res;
                this.onSuccess(res, file, this.uploadFiles);
                this.onChange(file, this.uploadFiles);
            }
            console.log('handleSuccess: ', res);
        },
        //上传失败阶段
        handleError(err, rawFile){
            let file = this.getFile(rawFile);
            let fileList = this.uploadFiles;
            file.status = 'fail';
            fileList.splice(fileList.indexOf(file), 1);
            this.onError(err, file, fileList);
            this.onChange(file, this.uploadFiles);
            console.log('handleError: ', err);
        },
        handleRemove(file){
            console.log('handleRemove: ', file);
        },
        getFile(rawFile){
            let fileList = this.uploadFiles;
            let target;
            fileList.every(item => {
                target = rawFile.uid === item.uid ? item : null;
                return !target;
            });
            return target;
        },
        clearFiles(){
            this.uploadFiles = [];
        }
    },
    render(h){
        const uploadData = {
            props: {
                type: this.type,
                action: this.action,
                multiple: this.multiple,
                accept: this.accept,
                name: this.name,
                data: this.data,
                fileList: this.fileList,
                listType: this.listType,
                'on-start': this.handleStart,
                'on-progress': this.handleProgress,
                'on-success': this.handleSuccess,
                'on-error': this.handleError,
                'on-preview': this.onPreview,
                'on-remove': this.handleRemove,
                'before-upload': this.beforeUpload,
            },
            ref: 'upload-inner'
        };
        const trigger = this.$slots.trigger || this.$slots.default;
        const uploadComponent = <upload {...uploadData}>{trigger}</upload>;
        return (
            <div>
                {
                    this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent
                }
                {this.$slots.tip}
            </div>
        );
    }

}
</script>