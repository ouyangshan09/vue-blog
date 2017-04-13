<template>
	<ul class="oy-list">
		<slot></slot>
	</ul>
</template>
<script type="es6">
	export default {
    name: 'ListComponent',
		componentName: 'ListComponent',
		data(){
        return {
						activedIndex: this.defaultActive,
				}
		},
		mounted(){
		    this.$on('item-click', this.handleItemCLick);
		},
		methods: {
		    handleItemCLick(item){
		        let {index} = item;
						this.activedIndex = index;
						this.$emit('select', index, item);
				}
		},
		props: {
		    defaultActive: {
		        type: String,
						default: ""
				}
		}
	}
</script>