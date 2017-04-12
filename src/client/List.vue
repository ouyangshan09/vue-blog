<template>
	<div class="clearfix article">
		<nav class="article-list">
			<div class="oy-article is--select">
				<div class="oy-article__title oy-article__omit">标题1231标题111112标题13111</div>
				<div class="oy-article__content">内容内容内123123容1内12312312</div>
				<div class="oy-article__lastdate is--inline oy-article__omit">2017-04-13</div>
				<div class="oy-article__author is--inline oy-article__omit">Ouyang</div>
			</div>
			<div class="oy-article">
				<div class="oy-article__title oy-article__omit">标题1231标题111112标题13111</div>
				<div class="oy-article__content">内容内容内123123容1内12312312</div>
				<div class="oy-article__lastdate is--inline oy-article__omit">2017-04-13</div>
				<div class="oy-article__author is--inline oy-article__omit">Ouyang</div>
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