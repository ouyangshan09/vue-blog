<template>
	<button
		:disabled="disabled"
		@click="handleClick"
		:type="nativeType"
		class="oy-button"
		:class="[
			type ? 'oy-button--' + type : 'oy-button--default',
			size ? 'oy-button--' + size : '',
			long ? 'oy-button--long' : '',
			{
				'is-disabled': disabled,
				'is-plain': plain,
				'is-loading': loading
			}
		]"
	>
		<i class="el-icon-loading" v-if="loading"></i>
		<i :class="'el-icon-' + icon" v-if="icon && !loading"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<script>
	export default{
		
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: String,
			long: Boolean,
			icon: {
				type: String,
				default: ''
			},
			nativeType: {
				type: String,
				default: 'button'
			},
			loading: Boolean,
			disabled: Boolean,
			plain: Boolean,
			autofocus: Boolean
		},
		methods: {
			handleClick(ev){
				this.$emit('click', ev);
			}
		}
	}
</script>