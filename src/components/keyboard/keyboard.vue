<template>
	<div :class="['r-keyboard']" >
		<div class="r-keyboard-cliper" v-show="show"></div>
		<div :class="['r-keyboard-content',show?'':'r-keyboard-content-hidden']" @touchstart="doTouch" @touchend="endTouch">
			<div class="r-keyboard-head">
				<div data-code="ok" class="confirm">确定</div>
			</div>
			<div class="r-keyboard-row">
				<div data-code="1">1</div>
				<div data-code="2">2</div>
				<div data-code="3">3</div>
			</div>
			<div class="r-keyboard-row">
				<div data-code="4">4</div>
				<div data-code="5">5</div>
				<div data-code="6">6</div>
			</div>
			<div class="r-keyboard-row">
				<div data-code="7">7</div>
				<div data-code="8">8</div>
				<div data-code="9">9</div>
			</div>
			<div class="r-keyboard-row">
				<div :data-code="typeStr.code" v-html="typeStr.str"></div>
				<div data-code="0">0</div>
				<div data-code="d" class="d"><rIcon type="clear" data-code="d"></rIcon></div>
			</div>
		</div>
	</div>
</template>
<script>
import rIcon from "../rIcon/rIcon";
	export default{
		name: "rKeyboard",
		components: {
			rIcon
		},
		data(){
			return {
				currentValue: this.value+"",
				show: false
			}
		},
		props: {
			type: {
				type: String,
				default: "float"
			},
			value: {
				type: [String, Number],
				default: ''
			},
			//最大长度
			maxlength: {
				type: Number,
				default: -1
			},
			//小数点后保留几位，"-1"表示不限制
			floatFixed: {
				type: Number,
				default: -1
			},
			e: {
				type: MouseEvent
			}
		},
		computed: {
			typeStr(){
				//let str = "";
				let obj = {};
				switch(this.type){
					case "float":
						obj.str = "&sdot;";
						obj.code = ".";
						break;
					case "int":
						obj.str = "";
						obj.code = "";
						break;
					case "idcard":
						obj.str = "X";
						obj.code = "X";
						break;
				}
				return obj;
			}
		},
		mounted(){
			var self = this;

			if(!this.e) this.e = window.event;

			this.show = true;
			this.$nextTick(function(){
					self.dealKeyboardOcclusion();
				})

			this.keyboardSeat = document.createElement('div');
			document.body.appendChild(this.keyboardSeat);

			window.addEventListener('hashchange', this.remove);
		},
		methods: {
			doTouch(e){
				var self = this;
				var target = e.target,
					code = target.dataset.code;

				e.preventDefault();

				if(code){
					if(code == 'd'){
						this.currentValue = this.currentValue.substr(0, this.currentValue.length-1);
					}else{
						if(code == 'ok'){
							this.show = false;
							setTimeout(function(){
								self.remove();
							}, 100)
						}else{
							//最大长度
							if(this.maxlength > 0 && this.currentValue.length >= this.maxlength) return;
							//type类型为float
							if(this.type == 'float' && this.currentValue){
								//有小数点输入了
								if(this.currentValue.indexOf(".") > -1){
									//超过小数点后保留位数
									if(this.floatFixed > 0 && this.currentValue.split(".")[1].length >= this.floatFixed){
										return;
									}
									//已经有一个点了，就不要再输"."了
									if(code == '.'){
										return;
									}
								}
								//小数点前不允许输入多个"0"
								if(this.currentValue=='0' && code =='0'){
									return;
								}
							}

							//type类型为idcard
							if(this.type == 'idcard' && this.currentValue.length!=(this.maxlength-1) && code == 'X'){
								return;
							}
							this.currentValue += code;
						}
					}

					if(code != 'ok'){
						if(target.nodeName.toLocaleLowerCase() == 'span'){
							target = target.parentNode;
						}

						target.setAttribute('active', true);
					}

					this.typing(code, this.currentValue);
				}
			},
			endTouch(e){
				e.preventDefault();
				let target = e.target,
					code = target.dataset.code;
				if(code){
					if(code != 'ok'){
						if(target.nodeName.toLocaleLowerCase() == 'span'){
							target = target.parentNode;
						}

						target.setAttribute('active', false);
					}
				}
			},
			typing(code, codeStr){
				this.$emit("typing",code, codeStr);
			},
			remove(){
				if(this.$el&&this.$el.parentNode){
					//this.$el.parentNode.removeChild(this.$el);
					this.$el.remove();
					this.$destroy();
					window.removeEventListener('hashchange', this.remove);
				}
				if(this.keyboardSeat){
					this.keyboardSeat.parentNode.removeChild(this.keyboardSeat);
				}
			},
			//处理键盘遮挡问题
			dealKeyboardOcclusion(){
				var e = this.e;
				var target = e&&e.target;

				if(target){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
						offsetTop = this.getPos(target).top,
						keyboardHeight = this.$el.querySelector('.r-keyboard-content').offsetHeight,
						targetHeight = target.offsetHeight,
						screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
						viewHeight = screenHeight - keyboardHeight,
						eleHeight = offsetTop + targetHeight - scrollTop;

					if(eleHeight > viewHeight){
						document.documentElement.scrollTop += eleHeight - viewHeight;
						document.body.scrollTop += eleHeight - viewHeight;
					}
				}
			},
			getPos(obj){
				var pos = {left:0, top:0};

				while(obj){
					pos.left += obj.offsetLeft;
					pos.top += obj.offsetTop;
					obj = obj.offsetParent;
				}

				return pos;
			}
		},
		watch: {
			show(val){
				if(val){
					this.keyboardSeat.style.height = "300px";
				}else{
					this.keyboardSeat.style.height = "0px";
				}
			}
		}
	}
</script>
<style lang="scss">
	@import "./keyboard.scss"
</style>