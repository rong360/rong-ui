/* xmlhttprequest 参数说明
options =  {
    url:'', //请求地址
    method:'', //方法
    datatype: "",//预期服务器返回的数据类型。如果不指定，默认为json,jsonp时为跨域请求
    jsonp: "", //跨域请求时的回调函数
    data:'', //参数
    success:'', //成功回调
    error: '',//错误回调
    async:''//是否异步请求
}
*/

function ajax(params) {
    params = params || {};
    params.data = params.data || {};
    var json = (params.datatype=='jsonp') ? jsonp(params) : json(params);


    //非跨域请求
    function json(options){
        //默认参数
        options.url = options.url || '',
        options.method = options.method.toLowerCase() || 'get',
        options.data = options.data || '',
        options.success = options.success || '',
        options.error = options.error || '',
        options.async = options.async || true;
        //get请求-拼接url
        if(options.method == 'get'){
            if(typeof options.data == 'object'){
                var query = [];
                for (var k in options.data){
                    query.push(k+'='+options.data[k]);
                }
                options.data = query.join('&');
            }
            options.url += (options.url.indexOf('?' == -1) ? '?' : '') + options.data;
        }
        //post请求-转换字符串
        if(options.method == 'post'){
            if(typeof options.data == 'object'){
                var arrs = [];
                for (var k in options.data){
                    arrs.push(k+'='+options.data[k]);
                }
                options.data = arrs.join('&');
            }
        }
        //创建发送请求
        var xhr = window.XMLHttpRequest ?  new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); //兼容ie
        console.log(options.url);
        xhr.open(options.method,options.url,options.async);
        if(options.method == 'post'){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(options.data);
        }else{
            xhr.send(null);
        }
        //异步请求
        if(options.async == true){
            xhr.onreadystatechange = function(){
              if(xhr.readyState == 4){
                  callcall();
              }
            }
        }
        // xhr.abort(); // 取消异步请求
        //同步请求
        if(options.async == false){
            callcall();
        }
        //返回状态判断
        function callcall(){
            if(xhr.status == 200){
                options.success && typeof options.success=='function' && options.success(JSON.parse(xhr.responseText));
            }else{
                options.error && typeof options.error=='function' && options.error({
                    status: xhr.status,
                    msg: xhr.statusText
                });
            }
        }

    }

   
    // jsonp请求  
    function jsonp(params) {
        //创建script标签并加入到页面中  
        var callbackName = params.jsonp;
        var head = document.getElementsByTagName('head')[0];
        // 设置传递给后台的回调参数名  
        params.data['callback'] = callbackName;
        var data = formatParams(params.data);
        var script = document.createElement('script');
        head.appendChild(script);
        //创建jsonp回调函数  
        window[callbackName] = function (json) {
            head.removeChild(script);
            clearTimeout(script.timer);
            window[callbackName] = null;
            params.success && params.success(json);
        };
        //发送请求  
        script.src = params.url + '?' + data;
        //为了得知此次请求是否成功，设置超时处理  
        if (params.time) {
            script.timer = setTimeout(function () {
                window[callbackName] = null;
                head.removeChild(script);
                params.error && params.error({
                    message: '超时'
                });
            }, time);
        }
    };
    //格式化参数  
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        };
        // 添加一个随机数，防止缓存  
        arr.push('v=' + random());
        return arr.join('&');
    }
    // 获取随机数  
    function random() {
        return Math.floor(Math.random() * 10000 + 500);
    }
}
export { ajax };
