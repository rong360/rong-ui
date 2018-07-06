<template>
	<div class="kb-wrap wrap">
		<rTitlebar theme="a" title="Keyboard 数字虚拟键盘"></rTitlebar>
		<div class="exp">
			<div class="infos" @click="createKb" id="infos">123</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: "rKeyboardExp",
		data(){
			return {}
		},
		methods: {
			createKb(e){
				var keyboard = this.$keyboard({
					propsData: {
						//键盘默认值
						value: document.getElementById('infos').innerHTML
					},
					methods: {
						typing(code, codeStr){
							console.log(code + '--' + codeStr);

							document.getElementById('infos').innerHTML = codeStr;
						}
					}
				})
			}
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75 * 1rem;
}
	.infos{
		margin: r(30) auto;
		width: 80%;
		border: 1px solid #e5e5e5;
		font-size: r(34);
		color: #4080e8;
		height: r(40);
		line-height: r(40);
	}
	.ta{
		width: 90%;
		margin: 0 auto;
		height: 350px;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		background: #f4f4f4;
	}
</style>