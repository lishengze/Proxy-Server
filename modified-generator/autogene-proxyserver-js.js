/**
 * Created by li.shengze on 2016/2/24.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*var fs               = require('fs');
var spi              = require("./communication.js");
var addon            = require("./build/Release/addon");
var EVENTS           = require('./events.json');
var user             = [];
var userCount        = 0;
var isHttps          = false;

if (true === isHttps) {
	var options = {
		key:  fs.readFileSync("9249652-www.sfit.shfe.com.cn.key"),
		cert: fs.readFileSync("9249652-www.sfit.shfe.com.cn.cert"),
	};
	var app  = require('https').createServer(options,onRequest); 
	var io   = require('socket.io')(app)
	var port = 8000;
	app.listen(port);	
} else {
	var app  = require('http').createServer(onRequest); 
	var io   = require('socket.io')(app);
	var port = 80;
	app.listen(port);
}

function onRequest(request, response){
	try {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello Socket.io');
			response.end();
	}catch (err) {
			console.error(err);
	}
}

var OutputMessage = function (info) {
    console.log(info);
}

var realTimeSystemPath  = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";

io.on('connection', function(rootSocket) {	

	rootSocket.on(EVENTS.NewUserCome, function(userInfo) {				
		for (var i = 0; i < userCount; ++i)
		{
			if (user[i].userInfo.UserID === userInfo.UserID) {				
				OutputMessage(userInfo.UserID + ' is already in.');
				return;
			}			
		}
        
        var curUserIndex = userCount;
        userCount++
		user[curUserIndex] = {};         
        user[curUserIndex].userInfo = userInfo;
        user[curUserIndex].socket = io.of('/' + userInfo.UserID);
        
        user[curUserIndex].socket.on ('connection', function (curSocket) {
                            
            user[curUserIndex].userApi = new addon.FtdcSysUserApi_Wrapper();        
            user[curUserIndex].Spi = new spi.Spi();
            user[curUserIndex].RequestID = 1;
            user[curUserIndex].Spi.user = user[curUserIndex];
                       
            curSocket.emit(EVENTS.NewUserConnectComplete, user[curUserIndex]);
            
            curSocket.on(EVENTS.RegisterFront, function(user) {
				OutputMessage('Connect Front!');
                user.userApi.RegisterFront(realTimeSystemPath);   
                user.userApi.RegisterSpi(user.Spi);
                user.userApi.Init();   				
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
            fileData += tabSpace[3] + "curSocket.on(EVENTS." + funcName + ", function(data) {\n"
                      + tabSpace[4] + "var flag = data.user.userApi." + funcName + "(data.reqField, data.user.RequestID++);\n"
                      + tabSpace[4] + "if ( -1 === flag) {\n"
                      + tabSpace[5] + "curSocket.emit(EVENTS."+ funcName +"Failed, flag);\n"
                      + tabSpace[4] + "}\n"
                      + tabSpace[3] + "});\n\n";  
        }
        
}

fileData += hereDoc(function () {
/*               									
	    }); // rootSocket.on('new user', function(userInfo) end!
        
        rootSocket.emit(EVENTS.NewUserReady, userInfo);
        	
    }); //rootSocket.on(EVENTS.NewUserCome);     	
}); // io.on('connection', function(rootSocket)) end!

*/    
});

var pathName = '../new file/';
var fileName = 'proxy-server.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});