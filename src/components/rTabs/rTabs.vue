<template>
	<div class="r-tabs">
		<rTabsHeader></rTabsHeader>
		<rTabsContent :list="list"></rTabsContent>
	</div>
</template>
<script>
import rTabsHeader from './tabs-header.vue'
import rTabsContent from './rTabs-content.vue'

	export default{
		name: "rTabs",
		data(){
			return {
				currentIndex: this.value,
				list: []
			}
		},
		props: {
			value: {
				type: [String, Number],
				default: 0
			}
		},
		components: {
			rTabsHeader,
			rTabsContent
		},
		methods: {
			onChange(index){
				this.currentIndex = index;
			}
		}
	}
</script>
<style lang="scss">
@import "./rTabs.scss";
</style>