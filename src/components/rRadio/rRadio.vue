<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span><slot>{{ label }}</slot>
    </label>
</template>
<script>
    import { findComponentUpward } from '../../util/assist';
    import Emitter from '../../mixins/emitter';


    const prefixCls = 'r-radio';

    export default {
        name: 'rRadio',
        mixins: [Emitter],
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [Object,String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                currentValue: this.value,
                group: true,
                parent: findComponentUpward(this, 'rRadioGroup')
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ];
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            if (this.parent) this.group = true;
            if (!this.group) {
                this.updateValue();
            } else {
                this.parent.updateValue();
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }
               
                const checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);

                 // 通过父级控件改写其他状态
                if (this.group && this.label !== undefined) {
                  this.parent.change({
                      value: this.label,
                      checked: this.value
                  });
                }
                if (!this.group) {
                  this.$emit('onchange', checked);
                  this.dispatch('FormItem', 'on-form-change', checked);
                }
            },
            updateValue () {
              this.currentValue = this.value;
            }
        },
        watch: {
            value () {
                this.updateValue();
            }
        }
    };
</script>
<style lang='scss'>
@import "./rRadio.scss";
</style>