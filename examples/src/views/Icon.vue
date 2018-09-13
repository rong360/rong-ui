<template>
<div class="wrap">
	<div class="exp">
		<div class="icon-group">
			<rIcon type="sort-inc-blue"></rIcon>
			<rIcon type="sort-dec-blue"></rIcon>
			<rIcon type="sort-inc-red"></rIcon>
			<rIcon type="sort-dec-red"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>sort-inc-blue</span>
			<span>sort-dec-blue</span>
			<span>sort-inc-red</span>
			<span>sort-dec-red</span>
		</div>
		<div class="icon-group">
			<rIcon type="home"></rIcon>
			<rIcon type="note"></rIcon>
			<rIcon type="edit"></rIcon>
			<rIcon type="delete"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>home</span>
			<span>note</span>
			<span>edit</span>
			<span>delete</span>
		</div>
		<div class="icon-group">
			<rIcon type="contact"></rIcon>
			<rIcon type="clear"></rIcon>
			<rIcon type="inform"></rIcon>
			<rIcon type="addrlist"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>contact</span>
			<span>clear</span>
			<span>inform</span>
			<span>addrlist</span>
		</div>
		<div class="icon-group">
			<rIcon type="close"></rIcon>
			<rIcon type="close-circled"></rIcon>
			<rIcon type="close-circled-empty"></rIcon>	
			<rIcon type="ask"></rIcon>		
		</div>
		<div class="icon-group txt">
			<span>close</span>
			<span>close-circled</span>
			<span>close-circled-empty</span>	
			<span>ask</span>		
		</div>
		<div class="icon-group">
			<rIcon type="check"></rIcon>
			<rIcon type="check-circled"></rIcon>
			<rIcon type="check-circled-empty"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>check</span>
			<span>check-circled</span>
			<span>check-circled-empty</span>
		</div>
		<div class="icon-group">
			<rIcon type="return"></rIcon>
			<rIcon type="triangle-down"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>return</span>
			<span>triangle-down</span>
		</div>
		<div class="icon-group">
			<rIcon type="info-up"></rIcon>
			<rIcon type="info"></rIcon>
			<rIcon type="info-neg"></rIcon>
			<rIcon type="info-pos"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>info-up</span>
			<span>info</span>
			<span>info-neg</span>
			<span>info-pos</span>
		</div>
		<div class="icon-group">
			<rIcon type="arrow-left" color="#4080e8"></rIcon>
			<rIcon type="arrow-right"></rIcon>
			<rIcon type="arrow-up"></rIcon>
			<rIcon type="arrow-down"></rIcon>
		</div>
		<div class="icon-group txt">
			<span>arrow-left</span>
			<span>arrow-right</span>
			<span>arrow-up</span>
			<span>arrow-down</span>
		</div>
	</div>
	
</div>

</template>
<script>
	export default{
		name: "iconExample"
	}
</script>
<style lang='scss' scoped>

span{
	flex: 1;
	margin: 10px 0 5px 0;
}
.txt{
	font-size: 12px;
}
.icon-group{
	background: #e6e8ef;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>
