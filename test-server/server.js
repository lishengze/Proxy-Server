var addon = require("./build/Release/addon");
var structJs = require("./SysUserApiStruct_JS.js");
var fs = require('fs');
var Spi = function(){};

var userApi = new addon.FtdcSysUserApi_Wrapper();
var realTimeSystemPath  = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";
// userApi.RegisterFront(innerTestSystemPath);     
// userApi.RegisterSpi(new Spi());
// userApi.Init();

var loginReqNumbers          = 0;
var memReqNumbers            = 0;
var netMonitorReqNumbers     = 0;
var monitorObjectReqNumbers  = 1;
var bSubRtnObjectAttrTopic = true;
var bunSubRtnObjectAttrTopic = false;
var fileData = "";
var fileName = 'result-server.txt';
var pathName = './';
var nRequestID = 1;


process.on('beforeExit', function (code) {
	console.log('Nodejs, beforeExit: ' + code.toString());
});

process.on('exit', function (code) {
	console.log('Nodejs, exit: ' + code.toString());
});


Spi.prototype.OnFrontConnected=function(){
	console.log("FrontConnected!");
};

// 请求建立连接;
exports.RegisterFront = function (socket) {
	userApi.RegisterFront(innerTestSystemPath);     
	userApi.RegisterSpi(new Spi());
	userApi.Init();	
	
	Spi.prototype.OnFrontConnected = function() {
		console.log('+++++++ JS OnFrontConnected! ++++++++\n');
		socket.emit('FrontConnected!', 'FrontConnected!');
	}
}

/*************************************************************  请求登陆 ********************************************************/

exports.ReqQrySysUserLoginTopic = function (socket) {	
	var loginField       = new structJs.CShfeFtdcReqQrySysUserLoginField();
	loginField.UserID    = "admin";
	loginField.Password  = "admin";
	loginField.VersionID = "2.0.0.0";
	var rspQrySysUserLoginTopicCalledTime = 0;	
	var ReqQrySysUserLoginTopicCallbackData = [];
	
	Spi.prototype.OnRspQrySysUserLoginTopic = function(pRspQrySysUserLogin,pRspInfo,nRequestID,bIsLast)
	{
		console.log("\n" + "++++++++++++++++ JS OnRspQrySysUserLoginTopic: START! ++++++++++++++++++")
		
		if (pRspQrySysUserLogin instanceof Object) {
			console.log("LoginTime in JS is:                 " + pRspQrySysUserLogin.LoginTime); 
			console.log("UserID in JS is:                    " + pRspQrySysUserLogin.UserID);
			console.log("Privilege in JS is:                 " + pRspQrySysUserLogin.Privilege);
			console.log("TradingDay in JS is:                " + pRspQrySysUserLogin.TradingDay);
			console.log("VersionFlag in JS is:               " + pRspQrySysUserLogin.VersionFlag);	
			console.log("rspQrySysUserLoginTopicCalledTime in JS is:     " + rspQrySysUserLoginTopicCalledTime++);	
			
			ReqQrySysUserLoginTopicCallbackData.push(pRspQrySysUserLogin);			
		}
		
		if (true === bIsLast) {
			if (0!== ReqQrySysUserLoginTopicCallbackData.length) {
				socket.emit("ReqQrySysUserLoginTopic CallbackData", ReqQrySysUserLoginTopicCallbackData);				
				var pathName = "./";
				var fileName = "ReqQrySysUserLoginTopic-Server-CallbackData.txt";
				fs.writeFile(pathName + fileName, ReqQrySysUserLoginTopicCallbackData, function(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('Succeed in saving ' + pathName + fileName);
					}	
				});
							
				ReqQrySysUserLoginTopicCallbackData = [];	
			}	
		}
		
		if(pRspInfo instanceof Object){
		console.log("ErrorID in JS is: "+pRspInfo.ErrorID);
		console.log("ErrorMsg in JS is: "+pRspInfo.ErrorMsg);
		}
		else{
			console.log("datatype of pRspInfo is: "+typeof(pRspInfo));
			console.log("pRspInfo is: "+pRspInfo);		
		}
		
		console.log("nRequestID in JS is: "+nRequestID);
		console.log("nIsLastNew in JS is: "+bIsLast);
		console.log("************** OnRspQrySysUserLoginTopic: END! *************" + "\n");
	}				
	
	Spi.prototype.OnRtnNetLocalPingResultInfoTopic = function(pRtnNetLocalPingResultInfo) {
		console.log("\n" + "++++++++++++++++++++++ JS: OnRtnNetLocalPingResultInfoTopic: START! ++++++++++++++++")
		
		if(pRtnNetLocalPingResultInfo instanceof Object){
			console.log("pRtnNetLocalPingResultInfo->OperationType: ", pRtnNetLocalPingResultInfo.OperationType);
			console.log("pRtnNetLocalPingResultInfo->ID: ", pRtnNetLocalPingResultInfo.ID);
			console.log("pRtnNetLocalPingResultInfo->SouIPADDR: ", pRtnNetLocalPingResultInfo.SouIPADDR);
			console.log("pRtnNetLocalPingResultInfo->SouNAME: ", pRtnNetLocalPingResultInfo.SouNAME);
			console.log("pRtnNetLocalPingResultInfo->TarIPADDR: ", pRtnNetLocalPingResultInfo.TarIPADDR);
			console.log("pRtnNetLocalPingResultInfo->TarNAME: ", pRtnNetLocalPingResultInfo.TarNAME);
			console.log("pRtnNetLocalPingResultInfo->PDateSta: ", pRtnNetLocalPingResultInfo.PDateSta);
			console.log("pRtnNetLocalPingResultInfo->PTimeSta: ", pRtnNetLocalPingResultInfo.PTimeSta);
			console.log("pRtnNetLocalPingResultInfo->ConnRate: ", pRtnNetLocalPingResultInfo.ConnRate);
						
			socket.emit("RtnNetLocalPingResultInfoTopic CallbackData", pRtnNetLocalPingResultInfo);	
		}
		else{
			console.log("datatype of pRspInfo is: " + typeof(pRtnNetLocalPingResultInfo));
			console.log("pRtnNetLocalPingResultInfo is: " + pRtnNetLocalPingResultInfo);		
		}

		console.log("++++++++++++++++++++++ JS:  OnRtnNetLocalPingResultInfoTopic: END! ++++++++++++++++++++++ " + "\n");				
	}
	
	Spi.prototype.OnRtnSysTimeSyncTopic = function(pRtnSysTimeSync) {
		console.log("\n" + "++++++++++++++++++++++ JS: OnRtnSysTimeSyncTopic: START! ++++++++++++++++")
		
		if(pRtnSysTimeSync instanceof Object){
			console.log("pRtnSysTimeSync->MonDate: ", pRtnSysTimeSync.MonDate);
			console.log("pRtnSysTimeSync->MonTime: ", pRtnSysTimeSync.MonTime);  
			
			socket.emit("RtnSysTimeSyncTopic CallbackData", pRtnSysTimeSync);	
		}
		else{
			console.log("datatype of pRspInfo is: " + typeof(pRtnSysTimeSync));
			console.log("pRtnNetLocalPingResultInfo is: " + pRtnSysTimeSync);		
		}
		console.log("++++++++++++++++++++++ JS:  OnRtnSysTimeSyncTopic: END! ++++++++++++++++++++++ " + "\n");				
	}	
			
	console.log("ReqLogin result:" + userApi.ReqQrySysUserLoginTopic(loginField, nRequestID) + "\n");			
}

/************************************************ NetMonitorAttr *************************************************/ 
exports.ReqNetMonitorAttrScope = function(socket) {
	var netMonitorAttrerScopeField           = new structJs.CShfeFtdcReqQryNetMonitorAttrScopeField;
	netMonitorAttrerScopeField.OperationType = 0;
	netMonitorAttrerScopeField.ID            = 0;
	netMonitorAttrerScopeField.CName         = " ";
	netMonitorAttrerScopeField.EName         = " ";
	netMonitorAttrerScopeField.Comments      = " ";
	var netMonitorReqCalledTime              = 0;
	var nRequestID                           = 1;
	var ReqNetMonitorAttrScopeCallbackData   = [];
	var rspQryNetMonitorAttrScopeTopicFileData = "";
	
	Spi.prototype.OnRspQryNetMonitorAttrScopeTopic = function (pRspQryNetMonitorAttrScope, pRspInfo, nRequestID, bIsLast) {
		
		OutputMessage("\n************ JS::RspNetMonitorAttrScopeTopic: START! ***********"," ", fileData);		
		if (pRspQryNetMonitorAttrScope instanceof Object) {
			var tmpStr = "OperationType in JS is:     " + pRspQryNetMonitorAttrScope.OperationType.toString() + "\n" + 
							"ID in JS is:             " + pRspQryNetMonitorAttrScope.ID.toString() + "\n" + 
							"CName in JS is:          " + pRspQryNetMonitorAttrScope.CName.toString() + "\n" + 
							"EName in JS is:          " + pRspQryNetMonitorAttrScope.EName.toString() + "\n" + 
							"Comments in JS is:       " + pRspQryNetMonitorAttrScope.Comments.toString() + "\n";		
							
			console.log(tmpStr);
						
			rspQryNetMonitorAttrScopeTopicFileData += tmpStr;																						
			ReqNetMonitorAttrScopeCallbackData.push(pRspQryNetMonitorAttrScope);				
			netMonitorReqCalledTime++;		
		} else {
			OutputMessage("pRspQryNetMonitorAttrScope  is NULL;\n"," ", fileData);
		}
		
		if (true === bIsLast) {					
		
			socket.emit("ReqNetMonitorAttrScope CallbackData", ReqNetMonitorAttrScopeCallbackData);		
			
			if (0 !== ReqNetMonitorAttrScopeCallbackData.length) {
				netMonitorReqCalledTime = 0;						
				var pathName = "./";
				var fileName = "ReqNetMonitorAttrScope-Server-CallbackData.txt";	
				fs.writeFile(pathName + fileName, rspQryNetMonitorAttrScopeTopicFileData, 'EUC-CN', function(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('Succeed in saving ' + pathName + fileName);
					}	
				});
				
				rspQryNetMonitorAttrScopeTopicFileData = "";
				ReqNetMonitorAttrScopeCallbackData = [];					
			} else {
				console.log("emit the empty data!");	
			}										
		}
				
		OutputMessage("bIsLast in JS is:        " , bIsLast, fileData);
		OutputMessage("JS-netMonitorReqCalledTime: " ,  netMonitorReqCalledTime, fileData);
		OutputMessage("************ JS::RspNetMonitorAttrScopeTopic: END! *********** \n", " ",fileData);		
	}	
	
	console.log("ReqNetMonitorAttrScope result:" +  userApi.ReqQryNetMonitorAttrScopeTopic (netMonitorAttrerScopeField, nRequestID) + "\n");
}


/*************************************    ReqQryMonitorObjectTopic   **************************************/
exports.ReqQryMonitorObjectTopic = function(socket) {
	console.log("Server: ReqQryMonitorObjectTopic!!!!" );
	var monitorObjectField       = new structJs.CShfeFtdcReqQryMonitorObjectField;
	monitorObjectField.ObjectID  = " ";
	monitorObjectField.StartDate = " ";
	monitorObjectField.StartTime = " ";
	monitorObjectField.EndDate   = " ";
	monitorObjectField.EndTime   = " ";
	monitorObjectField.KeepAlive = 0;
	var monitorObjectCalledTime  = 0;
	var rspMonitorObjectFileData = "";
	var ReqQryMonitorObjectTopicCallbackData = [];
	
	Spi.prototype.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
		
	//	OutputMessage("\n************ JS::OnRspQryMonitorObjectTopic: START! ***********"," ", fileData);
		
		if (pRspQryMonitorObject instanceof Object) {		
			var tmpStr = "ObjectID in JS is:      " + pRspQryMonitorObject.ObjectID.toString() + "\n" + 
						"ObjectName in JS is:    " + pRspQryMonitorObject.ObjectName.toString() + "\n" + 
						"WarningActive in JS is: " + pRspQryMonitorObject.WarningActive.toString() + "\n";
									
			// console.log(tmpStr);
						
			rspMonitorObjectFileData += tmpStr;		
			ReqQryMonitorObjectTopicCallbackData.push(pRspQryMonitorObject)
			monitorObjectCalledTime++;												
		} else {
			console.log("pRspQryMonitorObject is NULL;\n");
		}
		
		if (true === bIsLast) {
			
			socket.emit('ReqQryMonitorObjectTopic CallbackData', ReqQryMonitorObjectTopicCallbackData);
					
			if (0 !== ReqQryMonitorObjectTopicCallbackData.length) {
				var pathName = "./";
				var fileName = "OnRspQryMonitorObjectTopic-Server-CallbackData.txt";
				
				fs.writeFile(pathName + fileName, rspMonitorObjectFileData, function(err) {
						if (err) {
							console.log(err);
						} else {
							console.log('Succeed in saving ' + pathName + fileName);
						}	
				});
				
				ReqQryMonitorObjectTopicCallbackData = [];
				rspMonitorObjectFileData = "";	
			} 				
		}	
		
		// OutputMessage("bIsLast in JS is:        " , bIsLast, fileData);
		// OutputMessage("JS-monitorObjectCalledTime: " ,  monitorObjectCalledTime++, fileData);
		// OutputMessage("************ JS::RspNetMonitorAttrScopeTopic: END! *********** \n", " ",fileData);	

	}
	
	userApi.ReqQryMonitorObjectTopic (monitorObjectField, 1);	

}

var OutputMessage = function (varName, varData,  fileData) {			
	console.log(varName + varData.toString());
}


