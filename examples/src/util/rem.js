(function() {
    var rem, dpr, time, doc = window.document,
    docEl = doc.documentElement,
    viewport = doc.querySelector('meta[name="viewport"]'),
    zoomScale,
    zoomScaleNum;
    if (viewport){            
        zoomScale = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if(zoomScale){
        	zoomScaleNum = parseFloat(zoomScale[2]);
        	dpr = parseInt(1 / zoomScaleNum);
        }
    }
    if (!dpr && !zoomScaleNum) {
        var os = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi)),
        dpr = window.devicePixelRatio;
        dpr = os ? dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1 : 1;
        zoomScaleNum = 1 / dpr;
    }
    window.addEventListener("resize",
        function() {
            clearTimeout(time);
            time = setTimeout(changeRem, 300);
        },false);
	//改变基准rem
    function changeRem(){
        var docWidth = docEl.getBoundingClientRect().width;
        if(docWidth / dpr > 540){
        	docWidth = 540 * dpr;
        }
        //rem字号以320下的16px为基线进行等比缩放
        rem = docWidth/320 * 16;
        docEl.style.fontSize = rem + "px";
    }
    changeRem();
})();