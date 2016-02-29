/**
 * Created by li.shengze on 2016/2/24.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*var EVENTS = function () {
    this.NewUserCome =   "NewUserCome",
    this.NewUserReady =  "NewUserReady",
    this.NewUserConnectComplete = "NewUserConnectComplete",
    
	this.New = "New",
    this.Release = "Release",
    this.Init =  "Init",
    this.Join =  "Join",
	this.ReqUserLogin = "ReqUserLogin",
    this.GetTradingDay =  "GetTradingDay",
    this.RegisterFront =  "RegisterFront",
    this.RegisterSpi =  "RegisterSpi",
    this.SubscribeMarketDataTopic =  "SubscribeMarketDataTopic",
    this.SubscribePartAccount =  "SubscribePartAccount",

*/});
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
        funcName!=="ReqQryNetPartylinkMonthlyRentTopic"&&fileData!="ReqQryClientLoginTopic"&&
        funcName!=="ReqQryClientLoginTopic"&&funcName!=="ReqQryCPUUsageTopic"&&
        funcName!=="ReqQryMemoryUsageTopic"&&funcName!=="ReqQryDiskUsageTopic"&&
        funcName!=="ReqQryKeyFileInfoTopic"&&funcName!=="ReqQryHostMonitorCfgTopic"&&
        funcName!=="ReqQryAppMonitorCfgTopic"
        ) {
            fileData += tabSpace[1] + "this."+ funcName + " = " + "\"" + funcName + "\",\n";
            fileData += tabSpace[1] + "this."+ funcName + "Failed = " + "\"" + funcName + "Failed\",\n";
        }
        
}

fileData += "\n";
fileData += hereDoc(function () {
/*     this.FrontConnected = "FrontConnected CallbackData",
    this.FrontDisConnected = "FrontDisConnected CallbackData",
    this.HeartBeatWarning =  "HeartBeatWarning CallbackData",
    
*/});
for(var i=beforeRspQryTopCpuInfoTopic;i<AfterRtnNetNonPartyLinkInfoTopic;i++){
    var funcName = jsonContent.FTD.packages[0].package[i].$.name;
    var funcType = funcName.substring(0,3);
    if(funcType === "Rsp" || funcType === "Rtn"){
        fileData += tabSpace[1] + "this."+ funcName+" = " + "\"" + funcName + " CallbackData\",\n";
    }
}

fileData += tabSpace[1] + "this.END = \"END\"\n";
fileData += "};\n\n";
fileData += "exports.EVENTS = EVENTS;\n"

var pathName = '../new file/';
var fileName = 'events.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});