<template>
<div class="wrap">
	<div class="title">Icon 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">type</div>
			<div class="col">string</div>
			<div class="col">icon类型
			</div>
		</div>
		<div class="row rowsp">
		icon的type取值如下：<br>
			close, close-circled, inform, addrlist<br>
			check, uncheck, check-circled, return<br>
			triangle-down, info, info-neg, info-pos<br>
			arrow-left, arrow-right, arrow-up, arrow-down<br>
			clear
		</div>
		<div class="row">
			<div class="col">size</div>
			<div class="col">string/Number</div>
			<div class="col">字体大小</div>
		</div>
		<div class="row">
			<div class="col">color</div>
			<div class="col">string</div>
			<div class="col">颜色</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea class="code-content" rows='4' cols='40'>
	<rIcon type="close"></rIcon>
	<rIcon type="close-circled"></rIcon>
	<rIcon type="inform"></rIcon>
	</textarea>
	<div class="icon-group">
		<rIcon type="close"></rIcon>
		<rIcon type="close-circled"></rIcon>
		<rIcon type="inform"></rIcon>
		<rIcon type="addrlist"></rIcon>
	</div>
	<div class="icon-group">
		<rIcon type="check"></rIcon>
		<rIcon type="uncheck"></rIcon>
		<rIcon type="check-circled"></rIcon>
		<rIcon type="return"></rIcon>
	</div>
	<div class="icon-group">
		<rIcon type="triangle-down"></rIcon>
		<rIcon type="info"></rIcon>
		<rIcon type="info-neg"></rIcon>
		<rIcon type="info-pos"></rIcon>
	</div>
	<div class="icon-group">
		<rIcon type="arrow-left" color="#4080e8"></rIcon>
		<rIcon type="arrow-right"></rIcon>
		<rIcon type="arrow-up"></rIcon>
		<rIcon type="arrow-down"></rIcon>
	</div>
	<div class="icon-group">
		<rIcon type="clear"></rIcon>
	</div>
</div>

</template>
<script>
	export default{
		name: "iconExample",
		data(){
			return {}
		}
	}
</script>
<style lang='scss' scoped>
.code-content{
	width: 80%;
}
span{
	flex: 1;
	margin: 40px;
}
.rowsp{
	line-height: 200%;
	text-align: left !important;
	color: #2e352e !important
}
	.icon-group{
		background: #e2e2dd;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
