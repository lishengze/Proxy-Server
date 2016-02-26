/**
 * Created by li.shengze on 2015/1/28.
 */

var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var tabSpace = ["","    ", "        ", "            ", "                ","                    "];
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

var fileData = hereDoc(function () {
/*#ifndef _V8_TRANSFORM_DATA_H_
#define _V8_TRANSFORM_DATA_H_

#include <queue>
#include <map>
#include <vector>
#include "tool-function.h"
#include "id-func.h"
#include <nan.h>
#include <fstream>
using std::fstream;
using std::queue;
using std::map;
using std::vector;

extern fstream g_RunningResult_File;
*/});

fileData += hereDoc(function () {/*
void InitV8Transformdata (); 
 
void DeInitV8Transformdata ();

*/        
});

fileData += hereDoc(function () {        
/*
extern uv_mutex_t   g_FrontConnected_mutex;
extern uv_async_t   g_FrontConnected_async;
extern vector<FRONT_ID>   g_FrontConnected_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_FrontConnected_Data_map;

extern uv_mutex_t   g_FrontDisconnected_mutex;
extern uv_async_t   g_FrontDisconnected_async;
extern vector<FRONT_ID>   g_FrontDisconnected_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_FrontDisconnected_Data_map;

extern uv_mutex_t   g_HeartBeatWarning_mutex;
extern uv_async_t   g_HeartBeatWarning_async;
extern vector<FRONT_ID>   g_HeartBeatWarning_IOUser_vec;
extern map<FRONT_ID, queue<void**> >  g_HeartBeatWarning_Data_map;
                
*/});

for(var i = beforeRspQryTopCpuInfoTopic;i < AfterRtnNetNonPartyLinkInfoTopic;i++) {
    var funcName = jsonContent.FTD.packages[0].package[i].$.name;
    if (funcName.substring(0,3) ==="Rsp" || funcName.substring(0,3) ==="Rtn") {           
        fileData += 'extern uv_mutex_t   ' + 'g_' + funcName + '_mutex' + ';\n';
        fileData += 'extern uv_async_t   ' + 'g_' + funcName + '_async' + ';\n';     
        fileData += 'extern vector<FRONT_ID>    ' + 'g_' + funcName + '_IOUser_vec' + ';\n';  
        fileData += 'extern map<FRONT_ID, queue<void**> >   ' + 'g_' + funcName + '_Data_map' + ';\n\n';
    }
}
        

fileData += "#endif\n\n";

var pathName = '../new file/';
var fileName = 'v8-transform-data.h';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});