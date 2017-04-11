<template>
	<div class="clearfix article">
		<nav class="article-list">
			<div class="oy-article">
				<div class="oy-article__title">标题</div>
				<div class="oy-article__content">内容</div>
				<div class="oy-article__lastdate">时间</div>
				<div class="oy-article__author">作者</div>
			</div>
			<div class="oy-article">
				<div class="oy-article__title">标题</div>
				<div class="oy-article__content">内容</div>
				<div class="oy-article__lastdate">时间</div>
				<div class="oy-article__author">作者</div>
			</div>
		</nav>
		<section class="article-content">
			<div class="oy-article-content">
				<span>文章内容</span>
			</div>
		</section>
	</div>
</template>
<script type="es6">
	
	export default {
    data(){
        return {
            
				}
		},
		created(){
		    const params = this.$route.params;
				const id = params.id;
				console.log(id);
		},
		components: {
		    
		}
	}
</script>