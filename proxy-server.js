var fs               = require('fs');
var spi              = require("./communication.js");
var addon            = require("./build/Release/addon");
var EVENTS           = require('./events.json');

var tool_function    = require('./tool-function.js');
var OutputMessage    = tool_function.OutputMessage;

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

var realTimeSystemPath  = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";

io.on('connection', function(rootSocket) {	
    
    OutputMessage("Proxy-Server: RootServer Connected!");

	rootSocket.on(EVENTS.NewUserCome, function(userInfo) {
        
        OutputMessage("Proxy-Server: new user " + userInfo.UserID + " come");
        				
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
        // 创建用户相关目录;
        
        user[curUserIndex].socket.on ('connection', function (curSocket) {
                            
            OutputMessage("Proxy-Server: " + user[curUserIndex].userInfo.UserID + " connect completed!");
                            
            user[curUserIndex].userApi = new addon.FtdcSysUserApi_Wrapper("");        
            user[curUserIndex].Spi = new spi.Spi();
            user[curUserIndex].RequestID = 1;
            user[curUserIndex].Spi.user = user[curUserIndex];                                            
                       
            curSocket.emit(EVENTS.NewUserConnectComplete, user[curUserIndex]);
            
            curSocket.on(EVENTS.RegisterFront, function(user) {
				OutputMessage('\n------  Proxy-Server: Connect Front!-------\n');
                user.userApi.RegisterFront(realTimeSystemPath);   
                user.userApi.RegisterSpi(user.Spi);
                user.userApi.Init();   				
			});
        
            curSocket.on(EVENTS.ReqQryTopMemInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryTopMemInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTopMemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTopProcessInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryTopProcessInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTopProcessInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFileSystemInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryFileSystemInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFileSystemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetworkInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetworkInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetworkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMonitorObjectTopic, function(data) {
                var flag = data.user.userApi.ReqQryMonitorObjectTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMonitorObjectTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryObjectRationalTopic, function(data) {
                var flag = data.user.userApi.ReqQryObjectRationalTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryObjectRationalTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQrySyslogInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySubscriberTopic, function(data) {
                var flag = data.user.userApi.ReqQrySubscriberTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySubscriberTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOidRelationTopic, function(data) {
                var flag = data.user.userApi.ReqQryOidRelationTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOidRelationTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryUserInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOnlineUserInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryOnlineUserInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOnlineUserInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningEventTopic, function(data) {
                var flag = data.user.userApi.ReqQryWarningEventTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningEventTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryObjectAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryObjectAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInvalidateOrderTopic, function(data) {
                var flag = data.user.userApi.ReqQryInvalidateOrderTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInvalidateOrderTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryOrderStatusTopic, function(data) {
                var flag = data.user.userApi.ReqQryOrderStatusTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryOrderStatusTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryBargainOrderTopic, function(data) {
                var flag = data.user.userApi.ReqQryBargainOrderTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryBargainOrderTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInstPropertyTopic, function(data) {
                var flag = data.user.userApi.ReqQryInstPropertyTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInstPropertyTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMarginRateTopic, function(data) {
                var flag = data.user.userApi.ReqQryMarginRateTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMarginRateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPriceLimitTopic, function(data) {
                var flag = data.user.userApi.ReqQryPriceLimitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPriceLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartPosiLimitTopic, function(data) {
                var flag = data.user.userApi.ReqQryPartPosiLimitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientPosiLimitTopic, function(data) {
                var flag = data.user.userApi.ReqQryClientPosiLimitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySpecialPosiLimitTopic, function(data) {
                var flag = data.user.userApi.ReqQrySpecialPosiLimitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySpecialPosiLimitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTransactionChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryTransactionChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTransactionChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryClientChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartClientChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryPartClientChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartClientChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPosiLimitChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryPosiLimitChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHedgeDetailChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryHedgeDetailChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHedgeDetailChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticipantChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryParticipantChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticipantChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryMarginRateChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryMarginRateChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryMarginRateChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserIpChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryUserIpChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserIpChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientPosiLimitChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryClientPosiLimitChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySpecPosiLimitChgTopic, function(data) {
                var flag = data.user.userApi.ReqQrySpecPosiLimitChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySpecPosiLimitChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryObjectAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryHistoryObjectAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFrontInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryFrontInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFrontInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserLoginTopic, function(data) {
            	
                var flag = data.user.userApi.ReqQrySysUserLoginTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserLoginTopicFailed, flag);
                }
                
                var outputStr = "\n---------  Proxy-Server: ReqQrySysUserLoginTopic START! --------";
                outputStr += "ReqQrySysUserLoginTopic Flag : " + flag + "\n";
                outputStr += "---------  Proxy-Server: ReqQrySysUserLoginTopic END! --------\n";
                OutputMessage(outputStr);
                  
            });

            curSocket.on(EVENTS.ReqQrySysUserLogoutTopic, function(data) {
                var flag = data.user.userApi.ReqQrySysUserLogoutTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserLogoutTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserPasswordUpdateTopic, function(data) {
                var flag = data.user.userApi.ReqQrySysUserPasswordUpdateTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserPasswordUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserRegisterTopic, function(data) {
                var flag = data.user.userApi.ReqQrySysUserRegisterTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserRegisterTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySysUserDeleteTopic, function(data) {
                var flag = data.user.userApi.ReqQrySysUserDeleteTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySysUserDeleteTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeLogTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradeLogTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeLogTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningEventUpdateTopic, function(data) {
                var flag = data.user.userApi.ReqQryWarningEventUpdateTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningEventUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeUserLoginInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradeUserLoginInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeUserLoginInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPartTradeTopic, function(data) {
                var flag = data.user.userApi.ReqQryPartTradeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPartTradeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradepeakTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradepeakTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradepeakTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticipantInitTopic, function(data) {
                var flag = data.user.userApi.ReqQryParticipantInitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticipantInitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryUserInitTopic, function(data) {
                var flag = data.user.userApi.ReqQryUserInitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryUserInitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryCpuInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryHistoryCpuInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryCpuInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryMemInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryHistoryMemInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryMemInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryNetworkInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryHistoryNetworkInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryNetworkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryHistoryTradePeakTopic, function(data) {
                var flag = data.user.userApi.ReqQryHistoryTradePeakTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryHistoryTradePeakTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventTopic, function(data) {
                var flag = data.user.userApi.ReqQrySyslogEventTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventSubcriberTopic, function(data) {
                var flag = data.user.userApi.ReqQrySyslogEventSubcriberTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventSubcriberTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTomcatInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryTomcatInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTomcatInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryDBQueryTopic, function(data) {
                var flag = data.user.userApi.ReqQryDBQueryTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryDBQueryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryGetFileTopic, function(data) {
                var flag = data.user.userApi.ReqQryGetFileTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryGetFileTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQrySyslogEventUpdateTopic, function(data) {
                var flag = data.user.userApi.ReqQrySyslogEventUpdateTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQrySyslogEventUpdateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWarningQueryTopic, function(data) {
                var flag = data.user.userApi.ReqQryWarningQueryTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWarningQueryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryWebVisitTopic, function(data) {
                var flag = data.user.userApi.ReqQryWebVisitTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryWebVisitTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryGeneralOperateTopic, function(data) {
                var flag = data.user.userApi.ReqQryGeneralOperateTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryGeneralOperateTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceLinkedTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceLinkedTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceLinkedTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeUserLoginStatTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradeUserLoginStatTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeUserLoginStatTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeFrontOrderRttStatTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradeFrontOrderRttStatTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeFrontOrderRttStatTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryParticTradeOrderStatesTopic, function(data) {
                var flag = data.user.userApi.ReqQryParticTradeOrderStatesTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryParticTradeOrderStatesTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryRouterInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryRouterInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryRouterInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryDiskIOTopic, function(data) {
                var flag = data.user.userApi.ReqQryDiskIOTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryDiskIOTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryStatInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryStatInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryStatInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryTradeOrderRttCutLineTopic, function(data) {
                var flag = data.user.userApi.ReqQryTradeOrderRttCutLineTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryTradeOrderRttCutLineTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryClientInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryClientInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryClientInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryEventDescriptionTopic, function(data) {
                var flag = data.user.userApi.ReqQryEventDescriptionTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryEventDescriptionTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFrontUniqueIDTopic, function(data) {
                var flag = data.user.userApi.ReqQryFrontUniqueIDTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFrontUniqueIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetPartyLinkAddrChangeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkAddrChangeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDelPartyLinkInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDelPartyLinkInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDelPartyLinkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryPerformanceTopTopic, function(data) {
                var flag = data.user.userApi.ReqQryPerformanceTopTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryPerformanceTopTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryInstrumentStatusTopic, function(data) {
                var flag = data.user.userApi.ReqQryInstrumentStatusTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryInstrumentStatusTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryCurrTradingSegmentAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryCurrTradingSegmentAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryCurrTradingSegmentAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryRealTimeNetObjectAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryRealTimeNetObjectAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryRealTimeNetObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetAreaTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetAreaTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetAreaTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetSubAreaTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetSubAreaTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetSubAreaTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetSubAreaIPTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetSubAreaIPTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetSubAreaIPTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceDetectTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceDetectTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceDetectTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceRequestTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceRequestTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceRequestTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBuildingTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetBuildingTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBuildingTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetRoomTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetRoomTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetRoomTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCabinetsTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetCabinetsTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCabinetsTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetOIDTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetOIDTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetOIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetTimePolicyTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetTimePolicyTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetTimePolicyTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetGatherTaskTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetGatherTaskTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetGatherTaskTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceChgTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceChgTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceChgTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceTypeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceTypeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetDeviceCategoryTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetDeviceCategoryTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetDeviceCategoryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetManufactoryTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetManufactoryTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetManufactoryTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCommunityTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetCommunityTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCommunityTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPortTypeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetPortTypeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPortTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartAccessSpotTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetPartAccessSpotTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartAccessSpotTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetInterfaceTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetInterfaceTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetInterfaceTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetGeneralOIDTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetGeneralOIDTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetGeneralOIDTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTypeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorTypeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorAttrScopeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorAttrScopeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorAttrScopeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorAttrTypeTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorAttrTypeTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorAttrTypeTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorObjectAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorObjectAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorObjectAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorDeviceGroupTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorDeviceGroupTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorDeviceGroupTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorTaskInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskResultTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorTaskResultTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorTaskObjectSetTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskObjectSetTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetPartyLinkInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorActionAttrTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorActionAttrTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorActionAttrTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetModuleTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetModuleTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetModuleTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorTaskStatusResultTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorTaskStatusResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetCfgFileTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetCfgFileTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetCfgFileTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetMonitorDeviceTaskTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetMonitorDeviceTaskTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetMonitorDeviceTaskTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryFileGeneralOperTopic, function(data) {
                var flag = data.user.userApi.ReqQryFileGeneralOperTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryFileGeneralOperTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBaseLineTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetBaseLineTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBaseLineTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetBaseLineResultTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetBaseLineResultTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetBaseLineResultTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetPartyLinkStatusInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetPartyLinkStatusInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetLocalPingResultInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetLocalPingResultInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetLocalPingResultInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetRomotePingResultInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetRomotePingResultInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetRomotePingResultInfoTopicFailed, flag);
                }
            });

            curSocket.on(EVENTS.ReqQryNetNonPartyLinkInfoTopic, function(data) {
                var flag = data.user.userApi.ReqQryNetNonPartyLinkInfoTopic(data.reqField, data.user.RequestID++);
                if ( -1 === flag) {
                    curSocket.emit(EVENTS.ReqQryNetNonPartyLinkInfoTopicFailed, flag);
                }
            });

              									
	    }); // rootSocket.on('new user', function(userInfo) end!
        
        rootSocket.emit(EVENTS.NewUserReady, userInfo);
        	
    }); //rootSocket.on(EVENTS.NewUserCome);     	
}); // io.on('connection', function(rootSocket)) end!

