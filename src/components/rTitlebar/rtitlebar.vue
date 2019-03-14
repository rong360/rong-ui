<template>
	<div :class="['r-titlebar',
			theme=='a'? 'r-tb-theme-a' : '',
			theme=='b'? 'r-tb-theme-b' : '',
			theme=='c'? 'r-tb-theme-c' : '',
			theme=='d'? 'r-tb-theme-d' : '',
			theme=='e'? 'r-tb-theme-e' : ''
			]" :style="tbStyle">
		<div class="l-operate">
			<slot name="l">
				<div @click="onBack" v-if="showBackto">
					<rIcon type="arrow-left" size=".8rem" color="#fff"></rIcon>
				</div>
			</slot>
		</div>
		<slot name="c">		
			<div>{{title}}</div>
		</slot>
		<div class="r-operate">
			<slot name="r">
			</slot>
		</div>
	</div>
</template>
<script>
	import rIcon from "../rIcon/rIcon"
	export default{
		name: "rTitlebar",
		components: { rIcon },
		props: {
			theme: {
				type: String,
				default: "a"
			},
			tbStyle: {
				type: Object
			},
			showBackto: {
				type: Boolean,
				default: true
			},
			title: String
		},
		methods: {
			onBack(e){
				this.$emit("onback", e);
			}
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75 * 1rem;
}	
.r-titlebar{
	height: r(45);
	line-height: r(45);
	color: #fff;
	font-size: r(15);
	position: relative;
	text-align: center;
	.l-operate{
		position: absolute;
		left: r(15);
		top: 0;
	}
	.r-operate{
		position: absolute;
		top: 0;
		right: r(15);
	}
	&.r-tb-theme-a{
		background-image: linear-gradient(90deg, #39B9FF 0%, #4080E8 100%);
	}
	&.r-tb-theme-b{
		background-image: linear-gradient(-90deg,  #4D78F6 2%,#919FFF 100%);
	}
	&.r-tb-theme-c{
		background-image: linear-gradient(-269deg, #15DDC5 1%, #01A6D0 99%);
	}
	&.r-tb-theme-d{
		background-image: linear-gradient(-90deg, #F86B4A 0%, #FEC351 100%);	
	}
	&.r-tb-theme-e{
		background-image: linear-gradient(-90deg, #FF3061 0%, #FE8166 100%);
	}

}
</style>