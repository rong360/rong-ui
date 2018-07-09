<template>
	<div class="wrap">
		<rTitlebar theme="a" title="Keyboard 数字虚拟键盘"></rTitlebar>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="kb-input" wrap="box ba_c bp_j" @click="createKb0">
				<div class="kb-lbl">默认键盘</div>
				<div class="kb-val" id="ipt0">123</div>
			</div>
			<p data-id="0" @click="doSource">查看源码</p>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="kb-input" wrap="box ba_c bp_j" @click="createKb1">
				<div class="kb-lbl">整数键盘</div>
				<div class="kb-val" id="ipt1">2</div>
			</div>
			<p data-id="1" @click="doSource">查看源码</p>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="kb-input" wrap="box ba_c bp_j" @click="createKb2">
				<div class="kb-lbl">身份证号码键盘</div>
				<div class="kb-val" id="ipt2">55</div>
			</div>
			<p data-id="2" @click="doSource">查看源码</p>
		</div>
		<div id="code_area" v-show="showSource">
			<div class="code-body"></div>
			<div class="close" @click="hideSource"><rIcon type="close-circled"></rIcon></div>
		</div>
	</div>
</template>
<script>
import Decode from "../util/decode.js"

	export default{
		name: "rKeyboardExp",
		data(){
			return {
				showSource: false,
				f0: `this.$keyboard({
					propsData: {
						maxlength: 8,
						//键盘默认值
						value: document.getElementById('ipt0').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt0').innerHTML = codeStr;
						}
					}
				})`,
				f1: `this.$keyboard({
					propsData: {
						type: "int",
						maxlength: 10,
						//键盘默认值
						value: document.getElementById('ipt1').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt1').innerHTML = codeStr;
						}
					}
				})`,
				f2: `this.$keyboard({
					propsData: {
						type: "idcard",
						maxlength: 18,
						//键盘默认值
						value: document.getElementById('ipt2').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt2').innerHTML = codeStr;
						}
					}
				})`
			}
		},
		methods: {
			createKb0(){
				this.$keyboard({
					propsData: {
						maxlength: 8,
						//键盘默认值
						value: document.getElementById('ipt0').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt0').innerHTML = codeStr;
						}
					}
				})
			},
			createKb1(){
				this.$keyboard({
					propsData: {
						type: "int",
						maxlength: 10,
						//键盘默认值
						value: document.getElementById('ipt1').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt1').innerHTML = codeStr;
						}
					}
				})
			},
			createKb2(){
				this.$keyboard({
					propsData: {
						type: "idcard",
						maxlength: 18,
						//键盘默认值
						value: document.getElementById('ipt2').innerHTML
					},
					methods: {
						typing(code, codeStr){
							document.getElementById('ipt2').innerHTML = codeStr;
							if(code=="ok"){
								this.$toast("键盘收起，可以写自己的回调函数")
							}
						}
					}
				})
			},
			
			doSource(e){
				var id = e.target.dataset.id;				
				var jscode = this["f"+id];
				var decode_jscode = Decode(jscode);
				this.$el.querySelector("#code_area .code-body").innerHTML = decode_jscode.code;
					
				this.showSource = true;
			},
			hideSource(){
				this.showSource = false;
			}

		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75 * 1rem;
}
.r-example{
	margin: r(30) 0;
	&:first-child{
		margin: r(50);
	}
}
.kb-input{
	width: 14rem;
	font-size: r(15);
	.kb-lbl{
		text-align: left;
		width: 7em;
		color: #4080e8;
	}
	.kb-val{
		border: 1px solid #4080e8;
		width: 7rem;
		margin-left: r(10);
		color: #666;
		height: r(20);
	}
}
</style>