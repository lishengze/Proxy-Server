var fs               = require('fs');
var spi              = require("./communication.js");
// var addon            = require("./build/Release/addon");
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
        
        // 如果用户之前连接过， 那么就不用再为用户分配namespace和执行对应的回调函数注册，因为都已经执行过了，服务端仍然保存着那些回调与注册。
        // websocket是个保持状态的协议。
        if (undefined === userConnection[userInfo.UserID])
        {        	                	
        /**/	
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
            userSocket[currUserID].RequestID = 1;
            userSocket[currUserID].Spi.user  = userSocket[currUserID];
                       
            curSocket.emit(EVENTS.NewUserConnectComplete, {});
            
            curSocket.on(EVENTS.RegisterFront, function() {
								OutputMessage('\n------  Proxy-Server: Connect Front!-------\n');
                userSocket[currUserID].userApi.RegisterFront(realTimeSystemPath);   
                userSocket[currUserID].userApi.RegisterSpi(userSocket[currUserID].Spi);
                userSocket[currUserID].userApi.Init();   
                
                curSocket.emit("Test Front", 'succeed!');					
			});
        
            curSocket.on(EVENTS.ReqQryTopMemInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTopMemInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTopMemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTopProcessInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTopProcessInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTopProcessInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFileSystemInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryFileSystemInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFileSystemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetworkInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetworkInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetworkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMonitorObjectTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryMonitorObjectTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMonitorObjectTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryObjectRationalTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryObjectRationalTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryObjectRationalTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySyslogInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySubscriberTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySubscriberTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySubscriberTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOidRelationTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryOidRelationTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOidRelationTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryUserInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOnlineUserInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryOnlineUserInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOnlineUserInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningEventTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryWarningEventTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningEventTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryObjectAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryObjectAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInvalidateOrderTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryInvalidateOrderTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInvalidateOrderTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOrderStatusTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryOrderStatusTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOrderStatusTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryBargainOrderTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryBargainOrderTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryBargainOrderTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInstPropertyTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryInstPropertyTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInstPropertyTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMarginRateTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryMarginRateTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMarginRateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPriceLimitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPriceLimitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPriceLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartPosiLimitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPartPosiLimitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientPosiLimitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryClientPosiLimitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySpecialPosiLimitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySpecialPosiLimitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySpecialPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTransactionChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTransactionChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTransactionChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryClientChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartClientChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPartClientChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartClientChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPosiLimitChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPosiLimitChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHedgeDetailChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHedgeDetailChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHedgeDetailChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticipantChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryParticipantChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticipantChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMarginRateChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryMarginRateChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMarginRateChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserIpChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryUserIpChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserIpChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientPosiLimitChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryClientPosiLimitChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySpecPosiLimitChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySpecPosiLimitChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySpecPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryObjectAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHistoryObjectAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFrontInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryFrontInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFrontInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserLoginTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySysUserLoginTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserLoginTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserLogoutTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySysUserLogoutTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserLogoutTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserPasswordUpdateTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySysUserPasswordUpdateTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserPasswordUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserRegisterTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySysUserRegisterTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserRegisterTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserDeleteTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySysUserDeleteTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserDeleteTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeLogTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradeLogTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeLogTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningEventUpdateTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryWarningEventUpdateTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningEventUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeUserLoginInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradeUserLoginInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeUserLoginInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartTradeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPartTradeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartTradeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradepeakTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradepeakTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradepeakTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticipantInitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryParticipantInitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticipantInitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserInitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryUserInitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserInitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryCpuInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHistoryCpuInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryCpuInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryMemInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHistoryMemInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryMemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryNetworkInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHistoryNetworkInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryNetworkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryTradePeakTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryHistoryTradePeakTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryTradePeakTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySyslogEventTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventSubcriberTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySyslogEventSubcriberTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventSubcriberTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTomcatInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTomcatInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTomcatInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryDBQueryTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryDBQueryTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryDBQueryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryGetFileTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryGetFileTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryGetFileTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventUpdateTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQrySyslogEventUpdateTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningQueryTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryWarningQueryTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningQueryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWebVisitTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryWebVisitTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWebVisitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryGeneralOperateTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryGeneralOperateTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryGeneralOperateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceLinkedTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceLinkedTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceLinkedTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeUserLoginStatTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradeUserLoginStatTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeUserLoginStatTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeFrontOrderRttStatTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradeFrontOrderRttStatTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeFrontOrderRttStatTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticTradeOrderStatesTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryParticTradeOrderStatesTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticTradeOrderStatesTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryRouterInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryRouterInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryRouterInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryDiskIOTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryDiskIOTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryDiskIOTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryStatInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryStatInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryStatInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeOrderRttCutLineTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryTradeOrderRttCutLineTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeOrderRttCutLineTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryClientInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryEventDescriptionTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryEventDescriptionTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryEventDescriptionTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFrontUniqueIDTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryFrontUniqueIDTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFrontUniqueIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetPartyLinkAddrChangeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkAddrChangeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDelPartyLinkInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDelPartyLinkInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDelPartyLinkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPerformanceTopTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryPerformanceTopTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPerformanceTopTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInstrumentStatusTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryInstrumentStatusTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInstrumentStatusTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryCurrTradingSegmentAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryCurrTradingSegmentAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryCurrTradingSegmentAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryRealTimeNetObjectAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryRealTimeNetObjectAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryRealTimeNetObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetAreaTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetAreaTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetAreaTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetSubAreaTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetSubAreaTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetSubAreaTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetSubAreaIPTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetSubAreaIPTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetSubAreaIPTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceDetectTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceDetectTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceDetectTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceRequestTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceRequestTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceRequestTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBuildingTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetBuildingTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBuildingTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetRoomTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetRoomTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetRoomTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCabinetsTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetCabinetsTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCabinetsTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetOIDTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetOIDTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetOIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetTimePolicyTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetTimePolicyTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetTimePolicyTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetGatherTaskTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetGatherTaskTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetGatherTaskTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceChgTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceChgTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceTypeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceTypeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceCategoryTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetDeviceCategoryTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceCategoryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetManufactoryTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetManufactoryTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetManufactoryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCommunityTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetCommunityTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCommunityTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPortTypeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetPortTypeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPortTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartAccessSpotTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetPartAccessSpotTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartAccessSpotTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetInterfaceTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetInterfaceTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetInterfaceTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetGeneralOIDTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetGeneralOIDTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetGeneralOIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTypeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorTypeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorAttrScopeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorAttrScopeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorAttrScopeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorAttrTypeTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorAttrTypeTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorAttrTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorObjectAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorObjectAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorDeviceGroupTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorDeviceGroupTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorDeviceGroupTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorTaskInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskResultTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorTaskResultTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorTaskObjectSetTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskObjectSetTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetPartyLinkInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorActionAttrTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorActionAttrTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorActionAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetModuleTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetModuleTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetModuleTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorTaskStatusResultTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskStatusResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCfgFileTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetCfgFileTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCfgFileTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorDeviceTaskTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetMonitorDeviceTaskTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorDeviceTaskTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFileGeneralOperTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryFileGeneralOperTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFileGeneralOperTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBaseLineTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetBaseLineTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBaseLineTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBaseLineResultTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetBaseLineResultTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBaseLineResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetPartyLinkStatusInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkStatusInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetLocalPingResultInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetLocalPingResultInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetLocalPingResultInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetRomotePingResultInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetRomotePingResultInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetRomotePingResultInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetNonPartyLinkInfoTopic, function(reqField) {
                var flag = userSocket[currUserID].userApi.ReqQryNetNonPartyLinkInfoTopic(reqField, userSocket[currUserID].RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetNonPartyLinkInfoTopicFailed, flag);
                }
            });

              									
	    }); // rootSocket.on('new user', function(userInfo) end!        
    		}    	
    		rootSocket.emit(EVENTS.NewUserReady, userInfo);
    }); //rootSocket.on(EVENTS.NewUserCome);     	
}); // io.on('connection', function(rootSocket)) end!

