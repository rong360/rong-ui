<template>
	<div class="wrap">
		<div class="title">Titlebar 参数说明</div>
		<div class="content">
			<div class="row">
				<div class="col">参数</div>
				<div class="col">默认值</div>
				<div class="col">说明</div>
			</div>
			<div class="row">
				<div class="col">title</div>
				<div class="col">string</div>
				<div class="col">标题</div>
			</div>
			<div class="row">
				<div class="col">theme</div>
				<div class="col">string：'a'</div>
				<div class="col">标题栏背景主题，a,b,c,d,e</div>
			</div>
			<div class="row">
				<div class="col">backurl</div>
				<div class="col">string：''</div>
				<div class="col">返回按钮url</div>
			</div>
			<div class="row">
				<div class="col">tbStyle</div>
				<div class="col">Object</div>
				<div class="col">标题栏自定义样式</div>
			</div>
			<div class="row">
			组件含有两个具名slot，slot=l是左侧操作，slot=r是右侧操作<br>
			默认slot=l里, 当传入backurl时，出现返回按钮，点击返回，触发事件onback
			</div>			
		</div>
		<div class="title">示例代码</div>

		<textarea class="code-content" rows='8' cols='40'>
		<rTitlebar theme="a" title="主题a" backurl="https://m.rong360.com" @onback="onBack"></rTitlebar>		
		</textarea>

		<div class="title">实例</div>
		<div class="exp">
			<rTitlebar theme="a" title="主题a" backurl="https://m.rong360.com" @onback="onBack"></rTitlebar>
			<rTitlebar theme="b" title="主题b"></rTitlebar>
			<rTitlebar theme="c" title="主题c"></rTitlebar>
			<rTitlebar theme="d" title="主题d">
				<div slot="l" @click="goHome">首页</div>
				<div slot="r" @click="goCenter">账户</div>
			</rTitlebar>
			<rTitlebar theme="e" title="主题e"></rTitlebar>
			<rTitlebar title="自定义背景" :tbStyle="tbStyle"></rTitlebar>
		</div>

	</div>
</template>
<script>
	export default{
		name: "rTitlebarExp",
		data(){
			return {
				tbStyle: {
					background: "#999"
				}
			}
		},
		methods:{
			onBack(){
				alert("左侧操作触发的函数回调~");
			},
			goHome(){
				alert("要去首页了~");
			},
			goCenter(){
				alert("要去用户中心了~");
			}
		}
	}
</script>
<style lang="scss" scoped>
	
@function r($px){
	@return $px/18.75*1rem;
}
.exp{
	margin-bottom: r(30);
}	
</style>