/**
 * Created by li.xiankui on 2015/8/24.
 */
//生成FtdcSysUserApi_Wrapper.cc文件
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData= hereDoc(function () {
/*#include <nan.h>
#include "ftdcsysuserapi-wrapper.h"
#include "FtdcSysUserApiStruct.h"
#include "sysuserspi.h"
#include "tool-function.h"
#include "id-func.h"
#include "CCrypto.h"
#include <string.h>

using namespace v8;

extern fstream g_RunningResult_File;

Nan::Persistent<Function> FtdcSysUserApi_Wrapper::constructor;

FtdcSysUserApi_Wrapper::FtdcSysUserApi_Wrapper(const char *pszFlowPath)
{
    m_userApi = CShfeFtdcSysUserApi::CreateFtdcSysUserApi(pszFlowPath);
    m_spi = new SysUserSpi();
    if (NULL == m_spi) {
       OutputCallbackMessage("FtdcSysUserApi_Wrapper::FtdcSysUserApi_Wrapper:: m_spi is NULL", g_RunningResult_File);
       return;
    }
}

FtdcSysUserApi_Wrapper::~FtdcSysUserApi_Wrapper() {
    m_userApi->Release();
    
    if (NULL != m_spi) {
        delete m_spi;
        m_spi = NULL;
    }
    
    g_RunningResult_File.close();
*/
});
    
var jsonContent=require("./package.json");
var Packagelength=jsonContent.FTD.packages[0].package.length;
var beforeRspQryTopCpuInfoTopic=0;
while(jsonContent.FTD.packages[0].package[beforeRspQryTopCpuInfoTopic].$.name!=="RspQryTopCpuInfoTopic"){
    beforeRspQryTopCpuInfoTopic++;
}
var AfterRtnNetNonPartyLinkInfoTopic=0;
while(jsonContent.FTD.packages[0].package[AfterRtnNetNonPartyLinkInfoTopic].$.name!=="RtnNetNonPartyLinkInfoTopic"){
    AfterRtnNetNonPartyLinkInfoTopic++;
}
AfterRtnNetNonPartyLinkInfoTopic++;

fileData+=hereDoc(function(){
/*}

 void FtdcSysUserApi_Wrapper::InitExports(Handle<Object> exports) {
 Nan::HandleScope scope;

 // Prepare constructor template
 Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(New);
 tpl->SetClassName(Nan::New<v8::String>("FtdcSysUserApi_Wrapper").ToLocalChecked());
 tpl->InstanceTemplate()->SetInternalFieldCount(1);

 // Prototype
 //NODE_SET_PROTOTYPE_METHOD(tpl, "Init", Init);
 Nan::SetPrototypeMethod(tpl,"Release",Release);
 Nan::SetPrototypeMethod(tpl,"Init",Init);
 Nan::SetPrototypeMethod(tpl,"Join",Join);
 Nan::SetPrototypeMethod(tpl,"GetTradingDay",GetTradingDay);
 Nan::SetPrototypeMethod(tpl,"RegisterFront",RegisterFront);
 Nan::SetPrototypeMethod(tpl,"RegisterSpi",RegisterSpi);
 Nan::SetPrototypeMethod(tpl,"ReqQrySysUserLoginTopic",ReqQrySysUserLoginTopic);

*/});

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
        fileData+=' Nan::SetPrototypeMethod(tpl,"'+jsonContent.FTD.packages[0].package[i].$.name+'",'+jsonContent.FTD.packages[0].package[i].$.name+');\n';
}
fileData+=hereDoc(function(){/*
 constructor.Reset(tpl->GetFunction());
 //NanAssignPersistent(constructor, tpl->GetFunction());
 exports->Set(Nan::New("FtdcSysUserApi_Wrapper").ToLocalChecked(), tpl->GetFunction());
}

NAN_METHOD (FtdcSysUserApi_Wrapper::New) {
    if (info.IsConstructCall()) {
        // Invoked as constructor: `new FtdcSysUserApi_Wrapper(...)`
        Local<String> fileData= info[0]->IsUndefined() ? Nan::EmptyString()  : info[0]->ToString();
        String::Utf8Value utf8Str(fileData);
        FtdcSysUserApi_Wrapper* obj = new FtdcSysUserApi_Wrapper(*utf8Str);
        obj->Wrap(info.This());
        info.GetReturnValue().Set(info.This());
    } else {
        // Invoked as plain function `FtdcSysUserApi_Wrapper(...)`, turn into construct call.
        const int argc = 1;
        Local<Value> argv[argc] = { info[0] };
        Local<Function> cons = Nan::New<Function>(constructor);
        info.GetReturnValue().Set(cons->NewInstance(argc, argv));
    }
}

NAN_METHOD (FtdcSysUserApi_Wrapper::Release) {
    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
    obj->m_userApi->Release();
    info.GetReturnValue().SetUndefined();
}

NAN_METHOD (FtdcSysUserApi_Wrapper::Init) {
    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
    obj->m_userApi->Init();
    info.GetReturnValue().SetUndefined();
}

NAN_METHOD (FtdcSysUserApi_Wrapper::Join) {
    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
    int result=obj->m_userApi->Join();
    info.GetReturnValue().Set(Nan::New<v8::Int32>(result));
}

NAN_METHOD (FtdcSysUserApi_Wrapper::GetTradingDay) {
    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
    const char* result=obj->m_userApi->GetTradingDay();
    info.GetReturnValue().Set(Nan::New<v8::String>(result).ToLocalChecked());
}

NAN_METHOD (FtdcSysUserApi_Wrapper::RegisterFront) {
    Local<String> fileData= info[0]->IsUndefined() ? Nan::EmptyString()  : info[0]->ToString();
    String::Utf8Value utf8Str(fileData);

    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());

    obj->m_userApi->RegisterFront(*utf8Str);

    info.GetReturnValue().SetUndefined();
}

int g_idnumb = 0;
NAN_METHOD (FtdcSysUserApi_Wrapper::RegisterSpi) {
    std::cout<<"RegisterSpi Called!"<<std::endl;
    FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
    if(info[0]->IsObject())
    {
        //obj->m_spi=new SysUserSpi(Nan::To<v8::Object>(info[0]).ToLocalChecked());
        //obj->m_userApi->RegisterSpi(obj->m_spi);
        
        obj->m_spi->m_spiobj.Reset(Nan::To<v8::Object>(info[0]).ToLocalChecked());
        // obj->m_spi->m_frontid = GetFrontID();
        obj->m_spi->m_frontid = ++g_idnumb;
        obj->m_userApi->RegisterSpi(obj->m_spi);
    }
    info.GetReturnValue().SetUndefined();
}

NAN_METHOD (FtdcSysUserApi_Wrapper::ReqUserLogin) {
     std::cout<<"ReqUserLogin Called!"<<std::endl;
     FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
     if(!(info[0]->IsObject() && info[1]->IsNumber()))
     {
     Nan::ThrowError("wrong parameter!");
     }
     //convert parameter one
     v8::Local<v8::Object> paramOne=Nan::To<v8::Object>(info[0]).ToLocalChecked();
     CShfeFtdcReqUserLoginField field;
     //TradingDay
     v8::Local<v8::Object> paramOneTradingDayObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("TradingDay").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOneTradingDayStr(Nan::To<v8::String>(paramOneTradingDayObj).ToLocalChecked());
     // strcpy_s(field.TradingDay, 9, *paramOneTradingDayStr);
     strncpy(field.TradingDay, *paramOneTradingDayStr,9);
     //UserID
     v8::Local<v8::Object> paramOneUserIDObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("UserID").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOneUserIDStr(Nan::To<v8::String>(paramOneUserIDObj).ToLocalChecked());
     // strcpy_s(field.UserID, 16, *paramOneUserIDStr);
     strncpy(field.UserID, *paramOneUserIDStr, 16);
     //ParticipantID
     v8::Local<v8::Object> paramOneParticipantIDObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("ParticipantID").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOneParticipantIDStr(Nan::To<v8::String>(paramOneParticipantIDObj).ToLocalChecked());
     // strcpy_s(field.ParticipantID, 11, *paramOneUserIDStr);
     strncpy(field.ParticipantID, *paramOneUserIDStr, 11);
     //Password
     v8::Local<v8::Object> paramOnePasswordObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("Password").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOnePasswordStr(Nan::To<v8::String>(paramOnePasswordObj).ToLocalChecked());
     // strcpy_s(field.Password, 41, *paramOnePasswordStr);
     strncpy(field.Password, *paramOnePasswordStr, 41);
     //convert parameter two
     v8::Local<v8::Integer> paramTwo=Nan::To<v8::Integer>(info[1]).ToLocalChecked();
     int nRequestID = (int)paramTwo->Value();

     //call natvie method
     double returnValue= obj->m_userApi->ReqUserLogin(&field, nRequestID);

     info.GetReturnValue().Set(Nan::New<v8::Number>(returnValue));
}
     
NAN_METHOD (FtdcSysUserApi_Wrapper::ReqQrySysUserLoginTopic) {
     std::cout<<"ReqQrySysUserLoginTopic Called!"<<std::endl;
     FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());
     if(!(info[0]->IsObject() && info[1]->IsNumber()))
     {
     Nan::ThrowError("wrong parameter!");
     }
     //convert parameter one
     v8::Local<v8::Object> paramOne=Nan::To<v8::Object>(info[0]).ToLocalChecked();
     CShfeFtdcReqQrySysUserLoginField field;
     //UserID
     v8::Local<v8::Object> paramOneUserIDObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("UserID").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOneUserIDStr(Nan::To<v8::String>(paramOneUserIDObj).ToLocalChecked());
     // strcpy_s(field.UserID, 16, *paramOneUserIDStr);
     strncpy(field.UserID, *paramOneUserIDStr, 16);
     std::cout<<*paramOneUserIDStr<<std::endl;
     //Password
     v8::Local<v8::Object> paramOnePasswordObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("Password").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOnePasswordStr(Nan::To<v8::String>(paramOnePasswordObj).ToLocalChecked());
     //encrypt password
     CDesEncryptAlgorithm DesEncrypt;
     DesEncrypt.SetPassword("monitor");
     char encryptedPassword[256] = {0};
     DesEncrypt.Encrypt(*paramOnePasswordStr, encryptedPassword);
     // strcpy_s(field.Password, 41, encryptedPassword);
     strncpy(field.Password, encryptedPassword, 41);
     std::cout<<encryptedPassword<<std::endl;
     //VersionID
     v8::Local<v8::Object> paramOneVersionIDObj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("VersionID").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();
     v8::String::Utf8Value paramOneVersionIDStr(Nan::To<v8::String>(paramOneVersionIDObj).ToLocalChecked());
     // strcpy_s(field.VersionID, 17, *paramOneVersionIDStr);
     strncpy(field.VersionID, *paramOneVersionIDStr, 17);
     std::cout<<*paramOneVersionIDStr<<std::endl;
     //convert parameter two
     v8::Local<v8::Integer> paramTwo=Nan::To<v8::Integer>(info[1]).ToLocalChecked();
     int nRequestID=(int)paramTwo->Value();

     //call natvie method
     double returnValue= obj->m_userApi->ReqQrySysUserLoginTopic(&field, nRequestID);

     info.GetReturnValue().Set(Nan::New<v8::Number>(returnValue));
 }
*/
});

var maxTypeLength = 0;
                
var NoneType=0;//测试无类型数��?
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
        ) {//取开头为Req结尾为Topic的package

        fileData+= "\nNAN_METHOD (FtdcSysUserApi_Wrapper::" + strName + ") {\n";
        fileData+= '  std::cout<<"' + strName + ' Called!"<<std::endl;\n';
        fileData+= "  FtdcSysUserApi_Wrapper* obj = ObjectWrap::Unwrap<FtdcSysUserApi_Wrapper>(info.Holder());\n";
        fileData+= "  if(!(info[0]->IsObject() && info[1]->IsNumber()))\n";
        fileData+= "  {\n";
        fileData+= '   Nan::ThrowError("wrong parameter!");\n';
        fileData+= "  }\n";
        fileData+= "  //convert parameter one\n";
        fileData+= "  v8::Local<v8::Object> paramOne=Nan::To<v8::Object>(info[0]).ToLocalChecked();\n";
        fileData+= "  CShfeFtdc" + jsonContent.FTD.packages[0].package[i].field[0].$.name + "Field field;\n\n";
        

        var fieldDefineLength = jsonContent.FTD.fields[0].fieldDefine.length;
        for (var j = 0; j < fieldDefineLength; j++) {
            if (jsonContent.FTD.fields[0].fieldDefine[j].$.name === jsonContent.FTD.packages[0].package[i].field[0].$.name) {
                var itemLength = jsonContent.FTD.fields[0].fieldDefine[j].item.length;
                for (var k = 0; k < itemLength; k++) {
                    var itemName = jsonContent.FTD.fields[0].fieldDefine[j].item[k].$.name;
                    var itemType = jsonContent.FTD.fields[0].fieldDefine[j].item[k].$.type.substring(1, jsonContent.FTD.fields[0].fieldDefine[j].item[k].$.type.length - 4);
                    fileData+= " //" + itemName + "\n";
                    var TypeLength = 0;

                    for (var w = 0; w < IntLength; w++) {
                        if (jsonContent.FTD.types[0].Int[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                    for (var w = 0; w < stringLength; w++) {
                        if (jsonContent.FTD.types[0].String[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= '  v8::String::Utf8Value paramOne' + itemName + 'fileData(Nan::To<v8::String>(paramOne' + itemName +
                                'Obj).ToLocalChecked());\n';
                            TypeLength = parseInt(jsonContent.FTD.types[0].String[w].$.length) + 1;
                            
                            // console.log(typeof jsonContent.FTD.types[0].String[w].$.length);
                            
                            if (maxTypeLength < TypeLength) {
                                maxTypeLength = TypeLength;
                            }
                            
                            // fileData+= "  strcpy_s(field." + itemName + "," + TypeLength + ",*paramOne" + itemName + "fileData);\n\n";
                            
                            fileData+= "  strncpy(field." + itemName + ", *paramOne" + itemName + "fileData, " + TypeLength + ");\n\n";

                        }
                    }
                    for (var w = 0; w < vstringLength; w++) {
                        if (jsonContent.FTD.types[0].VString[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= '  v8::String::Utf8Value paramOne' + itemName + 'fileData(Nan::To<v8::String>(paramOne' + itemName +
                                'Obj).ToLocalChecked());\n';
                            TypeLength = parseInt(jsonContent.FTD.types[0].VString[w].$.length) + 1;
                            
                            if (maxTypeLength < TypeLength) {
                                maxTypeLength = TypeLength;
                            }                            
                            
                            // fileData+= "  strcpy_s(field." + itemName + "," + TypeLength + ",*paramOne" + itemName + "fileData);\n\n";
                            fileData+= "  strncpy(field." + itemName + ", *paramOne" + itemName + "fileData, " + TypeLength + ");\n\n";
                        }
                    }

                    for (var w = 0; w < RangeIntLength; w++) {
                        if (jsonContent.FTD.types[0].RangeInt[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                    for (var w = 0; w < EnumCharLength; w++) {
                        if (jsonContent.FTD.types[0].EnumChar[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value()-48;\n\n";
                        }
                    }
                    for (var w = 0; w < fixNumberLength; w++) {
                        if (jsonContent.FTD.types[0].FixNumber[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Number> paramOne" + itemName + "fileData=Nan::To<v8::Number>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                    for (var w = 0; w < ArrayLength; w++) {
                        if (jsonContent.FTD.types[0].Array[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= '  v8::String::Utf8Value paramOne' + itemName + 'fileData(Nan::To<v8::String>(paramOne' + itemName +
                                'Obj).ToLocalChecked());\n';
                            TypeLength = parseInt(jsonContent.FTD.types[0].Array[w].$.length) + 1;
                            
                            if (maxTypeLength < TypeLength) {
                                maxTypeLength = TypeLength;
                            }                         
                            
                            // fileData+= "  strcpy_s(field." + itemName + "," + TypeLength + ",*paramOne" + itemName + "fileData);\n\n";
                            fileData+= "  strncpy(field." + itemName + ", *paramOne" + itemName + "fileData, " + TypeLength + ");\n\n";

                        }
                    }
                    for (var w = 0; w < Floatlength; w++) {
                        if (jsonContent.FTD.types[0].Float[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Number> paramOne" + itemName + "fileData=Nan::To<v8::Number>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                    for (var w = 0; w < CharLength; w++) {
                        if (jsonContent.FTD.types[0].Char[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value()-48;\n\n";
                        }
                    }
                    for (var w = 0; w < WordLength; w++) {
                        if (jsonContent.FTD.types[0].Word[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                    for (var w = 0; w < QWordLength; w++) {
                        if (jsonContent.FTD.types[0].QWord[w].$.typename === itemType) {
                            fileData+= '  v8::Local<v8::Object> paramOne' + itemName +
                                'Obj=Nan::To<v8::Object>( Nan::Get(paramOne,Nan::New<v8::String>("' +
                                itemName + '").ToLocalChecked()).ToLocalChecked() ).ToLocalChecked();\n';
                            fileData+= "  v8::Local<v8::Integer> paramOne" + itemName + "fileData=Nan::To<v8::Integer>( paramOne"+itemName+"Obj).ToLocalChecked();\n";
                            fileData+= "  field." + itemName + "=paramOne" + itemName + "fileData->Value();\n\n";
                        }
                    }
                   }

                    fileData+= "  //convert parameter two\n";
                    fileData+= "  v8::Local<v8::Integer> paramTwo=Nan::To<v8::Integer>(info[1]).ToLocalChecked();\n";
                    fileData+= "  int nRequestID=(int)paramTwo->Value();\n\n";
                    fileData+= "  //call native method\n";
                    fileData+= "  double returnValue= obj->m_userApi->" + jsonContent.FTD.packages[0].package[i].$.name +
                        "(&field, nRequestID);\n\n";
                    fileData+= "  info.GetReturnValue().Set(Nan::New<v8::Number>(returnValue));\n";
                    fileData+= "}\n";
                }//end name==
            }//end j
        }//end ="Req"

}

console.log("maxTypeLength: " +  maxTypeLength);

// function getTypeLength(itemType){
// //    var IntLength=jsonContent.FTD.types[0].Int.length;
// //    var stringLength=jsonContent.FTD.types[0].String.length;
// //    var vstringLength=jsonContent.FTD.types[0].VString.length;
// //    var RangeIntLength=jsonContent.FTD.types[0].RangeInt.length;
// //    var EnumCharLength=jsonContent.FTD.types[0].EnumChar.length;
// //    var fixNumberLength=jsonContent.FTD.types[0].FixNumber.length;
// //    var ArrayLength=jsonContent.FTD.types[0].Array.length;
// //    var Floatlength=jsonContent.FTD.types[0].Float.length;
// //    var CharLength=jsonContent.FTD.types[0].Char.length;
// //    var WordLength=jsonContent.FTD.types[0].Word.length;
// //    var QWordLength=jsonContent.FTD.types[0].QWord.length;
//     for(var i=0;i<IntLength;i++) {
//         if (jsonContent.FTD.types[0].Int[i].$.typename === itemType) {
//           return 1;
//         }
//     }
//     for(var i=0;i<stringLength;i++) {
//         if (jsonContent.FTD.types[0].String[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].String[i].$.length+1;
//         }
//     }
//     for(var i=0;i<vstringLength;i++) {
//         if (jsonContent.FTD.types[0].VString[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].VString[i].$.length+1;
//         }
//     }

//     for(var i=0;i<RangeIntLength;i++) {
//         if (jsonContent.FTD.types[0].RangeInt[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].RangeInt[i].$.length+1;
//         }
//     }
//     for(var i=0;i<EnumCharLength;i++) {
//         if (jsonContent.FTD.types[0].EnumChar[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<fixNumberLength;i++) {
//         if (jsonContent.FTD.types[0].FixNumber[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<ArrayLength;i++) {
//         if (jsonContent.FTD.types[0].Array[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].Array[i].$.length+1;
//         }
//     }
//     for(var i=0;i<Floatlength;i++) {
//         if (jsonContent.FTD.types[0].Float[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<CharLength;i++) {
//         if (jsonContent.FTD.types[0].Char[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<WordLength;i++) {
//         if (jsonContent.FTD.types[0].Word[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<QWordLength;i++) {
//         if (jsonContent.FTD.types[0].QWord[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     NoneType++;
//     return 100;


// }

// function getTypeLength(itemType){
//     var IntLength=jsonContent.FTD.types[0].Int.length;
//     var stringLength=jsonContent.FTD.types[0].String.length;
//     var vstringLength=jsonContent.FTD.types[0].VString.length;
//     var RangeIntLength=jsonContent.FTD.types[0].RangeInt.length;
//     var EnumCharLength=jsonContent.FTD.types[0].EnumChar.length;
//     var fixNumberLength=jsonContent.FTD.types[0].FixNumber.length;
//     var ArrayLength=jsonContent.FTD.types[0].Array.length;
//     var Floatlength=jsonContent.FTD.types[0].Float.length;
//     var CharLength=jsonContent.FTD.types[0].Char.length;
//     var WordLength=jsonContent.FTD.types[0].Word.length;
//     var QWordLength=jsonContent.FTD.types[0].QWord.length;
//     for(var i=0;i<IntLength;i++) {
//         if (jsonContent.FTD.types[0].Int[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<stringLength;i++) {
//         if (jsonContent.FTD.types[0].String[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].String[i].$.length+1;
//         }
//     }
//     for(var i=0;i<vstringLength;i++) {
//         if (jsonContent.FTD.types[0].VString[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].VString[i].$.length+1;
//         }
//     }

//     for(var i=0;i<RangeIntLength;i++) {
//         if (jsonContent.FTD.types[0].RangeInt[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].RangeInt[i].$.length+1;
//         }
//     }
//     for(var i=0;i<EnumCharLength;i++) {
//         if (jsonContent.FTD.types[0].EnumChar[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<fixNumberLength;i++) {
//         if (jsonContent.FTD.types[0].FixNumber[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<ArrayLength;i++) {
//         if (jsonContent.FTD.types[0].Array[i].$.typename === itemType) {
//             return jsonContent.FTD.types[0].Array[i].$.length+1;
//         }
//     }
//     for(var i=0;i<Floatlength;i++) {
//         if (jsonContent.FTD.types[0].Float[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<CharLength;i++) {
//         if (jsonContent.FTD.types[0].Char[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<WordLength;i++) {
//         if (jsonContent.FTD.types[0].Word[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     for(var i=0;i<QWordLength;i++) {
//         if (jsonContent.FTD.types[0].QWord[i].$.typename === itemType) {
//             return 1;
//         }
//     }
//     NoneType++;
//     return 100;

// }

var pathName = '../new file/';
var fileName = 'ftdcsysuserapi-wrapper.cpp';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});
