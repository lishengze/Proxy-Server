var addon    = require("./build/Release/addon");
var structJs = require("./SysUserApiStruct_JS.js");
var fs       = require('fs');
var Spi      = function(){};
var userApi  = new addon.FtdcSysUserApi_Wrapper();

var realTimeSystemPath = "tcp://172.1.128.165:18841";
var innerTestSystemPath = "tcp://172.1.128.111:18842";
var bConnectrealTimeSystemPath = true;
var bConnectinnerTestSystemPath = false;

if (true === bConnectrealTimeSystemPath) {
   userApi.RegisterFront(realTimeSystemPath);   
} 

if (true === bConnectinnerTestSystemPath) {
   userApi.RegisterFront(innerTestSystemPath);  
}
     
userApi.RegisterSpi(new Spi());
userApi.Init();

var loginReqNumbers          = 0;
var netMonitorReqNumbers     = 0;
var monitorObjectReqNumbers  = 0;
var bSubRtnObjectAttrTopic   = false;
var bunSubRtnObjectAttrTopic = false;
var pathName = "./";
var fileData;

process.on('beforeExit', function (code) {
	console.log('Nodejs, beforeExit: ' + code.toString());
});

process.on('exit', function (code) {
	console.log('Nodejs, exit: ' + code.toString());
});

console.log('>>>>>>>>>>>>>>>>>>>>> JS pid: ' + process.pid.toString() + ' <<<<<<<<<<<<<<<<<<<\n');

Spi.prototype.OnFrontConnected = function() {
	
    console.log('\n++++++++++++ JS FrontConnected START! +++++++++++++');    
        
	for (var i = 0; i < loginReqNumbers; ++i) {
		console.log("ReqQrySysUserLoginTopic  result:" + userApi.ReqQrySysUserLoginTopic(loginField[i], nRequestID++) + "\n");		
	}	
	
	for (var i = 0; i < netMonitorReqNumbers; ++i) {	
		console.log("NetMonitorAttrScopeTopic:  "+i.toString() +" result:" + 
	            userApi.ReqQryNetMonitorAttrScopeTopic (netMonitorAttrerScopeField, nRequestID++) + "\n");
	}
    
	for (var i = 0; i < monitorObjectReqNumbers; ++i) {	
			console.log("MonitorObjectTopic:  "+i.toString() +" result:" + 
					userApi.ReqQryMonitorObjectTopic (monitorObjectField, nRequestID++) + "\n");
	}
    	
	if (true === bunSubRtnObjectAttrTopic) {
		reqQrySubscriberField.KeepAlive = 0;	
		console.log("unSubRtnObjectAttrTopic result:" + userApi.ReqQrySubscriberTopic (reqQrySubscriberField, nRequestID++) + "\n");
	}	
    
    // console.log('userApi.Join();');
    // userApi.Join();

    console.log('++++++++++++ JS FrontConnected END! +++++++++++++\n'); 
}


///等待接口线程结束运行 , @return 线程退出代码
// Do it after all the requests!
// console.log('userApi.Join();');
// userApi.Join();

/*************************************************************  请求登陆 ********************************************************/
var nRequestID       = 1;

var ReqQrySysUserLoginTopicCallbackData = [];
var rspQrySysUserLoginTopicCalledTime   = 0;

var loginField = [];

loginField[0]           = new structJs.CShfeFtdcReqQrySysUserLoginField();
loginField[0].UserID    = "admin";
loginField[0].Password  = "admin";
loginField[0].VersionID = "2.0.0.0";


loginField[1]           = new structJs.CShfeFtdcReqQrySysUserLoginField();
loginField[1].UserID    = "test3333";
loginField[1].Password  = "123456";
loginField[1].VersionID = "2.0.0.0";

var SysUserLoginTopicfileName = "ReqQrySysUserLoginTopic-Test-CallbackData.txt";
Spi.prototype.OnRspQrySysUserLoginTopic = function(pRspQrySysUserLogin,pRspInfo,nRequestID,bIsLast)
{
		// console.log("\n" + "++++++++++++++++ JS OnRspQrySysUserLoginTopic: START! ++++++++++++++++++")
		// if (pRspQrySysUserLogin instanceof Object) {
		// 	console.log("LoginTime in JS is:                 " + pRspQrySysUserLogin.LoginTime); 
		// 	console.log("UserID in JS is:                    " + pRspQrySysUserLogin.UserID);
		// 	console.log("Privilege in JS is:                 " + pRspQrySysUserLogin.Privilege);
		// 	console.log("TradingDay in JS is:                " + pRspQrySysUserLogin.TradingDay);
		// 	console.log("VersionFlag in JS is:               " + pRspQrySysUserLogin.VersionFlag);	
		// 	console.log("rspQrySysUserLoginTopicCalledTime in JS is:     " + rspQrySysUserLoginTopicCalledTime++);	
			
		// 	ReqQrySysUserLoginTopicCallbackData.push(pRspQrySysUserLogin);
		// }
					
		// if (true === bIsLast) {
			
		// 	fs.writeFile(pathName + SysUserLoginTopicfileName, ReqQrySysUserLoginTopicCallbackData, function(err) {
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log('Succeed in saving ' + pathName + SysUserLoginTopicfileName);
		// 		}	
		// 	});
						
		// 	ReqQrySysUserLoginTopicCallbackData = [];		
		// }
		
		// if(pRspInfo instanceof Object){
		// console.log("ErrorID in JS is: "+pRspInfo.ErrorID);
		// console.log("ErrorMsg in JS is: "+pRspInfo.ErrorMsg);
		// }
		// else{
		// 	console.log("datatype of pRspInfo is: "+typeof(pRspInfo));
		// 	console.log("pRspInfo is: "+pRspInfo);		
		// }
		
		// console.log("nRequestID in JS is: "+nRequestID);
		// console.log("nIsLastNew in JS is: "+bIsLast);
		// console.log("************** OnRspQrySysUserLoginTopic: END! *************" + "\n");
}

Spi.prototype.RtnFrontInfoTopic = function(pRtnFrontInfo) {
    console.log("\n++++++++++++++++++++++ JS: RtnFrontInfoTopic: START! ++++++++++++++++")
    var callbackDataStr = "";
    if (pRtnFrontInfo instanceof Object){
            
        callbackDataStr += "pRtnFrontInfo->MonDate: " + pRtnFrontInfo.MonDate.toString()
                        +  "pRtnFrontInfo->MonTime: " + pRtnFrontInfo.MonTime.toString()
                        +  "pRtnFrontInfo->FrontId: " + pRtnFrontInfo.FrontId.toString()
                        +  "pRtnFrontInfo->RspCondition: " + pRtnFrontInfo.RspCondition.toString()
                        +  "pRtnFrontInfo->ReqCount: " + pRtnFrontInfo.ReqCount.toString()
                        +  "pRtnFrontInfo->ReqRate: " + pRtnFrontInfo.ReqRate;
    } else {
        callbackDataStr += "pRtnFrontInfo is NULL!";
    }
    console.log("++++++++++++++++++++++ JS: RtnFrontInfoTopic: END! ++++++++++++++++\n")
}

var RtnNetLocalPingResultInfoTopicfileName = "RtnNetLocalPingResultInfoTopic-test-callbackData.txt";

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
			
			// fs.appendFileSync(pathName + RtnNetLocalPingResultInfoTopicfileName, pRtnNetLocalPingResultInfo, function(err) {
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 	// 	console.log('Succeed in saving ' + pathName + RtnNetLocalPingResultInfoTopicfileName);
			// 	}	
			// });
		}
		else{
			console.log("datatype of pRspInfo is: " + typeof(pRtnNetLocalPingResultInfo));
			console.log("pRtnNetLocalPingResultInfo is: " + pRtnNetLocalPingResultInfo);		
		}

		console.log("++++++++++++++++++++++ JS:  OnRtnNetLocalPingResultInfoTopic: END! ++++++++++++++++++++++ " + "\n");				
	}

var RtnSysTimeSyncTopicfileName = "RtnSysTimeSyncTopic-test-callbackData.txt";	
	Spi.prototype.OnRtnSysTimeSyncTopic = function(pRtnSysTimeSync) {
		console.log("\n" + "++++++++++++++++++++++ JS: OnRtnSysTimeSyncTopic: START! ++++++++++++++++")
		
		if(pRtnSysTimeSync instanceof Object){
			console.log("pRtnSysTimeSync->MonDate: ", pRtnSysTimeSync.MonDate);
			console.log("pRtnSysTimeSync->MonTime: ", pRtnSysTimeSync.MonTime);  
			
			// fs.appendFileSync(pathName + RtnSysTimeSyncTopicfileName, pRtnSysTimeSync, function(err) {
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 	// 	console.log('Succeed in saving ' + pathName + RtnNetLocalPingResultInfoTopicfileName);
			// 	}	
			// });
						
		}
		else{
			console.log("datatype of pRspInfo is: " + typeof(pRtnSysTimeSync));
			console.log("pRtnNetLocalPingResultInfo is: " + pRtnSysTimeSync);		
		}
		console.log("++++++++++++++++++++++ JS:  OnRtnSysTimeSyncTopic: END! ++++++++++++++++++++++ " + "\n");				
	}	
	
/************************************************ NetMonitorAttr *************************************************/ 
var netMonitorAttrerScopeField           = new structJs.CShfeFtdcReqQryNetMonitorAttrScopeField;
netMonitorAttrerScopeField.OperationType = 0;
netMonitorAttrerScopeField.ID            = 0;
netMonitorAttrerScopeField.CName         = " ";
netMonitorAttrerScopeField.EName         = " ";
netMonitorAttrerScopeField.Comments      = " ";
var netMonitorReqCalledTime              = 0;
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
											
	} else {
		OutputMessage("pRspQryNetMonitorAttrScope  is NULL;\n"," ", fileData);
	}
	
	if (true === bIsLast) {
		var pathName = "./";
		var fileName = "OnRspQryNetMonitorAttrScopeTopic-Test-CallbackData.txt";
		fs.writeFile(pathName + fileName, rspQryNetMonitorAttrScopeTopicFileData, function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('Succeed in saving ' + pathName + fileName);
				}	
		});
		rspQryNetMonitorAttrScopeTopicFileData = "";
					
	}
			
	OutputMessage("bIsLast in JS is:        " , bIsLast, fileData);
	OutputMessage("JS-netMonitorReqCalledTime: " ,  netMonitorReqCalledTime++, fileData);
	OutputMessage("************ JS::RspNetMonitorAttrScopeTopic: END! *********** \n", " ",fileData);		
}
	
// var intervalTime = 5;
// setInterval(function(){
// 	var i = 0;
// 	console.log("-------------ReqMem result: " 
// 				+ userApi.ReqQryNetMonitorAttrScopeTopic (netMonitorAttrerScopeField, nRequestID) 
// 				+ "----------------\n");	
// 	console.log("+++++++++++++++++++++++++ I: " + i.toString() + " ++++++++++++++++++++++");
// 	i++;	
// } , intervalTime);

/*************************************    ReqQryMonitorObjectTopic   **************************************/
var monitorObjectField       = new structJs.CShfeFtdcReqQryMonitorObjectField;
monitorObjectField.ObjectID  = " ";
monitorObjectField.StartDate = " ";
monitorObjectField.StartTime = " ";
monitorObjectField.EndDate   = " ";
monitorObjectField.EndTime   = " ";
monitorObjectField.KeepAlive = 0;
var monitorObjectCalledTime  = 0;
var rspMonitorObjectFileData = "";

Spi.prototype.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
	
//	OutputMessage("\n************ JS::OnRspQryMonitorObjectTopic: START! ***********"," ", fileData);
	
	if (pRspQryMonitorObject instanceof Object) {		
		var tmpStr = "ObjectID in JS is:      " + pRspQryMonitorObject.ObjectID.toString() + "\n" + 
			         "ObjectName in JS is:    " + pRspQryMonitorObject.ObjectName.toString() + "\n" + 
					 "WarningActive in JS is: " + pRspQryMonitorObject.WarningActive.toString() + "\n";
								
		// console.log(tmpStr);
					
		rspMonitorObjectFileData += tmpStr;		
											
	} else {
		OutputMessage("pRspQryMonitorObject is NULL;\n"," ", fileData);
	}
	
	if (true === bIsLast) {
		var pathName = "./";
		var fileName = "OnRspQryMonitorObjectTopic-Test-CallbackData.txt";
		fs.writeFile(pathName + fileName, rspMonitorObjectFileData, function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log('Succeed in saving ' + pathName + fileName);
				}	
		});
		rspMonitorObjectFileData = "";
					
	}
			
	// OutputMessage("bIsLast in JS is:        " , bIsLast, fileData);
	// OutputMessage("JS-monitorObjectCalledTime: " ,  monitorObjectCalledTime++, fileData);
//	OutputMessage("************ JS::RspNetMonitorAttrScopeTopic: END! *********** \n", " ",fileData);		
}

/******************************************* 订阅请求 *****************************************************/
/*
//监控内�?��?�阅请求
struct CShfeFtdcReqQrySubscriberField
{
	///订阅对象��?
	TShfeFtdcTypeSubcriberObjectIDType	ObjectID;
	///初�?�返回�?�象��?, 默�?�为0;
	TShfeFtdcVolumeType	ObjectNum;
	///持续订阅标�??, 1 订阅��? 2 取消订阅;
	TShfeFtdcTypeKeepAliveType	KeepAlive;
	///返回的初始日��? 默�?�为��?
	TShfeFtdcDateType	MonDate;
	///返回的初始时��? 默�?�为��?;
	TShfeFtdcTimeType	MonTime;
};

TShfeFtdcTypeSubcriberObjectIDType szObjID;
CString strTest = _T("PuDian.Test.T-MN3750-B1_1B2_1-2M501.cpmCPUTotal1minRev");
lstrcpyA(szObjID, CT2A(strTest));
SubRtnObjectAttrTopic(szObjID);

*/

// RtnObjectAttrTopic: 对象状态指标查询应��?;
var reqQrySubscriberField = new structJs.CShfeFtdcReqQrySubscriberField;
reqQrySubscriberField.TShfeFtdcTypeSubcriberObjectIDType = "PuDian.Test.T-MN3750-B1_1B2_1-2M501.cpmCPUTotal1minRev";
reqQrySubscriberField.ObjectNum = 3;
reqQrySubscriberField.MonDate   = "";
reqQrySubscriberField.MonTime   = "";

if (true === bSubRtnObjectAttrTopic) {
	reqQrySubscriberField.KeepAlive = 1;	
	Spi.prototype.OnRtnObjectAttrTopic = function (pRtnObjectAttr) {
		
		console.log("\n +++++++++++++++++++ JS OnRtnObjectAttrTopic:START! +++++++++++++++++++++++++++++");
		if (pRtnObjectAttr instanceof Object) {
		    console.log("pRtnObjectAttr->ObjectID: ", pRtnObjectAttr.ObjectID);
			console.log("pRtnObjectAttr->AttrType: ", pRtnObjectAttr.AttrType);
			console.log("pRtnObjectAttr->MonDate: ", pRtnObjectAttr.MonDate);
			console.log("pRtnObjectAttr->MonTime: ", pRtnObjectAttr.MonTime);
			console.log("pRtnObjectAttr->ValueType: ", pRtnObjectAttr.ValueType);
			console.log("pRtnObjectAttr->AttrValue: ", pRtnObjectAttr.AttrValue);			
		}
		console.log("+++++++++++++++++++ JS OnRtnObjectAttrTopic: END! +++++++++++++++++++++++++++++\n");			
	} 
	
	console.log("SubRtnObjectAttrTopic result:" + userApi.ReqQrySubscriberTopic (reqQrySubscriberField, nRequestID) + "\n");
}



/***************************************************** 订阅请求 ************************************************************/

var OutputMessage = function (varName, varData,  fileData) {		
	console.log(varName + varData.toString());
}





