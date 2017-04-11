<template>
    <div class="wrapper">
        <!--头部-->
        <header>header</header>
        <!--路由组件-->
        <router-view class="content"></router-view>
        <!--脚注-->
        <footer>footer</footer>
    </div>
</template>
<script type="es6">
    
    import {DataType} from '../utils';
    
    export default {
        data(){
            return {
                regions: [
                    {id: 1, name: 'Jiangsu'},
                    {id: 2, name: 'Zhejiang'},
                    {id: 3, name: 'Yunnan'},
                    {id: 11, name: 'Nanjing', parent: 1},
                    {id: 12, name: 'Suzhou', parent: 1},
                    {id: 21, name: 'Hangzhou', parent: 2},
                    {id: 22, name: 'Ningbo', parent: 2},
                    {id: 31, name: 'Kunming', parent: 3},
                    {id: 32, name: 'Lijiang', parent: 3},
                    {id: 111, name: 'Jiangning', parent: 11},
                    {id: 112, name: 'Gaochun', parent: 11},
                    {id: 321, name: 'Ninglang', parent: 32},
                    {id: 322, name: 'Huaping', parent: 32}
                ],
            }
        },
        created(){
            const obj = this.getTree(this.regions);
            console.log('map: ', DataType.toJson(obj.map));
            console.log('tree: ', DataType.toJson(obj.tree));
        },
        computed: {},
        methods: {
            getTree(arr){
                const map = arr.reduce((acc, val) => {
                    acc[val.id] = val;
                    return acc;
                }, {});
                const tree = [];
                arr.forEach(region => {
                    if (region.parent) {
                        const parent = map[region.parent];
                        if (!parent.children) {
                            parent.children = [region];
                        } else {
                            parent.children.push(region);
                        }
                    } else {
                        tree.push(region);
                    }
                });
                return {map, tree};
            }
        }
    }
</script>