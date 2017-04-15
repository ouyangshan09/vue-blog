<template>
	<div class="article">
		<!--文章列表-->
		<aside class="article-list article-pos">
			<list @select="handleArticleList" style="padding-bottom: 60px">
				<list-item index="-1" title="标题1" content="内容1" last-date="2017-04-13" author="欧阳"></list-item>
				<list-item v-for="o in 10" :key="o" :index="o + ''"></list-item>
			</list>
		</aside>
		<section class="article-content">
			<div class="">
				<!--编辑内容-->
				<textarea id="editor" style=""></textarea>
			</div>
		</section>
	</div>
</template>
<script type="es6">
	
	import 'simplemde/dist/simplemde.min.css';
	import {List, ListItem} from '../component/list';
	import SimpleMDE from 'simplemde';
	
	export default {
		data(){
			return {
			    simpleMD: "",
			}
		},
		created(){
			const params = this.$route.params;
			const id = params.id;
			console.log(id);
		},
		beforeDestroy(){
			let editor = document.getElementById('editor');
			editor.outerHTML = editor.outerHTML;
		},
		mounted(){
				this.$nextTick(() => {
					this.simpleMD = new SimpleMDE({
						initialValue: "初始化",
						autoDownloadFontAwesome: true,
						element: document.querySelector('#editor'),
						previewRender: function (text) {
							console.log('text: ', text);
						},
						spellChecker: false,
					});
				});
		},
		methods: {
			handleArticleList(index, item){
			    console.log('item: ', item);
				//TODO 获得id -> 获得文章内容 -> 填充编辑组件
			}
		},
		components: {
			List,
			ListItem
		}
	}
</script>