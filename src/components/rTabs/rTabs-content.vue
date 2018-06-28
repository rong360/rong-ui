<script type="text/javascript">
	export default {
		name: 'rTabs-content',
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		render(h){
			var content = this.list.map(item => {
				return item.active? item.$slots.default : null;
			});
			return h('div', {
				class: {
					"rTabs-content": true
				}
			}, content);
		}
	}
</script>