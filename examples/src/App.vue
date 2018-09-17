<template>
    <div id="app">
        <rTitlebar theme="a" :title="title" backurl="#" v-show="showTitlebar"></rTitlebar>
        <router-view></router-view>
        <a href="https://github.com/rong360/rong-ui" target="_blank">查看文档</a>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      title: '',
      showTitlebar: true
    }
  },
  watch: {
    $route: {
      handler(){
        this.$route.name == 'index'? this.showTitlebar=false : this.showTitlebar=true;
        if(this.$route.name == 'index'){
          //this.title = 'Demo list'
        }else{
          this.title = 'Demo/' + decodeURIComponent(this.$route.query.title);
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang='scss'>
@function r($px){
  @return $px/2/18.75* 1rem;
}
*{
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
ul{
  list-style: none;
}
a{
  font-size: r(26);
  color: #4080c8;
  // text-decoration: none;
}
html,body{
  overflow: auto;
  background: #efeff4;
  font-family: PingFangSC-Regular,Microsoft Yahei, sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[wrap ~= box]{
  display: -webkit-box;
  display: box;
}
[wrap ~= ba_c]{
  -webkit-box-align: center;
  box-align: center;
}
[wrap ~= bp_c]{
  -webkit-box-pack: center;
  box-pack: center;
}
/**************
/* 示例
**************/
.example{
  margin: 0 auto;
  .r-example{
    p{
      font-size: .8rem;
      color: #999;
      margin-left: r(15);
    }
    textarea{
      display: none;

    }
  }
}
/*******************
/* 查看源码
********************/
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
    border-radius: 6px;
    font-size: r(30);
    padding: r(30);
    white-space: nowrap;
      overflow: auto;
  }
  .close{
    position: absolute;
    top: 10%;
    right: r(30);
    z-index: 888;
    padding: r(20);
  }
}
/*************
/* 其他通用
*************/
.wrap{
    .title{
      margin: r(30);
      font-size: .8rem;
      color: #4080e8;
    }
    .content{
      margin: r(60);
    }
    .row{
      display: -webkit-box;
      display: box;
      align-items: center;
      
      width: 100%;
      
      font-size: r(24);
      color: #666;
      text-align: center;
      border: 1px solid #e5e5e5;
      border-bottom: none;
      &:last-child{
        border-bottom: 1px solid #e5e5e5;
      }
      .col{
        white-space: pre-wrap;
        word-wrap: break-word;
        width: 33.3333333%;
        padding: r(10) 0;
        border-right: 1px solid #e5e5e5;
        &:last-child{
          border-right: none;
        }
        &.left{
          text-align: left;
        }
      }
    }
    .rowsp{
      padding: r(10) 0;
      line-height: 200%;
      text-align: left !important;
      .comment{
        color: green;
      }
    }
    .code-content{
      background: #efeff4;
      margin: r(30);
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      text-align: left;
      padding: 0 r(30);
      font-size: .75rem;
      color: #666;
      min-height: 200px;
      min-width: 80%;
    }
    .indent1{
      text-indent: 1em;
    }
    .indent2{
      text-indent: 2em;
    }
    .indent3{
      text-indent: 3em;
    }
    .rg-button{

      background: #4080e8;
      border-radius: 6px;
      color: #fff;
      font-size: r(30);
      width: r(300);
      height: r(90);
      line-height: r(90);
      text-align: center;
      margin: r(30) auto;
    }
  .tip{
    padding: .5rem .8rem;
    text-align: left;
    font-size: .8rem;
    color: #4080e8;
    background: rgb(245, 231, 185);
  } 
  .btn{
    margin: r(50) auto;
    width: r(600);
    height: r(90);
    line-height: r(90);
    text-align: center;
    font-size: r(40);
    background: #4080e8;
    color: #fff;
    border-radius: 20px;
  }
}
</style>
