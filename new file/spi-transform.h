#ifndef _SPI_TRANSFORM_H_
#define _SPI_TRANSFORM_H_

// 对全局 queue, mutex, async 变量进行声明，相应的定义在spi-transform.cpp里
// 声明V8转换的函数, 定义实现也在spi-transform.cpp里;

#include <queue>
#include <nan.h>
#include <fstream>

using std::fstream;
using std::queue;

extern Nan::Persistent<v8::Object> SpiObj;

extern fstream g_RunningResult_File;
 
extern uv_async_t g_FrontConnected_async;
void   OnFrontConnected(uv_async_t *handle);

// 这些为手工添加

extern queue<int>    g_FrontDisconnected_queue;
extern uv_mutex_t    g_FrontDisconnected_mutex;
extern uv_async_t    g_FrontDisconnected_async;
void   OnFrontDisconnected (uv_async_t *handle);

extern queue<int>    g_HeartBeatWarning_queue;
extern uv_mutex_t    g_HeartBeatWarning_mutex;
extern uv_async_t    g_HeartBeatWarning_async;
void   OnHeartBeatWarning (uv_async_t *handle);

// 以下为自动生成

extern queue<void**> g_RspQryTopCpuInfoTopic_queue;
extern uv_mutex_t    g_RspQryTopCpuInfoTopic_mutex;
extern uv_async_t    g_RspQryTopCpuInfoTopic_async;
void   OnRspQryTopCpuInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnTopCpuInfoTopic_queue;
extern uv_mutex_t    g_RtnTopCpuInfoTopic_mutex;
extern uv_async_t    g_RtnTopCpuInfoTopic_async;
void   OnRtnTopCpuInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTopMemInfoTopic_queue;
extern uv_mutex_t    g_RspQryTopMemInfoTopic_mutex;
extern uv_async_t    g_RspQryTopMemInfoTopic_async;
void   OnRspQryTopMemInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnTopMemInfoTopic_queue;
extern uv_mutex_t    g_RtnTopMemInfoTopic_mutex;
extern uv_async_t    g_RtnTopMemInfoTopic_async;
void   OnRtnTopMemInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTopProcessInfoTopic_queue;
extern uv_mutex_t    g_RspQryTopProcessInfoTopic_mutex;
extern uv_async_t    g_RspQryTopProcessInfoTopic_async;
void   OnRspQryTopProcessInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnTopProcessInfoTopic_queue;
extern uv_mutex_t    g_RtnTopProcessInfoTopic_mutex;
extern uv_async_t    g_RtnTopProcessInfoTopic_async;
void   OnRtnTopProcessInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFileSystemInfoTopic_queue;
extern uv_mutex_t    g_RspQryFileSystemInfoTopic_mutex;
extern uv_async_t    g_RspQryFileSystemInfoTopic_async;
void   OnRspQryFileSystemInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnFileSystemInfoTopic_queue;
extern uv_mutex_t    g_RtnFileSystemInfoTopic_mutex;
extern uv_async_t    g_RtnFileSystemInfoTopic_async;
void   OnRtnFileSystemInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetworkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetworkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetworkInfoTopic_async;
void   OnRspQryNetworkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetworkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetworkInfoTopic_mutex;
extern uv_async_t    g_RtnNetworkInfoTopic_async;
void   OnRtnNetworkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientLoginTopic_queue;
extern uv_mutex_t    g_RspQryClientLoginTopic_mutex;
extern uv_async_t    g_RspQryClientLoginTopic_async;
void   OnRspQryClientLoginTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMonitorObjectTopic_queue;
extern uv_mutex_t    g_RspQryMonitorObjectTopic_mutex;
extern uv_async_t    g_RspQryMonitorObjectTopic_async;
void   OnRspQryMonitorObjectTopic (uv_async_t *handle);

extern queue<void**> g_RtnMonitorObjectTopic_queue;
extern uv_mutex_t    g_RtnMonitorObjectTopic_mutex;
extern uv_async_t    g_RtnMonitorObjectTopic_async;
void   OnRtnMonitorObjectTopic (uv_async_t *handle);

extern queue<void**> g_RspQryObjectRationalTopic_queue;
extern uv_mutex_t    g_RspQryObjectRationalTopic_mutex;
extern uv_async_t    g_RspQryObjectRationalTopic_async;
void   OnRspQryObjectRationalTopic (uv_async_t *handle);

extern queue<void**> g_RtnObjectRationalTopic_queue;
extern uv_mutex_t    g_RtnObjectRationalTopic_mutex;
extern uv_async_t    g_RtnObjectRationalTopic_async;
void   OnRtnObjectRationalTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySyslogInfoTopic_queue;
extern uv_mutex_t    g_RspQrySyslogInfoTopic_mutex;
extern uv_async_t    g_RspQrySyslogInfoTopic_async;
void   OnRspQrySyslogInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnSyslogInfoTopic_queue;
extern uv_mutex_t    g_RtnSyslogInfoTopic_mutex;
extern uv_async_t    g_RtnSyslogInfoTopic_async;
void   OnRtnSyslogInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySubscriberTopic_queue;
extern uv_mutex_t    g_RspQrySubscriberTopic_mutex;
extern uv_async_t    g_RspQrySubscriberTopic_async;
void   OnRspQrySubscriberTopic (uv_async_t *handle);

extern queue<void**> g_RspQryOidRelationTopic_queue;
extern uv_mutex_t    g_RspQryOidRelationTopic_mutex;
extern uv_async_t    g_RspQryOidRelationTopic_async;
void   OnRspQryOidRelationTopic (uv_async_t *handle);

extern queue<void**> g_RtnOidRelationTopic_queue;
extern uv_mutex_t    g_RtnOidRelationTopic_mutex;
extern uv_async_t    g_RtnOidRelationTopic_async;
void   OnRtnOidRelationTopic (uv_async_t *handle);

extern queue<void**> g_RspQryUserInfoTopic_queue;
extern uv_mutex_t    g_RspQryUserInfoTopic_mutex;
extern uv_async_t    g_RspQryUserInfoTopic_async;
void   OnRspQryUserInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnUserInfoTopic_queue;
extern uv_mutex_t    g_RtnUserInfoTopic_mutex;
extern uv_async_t    g_RtnUserInfoTopic_async;
void   OnRtnUserInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryOnlineUserInfoTopic_queue;
extern uv_mutex_t    g_RspQryOnlineUserInfoTopic_mutex;
extern uv_async_t    g_RspQryOnlineUserInfoTopic_async;
void   OnRspQryOnlineUserInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnOnlineUserInfoTopic_queue;
extern uv_mutex_t    g_RtnOnlineUserInfoTopic_mutex;
extern uv_async_t    g_RtnOnlineUserInfoTopic_async;
void   OnRtnOnlineUserInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryWarningEventTopic_queue;
extern uv_mutex_t    g_RspQryWarningEventTopic_mutex;
extern uv_async_t    g_RspQryWarningEventTopic_async;
void   OnRspQryWarningEventTopic (uv_async_t *handle);

extern queue<void**> g_RtnWarningEventTopic_queue;
extern uv_mutex_t    g_RtnWarningEventTopic_mutex;
extern uv_async_t    g_RtnWarningEventTopic_async;
void   OnRtnWarningEventTopic (uv_async_t *handle);

extern queue<void**> g_RspQryCPUUsageTopic_queue;
extern uv_mutex_t    g_RspQryCPUUsageTopic_mutex;
extern uv_async_t    g_RspQryCPUUsageTopic_async;
void   OnRspQryCPUUsageTopic (uv_async_t *handle);

extern queue<void**> g_RtnCPUUsageTopic_queue;
extern uv_mutex_t    g_RtnCPUUsageTopic_mutex;
extern uv_async_t    g_RtnCPUUsageTopic_async;
void   OnRtnCPUUsageTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMemoryUsageTopic_queue;
extern uv_mutex_t    g_RspQryMemoryUsageTopic_mutex;
extern uv_async_t    g_RspQryMemoryUsageTopic_async;
void   OnRspQryMemoryUsageTopic (uv_async_t *handle);

extern queue<void**> g_RtnMemoryUsageTopic_queue;
extern uv_mutex_t    g_RtnMemoryUsageTopic_mutex;
extern uv_async_t    g_RtnMemoryUsageTopic_async;
void   OnRtnMemoryUsageTopic (uv_async_t *handle);

extern queue<void**> g_RspQryDiskUsageTopic_queue;
extern uv_mutex_t    g_RspQryDiskUsageTopic_mutex;
extern uv_async_t    g_RspQryDiskUsageTopic_async;
void   OnRspQryDiskUsageTopic (uv_async_t *handle);

extern queue<void**> g_RtnDiskUsageTopic_queue;
extern uv_mutex_t    g_RtnDiskUsageTopic_mutex;
extern uv_async_t    g_RtnDiskUsageTopic_async;
void   OnRtnDiskUsageTopic (uv_async_t *handle);

extern queue<void**> g_RspQryObjectAttrTopic_queue;
extern uv_mutex_t    g_RspQryObjectAttrTopic_mutex;
extern uv_async_t    g_RspQryObjectAttrTopic_async;
void   OnRspQryObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RtnObjectAttrTopic_queue;
extern uv_mutex_t    g_RtnObjectAttrTopic_mutex;
extern uv_async_t    g_RtnObjectAttrTopic_async;
void   OnRtnObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RspQryInvalidateOrderTopic_queue;
extern uv_mutex_t    g_RspQryInvalidateOrderTopic_mutex;
extern uv_async_t    g_RspQryInvalidateOrderTopic_async;
void   OnRspQryInvalidateOrderTopic (uv_async_t *handle);

extern queue<void**> g_RtnInvalidateOrderTopic_queue;
extern uv_mutex_t    g_RtnInvalidateOrderTopic_mutex;
extern uv_async_t    g_RtnInvalidateOrderTopic_async;
void   OnRtnInvalidateOrderTopic (uv_async_t *handle);

extern queue<void**> g_RspQryOrderStatusTopic_queue;
extern uv_mutex_t    g_RspQryOrderStatusTopic_mutex;
extern uv_async_t    g_RspQryOrderStatusTopic_async;
void   OnRspQryOrderStatusTopic (uv_async_t *handle);

extern queue<void**> g_RtnOrderStatusTopic_queue;
extern uv_mutex_t    g_RtnOrderStatusTopic_mutex;
extern uv_async_t    g_RtnOrderStatusTopic_async;
void   OnRtnOrderStatusTopic (uv_async_t *handle);

extern queue<void**> g_RspQryBargainOrderTopic_queue;
extern uv_mutex_t    g_RspQryBargainOrderTopic_mutex;
extern uv_async_t    g_RspQryBargainOrderTopic_async;
void   OnRspQryBargainOrderTopic (uv_async_t *handle);

extern queue<void**> g_RtnBargainOrderTopic_queue;
extern uv_mutex_t    g_RtnBargainOrderTopic_mutex;
extern uv_async_t    g_RtnBargainOrderTopic_async;
void   OnRtnBargainOrderTopic (uv_async_t *handle);

extern queue<void**> g_RspQryInstPropertyTopic_queue;
extern uv_mutex_t    g_RspQryInstPropertyTopic_mutex;
extern uv_async_t    g_RspQryInstPropertyTopic_async;
void   OnRspQryInstPropertyTopic (uv_async_t *handle);

extern queue<void**> g_RtnInstPropertyTopic_queue;
extern uv_mutex_t    g_RtnInstPropertyTopic_mutex;
extern uv_async_t    g_RtnInstPropertyTopic_async;
void   OnRtnInstPropertyTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMarginRateTopic_queue;
extern uv_mutex_t    g_RspQryMarginRateTopic_mutex;
extern uv_async_t    g_RspQryMarginRateTopic_async;
void   OnRspQryMarginRateTopic (uv_async_t *handle);

extern queue<void**> g_RtnMarginRateTopic_queue;
extern uv_mutex_t    g_RtnMarginRateTopic_mutex;
extern uv_async_t    g_RtnMarginRateTopic_async;
void   OnRtnMarginRateTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPriceLimitTopic_queue;
extern uv_mutex_t    g_RspQryPriceLimitTopic_mutex;
extern uv_async_t    g_RspQryPriceLimitTopic_async;
void   OnRspQryPriceLimitTopic (uv_async_t *handle);

extern queue<void**> g_RtnPriceLimitTopic_queue;
extern uv_mutex_t    g_RtnPriceLimitTopic_mutex;
extern uv_async_t    g_RtnPriceLimitTopic_async;
void   OnRtnPriceLimitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPartPosiLimitTopic_queue;
extern uv_mutex_t    g_RspQryPartPosiLimitTopic_mutex;
extern uv_async_t    g_RspQryPartPosiLimitTopic_async;
void   OnRspQryPartPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RtnPartPosiLimitTopic_queue;
extern uv_mutex_t    g_RtnPartPosiLimitTopic_mutex;
extern uv_async_t    g_RtnPartPosiLimitTopic_async;
void   OnRtnPartPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientPosiLimitTopic_queue;
extern uv_mutex_t    g_RspQryClientPosiLimitTopic_mutex;
extern uv_async_t    g_RspQryClientPosiLimitTopic_async;
void   OnRspQryClientPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RtnClientPosiLimitTopic_queue;
extern uv_mutex_t    g_RtnClientPosiLimitTopic_mutex;
extern uv_async_t    g_RtnClientPosiLimitTopic_async;
void   OnRtnClientPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySpecialPosiLimitTopic_queue;
extern uv_mutex_t    g_RspQrySpecialPosiLimitTopic_mutex;
extern uv_async_t    g_RspQrySpecialPosiLimitTopic_async;
void   OnRspQrySpecialPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RtnSpecialPosiLimitTopic_queue;
extern uv_mutex_t    g_RtnSpecialPosiLimitTopic_mutex;
extern uv_async_t    g_RtnSpecialPosiLimitTopic_async;
void   OnRtnSpecialPosiLimitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTransactionChgTopic_queue;
extern uv_mutex_t    g_RspQryTransactionChgTopic_mutex;
extern uv_async_t    g_RspQryTransactionChgTopic_async;
void   OnRspQryTransactionChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnTransactionChgTopic_queue;
extern uv_mutex_t    g_RtnTransactionChgTopic_mutex;
extern uv_async_t    g_RtnTransactionChgTopic_async;
void   OnRtnTransactionChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientChgTopic_queue;
extern uv_mutex_t    g_RspQryClientChgTopic_mutex;
extern uv_async_t    g_RspQryClientChgTopic_async;
void   OnRspQryClientChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnClientChgTopic_queue;
extern uv_mutex_t    g_RtnClientChgTopic_mutex;
extern uv_async_t    g_RtnClientChgTopic_async;
void   OnRtnClientChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPartClientChgTopic_queue;
extern uv_mutex_t    g_RspQryPartClientChgTopic_mutex;
extern uv_async_t    g_RspQryPartClientChgTopic_async;
void   OnRspQryPartClientChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnPartClientChgTopic_queue;
extern uv_mutex_t    g_RtnPartClientChgTopic_mutex;
extern uv_async_t    g_RtnPartClientChgTopic_async;
void   OnRtnPartClientChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RspQryPosiLimitChgTopic_mutex;
extern uv_async_t    g_RspQryPosiLimitChgTopic_async;
void   OnRspQryPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RtnPosiLimitChgTopic_mutex;
extern uv_async_t    g_RtnPosiLimitChgTopic_async;
void   OnRtnPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHedgeDetailChgTopic_queue;
extern uv_mutex_t    g_RspQryHedgeDetailChgTopic_mutex;
extern uv_async_t    g_RspQryHedgeDetailChgTopic_async;
void   OnRspQryHedgeDetailChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnHedgeDetailChgTopic_queue;
extern uv_mutex_t    g_RtnHedgeDetailChgTopic_mutex;
extern uv_async_t    g_RtnHedgeDetailChgTopic_async;
void   OnRtnHedgeDetailChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryParticipantChgTopic_queue;
extern uv_mutex_t    g_RspQryParticipantChgTopic_mutex;
extern uv_async_t    g_RspQryParticipantChgTopic_async;
void   OnRspQryParticipantChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnParticipantChgTopic_queue;
extern uv_mutex_t    g_RtnParticipantChgTopic_mutex;
extern uv_async_t    g_RtnParticipantChgTopic_async;
void   OnRtnParticipantChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMarginRateChgTopic_queue;
extern uv_mutex_t    g_RspQryMarginRateChgTopic_mutex;
extern uv_async_t    g_RspQryMarginRateChgTopic_async;
void   OnRspQryMarginRateChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnMarginRateChgTopic_queue;
extern uv_mutex_t    g_RtnMarginRateChgTopic_mutex;
extern uv_async_t    g_RtnMarginRateChgTopic_async;
void   OnRtnMarginRateChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryUserIpChgTopic_queue;
extern uv_mutex_t    g_RspQryUserIpChgTopic_mutex;
extern uv_async_t    g_RspQryUserIpChgTopic_async;
void   OnRspQryUserIpChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnUserIpChgTopic_queue;
extern uv_mutex_t    g_RtnUserIpChgTopic_mutex;
extern uv_async_t    g_RtnUserIpChgTopic_async;
void   OnRtnUserIpChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RspQryClientPosiLimitChgTopic_mutex;
extern uv_async_t    g_RspQryClientPosiLimitChgTopic_async;
void   OnRspQryClientPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnClientPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RtnClientPosiLimitChgTopic_mutex;
extern uv_async_t    g_RtnClientPosiLimitChgTopic_async;
void   OnRtnClientPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySpecPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RspQrySpecPosiLimitChgTopic_mutex;
extern uv_async_t    g_RspQrySpecPosiLimitChgTopic_async;
void   OnRspQrySpecPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnSpecPosiLimitChgTopic_queue;
extern uv_mutex_t    g_RtnSpecPosiLimitChgTopic_mutex;
extern uv_async_t    g_RtnSpecPosiLimitChgTopic_async;
void   OnRtnSpecPosiLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHistoryObjectAttrTopic_queue;
extern uv_mutex_t    g_RspQryHistoryObjectAttrTopic_mutex;
extern uv_async_t    g_RspQryHistoryObjectAttrTopic_async;
void   OnRspQryHistoryObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RtnHistoryObjectAttrTopic_queue;
extern uv_mutex_t    g_RtnHistoryObjectAttrTopic_mutex;
extern uv_async_t    g_RtnHistoryObjectAttrTopic_async;
void   OnRtnHistoryObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFrontInfoTopic_queue;
extern uv_mutex_t    g_RspQryFrontInfoTopic_mutex;
extern uv_async_t    g_RspQryFrontInfoTopic_async;
void   OnRspQryFrontInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnFrontInfoTopic_queue;
extern uv_mutex_t    g_RtnFrontInfoTopic_mutex;
extern uv_async_t    g_RtnFrontInfoTopic_async;
void   OnRtnFrontInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySysUserLoginTopic_queue;
extern uv_mutex_t    g_RspQrySysUserLoginTopic_mutex;
extern uv_async_t    g_RspQrySysUserLoginTopic_async;
void   OnRspQrySysUserLoginTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySysUserLogoutTopic_queue;
extern uv_mutex_t    g_RspQrySysUserLogoutTopic_mutex;
extern uv_async_t    g_RspQrySysUserLogoutTopic_async;
void   OnRspQrySysUserLogoutTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySysUserPasswordUpdateTopic_queue;
extern uv_mutex_t    g_RspQrySysUserPasswordUpdateTopic_mutex;
extern uv_async_t    g_RspQrySysUserPasswordUpdateTopic_async;
void   OnRspQrySysUserPasswordUpdateTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySysUserRegisterTopic_queue;
extern uv_mutex_t    g_RspQrySysUserRegisterTopic_mutex;
extern uv_async_t    g_RspQrySysUserRegisterTopic_async;
void   OnRspQrySysUserRegisterTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySysUserDeleteTopic_queue;
extern uv_mutex_t    g_RspQrySysUserDeleteTopic_mutex;
extern uv_async_t    g_RspQrySysUserDeleteTopic_async;
void   OnRspQrySysUserDeleteTopic (uv_async_t *handle);

extern queue<void**> g_RspQryParticipantInitTopic_queue;
extern uv_mutex_t    g_RspQryParticipantInitTopic_mutex;
extern uv_async_t    g_RspQryParticipantInitTopic_async;
void   OnRspQryParticipantInitTopic (uv_async_t *handle);

extern queue<void**> g_RtnParticipantInitTopic_queue;
extern uv_mutex_t    g_RtnParticipantInitTopic_mutex;
extern uv_async_t    g_RtnParticipantInitTopic_async;
void   OnRtnParticipantInitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryUserInitTopic_queue;
extern uv_mutex_t    g_RspQryUserInitTopic_mutex;
extern uv_async_t    g_RspQryUserInitTopic_async;
void   OnRspQryUserInitTopic (uv_async_t *handle);

extern queue<void**> g_RtnUserInitTopic_queue;
extern uv_mutex_t    g_RtnUserInitTopic_mutex;
extern uv_async_t    g_RtnUserInitTopic_async;
void   OnRtnUserInitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientInitTopic_queue;
extern uv_mutex_t    g_RspQryClientInitTopic_mutex;
extern uv_async_t    g_RspQryClientInitTopic_async;
void   OnRspQryClientInitTopic (uv_async_t *handle);

extern queue<void**> g_RtnClientInitTopic_queue;
extern uv_mutex_t    g_RtnClientInitTopic_mutex;
extern uv_async_t    g_RtnClientInitTopic_async;
void   OnRtnClientInitTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeLogTopic_queue;
extern uv_mutex_t    g_RspQryTradeLogTopic_mutex;
extern uv_async_t    g_RspQryTradeLogTopic_async;
void   OnRspQryTradeLogTopic (uv_async_t *handle);

extern queue<void**> g_RtnTradeLogTopic_queue;
extern uv_mutex_t    g_RtnTradeLogTopic_mutex;
extern uv_async_t    g_RtnTradeLogTopic_async;
void   OnRtnTradeLogTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeUserLoginInfoTopic_queue;
extern uv_mutex_t    g_RspQryTradeUserLoginInfoTopic_mutex;
extern uv_async_t    g_RspQryTradeUserLoginInfoTopic_async;
void   OnRspQryTradeUserLoginInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnTradeUserLoginInfoTopic_queue;
extern uv_mutex_t    g_RtnTradeUserLoginInfoTopic_mutex;
extern uv_async_t    g_RtnTradeUserLoginInfoTopic_async;
void   OnRtnTradeUserLoginInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPartTradeTopic_queue;
extern uv_mutex_t    g_RspQryPartTradeTopic_mutex;
extern uv_async_t    g_RspQryPartTradeTopic_async;
void   OnRspQryPartTradeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradepeakTopic_queue;
extern uv_mutex_t    g_RspQryTradepeakTopic_mutex;
extern uv_async_t    g_RspQryTradepeakTopic_async;
void   OnRspQryTradepeakTopic (uv_async_t *handle);

extern queue<void**> g_RtnUpdateSysConfigTopic_queue;
extern uv_mutex_t    g_RtnUpdateSysConfigTopic_mutex;
extern uv_async_t    g_RtnUpdateSysConfigTopic_async;
void   OnRtnUpdateSysConfigTopic (uv_async_t *handle);

extern queue<void**> g_RtnSysUser_queue;
extern uv_mutex_t    g_RtnSysUser_mutex;
extern uv_async_t    g_RtnSysUser_async;
void   OnRtnSysUser (uv_async_t *handle);

extern queue<void**> g_RtnPriceLimitChgTopic_queue;
extern uv_mutex_t    g_RtnPriceLimitChgTopic_mutex;
extern uv_async_t    g_RtnPriceLimitChgTopic_async;
void   OnRtnPriceLimitChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHistoryCpuInfoTopic_queue;
extern uv_mutex_t    g_RspQryHistoryCpuInfoTopic_mutex;
extern uv_async_t    g_RspQryHistoryCpuInfoTopic_async;
void   OnRspQryHistoryCpuInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHistoryMemInfoTopic_queue;
extern uv_mutex_t    g_RspQryHistoryMemInfoTopic_mutex;
extern uv_async_t    g_RspQryHistoryMemInfoTopic_async;
void   OnRspQryHistoryMemInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHistoryNetworkInfoTopic_queue;
extern uv_mutex_t    g_RspQryHistoryNetworkInfoTopic_mutex;
extern uv_async_t    g_RspQryHistoryNetworkInfoTopic_async;
void   OnRspQryHistoryNetworkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMonitorOnlineUser_queue;
extern uv_mutex_t    g_RspQryMonitorOnlineUser_mutex;
extern uv_async_t    g_RspQryMonitorOnlineUser_async;
void   OnRspQryMonitorOnlineUser (uv_async_t *handle);

extern queue<void**> g_RspQryFrontStat_queue;
extern uv_mutex_t    g_RspQryFrontStat_mutex;
extern uv_async_t    g_RspQryFrontStat_async;
void   OnRspQryFrontStat (uv_async_t *handle);

extern queue<void**> g_RtnSysTimeSyncTopic_queue;
extern uv_mutex_t    g_RtnSysTimeSyncTopic_mutex;
extern uv_async_t    g_RtnSysTimeSyncTopic_async;
void   OnRtnSysTimeSyncTopic (uv_async_t *handle);

extern queue<void**> g_RtnDataCenterChgTopic_queue;
extern uv_mutex_t    g_RtnDataCenterChgTopic_mutex;
extern uv_async_t    g_RtnDataCenterChgTopic_async;
void   OnRtnDataCenterChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryHistoryTradePeakTopic_queue;
extern uv_mutex_t    g_RspQryHistoryTradePeakTopic_mutex;
extern uv_async_t    g_RspQryHistoryTradePeakTopic_async;
void   OnRspQryHistoryTradePeakTopic (uv_async_t *handle);

extern queue<void**> g_RtnHistoryTradePeakTopic_queue;
extern uv_mutex_t    g_RtnHistoryTradePeakTopic_mutex;
extern uv_async_t    g_RtnHistoryTradePeakTopic_async;
void   OnRtnHistoryTradePeakTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySyslogEventTopic_queue;
extern uv_mutex_t    g_RspQrySyslogEventTopic_mutex;
extern uv_async_t    g_RspQrySyslogEventTopic_async;
void   OnRspQrySyslogEventTopic (uv_async_t *handle);

extern queue<void**> g_RtnSyslogEventTopic_queue;
extern uv_mutex_t    g_RtnSyslogEventTopic_mutex;
extern uv_async_t    g_RtnSyslogEventTopic_async;
void   OnRtnSyslogEventTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeDayChangeTopic_queue;
extern uv_mutex_t    g_RspQryTradeDayChangeTopic_mutex;
extern uv_async_t    g_RspQryTradeDayChangeTopic_async;
void   OnRspQryTradeDayChangeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryWebAppInfoTopic_queue;
extern uv_mutex_t    g_RspQryWebAppInfoTopic_mutex;
extern uv_async_t    g_RspQryWebAppInfoTopic_async;
void   OnRspQryWebAppInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnWebAppInfoTopic_queue;
extern uv_mutex_t    g_RtnWebAppInfoTopic_mutex;
extern uv_async_t    g_RtnWebAppInfoTopic_async;
void   OnRtnWebAppInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryServletInfoTopic_queue;
extern uv_mutex_t    g_RspQryServletInfoTopic_mutex;
extern uv_async_t    g_RspQryServletInfoTopic_async;
void   OnRspQryServletInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnServletInfoTopic_queue;
extern uv_mutex_t    g_RtnServletInfoTopic_mutex;
extern uv_async_t    g_RtnServletInfoTopic_async;
void   OnRtnServletInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFileInfoTopic_queue;
extern uv_mutex_t    g_RspQryFileInfoTopic_mutex;
extern uv_async_t    g_RspQryFileInfoTopic_async;
void   OnRspQryFileInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnFileInfoTopic_queue;
extern uv_mutex_t    g_RtnFileInfoTopic_mutex;
extern uv_async_t    g_RtnFileInfoTopic_async;
void   OnRtnFileInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQrySessionInfoTopic_queue;
extern uv_mutex_t    g_RspQrySessionInfoTopic_mutex;
extern uv_async_t    g_RspQrySessionInfoTopic_async;
void   OnRspQrySessionInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnSessionInfoTopic_queue;
extern uv_mutex_t    g_RtnSessionInfoTopic_mutex;
extern uv_async_t    g_RtnSessionInfoTopic_async;
void   OnRtnSessionInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryJDBCInfoTopic_queue;
extern uv_mutex_t    g_RspQryJDBCInfoTopic_mutex;
extern uv_async_t    g_RspQryJDBCInfoTopic_async;
void   OnRspQryJDBCInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnJDBCInfoTopic_queue;
extern uv_mutex_t    g_RtnJDBCInfoTopic_mutex;
extern uv_async_t    g_RtnJDBCInfoTopic_async;
void   OnRtnJDBCInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryThreadInfoTopic_queue;
extern uv_mutex_t    g_RspQryThreadInfoTopic_mutex;
extern uv_async_t    g_RspQryThreadInfoTopic_async;
void   OnRspQryThreadInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnThreadInfoTopic_queue;
extern uv_mutex_t    g_RtnThreadInfoTopic_mutex;
extern uv_async_t    g_RtnThreadInfoTopic_async;
void   OnRtnThreadInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryVMInfoTopic_queue;
extern uv_mutex_t    g_RspQryVMInfoTopic_mutex;
extern uv_async_t    g_RspQryVMInfoTopic_async;
void   OnRspQryVMInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnVMInfoTopic_queue;
extern uv_mutex_t    g_RtnVMInfoTopic_mutex;
extern uv_async_t    g_RtnVMInfoTopic_async;
void   OnRtnVMInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPropertyInfoTopic_queue;
extern uv_mutex_t    g_RspQryPropertyInfoTopic_mutex;
extern uv_async_t    g_RspQryPropertyInfoTopic_async;
void   OnRspQryPropertyInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnPropertyInfoTopic_queue;
extern uv_mutex_t    g_RtnPropertyInfoTopic_mutex;
extern uv_async_t    g_RtnPropertyInfoTopic_async;
void   OnRtnPropertyInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMemPoolInfoTopic_queue;
extern uv_mutex_t    g_RspQryMemPoolInfoTopic_mutex;
extern uv_async_t    g_RspQryMemPoolInfoTopic_async;
void   OnRspQryMemPoolInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnMemPoolInfoTopic_queue;
extern uv_mutex_t    g_RtnMemPoolInfoTopic_mutex;
extern uv_async_t    g_RtnMemPoolInfoTopic_async;
void   OnRtnMemPoolInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFileContentInfoTopic_queue;
extern uv_mutex_t    g_RspQryFileContentInfoTopic_mutex;
extern uv_async_t    g_RspQryFileContentInfoTopic_async;
void   OnRspQryFileContentInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnFileContentInfoTopic_queue;
extern uv_mutex_t    g_RtnFileContentInfoTopic_mutex;
extern uv_async_t    g_RtnFileContentInfoTopic_async;
void   OnRtnFileContentInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryConnectionInfoTopic_queue;
extern uv_mutex_t    g_RspQryConnectionInfoTopic_mutex;
extern uv_async_t    g_RspQryConnectionInfoTopic_async;
void   OnRspQryConnectionInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnConnectionInfoTopic_queue;
extern uv_mutex_t    g_RtnConnectionInfoTopic_mutex;
extern uv_async_t    g_RtnConnectionInfoTopic_async;
void   OnRtnConnectionInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryConnectorInfoTopic_queue;
extern uv_mutex_t    g_RspQryConnectorInfoTopic_mutex;
extern uv_async_t    g_RspQryConnectorInfoTopic_async;
void   OnRspQryConnectorInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnConnectorInfoTopic_queue;
extern uv_mutex_t    g_RtnConnectorInfoTopic_mutex;
extern uv_async_t    g_RtnConnectorInfoTopic_async;
void   OnRtnConnectorInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryDBQueryTopic_queue;
extern uv_mutex_t    g_RspQryDBQueryTopic_mutex;
extern uv_async_t    g_RspQryDBQueryTopic_async;
void   OnRspQryDBQueryTopic (uv_async_t *handle);

extern queue<void**> g_RtnDBQueryTopic_queue;
extern uv_mutex_t    g_RtnDBQueryTopic_mutex;
extern uv_async_t    g_RtnDBQueryTopic_async;
void   OnRtnDBQueryTopic (uv_async_t *handle);

extern queue<void**> g_RspQryGeneralFieldTopic_queue;
extern uv_mutex_t    g_RspQryGeneralFieldTopic_mutex;
extern uv_async_t    g_RspQryGeneralFieldTopic_async;
void   OnRspQryGeneralFieldTopic (uv_async_t *handle);

extern queue<void**> g_RtnGeneralFieldTopic_queue;
extern uv_mutex_t    g_RtnGeneralFieldTopic_mutex;
extern uv_async_t    g_RtnGeneralFieldTopic_async;
void   OnRtnGeneralFieldTopic (uv_async_t *handle);

extern queue<void**> g_RspQryGetFileTopic_queue;
extern uv_mutex_t    g_RspQryGetFileTopic_mutex;
extern uv_async_t    g_RspQryGetFileTopic_async;
void   OnRspQryGetFileTopic (uv_async_t *handle);

extern queue<void**> g_RspQryWarningQueryTopic_queue;
extern uv_mutex_t    g_RspQryWarningQueryTopic_mutex;
extern uv_async_t    g_RspQryWarningQueryTopic_async;
void   OnRspQryWarningQueryTopic (uv_async_t *handle);

extern queue<void**> g_RtnWarningQueryTopic_queue;
extern uv_mutex_t    g_RtnWarningQueryTopic_mutex;
extern uv_async_t    g_RtnWarningQueryTopic_async;
void   OnRtnWarningQueryTopic (uv_async_t *handle);

extern queue<void**> g_RtnHostConfig_queue;
extern uv_mutex_t    g_RtnHostConfig_mutex;
extern uv_async_t    g_RtnHostConfig_async;
void   OnRtnHostConfig (uv_async_t *handle);

extern queue<void**> g_RspQryGeneralOperateTopic_queue;
extern uv_mutex_t    g_RspQryGeneralOperateTopic_mutex;
extern uv_async_t    g_RspQryGeneralOperateTopic_async;
void   OnRspQryGeneralOperateTopic (uv_async_t *handle);

extern queue<void**> g_RtnGeneralOperateTopic_queue;
extern uv_mutex_t    g_RtnGeneralOperateTopic_mutex;
extern uv_async_t    g_RtnGeneralOperateTopic_async;
void   OnRtnGeneralOperateTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceLinkedTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceLinkedTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceLinkedTopic_async;
void   OnRspQryNetDeviceLinkedTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDeviceLinkedTopic_queue;
extern uv_mutex_t    g_RtnNetDeviceLinkedTopic_mutex;
extern uv_async_t    g_RtnNetDeviceLinkedTopic_async;
void   OnRtnNetDeviceLinkedTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeUserLoginStatTopic_queue;
extern uv_mutex_t    g_RspQryTradeUserLoginStatTopic_mutex;
extern uv_async_t    g_RspQryTradeUserLoginStatTopic_async;
void   OnRspQryTradeUserLoginStatTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeFrontOrderRttStatTopic_queue;
extern uv_mutex_t    g_RspQryTradeFrontOrderRttStatTopic_mutex;
extern uv_async_t    g_RspQryTradeFrontOrderRttStatTopic_async;
void   OnRspQryTradeFrontOrderRttStatTopic (uv_async_t *handle);

extern queue<void**> g_RtnTradeFrontOrderRttStatTopic_queue;
extern uv_mutex_t    g_RtnTradeFrontOrderRttStatTopic_mutex;
extern uv_async_t    g_RtnTradeFrontOrderRttStatTopic_async;
void   OnRtnTradeFrontOrderRttStatTopic (uv_async_t *handle);

extern queue<void**> g_RspQryParticTradeOrderStatesTopic_queue;
extern uv_mutex_t    g_RspQryParticTradeOrderStatesTopic_mutex;
extern uv_async_t    g_RspQryParticTradeOrderStatesTopic_async;
void   OnRspQryParticTradeOrderStatesTopic (uv_async_t *handle);

extern queue<void**> g_RtnParticTradeOrderStatesTopic_queue;
extern uv_mutex_t    g_RtnParticTradeOrderStatesTopic_mutex;
extern uv_async_t    g_RtnParticTradeOrderStatesTopic_async;
void   OnRtnParticTradeOrderStatesTopic (uv_async_t *handle);

extern queue<void**> g_RspQryRouterInfoTopic_queue;
extern uv_mutex_t    g_RspQryRouterInfoTopic_mutex;
extern uv_async_t    g_RspQryRouterInfoTopic_async;
void   OnRspQryRouterInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnRouterInfoTopic_queue;
extern uv_mutex_t    g_RtnRouterInfoTopic_mutex;
extern uv_async_t    g_RtnRouterInfoTopic_async;
void   OnRtnRouterInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryDiskIOTopic_queue;
extern uv_mutex_t    g_RspQryDiskIOTopic_mutex;
extern uv_async_t    g_RspQryDiskIOTopic_async;
void   OnRspQryDiskIOTopic (uv_async_t *handle);

extern queue<void**> g_RtnDiskIOTopic_queue;
extern uv_mutex_t    g_RtnDiskIOTopic_mutex;
extern uv_async_t    g_RtnDiskIOTopic_async;
void   OnRtnDiskIOTopic (uv_async_t *handle);

extern queue<void**> g_RspQryStatInfoTopic_queue;
extern uv_mutex_t    g_RspQryStatInfoTopic_mutex;
extern uv_async_t    g_RspQryStatInfoTopic_async;
void   OnRspQryStatInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnStatInfoTopic_queue;
extern uv_mutex_t    g_RtnStatInfoTopic_mutex;
extern uv_async_t    g_RtnStatInfoTopic_async;
void   OnRtnStatInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryTradeOrderRttCutLineTopic_queue;
extern uv_mutex_t    g_RspQryTradeOrderRttCutLineTopic_mutex;
extern uv_async_t    g_RspQryTradeOrderRttCutLineTopic_async;
void   OnRspQryTradeOrderRttCutLineTopic (uv_async_t *handle);

extern queue<void**> g_RtnTradeOrderRttCutLineTopic_queue;
extern uv_mutex_t    g_RtnTradeOrderRttCutLineTopic_mutex;
extern uv_async_t    g_RtnTradeOrderRttCutLineTopic_async;
void   OnRtnTradeOrderRttCutLineTopic (uv_async_t *handle);

extern queue<void**> g_RspQryClientInfoTopic_queue;
extern uv_mutex_t    g_RspQryClientInfoTopic_mutex;
extern uv_async_t    g_RspQryClientInfoTopic_async;
void   OnRspQryClientInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnClientInfoTopic_queue;
extern uv_mutex_t    g_RtnClientInfoTopic_mutex;
extern uv_async_t    g_RtnClientInfoTopic_async;
void   OnRtnClientInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryEventDescriptionTopic_queue;
extern uv_mutex_t    g_RspQryEventDescriptionTopic_mutex;
extern uv_async_t    g_RspQryEventDescriptionTopic_async;
void   OnRspQryEventDescriptionTopic (uv_async_t *handle);

extern queue<void**> g_RtnEventDescriptionTopic_queue;
extern uv_mutex_t    g_RtnEventDescriptionTopic_mutex;
extern uv_async_t    g_RtnEventDescriptionTopic_async;
void   OnRtnEventDescriptionTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFrontUniqueIDTopic_queue;
extern uv_mutex_t    g_RspQryFrontUniqueIDTopic_mutex;
extern uv_async_t    g_RspQryFrontUniqueIDTopic_async;
void   OnRspQryFrontUniqueIDTopic (uv_async_t *handle);

extern queue<void**> g_RtnFrontUniqueIDTopic_queue;
extern uv_mutex_t    g_RtnFrontUniqueIDTopic_mutex;
extern uv_async_t    g_RtnFrontUniqueIDTopic_async;
void   OnRtnFrontUniqueIDTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPartyLinkAddrChangeTopic_queue;
extern uv_mutex_t    g_RspQryNetPartyLinkAddrChangeTopic_mutex;
extern uv_async_t    g_RspQryNetPartyLinkAddrChangeTopic_async;
void   OnRspQryNetPartyLinkAddrChangeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPartyLinkAddrChangeTopic_queue;
extern uv_mutex_t    g_RtnNetPartyLinkAddrChangeTopic_mutex;
extern uv_async_t    g_RtnNetPartyLinkAddrChangeTopic_async;
void   OnRtnNetPartyLinkAddrChangeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDelPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetDelPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetDelPartyLinkInfoTopic_async;
void   OnRspQryNetDelPartyLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDelPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetDelPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RtnNetDelPartyLinkInfoTopic_async;
void   OnRtnNetDelPartyLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryPerformanceTopTopic_queue;
extern uv_mutex_t    g_RspQryPerformanceTopTopic_mutex;
extern uv_async_t    g_RspQryPerformanceTopTopic_async;
void   OnRspQryPerformanceTopTopic (uv_async_t *handle);

extern queue<void**> g_RtnPerformanceTopTopic_queue;
extern uv_mutex_t    g_RtnPerformanceTopTopic_mutex;
extern uv_async_t    g_RtnPerformanceTopTopic_async;
void   OnRtnPerformanceTopTopic (uv_async_t *handle);

extern queue<void**> g_RspQryInstrumentStatusTopic_queue;
extern uv_mutex_t    g_RspQryInstrumentStatusTopic_mutex;
extern uv_async_t    g_RspQryInstrumentStatusTopic_async;
void   OnRspQryInstrumentStatusTopic (uv_async_t *handle);

extern queue<void**> g_RtnInstrumentStatusTopic_queue;
extern uv_mutex_t    g_RtnInstrumentStatusTopic_mutex;
extern uv_async_t    g_RtnInstrumentStatusTopic_async;
void   OnRtnInstrumentStatusTopic (uv_async_t *handle);

extern queue<void**> g_RspQryCurrTradingSegmentAttrTopic_queue;
extern uv_mutex_t    g_RspQryCurrTradingSegmentAttrTopic_mutex;
extern uv_async_t    g_RspQryCurrTradingSegmentAttrTopic_async;
void   OnRspQryCurrTradingSegmentAttrTopic (uv_async_t *handle);

extern queue<void**> g_RtnCurrTradingSegmentAttrTopic_queue;
extern uv_mutex_t    g_RtnCurrTradingSegmentAttrTopic_mutex;
extern uv_async_t    g_RtnCurrTradingSegmentAttrTopic_async;
void   OnRtnCurrTradingSegmentAttrTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetAreaTopic_queue;
extern uv_mutex_t    g_RspQryNetAreaTopic_mutex;
extern uv_async_t    g_RspQryNetAreaTopic_async;
void   OnRspQryNetAreaTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetAreaTopic_queue;
extern uv_mutex_t    g_RtnNetAreaTopic_mutex;
extern uv_async_t    g_RtnNetAreaTopic_async;
void   OnRtnNetAreaTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetSubAreaTopic_queue;
extern uv_mutex_t    g_RspQryNetSubAreaTopic_mutex;
extern uv_async_t    g_RspQryNetSubAreaTopic_async;
void   OnRspQryNetSubAreaTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetSubAreaTopic_queue;
extern uv_mutex_t    g_RtnNetSubAreaTopic_mutex;
extern uv_async_t    g_RtnNetSubAreaTopic_async;
void   OnRtnNetSubAreaTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetSubAreaIPTopic_queue;
extern uv_mutex_t    g_RspQryNetSubAreaIPTopic_mutex;
extern uv_async_t    g_RspQryNetSubAreaIPTopic_async;
void   OnRspQryNetSubAreaIPTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetSubAreaIPTopic_queue;
extern uv_mutex_t    g_RtnNetSubAreaIPTopic_mutex;
extern uv_async_t    g_RtnNetSubAreaIPTopic_async;
void   OnRtnNetSubAreaIPTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceTopic_async;
void   OnRspQryNetDeviceTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDeviceTopic_queue;
extern uv_mutex_t    g_RtnNetDeviceTopic_mutex;
extern uv_async_t    g_RtnNetDeviceTopic_async;
void   OnRtnNetDeviceTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceDetectTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceDetectTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceDetectTopic_async;
void   OnRspQryNetDeviceDetectTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetBuildingTopic_queue;
extern uv_mutex_t    g_RspQryNetBuildingTopic_mutex;
extern uv_async_t    g_RspQryNetBuildingTopic_async;
void   OnRspQryNetBuildingTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetBuildingTopic_queue;
extern uv_mutex_t    g_RtnNetBuildingTopic_mutex;
extern uv_async_t    g_RtnNetBuildingTopic_async;
void   OnRtnNetBuildingTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetRoomTopic_queue;
extern uv_mutex_t    g_RspQryNetRoomTopic_mutex;
extern uv_async_t    g_RspQryNetRoomTopic_async;
void   OnRspQryNetRoomTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetRoomTopic_queue;
extern uv_mutex_t    g_RtnNetRoomTopic_mutex;
extern uv_async_t    g_RtnNetRoomTopic_async;
void   OnRtnNetRoomTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetCabinetsTopic_queue;
extern uv_mutex_t    g_RspQryNetCabinetsTopic_mutex;
extern uv_async_t    g_RspQryNetCabinetsTopic_async;
void   OnRspQryNetCabinetsTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetCabinetsTopic_queue;
extern uv_mutex_t    g_RtnNetCabinetsTopic_mutex;
extern uv_async_t    g_RtnNetCabinetsTopic_async;
void   OnRtnNetCabinetsTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetOIDTopic_queue;
extern uv_mutex_t    g_RspQryNetOIDTopic_mutex;
extern uv_async_t    g_RspQryNetOIDTopic_async;
void   OnRspQryNetOIDTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetOIDTopic_queue;
extern uv_mutex_t    g_RtnNetOIDTopic_mutex;
extern uv_async_t    g_RtnNetOIDTopic_async;
void   OnRtnNetOIDTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetTimePolicyTopic_queue;
extern uv_mutex_t    g_RspQryNetTimePolicyTopic_mutex;
extern uv_async_t    g_RspQryNetTimePolicyTopic_async;
void   OnRspQryNetTimePolicyTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetTimePolicyTopic_queue;
extern uv_mutex_t    g_RtnNetTimePolicyTopic_mutex;
extern uv_async_t    g_RtnNetTimePolicyTopic_async;
void   OnRtnNetTimePolicyTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetGatherTaskTopic_queue;
extern uv_mutex_t    g_RspQryNetGatherTaskTopic_mutex;
extern uv_async_t    g_RspQryNetGatherTaskTopic_async;
void   OnRspQryNetGatherTaskTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetGatherTaskTopic_queue;
extern uv_mutex_t    g_RtnNetGatherTaskTopic_mutex;
extern uv_async_t    g_RtnNetGatherTaskTopic_async;
void   OnRtnNetGatherTaskTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceChgTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceChgTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceChgTopic_async;
void   OnRspQryNetDeviceChgTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDeviceChgTopic_queue;
extern uv_mutex_t    g_RtnNetDeviceChgTopic_mutex;
extern uv_async_t    g_RtnNetDeviceChgTopic_async;
void   OnRtnNetDeviceChgTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceTypeTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceTypeTopic_async;
void   OnRspQryNetDeviceTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDeviceTypeTopic_queue;
extern uv_mutex_t    g_RtnNetDeviceTypeTopic_mutex;
extern uv_async_t    g_RtnNetDeviceTypeTopic_async;
void   OnRtnNetDeviceTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDeviceCategoryTopic_queue;
extern uv_mutex_t    g_RspQryNetDeviceCategoryTopic_mutex;
extern uv_async_t    g_RspQryNetDeviceCategoryTopic_async;
void   OnRspQryNetDeviceCategoryTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDeviceCategoryTopic_queue;
extern uv_mutex_t    g_RtnNetDeviceCategoryTopic_mutex;
extern uv_async_t    g_RtnNetDeviceCategoryTopic_async;
void   OnRtnNetDeviceCategoryTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetManufactoryTopic_queue;
extern uv_mutex_t    g_RspQryNetManufactoryTopic_mutex;
extern uv_async_t    g_RspQryNetManufactoryTopic_async;
void   OnRspQryNetManufactoryTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetManufactoryTopic_queue;
extern uv_mutex_t    g_RtnNetManufactoryTopic_mutex;
extern uv_async_t    g_RtnNetManufactoryTopic_async;
void   OnRtnNetManufactoryTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetCommunityTopic_queue;
extern uv_mutex_t    g_RspQryNetCommunityTopic_mutex;
extern uv_async_t    g_RspQryNetCommunityTopic_async;
void   OnRspQryNetCommunityTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetCommunityTopic_queue;
extern uv_mutex_t    g_RtnNetCommunityTopic_mutex;
extern uv_async_t    g_RtnNetCommunityTopic_async;
void   OnRtnNetCommunityTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPortTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetPortTypeTopic_mutex;
extern uv_async_t    g_RspQryNetPortTypeTopic_async;
void   OnRspQryNetPortTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPortTypeTopic_queue;
extern uv_mutex_t    g_RtnNetPortTypeTopic_mutex;
extern uv_async_t    g_RtnNetPortTypeTopic_async;
void   OnRtnNetPortTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPartAccessSpotTopic_queue;
extern uv_mutex_t    g_RspQryNetPartAccessSpotTopic_mutex;
extern uv_async_t    g_RspQryNetPartAccessSpotTopic_async;
void   OnRspQryNetPartAccessSpotTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPartAccessSpotTopic_queue;
extern uv_mutex_t    g_RtnNetPartAccessSpotTopic_mutex;
extern uv_async_t    g_RtnNetPartAccessSpotTopic_async;
void   OnRtnNetPartAccessSpotTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetInterfaceTopic_queue;
extern uv_mutex_t    g_RspQryNetInterfaceTopic_mutex;
extern uv_async_t    g_RspQryNetInterfaceTopic_async;
void   OnRspQryNetInterfaceTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetInterfaceTopic_queue;
extern uv_mutex_t    g_RtnNetInterfaceTopic_mutex;
extern uv_async_t    g_RtnNetInterfaceTopic_async;
void   OnRtnNetInterfaceTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetGeneralOIDTopic_queue;
extern uv_mutex_t    g_RspQryNetGeneralOIDTopic_mutex;
extern uv_async_t    g_RspQryNetGeneralOIDTopic_async;
void   OnRspQryNetGeneralOIDTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetGeneralOIDTopic_queue;
extern uv_mutex_t    g_RtnNetGeneralOIDTopic_mutex;
extern uv_async_t    g_RtnNetGeneralOIDTopic_async;
void   OnRtnNetGeneralOIDTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTypeTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTypeTopic_async;
void   OnRspQryNetMonitorTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTypeTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTypeTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTypeTopic_async;
void   OnRtnNetMonitorTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorAttrScopeTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorAttrScopeTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorAttrScopeTopic_async;
void   OnRspQryNetMonitorAttrScopeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorAttrScopeTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorAttrScopeTopic_mutex;
extern uv_async_t    g_RtnNetMonitorAttrScopeTopic_async;
void   OnRtnNetMonitorAttrScopeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorAttrTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorAttrTypeTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorAttrTypeTopic_async;
void   OnRspQryNetMonitorAttrTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorAttrTypeTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorAttrTypeTopic_mutex;
extern uv_async_t    g_RtnNetMonitorAttrTypeTopic_async;
void   OnRtnNetMonitorAttrTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorObjectAttrTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorObjectAttrTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorObjectAttrTopic_async;
void   OnRspQryNetMonitorObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorObjectAttrTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorObjectAttrTopic_mutex;
extern uv_async_t    g_RtnNetMonitorObjectAttrTopic_async;
void   OnRtnNetMonitorObjectAttrTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetFuncAreaTopic_queue;
extern uv_mutex_t    g_RspQryNetFuncAreaTopic_mutex;
extern uv_async_t    g_RspQryNetFuncAreaTopic_async;
void   OnRspQryNetFuncAreaTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetFuncAreaTopic_queue;
extern uv_mutex_t    g_RtnNetFuncAreaTopic_mutex;
extern uv_async_t    g_RtnNetFuncAreaTopic_async;
void   OnRtnNetFuncAreaTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorCommandTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorCommandTypeTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorCommandTypeTopic_async;
void   OnRspQryNetMonitorCommandTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorCommandTypeTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorCommandTypeTopic_mutex;
extern uv_async_t    g_RtnNetMonitorCommandTypeTopic_async;
void   OnRtnNetMonitorCommandTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorActionGroupTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorActionGroupTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorActionGroupTopic_async;
void   OnRspQryNetMonitorActionGroupTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorActionGroupTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorActionGroupTopic_mutex;
extern uv_async_t    g_RtnNetMonitorActionGroupTopic_async;
void   OnRtnNetMonitorActionGroupTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorDeviceGroupTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorDeviceGroupTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorDeviceGroupTopic_async;
void   OnRspQryNetMonitorDeviceGroupTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorDeviceGroupTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorDeviceGroupTopic_mutex;
extern uv_async_t    g_RtnNetMonitorDeviceGroupTopic_async;
void   OnRtnNetMonitorDeviceGroupTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTaskInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTaskInfoTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTaskInfoTopic_async;
void   OnRspQryNetMonitorTaskInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTaskInfoTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTaskInfoTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTaskInfoTopic_async;
void   OnRtnNetMonitorTaskInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTaskResultTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTaskResultTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTaskResultTopic_async;
void   OnRspQryNetMonitorTaskResultTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTaskResultTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTaskResultTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTaskResultTopic_async;
void   OnRtnNetMonitorTaskResultTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTaskObjectSetTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTaskObjectSetTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTaskObjectSetTopic_async;
void   OnRspQryNetMonitorTaskObjectSetTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTaskObjectSetTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTaskObjectSetTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTaskObjectSetTopic_async;
void   OnRtnNetMonitorTaskObjectSetTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetPartyLinkInfoTopic_async;
void   OnRspQryNetPartyLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RtnNetPartyLinkInfoTopic_async;
void   OnRtnNetPartyLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorActionAttrTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorActionAttrTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorActionAttrTopic_async;
void   OnRspQryNetMonitorActionAttrTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorActionAttrTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorActionAttrTopic_mutex;
extern uv_async_t    g_RtnNetMonitorActionAttrTopic_async;
void   OnRtnNetMonitorActionAttrTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetModuleTopic_queue;
extern uv_mutex_t    g_RspQryNetModuleTopic_mutex;
extern uv_async_t    g_RspQryNetModuleTopic_async;
void   OnRspQryNetModuleTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetModuleTopic_queue;
extern uv_mutex_t    g_RtnNetModuleTopic_mutex;
extern uv_async_t    g_RtnNetModuleTopic_async;
void   OnRtnNetModuleTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetEventExprTopic_queue;
extern uv_mutex_t    g_RspQryNetEventExprTopic_mutex;
extern uv_async_t    g_RspQryNetEventExprTopic_async;
void   OnRspQryNetEventExprTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetEventExprTopic_queue;
extern uv_mutex_t    g_RtnNetEventExprTopic_mutex;
extern uv_async_t    g_RtnNetEventExprTopic_async;
void   OnRtnNetEventExprTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetEventTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetEventTypeTopic_mutex;
extern uv_async_t    g_RspQryNetEventTypeTopic_async;
void   OnRspQryNetEventTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetEventTypeTopic_queue;
extern uv_mutex_t    g_RtnNetEventTypeTopic_mutex;
extern uv_async_t    g_RtnNetEventTypeTopic_async;
void   OnRtnNetEventTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetSubEventTypeTopic_queue;
extern uv_mutex_t    g_RspQryNetSubEventTypeTopic_mutex;
extern uv_async_t    g_RspQryNetSubEventTypeTopic_async;
void   OnRspQryNetSubEventTypeTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetSubEventTypeTopic_queue;
extern uv_mutex_t    g_RtnNetSubEventTypeTopic_mutex;
extern uv_async_t    g_RtnNetSubEventTypeTopic_async;
void   OnRtnNetSubEventTypeTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetEventLevelTopic_queue;
extern uv_mutex_t    g_RspQryNetEventLevelTopic_mutex;
extern uv_async_t    g_RspQryNetEventLevelTopic_async;
void   OnRspQryNetEventLevelTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetEventLevelTopic_queue;
extern uv_mutex_t    g_RtnNetEventLevelTopic_mutex;
extern uv_async_t    g_RtnNetEventLevelTopic_async;
void   OnRtnNetEventLevelTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTaskStatusResultTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTaskStatusResultTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTaskStatusResultTopic_async;
void   OnRspQryNetMonitorTaskStatusResultTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTaskStatusResultTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTaskStatusResultTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTaskStatusResultTopic_async;
void   OnRtnNetMonitorTaskStatusResultTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetCfgFileTopic_queue;
extern uv_mutex_t    g_RspQryNetCfgFileTopic_mutex;
extern uv_async_t    g_RspQryNetCfgFileTopic_async;
void   OnRspQryNetCfgFileTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetCfgFileTopic_queue;
extern uv_mutex_t    g_RtnNetCfgFileTopic_mutex;
extern uv_async_t    g_RtnNetCfgFileTopic_async;
void   OnRtnNetCfgFileTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorDeviceTaskTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorDeviceTaskTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorDeviceTaskTopic_async;
void   OnRspQryNetMonitorDeviceTaskTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorDeviceTaskTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorDeviceTaskTopic_mutex;
extern uv_async_t    g_RtnNetMonitorDeviceTaskTopic_async;
void   OnRtnNetMonitorDeviceTaskTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMonitorTaskInstAttrsTopic_queue;
extern uv_mutex_t    g_RspQryNetMonitorTaskInstAttrsTopic_mutex;
extern uv_async_t    g_RspQryNetMonitorTaskInstAttrsTopic_async;
void   OnRspQryNetMonitorTaskInstAttrsTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMonitorTaskInstAttrsTopic_queue;
extern uv_mutex_t    g_RtnNetMonitorTaskInstAttrsTopic_mutex;
extern uv_async_t    g_RtnNetMonitorTaskInstAttrsTopic_async;
void   OnRtnNetMonitorTaskInstAttrsTopic (uv_async_t *handle);

extern queue<void**> g_RspQryFileGeneralOperTopic_queue;
extern uv_mutex_t    g_RspQryFileGeneralOperTopic_mutex;
extern uv_async_t    g_RspQryFileGeneralOperTopic_async;
void   OnRspQryFileGeneralOperTopic (uv_async_t *handle);

extern queue<void**> g_RtnFileGeneralOperTopic_queue;
extern uv_mutex_t    g_RtnFileGeneralOperTopic_mutex;
extern uv_async_t    g_RtnFileGeneralOperTopic_async;
void   OnRtnFileGeneralOperTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetBaseLineTopic_queue;
extern uv_mutex_t    g_RspQryNetBaseLineTopic_mutex;
extern uv_async_t    g_RspQryNetBaseLineTopic_async;
void   OnRspQryNetBaseLineTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetBaseLineTopic_queue;
extern uv_mutex_t    g_RtnNetBaseLineTopic_mutex;
extern uv_async_t    g_RtnNetBaseLineTopic_async;
void   OnRtnNetBaseLineTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetBaseLineTaskTopic_queue;
extern uv_mutex_t    g_RspQryNetBaseLineTaskTopic_mutex;
extern uv_async_t    g_RspQryNetBaseLineTaskTopic_async;
void   OnRspQryNetBaseLineTaskTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetBaseLineTaskTopic_queue;
extern uv_mutex_t    g_RtnNetBaseLineTaskTopic_mutex;
extern uv_async_t    g_RtnNetBaseLineTaskTopic_async;
void   OnRtnNetBaseLineTaskTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetBaseLineResultTopic_queue;
extern uv_mutex_t    g_RspQryNetBaseLineResultTopic_mutex;
extern uv_async_t    g_RspQryNetBaseLineResultTopic_async;
void   OnRspQryNetBaseLineResultTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetBaseLineResultTopic_queue;
extern uv_mutex_t    g_RtnNetBaseLineResultTopic_mutex;
extern uv_async_t    g_RtnNetBaseLineResultTopic_async;
void   OnRtnNetBaseLineResultTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPartyLinkStatusInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetPartyLinkStatusInfoTopic_mutex;
extern uv_async_t    g_RspQryNetPartyLinkStatusInfoTopic_async;
void   OnRspQryNetPartyLinkStatusInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPartyLinkStatusInfoTopic_queue;
extern uv_mutex_t    g_RtnNetPartyLinkStatusInfoTopic_mutex;
extern uv_async_t    g_RtnNetPartyLinkStatusInfoTopic_async;
void   OnRtnNetPartyLinkStatusInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetMemberSDHLineInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetMemberSDHLineInfoTopic_mutex;
extern uv_async_t    g_RspQryNetMemberSDHLineInfoTopic_async;
void   OnRspQryNetMemberSDHLineInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetMemberSDHLineInfoTopic_queue;
extern uv_mutex_t    g_RtnNetMemberSDHLineInfoTopic_mutex;
extern uv_async_t    g_RtnNetMemberSDHLineInfoTopic_async;
void   OnRtnNetMemberSDHLineInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetDDNLinkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetDDNLinkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetDDNLinkInfoTopic_async;
void   OnRspQryNetDDNLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetDDNLinkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetDDNLinkInfoTopic_mutex;
extern uv_async_t    g_RtnNetDDNLinkInfoTopic_async;
void   OnRtnNetDDNLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPseudMemberLinkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetPseudMemberLinkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetPseudMemberLinkInfoTopic_async;
void   OnRspQryNetPseudMemberLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPseudMemberLinkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetPseudMemberLinkInfoTopic_mutex;
extern uv_async_t    g_RtnNetPseudMemberLinkInfoTopic_async;
void   OnRtnNetPseudMemberLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryOuterDeviceInfTopic_queue;
extern uv_mutex_t    g_RspQryOuterDeviceInfTopic_mutex;
extern uv_async_t    g_RspQryOuterDeviceInfTopic_async;
void   OnRspQryOuterDeviceInfTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetOuterDeviceInfTopic_queue;
extern uv_mutex_t    g_RtnNetOuterDeviceInfTopic_mutex;
extern uv_async_t    g_RtnNetOuterDeviceInfTopic_async;
void   OnRtnNetOuterDeviceInfTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetLocalPingResultInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetLocalPingResultInfoTopic_mutex;
extern uv_async_t    g_RspQryNetLocalPingResultInfoTopic_async;
void   OnRspQryNetLocalPingResultInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetLocalPingResultInfoTopic_queue;
extern uv_mutex_t    g_RtnNetLocalPingResultInfoTopic_mutex;
extern uv_async_t    g_RtnNetLocalPingResultInfoTopic_async;
void   OnRtnNetLocalPingResultInfoTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetRomotePingResultInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetRomotePingResultInfoTopic_mutex;
extern uv_async_t    g_RspQryNetRomotePingResultInfoTopic_async;
void   OnRspQryNetRomotePingResultInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetRomotePingResultInfoTopic_queue;
extern uv_mutex_t    g_RtnNetRomotePingResultInfoTopic_mutex;
extern uv_async_t    g_RtnNetRomotePingResultInfoTopic_async;
void   OnRtnNetRomotePingResultInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnMonitorTopProcessInfo_queue;
extern uv_mutex_t    g_RtnMonitorTopProcessInfo_mutex;
extern uv_async_t    g_RtnMonitorTopProcessInfo_async;
void   OnRtnMonitorTopProcessInfo (uv_async_t *handle);

extern queue<void**> g_RspQrySysInternalTopologyTopic_queue;
extern uv_mutex_t    g_RspQrySysInternalTopologyTopic_mutex;
extern uv_async_t    g_RspQrySysInternalTopologyTopic_async;
void   OnRspQrySysInternalTopologyTopic (uv_async_t *handle);

extern queue<void**> g_RtnSysInternalTopologyTopic_queue;
extern uv_mutex_t    g_RtnSysInternalTopologyTopic_mutex;
extern uv_async_t    g_RtnSysInternalTopologyTopic_async;
void   OnRtnSysInternalTopologyTopic (uv_async_t *handle);

extern queue<void**> g_RspQryMemberLinkCostTopic_queue;
extern uv_mutex_t    g_RspQryMemberLinkCostTopic_mutex;
extern uv_async_t    g_RspQryMemberLinkCostTopic_async;
void   OnRspQryMemberLinkCostTopic (uv_async_t *handle);

extern queue<void**> g_RtnMemberLinkCostTopic_queue;
extern uv_mutex_t    g_RtnMemberLinkCostTopic_mutex;
extern uv_async_t    g_RtnMemberLinkCostTopic_async;
void   OnRtnMemberLinkCostTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetPartylinkMonthlyRentTopic_queue;
extern uv_mutex_t    g_RspQryNetPartylinkMonthlyRentTopic_mutex;
extern uv_async_t    g_RspQryNetPartylinkMonthlyRentTopic_async;
void   OnRspQryNetPartylinkMonthlyRentTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetPartylinkMonthlyRentTopic_queue;
extern uv_mutex_t    g_RtnNetPartylinkMonthlyRentTopic_mutex;
extern uv_async_t    g_RtnNetPartylinkMonthlyRentTopic_async;
void   OnRtnNetPartylinkMonthlyRentTopic (uv_async_t *handle);

extern queue<void**> g_RspQryNetNonPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RspQryNetNonPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RspQryNetNonPartyLinkInfoTopic_async;
void   OnRspQryNetNonPartyLinkInfoTopic (uv_async_t *handle);

extern queue<void**> g_RtnNetNonPartyLinkInfoTopic_queue;
extern uv_mutex_t    g_RtnNetNonPartyLinkInfoTopic_mutex;
extern uv_async_t    g_RtnNetNonPartyLinkInfoTopic_async;
void   OnRtnNetNonPartyLinkInfoTopic (uv_async_t *handle);



#endif