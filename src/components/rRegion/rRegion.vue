<template >
  <div class="r-region">
      <div @click="getProvince" class="region-label">{{text}}</div>
  </div>
</template>
<script>
import { ajax } from '../../util/ajax';
import Picker from 'better-picker'
export default {
  name: 'rRegion',
  data: function() {
    return {
      picker:null,
      provinces: [Object],
      cur_province: Object,
      citys: [Object],
      cur_city: Object,
      areas: [Object],
      cur_area: Object,
      /* 默认选中的地区 */
      selectedIndex: [0, 0, 0], 
      /* 已选选项 */
      checked : [0, 0, 0] 
    }
  },
  props:{
    text:{
      type: String,
      default: "选择城市"
    },
    provinceUrl:{
      type: String,
      default: "https://m.rong360.com/loanlocation/province"
    },
    cityUrl:{
      type: String,
      default: "https://m.rong360.com/loanlocation/area?dataCode={datacode}&type=1"
    },
    countryUrl:{
      type: String,
      default: "https://m.rong360.com/loanlocation/area?dataCode={datacode}&type=2"
    },
    jsonp: {//是否为跨域请求
      type: Boolean,
      default: false
    }

  },
  methods: {
    /* 构建picker每列数据 */
    creatList(obj, list) {
      for (var i = 0; i < obj.length; i++) {
        var temp = new Object();
        temp.text = obj[i].data_name;
        temp.value = i;
        temp.data_code = obj[i].data_code;
        list.push(temp);
      }      
    },

    /* 绑定picker事件 */
    event() {
      self = this;
      self.picker.on('picker.change', function (index, selectedIndex) {
        if (index === 0){
          self.firstChange(selectedIndex);
        } else if (index === 1) {
          self.secondChange(selectedIndex);
        }
      });
      self.picker.on('picker.select',function(selectVal,selectedIndex){
        let text = self.provinces[selectedIndex[0]].text;
        // bug: 某个省份变化时，后面的城市还是上个城市的！！！！滑动出现的问题fix
        if(selectVal[1] == null || self.cur_province!=self.provinces[selectedIndex[0]]) { //省滑动时，点击了“确定”按钮
          self.firstChange(selectedIndex[0],function(){
            text += self.citys[0].text + self.areas[0].text;
            self.$emit("confirm",text);
          }); 
        }else if(self.cur_city.text != self.citys[selectedIndex[1]].text ) { //市滑动时，点击了“确定”按钮
          self.secondChange(selectedIndex[1],function(){
            text += self.citys[selectedIndex[1]].text + self.areas[0].text;
            self.$emit("confirm",text);
          });
        }else{
          text += self.citys[selectedIndex[1]].text + self.areas[selectedIndex[2]].text;
          self.$emit("confirm",text);
        }
      });
      self.picker.on('picker.valuechange',function(selectVal,selectedIndex){
        self.$emit("valuechange",selectVal,selectedIndex);
      })
    },
    /*省份变化*/
    firstChange(idx,cb) {
      self.citys = [];
      self.areas = [];
      self.cur_province = self.provinces[idx];
      self.getCity(self.cur_province.data_code,cb);
    },
    /*城市变化*/
    secondChange(idx,cb) {
      self.areas = [];
      self.cur_city = self.citys[idx];
      self.getArea(self.cur_city.data_code,cb);     
    },

    /* 获取当前省份 */
    getProvince() {
      var self = this;
      this.curfoucs = 'province';
      if(self.picker){//已有城市列表选择，就不用新建了，直接展示
        self.picker.show();
        return;
      }
      let options = {
        url: self.provinceUrl,  // 请求地址
        datatype: "jsonp",
        jsonp: 'jsonpCallback', // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
        data: { 'b': '异步请求' },  // 传输数据
        success: function(res) {  // 请求成功的回调函数
          self.creatList(res.data, self.provinces);
          // console.log('self.provinces', self.provinces);
          self.picker = new Picker({
            data: [self.provinces,self.citys,self.areas],
            selectedIndex: [0,0,0],
            title: ''
          });

          self.picker.show();
          self.event(self.picker);

        },
        error: function(error) { }  // 请求失败的回调函数
      }
      if(!self.jsonp){
        delete options.datatype;
        delete options.jsonp;
        delete options.data;
      }
      ajax(options);
    },

    /* 获取当前省份的城市 */
    getCity(data_code,cb) {
      var self = this;
      let options = {
        url: self.cityUrl.replace(/{datacode}/gi,data_code),  // 请求地址
        datatype: "jsonp",
        jsonp: 'jsonpCallback', // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
        data: { 'b': '异步请求' },  // 传输数据
        success: function(res) {  // 请求成功的回调函数
          self.creatList(res.data, self.citys);
          
          if (self.citys.length > 0) {
            self.cur_city = self.$data.citys[0];
            self.picker.refillColumn(1, self.citys);
            self.picker.scrollColumn(1, 0);
            self.getArea(self.cur_city.data_code,cb);
          }  else {
            self.cur_city = [{text: '', value: 0}];
            self.cur_area = [{text: '', value: 0}];
            self.checked[1] = 0;
            self.checked[2] = 0;
            cb && typeof cb == "function" && cb();
          }
          
        },
        error: function(error) {}  // 请求失败的回调函数
      }
      if(!self.jsonp){
        delete options.datatype;
        delete options.jsonp;
        delete options.data;
      }
      ajax(options);
    },
    
    /* 获取当前城市的区域 */
    getArea(data_code,cb) {
      var self = this;
      this.curfoucs = 'area';
      let options = {
        url: self.countryUrl.replace(/{datacode}/gi,data_code),  // 请求地址
        datatype: "jsonp",
        jsonp: 'jsonpCallback', // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
        data: { 'b': '异步请求' },  // 传输数据
        success: function(res) {  // 请求成功的回调函数
          // console.log("res",res.data);
          if (res.data.length > 0) {
            self.creatList(res.data, self.areas);
            // console.log("self.areas",self.areas);
            self.picker.refillColumn(2, self.areas);
            self.picker.scrollColumn(2, 0);
          } else {
            self.areas = [{text: '', value: 0}];
            checked[2] = 0;
          }
          cb && typeof cb == "function" && cb();
        },
        error: function(error) { }  // 请求失败的回调函数
      }
      if(!self.jsonp){
        delete options.datatype;
        delete options.jsonp;
        delete options.data;
      }
      ajax(options);
    }
  },
  beforeDestroy(){//隐藏picker
    self.picker && self.picker.hide();
  }
};

</script>
<style lang='scss'>
@import "./rRegion.scss";
</style>