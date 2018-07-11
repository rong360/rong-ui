<template>
    <div class="r-tab-content" v-show="show"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-tabs-tabpane';

    export default {
        name: 'rTab',
        props: {
            index: {
                type: [String,Number]
            },
            label: {
                type: [String, Function],
                default: ''
            }
        },
        data () {
            return {
                show: true,
                realIndex: this.index //index不传时，从零顺次增加
            };
        }
    };
</script>
