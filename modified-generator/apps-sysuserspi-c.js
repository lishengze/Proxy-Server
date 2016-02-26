/**
 * Created by li.shengze on 2015/1/31.
 */

var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <memory.h>
#include "sysuserspi.h"
#include "v8-transform-data.h"
#include "tool-function.h"
#include <fstream>
#include <queue>
#include <map>
#include <vector>
using std::queue;
using std::map;
using std::vector;
using std::fstream;
using std::cin;
using std::cout;
using std::endl;
 
extern fstream g_RunningResult_File;
 
void SysUserSpi::OnFrontConnected () {
    OutputCallbackMessage("\n************SysUserSpi::OnFrontConnected() START! ************", g_RunningResult_File);

    void** paramArray = new void*[1];
    if (NULL == paramArray) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for paramArray", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;
    }

    Nan::Persistent<v8::Object>* pSpiObj = new Nan::Persistent<v8::Object>;
    if (NULL == pSpiObj) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pSpiObj", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;        
    }           
    memcpy(pSpiObj, &(this->m_spiobj), sizeof(Nan::Persistent<v8::Object>));
    
    paramArray[0] = (void*)pSpiObj; 
        
    uv_mutex_lock(&g_FrontConnected_mutex);
    vector<FRONT_ID>::iterator it ;
    for(it = g_FrontConnected_IOUser_vec.begin();
        it != g_FrontConnected_IOUser_vec.end(); it++ ) {
        if (*it == this->m_frontid){
             break;
        }       
    }            
    if (it ==  g_FrontConnected_IOUser_vec.end()) {
        g_FrontConnected_IOUser_vec.push_back(this->m_frontid);
    }  
    g_FrontConnected_Data_map[this->m_frontid].push((void**)(&paramArray[0]));
    uv_mutex_unlock(&g_FrontConnected_mutex);

    uv_async_send(&g_FrontConnected_async);

    OutputCallbackMessage("************SysUserSpi::OnFrontConnected() END! ************\n", g_RunningResult_File);
}

void SysUserSpi::OnFrontDisConnected (int nReason) {
    OutputCallbackMessage("\n************SysUserSpi::OnFrontDisConnected() START! ************", g_RunningResult_File);

    void** paramArray = new void*[2];
    if (NULL == paramArray) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for paramArray", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;
    }

    Nan::Persistent<v8::Object>* pSpiObj = new Nan::Persistent<v8::Object>;
    if (NULL == pSpiObj) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pSpiObj", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;        
    }           
    memcpy(pSpiObj, &(this->m_spiobj), sizeof(Nan::Persistent<v8::Object>));
    
    int* pReason = new int;
    if (NULL == pReason){
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pReason", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;           
    }
    *pReason = nReason;
    
    paramArray[0] = (void*)pSpiObj; 
    paramArray[1] = (void*)pReason;
    
    uv_mutex_lock(&g_FrontDisconnected_mutex);
    vector<FRONT_ID>::iterator it ;
    for(it = g_FrontDisconnected_IOUser_vec.begin();
        it != g_FrontDisconnected_IOUser_vec.end(); it++ ) {
        if (*it == this->m_frontid){
             break;
        }       
    }            
    if (it ==  g_FrontDisconnected_IOUser_vec.end()) {
        g_FrontDisconnected_IOUser_vec.push_back(this->m_frontid);
    }      
    g_FrontDisconnected_Data_map[this->m_frontid].push((void**)(&paramArray[0]));
    uv_mutex_unlock(&g_FrontDisconnected_mutex);
    
    uv_async_send(&g_FrontDisconnected_async);
   
    OutputCallbackMessage("************SysUserSpi::OnFrontDisConnected() END! ************\n", g_RunningResult_File);
}
    
 
void SysUserSpi::OnHeartBeatWarning (int nTimeLapse) { 
    OutputCallbackMessage("\n************SysUserSpi::OnHeartBeatWarning() START! ************", g_RunningResult_File);

    void** paramArray = new void*[2];
    if (NULL == paramArray) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for paramArray", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
        return;
    }

    Nan::Persistent<v8::Object>* pSpiObj = new Nan::Persistent<v8::Object>;
    if (NULL == pSpiObj) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pSpiObj", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
        return;        
    }           
    memcpy(pSpiObj, &(this->m_spiobj), sizeof(Nan::Persistent<v8::Object>));
    
    int* pTimeLapse = new int;
    if (NULL == pTimeLapse){
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pReason", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnHeartBeatWarning: END! ******\n", g_RunningResult_File);
        return;           
    }
    *pTimeLapse = nTimeLapse;

    paramArray[0] = (void*)pSpiObj; 
    paramArray[1] = (void*)pTimeLapse; 
        
    uv_mutex_lock(&g_HeartBeatWarning_mutex);
    vector<FRONT_ID>::iterator it ;
    for(it = g_HeartBeatWarning_IOUser_vec.begin();
        it != g_HeartBeatWarning_IOUser_vec.end(); it++ ) {
        if (*it == this->m_frontid) break;      
    }            
    if (it ==  g_HeartBeatWarning_IOUser_vec.end()) {
        g_HeartBeatWarning_IOUser_vec.push_back(this->m_frontid);
    }    
    g_HeartBeatWarning_Data_map[this->m_frontid].push((void**)(&paramArray[0]));
    
    uv_mutex_unlock(&g_HeartBeatWarning_mutex);

    uv_async_send(&g_HeartBeatWarning_async);

    OutputCallbackMessage("************SysUserSpi::OnHeartBeatWarning() END! ************\n", g_RunningResult_File);
}

*/});

var tabSpace = ["","    ", "        ", "            ", "                ","                    "];

var jsonContent=require("./package.json");
var Packagelength=jsonContent.FTD.packages[0].package.length;
var lengthField=jsonContent.FTD.fields[0].fieldDefine.length;
var beforeRspQryTopCpuInfoTopic=0;
var AfterRtnNetNonPartyLinkInfoTopic=0;

while(jsonContent.FTD.packages[0].package[beforeRspQryTopCpuInfoTopic].$.name!=="RspQryTopCpuInfoTopic"){
    beforeRspQryTopCpuInfoTopic++;
}
while(jsonContent.FTD.packages[0].package[AfterRtnNetNonPartyLinkInfoTopic].$.name!=="RtnNetNonPartyLinkInfoTopic"){
    AfterRtnNetNonPartyLinkInfoTopic++;
}
AfterRtnNetNonPartyLinkInfoTopic++;

fileData += "\n";

for(var i = beforeRspQryTopCpuInfoTopic; i < AfterRtnNetNonPartyLinkInfoTopic; i++){
    var fieldName = jsonContent.FTD.packages[0].package[i].field[0].$.name;
    var funcName = jsonContent.FTD.packages[0].package[i].$.name;
    var funcType = funcName.substring(0,3);

    if(funcType === "Rsp" || funcType === "Rtn") {
        var queueName  = 'g_' + funcName + '_Data_map';
        var vectorname = 'g_' + funcName + '_IOUser_vec';
        var mutexName  = 'g_' + funcName + '_mutex';
        var asyncName  = 'g_' + funcName + '_async';
        var valueTypeName = "CShfeFtdc" + fieldName + "Field";
        var pValueName = "p" + fieldName;
        var pNewValueName = "pNew" + fieldName;
        // var callbackNumbName = 'g_' + funcName + '_spi_callbackNumb';
        
        if (funcType === "Rsp") {
            fileData += "void SysUserSpi::On" + funcName + "("+ valueTypeName + "* " + pValueName 
                  + ", CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast) {\n";
        } else {
            fileData += "void SysUserSpi::On" + funcName + "("+ valueTypeName + "* " + pValueName + "){ \n";
        }        

        fileData += tabSpace[1] + "OutputCallbackMessage(\"\\n****** SysUserSpi:: "+ funcName + ": START! ******\", g_RunningResult_File);\n"
        //fileData += tabSpace[1] + "OutputCallbackMessage(\""+ callbackNumbName+": \", "+callbackNumbName+"++, g_RunningResult_File);\n\n"
        
        fileData += hereDoc(function () {/*
    Nan::Persistent<v8::Object>* pSpiObj = new Nan::Persistent<v8::Object>;
    if (NULL == pSpiObj) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pSpiObj", g_RunningResult_File);
        OutputCallbackMessage("****** SysUserSpi:: OnFrontConnected: END! ******\n", g_RunningResult_File);
        return;        
    }           
    memcpy(pSpiObj, &(this->m_spiobj), sizeof(Nan::Persistent<v8::Object>));
          
 */});

        if (funcType === "Rsp") {  
            fileData += tabSpace[1] + "void** paramArray = new void*[5];\n";              
        } else {
            fileData += tabSpace[1] + "void** paramArray = new void*[2];\n";
        }

        fileData += tabSpace[1] + "if (NULL == paramArray) {\n";
        fileData += tabSpace[2] + "OutputCallbackMessage(\"SysUserSpi:: Faild in allocating memory for paramArray\", g_RunningResult_File);\n";
        fileData += tabSpace[2] + "OutputCallbackMessage(\"****** SysUserSpi:: "+ funcName + ": END! ******\\n\", g_RunningResult_File);\n";
        fileData += tabSpace[2] + "return; \n";
        fileData += tabSpace[1] + "} \n\n";
                                
		fileData += tabSpace[1] + valueTypeName + "* "+ pNewValueName + " = NULL;\n";     
        fileData += tabSpace[1] + "if (NULL != "+ pValueName +") { \n";
		fileData += tabSpace[2] + pNewValueName + " = new "+valueTypeName + ";\n";
		fileData += tabSpace[2] + "if (NULL == "+ pNewValueName+") {\n";
		fileData += tabSpace[3] + "OutputCallbackMessage(\"SysUserSpi:: Faild in allocating memory for " + pNewValueName + "\", g_RunningResult_File);\n";
		fileData += tabSpace[3] + "return;\n";
		fileData += tabSpace[2] + "}\n";
		fileData += tabSpace[2] + "memcpy ("+pNewValueName+"," + pValueName+", sizeof("+ valueTypeName +"));\n";
        fileData += tabSpace[1] + "}\n";
	   
		if ("Rsp" == funcType) {
			fileData += hereDoc(function(){/*
	CShfeFtdcRspInfoField* pRspInfoNew = NULL;
    if (NULL != pRspInfo){        
        pRspInfoNew = new CShfeFtdcRspInfoField;        
        if (NULL == pRspInfo) {
            OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pRspInfo", g_RunningResult_File);
            return;            
        }        
        memcpy(pRspInfoNew,pRspInfo,sizeof(CShfeFtdcRspInfoField));        
    }	
	
    int*  pId = new int(nRequestID);
    if (NULL == pId) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for pId", g_RunningResult_File);
        return;
    }
    
    bool* bIsLastNew = new bool(bIsLast);
    if (NULL == bIsLastNew) {
        OutputCallbackMessage("SysUserSpi:: Faild in allocating memory for bIsLastNew", g_RunningResult_File);
        return;
    }  	
*/
            });			
		}
	   

		fileData += "\n";	
        fileData += tabSpace[1] + "paramArray[0] = (void*)pSpiObj;\n";
		fileData += tabSpace[1] + "paramArray[1] = (void*)" + pNewValueName + ";";
		if ("Rsp" == funcType) {
			fileData += hereDoc(function(){/*
    paramArray[2] = (void*)pRspInfoNew;		
    paramArray[3] = (void*)pId;
    paramArray[4] = (void*)bIsLastNew;			
			*/});
		}        		
        
        fileData += "\n";
        fileData += tabSpace[1] + "if (NULL == "+ pValueName +") { \n";
				fileData += tabSpace[2] + "OutputCallbackMessage(\"SysUserSpi::"+ pValueName +" is NULL\" , g_RunningResult_File); \n"    
        fileData += tabSpace[1] + "} else {\n";              
        for(var j=0;j<lengthField;j++){
            if(jsonContent.FTD.fields[0].fieldDefine[j].$.name===fieldName) {
                var itemlength=jsonContent.FTD.fields[0].fieldDefine[j].item.length;
                for(var k = 0; k<itemlength; k++){
                    var itemName = jsonContent.FTD.fields[0].fieldDefine[j].item[k].$.name;
                    fileData += tabSpace[2] + "OutputCallbackMessage(\"" + pValueName+"->"+itemName + ": \", " 
                              + pValueName + "->" + itemName + ", g_RunningResult_File);\n";
                }
            }
        } 
		
        fileData += tabSpace[1] + "}\n";
      
        if (funcType === "Rsp") {
            fileData += tabSpace[1] + "OutputCallbackMessage(\"pRspInfo:\", pRspInfo, g_RunningResult_File);\n"
                      + tabSpace[1] + "OutputCallbackMessage(\"nRequestID:\", nRequestID, g_RunningResult_File);\n"
                      + tabSpace[1] + "OutputCallbackMessage(\"bIsLast:\", bIsLast, g_RunningResult_File);\n";      
        }      
        
        /*
            g_OnHeartBeatWarning_IOUser_vec.push_back(this-m_frontid);
            g_OnHeartBeatWarning_Data_map[this-m_frontid].push((void**)(&paramArray[0]));
        */
        fileData += "\n";                  
        fileData += tabSpace[1] + "uv_mutex_lock (&" + mutexName + ");\n";
        fileData += tabSpace[1] + "vector<FRONT_ID>::iterator it ;\n";
        fileData += tabSpace[1] + "for(it = " + vectorname + ".begin();\n";
        fileData += tabSpace[2] + "it != " + vectorname + ".end(); it++ ) {\n";
        fileData += tabSpace[2] + "if (*it == this->m_frontid) break;     \n";
        fileData += tabSpace[1] + "}\n";
        fileData += tabSpace[1] + "if (it == " + vectorname + ".end()) {\n";
        fileData += tabSpace[2] +  vectorname + ".push_back(this->m_frontid);\n";
        fileData += tabSpace[1] + "}\n";
        fileData += tabSpace[1] + queueName + "[this->m_frontid].push ((void**)&paramArray[0]);\n";
        fileData += tabSpace[1] + "uv_mutex_unlock (&" + mutexName + ");\n";
				fileData += "\n";
        fileData += tabSpace[1] + "uv_async_send(&" + asyncName+");\n";
        
        fileData += tabSpace[1] + "OutputCallbackMessage(\"****** SysUserSpi:: "+ funcName + ": END! ******\\n\", g_RunningResult_File);\n";
        
        fileData += "}\n\n";                
    }
}

fileData += "\n\n";
var pathName = '../new file/';
var fileName = 'sysuserspi.cpp';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});