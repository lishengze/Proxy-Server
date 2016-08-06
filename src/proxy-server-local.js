var fs               = require('fs');
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
                curSocket.on(EVENTS.ReqQryTopMemInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTopMemInfoField();
                    curSocket.emit(EVENTS.RspQryTopMemInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTopProcessInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTopProcessInfoField();
                    curSocket.emit(EVENTS.RspQryTopProcessInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryFileSystemInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryFileSystemInfoField();
                    curSocket.emit(EVENTS.RspQryFileSystemInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetworkInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetworkInfoField();
                    curSocket.emit(EVENTS.RspQryNetworkInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryMonitorObjectTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryMonitorObjectField();
                    curSocket.emit(EVENTS.RspQryMonitorObjectTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryObjectRationalTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryObjectRationalField();
                    curSocket.emit(EVENTS.RspQryObjectRationalTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySyslogInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySyslogInfoField();
                    curSocket.emit(EVENTS.RspQrySyslogInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySubscriberTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySubscriberField();
                    curSocket.emit(EVENTS.RspQrySubscriberTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryOidRelationTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryOidRelationField();
                    curSocket.emit(EVENTS.RspQryOidRelationTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryUserInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryUserInfoField();
                    curSocket.emit(EVENTS.RspQryUserInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryOnlineUserInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryOnlineUserInfoField();
                    curSocket.emit(EVENTS.RspQryOnlineUserInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryWarningEventTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryWarningEventField();
                    curSocket.emit(EVENTS.RspQryWarningEventTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryObjectAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryObjectAttrField();
                    curSocket.emit(EVENTS.RspQryObjectAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryInvalidateOrderTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryInvalidateOrderField();
                    curSocket.emit(EVENTS.RspQryInvalidateOrderTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryOrderStatusTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryOrderStatusField();
                    curSocket.emit(EVENTS.RspQryOrderStatusTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryBargainOrderTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryBargainOrderField();
                    curSocket.emit(EVENTS.RspQryBargainOrderTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryInstPropertyTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryInstPropertyField();
                    curSocket.emit(EVENTS.RspQryInstPropertyTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryMarginRateTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryMarginRateField();
                    curSocket.emit(EVENTS.RspQryMarginRateTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPriceLimitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPriceLimitField();
                    curSocket.emit(EVENTS.RspQryPriceLimitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPartPosiLimitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPartPosiLimitField();
                    curSocket.emit(EVENTS.RspQryPartPosiLimitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryClientPosiLimitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryClientPosiLimitField();
                    curSocket.emit(EVENTS.RspQryClientPosiLimitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySpecialPosiLimitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySpecialPosiLimitField();
                    curSocket.emit(EVENTS.RspQrySpecialPosiLimitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTransactionChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTransactionChgField();
                    curSocket.emit(EVENTS.RspQryTransactionChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryClientChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryClientChgField();
                    curSocket.emit(EVENTS.RspQryClientChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPartClientChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPartClientChgField();
                    curSocket.emit(EVENTS.RspQryPartClientChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPosiLimitChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPosiLimitChgField();
                    curSocket.emit(EVENTS.RspQryPosiLimitChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHedgeDetailChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHedgeDetailChgField();
                    curSocket.emit(EVENTS.RspQryHedgeDetailChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryParticipantChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryParticipantChgField();
                    curSocket.emit(EVENTS.RspQryParticipantChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryMarginRateChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryMarginRateChgField();
                    curSocket.emit(EVENTS.RspQryMarginRateChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryUserIpChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryUserIpChgField();
                    curSocket.emit(EVENTS.RspQryUserIpChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryClientPosiLimitChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryClientPosiLimitChgField();
                    curSocket.emit(EVENTS.RspQryClientPosiLimitChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySpecPosiLimitChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySpecPosiLimitChgField();
                    curSocket.emit(EVENTS.RspQrySpecPosiLimitChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHistoryObjectAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHistoryObjectAttrField();
                    curSocket.emit(EVENTS.RspQryHistoryObjectAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryFrontInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryFrontInfoField();
                    curSocket.emit(EVENTS.RspQryFrontInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySysUserLoginTopic, function(reqField) {
                    console.log("ReqQrySysUserLoginTopic")
                    console.log(reqField);
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySysUserLoginField();
                    curSocket.emit(EVENTS.RspQrySysUserLoginTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySysUserLogoutTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySysUserLogoutField();
                    curSocket.emit(EVENTS.RspQrySysUserLogoutTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySysUserPasswordUpdateTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySysUserPasswordUpdateField();
                    curSocket.emit(EVENTS.RspQrySysUserPasswordUpdateTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySysUserRegisterTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySysUserRegisterField();
                    curSocket.emit(EVENTS.RspQrySysUserRegisterTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySysUserDeleteTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySysUserDeleteField();
                    curSocket.emit(EVENTS.RspQrySysUserDeleteTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradeLogTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradeLogField();
                    curSocket.emit(EVENTS.RspQryTradeLogTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryWarningEventUpdateTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryWarningEventUpdateField();
                    curSocket.emit(EVENTS.RspQryWarningEventUpdateTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradeUserLoginInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradeUserLoginInfoField();
                    curSocket.emit(EVENTS.RspQryTradeUserLoginInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPartTradeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPartTradeField();
                    curSocket.emit(EVENTS.RspQryPartTradeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradepeakTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradepeakField();
                    curSocket.emit(EVENTS.RspQryTradepeakTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryParticipantInitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryParticipantInitField();
                    curSocket.emit(EVENTS.RspQryParticipantInitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryUserInitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryUserInitField();
                    curSocket.emit(EVENTS.RspQryUserInitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHistoryCpuInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHistoryCpuInfoField();
                    curSocket.emit(EVENTS.RspQryHistoryCpuInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHistoryMemInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHistoryMemInfoField();
                    curSocket.emit(EVENTS.RspQryHistoryMemInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHistoryNetworkInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHistoryNetworkInfoField();
                    curSocket.emit(EVENTS.RspQryHistoryNetworkInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryHistoryTradePeakTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryHistoryTradePeakField();
                    curSocket.emit(EVENTS.RspQryHistoryTradePeakTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySyslogEventTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySyslogEventField();
                    curSocket.emit(EVENTS.RspQrySyslogEventTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySyslogEventSubcriberTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySyslogEventSubcriberField();
                    curSocket.emit(EVENTS.RspQrySyslogEventSubcriberTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTomcatInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTomcatInfoField();
                    curSocket.emit(EVENTS.RspQryTomcatInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryDBQueryTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryDBQueryField();
                    curSocket.emit(EVENTS.RspQryDBQueryTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryGetFileTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryGetFileField();
                    curSocket.emit(EVENTS.RspQryGetFileTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQrySyslogEventUpdateTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQrySyslogEventUpdateField();
                    curSocket.emit(EVENTS.RspQrySyslogEventUpdateTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryWarningQueryTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryWarningQueryField();
                    curSocket.emit(EVENTS.RspQryWarningQueryTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryWebVisitTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryWebVisitField();
                    curSocket.emit(EVENTS.RspQryWebVisitTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryGeneralOperateTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryGeneralOperateField();
                    curSocket.emit(EVENTS.RspQryGeneralOperateTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceLinkedTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceLinkedField();
                    curSocket.emit(EVENTS.RspQryNetDeviceLinkedTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradeUserLoginStatTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradeUserLoginStatField();
                    curSocket.emit(EVENTS.RspQryTradeUserLoginStatTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradeFrontOrderRttStatTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradeFrontOrderRttStatField();
                    curSocket.emit(EVENTS.RspQryTradeFrontOrderRttStatTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryParticTradeOrderStatesTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryParticTradeOrderStatesField();
                    curSocket.emit(EVENTS.RspQryParticTradeOrderStatesTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryRouterInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryRouterInfoField();
                    curSocket.emit(EVENTS.RspQryRouterInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryDiskIOTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryDiskIOField();
                    curSocket.emit(EVENTS.RspQryDiskIOTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryStatInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryStatInfoField();
                    curSocket.emit(EVENTS.RspQryStatInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryTradeOrderRttCutLineTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryTradeOrderRttCutLineField();
                    curSocket.emit(EVENTS.RspQryTradeOrderRttCutLineTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryClientInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryClientInfoField();
                    curSocket.emit(EVENTS.RspQryClientInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryEventDescriptionTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryEventDescriptionField();
                    curSocket.emit(EVENTS.RspQryEventDescriptionTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryFrontUniqueIDTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryFrontUniqueIDField();
                    curSocket.emit(EVENTS.RspQryFrontUniqueIDTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetPartyLinkAddrChangeField();
                    curSocket.emit(EVENTS.RspQryNetPartyLinkAddrChangeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDelPartyLinkInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDelPartyLinkInfoField();
                    curSocket.emit(EVENTS.RspQryNetDelPartyLinkInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryPerformanceTopTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryPerformanceTopField();
                    curSocket.emit(EVENTS.RspQryPerformanceTopTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryInstrumentStatusTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryInstrumentStatusField();
                    curSocket.emit(EVENTS.RspQryInstrumentStatusTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryCurrTradingSegmentAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryCurrTradingSegmentAttrField();
                    curSocket.emit(EVENTS.RspQryCurrTradingSegmentAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryRealTimeNetObjectAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryRealTimeNetObjectAttrField();
                    curSocket.emit(EVENTS.RspQryRealTimeNetObjectAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetAreaTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetAreaField();
                    curSocket.emit(EVENTS.RspQryNetAreaTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetSubAreaTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetSubAreaField();
                    curSocket.emit(EVENTS.RspQryNetSubAreaTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetSubAreaIPTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetSubAreaIPField();
                    curSocket.emit(EVENTS.RspQryNetSubAreaIPTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceDetectTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceDetectField();
                    curSocket.emit(EVENTS.RspQryNetDeviceDetectTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceRequestTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceRequestField();
                    curSocket.emit(EVENTS.RspQryNetDeviceRequestTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetBuildingTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetBuildingField();
                    curSocket.emit(EVENTS.RspQryNetBuildingTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetRoomTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetRoomField();
                    curSocket.emit(EVENTS.RspQryNetRoomTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetCabinetsTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetCabinetsField();
                    curSocket.emit(EVENTS.RspQryNetCabinetsTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetOIDTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetOIDField();
                    curSocket.emit(EVENTS.RspQryNetOIDTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetTimePolicyTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetTimePolicyField();
                    curSocket.emit(EVENTS.RspQryNetTimePolicyTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetGatherTaskTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetGatherTaskField();
                    curSocket.emit(EVENTS.RspQryNetGatherTaskTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceChgTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceChgField();
                    curSocket.emit(EVENTS.RspQryNetDeviceChgTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceTypeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceTypeField();
                    curSocket.emit(EVENTS.RspQryNetDeviceTypeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetDeviceCategoryTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetDeviceCategoryField();
                    curSocket.emit(EVENTS.RspQryNetDeviceCategoryTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetManufactoryTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetManufactoryField();
                    curSocket.emit(EVENTS.RspQryNetManufactoryTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetCommunityTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetCommunityField();
                    curSocket.emit(EVENTS.RspQryNetCommunityTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetPortTypeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetPortTypeField();
                    curSocket.emit(EVENTS.RspQryNetPortTypeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetPartAccessSpotTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetPartAccessSpotField();
                    curSocket.emit(EVENTS.RspQryNetPartAccessSpotTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetInterfaceTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetInterfaceField();
                    curSocket.emit(EVENTS.RspQryNetInterfaceTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetGeneralOIDTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetGeneralOIDField();
                    curSocket.emit(EVENTS.RspQryNetGeneralOIDTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorTypeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorTypeField();
                    curSocket.emit(EVENTS.RspQryNetMonitorTypeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorAttrScopeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorAttrScopeField();
                    curSocket.emit(EVENTS.RspQryNetMonitorAttrScopeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorAttrTypeTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorAttrTypeField();
                    curSocket.emit(EVENTS.RspQryNetMonitorAttrTypeTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorObjectAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorObjectAttrField();
                    curSocket.emit(EVENTS.RspQryNetMonitorObjectAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorDeviceGroupTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorDeviceGroupField();
                    curSocket.emit(EVENTS.RspQryNetMonitorDeviceGroupTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorTaskInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorTaskInfoField();
                    curSocket.emit(EVENTS.RspQryNetMonitorTaskInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorTaskResultTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorTaskResultField();
                    curSocket.emit(EVENTS.RspQryNetMonitorTaskResultTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorTaskObjectSetField();
                    curSocket.emit(EVENTS.RspQryNetMonitorTaskObjectSetTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetPartyLinkInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetPartyLinkInfoField();
                    curSocket.emit(EVENTS.RspQryNetPartyLinkInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorActionAttrTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorActionAttrField();
                    curSocket.emit(EVENTS.RspQryNetMonitorActionAttrTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetModuleTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetModuleField();
                    curSocket.emit(EVENTS.RspQryNetModuleTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorTaskStatusResultField();
                    curSocket.emit(EVENTS.RspQryNetMonitorTaskStatusResultTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetCfgFileTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetCfgFileField();
                    curSocket.emit(EVENTS.RspQryNetCfgFileTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetMonitorDeviceTaskTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetMonitorDeviceTaskField();
                    curSocket.emit(EVENTS.RspQryNetMonitorDeviceTaskTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryFileGeneralOperTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryFileGeneralOperField();
                    curSocket.emit(EVENTS.RspQryFileGeneralOperTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetBaseLineTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetBaseLineField();
                    curSocket.emit(EVENTS.RspQryNetBaseLineTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetBaseLineResultTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetBaseLineResultField();
                    curSocket.emit(EVENTS.RspQryNetBaseLineResultTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetPartyLinkStatusInfoField();
                    curSocket.emit(EVENTS.RspQryNetPartyLinkStatusInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetLocalPingResultInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetLocalPingResultInfoField();
                    curSocket.emit(EVENTS.RspQryNetLocalPingResultInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetRomotePingResultInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetRomotePingResultInfoField();
                    curSocket.emit(EVENTS.RspQryNetRomotePingResultInfoTopic, rspData);
                });

                curSocket.on(EVENTS.ReqQryNetNonPartyLinkInfoTopic, function(reqField) {
                    var rspData = new SysUserApiStruct.CShfeFtdcRspQryNetNonPartyLinkInfoField();
                    curSocket.emit(EVENTS.RspQryNetNonPartyLinkInfoTopic, rspData);
                });


	       }); // rootSocket.on('new user', function(userInfo) end!
        }
        rootSocket.emit(EVENTS.SocketIONewUserReady, CurUserSocketioId);

    }); //rootSocket.on(EVENTS.SocketIONewUserCome);
}); // io.on('connection', function(rootSocket)) end!
