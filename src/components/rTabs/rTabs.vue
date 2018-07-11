<template>
    <div class="r-tabs">
        <div :class="tabsCls">
            <div v-for="(item, i) in navList" @click="handleChange(i)" :class="navCls(item)" v-html="item.label">
            
            </div>
        </div>
        <div class="r-tabs-content" ref="r-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'rTabs',
        props: {
            value: {
                type: [String, Number]
            },
            type: {
                validator (value) {
                    return ['line', 'nail',"card"].indexOf(value)>-1;
                },
                default: 'nail'
            }
        },
        data () {
            return {
                navList: [],
                activeKey: this.value ? this.value : 0
            };
        },
        computed:{
            tabsCls(){
                return "r-tabs-nav-" + this.type;
            }
        },
        methods: {
            navCls(item){
                return [ "r-tab-nav"
                    ,{
                        "r-tab-nav-active": item.currentKey == this.activeKey
                    }];
            },
            getTabs () {
                return this.$children.filter(item => item.$options.name === 'rTab');
            },         
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.realIndex == this.activeKey) );
            },
            handleChange (i) {
                this.activeKey = this.navList[i].currentKey;
                this.$emit('onclick', this.activeKey);
            },            
        },
        watch: {
            value (val) {
                this.activeKey = val;
            },
            activeKey () {
                this.updateStatus();
            }
        },
        mounted () {
            let tabs = this.getTabs(),
                realIndex = 0;
            tabs.forEach((pane, index) => {
                pane.realIndex = pane.index || realIndex++;
                this.navList.push({
                    label: pane.label,
                    currentKey: pane.realIndex
                });
            });
            this.updateStatus();
        }
    };
</script>
<style lang="scss">
@import "./rTabs.scss";
</style>
