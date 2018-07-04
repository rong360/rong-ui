<template>
<div class="wrap">
	<rTitlebar theme="a" title="弹框示例"></rTitlebar>
	<div class="example">
		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog1">常规</div>
			<p data-id="b1" @click="doSource">查看源码</p>
			<textarea id="b1">
				this.$dialog({
					propsData: {
						message: 'sf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sd'
					},
					methods: {
						onCancel(){
							this.remove();
						},
						onConfirm(){
							alert('点击了确认按钮');
						}
					}
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog2">所有配置项</div>
			<p data-id="b2" @click="doSource">查看源码</p>
			<textarea id="b2">
				var dialog = this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '标题',
						titleStyleObj: {color:'green'},
						//右上角关闭按钮
						showCloseBtn: true,
						//Icon
						showIcon: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "test rContentData",
							list: [1,2,3,4,5,6,7,8,9]
						},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "秀一把",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'},
						//遮罩层
						CliperStyleObj: {background:'rgba(14, 14, 14, 0.5)'},
						//dialog框
						dlgStyleObj: {background:'darkcyan', width:'15rem'},
						//动画
						animate: true,
						//显示位置
						position: {x:'center', y:'center'}
				    },
				    mounted: function(){
				    	
				    },
				    //rContent为内容区域组件，通过rContentData接收外部数据
				    components: {
				    	//用法一：
				    	rContent: {
				    		props: {
					      		rContentData: {
					      			type: Object,
					      			default: function(){
					      				return {};
					      			}
					      		}
					      	},
					      	template: `<div @click="clickHandle" style="height:200px;overflow-y:scroll">
					      			{ {rContentData.message} }
					      			<ul>
					      				<li v-for="item in rContentData.list">{ {item} }</li>
					      			</ul>
					      		</div>`,
					      	methods: {
					      		clickHandle: function(){
					      			alert('click content');
					      		}
					      	}
				    	},
				    	//用法二:
				    	//rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog3">配置title</div>
			<p data-id="b3"  @click="doSource">查看源码</p>
			<textarea id="b3">
				var dialog = this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '标题',
						titleStyleObj: {color:'green'},
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog4">配置右上角关闭按钮</div>
			<p data-id="b4" @click="doSource">查看源码</p>
			<textarea id="b4">
				var dialog = this.$dialog({
					propsData: {
						//右上角关闭按钮
						showCloseBtn: true,
						//内容(普通文本或简单html)
						message: 'hello'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog5">配置icon</div>
			<p data-id="b5" @click="doSource">查看源码</p>
			<textarea id="b5">
				var dialog = this.$dialog({
					propsData: {
						//Icon
						showIcon: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: 'hello'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog6">配置内容</div>
			<p data-id="b6" @click="doSource">查看源码</p>
			<textarea id="b6">
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "test rContentData",
							list: [1,2,3,4,5,6,7,8,9]
						}
				    },
				    //rContent为内容区域组件，通过rContentData接收外部数据
				    components: {
				    	//用法一：
				    	rContent: {
				    		props: {
					      		rContentData: {
					      			type: Object,
					      			default: function(){
					      				return {};
					      			}
					      		}
					      	},
					      	template: `<div @click="clickHandle" style="height:200px;overflow-y:scroll">
					      			{ {rContentData.message} }
					      			<ul>
					      				<li v-for="item in rContentData.list">{ {item} }</li>
					      			</ul>
					      		</div>`,
					      	methods: {
					      		clickHandle: function(){
					      			alert('click content');
					      		}
					      	}
				    	},
				    	//用法二:
				    	//rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog7">配置btn</div>
			<p data-id="b7" @click="doSource">查看源码</p>
			<textarea id="b7">
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "秀一把",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'}
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			</textarea>
		</div>
		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog8">宽度+位置变化</div>
			<p data-id="b8" @click="doSource">查看源码</p>
			<textarea id="b8">
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						//dialog框
						dlgStyleObj: {background:'darkcyan', width:'150rem'},
						//显示位置
						position: {x:'center', y:'bottom'}
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="exp" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog9">slot内容变化</div>
			<p data-id="b9" @click="doSource" data-html="1">查看源码</p>
			<textarea id="b9">
				<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
					<div slot="content" class="hasread" @click="doRead">
						我已经阅读 <a href="javascript:;">《用户知情书》</a>
					</div>
				</rDialog>
			</textarea>
		</div>
	</div>

	<div  v-if="showDlg">
		<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
			<div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
		</rDialog>
	</div>

	<div id="code_area" v-show="showSource">
<!-- 		<div class="code-body" wrap="box ba_c">
			<div class="c-lines"></div>
			<div class="c-content"></div>
		</div> -->
		<div class="code-body"></div>
		<div class="close" @click="hideSource"><rIcon type="close-circled"></rIcon></div>
	</div>

</div>

</template>
<script>
import Decode from "../util/decode.js"
	export default{
		name: "dialogExample",
		data(){
			return {
				showSource: false,
				showDlg: false
			}
		},
		methods: {
			//常规
			showDialog1(){
				var self = this;

				this.$dialog({
					propsData: {
						message: 'sf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sd'
					},
					methods: {
						onCancel(){
							this.remove();
						},
						onConfirm(){
							alert('点击了确认按钮');
						}
					}
				});

			},
			//所有配置项
			showDialog2(){
				var dialog = this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '标题',
						titleStyleObj: {color:'green'},
						//右上角关闭按钮
						showCloseBtn: true,
						//Icon
						showIcon: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "test rContentData",
							list: [1,2,3,4,5,6,7,8,9]
						},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "秀一把",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'},
						//遮罩层
						CliperStyleObj: {background:'rgba(14, 14, 14, 0.5)'},
						//dialog框
						dlgStyleObj: {background:'darkcyan', width:'15rem'},
						//动画
						animate: true,
						//显示位置
						position: {x:'center', y:'center'}
				    },
				    mounted: function(){
				    	
				    },
				    //rContent为内容区域组件，通过rContentData接收外部数据
				    components: {
				    	//用法一：
				    	rContent: {
				    		props: {
					      		rContentData: {
					      			type: Object,
					      			default: function(){
					      				return {};
					      			}
					      		}
					      	},
					      	template: `<div @click="clickHandle" style="height:200px;overflow-y:scroll">
					      			{{rContentData.message}}
					      			<ul>
					      				<li v-for="item in rContentData.list">{{item}}</li>
					      			</ul>
					      		</div>`,
					      	methods: {
					      		clickHandle: function(){
					      			alert('click content');
					      		}
					      	}
				    	},
				    	//用法二:
				    	//rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
				    		this.remove();
				    	}
				    }
				});
			},
			//配置title
			showDialog3(){
				var dialog = this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '标题',
						titleStyleObj: {color:'green'},
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			},
			//配置右上角关闭按钮
			showDialog4(){
				var dialog = this.$dialog({
					propsData: {
						//右上角关闭按钮
						showCloseBtn: true,
						//内容(普通文本或简单html)
						message: 'hello'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
				    		this.remove();
				    	}
				    }
				});
			},
			//配置icon
			showDialog5(){
				var dialog = this.$dialog({
					propsData: {
						//Icon
						showIcon: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: 'hello'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			},
			//配置内容
			showDialog6(){
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "test rContentData",
							list: [1,2,3,4,5,6,7,8,9]
						}
				    },
				    //rContent为内容区域组件，通过rContentData接收外部数据
				    components: {
				    	//用法一：
				    	rContent: {
				    		props: {
					      		rContentData: {
					      			type: Object,
					      			default: function(){
					      				return {};
					      			}
					      		}
					      	},
					      	template: `<div @click="clickHandle" style="height:200px;overflow-y:scroll">
					      			{{rContentData.message}}
					      			<ul>
					      				<li v-for="item in rContentData.list">{{item}}</li>
					      			</ul>
					      		</div>`,
					      	methods: {
					      		clickHandle: function(){
					      			alert('click content');
					      		}
					      	}
				    	},
				    	//用法二:
				    	//rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			},
			//配置btn
			showDialog7(){
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						contentStyleObj: {fontSize:'30px'},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "秀一把",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'}
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			},
			//配置宽度+位置变化
			showDialog8(){
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'hello',
						//dialog框
						dlgStyleObj: {background:'darkcyan', width:'150rem'},
						//显示位置
						position: {x:'center', y:'bottom'}
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		alert('点击了确认按钮');
				    	}
				    }
				});
			},
			showDialog9(){
				this.showDlg = true;	
			},
			onConfirm(){
				alert('点击了确认按钮');
			},
			onCancel(){
				this.showDlg = false;	
			},
			doRead(){
				this.showDlg = false;
				alert("点击不会跳走，给你个提示~");
			},
			doSource(e){
				var divId = e.target.dataset.id,
					html = e.target.dataset.html,
					jscode = document.getElementById(divId).innerHTML;
				if(html == 1){
					this.$el.querySelector("#code_area .code-body").innerHTML = jscode;
				}else{
					var decode_jscode = Decode(jscode);
					this.$el.querySelector("#code_area .code-body").innerHTML = decode_jscode.code;
					// this.$el.querySelector("#code_area .c-content").innerHTML = decode_jscode.code;
					// this.$el.querySelector("#code_area .c-lines").innerHTML = decode_jscode.lines;			
				}
				this.showSource = true;
			},
			hideSource(){
				this.showSource = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
.wrap{
	position: relative;
}
.rg-button{
	margin: r(30) 0;
}
#code_area{
	background: rgba(0,0,0,.78);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 666;
	.code-body{
		position: absolute;
		width: r(640);
		left: 50%;
		margin-left: r(-350);
		height: 80%;
		top: 10%;
		background: #fff;
		z-index: 777;
		text-align: left;
		overflow: scroll;
		border-radius: 6px;
		font-size: r(12);
		padding: r(30);
	}
	.close{
		position: absolute;
		top: 10%;
		right: r(50);
		z-index: 888;
		padding: r(10);
	}
}
.exp{
	p{
		margin-left: r(30);
		font-size: r(13);
		color: #999;
		margin-left: r(15);
	}
	textarea{
		display: none;
	}
}
.hasread{
	margin: r(30) auto;
}
</style>