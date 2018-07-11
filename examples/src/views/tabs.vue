<template>
<div class="wrap">
	<rTitlebar theme="a" title="Tabs 标签页"></rTitlebar>
	<div class="tip">默认样式标签页,type=nail</div>
	<div class="exp exp1">
		<rTabs value=2 @onclick="doClick">
			<rTab label="极速贷" >
				<div class="tab-txt">
					<ul>
						<li>拍拍贷</li>
						<li>积木盒子</li>
						<li>链链金融</li>
					</ul>
				</div>
			</rTab>
			<rTab label="银行贷" index=2>
				<div class="tab-txt" v-html="htmlString"></div>
			</rTab>
		</rTabs>
		<rTabs>
			<rTab label="未使用">
				<div class="tab-txt">
					未使用的优惠券
				</div>
			</rTab>
			<rTab label="已使用">
				<div class="tab-txt">
					暂时没有
				</div>
			</rTab>
			<rTab label="已过期">
				<div class="tab-txt">已过期的优惠券</div>
			</rTab>
		</rTabs>
	</div>

	<div class="tip">type=line</div>
	<div class="exp exp0">
		<rTabs value=2 type="line">
			<rTab label="最近三天" >
				<p>ajax 获取数据</p>
			</rTab>
			<rTab label="最近一个月" index=2>
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="更多">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs>
		<rTabs value=0 type="line">
			<rTab label="充值记录">
				<div class="tab-txt">没有充值记录</div>
			</rTab>
			<rTab label="提现记录">
				<div class="tab-txt">
					没有提现记录
				</div>
			</rTab>
		</rTabs>
	</div>

	<div class="tip">type=card</div>
	<div class="exp exp0">
		<rTabs value=2 type="card">
			<rTab label="最近三天" >
				<p>ajax 获取数据</p>
			</rTab>
			<rTab label="最近一个月" index=2>
				<p>content2</p>
				<p>content2</p>
			</rTab>
			<rTab label="更多">
				<p>content3</p>
				<p>content3</p>
				<p>content3</p>
			</rTab>
		</rTabs>
	</div>

	<div class="tip">个性化标签名</div>
	<rTabs value=0 type="line">
			<rTab :label="label">
				<div class="tab-txt">没有充值记录</div>
			</rTab>
			<rTab label="提现记录">
				<div class="tab-txt">
					没有提现记录
				</div>
			</rTab>
		</rTabs>
</div>

</template>
<script>
	export default{
		name: "tabsExample",
		data(){
			return {
				label: `充值记录<span class="bubble">0</span>`,

				htmlString: `<ul>
						<li>中国银行</li>
						<li>南京银行</li>
						<li>建设银行</li>
					</ul>`
			}
		},
		methods:{
			doClick(idx){
				
				let self = this;
				setTimeout(function(){
					var t = new Date().getTime();
					self.htmlString = `<ul>
						<li>中国银行-${t}</li>
						
					</ul>`;
				},500)
			}
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/2/18.75* 1rem;
}
.exp{
	margin: r(50) r(30); 
}
.r-tab-content{
	min-height: 100px;
}
.tab-txt{
	font-size: r(15);
	padding: r(20) r(15);
}
.bubble{
	display: inline-block;
	width: r(30);
	height: r(30);
	color: #fff;
	margin-left: r(5);
	text-align: center;
	background: red;
	border-radius: 50%;
}
</style>









