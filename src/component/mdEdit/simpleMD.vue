<template>
    <div>
        <textarea id="editor" style="opacity: 0"></textarea>
    </div>
</template>
<script type="es6">

    import 'simplemde/dist/simplemde.min.css';
    import SimpleMDE from 'simplemde';

    export default {
        name: "simpleMD",
        data(){
            return {
                simpleMD: "",
                defaultContent: this.content,
            }
        },
        created(){

        },
        mounted(){
            const self = this;
            this.$nextTick(() => {
                self.simpleMD = new SimpleMDE({
                    initialValue: self.defaultContent,
                    autoDownloadFontAwesome: true,
                    element: document.querySelector('#editor'),
                    previewRender: function (text) {
                        console.log('preview text: ', text);
                    },
                    spellChecker: false
                });
                self.simpleMD.codemirror.on('change', function () {
                    console.log("value: ", self.simpleMD.value());
                });
            })
        },
        beforeDestroy(){
            // let editor = document.querySelector('#editor');
            // editor.outerHTML = editor.outerHTML;
        },
        methods: {
            getMDText(){
                //TODO 返回编辑内容
            },
            setContent(value){
                this.defaultContent = '';
                this.simpleMD.value("");
                this.simpleMD.value(value);
            }
        },
        watch: {
            content(value){
                this.defaultContent = value;
            }
        },
        props: {
            content: {
                type: String,
                default: ""
            }
        },
        
    }

</script>