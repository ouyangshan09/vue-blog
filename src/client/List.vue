<template>
	<section>
		<nav>文章列表</nav>
		
		<section>文章内容</section>
	</section>
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