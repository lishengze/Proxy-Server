/**
 * Created by li.shengze on 2016/2/24.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*// Created by li.shengze on 2016/2/24.

var EVENTS           = new events();
var isHttps          = false;
if (true === isHttps) {
//	var ipAddress  = 'https://192.168.10.11';
	var ipAddress  = 'https://localhost'
//	var ipAddress  = 'https://172.1.128.169';
	var port       = 8000;
	var url        = ipAddress + ':' + port.toString();
	var rootSocket = io.connect(url,{secure:true});	
} else {
	var localUrl         = 'http://localhost';
    var serverUrl        = 'http://172.1.128.169';
    var curUrl           = localUrl;
	var rootSocket       = io.connect(curUrl);
}

var userSocket;
var userServer;
var userInfo;

rootSocket.on('connect_error', function(errorObj){
    
});

rootSocket.on('disconnect', function(){
    
});

var addNewUser = function (userinfo) {
    userInfo = userinfo;
    rootSocket.emit(EVENTS.NewUserCome, userinfo);
}

var TestAddNewUser = function () {
    var userinfo = {};
    userinfo           = new CShfeFtdcReqQrySysUserLoginField();
    userinfo.UserID    = "admin";
    userinfo.Password  = "admin";
    userinfo.VersionID = "2.0.0.0";  
    
    addNewUser(userinfo);  
}

rootSocket.on("user reconnected", function(UserID) {
   OutputMessage("Client: " + UserID + " has already logged!"); 
});


rootSocket.on(EVENTS.NewUserReady, function(data){
    
    OutputMessage("Client: new user " + userInfo.UserID + " ready!");     
									
	userSocket = io.connect(curUrl + '/' + userInfo.UserID); 
    
    userSocket.on('connect_error', function(errorObj){
    
    });
    
    userSocket.on('disconnect', function(){
        
    });    

    userSocket.on(EVENTS.NewUserConnectComplete, function(data){
       OutputMessage("Client: " + userInfo.UserID + "  connect completed!");  	
       userSocket.emit(EVENTS.RegisterFront, {});																					
	});	
				
    userSocket.on("Test Front", function(data){        
        var outputStr = "\n+++++++++  Communication FrontConnected! ++++++++\n";
    	OutputMessage(outputStr);                
    });                
                			
	userSocket.on(EVENTS.FrontConnected, function(callbackData){
        var reqField = userInfo;
	    userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, reqField);																								
	});	
    
    userSocket.on(EVENTS.FrontDisConnected, function(callbackData){	
																											
	});	
    
    userSocket.on(EVENTS.HeartBeatWarning, function(callbackData){	
																											
	});	
    
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
    var funcType = funcName.substring(0,3);
    if(funcType === "Rsp" || funcType === "Rtn"){
        var eventMessageName = "EVENTS." + funcName;
        fileData += tabSpace[1] + "userSocket.on(" + eventMessageName + ", function(callbackData){	\n\n";
        fileData += tabSpace[1] + "});\n\n";
    }
}

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
            var eventMessageName = "EVENTS." + funcName + "Failed";
            fileData += tabSpace[1] + "userSocket.on(" + eventMessageName + ", function(flag){	\n\n";
            fileData += tabSpace[1] + "});\n\n";
        }        
}

fileData+="});\n";

fileData += hereDoc(function () {
/*
var addNewUser = function (userinfo) {
    userInfo = userinfo;
    rootSocket.emit(EVENTS.NewUserCome, userinfo);
}

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
            var eventMessageName = "EVENTS." + funcName;
            fileData += "var " + funcName + " = function (reqField) {\n"
                      + tabSpace[1] + "userSocket.emit("+ eventMessageName +", reqField);\n"
                      + "}\n\n";
        }        
}

fileData += "\n";

var pathName = '../new file/';
var fileName = 'client.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});