/**
 * Created by li.shengze on 2015/1/28.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*#ifndef FTDCSYSUSERAPI_WRAPPER_H
#define FTDCSYSUSERAPI_WRAPPER_H

#include <nan.h>
#include "FtdcSysUserApi.h"
#include "sysuserspi.h"

class FtdcSysUserApi_Wrapper : public Nan::ObjectWrap{
 public:
     static void InitExports(v8::Handle<v8::Object> exports);

 public:
     explicit FtdcSysUserApi_Wrapper(const char *pszFlowPath);
     ~FtdcSysUserApi_Wrapper();
  
     static Nan::Persistent<v8::Function> constructor;
     CShfeFtdcSysUserApi* m_userApi;
     SysUserSpi* m_spi;

     static NAN_METHOD(New);
     static NAN_METHOD(Release);
     static NAN_METHOD(Init);
     static NAN_METHOD(Join);

     static NAN_METHOD(ReqUserLogin);
     static NAN_METHOD(ReqQrySysUserLoginTopic);
     static NAN_METHOD(GetTradingDay);
     static NAN_METHOD(RegisterFront);
     static NAN_METHOD(RegisterSpi);
     static NAN_METHOD(SubscribeMarketDataTopic);
     static NAN_METHOD(SubscribePartAccount);

*/});
var jsonContent=require("./package.json");

var IntLength=jsonContent.FTD.types[0].Int.length;
var stringLength=jsonContent.FTD.types[0].String.length;
var vstringLength=jsonContent.FTD.types[0].VString.length;
var RangeIntLength=jsonContent.FTD.types[0].RangeInt.length;
var EnumCharLength=jsonContent.FTD.types[0].EnumChar.length;
var fixNumberLength=jsonContent.FTD.types[0].FixNumber.length;
var ArrayLength=jsonContent.FTD.types[0].Array.length;
var Floatlength=jsonContent.FTD.types[0].Float.length;
var CharLength=jsonContent.FTD.types[0].Char.length;
var WordLength=jsonContent.FTD.types[0].Word.length;
var QWordLength=jsonContent.FTD.types[0].QWord.length;
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
    var strName = jsonContent.FTD.packages[0].package[i].$.name;
    if (strName !== "ReqQrySysUserLoginTopic"&&strName.substring(0, 3) === "Req" &&
        strName.substring(strName.length - 5, strName.length) == "Topic" &&
        strName!=="ReqQryNetMemberSDHLineInfoTopic"&&
        strName!=="ReqQryVMInfoTopic"&&
        strName!=="ReqQryTradeDayChangeTopic"&&
        strName!=="ReqQryPropertyInfoTopic"&&strName!=="ReqQryMemPoolInfoTopic"&&
        strName!=="ReqQryFileContentInfoTopic"&&
        strName!=="ReqQryConnectionInfoTopic"&& strName!=="ReqQryConnectorInfoTopic"&&
        strName!=="ReqQryNetFuncAreaTopic"&& strName!=="ReqQryNetMonitorCommandTypeTopic"&&
        strName!=="ReqQryNetMonitorActionGroupTopic"&& strName!=="ReqQryNetEventExprTopic"&&
        strName!=="ReqQryNetEventTypeTopic"&& strName!=="ReqQryNetSubEventTypeTopic"&&
        strName!=="ReqQryNetEventLevelTopic"&& strName!=="ReqSysServerExitTopic"&&
        strName!=="ReqQryNetMonitorTaskInstAttrsTopic"&& strName!=="ReqQryNetBaseLineTaskTopic"&&
        strName!=="ReqQryNetMemberSDHLineInfoTopic"&& strName!=="ReqQryNetDDNLinkInfoTopic"&&
        strName!=="ReqQryNetPseudMemberLinkInfoTopic"&& strName!=="ReqQryOuterDeviceInfTopic"&&
        strName!=="ReqQrySysInternalTopologyTopic"&& strName!=="ReqQryMemberLinkCostTopic"&&
        strName!=="ReqQryNetPartylinkMonthlyRentTopic"&&fileData!="ReqQryClientLoginTopic"&&
        strName!=="ReqQryClientLoginTopic"&&strName!=="ReqQryCPUUsageTopic"&&
        strName!=="ReqQryMemoryUsageTopic"&&strName!=="ReqQryDiskUsageTopic"&&
        strName!=="ReqQryKeyFileInfoTopic"&&strName!=="ReqQryHostMonitorCfgTopic"&&
        strName!=="ReqQryAppMonitorCfgTopic"
        )
        fileData+="     static NAN_METHOD("+jsonContent.FTD.packages[0].package[i].$.name+");\n";
}

fileData+="};\n\n";

fileData+="#endif";

var pathName = '../new file/';
var fileName = 'ftdcsysuserapi-wrapper.h';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});