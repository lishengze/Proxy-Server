// Created by li.shengze on 2016/2/24.
// 客户端Api分为两部分， 请求与数据回调监听。
// 客户的请求必须在登陆之后才能进行。
// 客户在输入登陆信息后直接发出前置链接与用户登陆请求。
// 前置链接后才能进行用户登陆。
// 不同的链接失败给不同的错。
var EVENTS           = require('./events.json');
var isHttps          = false;
if (true === isHttps) {
//	var ipAddress  = 'https://192.168.10.11';
	var ipAddress  = 'https://localhost'
//	var ipAddress  = 'https://172.1.128.169';
	var port       = 8000;
	var url        = ipAddress + ':' + port.toString();
	var rootSocket = io.connect(url,{secure:true});	
} else {
	// var url        = 'http://localhost';
    var url        = 'http://172.1.128.169';
	var rootSocket = io.connect(url);
}

var userSocket;
var userServer;
var userInfo;

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

rootSocket.on(EVENTS.NewUserReady, function(userInfo){
							
    OutputMessage("Client: new user " + userInfo.UserID + " ready!");     
                           		
	userSocket = io.connect(url + '/' + userInfo.UserID); 
    
    userSocket.on(EVENTS.NewUserConnectComplete, function(user){	
        
       OutputMessage("Client: " + user.userInfo.UserID + "  connect completed!");  
       
	   userServer = user;	
       userSocket.emit(EVENTS.RegisterFront, user);																					
	});	
							
	userSocket.on(EVENTS.FrontConnected, function(callbackData){
        
        var outputStr = "\n+++++++++  Communication FrontConnected! ++++++++\n";
    	OutputMessage(outputStr);
        
        var data = {};
        data.reqField = userInfo;
        data.user = userServer;
	    userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, data);																								
	});	
    
    userSocket.on(EVENTS.FrontDisConnected, function(callbackData){	
																											
	});	
    
    userSocket.on(EVENTS.HeartBeatWarning, function(callbackData){	
																											
	});	
    
    userSocket.on(EVENTS.RspQryTopCpuInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTopCpuInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTopMemInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTopMemInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTopProcessInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTopProcessInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFileSystemInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFileSystemInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetworkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetworkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientLoginTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMonitorObjectTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMonitorObjectTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryObjectRationalTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnObjectRationalTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySyslogInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSyslogInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySubscriberTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryOidRelationTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnOidRelationTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryUserInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnUserInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryOnlineUserInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnOnlineUserInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryWarningEventTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnWarningEventTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryCPUUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnCPUUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMemoryUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMemoryUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryDiskUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnDiskUsageTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryInvalidateOrderTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnInvalidateOrderTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryOrderStatusTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnOrderStatusTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryBargainOrderTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnBargainOrderTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryInstPropertyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnInstPropertyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMarginRateTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMarginRateTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPriceLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPriceLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPartPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPartPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnClientPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySpecialPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSpecialPosiLimitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTransactionChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTransactionChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnClientChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPartClientChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPartClientChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHedgeDetailChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnHedgeDetailChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryParticipantChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnParticipantChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMarginRateChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMarginRateChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryUserIpChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnUserIpChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnClientPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySpecPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSpecPosiLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHistoryObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnHistoryObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFrontInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFrontInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySysUserLoginTopic, function(callbackData){	
        var pRspQrySysUserLogin = callbackData;
        var outputStr = "\n++++++++++++++++ Client OnRspQrySysUserLoginTopic: START! ++++++++++++++++++\n";
		if (pRspQrySysUserLogin instanceof Object) {
		      outputStr += "LoginTime :                 " + pRspQrySysUserLogin.LoginTime.toString() + "\n"
					           + "UserID :                    " + pRspQrySysUserLogin.UserID.toString() + "\n"
					           + "Privilege :                 " + pRspQrySysUserLogin.Privilege.toString() + "\n"
					           + "TradingDay :                " + pRspQrySysUserLogin.TradingDay.toString() + "\n"
					           + "VersionFlag :               " + pRspQrySysUserLogin.VersionFlag.toString() + "\n";	
					
		} else {
		      outputStr += "pRspQrySysUserLogin is NULL!\n";
		}        			        
        outputStr += "++++++++++++++++ Client OnRspQrySysUserLoginTopic: END! ++++++++++++++++++" + "\n";        
		console.log(outputStr);          
    });

    userSocket.on(EVENTS.RspQrySysUserLogoutTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySysUserPasswordUpdateTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySysUserRegisterTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySysUserDeleteTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryParticipantInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnParticipantInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryUserInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnUserInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnClientInitTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeLogTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTradeLogTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeUserLoginInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTradeUserLoginInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPartTradeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradepeakTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnUpdateSysConfigTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSysUser, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPriceLimitChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHistoryCpuInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHistoryMemInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHistoryNetworkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMonitorOnlineUser, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFrontStat, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSysTimeSyncTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnDataCenterChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryHistoryTradePeakTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnHistoryTradePeakTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySyslogEventTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSyslogEventTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeDayChangeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryWebAppInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnWebAppInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryServletInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnServletInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFileInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFileInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySessionInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSessionInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryJDBCInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnJDBCInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryThreadInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnThreadInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryVMInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnVMInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPropertyInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPropertyInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMemPoolInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMemPoolInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFileContentInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFileContentInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryConnectionInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnConnectionInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryConnectorInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnConnectorInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryDBQueryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnDBQueryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryGeneralFieldTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnGeneralFieldTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryGetFileTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryWarningQueryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnWarningQueryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnHostConfig, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryGeneralOperateTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnGeneralOperateTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceLinkedTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDeviceLinkedTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeUserLoginStatTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeFrontOrderRttStatTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTradeFrontOrderRttStatTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryParticTradeOrderStatesTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnParticTradeOrderStatesTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryRouterInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnRouterInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryDiskIOTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnDiskIOTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryStatInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnStatInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryTradeOrderRttCutLineTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnTradeOrderRttCutLineTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryClientInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnClientInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryEventDescriptionTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnEventDescriptionTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFrontUniqueIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFrontUniqueIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPartyLinkAddrChangeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPartyLinkAddrChangeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDelPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDelPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryPerformanceTopTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnPerformanceTopTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryInstrumentStatusTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnInstrumentStatusTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryCurrTradingSegmentAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnCurrTradingSegmentAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetSubAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetSubAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetSubAreaIPTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetSubAreaIPTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDeviceTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceDetectTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetBuildingTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetBuildingTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetRoomTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetRoomTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetCabinetsTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetCabinetsTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetOIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetOIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetTimePolicyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetTimePolicyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetGatherTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetGatherTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDeviceChgTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDeviceTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDeviceCategoryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDeviceCategoryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetManufactoryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetManufactoryTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetCommunityTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetCommunityTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPortTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPortTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPartAccessSpotTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPartAccessSpotTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetInterfaceTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetInterfaceTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetGeneralOIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetGeneralOIDTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorAttrScopeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorAttrScopeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorAttrTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorAttrTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorObjectAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetFuncAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetFuncAreaTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorCommandTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorCommandTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorActionGroupTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorActionGroupTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorDeviceGroupTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorDeviceGroupTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTaskInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTaskResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskObjectSetTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTaskObjectSetTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorActionAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorActionAttrTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetModuleTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetModuleTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetEventExprTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetEventExprTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetEventTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetEventTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetSubEventTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetSubEventTypeTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetEventLevelTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetEventLevelTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskStatusResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTaskStatusResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetCfgFileTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetCfgFileTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorDeviceTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorDeviceTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskInstAttrsTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMonitorTaskInstAttrsTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryFileGeneralOperTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnFileGeneralOperTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetBaseLineTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetBaseLineTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetBaseLineTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetBaseLineTaskTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetBaseLineResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetBaseLineResultTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPartyLinkStatusInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPartyLinkStatusInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetMemberSDHLineInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetMemberSDHLineInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetDDNLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetDDNLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPseudMemberLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPseudMemberLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryOuterDeviceInfTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetOuterDeviceInfTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetLocalPingResultInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetLocalPingResultInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetRomotePingResultInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetRomotePingResultInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMonitorTopProcessInfo, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQrySysInternalTopologyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnSysInternalTopologyTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryMemberLinkCostTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnMemberLinkCostTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetPartylinkMonthlyRentTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetPartylinkMonthlyRentTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RspQryNetNonPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.RtnNetNonPartyLinkInfoTopic, function(callbackData){	

    });

    userSocket.on(EVENTS.ReqQryTopMemInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTopProcessInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryFileSystemInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetworkInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryMonitorObjectTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryObjectRationalTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySyslogInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySubscriberTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryOidRelationTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryUserInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryOnlineUserInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryWarningEventTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryObjectAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryInvalidateOrderTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryOrderStatusTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryBargainOrderTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryInstPropertyTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryMarginRateTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPriceLimitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPartPosiLimitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryClientPosiLimitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySpecialPosiLimitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTransactionChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryClientChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPartClientChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPosiLimitChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHedgeDetailChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryParticipantChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryMarginRateChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryUserIpChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryClientPosiLimitChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySpecPosiLimitChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHistoryObjectAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryFrontInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySysUserLoginTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySysUserLogoutTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySysUserPasswordUpdateTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySysUserRegisterTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySysUserDeleteTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradeLogTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryWarningEventUpdateTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradeUserLoginInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPartTradeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradepeakTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryParticipantInitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryUserInitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHistoryCpuInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHistoryMemInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHistoryNetworkInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryHistoryTradePeakTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySyslogEventTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySyslogEventSubcriberTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTomcatInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryDBQueryTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryGetFileTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQrySyslogEventUpdateTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryWarningQueryTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryWebVisitTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryGeneralOperateTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceLinkedTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradeUserLoginStatTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradeFrontOrderRttStatTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryParticTradeOrderStatesTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryRouterInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryDiskIOTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryStatInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryTradeOrderRttCutLineTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryClientInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryEventDescriptionTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryFrontUniqueIDTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDelPartyLinkInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryPerformanceTopTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryInstrumentStatusTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryCurrTradingSegmentAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryRealTimeNetObjectAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetAreaTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetSubAreaTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetSubAreaIPTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceDetectTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceRequestTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetBuildingTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetRoomTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetCabinetsTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetOIDTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetTimePolicyTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetGatherTaskTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceChgTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceTypeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetDeviceCategoryTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetManufactoryTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetCommunityTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetPortTypeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetPartAccessSpotTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetInterfaceTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetGeneralOIDTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorTypeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorAttrScopeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorAttrTypeTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorObjectAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorDeviceGroupTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskResultTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorActionAttrTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetModuleTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetCfgFileTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetMonitorDeviceTaskTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryFileGeneralOperTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetBaseLineTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetBaseLineResultTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetLocalPingResultInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetRomotePingResultInfoTopicFailed, function(flag){	

    });

    userSocket.on(EVENTS.ReqQryNetNonPartyLinkInfoTopicFailed, function(flag){	

    });

});



var ReqQryTopMemInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTopMemInfoTopic, data);
}

var ReqQryTopProcessInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTopProcessInfoTopic, data);
}

var ReqQryFileSystemInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryFileSystemInfoTopic, data);
}

var ReqQryNetworkInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetworkInfoTopic, data);
}

var ReqQryMonitorObjectTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryMonitorObjectTopic, data);
}

var ReqQryObjectRationalTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryObjectRationalTopic, data);
}

var ReqQrySyslogInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySyslogInfoTopic, data);
}

var ReqQrySubscriberTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySubscriberTopic, data);
}

var ReqQryOidRelationTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryOidRelationTopic, data);
}

var ReqQryUserInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryUserInfoTopic, data);
}

var ReqQryOnlineUserInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryOnlineUserInfoTopic, data);
}

var ReqQryWarningEventTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryWarningEventTopic, data);
}

var ReqQryObjectAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryObjectAttrTopic, data);
}

var ReqQryInvalidateOrderTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryInvalidateOrderTopic, data);
}

var ReqQryOrderStatusTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryOrderStatusTopic, data);
}

var ReqQryBargainOrderTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryBargainOrderTopic, data);
}

var ReqQryInstPropertyTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryInstPropertyTopic, data);
}

var ReqQryMarginRateTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryMarginRateTopic, data);
}

var ReqQryPriceLimitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPriceLimitTopic, data);
}

var ReqQryPartPosiLimitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPartPosiLimitTopic, data);
}

var ReqQryClientPosiLimitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryClientPosiLimitTopic, data);
}

var ReqQrySpecialPosiLimitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySpecialPosiLimitTopic, data);
}

var ReqQryTransactionChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTransactionChgTopic, data);
}

var ReqQryClientChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryClientChgTopic, data);
}

var ReqQryPartClientChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPartClientChgTopic, data);
}

var ReqQryPosiLimitChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPosiLimitChgTopic, data);
}

var ReqQryHedgeDetailChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHedgeDetailChgTopic, data);
}

var ReqQryParticipantChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryParticipantChgTopic, data);
}

var ReqQryMarginRateChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryMarginRateChgTopic, data);
}

var ReqQryUserIpChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryUserIpChgTopic, data);
}

var ReqQryClientPosiLimitChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryClientPosiLimitChgTopic, data);
}

var ReqQrySpecPosiLimitChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySpecPosiLimitChgTopic, data);
}

var ReqQryHistoryObjectAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHistoryObjectAttrTopic, data);
}

var ReqQryFrontInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryFrontInfoTopic, data);
}

var ReqQrySysUserLoginTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, data);
}

var ReqQrySysUserLogoutTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySysUserLogoutTopic, data);
}

var ReqQrySysUserPasswordUpdateTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySysUserPasswordUpdateTopic, data);
}

var ReqQrySysUserRegisterTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySysUserRegisterTopic, data);
}

var ReqQrySysUserDeleteTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySysUserDeleteTopic, data);
}

var ReqQryTradeLogTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradeLogTopic, data);
}

var ReqQryWarningEventUpdateTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryWarningEventUpdateTopic, data);
}

var ReqQryTradeUserLoginInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradeUserLoginInfoTopic, data);
}

var ReqQryPartTradeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPartTradeTopic, data);
}

var ReqQryTradepeakTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradepeakTopic, data);
}

var ReqQryParticipantInitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryParticipantInitTopic, data);
}

var ReqQryUserInitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryUserInitTopic, data);
}

var ReqQryHistoryCpuInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHistoryCpuInfoTopic, data);
}

var ReqQryHistoryMemInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHistoryMemInfoTopic, data);
}

var ReqQryHistoryNetworkInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHistoryNetworkInfoTopic, data);
}

var ReqQryHistoryTradePeakTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryHistoryTradePeakTopic, data);
}

var ReqQrySyslogEventTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySyslogEventTopic, data);
}

var ReqQrySyslogEventSubcriberTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySyslogEventSubcriberTopic, data);
}

var ReqQryTomcatInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTomcatInfoTopic, data);
}

var ReqQryDBQueryTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryDBQueryTopic, data);
}

var ReqQryGetFileTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryGetFileTopic, data);
}

var ReqQrySyslogEventUpdateTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQrySyslogEventUpdateTopic, data);
}

var ReqQryWarningQueryTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryWarningQueryTopic, data);
}

var ReqQryWebVisitTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryWebVisitTopic, data);
}

var ReqQryGeneralOperateTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryGeneralOperateTopic, data);
}

var ReqQryNetDeviceLinkedTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceLinkedTopic, data);
}

var ReqQryTradeUserLoginStatTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradeUserLoginStatTopic, data);
}

var ReqQryTradeFrontOrderRttStatTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradeFrontOrderRttStatTopic, data);
}

var ReqQryParticTradeOrderStatesTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryParticTradeOrderStatesTopic, data);
}

var ReqQryRouterInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryRouterInfoTopic, data);
}

var ReqQryDiskIOTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryDiskIOTopic, data);
}

var ReqQryStatInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryStatInfoTopic, data);
}

var ReqQryTradeOrderRttCutLineTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryTradeOrderRttCutLineTopic, data);
}

var ReqQryClientInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryClientInfoTopic, data);
}

var ReqQryEventDescriptionTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryEventDescriptionTopic, data);
}

var ReqQryFrontUniqueIDTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryFrontUniqueIDTopic, data);
}

var ReqQryNetPartyLinkAddrChangeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetPartyLinkAddrChangeTopic, data);
}

var ReqQryNetDelPartyLinkInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDelPartyLinkInfoTopic, data);
}

var ReqQryPerformanceTopTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryPerformanceTopTopic, data);
}

var ReqQryInstrumentStatusTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryInstrumentStatusTopic, data);
}

var ReqQryCurrTradingSegmentAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryCurrTradingSegmentAttrTopic, data);
}

var ReqQryRealTimeNetObjectAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryRealTimeNetObjectAttrTopic, data);
}

var ReqQryNetAreaTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetAreaTopic, data);
}

var ReqQryNetSubAreaTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetSubAreaTopic, data);
}

var ReqQryNetSubAreaIPTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetSubAreaIPTopic, data);
}

var ReqQryNetDeviceDetectTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceDetectTopic, data);
}

var ReqQryNetDeviceRequestTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceRequestTopic, data);
}

var ReqQryNetBuildingTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetBuildingTopic, data);
}

var ReqQryNetRoomTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetRoomTopic, data);
}

var ReqQryNetCabinetsTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetCabinetsTopic, data);
}

var ReqQryNetOIDTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetOIDTopic, data);
}

var ReqQryNetTimePolicyTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetTimePolicyTopic, data);
}

var ReqQryNetGatherTaskTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetGatherTaskTopic, data);
}

var ReqQryNetDeviceChgTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceChgTopic, data);
}

var ReqQryNetDeviceTypeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceTypeTopic, data);
}

var ReqQryNetDeviceCategoryTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetDeviceCategoryTopic, data);
}

var ReqQryNetManufactoryTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetManufactoryTopic, data);
}

var ReqQryNetCommunityTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetCommunityTopic, data);
}

var ReqQryNetPortTypeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetPortTypeTopic, data);
}

var ReqQryNetPartAccessSpotTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetPartAccessSpotTopic, data);
}

var ReqQryNetInterfaceTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetInterfaceTopic, data);
}

var ReqQryNetGeneralOIDTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetGeneralOIDTopic, data);
}

var ReqQryNetMonitorTypeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorTypeTopic, data);
}

var ReqQryNetMonitorAttrScopeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorAttrScopeTopic, data);
}

var ReqQryNetMonitorAttrTypeTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorAttrTypeTopic, data);
}

var ReqQryNetMonitorObjectAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorObjectAttrTopic, data);
}

var ReqQryNetMonitorDeviceGroupTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorDeviceGroupTopic, data);
}

var ReqQryNetMonitorTaskInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskInfoTopic, data);
}

var ReqQryNetMonitorTaskResultTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskResultTopic, data);
}

var ReqQryNetMonitorTaskObjectSetTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskObjectSetTopic, data);
}

var ReqQryNetPartyLinkInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetPartyLinkInfoTopic, data);
}

var ReqQryNetMonitorActionAttrTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorActionAttrTopic, data);
}

var ReqQryNetModuleTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetModuleTopic, data);
}

var ReqQryNetMonitorTaskStatusResultTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskStatusResultTopic, data);
}

var ReqQryNetCfgFileTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetCfgFileTopic, data);
}

var ReqQryNetMonitorDeviceTaskTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetMonitorDeviceTaskTopic, data);
}

var ReqQryFileGeneralOperTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryFileGeneralOperTopic, data);
}

var ReqQryNetBaseLineTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetBaseLineTopic, data);
}

var ReqQryNetBaseLineResultTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetBaseLineResultTopic, data);
}

var ReqQryNetPartyLinkStatusInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetPartyLinkStatusInfoTopic, data);
}

var ReqQryNetLocalPingResultInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetLocalPingResultInfoTopic, data);
}

var ReqQryNetRomotePingResultInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetRomotePingResultInfoTopic, data);
}

var ReqQryNetNonPartyLinkInfoTopic = function (reqData) {
    var data = {};
    data.reqData = reqData;
    data.user = userServer;
    userSocket.emit(EVENTS.ReqQryNetNonPartyLinkInfoTopic, data);
}


