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
/*#ifndef _V8_TRANSFORM_FUNC_H_
#define _V8_TRANSFORM_FUNC_H_
#include <nan.h>
*/});

fileData += hereDoc(function () {        
/*  
void   OnFrontConnected (uv_async_t *handle);

void   OnFrontDisconnected (uv_async_t *handle);

void   OnHeartBeatWarning (uv_async_t *handle);
             
*/});

for(var i = beforeRspQryTopCpuInfoTopic;i < AfterRtnNetNonPartyLinkInfoTopic;i++) {
    var funcName = jsonContent.FTD.packages[0].package[i].$.name;
    if (funcName.substring(0,3) ==="Rsp" || funcName.substring(0,3) ==="Rtn") {
        fileData += "void   On" + funcName + " (uv_async_t *handle);\n\n";                   
    }
}
        

fileData += "#endif\n\n";

var pathName = '../new file/';
var fileName = 'v8-transform-func.h';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succeed in saving ' + pathName + fileName);
    }

});