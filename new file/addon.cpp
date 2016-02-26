#include <nan.h>
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
 
 
NODE_MODULE (addon, InitAll);