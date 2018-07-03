<template>
<div id="dl-wrap" class="wrap">
	<div class="title">Radio 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">label</div>
			<div class="col">非空值</div>
			<div class="col">radio文本文案</div>
		</div>
		<div class="row">
			<div class="col">disabled</div>
			<div class="col">空</div>
			<div class="col">disabled不可用在标签中加入此项即可</div>
		</div>

	</div>
    <rRadio-group class="rRadio-group" @onchange="onchange">

        <rRadio v-for="(todo, index) in todos1" :key="index" :label=todo.text
			v-if="(todo.show)" >
			{{index+1}}、{{todo.text}}
		</rRadio>

    </rRadio-group>

	<rRadio-group class="rRadio-group">
        <rRadio :label=todos2[0].text >{{todos2[0].text}}</rRadio>
		<rRadio :label=todos2[1].text >{{todos2[1].text}}</rRadio>
		<rRadio :label=todos2[2].text disabled>{{todos2[2].text}}</rRadio>
    </rRadio-group>
	<span>当前点击项:{{current}}</span>
	<div class="title">示例代码</div>
	
	<textarea  disabled="disabled" class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
		
		<rRadio-group class="rRadio-group">
			<rRadio v-for="(todo, index) in todos1"  :label=todo.text
				v-if="(todo.show)">
			</rRadio>
		</rRadio-group>
		<rRadio-group class="rRadio-group">
			<rRadio :label="todos2[0].text">{{todos2[0].text}}</rRadio>
			<rRadio :label="todos2[1].text">{{todos2[1].text}}</rRadio>
			<rRadio :label="todos2[2].text" disabled>{{todos2[2].text}}</rRadio>
		</rRadio-group>

	</textarea>

	
</div>

</template>
<script>
	export default{
		name: "radioExample",
		data(){
			return {
				current: "",
				todos1: [
				{ text: '锅包肉',show:true},
				{ text: '鱼香肉丝',show:true},
				{ text: '麻辣豆腐',show:true},
				{ text: '小鸡炖蘑菇',show:true},
				{ text: '鸡蛋饼',show:true},
				{ text: '水煮鱼',show:false}
				],
				todos2: [
				{ text: '本田'},
				{ text: '大众'},
				{ text: '一汽'}
				]
			}

		},
		
		methods:{
			onchange:function(cur){
				console.log(this);
				this.current = cur;
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
	.rRadio-group{
		display:block;
	}
	#dl-wrap{
		padding-bottom: r(30);
		.d3{
			margin: r(60);
			
			color: #4080e8;
			font-size: r(30);
		}
	}
	.mt{
		margin-top:r(10);
	}
</style>