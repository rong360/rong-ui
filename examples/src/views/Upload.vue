<template>
	<div class="wrap">
		<div class="title">说明</div>
		<div class="content">
			<div class="row">
				<div class="col">参数</div>
				<div class="col">默认值</div>
				<div class="col">说明</div>
			</div>
			<div class="row">
				<div class="col">text</div>
				<div class="col">string: "上传文件"</div>
				<div class="col">组件的引导上传文案</div>
			</div>
			<div class="row">
				<div class="col">clsName</div>
				<div class="col">string: ""</div>
				<div class="col">组件的类名，需是全局的类名</div>
			</div>
			<div class="row">
				<div class="col">accept</div>
				<div class="col">string: ''</div>
				<div class="col">可通过文件上传提交的文件类型</div>
			</div>
			<div class="row">
				<div class="col">name</div>
				<div class="col">string: 'file'</div>
				<div class="col">变量名</div>
			</div>
			<div class="row">
				<div class="col">data</div>
				<div class="col">Object</div>
				<div class="col">上传时带的其他变量</div>
			</div>
			<div class="row">
				<div class="col">action</div>
				<div class="col">string</div>
				<div class="col">上传的地址</div>
			</div>
			<div class="row">
				<div class="col">headers</div>
				<div class="col">Object</div>
				<div class="col">上传请求的header</div>
			</div>
			<div class="row">
				<div class="col">withCredentials</div>
				<div class="col">Boolean</div>
				<div class="col">跨域请求时，是否携带认证信息</div>
			</div>			
			<div class="row">
				<div class="col">maxSize</div>
				<div class="col">Number</div>
				<div class="col">最大体积</div>
			</div>			
			<div class="row">
				<div class="col">format</div>
				<div class="col">Array</div>
				<div class="col">支持的格式</div>
			</div>
			<div class="row">
				<div class="col">onError</div>
				<div class="col">Function</div>
				<div class="col">上传失败时的回调函数</div>
			</div>
			<div class="row">
				<div class="col">onProgress</div>
				<div class="col">Function</div>
				<div class="col">上传过程中的回调函数</div>
			</div>
			<div class="row">
				<div class="col">onSuccess</div>
				<div class="col">Function</div>
				<div class="col">上传成功时的回调函数</div>
			</div>
			<div class="row">
				<div class="col">onExceededSize</div>
				<div class="col">Function</div>
				<div class="col">超出尺寸时的回调函数</div>
			</div>
			<div class="row">
				<div class="col">beforeUpload</div>
				<div class="col">Function</div>
				<div class="col">上传之前的处理函数</div>
			</div>
			<div class="row">
				<div class="col">onFormatError</div>
				<div class="col">Function</div>
				<div class="col">格式校验失败时的回调函数</div>
			</div>
		</div>
		<div class="title">示例代码</div>
		<textarea name="" id="ta" cols="50" rows="3">
		<rUpload :action="config.action" :beforeUpload="confirm" :onSuccess="onSuccess" :clsName="clsName" :maxSize="maxSize" :onExceededSize="onExceededSize">
			<div slot="tip">
				<img :src="src" alt="" class="exp-img" v-show="showImg">
			</div>
		</rUpload>
		</textarea>
		<div class="exp">
			<div class="title">实例</div>
			<rUpload :action="config.action" :headers="config.headers" :beforeUpload="confirm" :onSuccess="onSuccess" :clsName="clsName" :maxSize="maxSize" :onExceededSize="onExceededSize">
				<div slot="tip">
					<img :src="src" alt="" class="exp-img" v-show="showImg">
				</div>
			</rUpload>
		</div>
	</div>
</template>
<script>
	export default{
		name: "rUploadExp",
		data(){
			return {
				phone: "",
				count: 0,
				txt: "",
				config: {
					action: "/fileUpload",
					headers: {
						"Content-Type": "multipart/form-data"
					}
				},
				showImg: false,
				src: "",
				clsName: "r-up-wrap",
				maxSize: 2,

				// showFileExample:false
			}
		},
		methods:{
			onExceededSize(){
				this.maxSize = 100000;
				alert("Exceed Size");
			},
			doKnown(){

			},
			confirm: function(file){
				// this.showFileExample =  true;
				return true;
			},
			onSuccess: function(res){
				this.showImg = true;
				this.src = res.data.img_url;
			}	
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75*1rem;
}
.r-up-wrap{
	width: r(200);
	height: r(200);
	background: url(https://static.rong360.com/upload/png/23/b5/23b5e2eb5f9498fa0f63c7843c001452.png) center no-repeat;
	margin: 0 auto;
	border: 1px dotted #4080e8;
}
.exp-img{
	display: block;
	margin: 0 auto;
}
.exp-wrap{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.75);
	z-index: 10;
	.tipwrap{
		position: fixed;
		top: 20%;
		left: 50%;
		width: r(300);
		margin-left: r(-150);

	}
}	
</style>