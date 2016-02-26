/**
 * Created by li.shengze on 2015/11/30.
 * ��?动生��? addon.cpp 文件 用于生成供JS调用��?.node文件;
 * hereDoc: 将注释范围内的内容转换成对应的字符串;
 *             
*/
var fs = require('fs');
function hereDoc(f) {
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var fileData = hereDoc(function () {
/*#include <nan.h>
#include "ftdcsysuserapi-wrapper.h"
#include "tool-function.h"
#include "v8-transform-data.h"
#include <fstream>
using std::fstream;

extern fstream g_RunningResult_File;

using namespace v8;

void InitAll(Handle<Object> exports) {
        
    FtdcSysUserApi_Wrapper::InitExports (exports);
    
    g_RunningResult_File.open("running-result.txt",ios::out);
    
    if (!g_RunningResult_File) {
        OutputCallbackMessage("Failed to open running-message.txt", g_RunningResult_File);
        g_RunningResult_File.close();
    }
    
    InitV8Transformdata ();  
 } 
 
 
*/
});

fileData += "NODE_MODULE (addon, InitAll);";

var fileName = 'addon.cpp';
var pathName = '../new file/';

    fs.writeFile(pathName + fileName, fileData, function (err) {
        if (err) {
            console.log(err);
        } else {            
            console.log('Succeed in saving ' + pathName + fileName);
        }
    
    });    