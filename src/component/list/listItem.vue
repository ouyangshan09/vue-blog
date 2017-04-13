<template>
	<li class="oy-list-item" @click="handleClick">
		<article class="oy-article" :class="{'is--select': active}">
			<h3 class="oy-article__title content__omit">{{ title }}</h3>
			<p class="oy-article__content">{{ content }}</p>
			<footer class="oy-article__footer">
				<span class="oy-article__lastdate is--inline">{{ lastDate }}</span>
				<span class="oy-article__author is--inline">{{ author }}</span>
			</footer>
		</article>
	</li>
</template>
<script type="es6">
	export default {
    name: 'ListItem',
    data(){
        return {
            
				}
		},
		methods: {
			handleClick(){
			    this.dispatch('ListComponent', 'item-click', this);
			},
			dispatch(componentName, eventName, params){
			    let parent = this.$parent || this.$root;
					let name = parent.$options.componentName;
					while (parent && (!name || name !== componentName)){
					    parent = parent.$parent;
							if(parent) name = parent.$options.componentName;
					}
					if(parent) parent.$emit.apply(parent, [eventName].concat(params));
			},
		},
		computed: {
		    active(){
		        return this.selected && this.index === this.rootMenu.activedIndex;
				},
				rootMenu(){
				    let parent = this.$parent;
						while (parent && parent.$options.componentName !== 'ListComponent'){
						    parent = parent.$parnet;
						}
						return parent;
				}
		},
		props: {
		    selected: {
		        type: Boolean,
						default: true
				},
		    index: {
		        type: String,
						required: true
				},
		    title: {
		        type: String,
						default: "标题"
				},
				content: {
				    type: String,
						default: "内容"
				},
				lastDate: {
				    type: String,
						default: "修改时间",
				},
				author: {
				    type: String,
						default: "作者"
				}
		}
	}
</script>