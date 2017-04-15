<template>
	<div class="article">
		<!--文章列表-->
		<aside class="article-list article-pos">
			<div>文章列表</div>
			<list default-active="-1" @select="handleArticleList" style="padding-bottom: 60px">
				<list-item index="-1" title="标题1" content="内容1" last-date="2017-04-13" author="欧阳"></list-item>
				<list-item v-for="o in 10" :key="o" :index="o + ''" :content="'内容' + o"></list-item>
			</list>
		</aside>
		<section class="article-content">
			<simple-md ref="editorMD" content="初始化富本文控件"></simple-md>
		</section>
	</div>
</template>
<script type="es6">
	
	import 'simplemde/dist/simplemde.min.css';
	import {List, ListItem} from '../component/list';
	import {SimpleMd} from '../component/mdEdit';
	import SimpleMDE from 'simplemde';
	
	export default {
		data(){
			return {
				selectedId: ''
			}
		},
		created(){
			const params = this.$route.params;
			const id = params.id;
			console.log(id);
		},
		methods: {
			handleArticleList(index, item){
			    console.log('item: ', item.index);
				this.$refs['editorMD'].setContent(`item-value:${item.index}`);
				//TODO 获得id -> 获得文章内容 -> 填充编辑组件
			}
		},
		components: {
			List,
			ListItem,
			SimpleMd
		}
	}
</script>