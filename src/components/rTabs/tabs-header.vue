<script type="text/javascript">
	export default {
		name: 'rTabs-header',
		render(h){
			return h('ul', {
				class: {
					"rTabs-header": true
				}
			}, this.$parent.$slots.default);
		}
	}
</script>