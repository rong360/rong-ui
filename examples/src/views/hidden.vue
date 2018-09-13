<template>
	<div class="wrap">
		<div class="exp">
			<div class="tip">hidden隐藏域存储数据：</div>
			<rHidden :attrs="config" :ref="config.name"></rHidden>、
			<div class="btn" @click="doSubmit">提交</div>
		</div>				
	</div>
</template>
<script>
	export default{
		name: "rIntExp",
		data(){
			return {
				config: {
					title: "天上的✨有几颗(非空校验)",
					name: 'stars',
					value: "1",
				}
			}
		},
		methods:{
			doSubmit(){
				let s = [],
					sa = {};
				for(var key in this.$refs){
					s.push(this.$refs[key].getSerialize());
					Object.assign(sa,this.$refs[key].getSerializeArray());
				}
				this.$dialog({
					propsData: {
						message:"hidden隐藏域数据为："+s.join("<br>&")
					},
					methods: {
						onConfirm: function(){
							this.remove();
						}
					}
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/18.75*1rem;
}
.code-content{
	min-height: 50px;
}
.cb{
	font-size: .75rem;
    margin: 1rem .8rem;
    line-height: 200%;
    .cb0{
    	color: #f66;
    }
}
.tip{
	padding: .5rem .8rem;
	text-align: left;
	font-size: .8rem;
	color: #4080e8;
	background: rgb(245, 231, 185);
}
.btn{
	margin: r(50) auto;
	width: r(300);
	height: r(45);
	line-height: r(45);
	text-align: center;
	font-size: r(20);
	background: #4080e8;
	color: #fff;
	border-radius: 20px;
}	
</style>