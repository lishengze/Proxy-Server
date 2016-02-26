/**
 * Created by li.xiankui on 2015/8/21.
 */
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
 /*#ifndef _SYSUSERSPI_H_
 #define _SYSUSERSPI_H_

 #include "FtdcSysUserApi.h"
 #include "tool-function.h"
 #include "id-func.h"
 #include "nan.h"

 class SysUserSpi: public CShfeFtdcSysUserSpi
 {
    public:
        Nan::Persistent<v8::Object> m_spiobj;
        FRONT_ID m_frontid;
        
    public:
        virtual ~SysUserSpi() {}
        
        virtual void OnFrontConnected();
        
        virtual void OnFrontDisConnected(int nReason);
        
        virtual void OnHeartBeatWarning(int nTimeLapse);

*/});

var jsonContent=require("./package.json");
var Packagelength=jsonContent.FTD.packages[0].package.length;
var lengthField=jsonContent.FTD.fields[0].fieldDefine.length;
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
for(var i=beforeRspQryTopCpuInfoTopic;i<AfterRtnNetNonPartyLinkInfoTopic;i++){
    var fieldName=jsonContent.FTD.packages[0].package[i].field[0].$.name;
    if(jsonContent.FTD.packages[0].package[i].$.name.substring(0,3)==="Rsp"){
        fileData += tabSpace[2] + "virtual void On"+jsonContent.FTD.packages[0].package[i].$.name+"(CShfeFtdc"+
                    fieldName+"Field *p"+fieldName+", CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);\n\n";

    }

    if(jsonContent.FTD.packages[0].package[i].$.name.substring(0,3)==="Rtn"){
        fileData += tabSpace[2] + "virtual void On"+jsonContent.FTD.packages[0].package[i].$.name+"(CShfeFtdc"+
                    fieldName+"Field *p"+fieldName+");\n\n";
    }
}

fileData += "}; \n\n";
fileData += "#endif";
var pathName = '../new file/';
var fileName = 'sysuserspi.h';
fs.writeFile(pathName + fileName, fileData, function (err) {
    if (err) {
        console.log(err);
    } else {            
        console.log('Succeed in saving ' + pathName + fileName);
    }

});