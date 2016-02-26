#ifndef _V8_TRANSFORM_DATA_H_
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

void InitV8Transformdata (); 
 
void DeInitV8Transformdata ();


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
                
extern uv_mutex_t   g_RspQryTopCpuInfoTopic_mutex;
extern uv_async_t   g_RspQryTopCpuInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryTopCpuInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTopCpuInfoTopic_Data_map;

extern uv_mutex_t   g_RtnTopCpuInfoTopic_mutex;
extern uv_async_t   g_RtnTopCpuInfoTopic_async;
extern vector<FRONT_ID>    g_RtnTopCpuInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTopCpuInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryTopMemInfoTopic_mutex;
extern uv_async_t   g_RspQryTopMemInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryTopMemInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTopMemInfoTopic_Data_map;

extern uv_mutex_t   g_RtnTopMemInfoTopic_mutex;
extern uv_async_t   g_RtnTopMemInfoTopic_async;
extern vector<FRONT_ID>    g_RtnTopMemInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTopMemInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryTopProcessInfoTopic_mutex;
extern uv_async_t   g_RspQryTopProcessInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryTopProcessInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTopProcessInfoTopic_Data_map;

extern uv_mutex_t   g_RtnTopProcessInfoTopic_mutex;
extern uv_async_t   g_RtnTopProcessInfoTopic_async;
extern vector<FRONT_ID>    g_RtnTopProcessInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTopProcessInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryFileSystemInfoTopic_mutex;
extern uv_async_t   g_RspQryFileSystemInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryFileSystemInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFileSystemInfoTopic_Data_map;

extern uv_mutex_t   g_RtnFileSystemInfoTopic_mutex;
extern uv_async_t   g_RtnFileSystemInfoTopic_async;
extern vector<FRONT_ID>    g_RtnFileSystemInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFileSystemInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetworkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetworkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetworkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetworkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetworkInfoTopic_mutex;
extern uv_async_t   g_RtnNetworkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetworkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetworkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryClientLoginTopic_mutex;
extern uv_async_t   g_RspQryClientLoginTopic_async;
extern vector<FRONT_ID>    g_RspQryClientLoginTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientLoginTopic_Data_map;

extern uv_mutex_t   g_RspQryMonitorObjectTopic_mutex;
extern uv_async_t   g_RspQryMonitorObjectTopic_async;
extern vector<FRONT_ID>    g_RspQryMonitorObjectTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMonitorObjectTopic_Data_map;

extern uv_mutex_t   g_RtnMonitorObjectTopic_mutex;
extern uv_async_t   g_RtnMonitorObjectTopic_async;
extern vector<FRONT_ID>    g_RtnMonitorObjectTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMonitorObjectTopic_Data_map;

extern uv_mutex_t   g_RspQryObjectRationalTopic_mutex;
extern uv_async_t   g_RspQryObjectRationalTopic_async;
extern vector<FRONT_ID>    g_RspQryObjectRationalTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryObjectRationalTopic_Data_map;

extern uv_mutex_t   g_RtnObjectRationalTopic_mutex;
extern uv_async_t   g_RtnObjectRationalTopic_async;
extern vector<FRONT_ID>    g_RtnObjectRationalTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnObjectRationalTopic_Data_map;

extern uv_mutex_t   g_RspQrySyslogInfoTopic_mutex;
extern uv_async_t   g_RspQrySyslogInfoTopic_async;
extern vector<FRONT_ID>    g_RspQrySyslogInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySyslogInfoTopic_Data_map;

extern uv_mutex_t   g_RtnSyslogInfoTopic_mutex;
extern uv_async_t   g_RtnSyslogInfoTopic_async;
extern vector<FRONT_ID>    g_RtnSyslogInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSyslogInfoTopic_Data_map;

extern uv_mutex_t   g_RspQrySubscriberTopic_mutex;
extern uv_async_t   g_RspQrySubscriberTopic_async;
extern vector<FRONT_ID>    g_RspQrySubscriberTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySubscriberTopic_Data_map;

extern uv_mutex_t   g_RspQryOidRelationTopic_mutex;
extern uv_async_t   g_RspQryOidRelationTopic_async;
extern vector<FRONT_ID>    g_RspQryOidRelationTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryOidRelationTopic_Data_map;

extern uv_mutex_t   g_RtnOidRelationTopic_mutex;
extern uv_async_t   g_RtnOidRelationTopic_async;
extern vector<FRONT_ID>    g_RtnOidRelationTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnOidRelationTopic_Data_map;

extern uv_mutex_t   g_RspQryUserInfoTopic_mutex;
extern uv_async_t   g_RspQryUserInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryUserInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryUserInfoTopic_Data_map;

extern uv_mutex_t   g_RtnUserInfoTopic_mutex;
extern uv_async_t   g_RtnUserInfoTopic_async;
extern vector<FRONT_ID>    g_RtnUserInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnUserInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryOnlineUserInfoTopic_mutex;
extern uv_async_t   g_RspQryOnlineUserInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryOnlineUserInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryOnlineUserInfoTopic_Data_map;

extern uv_mutex_t   g_RtnOnlineUserInfoTopic_mutex;
extern uv_async_t   g_RtnOnlineUserInfoTopic_async;
extern vector<FRONT_ID>    g_RtnOnlineUserInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnOnlineUserInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryWarningEventTopic_mutex;
extern uv_async_t   g_RspQryWarningEventTopic_async;
extern vector<FRONT_ID>    g_RspQryWarningEventTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryWarningEventTopic_Data_map;

extern uv_mutex_t   g_RtnWarningEventTopic_mutex;
extern uv_async_t   g_RtnWarningEventTopic_async;
extern vector<FRONT_ID>    g_RtnWarningEventTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnWarningEventTopic_Data_map;

extern uv_mutex_t   g_RspQryCPUUsageTopic_mutex;
extern uv_async_t   g_RspQryCPUUsageTopic_async;
extern vector<FRONT_ID>    g_RspQryCPUUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryCPUUsageTopic_Data_map;

extern uv_mutex_t   g_RtnCPUUsageTopic_mutex;
extern uv_async_t   g_RtnCPUUsageTopic_async;
extern vector<FRONT_ID>    g_RtnCPUUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnCPUUsageTopic_Data_map;

extern uv_mutex_t   g_RspQryMemoryUsageTopic_mutex;
extern uv_async_t   g_RspQryMemoryUsageTopic_async;
extern vector<FRONT_ID>    g_RspQryMemoryUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMemoryUsageTopic_Data_map;

extern uv_mutex_t   g_RtnMemoryUsageTopic_mutex;
extern uv_async_t   g_RtnMemoryUsageTopic_async;
extern vector<FRONT_ID>    g_RtnMemoryUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMemoryUsageTopic_Data_map;

extern uv_mutex_t   g_RspQryDiskUsageTopic_mutex;
extern uv_async_t   g_RspQryDiskUsageTopic_async;
extern vector<FRONT_ID>    g_RspQryDiskUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryDiskUsageTopic_Data_map;

extern uv_mutex_t   g_RtnDiskUsageTopic_mutex;
extern uv_async_t   g_RtnDiskUsageTopic_async;
extern vector<FRONT_ID>    g_RtnDiskUsageTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnDiskUsageTopic_Data_map;

extern uv_mutex_t   g_RspQryObjectAttrTopic_mutex;
extern uv_async_t   g_RspQryObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RspQryObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RtnObjectAttrTopic_mutex;
extern uv_async_t   g_RtnObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RtnObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RspQryInvalidateOrderTopic_mutex;
extern uv_async_t   g_RspQryInvalidateOrderTopic_async;
extern vector<FRONT_ID>    g_RspQryInvalidateOrderTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryInvalidateOrderTopic_Data_map;

extern uv_mutex_t   g_RtnInvalidateOrderTopic_mutex;
extern uv_async_t   g_RtnInvalidateOrderTopic_async;
extern vector<FRONT_ID>    g_RtnInvalidateOrderTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnInvalidateOrderTopic_Data_map;

extern uv_mutex_t   g_RspQryOrderStatusTopic_mutex;
extern uv_async_t   g_RspQryOrderStatusTopic_async;
extern vector<FRONT_ID>    g_RspQryOrderStatusTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryOrderStatusTopic_Data_map;

extern uv_mutex_t   g_RtnOrderStatusTopic_mutex;
extern uv_async_t   g_RtnOrderStatusTopic_async;
extern vector<FRONT_ID>    g_RtnOrderStatusTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnOrderStatusTopic_Data_map;

extern uv_mutex_t   g_RspQryBargainOrderTopic_mutex;
extern uv_async_t   g_RspQryBargainOrderTopic_async;
extern vector<FRONT_ID>    g_RspQryBargainOrderTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryBargainOrderTopic_Data_map;

extern uv_mutex_t   g_RtnBargainOrderTopic_mutex;
extern uv_async_t   g_RtnBargainOrderTopic_async;
extern vector<FRONT_ID>    g_RtnBargainOrderTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnBargainOrderTopic_Data_map;

extern uv_mutex_t   g_RspQryInstPropertyTopic_mutex;
extern uv_async_t   g_RspQryInstPropertyTopic_async;
extern vector<FRONT_ID>    g_RspQryInstPropertyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryInstPropertyTopic_Data_map;

extern uv_mutex_t   g_RtnInstPropertyTopic_mutex;
extern uv_async_t   g_RtnInstPropertyTopic_async;
extern vector<FRONT_ID>    g_RtnInstPropertyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnInstPropertyTopic_Data_map;

extern uv_mutex_t   g_RspQryMarginRateTopic_mutex;
extern uv_async_t   g_RspQryMarginRateTopic_async;
extern vector<FRONT_ID>    g_RspQryMarginRateTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMarginRateTopic_Data_map;

extern uv_mutex_t   g_RtnMarginRateTopic_mutex;
extern uv_async_t   g_RtnMarginRateTopic_async;
extern vector<FRONT_ID>    g_RtnMarginRateTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMarginRateTopic_Data_map;

extern uv_mutex_t   g_RspQryPriceLimitTopic_mutex;
extern uv_async_t   g_RspQryPriceLimitTopic_async;
extern vector<FRONT_ID>    g_RspQryPriceLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPriceLimitTopic_Data_map;

extern uv_mutex_t   g_RtnPriceLimitTopic_mutex;
extern uv_async_t   g_RtnPriceLimitTopic_async;
extern vector<FRONT_ID>    g_RtnPriceLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPriceLimitTopic_Data_map;

extern uv_mutex_t   g_RspQryPartPosiLimitTopic_mutex;
extern uv_async_t   g_RspQryPartPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RspQryPartPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPartPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RtnPartPosiLimitTopic_mutex;
extern uv_async_t   g_RtnPartPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RtnPartPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPartPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RspQryClientPosiLimitTopic_mutex;
extern uv_async_t   g_RspQryClientPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RspQryClientPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RtnClientPosiLimitTopic_mutex;
extern uv_async_t   g_RtnClientPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RtnClientPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnClientPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RspQrySpecialPosiLimitTopic_mutex;
extern uv_async_t   g_RspQrySpecialPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RspQrySpecialPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySpecialPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RtnSpecialPosiLimitTopic_mutex;
extern uv_async_t   g_RtnSpecialPosiLimitTopic_async;
extern vector<FRONT_ID>    g_RtnSpecialPosiLimitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSpecialPosiLimitTopic_Data_map;

extern uv_mutex_t   g_RspQryTransactionChgTopic_mutex;
extern uv_async_t   g_RspQryTransactionChgTopic_async;
extern vector<FRONT_ID>    g_RspQryTransactionChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTransactionChgTopic_Data_map;

extern uv_mutex_t   g_RtnTransactionChgTopic_mutex;
extern uv_async_t   g_RtnTransactionChgTopic_async;
extern vector<FRONT_ID>    g_RtnTransactionChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTransactionChgTopic_Data_map;

extern uv_mutex_t   g_RspQryClientChgTopic_mutex;
extern uv_async_t   g_RspQryClientChgTopic_async;
extern vector<FRONT_ID>    g_RspQryClientChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientChgTopic_Data_map;

extern uv_mutex_t   g_RtnClientChgTopic_mutex;
extern uv_async_t   g_RtnClientChgTopic_async;
extern vector<FRONT_ID>    g_RtnClientChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnClientChgTopic_Data_map;

extern uv_mutex_t   g_RspQryPartClientChgTopic_mutex;
extern uv_async_t   g_RspQryPartClientChgTopic_async;
extern vector<FRONT_ID>    g_RspQryPartClientChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPartClientChgTopic_Data_map;

extern uv_mutex_t   g_RtnPartClientChgTopic_mutex;
extern uv_async_t   g_RtnPartClientChgTopic_async;
extern vector<FRONT_ID>    g_RtnPartClientChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPartClientChgTopic_Data_map;

extern uv_mutex_t   g_RspQryPosiLimitChgTopic_mutex;
extern uv_async_t   g_RspQryPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RspQryPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RtnPosiLimitChgTopic_mutex;
extern uv_async_t   g_RtnPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RtnPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RspQryHedgeDetailChgTopic_mutex;
extern uv_async_t   g_RspQryHedgeDetailChgTopic_async;
extern vector<FRONT_ID>    g_RspQryHedgeDetailChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHedgeDetailChgTopic_Data_map;

extern uv_mutex_t   g_RtnHedgeDetailChgTopic_mutex;
extern uv_async_t   g_RtnHedgeDetailChgTopic_async;
extern vector<FRONT_ID>    g_RtnHedgeDetailChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnHedgeDetailChgTopic_Data_map;

extern uv_mutex_t   g_RspQryParticipantChgTopic_mutex;
extern uv_async_t   g_RspQryParticipantChgTopic_async;
extern vector<FRONT_ID>    g_RspQryParticipantChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryParticipantChgTopic_Data_map;

extern uv_mutex_t   g_RtnParticipantChgTopic_mutex;
extern uv_async_t   g_RtnParticipantChgTopic_async;
extern vector<FRONT_ID>    g_RtnParticipantChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnParticipantChgTopic_Data_map;

extern uv_mutex_t   g_RspQryMarginRateChgTopic_mutex;
extern uv_async_t   g_RspQryMarginRateChgTopic_async;
extern vector<FRONT_ID>    g_RspQryMarginRateChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMarginRateChgTopic_Data_map;

extern uv_mutex_t   g_RtnMarginRateChgTopic_mutex;
extern uv_async_t   g_RtnMarginRateChgTopic_async;
extern vector<FRONT_ID>    g_RtnMarginRateChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMarginRateChgTopic_Data_map;

extern uv_mutex_t   g_RspQryUserIpChgTopic_mutex;
extern uv_async_t   g_RspQryUserIpChgTopic_async;
extern vector<FRONT_ID>    g_RspQryUserIpChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryUserIpChgTopic_Data_map;

extern uv_mutex_t   g_RtnUserIpChgTopic_mutex;
extern uv_async_t   g_RtnUserIpChgTopic_async;
extern vector<FRONT_ID>    g_RtnUserIpChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnUserIpChgTopic_Data_map;

extern uv_mutex_t   g_RspQryClientPosiLimitChgTopic_mutex;
extern uv_async_t   g_RspQryClientPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RspQryClientPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RtnClientPosiLimitChgTopic_mutex;
extern uv_async_t   g_RtnClientPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RtnClientPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnClientPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RspQrySpecPosiLimitChgTopic_mutex;
extern uv_async_t   g_RspQrySpecPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RspQrySpecPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySpecPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RtnSpecPosiLimitChgTopic_mutex;
extern uv_async_t   g_RtnSpecPosiLimitChgTopic_async;
extern vector<FRONT_ID>    g_RtnSpecPosiLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSpecPosiLimitChgTopic_Data_map;

extern uv_mutex_t   g_RspQryHistoryObjectAttrTopic_mutex;
extern uv_async_t   g_RspQryHistoryObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RspQryHistoryObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHistoryObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RtnHistoryObjectAttrTopic_mutex;
extern uv_async_t   g_RtnHistoryObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RtnHistoryObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnHistoryObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RspQryFrontInfoTopic_mutex;
extern uv_async_t   g_RspQryFrontInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryFrontInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFrontInfoTopic_Data_map;

extern uv_mutex_t   g_RtnFrontInfoTopic_mutex;
extern uv_async_t   g_RtnFrontInfoTopic_async;
extern vector<FRONT_ID>    g_RtnFrontInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFrontInfoTopic_Data_map;

extern uv_mutex_t   g_RspQrySysUserLoginTopic_mutex;
extern uv_async_t   g_RspQrySysUserLoginTopic_async;
extern vector<FRONT_ID>    g_RspQrySysUserLoginTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysUserLoginTopic_Data_map;

extern uv_mutex_t   g_RspQrySysUserLogoutTopic_mutex;
extern uv_async_t   g_RspQrySysUserLogoutTopic_async;
extern vector<FRONT_ID>    g_RspQrySysUserLogoutTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysUserLogoutTopic_Data_map;

extern uv_mutex_t   g_RspQrySysUserPasswordUpdateTopic_mutex;
extern uv_async_t   g_RspQrySysUserPasswordUpdateTopic_async;
extern vector<FRONT_ID>    g_RspQrySysUserPasswordUpdateTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysUserPasswordUpdateTopic_Data_map;

extern uv_mutex_t   g_RspQrySysUserRegisterTopic_mutex;
extern uv_async_t   g_RspQrySysUserRegisterTopic_async;
extern vector<FRONT_ID>    g_RspQrySysUserRegisterTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysUserRegisterTopic_Data_map;

extern uv_mutex_t   g_RspQrySysUserDeleteTopic_mutex;
extern uv_async_t   g_RspQrySysUserDeleteTopic_async;
extern vector<FRONT_ID>    g_RspQrySysUserDeleteTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysUserDeleteTopic_Data_map;

extern uv_mutex_t   g_RspQryParticipantInitTopic_mutex;
extern uv_async_t   g_RspQryParticipantInitTopic_async;
extern vector<FRONT_ID>    g_RspQryParticipantInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryParticipantInitTopic_Data_map;

extern uv_mutex_t   g_RtnParticipantInitTopic_mutex;
extern uv_async_t   g_RtnParticipantInitTopic_async;
extern vector<FRONT_ID>    g_RtnParticipantInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnParticipantInitTopic_Data_map;

extern uv_mutex_t   g_RspQryUserInitTopic_mutex;
extern uv_async_t   g_RspQryUserInitTopic_async;
extern vector<FRONT_ID>    g_RspQryUserInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryUserInitTopic_Data_map;

extern uv_mutex_t   g_RtnUserInitTopic_mutex;
extern uv_async_t   g_RtnUserInitTopic_async;
extern vector<FRONT_ID>    g_RtnUserInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnUserInitTopic_Data_map;

extern uv_mutex_t   g_RspQryClientInitTopic_mutex;
extern uv_async_t   g_RspQryClientInitTopic_async;
extern vector<FRONT_ID>    g_RspQryClientInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientInitTopic_Data_map;

extern uv_mutex_t   g_RtnClientInitTopic_mutex;
extern uv_async_t   g_RtnClientInitTopic_async;
extern vector<FRONT_ID>    g_RtnClientInitTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnClientInitTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeLogTopic_mutex;
extern uv_async_t   g_RspQryTradeLogTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeLogTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeLogTopic_Data_map;

extern uv_mutex_t   g_RtnTradeLogTopic_mutex;
extern uv_async_t   g_RtnTradeLogTopic_async;
extern vector<FRONT_ID>    g_RtnTradeLogTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTradeLogTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeUserLoginInfoTopic_mutex;
extern uv_async_t   g_RspQryTradeUserLoginInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeUserLoginInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeUserLoginInfoTopic_Data_map;

extern uv_mutex_t   g_RtnTradeUserLoginInfoTopic_mutex;
extern uv_async_t   g_RtnTradeUserLoginInfoTopic_async;
extern vector<FRONT_ID>    g_RtnTradeUserLoginInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTradeUserLoginInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryPartTradeTopic_mutex;
extern uv_async_t   g_RspQryPartTradeTopic_async;
extern vector<FRONT_ID>    g_RspQryPartTradeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPartTradeTopic_Data_map;

extern uv_mutex_t   g_RspQryTradepeakTopic_mutex;
extern uv_async_t   g_RspQryTradepeakTopic_async;
extern vector<FRONT_ID>    g_RspQryTradepeakTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradepeakTopic_Data_map;

extern uv_mutex_t   g_RtnUpdateSysConfigTopic_mutex;
extern uv_async_t   g_RtnUpdateSysConfigTopic_async;
extern vector<FRONT_ID>    g_RtnUpdateSysConfigTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnUpdateSysConfigTopic_Data_map;

extern uv_mutex_t   g_RtnSysUser_mutex;
extern uv_async_t   g_RtnSysUser_async;
extern vector<FRONT_ID>    g_RtnSysUser_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSysUser_Data_map;

extern uv_mutex_t   g_RtnPriceLimitChgTopic_mutex;
extern uv_async_t   g_RtnPriceLimitChgTopic_async;
extern vector<FRONT_ID>    g_RtnPriceLimitChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPriceLimitChgTopic_Data_map;

extern uv_mutex_t   g_RspQryHistoryCpuInfoTopic_mutex;
extern uv_async_t   g_RspQryHistoryCpuInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryHistoryCpuInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHistoryCpuInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryHistoryMemInfoTopic_mutex;
extern uv_async_t   g_RspQryHistoryMemInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryHistoryMemInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHistoryMemInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryHistoryNetworkInfoTopic_mutex;
extern uv_async_t   g_RspQryHistoryNetworkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryHistoryNetworkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHistoryNetworkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryMonitorOnlineUser_mutex;
extern uv_async_t   g_RspQryMonitorOnlineUser_async;
extern vector<FRONT_ID>    g_RspQryMonitorOnlineUser_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMonitorOnlineUser_Data_map;

extern uv_mutex_t   g_RspQryFrontStat_mutex;
extern uv_async_t   g_RspQryFrontStat_async;
extern vector<FRONT_ID>    g_RspQryFrontStat_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFrontStat_Data_map;

extern uv_mutex_t   g_RtnSysTimeSyncTopic_mutex;
extern uv_async_t   g_RtnSysTimeSyncTopic_async;
extern vector<FRONT_ID>    g_RtnSysTimeSyncTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSysTimeSyncTopic_Data_map;

extern uv_mutex_t   g_RtnDataCenterChgTopic_mutex;
extern uv_async_t   g_RtnDataCenterChgTopic_async;
extern vector<FRONT_ID>    g_RtnDataCenterChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnDataCenterChgTopic_Data_map;

extern uv_mutex_t   g_RspQryHistoryTradePeakTopic_mutex;
extern uv_async_t   g_RspQryHistoryTradePeakTopic_async;
extern vector<FRONT_ID>    g_RspQryHistoryTradePeakTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryHistoryTradePeakTopic_Data_map;

extern uv_mutex_t   g_RtnHistoryTradePeakTopic_mutex;
extern uv_async_t   g_RtnHistoryTradePeakTopic_async;
extern vector<FRONT_ID>    g_RtnHistoryTradePeakTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnHistoryTradePeakTopic_Data_map;

extern uv_mutex_t   g_RspQrySyslogEventTopic_mutex;
extern uv_async_t   g_RspQrySyslogEventTopic_async;
extern vector<FRONT_ID>    g_RspQrySyslogEventTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySyslogEventTopic_Data_map;

extern uv_mutex_t   g_RtnSyslogEventTopic_mutex;
extern uv_async_t   g_RtnSyslogEventTopic_async;
extern vector<FRONT_ID>    g_RtnSyslogEventTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSyslogEventTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeDayChangeTopic_mutex;
extern uv_async_t   g_RspQryTradeDayChangeTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeDayChangeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeDayChangeTopic_Data_map;

extern uv_mutex_t   g_RspQryWebAppInfoTopic_mutex;
extern uv_async_t   g_RspQryWebAppInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryWebAppInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryWebAppInfoTopic_Data_map;

extern uv_mutex_t   g_RtnWebAppInfoTopic_mutex;
extern uv_async_t   g_RtnWebAppInfoTopic_async;
extern vector<FRONT_ID>    g_RtnWebAppInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnWebAppInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryServletInfoTopic_mutex;
extern uv_async_t   g_RspQryServletInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryServletInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryServletInfoTopic_Data_map;

extern uv_mutex_t   g_RtnServletInfoTopic_mutex;
extern uv_async_t   g_RtnServletInfoTopic_async;
extern vector<FRONT_ID>    g_RtnServletInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnServletInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryFileInfoTopic_mutex;
extern uv_async_t   g_RspQryFileInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryFileInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFileInfoTopic_Data_map;

extern uv_mutex_t   g_RtnFileInfoTopic_mutex;
extern uv_async_t   g_RtnFileInfoTopic_async;
extern vector<FRONT_ID>    g_RtnFileInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFileInfoTopic_Data_map;

extern uv_mutex_t   g_RspQrySessionInfoTopic_mutex;
extern uv_async_t   g_RspQrySessionInfoTopic_async;
extern vector<FRONT_ID>    g_RspQrySessionInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySessionInfoTopic_Data_map;

extern uv_mutex_t   g_RtnSessionInfoTopic_mutex;
extern uv_async_t   g_RtnSessionInfoTopic_async;
extern vector<FRONT_ID>    g_RtnSessionInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSessionInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryJDBCInfoTopic_mutex;
extern uv_async_t   g_RspQryJDBCInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryJDBCInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryJDBCInfoTopic_Data_map;

extern uv_mutex_t   g_RtnJDBCInfoTopic_mutex;
extern uv_async_t   g_RtnJDBCInfoTopic_async;
extern vector<FRONT_ID>    g_RtnJDBCInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnJDBCInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryThreadInfoTopic_mutex;
extern uv_async_t   g_RspQryThreadInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryThreadInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryThreadInfoTopic_Data_map;

extern uv_mutex_t   g_RtnThreadInfoTopic_mutex;
extern uv_async_t   g_RtnThreadInfoTopic_async;
extern vector<FRONT_ID>    g_RtnThreadInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnThreadInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryVMInfoTopic_mutex;
extern uv_async_t   g_RspQryVMInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryVMInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryVMInfoTopic_Data_map;

extern uv_mutex_t   g_RtnVMInfoTopic_mutex;
extern uv_async_t   g_RtnVMInfoTopic_async;
extern vector<FRONT_ID>    g_RtnVMInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnVMInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryPropertyInfoTopic_mutex;
extern uv_async_t   g_RspQryPropertyInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryPropertyInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPropertyInfoTopic_Data_map;

extern uv_mutex_t   g_RtnPropertyInfoTopic_mutex;
extern uv_async_t   g_RtnPropertyInfoTopic_async;
extern vector<FRONT_ID>    g_RtnPropertyInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPropertyInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryMemPoolInfoTopic_mutex;
extern uv_async_t   g_RspQryMemPoolInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryMemPoolInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMemPoolInfoTopic_Data_map;

extern uv_mutex_t   g_RtnMemPoolInfoTopic_mutex;
extern uv_async_t   g_RtnMemPoolInfoTopic_async;
extern vector<FRONT_ID>    g_RtnMemPoolInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMemPoolInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryFileContentInfoTopic_mutex;
extern uv_async_t   g_RspQryFileContentInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryFileContentInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFileContentInfoTopic_Data_map;

extern uv_mutex_t   g_RtnFileContentInfoTopic_mutex;
extern uv_async_t   g_RtnFileContentInfoTopic_async;
extern vector<FRONT_ID>    g_RtnFileContentInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFileContentInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryConnectionInfoTopic_mutex;
extern uv_async_t   g_RspQryConnectionInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryConnectionInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryConnectionInfoTopic_Data_map;

extern uv_mutex_t   g_RtnConnectionInfoTopic_mutex;
extern uv_async_t   g_RtnConnectionInfoTopic_async;
extern vector<FRONT_ID>    g_RtnConnectionInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnConnectionInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryConnectorInfoTopic_mutex;
extern uv_async_t   g_RspQryConnectorInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryConnectorInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryConnectorInfoTopic_Data_map;

extern uv_mutex_t   g_RtnConnectorInfoTopic_mutex;
extern uv_async_t   g_RtnConnectorInfoTopic_async;
extern vector<FRONT_ID>    g_RtnConnectorInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnConnectorInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryDBQueryTopic_mutex;
extern uv_async_t   g_RspQryDBQueryTopic_async;
extern vector<FRONT_ID>    g_RspQryDBQueryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryDBQueryTopic_Data_map;

extern uv_mutex_t   g_RtnDBQueryTopic_mutex;
extern uv_async_t   g_RtnDBQueryTopic_async;
extern vector<FRONT_ID>    g_RtnDBQueryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnDBQueryTopic_Data_map;

extern uv_mutex_t   g_RspQryGeneralFieldTopic_mutex;
extern uv_async_t   g_RspQryGeneralFieldTopic_async;
extern vector<FRONT_ID>    g_RspQryGeneralFieldTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryGeneralFieldTopic_Data_map;

extern uv_mutex_t   g_RtnGeneralFieldTopic_mutex;
extern uv_async_t   g_RtnGeneralFieldTopic_async;
extern vector<FRONT_ID>    g_RtnGeneralFieldTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnGeneralFieldTopic_Data_map;

extern uv_mutex_t   g_RspQryGetFileTopic_mutex;
extern uv_async_t   g_RspQryGetFileTopic_async;
extern vector<FRONT_ID>    g_RspQryGetFileTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryGetFileTopic_Data_map;

extern uv_mutex_t   g_RspQryWarningQueryTopic_mutex;
extern uv_async_t   g_RspQryWarningQueryTopic_async;
extern vector<FRONT_ID>    g_RspQryWarningQueryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryWarningQueryTopic_Data_map;

extern uv_mutex_t   g_RtnWarningQueryTopic_mutex;
extern uv_async_t   g_RtnWarningQueryTopic_async;
extern vector<FRONT_ID>    g_RtnWarningQueryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnWarningQueryTopic_Data_map;

extern uv_mutex_t   g_RtnHostConfig_mutex;
extern uv_async_t   g_RtnHostConfig_async;
extern vector<FRONT_ID>    g_RtnHostConfig_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnHostConfig_Data_map;

extern uv_mutex_t   g_RspQryGeneralOperateTopic_mutex;
extern uv_async_t   g_RspQryGeneralOperateTopic_async;
extern vector<FRONT_ID>    g_RspQryGeneralOperateTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryGeneralOperateTopic_Data_map;

extern uv_mutex_t   g_RtnGeneralOperateTopic_mutex;
extern uv_async_t   g_RtnGeneralOperateTopic_async;
extern vector<FRONT_ID>    g_RtnGeneralOperateTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnGeneralOperateTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceLinkedTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceLinkedTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceLinkedTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceLinkedTopic_Data_map;

extern uv_mutex_t   g_RtnNetDeviceLinkedTopic_mutex;
extern uv_async_t   g_RtnNetDeviceLinkedTopic_async;
extern vector<FRONT_ID>    g_RtnNetDeviceLinkedTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDeviceLinkedTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeUserLoginStatTopic_mutex;
extern uv_async_t   g_RspQryTradeUserLoginStatTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeUserLoginStatTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeUserLoginStatTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeFrontOrderRttStatTopic_mutex;
extern uv_async_t   g_RspQryTradeFrontOrderRttStatTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeFrontOrderRttStatTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeFrontOrderRttStatTopic_Data_map;

extern uv_mutex_t   g_RtnTradeFrontOrderRttStatTopic_mutex;
extern uv_async_t   g_RtnTradeFrontOrderRttStatTopic_async;
extern vector<FRONT_ID>    g_RtnTradeFrontOrderRttStatTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTradeFrontOrderRttStatTopic_Data_map;

extern uv_mutex_t   g_RspQryParticTradeOrderStatesTopic_mutex;
extern uv_async_t   g_RspQryParticTradeOrderStatesTopic_async;
extern vector<FRONT_ID>    g_RspQryParticTradeOrderStatesTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryParticTradeOrderStatesTopic_Data_map;

extern uv_mutex_t   g_RtnParticTradeOrderStatesTopic_mutex;
extern uv_async_t   g_RtnParticTradeOrderStatesTopic_async;
extern vector<FRONT_ID>    g_RtnParticTradeOrderStatesTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnParticTradeOrderStatesTopic_Data_map;

extern uv_mutex_t   g_RspQryRouterInfoTopic_mutex;
extern uv_async_t   g_RspQryRouterInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryRouterInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryRouterInfoTopic_Data_map;

extern uv_mutex_t   g_RtnRouterInfoTopic_mutex;
extern uv_async_t   g_RtnRouterInfoTopic_async;
extern vector<FRONT_ID>    g_RtnRouterInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnRouterInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryDiskIOTopic_mutex;
extern uv_async_t   g_RspQryDiskIOTopic_async;
extern vector<FRONT_ID>    g_RspQryDiskIOTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryDiskIOTopic_Data_map;

extern uv_mutex_t   g_RtnDiskIOTopic_mutex;
extern uv_async_t   g_RtnDiskIOTopic_async;
extern vector<FRONT_ID>    g_RtnDiskIOTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnDiskIOTopic_Data_map;

extern uv_mutex_t   g_RspQryStatInfoTopic_mutex;
extern uv_async_t   g_RspQryStatInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryStatInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryStatInfoTopic_Data_map;

extern uv_mutex_t   g_RtnStatInfoTopic_mutex;
extern uv_async_t   g_RtnStatInfoTopic_async;
extern vector<FRONT_ID>    g_RtnStatInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnStatInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryTradeOrderRttCutLineTopic_mutex;
extern uv_async_t   g_RspQryTradeOrderRttCutLineTopic_async;
extern vector<FRONT_ID>    g_RspQryTradeOrderRttCutLineTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryTradeOrderRttCutLineTopic_Data_map;

extern uv_mutex_t   g_RtnTradeOrderRttCutLineTopic_mutex;
extern uv_async_t   g_RtnTradeOrderRttCutLineTopic_async;
extern vector<FRONT_ID>    g_RtnTradeOrderRttCutLineTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnTradeOrderRttCutLineTopic_Data_map;

extern uv_mutex_t   g_RspQryClientInfoTopic_mutex;
extern uv_async_t   g_RspQryClientInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryClientInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryClientInfoTopic_Data_map;

extern uv_mutex_t   g_RtnClientInfoTopic_mutex;
extern uv_async_t   g_RtnClientInfoTopic_async;
extern vector<FRONT_ID>    g_RtnClientInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnClientInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryEventDescriptionTopic_mutex;
extern uv_async_t   g_RspQryEventDescriptionTopic_async;
extern vector<FRONT_ID>    g_RspQryEventDescriptionTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryEventDescriptionTopic_Data_map;

extern uv_mutex_t   g_RtnEventDescriptionTopic_mutex;
extern uv_async_t   g_RtnEventDescriptionTopic_async;
extern vector<FRONT_ID>    g_RtnEventDescriptionTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnEventDescriptionTopic_Data_map;

extern uv_mutex_t   g_RspQryFrontUniqueIDTopic_mutex;
extern uv_async_t   g_RspQryFrontUniqueIDTopic_async;
extern vector<FRONT_ID>    g_RspQryFrontUniqueIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFrontUniqueIDTopic_Data_map;

extern uv_mutex_t   g_RtnFrontUniqueIDTopic_mutex;
extern uv_async_t   g_RtnFrontUniqueIDTopic_async;
extern vector<FRONT_ID>    g_RtnFrontUniqueIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFrontUniqueIDTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPartyLinkAddrChangeTopic_mutex;
extern uv_async_t   g_RspQryNetPartyLinkAddrChangeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPartyLinkAddrChangeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkAddrChangeTopic_Data_map;

extern uv_mutex_t   g_RtnNetPartyLinkAddrChangeTopic_mutex;
extern uv_async_t   g_RtnNetPartyLinkAddrChangeTopic_async;
extern vector<FRONT_ID>    g_RtnNetPartyLinkAddrChangeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkAddrChangeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDelPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetDelPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDelPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDelPartyLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetDelPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RtnNetDelPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetDelPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDelPartyLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryPerformanceTopTopic_mutex;
extern uv_async_t   g_RspQryPerformanceTopTopic_async;
extern vector<FRONT_ID>    g_RspQryPerformanceTopTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryPerformanceTopTopic_Data_map;

extern uv_mutex_t   g_RtnPerformanceTopTopic_mutex;
extern uv_async_t   g_RtnPerformanceTopTopic_async;
extern vector<FRONT_ID>    g_RtnPerformanceTopTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnPerformanceTopTopic_Data_map;

extern uv_mutex_t   g_RspQryInstrumentStatusTopic_mutex;
extern uv_async_t   g_RspQryInstrumentStatusTopic_async;
extern vector<FRONT_ID>    g_RspQryInstrumentStatusTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryInstrumentStatusTopic_Data_map;

extern uv_mutex_t   g_RtnInstrumentStatusTopic_mutex;
extern uv_async_t   g_RtnInstrumentStatusTopic_async;
extern vector<FRONT_ID>    g_RtnInstrumentStatusTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnInstrumentStatusTopic_Data_map;

extern uv_mutex_t   g_RspQryCurrTradingSegmentAttrTopic_mutex;
extern uv_async_t   g_RspQryCurrTradingSegmentAttrTopic_async;
extern vector<FRONT_ID>    g_RspQryCurrTradingSegmentAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryCurrTradingSegmentAttrTopic_Data_map;

extern uv_mutex_t   g_RtnCurrTradingSegmentAttrTopic_mutex;
extern uv_async_t   g_RtnCurrTradingSegmentAttrTopic_async;
extern vector<FRONT_ID>    g_RtnCurrTradingSegmentAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnCurrTradingSegmentAttrTopic_Data_map;

extern uv_mutex_t   g_RspQryNetAreaTopic_mutex;
extern uv_async_t   g_RspQryNetAreaTopic_async;
extern vector<FRONT_ID>    g_RspQryNetAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetAreaTopic_Data_map;

extern uv_mutex_t   g_RtnNetAreaTopic_mutex;
extern uv_async_t   g_RtnNetAreaTopic_async;
extern vector<FRONT_ID>    g_RtnNetAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetAreaTopic_Data_map;

extern uv_mutex_t   g_RspQryNetSubAreaTopic_mutex;
extern uv_async_t   g_RspQryNetSubAreaTopic_async;
extern vector<FRONT_ID>    g_RspQryNetSubAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetSubAreaTopic_Data_map;

extern uv_mutex_t   g_RtnNetSubAreaTopic_mutex;
extern uv_async_t   g_RtnNetSubAreaTopic_async;
extern vector<FRONT_ID>    g_RtnNetSubAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetSubAreaTopic_Data_map;

extern uv_mutex_t   g_RspQryNetSubAreaIPTopic_mutex;
extern uv_async_t   g_RspQryNetSubAreaIPTopic_async;
extern vector<FRONT_ID>    g_RspQryNetSubAreaIPTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetSubAreaIPTopic_Data_map;

extern uv_mutex_t   g_RtnNetSubAreaIPTopic_mutex;
extern uv_async_t   g_RtnNetSubAreaIPTopic_async;
extern vector<FRONT_ID>    g_RtnNetSubAreaIPTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetSubAreaIPTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceTopic_Data_map;

extern uv_mutex_t   g_RtnNetDeviceTopic_mutex;
extern uv_async_t   g_RtnNetDeviceTopic_async;
extern vector<FRONT_ID>    g_RtnNetDeviceTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDeviceTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceDetectTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceDetectTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceDetectTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceDetectTopic_Data_map;

extern uv_mutex_t   g_RspQryNetBuildingTopic_mutex;
extern uv_async_t   g_RspQryNetBuildingTopic_async;
extern vector<FRONT_ID>    g_RspQryNetBuildingTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetBuildingTopic_Data_map;

extern uv_mutex_t   g_RtnNetBuildingTopic_mutex;
extern uv_async_t   g_RtnNetBuildingTopic_async;
extern vector<FRONT_ID>    g_RtnNetBuildingTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetBuildingTopic_Data_map;

extern uv_mutex_t   g_RspQryNetRoomTopic_mutex;
extern uv_async_t   g_RspQryNetRoomTopic_async;
extern vector<FRONT_ID>    g_RspQryNetRoomTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetRoomTopic_Data_map;

extern uv_mutex_t   g_RtnNetRoomTopic_mutex;
extern uv_async_t   g_RtnNetRoomTopic_async;
extern vector<FRONT_ID>    g_RtnNetRoomTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetRoomTopic_Data_map;

extern uv_mutex_t   g_RspQryNetCabinetsTopic_mutex;
extern uv_async_t   g_RspQryNetCabinetsTopic_async;
extern vector<FRONT_ID>    g_RspQryNetCabinetsTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetCabinetsTopic_Data_map;

extern uv_mutex_t   g_RtnNetCabinetsTopic_mutex;
extern uv_async_t   g_RtnNetCabinetsTopic_async;
extern vector<FRONT_ID>    g_RtnNetCabinetsTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetCabinetsTopic_Data_map;

extern uv_mutex_t   g_RspQryNetOIDTopic_mutex;
extern uv_async_t   g_RspQryNetOIDTopic_async;
extern vector<FRONT_ID>    g_RspQryNetOIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetOIDTopic_Data_map;

extern uv_mutex_t   g_RtnNetOIDTopic_mutex;
extern uv_async_t   g_RtnNetOIDTopic_async;
extern vector<FRONT_ID>    g_RtnNetOIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetOIDTopic_Data_map;

extern uv_mutex_t   g_RspQryNetTimePolicyTopic_mutex;
extern uv_async_t   g_RspQryNetTimePolicyTopic_async;
extern vector<FRONT_ID>    g_RspQryNetTimePolicyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetTimePolicyTopic_Data_map;

extern uv_mutex_t   g_RtnNetTimePolicyTopic_mutex;
extern uv_async_t   g_RtnNetTimePolicyTopic_async;
extern vector<FRONT_ID>    g_RtnNetTimePolicyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetTimePolicyTopic_Data_map;

extern uv_mutex_t   g_RspQryNetGatherTaskTopic_mutex;
extern uv_async_t   g_RspQryNetGatherTaskTopic_async;
extern vector<FRONT_ID>    g_RspQryNetGatherTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetGatherTaskTopic_Data_map;

extern uv_mutex_t   g_RtnNetGatherTaskTopic_mutex;
extern uv_async_t   g_RtnNetGatherTaskTopic_async;
extern vector<FRONT_ID>    g_RtnNetGatherTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetGatherTaskTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceChgTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceChgTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceChgTopic_Data_map;

extern uv_mutex_t   g_RtnNetDeviceChgTopic_mutex;
extern uv_async_t   g_RtnNetDeviceChgTopic_async;
extern vector<FRONT_ID>    g_RtnNetDeviceChgTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDeviceChgTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceTypeTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetDeviceTypeTopic_mutex;
extern uv_async_t   g_RtnNetDeviceTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetDeviceTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDeviceTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDeviceCategoryTopic_mutex;
extern uv_async_t   g_RspQryNetDeviceCategoryTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDeviceCategoryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceCategoryTopic_Data_map;

extern uv_mutex_t   g_RtnNetDeviceCategoryTopic_mutex;
extern uv_async_t   g_RtnNetDeviceCategoryTopic_async;
extern vector<FRONT_ID>    g_RtnNetDeviceCategoryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDeviceCategoryTopic_Data_map;

extern uv_mutex_t   g_RspQryNetManufactoryTopic_mutex;
extern uv_async_t   g_RspQryNetManufactoryTopic_async;
extern vector<FRONT_ID>    g_RspQryNetManufactoryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetManufactoryTopic_Data_map;

extern uv_mutex_t   g_RtnNetManufactoryTopic_mutex;
extern uv_async_t   g_RtnNetManufactoryTopic_async;
extern vector<FRONT_ID>    g_RtnNetManufactoryTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetManufactoryTopic_Data_map;

extern uv_mutex_t   g_RspQryNetCommunityTopic_mutex;
extern uv_async_t   g_RspQryNetCommunityTopic_async;
extern vector<FRONT_ID>    g_RspQryNetCommunityTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetCommunityTopic_Data_map;

extern uv_mutex_t   g_RtnNetCommunityTopic_mutex;
extern uv_async_t   g_RtnNetCommunityTopic_async;
extern vector<FRONT_ID>    g_RtnNetCommunityTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetCommunityTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPortTypeTopic_mutex;
extern uv_async_t   g_RspQryNetPortTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPortTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPortTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetPortTypeTopic_mutex;
extern uv_async_t   g_RtnNetPortTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetPortTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPortTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPartAccessSpotTopic_mutex;
extern uv_async_t   g_RspQryNetPartAccessSpotTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPartAccessSpotTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPartAccessSpotTopic_Data_map;

extern uv_mutex_t   g_RtnNetPartAccessSpotTopic_mutex;
extern uv_async_t   g_RtnNetPartAccessSpotTopic_async;
extern vector<FRONT_ID>    g_RtnNetPartAccessSpotTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPartAccessSpotTopic_Data_map;

extern uv_mutex_t   g_RspQryNetInterfaceTopic_mutex;
extern uv_async_t   g_RspQryNetInterfaceTopic_async;
extern vector<FRONT_ID>    g_RspQryNetInterfaceTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetInterfaceTopic_Data_map;

extern uv_mutex_t   g_RtnNetInterfaceTopic_mutex;
extern uv_async_t   g_RtnNetInterfaceTopic_async;
extern vector<FRONT_ID>    g_RtnNetInterfaceTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetInterfaceTopic_Data_map;

extern uv_mutex_t   g_RspQryNetGeneralOIDTopic_mutex;
extern uv_async_t   g_RspQryNetGeneralOIDTopic_async;
extern vector<FRONT_ID>    g_RspQryNetGeneralOIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetGeneralOIDTopic_Data_map;

extern uv_mutex_t   g_RtnNetGeneralOIDTopic_mutex;
extern uv_async_t   g_RtnNetGeneralOIDTopic_async;
extern vector<FRONT_ID>    g_RtnNetGeneralOIDTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetGeneralOIDTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTypeTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTypeTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorAttrScopeTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorAttrScopeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorAttrScopeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorAttrScopeTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorAttrScopeTopic_mutex;
extern uv_async_t   g_RtnNetMonitorAttrScopeTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorAttrScopeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorAttrScopeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorAttrTypeTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorAttrTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorAttrTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorAttrTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorAttrTypeTopic_mutex;
extern uv_async_t   g_RtnNetMonitorAttrTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorAttrTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorAttrTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorObjectAttrTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorObjectAttrTopic_mutex;
extern uv_async_t   g_RtnNetMonitorObjectAttrTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorObjectAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorObjectAttrTopic_Data_map;

extern uv_mutex_t   g_RspQryNetFuncAreaTopic_mutex;
extern uv_async_t   g_RspQryNetFuncAreaTopic_async;
extern vector<FRONT_ID>    g_RspQryNetFuncAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetFuncAreaTopic_Data_map;

extern uv_mutex_t   g_RtnNetFuncAreaTopic_mutex;
extern uv_async_t   g_RtnNetFuncAreaTopic_async;
extern vector<FRONT_ID>    g_RtnNetFuncAreaTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetFuncAreaTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorCommandTypeTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorCommandTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorCommandTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorCommandTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorCommandTypeTopic_mutex;
extern uv_async_t   g_RtnNetMonitorCommandTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorCommandTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorCommandTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorActionGroupTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorActionGroupTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorActionGroupTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorActionGroupTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorActionGroupTopic_mutex;
extern uv_async_t   g_RtnNetMonitorActionGroupTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorActionGroupTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorActionGroupTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorDeviceGroupTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorDeviceGroupTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorDeviceGroupTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorDeviceGroupTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorDeviceGroupTopic_mutex;
extern uv_async_t   g_RtnNetMonitorDeviceGroupTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorDeviceGroupTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorDeviceGroupTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTaskInfoTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTaskInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTaskInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTaskInfoTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTaskInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTaskInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTaskResultTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTaskResultTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTaskResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskResultTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTaskResultTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTaskResultTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTaskResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskResultTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTaskObjectSetTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTaskObjectSetTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTaskObjectSetTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskObjectSetTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTaskObjectSetTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTaskObjectSetTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTaskObjectSetTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskObjectSetTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RtnNetPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorActionAttrTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorActionAttrTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorActionAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorActionAttrTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorActionAttrTopic_mutex;
extern uv_async_t   g_RtnNetMonitorActionAttrTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorActionAttrTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorActionAttrTopic_Data_map;

extern uv_mutex_t   g_RspQryNetModuleTopic_mutex;
extern uv_async_t   g_RspQryNetModuleTopic_async;
extern vector<FRONT_ID>    g_RspQryNetModuleTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetModuleTopic_Data_map;

extern uv_mutex_t   g_RtnNetModuleTopic_mutex;
extern uv_async_t   g_RtnNetModuleTopic_async;
extern vector<FRONT_ID>    g_RtnNetModuleTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetModuleTopic_Data_map;

extern uv_mutex_t   g_RspQryNetEventExprTopic_mutex;
extern uv_async_t   g_RspQryNetEventExprTopic_async;
extern vector<FRONT_ID>    g_RspQryNetEventExprTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetEventExprTopic_Data_map;

extern uv_mutex_t   g_RtnNetEventExprTopic_mutex;
extern uv_async_t   g_RtnNetEventExprTopic_async;
extern vector<FRONT_ID>    g_RtnNetEventExprTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetEventExprTopic_Data_map;

extern uv_mutex_t   g_RspQryNetEventTypeTopic_mutex;
extern uv_async_t   g_RspQryNetEventTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetEventTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetEventTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetEventTypeTopic_mutex;
extern uv_async_t   g_RtnNetEventTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetEventTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetEventTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetSubEventTypeTopic_mutex;
extern uv_async_t   g_RspQryNetSubEventTypeTopic_async;
extern vector<FRONT_ID>    g_RspQryNetSubEventTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetSubEventTypeTopic_Data_map;

extern uv_mutex_t   g_RtnNetSubEventTypeTopic_mutex;
extern uv_async_t   g_RtnNetSubEventTypeTopic_async;
extern vector<FRONT_ID>    g_RtnNetSubEventTypeTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetSubEventTypeTopic_Data_map;

extern uv_mutex_t   g_RspQryNetEventLevelTopic_mutex;
extern uv_async_t   g_RspQryNetEventLevelTopic_async;
extern vector<FRONT_ID>    g_RspQryNetEventLevelTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetEventLevelTopic_Data_map;

extern uv_mutex_t   g_RtnNetEventLevelTopic_mutex;
extern uv_async_t   g_RtnNetEventLevelTopic_async;
extern vector<FRONT_ID>    g_RtnNetEventLevelTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetEventLevelTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTaskStatusResultTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTaskStatusResultTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTaskStatusResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskStatusResultTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTaskStatusResultTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTaskStatusResultTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTaskStatusResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskStatusResultTopic_Data_map;

extern uv_mutex_t   g_RspQryNetCfgFileTopic_mutex;
extern uv_async_t   g_RspQryNetCfgFileTopic_async;
extern vector<FRONT_ID>    g_RspQryNetCfgFileTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetCfgFileTopic_Data_map;

extern uv_mutex_t   g_RtnNetCfgFileTopic_mutex;
extern uv_async_t   g_RtnNetCfgFileTopic_async;
extern vector<FRONT_ID>    g_RtnNetCfgFileTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetCfgFileTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorDeviceTaskTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorDeviceTaskTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorDeviceTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorDeviceTaskTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorDeviceTaskTopic_mutex;
extern uv_async_t   g_RtnNetMonitorDeviceTaskTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorDeviceTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorDeviceTaskTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMonitorTaskInstAttrsTopic_mutex;
extern uv_async_t   g_RspQryNetMonitorTaskInstAttrsTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMonitorTaskInstAttrsTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskInstAttrsTopic_Data_map;

extern uv_mutex_t   g_RtnNetMonitorTaskInstAttrsTopic_mutex;
extern uv_async_t   g_RtnNetMonitorTaskInstAttrsTopic_async;
extern vector<FRONT_ID>    g_RtnNetMonitorTaskInstAttrsTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskInstAttrsTopic_Data_map;

extern uv_mutex_t   g_RspQryFileGeneralOperTopic_mutex;
extern uv_async_t   g_RspQryFileGeneralOperTopic_async;
extern vector<FRONT_ID>    g_RspQryFileGeneralOperTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryFileGeneralOperTopic_Data_map;

extern uv_mutex_t   g_RtnFileGeneralOperTopic_mutex;
extern uv_async_t   g_RtnFileGeneralOperTopic_async;
extern vector<FRONT_ID>    g_RtnFileGeneralOperTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnFileGeneralOperTopic_Data_map;

extern uv_mutex_t   g_RspQryNetBaseLineTopic_mutex;
extern uv_async_t   g_RspQryNetBaseLineTopic_async;
extern vector<FRONT_ID>    g_RspQryNetBaseLineTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineTopic_Data_map;

extern uv_mutex_t   g_RtnNetBaseLineTopic_mutex;
extern uv_async_t   g_RtnNetBaseLineTopic_async;
extern vector<FRONT_ID>    g_RtnNetBaseLineTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineTopic_Data_map;

extern uv_mutex_t   g_RspQryNetBaseLineTaskTopic_mutex;
extern uv_async_t   g_RspQryNetBaseLineTaskTopic_async;
extern vector<FRONT_ID>    g_RspQryNetBaseLineTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineTaskTopic_Data_map;

extern uv_mutex_t   g_RtnNetBaseLineTaskTopic_mutex;
extern uv_async_t   g_RtnNetBaseLineTaskTopic_async;
extern vector<FRONT_ID>    g_RtnNetBaseLineTaskTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineTaskTopic_Data_map;

extern uv_mutex_t   g_RspQryNetBaseLineResultTopic_mutex;
extern uv_async_t   g_RspQryNetBaseLineResultTopic_async;
extern vector<FRONT_ID>    g_RspQryNetBaseLineResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineResultTopic_Data_map;

extern uv_mutex_t   g_RtnNetBaseLineResultTopic_mutex;
extern uv_async_t   g_RtnNetBaseLineResultTopic_async;
extern vector<FRONT_ID>    g_RtnNetBaseLineResultTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineResultTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPartyLinkStatusInfoTopic_mutex;
extern uv_async_t   g_RspQryNetPartyLinkStatusInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPartyLinkStatusInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkStatusInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetPartyLinkStatusInfoTopic_mutex;
extern uv_async_t   g_RtnNetPartyLinkStatusInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetPartyLinkStatusInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkStatusInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetMemberSDHLineInfoTopic_mutex;
extern uv_async_t   g_RspQryNetMemberSDHLineInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetMemberSDHLineInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetMemberSDHLineInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetMemberSDHLineInfoTopic_mutex;
extern uv_async_t   g_RtnNetMemberSDHLineInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetMemberSDHLineInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetMemberSDHLineInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetDDNLinkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetDDNLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetDDNLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetDDNLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetDDNLinkInfoTopic_mutex;
extern uv_async_t   g_RtnNetDDNLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetDDNLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetDDNLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPseudMemberLinkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetPseudMemberLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPseudMemberLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPseudMemberLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetPseudMemberLinkInfoTopic_mutex;
extern uv_async_t   g_RtnNetPseudMemberLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetPseudMemberLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPseudMemberLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryOuterDeviceInfTopic_mutex;
extern uv_async_t   g_RspQryOuterDeviceInfTopic_async;
extern vector<FRONT_ID>    g_RspQryOuterDeviceInfTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryOuterDeviceInfTopic_Data_map;

extern uv_mutex_t   g_RtnNetOuterDeviceInfTopic_mutex;
extern uv_async_t   g_RtnNetOuterDeviceInfTopic_async;
extern vector<FRONT_ID>    g_RtnNetOuterDeviceInfTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetOuterDeviceInfTopic_Data_map;

extern uv_mutex_t   g_RspQryNetLocalPingResultInfoTopic_mutex;
extern uv_async_t   g_RspQryNetLocalPingResultInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetLocalPingResultInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetLocalPingResultInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetLocalPingResultInfoTopic_mutex;
extern uv_async_t   g_RtnNetLocalPingResultInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetLocalPingResultInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetLocalPingResultInfoTopic_Data_map;

extern uv_mutex_t   g_RspQryNetRomotePingResultInfoTopic_mutex;
extern uv_async_t   g_RspQryNetRomotePingResultInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetRomotePingResultInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetRomotePingResultInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetRomotePingResultInfoTopic_mutex;
extern uv_async_t   g_RtnNetRomotePingResultInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetRomotePingResultInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetRomotePingResultInfoTopic_Data_map;

extern uv_mutex_t   g_RtnMonitorTopProcessInfo_mutex;
extern uv_async_t   g_RtnMonitorTopProcessInfo_async;
extern vector<FRONT_ID>    g_RtnMonitorTopProcessInfo_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMonitorTopProcessInfo_Data_map;

extern uv_mutex_t   g_RspQrySysInternalTopologyTopic_mutex;
extern uv_async_t   g_RspQrySysInternalTopologyTopic_async;
extern vector<FRONT_ID>    g_RspQrySysInternalTopologyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQrySysInternalTopologyTopic_Data_map;

extern uv_mutex_t   g_RtnSysInternalTopologyTopic_mutex;
extern uv_async_t   g_RtnSysInternalTopologyTopic_async;
extern vector<FRONT_ID>    g_RtnSysInternalTopologyTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnSysInternalTopologyTopic_Data_map;

extern uv_mutex_t   g_RspQryMemberLinkCostTopic_mutex;
extern uv_async_t   g_RspQryMemberLinkCostTopic_async;
extern vector<FRONT_ID>    g_RspQryMemberLinkCostTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryMemberLinkCostTopic_Data_map;

extern uv_mutex_t   g_RtnMemberLinkCostTopic_mutex;
extern uv_async_t   g_RtnMemberLinkCostTopic_async;
extern vector<FRONT_ID>    g_RtnMemberLinkCostTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnMemberLinkCostTopic_Data_map;

extern uv_mutex_t   g_RspQryNetPartylinkMonthlyRentTopic_mutex;
extern uv_async_t   g_RspQryNetPartylinkMonthlyRentTopic_async;
extern vector<FRONT_ID>    g_RspQryNetPartylinkMonthlyRentTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetPartylinkMonthlyRentTopic_Data_map;

extern uv_mutex_t   g_RtnNetPartylinkMonthlyRentTopic_mutex;
extern uv_async_t   g_RtnNetPartylinkMonthlyRentTopic_async;
extern vector<FRONT_ID>    g_RtnNetPartylinkMonthlyRentTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetPartylinkMonthlyRentTopic_Data_map;

extern uv_mutex_t   g_RspQryNetNonPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RspQryNetNonPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RspQryNetNonPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RspQryNetNonPartyLinkInfoTopic_Data_map;

extern uv_mutex_t   g_RtnNetNonPartyLinkInfoTopic_mutex;
extern uv_async_t   g_RtnNetNonPartyLinkInfoTopic_async;
extern vector<FRONT_ID>    g_RtnNetNonPartyLinkInfoTopic_IOUser_vec;
extern map<FRONT_ID, queue<void**> >   g_RtnNetNonPartyLinkInfoTopic_Data_map;

#endif

