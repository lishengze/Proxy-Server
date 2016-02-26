/**
 * Created by li.shengze on 2015/1/28.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}

var jsonContent = require("./package.json");
var Packagelength = jsonContent.FTD.packages[0].package.length;
var beforeRspQryTopCpuInfoTopic = 0;
var AfterRtnNetNonPartyLinkInfoTopic = 0;

while(jsonContent.FTD.packages[0].package[beforeRspQryTopCpuInfoTopic].$.name!=="RspQryTopCpuInfoTopic"){
    beforeRspQryTopCpuInfoTopic++;
}

while(jsonContent.FTD.packages[0].package[AfterRtnNetNonPartyLinkInfoTopic].$.name!=="RtnNetNonPartyLinkInfoTopic"){
    AfterRtnNetNonPartyLinkInfoTopic++;
}
AfterRtnNetNonPartyLinkInfoTopic++;
var tabSpace = ["","    ", "        ", "            ", "                ","                    "];

var fileData = hereDoc(function () {
/*#include "v8-transform-data.h"
#include "v8-transform-func.h"
#include "FtdcSysUserApiStruct.h"
#include "tool-function.h"
#include "id-func.h"
#include <fstream>
#include <queue>
#include <map>
#include <vector>
#include <string>
using std::queue;
using std::map;
using std::vector;
using std::fstream;
using std::string;

using namespace v8;

#ifdef linux
#include "charset-convert-linux.h"
#endif

#ifdef __WINDOWS_
#include "charset-convert-windows.h"
#endif

#ifdef _WIN32
#include "charset-convert-windows.h"
#endif

extern fstream g_RunningResult_File;
*/});

var fieldLength = jsonContent.FTD.fields[0].fieldDefine.length;
var beforeRspQryTopCpuInfoTopic=0;
while(jsonContent.FTD.packages[0].package[beforeRspQryTopCpuInfoTopic].$.name!=="RspQryTopCpuInfoTopic"){
    beforeRspQryTopCpuInfoTopic++;
}
var AfterRtnNetNonPartyLinkInfoTopic=0;
while(jsonContent.FTD.packages[0].package[AfterRtnNetNonPartyLinkInfoTopic].$.name!=="RtnNetNonPartyLinkInfoTopic"){
    AfterRtnNetNonPartyLinkInfoTopic++;
}
AfterRtnNetNonPartyLinkInfoTopic++;

var tabSpace = ["","    ", "        ", "            ", "                ","                    "];


fileData += hereDoc(function(){/*
void OnFrontConnected(uv_async_t *handle)
{   
    OutputCallbackMessage ("\n****** v8-transform-func:: OnFrontConnected: START! ******", g_RunningResult_File);
    uv_mutex_lock(&g_FrontConnected_mutex);
    
    int ioUserNumb = g_FrontConnected_IOUser_vec.size();
    queue<void**>* pReceivedData = new queue<void**>[ioUserNumb];
    
    if (NULL == pReceivedData) {
          OutputCallbackMessage ("v8-transform-func::pReceivedData is NULL", g_RunningResult_File);
          OutputCallbackMessage ("****** v8-transform-func:: OnFrontConnected: END! ******\n", g_RunningResult_File);
          return;       
    }
     
    int i = 0;
    for(vector<FRONT_ID>::iterator it = g_FrontConnected_IOUser_vec.begin();
        it != g_FrontConnected_IOUser_vec.end(); it++ , i++) {
        int dataNumb = g_FrontConnected_Data_map[*it].size();
        OutputCallbackMessage("dataNumb in this queue is: ",  dataNumb, g_RunningResult_File);        
        while (!g_FrontConnected_Data_map[*it].empty()) {
            pReceivedData[i].push(g_FrontConnected_Data_map[*it].front());
            g_FrontConnected_Data_map[*it].pop();
        }
    }
    g_FrontConnected_IOUser_vec.clear();
    
    uv_mutex_unlock(&g_FrontConnected_mutex);
    
    for (int i = 0; i < ioUserNumb; ++i) {
        while ( !pReceivedData[i].empty() ) { 
            void** paramArray = pReceivedData[i].front();
            pReceivedData[i].pop();
        
            if (NULL == paramArray ) {
                OutputCallbackMessage ("v8-transform-func::Delivered OnFrontConnected paramArray is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnFrontConnected: END! ******\n", g_RunningResult_File);
                return;
            }
        
            Nan::HandleScope scope;
            Nan::Persistent<v8::Object>* pSpiObj = (Nan::Persistent<v8::Object>*)paramArray[0];
        
            if (pSpiObj->IsEmpty()) {
                OutputCallbackMessage ("v8-transform-func::pSpiObj is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnFrontConnected: END! ******\n", g_RunningResult_File);
                return;
            }
            
            v8::Local<v8::Object> localSpiObj = Nan::New<v8::Object>(*pSpiObj);
            v8::Local<v8::Value> OnFrontConnected = localSpiObj->Get(Nan::New<v8::String>("OnFrontConnected").ToLocalChecked());
            if(OnFrontConnected->IsFunction())
            {
                v8::Local<v8::Function> function=v8::Local<v8::Function>::Cast(OnFrontConnected);
                Nan::Callback callback(function);
                callback.Call(localSpiObj, 0, 0);
            } else {
                cout << "OnFrontConnected is not function!" << endl;
                OutputCallbackMessage ("OnFrontConnected is not function!", g_RunningResult_File);
            }
        
            if(NULL != pSpiObj) {
                delete pSpiObj;
                pSpiObj = NULL;
            }            
        }                    
    }
    
    if (NULL != pReceivedData) {
        delete[] pReceivedData;
        pReceivedData = NULL;
    }

    OutputCallbackMessage ("****** v8-transform-func:: OnFrontConnected: END! ******\n", g_RunningResult_File);
}

void OnFrontDisconnected(uv_async_t *handle) {
    OutputCallbackMessage ("\n****** v8-transform-func:: OnFrontDisconnected: START! ******", g_RunningResult_File);
   
    uv_mutex_lock(&g_FrontDisconnected_mutex);
    int ioUserNumb = g_FrontDisconnected_IOUser_vec.size();
    queue<void**>* pReceivedData = new queue<void**>[ioUserNumb];
    
    if (NULL == pReceivedData) {
          OutputCallbackMessage ("v8-transform-func::pReceivedData is NULL", g_RunningResult_File);
          OutputCallbackMessage ("****** v8-transform-func:: OnFrontDisconnected: END! ******\n", g_RunningResult_File);
          return;       
    }
     
    int i = 0;
    for(vector<FRONT_ID>::iterator it = g_FrontDisconnected_IOUser_vec.begin();
        it != g_FrontDisconnected_IOUser_vec.end(); it++ , i++) {
        int dataNumb = g_FrontDisconnected_Data_map[*it].size();
        OutputCallbackMessage("dataNumb in this queue is: ",  dataNumb, g_RunningResult_File);        
        while (!g_FrontDisconnected_Data_map[*it].empty()) {
            pReceivedData[i].push(g_FrontDisconnected_Data_map[*it].front());
            g_FrontDisconnected_Data_map[*it].pop();
        }
        ReAllocateID(*it);
    }
    g_FrontDisconnected_IOUser_vec.clear();
    
    uv_mutex_unlock(&g_FrontDisconnected_mutex);
    
    for (int i = 0; i < ioUserNumb; ++i) {
        while ( !pReceivedData[i].empty() ) { 
            void** paramArray = pReceivedData[i].front();
            pReceivedData[i].pop();
            
            if (NULL == paramArray ) {
                OutputCallbackMessage ("v8-transform-func::Delivered OnFrontDisconnected paramArray is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnFrontDisconnected: END! ******\n", g_RunningResult_File);
                return;
            }
        
            Nan::HandleScope scope;
            Nan::Persistent<v8::Object>* pSpiObj = (Nan::Persistent<v8::Object>*)paramArray[0];
            if (pSpiObj->IsEmpty()) {
                OutputCallbackMessage ("v8-transform-func::pSpiObj is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnFrontDisconnected: END! ******\n", g_RunningResult_File);
                return;
            }
            
            v8::Local<v8::Object> localSpiObj = Nan::New<v8::Object>(*pSpiObj);
            v8::Local<v8::Value> OnFrontDisconnected = localSpiObj->Get(Nan::New<v8::String>("OnFrontDisconnected").ToLocalChecked());
            
            int* pnReason = (int*)paramArray[1];
            if(OnFrontDisconnected->IsFunction())
            {
                v8::Local<v8::Function> function=v8::Local<v8::Function>::Cast(OnFrontDisconnected);
                Nan::Callback callback(function);          
                
                v8::Local<v8::Integer> nReasonJS=Nan::New<v8::Integer>(*pnReason);
                v8::Local<v8::Value> param[1];
                param[0]=Local<v8::Value>(nReasonJS);
                    
                callback.Call(localSpiObj, 1, param);
            } else {
                OutputCallbackMessage ("OnFrontDisconnected is not function!", g_RunningResult_File);
            }
        
            if(NULL != pSpiObj) {
                delete pSpiObj;
                pSpiObj = NULL;
            }
            
            if (NULL != pnReason) {
                delete pnReason;
                pnReason = NULL;
            }
        
        }
            
    }
    
    if (NULL != pReceivedData) {
        delete[] pReceivedData;
        pReceivedData = NULL;
    }      
    
    OutputCallbackMessage ("****** v8-transform-func:: OnFrontDisconnected: END! ******\n", g_RunningResult_File);
}

void OnHeartBeatWarning(uv_async_t *handle)
{
    OutputCallbackMessage ("\n****** v8-transform-func:: OnHeartBeatWarning: START! ******", g_RunningResult_File);
    
    uv_mutex_lock(&g_HeartBeatWarning_mutex);
    int ioUserNumb = g_HeartBeatWarning_IOUser_vec.size();
    queue<void**>* pReceivedData = new queue<void**>[ioUserNumb];
    
    if (NULL == pReceivedData) {
          OutputCallbackMessage ("v8-transform-func::pReceivedData is NULL", g_RunningResult_File);
          OutputCallbackMessage ("****** v8-transform-func:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
          return;       
    }
     
    int i = 0;
    for(vector<FRONT_ID>::iterator it = g_HeartBeatWarning_IOUser_vec.begin();
        it != g_HeartBeatWarning_IOUser_vec.end(); it++ , i++) {
        int dataNumb = g_HeartBeatWarning_Data_map[*it].size();
        OutputCallbackMessage("dataNumb in this queue is: ",  dataNumb, g_RunningResult_File);        
        while (!g_HeartBeatWarning_Data_map[*it].empty()) {
            pReceivedData[i].push(g_HeartBeatWarning_Data_map[*it].front());
            g_HeartBeatWarning_Data_map[*it].pop();
        }
    }
    g_HeartBeatWarning_IOUser_vec.clear();
    
    uv_mutex_unlock(&g_HeartBeatWarning_mutex);
    
    for (int i = 0; i < ioUserNumb; ++i) {
        while ( !pReceivedData[i].empty() ) { 
            void** paramArray = pReceivedData[i].front();
            pReceivedData[i].pop();       

            if (NULL == paramArray ) {
                OutputCallbackMessage ("v8-transform-func::Delivered OnHeartBeatWarning paramArray is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
                return;
            }
        
            Nan::HandleScope scope;
            Nan::Persistent<v8::Object>* pSpiObj = (Nan::Persistent<v8::Object>*)paramArray[0];
            if (pSpiObj->IsEmpty()) {
                OutputCallbackMessage ("v8-transform-func::pSpiObj is NULL", g_RunningResult_File);
                OutputCallbackMessage ("****** v8-transform-func:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
                return;
            }
            
            v8::Local<v8::Object> localSpiObj = Nan::New<v8::Object>(*pSpiObj);
            v8::Local<v8::Value> OnHeartBeatWarning = localSpiObj->Get(Nan::New<v8::String>("OnHeartBeatWarning").ToLocalChecked());
            
            int* pnTimeLapse = (int*)paramArray[1];
            if(OnHeartBeatWarning->IsFunction())
            {
                v8::Local<v8::Function> function=v8::Local<v8::Function>::Cast(OnHeartBeatWarning);
                Nan::Callback callback(function);          
                
                v8::Local<v8::Integer> nTimeLapseJS=Nan::New<v8::Integer>(*pnTimeLapse);
                v8::Local<v8::Value> param[1];
                param[0]=Local<v8::Value>(nTimeLapseJS);
                    
                callback.Call(localSpiObj, 1, param);
            } else {
                OutputCallbackMessage ("localSpi OnHeartBeatWarning is not function!", g_RunningResult_File);
            }
        
            if(NULL != pSpiObj) {
                delete pSpiObj;
                pSpiObj = NULL;
            }
            
            if (NULL != pnTimeLapse) {
                delete pnTimeLapse;
                pnTimeLapse = NULL;
            }            
        }       
    }
    
    if (NULL != pReceivedData) {
        delete[] pReceivedData;
        pReceivedData = NULL;
    }
    
    OutputCallbackMessage ("****** v8-transform-func:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);   
}

*/});



/*
extern vector<FRONT_ID>   g_FrontConnected_IOUser_vec;
extern map<FRONT_ID, queue<void**>>   g_FrontConnected_Data_map;
*/

for(var i = beforeRspQryTopCpuInfoTopic; i<AfterRtnNetNonPartyLinkInfoTopic; i++) {
    var fieldName = jsonContent.FTD.packages[0].package[i].field[0].$.name;
    var funcName  = jsonContent.FTD.packages[0].package[i].$.name;
    var funcType  = funcName.substring(0,3);
    var mapName = 'g_' + funcName + '_Data_map';
    var mutexName = 'g_' + funcName + '_mutex';
    var vectorName = 'g_' + funcName + '_IOUser_vec';
    var valueTypeName  = "CShfeFtdc" + fieldName + "Field";
    var pValueName = "p" + fieldName;
    var varNumb = 0;
    var callbackNumbName = 'g_' + funcName + '_trans_callbackNumb';
    var dataNumbName = 'g_' + funcName + '_trans_dataNumb';
    
    if(funcType === "Rsp" || funcType === "Rtn"){
        if (funcType === "Rsp") {
            varNumb = 4;
        } else {
            varNumb = 1;
        }

        fileData += "void On" + funcName + " (uv_async_t *handle)" + "\n";
        fileData += "{" + "\n";
        fileData += tabSpace[1] + "OutputCallbackMessage(\"\\n****** v8-transform-func:: "+ funcName + ": START! ******\", g_RunningResult_File);\n";
        fileData += tabSpace[1] + "queue<void**>* pReceivedData;" + "\n";
        fileData += tabSpace[1] + "uv_mutex_lock (&" + mutexName + ");" + "\n\n"
                  + tabSpace[1] + "int ioUserNumb = " + vectorName + ".size();\n"
                  + tabSpace[1] + "pReceivedData = new queue<void**>[ioUserNumb];\n"
                  + tabSpace[1] + "int i = 0;\n"
                  + tabSpace[1] + "for(vector<FRONT_ID>::iterator it = " + vectorName + ".begin();\n"
                  + tabSpace[2] + "it != " + vectorName + ".end(); it++ , i++) {\n"
                  + tabSpace[2] + "int dataNumb = " + mapName + "[*it].size();\n"
                  + tabSpace[2] + "OutputCallbackMessage(\"dataNumb in this queue is: \",  dataNumb, g_RunningResult_File);\n"
                  + tabSpace[2] + "while (!" + mapName + "[*it].empty()) {" + "\n"
                  + tabSpace[3] + "pReceivedData[i].push (" + mapName + "[*it].front());" + "\n"
                  + tabSpace[3] +  mapName + "[*it].pop();" + "\n"
                  + tabSpace[2] + "}" + "\n"
                  + tabSpace[1] + "}" + "\n"
                  + tabSpace[1] + vectorName + ".clear();\n\n"
                  + tabSpace[1] + "uv_mutex_unlock (&" + mutexName + ");"  + "\n\n";
        
        fileData += tabSpace[1] + "for (int i = 0; i < ioUserNumb; ++i) {\n"          
                  + tabSpace[2] + "while ( !pReceivedData[i].empty() ) {"  + "\n"      
                  + tabSpace[3] + "void** paramArray = pReceivedData[i].front();" + "\n"
                  + tabSpace[3] + "pReceivedData[i].pop();" + "\n\n"
                  + tabSpace[3] + "if (NULL == paramArray ) {" + "\n"
                  + tabSpace[4] + "OutputCallbackMessage (\"v8-transform-func::Delivered " + funcName + " paramArray is NULL\", g_RunningResult_File);" + "\n"
                  + tabSpace[4] + "OutputCallbackMessage (\"****** v8-transform-func:: "+ funcName + ": END! ******\\n\", g_RunningResult_File);\n"
                  + tabSpace[4] + "return;" + "\n"
                  + tabSpace[3] + "}" + "\n";        
       
		fileData += hereDoc(function(){/*
            Nan::HandleScope scope;
            Nan::Persistent<v8::Object>* pSpiObj = (Nan::Persistent<v8::Object>*)paramArray[0];
            if (pSpiObj->IsEmpty()) {
                OutputCallbackMessage ("v8-transform-func::pSpiObj is NULL", g_RunningResult_File);
                return;
            }
        
            v8::Local<v8::Object> localSpiObj = Nan::New<v8::Object>(*pSpiObj);            
*/});
		fileData += tabSpace[3] + "v8::Local<v8::Value> On" + funcName + " = localSpiObj->Get(Nan::New<v8::String>(\"On" + funcName + "\").ToLocalChecked());\n"
	              + tabSpace[3] + valueTypeName + "* " + pValueName + " = (" + valueTypeName+"*)(paramArray[1]);" + "\n";
        if (funcType === "Rsp" ) {
            fileData += tabSpace[3] + "CShfeFtdcRspInfoField *pRspInfo = (CShfeFtdcRspInfoField *)(paramArray[2]);" + "\n";
            fileData += tabSpace[3] + "int* pRequestID = (int*)paramArray[3];" + "\n";
            fileData += tabSpace[3] + "bool* pIsLastNew = (bool*)paramArray[4];" + "\n\n";
		}
        		
        fileData += tabSpace[3] + "if (On" + funcName + "->IsFunction()) {" + "\n\n";
        fileData += tabSpace[4] + "v8::Local<v8::Function> function = v8::Local<v8::Function>::Cast(On" + funcName + ");" + "\n";
        fileData += tabSpace[4] + "Nan::Callback callback(function);" + "\n\n";
		
		var pJsValueName = pValueName + "JS";
		fileData += tabSpace[4] + "v8::Local<v8::Object> "+ pJsValueName +" = Nan::New<v8::Object>();\n";		
		if (funcType === "Rsp") {
			fileData += tabSpace[4] + "v8::Local<v8::Object> pRspInfoJS = Nan::New<v8::Object>();\n";
			fileData += tabSpace[4] + "v8::Local<v8::Integer> nRequestIDJS = Nan::New<v8::Integer>(*pRequestID);\n";
			fileData += tabSpace[4] + "v8::Local<v8::Boolean> nIsLastNewJS = Nan::New<v8::Boolean>(*pIsLastNew);\n";
		}
		fileData += tabSpace[4] + "\n";
        fileData += tabSpace[4] + "if (NULL != " + pValueName + ") { \n";
		fileData += tabSpace[5] + "string utf8string;\n";
        fileData += tabSpace[5] + "const int utf8dataLen = 4096 * 12;\n";
        fileData += tabSpace[5] + "int gb2312dataLen;\n"
        fileData += tabSpace[5] + "char utf8data[utf8dataLen];\n\n";
         
        for(var j = 0; j < fieldLength; j++) {			
            var tmpFieldDefine = jsonContent.FTD.fields[0].fieldDefine[j];
            if ( tmpFieldDefine.$.name === fieldName) {
                var itemlength = tmpFieldDefine.item.length;
                
                for(var k = 0; k < itemlength; k++) {

                    var itemName = tmpFieldDefine.item[k].$.name;
                    var itemType = tmpFieldDefine.item[k].$.type.substring(1, tmpFieldDefine.item[k].$.type.length - 4);

                    fileData += tabSpace[5] + "v8::Local<v8::String> " + itemName
                              + " = Nan::New<v8::String> (\"" + itemName + "\").ToLocalChecked();" + "\n";

                    var itemValueName = itemName + "Value";

                    var IntTypeLength = jsonContent.FTD.types[0].Int.length;
                    var isString = true;

                    for(var w = 0; w < IntTypeLength; w++) {//Int ,int type
                        if(itemType === jsonContent.FTD.types[0].Int[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Integer> "+ itemValueName + " = Nan::New<v8::Integer> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }
                    
                    var RangeIntLength = jsonContent.FTD.types[0].RangeInt.length;
                    for(var w = 0;w<RangeIntLength;w++){//RangeInt , int type
                        if(itemType===jsonContent.FTD.types[0].RangeInt[w].$.typename)
                        {
                            isString = false;
                            fileData +=  tabSpace[5] + "v8::Local<v8::Integer> "+ itemValueName + " = Nan::New<v8::Integer> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }                    

                    var CharLength=jsonContent.FTD.types[0].Char.length;
                    for(var w=0;w<CharLength;w++){//Char , int type
                        if(itemType===jsonContent.FTD.types[0].Char[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Integer> "+ itemValueName + " = Nan::New<v8::Integer> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }

                    var EnumCharLength=jsonContent.FTD.types[0].EnumChar.length;
                    for(var w=0;w<EnumCharLength;w++){//Enumchar , int type
                        if(itemType===jsonContent.FTD.types[0].EnumChar[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Integer> "+ itemValueName + " = Nan::New<v8::Integer> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }

                    var WordLength=jsonContent.FTD.types[0].Word.length;
                    for(var w=0;w<WordLength;w++){//Word , int type
                        if(itemType===jsonContent.FTD.types[0].Word[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Integer> "+ itemValueName + " = Nan::New<v8::Integer> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }
                    
                    var Floatlength=jsonContent.FTD.types[0].Float.length;
                    for(var w=0;w<Floatlength;w++){//Float , int type
                        if(itemType===jsonContent.FTD.types[0].Float[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Number> " + itemValueName + " = Nan::New<v8::Number> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }
                                        
                    var QWordLength = jsonContent.FTD.types[0].QWord.length;
                    for(var w=0;w<QWordLength;w++){ //QWord , int type
                        if(itemType===jsonContent.FTD.types[0].QWord[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Number> " + itemValueName+ " = Nan::New<v8::Number> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }

                    var fixNumberLength=jsonContent.FTD.types[0].FixNumber.length;
                    for(var w=0;w<fixNumberLength;w++){//FixNumber , int type
                        if(itemType === jsonContent.FTD.types[0].FixNumber[w].$.typename)
                        {
                            isString = false;
                            fileData += tabSpace[5] + "v8::Local<v8::Number> " + itemValueName + " = Nan::New<v8::Number> ("
                                      + pValueName + "->"+itemName+");\n";
                            break;
                        }
                    }
                    
                    if(isString === true) {//String、Array、VString , string type
                         fileData += tabSpace[5] + "gb2312dataLen = strlen("+ pValueName + "->"+itemName +");\n";
                         fileData += tabSpace[5] + "Gb2312ToUtf8("+ pValueName + "->"+itemName +", gb2312dataLen, utf8data, utf8dataLen);\n";
                         fileData += tabSpace[5] + "v8::Local<v8::String> "+ itemValueName 
                                                 + " = Nan::New<v8::String> (utf8data).ToLocalChecked();\n";
                                                
                        //  fileData += tabSpace[5] + "Gb2312ToUtf8("+ pValueName + "->"+itemName +", utf8string);\n";
                        //  fileData += tabSpace[5] + "v8::Local<v8::String> "+ itemValueName 
                        //                         + " = Nan::New<v8::String> (utf8string.c_str()).ToLocalChecked();\n";
                    }

                    // 绑定JS value;
                    fileData += tabSpace[5] + pJsValueName + "->Set(Local<v8::Value> ("+itemName+"), Local<v8::Value>("+itemValueName+"));\n\n";

                }
            }
        }
        
		fileData += tabSpace[4] + "};\n";
		
		if (funcType =="Rsp") {	
			fileData += hereDoc(function(){/*
                if (NULL != pRspInfo){
                    v8::Local<v8::String>  ErrorID = Nan::New<v8::String>("ErrorID").ToLocalChecked();
                    v8::Local<v8::Integer> ErrorIDValue = Nan::New<v8::Integer>(pRspInfo->ErrorID);
                    pRspInfoJS->Set(Local<v8::Value>(ErrorID),Local<v8::Value>(ErrorIDValue));
                        
                    v8::Local<v8::String>  ErrorMsg = Nan::New<v8::String>("ErrorMsg").ToLocalChecked();
                    v8::Local<v8::String>  ErrorMsggValue = Nan::New(pRspInfo->ErrorMsg).ToLocalChecked();                                
                    pRspInfoJS->Set(Local<v8::Value>(ErrorMsg),Local<v8::Value>(ErrorMsggValue));
			    }*/
				});
		}		
		fileData += tabSpace[4] + "\n\n";
			
		if (funcType =="Rsp") {
			fileData += tabSpace[4] + "v8::Local<v8::Value> params[4];" + "\n";
		} else {
			fileData += tabSpace[4] + "v8::Local<v8::Value> params[1];" + "\n";
		}
        
		fileData += tabSpace[4] + "if (NULL != " + pValueName + ") { \n";
		fileData += tabSpace[5] + "params[0] = Local<v8::Value>(" + pJsValueName + ");\n";
		fileData += tabSpace[4] + "} else { \n";
		fileData += tabSpace[5] + "params[0] = Local<v8::Value>(Nan::Undefined());\n";
		fileData += tabSpace[4] + "};\n";
		
		if ("Rsp" === funcType) {
			fileData += hereDoc(function(){/*
                if (NULL != pRspInfo) {
                    params[1] = Local<v8::Value>(pRspInfoJS);
                } else {
                    params[1] = Local<v8::Value>(Nan::Undefined());
                }
                params[2] = Local<v8::Value>(nRequestIDJS);
                params[3] = Local<v8::Value>(nIsLastNewJS);
                
                callback.Call(localSpiObj, 4, params);

            } // OnFrontConnected->IsFunction() end!*/ });                    
		} else {
            fileData += hereDoc(function(){/*
                callback.Call(localSpiObj, 1, params);
                
            } // OnFrontConnected->IsFunction() end!*/});   
		}
        
        fileData += "\n\n";
        fileData += hereDoc (function(){/* 
            if(NULL != pSpiObj) {
                delete pSpiObj;
                pSpiObj = NULL;
            }
*/ });        
        fileData += tabSpace[3] + "if (NULL != "+ pValueName +") { \n";
        fileData += tabSpace[4] + "delete " + pValueName + ";\n";
        fileData += tabSpace[4] + pValueName + " = NULL;\n";
        fileData += tabSpace[3] + "}\n";
        
        if ("Rsp" === funcType) {
            fileData += hereDoc (function(){/*
            if (NULL != pRspInfo) {
                delete pRspInfo;
                pRspInfo = NULL;
            }       
            
            if (NULL != pRequestID) {
                delete pRequestID;
                pRequestID = NULL;
            }  
            
            if (NULL != pIsLastNew) {
                delete pIsLastNew;
                pIsLastNew = NULL;
            }  
*/ });   
        }	
        	
        fileData += hereDoc (function () {/*
            if (NULL != paramArray) {
                delete []paramArray;
                paramArray = NULL;
            }       
         } // while() end!;
     } // for() end!
     
     if (NULL != pReceivedData) {
        delete[] pReceivedData;
        pReceivedData = NULL;
     }
     
*/});
      
        fileData += tabSpace[1] + "OutputCallbackMessage(\"****** v8-transform-func:: "+ funcName + ": END! ******\\n\", g_RunningResult_File);\n";
        fileData += "}\n\n";
    }  // end if ("Rsp" || "Rtn")
} // end for


var pathName = '../new file/';
var fileName = 'v8-transform-func.cpp';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});