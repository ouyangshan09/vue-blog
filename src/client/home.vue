<template>
    <div>
        <el-form :model="form" ref="form" v-if="false">
            <el-row>
                <el-col :md="8">
                    <el-form-item label="视频简介" label-width="100px">
                        <oy-input v-html="template" @newLine="handlerNewLine">

                        </oy-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :md="8">
                    <el-form-item label="视频所属" label-width="100px">
                        <el-cascader
                                key="123"
                                v-model="form.fromThemeId"
                                :options="Views.themeList"
                                @change="handlerChange"
                                style="width: 100%"></el-cascader>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div>Router</div>
    </div>
</template>
<script type="es6">
    import input from '../component/input.vue';
    export default {
        components: {
            'oy-input': input
        },
        data(){
            return {
                form: {
                    description: '',
                    fromThemeId: [],
                },
                Views: {
                    themeList: [
                        {
                            value: 'zhinan',
                            label: '指南',
                            children: [
                                {
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },{
                                        value: 'color',
                                        label: 'color 色彩'
                                    },{
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },{
                                        value: 'icon',
                                        label: 'icon 字体'
                                    },{
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }]
                                },{
                                    value: 'from',
                                    label: 'From',
                                    children: [{
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },{
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },{
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },{
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },{
                                        value: 'select',
                                        label: 'Select 选择器'
                                    }]
                                },{
                                    value: 'data',
                                    label: 'Data',
                                    children: [{
                                        value: 'table',
                                        label: 'Table 表格'
                                    },{
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },{
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },{
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    }]
                                }
                            ]
                        }
                    ]
                },
                template: `<div>${"一个视频"}</div>`,
                text: '标签1',
            }
        },
        created(){
            const theme = '这是一个话题';
            const widget = '<el-tag class="el-tag">标签</el-tag>'
        },
        methods: {
            handlerChange(value){
                const fromVluae = value[value.length - 1];
                const widget = `<span><el-tag class="el-tag">${fromVluae}</el-tag></span>`;
                this.template = this.template + widget;
            },
            handlerNewLine(event){
                console.log('event: ', event);
            },
            handleClose(tag){

            }
        }
    }
</script>