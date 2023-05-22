<template>
<div class="wrap">
	<div class="example">
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog1">常规</div>
			<p data-id="b1" @click="doSource">查看源码</p>
			<textarea id="b1">
				this.$dialog({
					propsData: {
						message: '生如夏花之绚烂，死如秋叶之静美<br>泰戈尔《生如夏花》'
					},
					methods: {
						onCancel(){
							this.remove();
						},
						onConfirm(){
							self.$toast('这是点击确认按钮的自定义回调');
							this.remove();
						}
					}
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog2">所有配置项</div>
			<p data-id="b2" @click="doSource">查看源码</p>
			<textarea id="b2">
				this.$dialog({
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
						message: '泰戈尔',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "飞鸟集",
							list: ['只有经历过地狱般的磨砺','才能练就创造天堂的力量', '只有流过血的手指','才能弹出世间的绝响']
						},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "确认",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'},
						//遮罩层
						CliperStyleObj: {background:'rgba(14, 14, 14, 0.5)'},
						//dialog框
						dlgStyleObj: {background:'#fff', width:'15rem'},
						//动画
						animate: true,
						//显示位置
						position: {x:'center', y:'center'}
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
					      	template: '<div @click="clickHandle" style="height:100px;margin-bottom: 30px;overflow-y:scroll">\{\{rContentData.message\}\}<ul><li v-for="item in rContentData.list">\{\{item\}\}</li></ul></div>',
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
							self.$toast('这是点击确认按钮的自定义回调');
							this.remove();
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
							self.$toast('这是点击关闭按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog3">配置title</div>
			<p data-id="b3"  @click="doSource">查看源码</p>
			<textarea id="b3">
				this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '飞鸟集',
						message: "当你为错过太阳而哭泣的时候，你也要再错过群星了。",
						titleStyleObj: {color:'green'},
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
							this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog4">配置右上角关闭按钮</div>
			<p data-id="b4" @click="doSource">查看源码</p>
			<textarea id="b4">
				this.$dialog({
					propsData: {
						//右上角关闭按钮
						showCloseBtn: true,
						//内容(普通文本或简单html)
						message: '我们把世界看错，反说它欺骗了我们。'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		this.remove();
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog5">配置icon</div>
			<p data-id="b5" @click="doSource">查看源码</p>
			<textarea id="b5">
				this.$dialog({
					propsData: {
						//Icon
						showIcon: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: '世界以痛吻我，要我报之以歌。',
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog6">配置内容</div>
			<p data-id="b6" @click="doSource">查看源码</p>
			<textarea id="b6">
				this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: '飞鸟集节选',
						contentStyleObj: {fontSize:'24px',color: "#4080e8"},
						//内容(rContent组件数据)
						rContentData: {
							message: "飞鸟集",
							list: ['只有经历过地狱般的磨砺','才能练就创造天堂的力量', '只有流过血的手指','才能弹出世间的绝响']
						},
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
					      			\{\{rContentData.message\}\}<ul><li v-for="item in rContentData.list">\{\{item\}\}</li></ul></div>`,
					      	methods: {
					      		clickHandle: function(){
					      			self.$toast('泰戈尔的师要美哭了');
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
							self.$toast('这是点击确认按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog7">配置btn</div>
			<p data-id="b7" @click="doSource">查看源码</p>
			<textarea id="b7">
				this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: '眼睛为她下着雨，心却为她打着伞，这就是爱情',
						contentStyleObj:  {fontSize:'24px',color: "#4080e8"},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "已阅",
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
							self.$toast('这是点击确认按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="rg-button" @click="showDialog8">宽度+位置变化</div>
			<p data-id="b8" @click="doSource">查看源码</p>
			<textarea id="b8">
				this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'Eyes are raining for her,heart is holding umbrella for her,this is love.',
						//dialog框
						dlgStyleObj: {background:'#f3cb62', width:'150rem'},
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
				    		this.remove();
				    	}
				    }
				});
			</textarea>
		</div>

		<div class="r-example" wrap="box ba_c bp_c">
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
		mounted(){
		},
		methods: {
			//常规
			showDialog1(){
				var self = this;

				this.$dialog({
					propsData: {
						message: '生如夏花之绚烂，死如秋叶之静美<br>泰戈尔《生如夏花》'
					},
					methods: {
						onCancel(){
							this.remove();
						},
						onConfirm(){
							self.$toast('这是点击确认按钮的自定义回调');
							this.remove();
						}
					}
				});

			},
			//所有配置项
			showDialog2(){
				var self = this;
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
						message: '泰戈尔',
						contentStyleObj: {fontSize:'30px'},
						//内容(rContent组件数据)
						rContentData: {
							message: "飞鸟集",
							list: ['只有经历过地狱般的磨砺','才能练就创造天堂的力量', '只有流过血的手指','才能弹出世间的绝响']
						},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "确认",
						showConfirmBtn: true,
						confirmBtnStyleObj: {color:'white', background:'#4080e8'},
						//遮罩层
						CliperStyleObj: {background:'rgba(14, 14, 14, 0.5)'},
						//dialog框
						dlgStyleObj: {background:'#fff', width:'15rem'},
						//动画
						animate: true,
						//显示位置
						position: {x:'center', y:'center'}
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
					      	template: `<div @click="clickHandle" style="height:100px;margin-bottom: 30px;overflow-y:scroll">{{rContentData.message}}
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
							self.$toast('这是点击确认按钮的自定义回调');
							this.remove();
				    	},
				    	//右上角关闭按钮
				    	onClose: function(){
							self.$toast('这是点击关闭按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			},
			//配置title
			showDialog3(){
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//标题
						showTitle: true,
						title: '飞鸟集',
						message: "当你为错过太阳而哭泣的时候，你也要再错过群星了。",
						titleStyleObj: {color:'green'},
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
							this.remove();
				    	}
				    }
				});
			},
			//配置右上角关闭按钮
			showDialog4(){
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//右上角关闭按钮
						showCloseBtn: true,
						//内容(普通文本或简单html)
						message: '我们把世界看错，反说它欺骗了我们。'
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		this.remove();
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
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//Icon
						showIcon: true,
						showCloseBtn: true,
						icon: 'beiju',
						//内容(普通文本或简单html)
						message: '世界以痛吻我，要我报之以歌。',
				    },
				    methods: {
				    	//取消按钮
				    	onCancel: function(){
				    		this.remove();
				    	},
				    	//确认按钮
				    	onConfirm: function(){
				    		this.remove();
				    	},
				    	onClose: function(){
				    		this.remove();
				    	},
				    }
				});
			},
			//配置内容
			showDialog6(){
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: '飞鸟集节选',
						contentStyleObj: {fontSize:'24px',color: "#4080e8"},
						//内容(rContent组件数据)
						rContentData: {
							message: "飞鸟集",
							list: ['只有经历过地狱般的磨砺','才能练就创造天堂的力量', '只有流过血的手指','才能弹出世间的绝响']
						},
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
					      			self.$toast('泰戈尔的师要美哭了');
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
							self.$toast('这是点击确认按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			},
			//配置btn
			showDialog7(){
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: '眼睛为她下着雨，心却为她打着伞，这就是爱情',
						contentStyleObj:  {fontSize:'24px',color: "#4080e8"},
						//取消按钮
						cancelBtnText: "取消",
						showCancelBtn: true,
						cancelBtnStyleObj: {color:'white', background:'#4080e8'},
						//确认按钮
						confirmBtnText: "已阅",
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
							self.$toast('这是点击确认按钮的自定义回调');
				    		this.remove();
				    	}
				    }
				});
			},
			//配置宽度+位置变化
			showDialog8(){
				var self = this;
				var dialog = this.$dialog({
					propsData: {
						//内容(普通文本或简单html)
						message: 'Eyes are raining for her,heart is holding umbrella for her,this is love.',
						//dialog框
						dlgStyleObj: {background:'#f3cb62', width:'150rem'},
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
				    		this.remove();
				    	}
				    }
				});
			},
			showDialog9(){
				this.showDlg = true;
			},
			onConfirm(){
				this.showDlg = false;
			},
			onCancel(){
				this.showDlg = false;
			},
			doRead(){
				this.showDlg = false;
				this.$toast('您已阅读');
			},
			doSource(e){
				var divId = e.target.dataset.id,
					html = e.target.dataset.html;
				if(html == 1){
					var jscode = document.getElementById(divId).innerHTML;
					this.$el.querySelector("#code_area .code-body").innerHTML = jscode;
				}else{
					var jscode = document.getElementById(divId).innerText;
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

.hasread{
	margin: r(30) auto;
}
</style>
