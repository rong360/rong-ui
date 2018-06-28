var express = require("express");
var router = express.Router();
var path = require("path");

// var util = require('util');
// var multiparty = require("multiparty");

router.post("/fileUpload",function(req,res,next){
	var data = '';

	// var form = new multiparty.Form();
	// //设置编辑
 //    form.encoding = 'utf-8';
 //    //设置文件存储路径
 //    form.uploadDir = "uploads/images/";
 //    //设置单文件大小限制
 //    //form.maxFields = 1000;  设置所以文件的大小总和
    
 //    form.parse(req, function(err, fields, files) {
 //      console.log(files.originalFilename);
 //      console.log(files.path);
 //      res.writeHead(200, {'content-type': 'text/plain'});
 //      res.write('received upload:\n\n');
 //      res.end(util.inspect({fields: fields, files: files}));
 //    });

 //    return;

	res.json({
		error: 0,
		msg: "upload success",
		data: {
			img_url: "https://static.rong360.com/upload/png/27/6b/276bbf98a20bd3ea9eb36232fd03b81c.png"
		}
	})
})

router.post("/sendMvcode", function(req,res,next){
	res.json({
		error: 0,
		msg: "send mvcode successfully!",
		data:{
			vcode: "123456"
		}
	})
})

module.exports = router;