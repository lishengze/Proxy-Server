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
//var addon            = require("./addon");
var events           = require("./events.js");
var EVENTS           = new events.EVENTS();
var SysUserApiStruct = require ('./SysUserApiStruct.js');
var toolFunc         = require("./tool-function.js");
var OutputMessage    = toolFunc.OutputMessage;
var getSubString     = toolFunc.getSubString;

var userConnection   = [];
var userSocket       = [];
var userLoginedIn    = [];
var userSocketioId   = [];
var userCount        = 0;
var isHttps          = true;
var idNumber         = 10;

if (true === isHttps) {
	var options = {
		key:  fs.readFileSync("sfit.key"),
		cert: fs.readFileSync("sfit.cert"),
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

var getIdArray = function(idNumber) {
	var array = new Array(idNumber);
	for (var i = 0; i < idNumber; ++i) {
		array[i] = i;
	}
	return array;
}

var showCurProcessThreads = function () {
    var path = require('path');
    var spawn = require('child_process').spawn;
    var dir = path.join('/proc', process.pid.toString(), 'task');
    var ls = spawn('ls', [dir]);
    console.log('process.pid: ' + process.pid);
    ls.stdout.on('data', function(data){
        console.log('Time:'+Date.now()+'\nThreads: \n'+ data);
    });
}

// showCurProcessThreads();

var realTimeSystemPath  = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";

console.log("Before rootSocket!");
console.log('process.pid: ' + process.pid);

io.on('connection', function(rootSocket) {
    var spawn = require('child_process').spawn('mkdir', ['usr']);

    OutputMessage("\nProxy-Server: root connect complete!");
    //showCurProcessThreads();

    rootSocket.on('disconnect', function(data) {
    	// showCurProcessThreads();
			console.log('Proxy-Server: rootSocket disconnect!');
		});

		rootSocket.on('Test-Connect', function(){
			console.log('Proxy-Server: Test-Connect');
		})

		rootSocket.on(EVENTS.SocketIONewUserCome, function(userInfo) {

				if (undefined === userSocketioId[userInfo.UserID]) {
					userSocketioId[userInfo.UserID] = getIdArray(idNumber);
				}
				console.log (userSocketioId[userInfo.UserID]);

				var curNumberId = userSocketioId[userInfo.UserID].shift();
				OutputMessage("Proxy-Server: user: " + userInfo.UserID + " , numberid:  " + curNumberId);

				CurUserSocketioId = userInfo.UserID + curNumberId;
				userLoginedIn[CurUserSocketioId] = {}
				userLoginedIn[CurUserSocketioId].numbId = curNumberId;
				userLoginedIn[CurUserSocketioId].userId = userInfo.UserID;

        if (undefined === userConnection[CurUserSocketioId])
        {
            console.log(CurUserSocketioId + ' first time!');

            userConnection[CurUserSocketioId] = {};
            userConnection[CurUserSocketioId].socket = io.of('/' + CurUserSocketioId);
            userConnection[CurUserSocketioId].userInfo = userInfo;
            var userWorkDirName = 'usr/' + CurUserSocketioId;
            var spawn = require('child_process').spawn('mkdir', [userWorkDirName]);

            userConnection[CurUserSocketioId].socket.on ('connection', function (curSocket) {

                var currUserID = curSocket.nsp.name.slice(1);
                var userWorkDirName = 'usr/' + currUserID + '/';

                curSocket.on('disconnect', function(data) {
  								originalUserId = userLoginedIn[currUserID].userId;
  								userSocketioId[originalUserId].push(userLoginedIn[currUserID].numbId);
                  // userSocket[currUserID] = {};
    		          OutputMessage("Proxy-Server: user " + currUserID + " disconnected!");
    	          });

                OutputMessage("Proxy-Server: new user " + currUserID + " connect completed!");

                // userSocket[currUserID]           = {};
                // userSocket[currUserID].socket    = curSocket;
                // userSocket[currUserID].userApi   = new addon.FtdcSysUserApi_Wrapper(userWorkDirName);
                // userSocket[currUserID].Spi       = new spi.Spi();
                // userSocket[currUserID].Spi.user  = userSocket[currUserID];

                curSocket.emit(EVENTS.SocketIONewUserConnectComplete, {});

                curSocket.on(EVENTS.RegisterFront, function() {
    								OutputMessage('\n------  Proxy-Server: Connect Front!-------\n');
                    // userSocket[currUserID].userApi.RegisterFront(realTimeSystemPath);
                    // userSocket[currUserID].userApi.RegisterSpi(userSocket[currUserID].Spi);
                    // userSocket[currUserID].userApi.Init();
                    //curSocket.emit("Test Front", 'succeed!');
                    curSocket.emit(EVENTS.FrontConnected, "FrontConnected!");
    			      });
*/});
var jsonContent=require("./package.json");

var tabSpace = ["","    ", "        ", "            ", "                ","                    ","                      "];
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
    var reqFuncName = jsonContent.FTD.packages[0].package[i].$.name;
    var kernelFuncName = reqFuncName.substring(6, reqFuncName.length - 5);
    var rspDataName = "CShfeFtdcRspQry" + kernelFuncName + "Field";
    var rspEventName ="RspQry" + kernelFuncName + "Topic";
    var funcType  = reqFuncName.substring(0,3);
    if (funcType === "Req" &&
        reqFuncName.substring(reqFuncName.length - 5, reqFuncName.length) == "Topic" &&
        reqFuncName!=="ReqQryNetMemberSDHLineInfoTopic"&&
        reqFuncName!=="ReqQryVMInfoTopic"&&
        reqFuncName!=="ReqQryTradeDayChangeTopic"&&
        reqFuncName!=="ReqQryPropertyInfoTopic"&&reqFuncName!=="ReqQryMemPoolInfoTopic"&&
        reqFuncName!=="ReqQryFileContentInfoTopic"&&
        reqFuncName!=="ReqQryConnectionInfoTopic"&& reqFuncName!=="ReqQryConnectorInfoTopic"&&
        reqFuncName!=="ReqQryNetFuncAreaTopic"&& reqFuncName!=="ReqQryNetMonitorCommandTypeTopic"&&
        reqFuncName!=="ReqQryNetMonitorActionGroupTopic"&& reqFuncName!=="ReqQryNetEventExprTopic"&&
        reqFuncName!=="ReqQryNetEventTypeTopic"&& reqFuncName!=="ReqQryNetSubEventTypeTopic"&&
        reqFuncName!=="ReqQryNetEventLevelTopic"&& reqFuncName!=="ReqSysServerExitTopic"&&
        reqFuncName!=="ReqQryNetMonitorTaskInstAttrsTopic"&& reqFuncName!=="ReqQryNetBaseLineTaskTopic"&&
        reqFuncName!=="ReqQryNetMemberSDHLineInfoTopic"&& reqFuncName!=="ReqQryNetDDNLinkInfoTopic"&&
        reqFuncName!=="ReqQryNetPseudMemberLinkInfoTopic"&& reqFuncName!=="ReqQryOuterDeviceInfTopic"&&
        reqFuncName!=="ReqQrySysInternalTopologyTopic"&& reqFuncName!=="ReqQryMemberLinkCostTopic"&&
        reqFuncName!=="ReqQryNetPartylinkMonthlyRentTopic"&&fileData!="ReqQryClientLoginTopic"&&
        reqFuncName!=="ReqQryClientLoginTopic"&&reqFuncName!=="ReqQryCPUUsageTopic"&&
        reqFuncName!=="ReqQryMemoryUsageTopic"&&reqFuncName!=="ReqQryDiskUsageTopic"&&
        reqFuncName!=="ReqQryKeyFileInfoTopic"&&reqFuncName!=="ReqQryHostMonitorCfgTopic"&&
        reqFuncName!=="ReqQryAppMonitorCfgTopic"
        ) {
            fileData += tabSpace[4] + "curSocket.on(EVENTS." + reqFuncName + ", function(reqField) {\n";
            if (reqFuncName === "ReqQrySysUserLoginTopic") {
              fileData += tabSpace[5] + "console.log(\"ReqQrySysUserLoginTopic\")\n"
                        + tabSpace[5] + "console.log(reqField);\n"
             }
                      // + tabSpace[5] + "var flag = userSocket[currUserID].userApi." + reqFuncName + "(reqField.reqObject, reqField.RequestId);\n"
                      // + tabSpace[5] + "if ( -1 === flag) {\n"
                      // + tabSpace[6] + "curSocket.emit(EVENTS."+ reqFuncName +"Failed, flag);\n"
                      // + tabSpace[5] + "}\n"
            fileData += tabSpace[5] + "var rspData = new SysUserApiStruct." + rspDataName + "();\n"
                      + tabSpace[5] + "curSocket.emit(EVENTS."+ rspEventName +", rspData);\n"
                      + tabSpace[4] + "});\n\n";
        }

}

fileData += hereDoc(function () {
/*
	       }); // rootSocket.on('new user', function(userInfo) end!
        }
        rootSocket.emit(EVENTS.SocketIONewUserReady, CurUserSocketioId);

    }); //rootSocket.on(EVENTS.SocketIONewUserCome);
}); // io.on('connection', function(rootSocket)) end!
*/
});

var pathName = '../new file/';
var fileName = 'proxy-server-local.js';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});
