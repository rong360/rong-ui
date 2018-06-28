<template>
<div id="dl-wrap" class="wrap">
	<div class="title">Tabs 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">value</div>
			<div class="col">string: "0"</div>
			<div class="col">默认选中项，已"0"开始。也可给每个rTab设置不同的index,然后value与之匹配即可</div>
		</div>
		<div class="row">
			<div class="col">label</div>
			<div class="col">String</div>
			<div class="col">标签tab文字。标签也可以通过slot形式添加:&lsaquo;span slot="label"&rsaquo;tab2&lsaquo;/sapn&rsaquo;</div>
		</div>
		<div class="row">
			<div class="col">@onclick</div>
			<div class="col">function</div>
			<div class="col">事件：点击tab。返回参数是index</div>
		</div>
		<div class="row">
			默认tabs是不带样式的，可在外部自定义。选中状态的样式是"active"。如：
			<textarea style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
.rTabs-header{ 
	-webkit-box-pack: justify;
	box-pack: justify;
	background: -webkit-linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
	background: linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
	li{
		padding: 10px 15px;
		&.active{
			border-bottom: 2px solid red;
		}
	}
}
			</textarea>
		}
		</div>	
	</div>
	<rTabs value=0>
		<rTab label="tab1" @onclick="clickHandle">
			<p>content1</p>
		</rTab>
		<rTab label="tab2" @onclick="clickHandle">
			<p>content2</p>
			<p>content2</p>
		</rTab>
		<rTab label="tab3" @onclick="clickHandle">
			<p>content3</p>
			<p>content3</p>
			<p>content3</p>
		</rTab>
	</rTabs>
	<div class="title" style="margin-top: 100px">示例代码 - 常规</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
		<rTabs>
			<rTab label="tab1">
				<p>content1</p>
			</rTab>
			<rTab label="tab2">
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="tab3">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs
	</textarea>

	<div class="title">示例代码 - 通过value指定默认tab</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
		<rTabs value="1">
			<rTab label="tab1">
				<p>content1</p>
			</rTab>
			<rTab label="tab2">
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="tab3">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs
	</textarea>

	<div class="title">示例代码 - 标签tab通过slot形式插入</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
		<rTabs>
			<rTab label="tab1">
				<p>content1</p>
			</rTab>
			<rTab>
				<span slot="label" style="padding-left: 10px; padding-right: 10px">tab2</span>
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="tab3">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs
	</textarea>

	<div class="title">示例代码 - 给标签tab绑定事件</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
		<rTabs>
			<rTab label="tab1"  @onclick="clickHandle">
				<p>content1</p>
			</rTab>
			<rTab label="tab2"  @onclick="clickHandle">
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="tab3"  @onclick="clickHandle">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs
	</textarea>


	</div>

</div>

</template>
<script>
	export default{
		name: "tabsExample",
		data(){
			return {
			}
			
		},
		methods:{
			clickHandle(index){
				console.log(index)
			}
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/2/18.75* 1rem;
}
	.rTabs-header{
		-webkit-box-pack: justify;
		box-pack: justify;
		background: -webkit-linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
		background: linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
		li{
			padding: 10px 15px;
			&.active{
				border-bottom: 2px solid red;
			}
		}
	}
</style>









