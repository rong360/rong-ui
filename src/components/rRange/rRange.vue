<template>
  <div :class="['r-range', disabled ? 'disabled' : '']">
    <slot name="start"></slot>
    <div class="range-bar" ref="rangeBar">
      <div class="bg">
        <div class="progress" :style="progressStyle" ref="progress"></div>
      </div>
      <div 
        class="dot" 
        :style="dotStyle" 
        ref="dot" 
        @touchstart="touchstartDot" 
        @touchmove="touchmoveDot" 
        @touchend="touchendDot"
      >
        <slot name="dot"></slot>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
export default {
  name: "rRange",
  data(){
    return{
      maxTranslateX: 0,
      startX: 0,
      translateX: 0,
      oldTranslateX: 0,
      progressWidth: 0,
      dotWidth: 0,
      currentValue: this.value,
      isDragDot: false
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 200000
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    progressStyle(){
      return {
        width: this.progressWidth,
        transition: this.isDragDot ? '' : 'width 0.5s'
      }
    },
    dotStyle(){
      return {
        transform: `translateX(${this.translateX}px)`,
        transition: this.isDragDot ? '' : 'transform 0.5s'
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.maxTranslateX = this.$refs.rangeBar.offsetWidth - this.$refs.dot.offsetWidth
      this.dotWidth = this.$refs.dot.offsetWidth
      this.currentValueToTranslateX()
    })
  },
  methods: {
    touchstartDot(e){
      if(this.disabled) return
     this.startX = e.changedTouches[0].clientX
     this.oldTranslateX = this.translateX
     this.isDragDot = true
    },
    touchmoveDot(e){
      if(this.disabled) return
      let oldTranslateX = this.oldTranslateX
      let translateX = oldTranslateX + e.changedTouches[0].clientX - this.startX
      let translateX_rate = translateX / this.maxTranslateX
      let currentValue = this.min + (this.max - this.min) * translateX_rate
      currentValue = this.fixCurrentValue(currentValue)
      this.currentValue = currentValue
    },
    touchendDot(e){
      if(this.disabled) return
      this.isDragDot = false
    },
    // 修正currentValue为step的整数倍
    fixCurrentValue(currentValue){
      let remainder = currentValue%this.step //余数
      let halfStep = this.step/2
      if(remainder < halfStep){
        currentValue = Math.floor(currentValue/this.step) * this.step
      }else{
        currentValue = Math.ceil(currentValue/this.step) * this.step
      }
      if(currentValue < this.min){
        currentValue = this.min
      }else if(currentValue > this.max){
        currentValue = this.max
      }
      return currentValue
    },
    // currentValue变化时滑块联动
    currentValueToTranslateX(){
      this.translateX = ( (this.currentValue - this.min)/(this.max - this.min) ) * this.maxTranslateX
    }
  },
  watch: {
    translateX(newVal, oldVal){
      this.progressWidth = newVal + this.dotWidth/2 + 'px'
    },
    value(newVal, oldVal){
      if(this.disabled) return
      this.currentValue = this.fixCurrentValue(newVal)
    },
    currentValue(newVal, oldVal){
      this.currentValueToTranslateX()
      this.$emit('input', this.currentValue)
    }
  },
}
</script>

<style lang="scss">
.r-range{
  height: 30px;
  display: flex;
  align-items: center;
  .range-bar{
    flex: 1;
    height: 10px;
    position: relative;
    .bg{
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      background-color: #ccc;
      overflow: hidden;
      .progress{
        height: 100%;
        background-color: #666;
      }
    }
    .dot{
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #ccc;
      z-index: 100;
      top: 50%;
      margin-top: -11px;
      transform:translate3d(0,0,0);
      -webkit-transform:translate3d(0,0,0);
    }
  }
}
</style>
