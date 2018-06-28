<template>
<div id="dl-wrap" class="wrap">
	<div class="title">Region 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">provinceUrl</div>
			<div class="col">String: "https://m.rong360.com/loanlocation/province"</div>
			<div class="col">省份接口<span class="red">(目前接口url确定)</span></div>
		</div>
		<div class="row">
			<div class="col">cityUrl</div>
			<div class="col">String: "https://m.rong360.com/loanlocation/area?dataCode={datacode}&type=1"</div>
			<div class="col">城市接口<span class="red">(目前接口url确定)</span></div>
		</div>
		<div class="row">
			<div class="col">countryUrl</div>
			<div class="col">String: "https://m.rong360.com/loanlocation/area?dataCode={datacode}&type=2"</div>
			<div class="col">县区接口<span class="red">(目前接口url确定)</span></div>
		</div>
		<div class="row">
			<div class="col">jsonp</div>
			<div class="col">Boolean: false</div>
			<div class="col">是否是异步请求</div>
		</div>
		<div class="row">
			<div class="col">text</div>
			<div class="col">String: "选择城市"</div>
			<div class="col">文案提示</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea  disabled="disabled" class="code-content" style="min-height: 3rem;margin: 0;padding: 0; width: 90%;">
		<rRegion :jsonp="true"></rRegion>
	</textarea>

	<rRegion :jsonp="true" @confirm="onConfirm" :text="t"></rRegion>

</div>

</template>
<script>
	export default{
		name: "rReginExp",
		data(){
			return {
				t: "点我选择城市"
			}			
		},
		methods:{
			onConfirm(text){
				alert("选择的城市：" + text);
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
.col .red{
	font-weight: bold;
	color: #e01a31;
}
</style>