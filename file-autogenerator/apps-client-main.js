// 创建者 李晟泽， 2016.6.30.
// 用来生成client-main.js
// 主要自动生成的部分是，client-main 中对各种请求消息监听的定义。

var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}

var jsonContent = require("./package.json");

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

var fileData = hereDoc(function () {
/*var EventEmitter = require ('events').EventEmitter;
var fork         = require ('child_process').fork;
var path         = require ('path');
var childprocess = [];

var ClientMain = function () {
   this.emitter = new EventEmitter;
   this.childFilePath = path.join( __dirname, 'client-child-complete.js');
   this.childProcess = fork (this.childFilePath, ['Hello client-child!']);
   childprocess[this.childProcess.pid] = this.childProcess;

   this.RestartFunc = (function(_this){
     return function() {
       _this.childProcess = fork (_this.childFilePath, ['Hello client-child!']);
       delete childprocess[_this.childProcess.pid];
       childprocess[_this.childProcess.pid] = _this.childProcess;
     };
   }(this));

   this.childProcess.on ('message', (function(_this) {
     return function(data) {
       if (data.callbackData.hasOwnProperty("nRequestID")){
          data.message = data.message + data.callbackData.nRequestID;
      }
      _this.emitter.emit(data.message, data.callbackData.);
    };
   })(this));

   this.childProcess.on('exit',  (function(_this) {
     return function() {
       _this.emitter.emit('childprocess exit', {});
     };
   })(this));

   // 手动添加的请求事件。
   this.emitter.on(EVENTS.StartConnectServer,  (function(_this) {
     return function(reqData) {
       var data={};
       data.event = EVENTS.StartConnectServer;
       data.reqField = reqData;
       console.log (data)
       _this.childProcess.send(data);
     };
   })(this));

   this.emitter.on(EVENTS.NewUserCome,  (function(_this) {
     return function(reqData) {
       var data={};
       data.event = EVENTS.NewUserCome;
       data.reqField = reqData;
       console.log (data)
       _this.childProcess.send(data);
     };
   })(this));

*/});

for(var i=beforeRspQryTopCpuInfoTopic;i<AfterRtnNetNonPartyLinkInfoTopic;i++) {
    var funcName  = jsonContent.FTD.packages[0].package[i].$.name;
    var funcType  = funcName.substring(0,3);
    if (funcType === "Req" &&
        funcName.substring(funcName.length - 5, funcName.length) == "Topic" &&
        funcName!=="ReqQryNetMemberSDHLineInfoTopic"&&
        funcName!=="ReqQryVMInfoTopic"&&
        funcName!=="ReqQryTradeDayChangeTopic"&&
        funcName!=="ReqQryPropertyInfoTopic"&&funcName!=="ReqQryMemPoolInfoTopic"&&
        funcName!=="ReqQryFileContentInfoTopic"&&
        funcName!=="ReqQryConnectionInfoTopic"&& funcName!=="ReqQryConnectorInfoTopic"&&
        funcName!=="ReqQryNetFuncAreaTopic"&& funcName!=="ReqQryNetMonitorCommandTypeTopic"&&
        funcName!=="ReqQryNetMonitorActionGroupTopic"&& funcName!=="ReqQryNetEventExprTopic"&&
        funcName!=="ReqQryNetEventTypeTopic"&& funcName!=="ReqQryNetSubEventTypeTopic"&&
        funcName!=="ReqQryNetEventLevelTopic"&& funcName!=="ReqSysServerExitTopic"&&
        funcName!=="ReqQryNetMonitorTaskInstAttrsTopic"&& funcName!=="ReqQryNetBaseLineTaskTopic"&&
        funcName!=="ReqQryNetMemberSDHLineInfoTopic"&& funcName!=="ReqQryNetDDNLinkInfoTopic"&&
        funcName!=="ReqQryNetPseudMemberLinkInfoTopic"&& funcName!=="ReqQryOuterDeviceInfTopic"&&
        funcName!=="ReqQrySysInternalTopologyTopic"&& funcName!=="ReqQryMemberLinkCostTopic"&&
        funcName!=="ReqQryNetPartylinkMonthlyRentTopic"&&funcName!="ReqQryClientLoginTopic"&&
        funcName!=="ReqQryClientLoginTopic"&&funcName!=="ReqQryCPUUsageTopic"&&
        funcName!=="ReqQryMemoryUsageTopic"&&funcName!=="ReqQryDiskUsageTopic"&&
        funcName!=="ReqQryKeyFileInfoTopic"&&funcName!=="ReqQryHostMonitorCfgTopic"&&
        funcName!=="ReqQryAppMonitorCfgTopic"
        ) {
            fileData += tabSpace[1] + "this.emitter.on(EVENTS." + funcName + ",  (function(_this) {" + "\n"
                      + tabSpace[2] + "return function(reqData) { " + "\n"
                      + tabSpace[3] + "var data={};" + "\n"
                      + tabSpace[3] + "data.event = EVENTS." + funcName+ ";" +"\n"
                      + tabSpace[3] + "data.reqField = reqData;" + "\n"
                      + tabSpace[3] + "_this.childProcess.send(data);" + "\n"
                      + tabSpace[2] + "};" + "\n"
                      + tabSpace[1] + "})(this));" + "\n\n";
        }
}

fileData += hereDoc(function () {/*};

var ExitFunc = function() {
  for (var pid in childprocess) {
    childprocess[pid].kill();
  }
};

process.on('uncaughtException', function(){
  ExitFunc();
});

process.on('exit', function(){
  ExitFunc();
});

module.exports = new ClientMain();

*/});

fileData += "\n\n";
var pathName = '../new file/';
var fileName = 'client-main.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});
