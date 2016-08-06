/**
 * Created by li.shengze on 2016/2/24.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*var events    = require("./events.js");
var EVENTS    = new events.EVENTS();

var Spi = function(){
    
    this.user = {};    
    
    this.OnFrontConnected = function () {
        this.user.socket.emit(EVENTS.FrontConnected, {});        
    }
    
    this.OnFrontDisConnected = function (nReason) {
        this.user.socket.emit(EVENTS.FrontDisConnected, nReason);    
    }
    
    this.OnHeartBeatWarning = function (nTimeLapse) {
        this.user.socket.emit(EVENTS.HeartBeatWarning, nTimeLapse);      
    }         
          
*/});
var jsonContent=require("./package.json");

var tabSpace = ["","    ", "        ", "            ", "                ","                    "];
var beforeRspQryTopCpuInfoTopic=0;
while(jsonContent.FTD.packages[0].package[beforeRspQryTopCpuInfoTopic].$.name!=="RspQryTopCpuInfoTopic"){
    beforeRspQryTopCpuInfoTopic++;
}
var AfterRtnNetNonPartyLinkInfoTopic=0;
while(jsonContent.FTD.packages[0].package[AfterRtnNetNonPartyLinkInfoTopic].$.name!=="RtnNetNonPartyLinkInfoTopic"){
    AfterRtnNetNonPartyLinkInfoTopic++;
}
AfterRtnNetNonPartyLinkInfoTopic++;

for(var i=beforeRspQryTopCpuInfoTopic;i<AfterRtnNetNonPartyLinkInfoTopic;i++){
    var funcName = jsonContent.FTD.packages[0].package[i].$.name;
	var fieldName = jsonContent.FTD.packages[0].package[i].field[0].$.name;
    var funcType = funcName.substring(0,3);
    if(funcType === "Rsp" || funcType === "Rtn"){
        var pValueName = "p" + fieldName;
		        
        if (funcType === "Rsp") {

            fileData += tabSpace[1] + "this.On" + funcName + " = function (" + pValueName  + ", pRspInfo, nRequestID, bIsLast) {\n";
            fileData += tabSpace[2] + "var callbackData = {};\n"
                      + tabSpace[2] + "callbackData." + pValueName + " = " + pValueName + ";\n"
                      + tabSpace[2] + "callbackData.pRspInfo = pRspInfo;\n"
                      + tabSpace[2] + "callbackData.nRequestID = nRequestID;\n"
                      + tabSpace[2] + "callbackData.bIsLast = bIsLast;\n"
                      + tabSpace[2] + "this.user.socket.emit(" + "EVENTS." + funcName + ", " + "callbackData);\n"                         
        } else {
            fileData += tabSpace[1] + "this.On" + funcName + " = function (" + pValueName + "){ \n" 
                      + tabSpace[2] + "this.user.socket.emit(" + "EVENTS." + funcName + ", " + pValueName + ");\n"
        }     
		
        fileData += tabSpace[1] + "}\n\n";
    }
}
fileData += tabSpace[0] + "}\n\n";
fileData += "exports.Spi = Spi;\n";

var pathName = '../new file/';
var fileName = 'communication.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});