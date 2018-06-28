<template>
	<div class="wrap">
		<div class="title">Toast 参数说明</div>
		<div class="content">
			<div class="row">
				<div class="col">参数</div>
				<div class="col">默认值</div>
				<div class="col">说明</div>
			</div>
			<div class="row">
				<div class="col">message</div>
				<div class="col">string</div>
				<div class="col">toast文案</div>
			</div>
			<div class="row">
				<div class="col">type</div>
				<div class="col">string: positive</div>
				<div class="col">toast类型，positive积极文案,negetive消极文案,long长文本</div>
			</div>
			<div class="row">
				<div class="col">time</div>
				<div class="col">Number: 2000</div>
				<div class="col">多少ms后toast消失</div>
			</div>
			<div class="row">
				<div class="col">callback</div>
				<div class="col">function</div>
				<div class="col">toast消失时回调函数</div>
			</div>				
		</div>
		<div class="title">示例代码1</div>
		<textarea class="code-content" rows='2' cols='40'>
		this.$toast('Hello World!');
		</textarea>
		<div class="title">示例代码2</div>
		<textarea class="code-content" rows='10' cols='40'>
		this.$toast({
			propsData: {
				message: 'Hello World!',
				type: 'negetive',
				time: 5000
			},
			methods: {
				callback(){
					self.count++;
				}
			}
		});
		</textarea>
		<div class="title" style="margin-top: 50px">实例</div>
		<div class="exp">
			<div class="btn" @click="showToast0">默认toast</div>
			<div class="btn" @click="showToast1">消极toast 5s后消失</div>
			<div class="btn" @click="showToast2">长字符 toast</div>
			<div class="btn" @click="showToast3">toast回调函数 {{count}}</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: "toastExp",
		data(){
			return {
				count: 0
			}
		},
		methods:{
			showToast0(){
				var self = this;

				this.$toast({
					propsData: {
						message: 'Hello World!'
					}
				});
			},
			showToast1(){
				var self = this;

				this.$toast({
					propsData: {
						message: 'Hello World Again~',
						type: 'negetive',
						time: 5000
					},
					methods: {
						callback(){
							self.count++;
						}
					}
				});
			},
			showToast2(){
				var self = this;

				this.$toast({
					propsData: {
						message: '愿你出走半生，归来仍是少年~',
						type: 'long'
					}
				});
			},
			showToast3(){
				var self = this;

				this.$toast({
					propsData: {
						message: 'hello'
					},
					methods: {
						callback(){
							self.count++;
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