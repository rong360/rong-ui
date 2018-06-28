<template>
<div id="dl-wrap" class="wrap">
	<div class="title">Dialog 参数说明</div>
	<div class="sub-title">
		<p>dialog实例方法通过<span class="red">子类组件</span>覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...</p>
		<textarea class="ta" style="height: 300px; width: 100%">
			this.$dialog({
					propsData: {
						message: '内容为普通文本或简单html',
					},
					components: {
						rContent: {
							template: '<div>内容部分为组件</div>'
						}
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
		<br>
		<p>
			propsData属性传入的数据大致分以下几部分：<br>
			1：弹窗标题<br>
			2：弹窗Icon<br>
			3：弹窗内容<br>
			4：弹窗按钮<br>
		</p>
	</div>
	<div class="content">
		<h6 class="tb-title">弹窗标题</h6>
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">showTitle</div>
			<div class="col">true || false</div>
			<div class="col">是否显示标题</div>
		</div>
		<div class="row">
			<div class="col">title</div>
			<div class="col">""</div>
			<div class="col">标题内容,  如："还款失败"</div>
		</div>			
		<div class="row">
			<div class="col">titleStyleObj</div>
			<div class="col">{}</div>
			<div class="col">标题样式，如：{fontWeight:'bold'}</div>
		</div>

		<h6 class="tb-title">弹窗icon</h6>
		<div class="row">
			<div class="col">showIcon</div>
			<div class="col">true || false</div>
			<div class="col">是否显示icon</div>
		</div>
		<div class="row">
			<div class="col">icon</div>
			<div class="col">支持传入"beiju"、"shuxie"、或者url</div>
			<div class="col">icon样式</div>
		</div>

		<h6 class="tb-title">弹窗内容</h6>
		<div class="row">
			<div class="col">message</div>
			<div class="col">"my content"</div>
			<div class="col">content内容（普通文本或简单html）</div>
		</div>
		<div class="row">
			<div class="col">contentStyleObj</div>
			<div class="col">{}</div>
			<div class="col">内容样式，如：{fontSize:'30px'}</div>
		</div>
		<div class="row">
			<div class="col">rContentData</div>
			<div class="col">{}</div>
			<div class="col left">
				弹窗内容部分为rContent组件时，rContentData为组件所需数据，例如：<br>
propsData: {
  rContentData: {
      message: "hello",
      list: [1,2,3,4,5,6,7,8,9]
  }
}
			</div>
		</div>
		<div class="row">
			<div class="col">rContent</div>
			<div class="col">{}</div>
			<div class="col left">
				弹窗内容部分需要插入组件时，通过rContent传入需要插入的组件,例如：<br>
components: {
  rContent: require('xxx.vue')
}
			</div>
		</div>

		<h6 class="tb-title">弹窗取消按钮</h6>
		<div class="row">
			<div class="col">cancelBtnText</div>
			<div class="col">"取消"</div>
			<div class="col">取消按钮文案</div>
		</div>
		<div class="row">
			<div class="col">showCancelBtn</div>
			<div class="col">true || false</div>
			<div class="col">是否显示取消按钮</div>
		</div>
		<div class="row">
			<div class="col">cancelBtnStyleObj</div>
			<div class="col">{}</div>
			<div class="col">取消按钮样式，如：{color:'white', background:'#4080e8'}</div>
		</div>
		<div class="row">
			<div class="col">onCancel</div>
			<div class="col">function</div>
			<div class="col">点击取消按钮回调，如：onCancel: function(){
				this.remove();
			}
			this指向弹窗组件实例
			</div>
		</div>

		<h6 class="tb-title">弹窗确认按钮</h6>
		<div class="row">
			<div class="col">confirmBtnText</div>
			<div class="col">"确认"</div>
			<div class="col">确认按钮文案</div>
		</div>
		<div class="row">
			<div class="col">showConfirmBtn</div>
			<div class="col">true || false</div>
			<div class="col">是否显示确认按钮</div>
		</div>
		<div class="row">
			<div class="col">confirmBtnStyleObj</div>
			<div class="col">{}</div>
			<div class="col">确认按钮样式，如：{color:'white', background:'#4080e8'}</div>
		</div>
		<div class="row">
			<div class="col">onConfirm</div>
			<div class="col">function</div>
			<div class="col">点击确认按钮回调，如：onConfirm: function(){
				this.message = "hello";
			}
			this指向弹窗组件实例
			</div>
		</div>
		
		<h6 class="tb-title">弹窗右上角关闭按钮</h6>
		<div class="row">
			<div class="col">showCloseBtn</div>
			<div class="col">true || false</div>
			<div class="col">是否显示关闭按钮</div>
		</div>

		<h6 class="tb-title">遮罩层</h6>
		<div class="row">
			<div class="col">CliperStyleObj</div>
			<div class="col">{}</div>
			<div class="col">遮罩层样式，如：{background:'rgba(14, 14, 14, 0.5)'}</div>
		</div>

		<h6 class="tb-title">弹框</h6>
		<div class="row">
			<div class="col">dlgStyleObj</div>
			<div class="col">{}</div>
			<div class="col">弹框样式，如：{background:'darkcyan', width:'600px'}</div>
		</div>

		<h6 class="tb-title">弹窗动画</h6>
		<div class="row">
			<div class="col">animate</div>
			<div class="col">true || false</div>
			<div class="col">是否开启动画</div>
		</div>

		<h6 class="tb-title">弹窗显示位置</h6>
		<div class="row">
			<div class="col">position</div>
			<div class="col">{x:'center',y:'bottom'}</div>
			<div class="col left">
				x表示横轴方向，值有：'left','center','right'<br>
				y表示纵轴方向，值有：'top','center','bottom'
			</div>
		</div>

		<h6 class="tb-title">slot插槽</h6>
		<div class="row">
			组件中有个具名slot=rContent，便于用户更改图标和按钮中间的内容<br>
			如果要使用具名slot更改内容，请使用全局组件rDialog结点形式
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea class="ta">
1）用法1：
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
		position: {x:'center', y:'bottom'}
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
	      			&#123; {rContentData.message}&#125; 
	      			<ul>
	      				<li v-for="item in rContentData.list">&#123; {item}&#125; </li>
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
2）用法2：
<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
	<div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
</rDialog>
	</textarea>

	<div class="example">
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog1">常规</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog2">所有配置项</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog3">配置title</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog4">配置右上角关闭按钮</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog5">配置icon</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog6">配置内容</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog7">配置btn</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog8">宽度+位置变化</div>
			</div>
			<div class="col">
				<textarea>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="rg-button" @click="showDialog9">slot内容变化</div>
			</div>
			<div class="col">
				<textarea><rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
			<div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
		</rDialog>
				</textarea>
			</div>
		</div>
	</div>
	
	
	<div  v-if="showDlg">
		<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
			<div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
		</rDialog>
	</div>

	<div class="d3">示例的回调会改变此处的值： {{txt}}</div>
</div>

</template>
<script>
	export default{
		name: "dialogExample",
		data(){
			return {
				txt: "",
				showDlg: false
			}
		},
		methods: {
			cancelHandel: function(){
				debugger
			},
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
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
.sub-title{
	text-align: left;
	font-size: r(14);
	padding: r(15);
	border: 1px solid #ccc;
	width: 90%;
	margin: 0 auto;
}
.red{
	color: red;
}
.ta{
	width: 90%;
	margin: 0 auto;
	height: 650px;
	border: 1px solid #e5e5e5;
	border-radius: 8px;
	background: #f4f4f4;
}
.tb-title{
	text-align: left;
	border-top: 1px solid #e5e5e5;
	padding-top: 10px;
}
	#dl-wrap{
		.d3{
			margin: r(60);
			color: #4080e8;
			font-size: r(30);
		}
	}
	.hasread{
		margin: r(30) auto;
	}
	.example{
		.row{
			.col{
				width: 50%;
				padding: 0;
				textarea{
					width: 100%;
					height: 100px;
					line-height: 13px;
					font-size:13px;
				}
			}
		}
	}
</style>