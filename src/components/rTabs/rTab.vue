<script type="text/javascript">
	export default {
		name: 'rTab',
		data(){
			return {
				idx: this.index
			}
		},
		props: {
			label: {
				type: String,
				default: "tab"
			},
			index: {
				type: [Number, String]
			}
		},
		computed: {
			active(){
				return this.$parent.$parent.currentIndex == this.idx;
			}
		},
		render(h){
			var tab = this.$slots.label || this.label;
			return h('li', {
				class: {
					active: this.active
				},
				on: {
					click: this.tabHandle
				}
			}, tab);
		},
		mounted(){
			this.$parent.$parent.list.push(this);
			if(typeof this.idx == 'undefined'){
				this.idx = this.$parent.$parent.list.length - 1;
			}
		},
		methods: {
			tabHandle(){
				this.$parent.$parent.onChange(this.idx);
				this.$emit('onclick', {index: this.idx});
			}
		}
	}
</script>