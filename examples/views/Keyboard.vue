<template>
	<div class="kb-wrap wrap">
		<div class="title">Keyboard 参数说明</div>
		<div class="content">
			<div class="row">
				<div class="col">参数</div>
				<div class="col">默认值</div>
				<div class="col">说明</div>
			</div>
			<div class="row">
				<div class="col">type(可选)</div>
				<div class="col">String</div>
				<div class="col">数字键盘类型：int,float</div>
			</div>
			<div class="row">
				<div class="col">value(可选)</div>
				<div class="col">String</div>
				<div class="col">支持给键盘传入默认字符串</div>
			</div>
			<div class="row">
				<div class="col">maxlength(可选)</div>
				<div class="col">Number</div>
				<div class="col">codeStr最大长度</div>
			</div>
			<div class="row">
				<div class="col">e(可选)</div>
				<div class="col">事件对象</div>
				<div class="col">点击目标对象时的事件对象</div>
			</div>
			<div class="row">
				<div class="col">typing</div>
				<div class="col">事件</div>
				<div class="col left">
					键盘输入触发的事件。
					回调函数参数有两个(code,codeStr)<br>
					code:键盘值<br>
					codeStr:连续点击键盘生成的字符串
				</div>
			</div>
		</div>
		<div class="title">配置参数</div>
		<textarea class="ta">
			var keyboard = this.$keyboard({
				propsData: {
					//键盘类型 float、int、idcard
					type: 'int',
					//键盘默认值
					value: document.getElementById('infos').innerHTML,
					//codeStr最大长度
					maxlength: 8,
					//点击目标对象时的事件对象。处理键盘遮挡时需要获取目标元素的位置信息，默认不用传，如果事件存在兼容问题，可以通过这个参数传入事件对象
					e: e
				},
				methods: {
					typing(code, codeStr){
						console.log(code + '--' + codeStr);

						document.getElementById('infos').innerHTML = codeStr;
					}
				}
			})
		</textarea>
		<div class="title">示例代码</div>
		<div class="exp">
			<div class="infos" @click="createKb" id="infos">123</div>
			<textarea class="code-content">
				<div class="infos" @click="createKb" id="infos">123</div>


				export default{
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
			</textarea>
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