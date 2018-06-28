<template>
  <div 
    @click="handleClick"
    :class="btnClass"
    :style="btnStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
	export default {
    name: 'rButton',
		props: {
  		type: {
  			type: String,
  			default: 'default'
  		},
      radius:{
        type:String,
        default: "off"
      },
      fill: {
        type: String,
        default: 'on'
      },
      btnStyle:Object
		},
    computed: {
      btnClass(){
        return [
          'r-button',
          (this.type ? 'r-button--' + this.type : '') + (this.fill=='on'?'':'--empty'),
          this.radius ? 'r-radius--' + this.radius : ''
        ]
      }
    } ,
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style lang='scss'>
@import "./rButton.scss";
</style>