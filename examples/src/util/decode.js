var base_code = '';
var jsdecoder;
var jscolorizer;
var code = '';
function decode(codeString)
{
    code = '';
    base_code = '';
    jsdecoder = new JsDecoder();
    jscolorizer = new JsColorizer();

    jsdecoder.s = codeString;

    code = jsdecoder.decode();
    base_code = code;

    // code = code.replace(/&/g, "&amp;");
    // code = code.replace(/</g, "&lt;");
    // code = code.replace(/>/g, "&gt;");
    jscolorizer.s = code;
    code = jscolorizer.colorize();

    code = new String(code);
    code = code.replace(/(\r\n|\r|\n)/g, "<br>\n");
    code = code.replace(/<font\s+/gi, '<font@@@@@');
    code = code.replace(/( |\t)/g, '&nbsp;');
    code = code.replace(/<font@@@@@/gi, '<font ');

    code = code.replace(/\n$/, '');

    var count = 0;
    var pos = code.indexOf("\n");
    while (pos != -1) {
       count++;
       pos = code.indexOf("\n", pos+1);
    }
    count++;

    var pad = new String(count).length;
    var lines = '';

    for (var i = 0; i < count; i++) {
        var p = pad - new String(i+1).length;
        var no = new String(i+1);
        for (var k = 0; k < p; k++) { no = '&nbsp;'+no; }
        no += '&nbsp;';
        // lines += '<div style="background: #fff; color: #666;">'+no+'</div>';
        lines += no + "<br>";
    }

    return {
        lines: lines,
        code: code
    }
}

module.exports = decode;