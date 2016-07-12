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
var addon            = require("./addon");
var events           = require("./events.js");
var EVENTS           = new events.EVENTS();

var toolFunc         = require("./tool-function.js");
var OutputMessage    = toolFunc.OutputMessage;
var getSubString     = toolFunc.getSubString;

var userConnection   = [];
var userSocket       = [];
var userLoginedIn    = [];
var userCount        = 0;
var isHttps          = true;

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

OutputMessage('Before rootServer connect!');
showCurProcessThreads();

var realTimeSystemPath  = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";

io.on('connection', function(rootSocket) {
    var spawn = require('child_process').spawn('mkdir', ['usr']);

    OutputMessage("Proxy-Server: root connect complete!");
    //showCurProcessThreads();

    rootSocket.on('disconnect', function(data) {
    	//showCurProcessThreads();
			console.log('rootSocket disconnect!');
		});

		rootSocket.on(EVENTS.NewUserCome, function(userInfo) {
        if (undefined !== userLoginedIn[userInfo.UserID]) {
            OutputMessage("Proxy-Server: " + userInfo.UserID + " has already logged!");
            rootSocket.emit("user reconnected", userInfo.UserID);
            return;
        }
        userLoginedIn[userInfo.UserID] = userInfo;

        if (undefined === userConnection[userInfo.UserID])
        {
          console.log(userInfo.UserID + ' first time!');
          userConnection[userInfo.UserID] = {};
          userConnection[userInfo.UserID].socket = io.of('/' + userInfo.UserID);
          userConnection[userInfo.UserID].userInfo = userInfo;
          var userWorkDirName = 'usr/' + userInfo.UserID;
          var spawn = require('child_process').spawn('mkdir', [userWorkDirName]);

          userConnection[userInfo.UserID].socket.on ('connection', function (curSocket) {
               // showCurProcessThreads();
              curSocket.on('disconnect', function(data) {
                userLoginedIn[userInfo.UserID] = undefined;
                // userConnection[currUserID] = undefined;
                userSocket[currUserID] = {};
  		          OutputMessage("Proxy-Server: user " + currUserID + " disconnected!");
  	          });

              // var currUserID = getSubString(currUserID, '/','#');
              var currUserID = curSocket.nsp.name.slice(1);
              var userWorkDirName = 'usr/' + currUserID + '/';
              OutputMessage("Proxy-Server: new user " + currUserID + " connect completed!");

              userSocket[currUserID]           = {};
              userSocket[currUserID].socket    = curSocket;
              userSocket[currUserID].userApi   = new addon.FtdcSysUserApi_Wrapper(userWorkDirName);
              userSocket[currUserID].Spi       = new spi.Spi();
              userSocket[currUserID].Spi.user  = userSocket[currUserID];

              curSocket.emit(EVENTS.NewUserConnectComplete, {});

              curSocket.on(EVENTS.RegisterFront, function() {
  								OutputMessage('\n------  Proxy-Server: Connect Front!-------\n');
                  userSocket[currUserID].userApi.RegisterFront(realTimeSystemPath);
                  userSocket[currUserID].userApi.RegisterSpi(userSocket[currUserID].Spi);
                  userSocket[currUserID].userApi.Init();

                  curSocket.emit("Test Front", 'succeed!');
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
            fileData += tabSpace[4] + "curSocket.on(EVENTS." + funcName + ", function(reqField) {\n"
                      + tabSpace[5] + "var flag = userSocket[currUserID].userApi." + funcName + "(reqField.reqObject, reqField.RequestId);\n"
                      + tabSpace[5] + "if ( -1 === flag) {\n"
                      + tabSpace[6] + "curSocket.emit(EVENTS."+ funcName +"Failed, flag);\n"
                      + tabSpace[5] + "}\n"
                      + tabSpace[4] + "});\n\n";
        }

}

fileData += hereDoc(function () {
/*
	       }); // rootSocket.on('new user', function(userInfo) end!
        }
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
