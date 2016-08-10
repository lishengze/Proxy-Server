 //test.js
var fs = require('fs');
var xml2js = require('xml2js');

function loadXMLDoc(filePath){
	var json;
	try {
		var fileData = fs.readFileSync(filePath,'utf8');
		var parser = new xml2js.Parser();
		parser.parseString(fileData.substring(0, fileData.length), function(err, result){
			json = JSON.stringify(result);
		});
		return json;      //返回生成的JSON
	} catch (ex) {
		console.log(ex);
		}
}

var pathName = '../new file/';
var fileName = 'stable-apidata.json';
var xmlPath  = '../FTD.xml';
var fileData = loadXMLDoc(xmlPath);//后面可直接调用rawJSON

fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});