#include "v8-transform-data.h"
#include "v8-transform-func.h"
#include "FtdcSysUserApiStruct.h"
#include "tool-function.h"
#include "id-func.h"
#include <fstream>
using std::fstream;

using namespace v8;

fstream g_RunningResult_File;

void InitV8Transformdata () {
    
    uv_async_init (uv_default_loop(), &g_FrontConnected_async, OnFrontConnected);
    uv_mutex_init (&g_FrontConnected_mutex);

    uv_async_init (uv_default_loop(), &g_FrontDisconnected_async, OnFrontDisconnected);
    uv_mutex_init (&g_FrontDisconnected_mutex);

    uv_async_init (uv_default_loop(), &g_HeartBeatWarning_async, OnHeartBeatWarning);
    uv_mutex_init (&g_HeartBeatWarning_mutex);
            
    uv_async_init (uv_default_loop(), &g_RspQryTopCpuInfoTopic_async, OnRspQryTopCpuInfoTopic);
    uv_mutex_init (&g_RspQryTopCpuInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTopCpuInfoTopic_async, OnRtnTopCpuInfoTopic);
    uv_mutex_init (&g_RtnTopCpuInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTopMemInfoTopic_async, OnRspQryTopMemInfoTopic);
    uv_mutex_init (&g_RspQryTopMemInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTopMemInfoTopic_async, OnRtnTopMemInfoTopic);
    uv_mutex_init (&g_RtnTopMemInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTopProcessInfoTopic_async, OnRspQryTopProcessInfoTopic);
    uv_mutex_init (&g_RspQryTopProcessInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTopProcessInfoTopic_async, OnRtnTopProcessInfoTopic);
    uv_mutex_init (&g_RtnTopProcessInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFileSystemInfoTopic_async, OnRspQryFileSystemInfoTopic);
    uv_mutex_init (&g_RspQryFileSystemInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFileSystemInfoTopic_async, OnRtnFileSystemInfoTopic);
    uv_mutex_init (&g_RtnFileSystemInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetworkInfoTopic_async, OnRspQryNetworkInfoTopic);
    uv_mutex_init (&g_RspQryNetworkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetworkInfoTopic_async, OnRtnNetworkInfoTopic);
    uv_mutex_init (&g_RtnNetworkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientLoginTopic_async, OnRspQryClientLoginTopic);
    uv_mutex_init (&g_RspQryClientLoginTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMonitorObjectTopic_async, OnRspQryMonitorObjectTopic);
    uv_mutex_init (&g_RspQryMonitorObjectTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMonitorObjectTopic_async, OnRtnMonitorObjectTopic);
    uv_mutex_init (&g_RtnMonitorObjectTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryObjectRationalTopic_async, OnRspQryObjectRationalTopic);
    uv_mutex_init (&g_RspQryObjectRationalTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnObjectRationalTopic_async, OnRtnObjectRationalTopic);
    uv_mutex_init (&g_RtnObjectRationalTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySyslogInfoTopic_async, OnRspQrySyslogInfoTopic);
    uv_mutex_init (&g_RspQrySyslogInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSyslogInfoTopic_async, OnRtnSyslogInfoTopic);
    uv_mutex_init (&g_RtnSyslogInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySubscriberTopic_async, OnRspQrySubscriberTopic);
    uv_mutex_init (&g_RspQrySubscriberTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryOidRelationTopic_async, OnRspQryOidRelationTopic);
    uv_mutex_init (&g_RspQryOidRelationTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnOidRelationTopic_async, OnRtnOidRelationTopic);
    uv_mutex_init (&g_RtnOidRelationTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryUserInfoTopic_async, OnRspQryUserInfoTopic);
    uv_mutex_init (&g_RspQryUserInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnUserInfoTopic_async, OnRtnUserInfoTopic);
    uv_mutex_init (&g_RtnUserInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryOnlineUserInfoTopic_async, OnRspQryOnlineUserInfoTopic);
    uv_mutex_init (&g_RspQryOnlineUserInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnOnlineUserInfoTopic_async, OnRtnOnlineUserInfoTopic);
    uv_mutex_init (&g_RtnOnlineUserInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryWarningEventTopic_async, OnRspQryWarningEventTopic);
    uv_mutex_init (&g_RspQryWarningEventTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnWarningEventTopic_async, OnRtnWarningEventTopic);
    uv_mutex_init (&g_RtnWarningEventTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryCPUUsageTopic_async, OnRspQryCPUUsageTopic);
    uv_mutex_init (&g_RspQryCPUUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnCPUUsageTopic_async, OnRtnCPUUsageTopic);
    uv_mutex_init (&g_RtnCPUUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMemoryUsageTopic_async, OnRspQryMemoryUsageTopic);
    uv_mutex_init (&g_RspQryMemoryUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMemoryUsageTopic_async, OnRtnMemoryUsageTopic);
    uv_mutex_init (&g_RtnMemoryUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryDiskUsageTopic_async, OnRspQryDiskUsageTopic);
    uv_mutex_init (&g_RspQryDiskUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnDiskUsageTopic_async, OnRtnDiskUsageTopic);
    uv_mutex_init (&g_RtnDiskUsageTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryObjectAttrTopic_async, OnRspQryObjectAttrTopic);
    uv_mutex_init (&g_RspQryObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnObjectAttrTopic_async, OnRtnObjectAttrTopic);
    uv_mutex_init (&g_RtnObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryInvalidateOrderTopic_async, OnRspQryInvalidateOrderTopic);
    uv_mutex_init (&g_RspQryInvalidateOrderTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnInvalidateOrderTopic_async, OnRtnInvalidateOrderTopic);
    uv_mutex_init (&g_RtnInvalidateOrderTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryOrderStatusTopic_async, OnRspQryOrderStatusTopic);
    uv_mutex_init (&g_RspQryOrderStatusTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnOrderStatusTopic_async, OnRtnOrderStatusTopic);
    uv_mutex_init (&g_RtnOrderStatusTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryBargainOrderTopic_async, OnRspQryBargainOrderTopic);
    uv_mutex_init (&g_RspQryBargainOrderTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnBargainOrderTopic_async, OnRtnBargainOrderTopic);
    uv_mutex_init (&g_RtnBargainOrderTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryInstPropertyTopic_async, OnRspQryInstPropertyTopic);
    uv_mutex_init (&g_RspQryInstPropertyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnInstPropertyTopic_async, OnRtnInstPropertyTopic);
    uv_mutex_init (&g_RtnInstPropertyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMarginRateTopic_async, OnRspQryMarginRateTopic);
    uv_mutex_init (&g_RspQryMarginRateTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMarginRateTopic_async, OnRtnMarginRateTopic);
    uv_mutex_init (&g_RtnMarginRateTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPriceLimitTopic_async, OnRspQryPriceLimitTopic);
    uv_mutex_init (&g_RspQryPriceLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPriceLimitTopic_async, OnRtnPriceLimitTopic);
    uv_mutex_init (&g_RtnPriceLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPartPosiLimitTopic_async, OnRspQryPartPosiLimitTopic);
    uv_mutex_init (&g_RspQryPartPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPartPosiLimitTopic_async, OnRtnPartPosiLimitTopic);
    uv_mutex_init (&g_RtnPartPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientPosiLimitTopic_async, OnRspQryClientPosiLimitTopic);
    uv_mutex_init (&g_RspQryClientPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnClientPosiLimitTopic_async, OnRtnClientPosiLimitTopic);
    uv_mutex_init (&g_RtnClientPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySpecialPosiLimitTopic_async, OnRspQrySpecialPosiLimitTopic);
    uv_mutex_init (&g_RspQrySpecialPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSpecialPosiLimitTopic_async, OnRtnSpecialPosiLimitTopic);
    uv_mutex_init (&g_RtnSpecialPosiLimitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTransactionChgTopic_async, OnRspQryTransactionChgTopic);
    uv_mutex_init (&g_RspQryTransactionChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTransactionChgTopic_async, OnRtnTransactionChgTopic);
    uv_mutex_init (&g_RtnTransactionChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientChgTopic_async, OnRspQryClientChgTopic);
    uv_mutex_init (&g_RspQryClientChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnClientChgTopic_async, OnRtnClientChgTopic);
    uv_mutex_init (&g_RtnClientChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPartClientChgTopic_async, OnRspQryPartClientChgTopic);
    uv_mutex_init (&g_RspQryPartClientChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPartClientChgTopic_async, OnRtnPartClientChgTopic);
    uv_mutex_init (&g_RtnPartClientChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPosiLimitChgTopic_async, OnRspQryPosiLimitChgTopic);
    uv_mutex_init (&g_RspQryPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPosiLimitChgTopic_async, OnRtnPosiLimitChgTopic);
    uv_mutex_init (&g_RtnPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHedgeDetailChgTopic_async, OnRspQryHedgeDetailChgTopic);
    uv_mutex_init (&g_RspQryHedgeDetailChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnHedgeDetailChgTopic_async, OnRtnHedgeDetailChgTopic);
    uv_mutex_init (&g_RtnHedgeDetailChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryParticipantChgTopic_async, OnRspQryParticipantChgTopic);
    uv_mutex_init (&g_RspQryParticipantChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnParticipantChgTopic_async, OnRtnParticipantChgTopic);
    uv_mutex_init (&g_RtnParticipantChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMarginRateChgTopic_async, OnRspQryMarginRateChgTopic);
    uv_mutex_init (&g_RspQryMarginRateChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMarginRateChgTopic_async, OnRtnMarginRateChgTopic);
    uv_mutex_init (&g_RtnMarginRateChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryUserIpChgTopic_async, OnRspQryUserIpChgTopic);
    uv_mutex_init (&g_RspQryUserIpChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnUserIpChgTopic_async, OnRtnUserIpChgTopic);
    uv_mutex_init (&g_RtnUserIpChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientPosiLimitChgTopic_async, OnRspQryClientPosiLimitChgTopic);
    uv_mutex_init (&g_RspQryClientPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnClientPosiLimitChgTopic_async, OnRtnClientPosiLimitChgTopic);
    uv_mutex_init (&g_RtnClientPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySpecPosiLimitChgTopic_async, OnRspQrySpecPosiLimitChgTopic);
    uv_mutex_init (&g_RspQrySpecPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSpecPosiLimitChgTopic_async, OnRtnSpecPosiLimitChgTopic);
    uv_mutex_init (&g_RtnSpecPosiLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHistoryObjectAttrTopic_async, OnRspQryHistoryObjectAttrTopic);
    uv_mutex_init (&g_RspQryHistoryObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnHistoryObjectAttrTopic_async, OnRtnHistoryObjectAttrTopic);
    uv_mutex_init (&g_RtnHistoryObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFrontInfoTopic_async, OnRspQryFrontInfoTopic);
    uv_mutex_init (&g_RspQryFrontInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFrontInfoTopic_async, OnRtnFrontInfoTopic);
    uv_mutex_init (&g_RtnFrontInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysUserLoginTopic_async, OnRspQrySysUserLoginTopic);
    uv_mutex_init (&g_RspQrySysUserLoginTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysUserLogoutTopic_async, OnRspQrySysUserLogoutTopic);
    uv_mutex_init (&g_RspQrySysUserLogoutTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysUserPasswordUpdateTopic_async, OnRspQrySysUserPasswordUpdateTopic);
    uv_mutex_init (&g_RspQrySysUserPasswordUpdateTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysUserRegisterTopic_async, OnRspQrySysUserRegisterTopic);
    uv_mutex_init (&g_RspQrySysUserRegisterTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysUserDeleteTopic_async, OnRspQrySysUserDeleteTopic);
    uv_mutex_init (&g_RspQrySysUserDeleteTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryParticipantInitTopic_async, OnRspQryParticipantInitTopic);
    uv_mutex_init (&g_RspQryParticipantInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnParticipantInitTopic_async, OnRtnParticipantInitTopic);
    uv_mutex_init (&g_RtnParticipantInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryUserInitTopic_async, OnRspQryUserInitTopic);
    uv_mutex_init (&g_RspQryUserInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnUserInitTopic_async, OnRtnUserInitTopic);
    uv_mutex_init (&g_RtnUserInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientInitTopic_async, OnRspQryClientInitTopic);
    uv_mutex_init (&g_RspQryClientInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnClientInitTopic_async, OnRtnClientInitTopic);
    uv_mutex_init (&g_RtnClientInitTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeLogTopic_async, OnRspQryTradeLogTopic);
    uv_mutex_init (&g_RspQryTradeLogTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTradeLogTopic_async, OnRtnTradeLogTopic);
    uv_mutex_init (&g_RtnTradeLogTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeUserLoginInfoTopic_async, OnRspQryTradeUserLoginInfoTopic);
    uv_mutex_init (&g_RspQryTradeUserLoginInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTradeUserLoginInfoTopic_async, OnRtnTradeUserLoginInfoTopic);
    uv_mutex_init (&g_RtnTradeUserLoginInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPartTradeTopic_async, OnRspQryPartTradeTopic);
    uv_mutex_init (&g_RspQryPartTradeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradepeakTopic_async, OnRspQryTradepeakTopic);
    uv_mutex_init (&g_RspQryTradepeakTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnUpdateSysConfigTopic_async, OnRtnUpdateSysConfigTopic);
    uv_mutex_init (&g_RtnUpdateSysConfigTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSysUser_async, OnRtnSysUser);
    uv_mutex_init (&g_RtnSysUser_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPriceLimitChgTopic_async, OnRtnPriceLimitChgTopic);
    uv_mutex_init (&g_RtnPriceLimitChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHistoryCpuInfoTopic_async, OnRspQryHistoryCpuInfoTopic);
    uv_mutex_init (&g_RspQryHistoryCpuInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHistoryMemInfoTopic_async, OnRspQryHistoryMemInfoTopic);
    uv_mutex_init (&g_RspQryHistoryMemInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHistoryNetworkInfoTopic_async, OnRspQryHistoryNetworkInfoTopic);
    uv_mutex_init (&g_RspQryHistoryNetworkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMonitorOnlineUser_async, OnRspQryMonitorOnlineUser);
    uv_mutex_init (&g_RspQryMonitorOnlineUser_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFrontStat_async, OnRspQryFrontStat);
    uv_mutex_init (&g_RspQryFrontStat_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSysTimeSyncTopic_async, OnRtnSysTimeSyncTopic);
    uv_mutex_init (&g_RtnSysTimeSyncTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnDataCenterChgTopic_async, OnRtnDataCenterChgTopic);
    uv_mutex_init (&g_RtnDataCenterChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryHistoryTradePeakTopic_async, OnRspQryHistoryTradePeakTopic);
    uv_mutex_init (&g_RspQryHistoryTradePeakTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnHistoryTradePeakTopic_async, OnRtnHistoryTradePeakTopic);
    uv_mutex_init (&g_RtnHistoryTradePeakTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySyslogEventTopic_async, OnRspQrySyslogEventTopic);
    uv_mutex_init (&g_RspQrySyslogEventTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSyslogEventTopic_async, OnRtnSyslogEventTopic);
    uv_mutex_init (&g_RtnSyslogEventTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeDayChangeTopic_async, OnRspQryTradeDayChangeTopic);
    uv_mutex_init (&g_RspQryTradeDayChangeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryWebAppInfoTopic_async, OnRspQryWebAppInfoTopic);
    uv_mutex_init (&g_RspQryWebAppInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnWebAppInfoTopic_async, OnRtnWebAppInfoTopic);
    uv_mutex_init (&g_RtnWebAppInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryServletInfoTopic_async, OnRspQryServletInfoTopic);
    uv_mutex_init (&g_RspQryServletInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnServletInfoTopic_async, OnRtnServletInfoTopic);
    uv_mutex_init (&g_RtnServletInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFileInfoTopic_async, OnRspQryFileInfoTopic);
    uv_mutex_init (&g_RspQryFileInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFileInfoTopic_async, OnRtnFileInfoTopic);
    uv_mutex_init (&g_RtnFileInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySessionInfoTopic_async, OnRspQrySessionInfoTopic);
    uv_mutex_init (&g_RspQrySessionInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSessionInfoTopic_async, OnRtnSessionInfoTopic);
    uv_mutex_init (&g_RtnSessionInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryJDBCInfoTopic_async, OnRspQryJDBCInfoTopic);
    uv_mutex_init (&g_RspQryJDBCInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnJDBCInfoTopic_async, OnRtnJDBCInfoTopic);
    uv_mutex_init (&g_RtnJDBCInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryThreadInfoTopic_async, OnRspQryThreadInfoTopic);
    uv_mutex_init (&g_RspQryThreadInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnThreadInfoTopic_async, OnRtnThreadInfoTopic);
    uv_mutex_init (&g_RtnThreadInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryVMInfoTopic_async, OnRspQryVMInfoTopic);
    uv_mutex_init (&g_RspQryVMInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnVMInfoTopic_async, OnRtnVMInfoTopic);
    uv_mutex_init (&g_RtnVMInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPropertyInfoTopic_async, OnRspQryPropertyInfoTopic);
    uv_mutex_init (&g_RspQryPropertyInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPropertyInfoTopic_async, OnRtnPropertyInfoTopic);
    uv_mutex_init (&g_RtnPropertyInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMemPoolInfoTopic_async, OnRspQryMemPoolInfoTopic);
    uv_mutex_init (&g_RspQryMemPoolInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMemPoolInfoTopic_async, OnRtnMemPoolInfoTopic);
    uv_mutex_init (&g_RtnMemPoolInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFileContentInfoTopic_async, OnRspQryFileContentInfoTopic);
    uv_mutex_init (&g_RspQryFileContentInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFileContentInfoTopic_async, OnRtnFileContentInfoTopic);
    uv_mutex_init (&g_RtnFileContentInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryConnectionInfoTopic_async, OnRspQryConnectionInfoTopic);
    uv_mutex_init (&g_RspQryConnectionInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnConnectionInfoTopic_async, OnRtnConnectionInfoTopic);
    uv_mutex_init (&g_RtnConnectionInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryConnectorInfoTopic_async, OnRspQryConnectorInfoTopic);
    uv_mutex_init (&g_RspQryConnectorInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnConnectorInfoTopic_async, OnRtnConnectorInfoTopic);
    uv_mutex_init (&g_RtnConnectorInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryDBQueryTopic_async, OnRspQryDBQueryTopic);
    uv_mutex_init (&g_RspQryDBQueryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnDBQueryTopic_async, OnRtnDBQueryTopic);
    uv_mutex_init (&g_RtnDBQueryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryGeneralFieldTopic_async, OnRspQryGeneralFieldTopic);
    uv_mutex_init (&g_RspQryGeneralFieldTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnGeneralFieldTopic_async, OnRtnGeneralFieldTopic);
    uv_mutex_init (&g_RtnGeneralFieldTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryGetFileTopic_async, OnRspQryGetFileTopic);
    uv_mutex_init (&g_RspQryGetFileTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryWarningQueryTopic_async, OnRspQryWarningQueryTopic);
    uv_mutex_init (&g_RspQryWarningQueryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnWarningQueryTopic_async, OnRtnWarningQueryTopic);
    uv_mutex_init (&g_RtnWarningQueryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnHostConfig_async, OnRtnHostConfig);
    uv_mutex_init (&g_RtnHostConfig_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryGeneralOperateTopic_async, OnRspQryGeneralOperateTopic);
    uv_mutex_init (&g_RspQryGeneralOperateTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnGeneralOperateTopic_async, OnRtnGeneralOperateTopic);
    uv_mutex_init (&g_RtnGeneralOperateTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceLinkedTopic_async, OnRspQryNetDeviceLinkedTopic);
    uv_mutex_init (&g_RspQryNetDeviceLinkedTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDeviceLinkedTopic_async, OnRtnNetDeviceLinkedTopic);
    uv_mutex_init (&g_RtnNetDeviceLinkedTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeUserLoginStatTopic_async, OnRspQryTradeUserLoginStatTopic);
    uv_mutex_init (&g_RspQryTradeUserLoginStatTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeFrontOrderRttStatTopic_async, OnRspQryTradeFrontOrderRttStatTopic);
    uv_mutex_init (&g_RspQryTradeFrontOrderRttStatTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTradeFrontOrderRttStatTopic_async, OnRtnTradeFrontOrderRttStatTopic);
    uv_mutex_init (&g_RtnTradeFrontOrderRttStatTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryParticTradeOrderStatesTopic_async, OnRspQryParticTradeOrderStatesTopic);
    uv_mutex_init (&g_RspQryParticTradeOrderStatesTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnParticTradeOrderStatesTopic_async, OnRtnParticTradeOrderStatesTopic);
    uv_mutex_init (&g_RtnParticTradeOrderStatesTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryRouterInfoTopic_async, OnRspQryRouterInfoTopic);
    uv_mutex_init (&g_RspQryRouterInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnRouterInfoTopic_async, OnRtnRouterInfoTopic);
    uv_mutex_init (&g_RtnRouterInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryDiskIOTopic_async, OnRspQryDiskIOTopic);
    uv_mutex_init (&g_RspQryDiskIOTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnDiskIOTopic_async, OnRtnDiskIOTopic);
    uv_mutex_init (&g_RtnDiskIOTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryStatInfoTopic_async, OnRspQryStatInfoTopic);
    uv_mutex_init (&g_RspQryStatInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnStatInfoTopic_async, OnRtnStatInfoTopic);
    uv_mutex_init (&g_RtnStatInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryTradeOrderRttCutLineTopic_async, OnRspQryTradeOrderRttCutLineTopic);
    uv_mutex_init (&g_RspQryTradeOrderRttCutLineTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnTradeOrderRttCutLineTopic_async, OnRtnTradeOrderRttCutLineTopic);
    uv_mutex_init (&g_RtnTradeOrderRttCutLineTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryClientInfoTopic_async, OnRspQryClientInfoTopic);
    uv_mutex_init (&g_RspQryClientInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnClientInfoTopic_async, OnRtnClientInfoTopic);
    uv_mutex_init (&g_RtnClientInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryEventDescriptionTopic_async, OnRspQryEventDescriptionTopic);
    uv_mutex_init (&g_RspQryEventDescriptionTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnEventDescriptionTopic_async, OnRtnEventDescriptionTopic);
    uv_mutex_init (&g_RtnEventDescriptionTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFrontUniqueIDTopic_async, OnRspQryFrontUniqueIDTopic);
    uv_mutex_init (&g_RspQryFrontUniqueIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFrontUniqueIDTopic_async, OnRtnFrontUniqueIDTopic);
    uv_mutex_init (&g_RtnFrontUniqueIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPartyLinkAddrChangeTopic_async, OnRspQryNetPartyLinkAddrChangeTopic);
    uv_mutex_init (&g_RspQryNetPartyLinkAddrChangeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPartyLinkAddrChangeTopic_async, OnRtnNetPartyLinkAddrChangeTopic);
    uv_mutex_init (&g_RtnNetPartyLinkAddrChangeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDelPartyLinkInfoTopic_async, OnRspQryNetDelPartyLinkInfoTopic);
    uv_mutex_init (&g_RspQryNetDelPartyLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDelPartyLinkInfoTopic_async, OnRtnNetDelPartyLinkInfoTopic);
    uv_mutex_init (&g_RtnNetDelPartyLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryPerformanceTopTopic_async, OnRspQryPerformanceTopTopic);
    uv_mutex_init (&g_RspQryPerformanceTopTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnPerformanceTopTopic_async, OnRtnPerformanceTopTopic);
    uv_mutex_init (&g_RtnPerformanceTopTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryInstrumentStatusTopic_async, OnRspQryInstrumentStatusTopic);
    uv_mutex_init (&g_RspQryInstrumentStatusTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnInstrumentStatusTopic_async, OnRtnInstrumentStatusTopic);
    uv_mutex_init (&g_RtnInstrumentStatusTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryCurrTradingSegmentAttrTopic_async, OnRspQryCurrTradingSegmentAttrTopic);
    uv_mutex_init (&g_RspQryCurrTradingSegmentAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnCurrTradingSegmentAttrTopic_async, OnRtnCurrTradingSegmentAttrTopic);
    uv_mutex_init (&g_RtnCurrTradingSegmentAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetAreaTopic_async, OnRspQryNetAreaTopic);
    uv_mutex_init (&g_RspQryNetAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetAreaTopic_async, OnRtnNetAreaTopic);
    uv_mutex_init (&g_RtnNetAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetSubAreaTopic_async, OnRspQryNetSubAreaTopic);
    uv_mutex_init (&g_RspQryNetSubAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetSubAreaTopic_async, OnRtnNetSubAreaTopic);
    uv_mutex_init (&g_RtnNetSubAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetSubAreaIPTopic_async, OnRspQryNetSubAreaIPTopic);
    uv_mutex_init (&g_RspQryNetSubAreaIPTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetSubAreaIPTopic_async, OnRtnNetSubAreaIPTopic);
    uv_mutex_init (&g_RtnNetSubAreaIPTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceTopic_async, OnRspQryNetDeviceTopic);
    uv_mutex_init (&g_RspQryNetDeviceTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDeviceTopic_async, OnRtnNetDeviceTopic);
    uv_mutex_init (&g_RtnNetDeviceTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceDetectTopic_async, OnRspQryNetDeviceDetectTopic);
    uv_mutex_init (&g_RspQryNetDeviceDetectTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetBuildingTopic_async, OnRspQryNetBuildingTopic);
    uv_mutex_init (&g_RspQryNetBuildingTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetBuildingTopic_async, OnRtnNetBuildingTopic);
    uv_mutex_init (&g_RtnNetBuildingTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetRoomTopic_async, OnRspQryNetRoomTopic);
    uv_mutex_init (&g_RspQryNetRoomTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetRoomTopic_async, OnRtnNetRoomTopic);
    uv_mutex_init (&g_RtnNetRoomTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetCabinetsTopic_async, OnRspQryNetCabinetsTopic);
    uv_mutex_init (&g_RspQryNetCabinetsTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetCabinetsTopic_async, OnRtnNetCabinetsTopic);
    uv_mutex_init (&g_RtnNetCabinetsTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetOIDTopic_async, OnRspQryNetOIDTopic);
    uv_mutex_init (&g_RspQryNetOIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetOIDTopic_async, OnRtnNetOIDTopic);
    uv_mutex_init (&g_RtnNetOIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetTimePolicyTopic_async, OnRspQryNetTimePolicyTopic);
    uv_mutex_init (&g_RspQryNetTimePolicyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetTimePolicyTopic_async, OnRtnNetTimePolicyTopic);
    uv_mutex_init (&g_RtnNetTimePolicyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetGatherTaskTopic_async, OnRspQryNetGatherTaskTopic);
    uv_mutex_init (&g_RspQryNetGatherTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetGatherTaskTopic_async, OnRtnNetGatherTaskTopic);
    uv_mutex_init (&g_RtnNetGatherTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceChgTopic_async, OnRspQryNetDeviceChgTopic);
    uv_mutex_init (&g_RspQryNetDeviceChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDeviceChgTopic_async, OnRtnNetDeviceChgTopic);
    uv_mutex_init (&g_RtnNetDeviceChgTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceTypeTopic_async, OnRspQryNetDeviceTypeTopic);
    uv_mutex_init (&g_RspQryNetDeviceTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDeviceTypeTopic_async, OnRtnNetDeviceTypeTopic);
    uv_mutex_init (&g_RtnNetDeviceTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDeviceCategoryTopic_async, OnRspQryNetDeviceCategoryTopic);
    uv_mutex_init (&g_RspQryNetDeviceCategoryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDeviceCategoryTopic_async, OnRtnNetDeviceCategoryTopic);
    uv_mutex_init (&g_RtnNetDeviceCategoryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetManufactoryTopic_async, OnRspQryNetManufactoryTopic);
    uv_mutex_init (&g_RspQryNetManufactoryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetManufactoryTopic_async, OnRtnNetManufactoryTopic);
    uv_mutex_init (&g_RtnNetManufactoryTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetCommunityTopic_async, OnRspQryNetCommunityTopic);
    uv_mutex_init (&g_RspQryNetCommunityTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetCommunityTopic_async, OnRtnNetCommunityTopic);
    uv_mutex_init (&g_RtnNetCommunityTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPortTypeTopic_async, OnRspQryNetPortTypeTopic);
    uv_mutex_init (&g_RspQryNetPortTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPortTypeTopic_async, OnRtnNetPortTypeTopic);
    uv_mutex_init (&g_RtnNetPortTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPartAccessSpotTopic_async, OnRspQryNetPartAccessSpotTopic);
    uv_mutex_init (&g_RspQryNetPartAccessSpotTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPartAccessSpotTopic_async, OnRtnNetPartAccessSpotTopic);
    uv_mutex_init (&g_RtnNetPartAccessSpotTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetInterfaceTopic_async, OnRspQryNetInterfaceTopic);
    uv_mutex_init (&g_RspQryNetInterfaceTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetInterfaceTopic_async, OnRtnNetInterfaceTopic);
    uv_mutex_init (&g_RtnNetInterfaceTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetGeneralOIDTopic_async, OnRspQryNetGeneralOIDTopic);
    uv_mutex_init (&g_RspQryNetGeneralOIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetGeneralOIDTopic_async, OnRtnNetGeneralOIDTopic);
    uv_mutex_init (&g_RtnNetGeneralOIDTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTypeTopic_async, OnRspQryNetMonitorTypeTopic);
    uv_mutex_init (&g_RspQryNetMonitorTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTypeTopic_async, OnRtnNetMonitorTypeTopic);
    uv_mutex_init (&g_RtnNetMonitorTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorAttrScopeTopic_async, OnRspQryNetMonitorAttrScopeTopic);
    uv_mutex_init (&g_RspQryNetMonitorAttrScopeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorAttrScopeTopic_async, OnRtnNetMonitorAttrScopeTopic);
    uv_mutex_init (&g_RtnNetMonitorAttrScopeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorAttrTypeTopic_async, OnRspQryNetMonitorAttrTypeTopic);
    uv_mutex_init (&g_RspQryNetMonitorAttrTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorAttrTypeTopic_async, OnRtnNetMonitorAttrTypeTopic);
    uv_mutex_init (&g_RtnNetMonitorAttrTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorObjectAttrTopic_async, OnRspQryNetMonitorObjectAttrTopic);
    uv_mutex_init (&g_RspQryNetMonitorObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorObjectAttrTopic_async, OnRtnNetMonitorObjectAttrTopic);
    uv_mutex_init (&g_RtnNetMonitorObjectAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetFuncAreaTopic_async, OnRspQryNetFuncAreaTopic);
    uv_mutex_init (&g_RspQryNetFuncAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetFuncAreaTopic_async, OnRtnNetFuncAreaTopic);
    uv_mutex_init (&g_RtnNetFuncAreaTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorCommandTypeTopic_async, OnRspQryNetMonitorCommandTypeTopic);
    uv_mutex_init (&g_RspQryNetMonitorCommandTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorCommandTypeTopic_async, OnRtnNetMonitorCommandTypeTopic);
    uv_mutex_init (&g_RtnNetMonitorCommandTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorActionGroupTopic_async, OnRspQryNetMonitorActionGroupTopic);
    uv_mutex_init (&g_RspQryNetMonitorActionGroupTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorActionGroupTopic_async, OnRtnNetMonitorActionGroupTopic);
    uv_mutex_init (&g_RtnNetMonitorActionGroupTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorDeviceGroupTopic_async, OnRspQryNetMonitorDeviceGroupTopic);
    uv_mutex_init (&g_RspQryNetMonitorDeviceGroupTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorDeviceGroupTopic_async, OnRtnNetMonitorDeviceGroupTopic);
    uv_mutex_init (&g_RtnNetMonitorDeviceGroupTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTaskInfoTopic_async, OnRspQryNetMonitorTaskInfoTopic);
    uv_mutex_init (&g_RspQryNetMonitorTaskInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTaskInfoTopic_async, OnRtnNetMonitorTaskInfoTopic);
    uv_mutex_init (&g_RtnNetMonitorTaskInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTaskResultTopic_async, OnRspQryNetMonitorTaskResultTopic);
    uv_mutex_init (&g_RspQryNetMonitorTaskResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTaskResultTopic_async, OnRtnNetMonitorTaskResultTopic);
    uv_mutex_init (&g_RtnNetMonitorTaskResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTaskObjectSetTopic_async, OnRspQryNetMonitorTaskObjectSetTopic);
    uv_mutex_init (&g_RspQryNetMonitorTaskObjectSetTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTaskObjectSetTopic_async, OnRtnNetMonitorTaskObjectSetTopic);
    uv_mutex_init (&g_RtnNetMonitorTaskObjectSetTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPartyLinkInfoTopic_async, OnRspQryNetPartyLinkInfoTopic);
    uv_mutex_init (&g_RspQryNetPartyLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPartyLinkInfoTopic_async, OnRtnNetPartyLinkInfoTopic);
    uv_mutex_init (&g_RtnNetPartyLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorActionAttrTopic_async, OnRspQryNetMonitorActionAttrTopic);
    uv_mutex_init (&g_RspQryNetMonitorActionAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorActionAttrTopic_async, OnRtnNetMonitorActionAttrTopic);
    uv_mutex_init (&g_RtnNetMonitorActionAttrTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetModuleTopic_async, OnRspQryNetModuleTopic);
    uv_mutex_init (&g_RspQryNetModuleTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetModuleTopic_async, OnRtnNetModuleTopic);
    uv_mutex_init (&g_RtnNetModuleTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetEventExprTopic_async, OnRspQryNetEventExprTopic);
    uv_mutex_init (&g_RspQryNetEventExprTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetEventExprTopic_async, OnRtnNetEventExprTopic);
    uv_mutex_init (&g_RtnNetEventExprTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetEventTypeTopic_async, OnRspQryNetEventTypeTopic);
    uv_mutex_init (&g_RspQryNetEventTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetEventTypeTopic_async, OnRtnNetEventTypeTopic);
    uv_mutex_init (&g_RtnNetEventTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetSubEventTypeTopic_async, OnRspQryNetSubEventTypeTopic);
    uv_mutex_init (&g_RspQryNetSubEventTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetSubEventTypeTopic_async, OnRtnNetSubEventTypeTopic);
    uv_mutex_init (&g_RtnNetSubEventTypeTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetEventLevelTopic_async, OnRspQryNetEventLevelTopic);
    uv_mutex_init (&g_RspQryNetEventLevelTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetEventLevelTopic_async, OnRtnNetEventLevelTopic);
    uv_mutex_init (&g_RtnNetEventLevelTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTaskStatusResultTopic_async, OnRspQryNetMonitorTaskStatusResultTopic);
    uv_mutex_init (&g_RspQryNetMonitorTaskStatusResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTaskStatusResultTopic_async, OnRtnNetMonitorTaskStatusResultTopic);
    uv_mutex_init (&g_RtnNetMonitorTaskStatusResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetCfgFileTopic_async, OnRspQryNetCfgFileTopic);
    uv_mutex_init (&g_RspQryNetCfgFileTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetCfgFileTopic_async, OnRtnNetCfgFileTopic);
    uv_mutex_init (&g_RtnNetCfgFileTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorDeviceTaskTopic_async, OnRspQryNetMonitorDeviceTaskTopic);
    uv_mutex_init (&g_RspQryNetMonitorDeviceTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorDeviceTaskTopic_async, OnRtnNetMonitorDeviceTaskTopic);
    uv_mutex_init (&g_RtnNetMonitorDeviceTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMonitorTaskInstAttrsTopic_async, OnRspQryNetMonitorTaskInstAttrsTopic);
    uv_mutex_init (&g_RspQryNetMonitorTaskInstAttrsTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMonitorTaskInstAttrsTopic_async, OnRtnNetMonitorTaskInstAttrsTopic);
    uv_mutex_init (&g_RtnNetMonitorTaskInstAttrsTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryFileGeneralOperTopic_async, OnRspQryFileGeneralOperTopic);
    uv_mutex_init (&g_RspQryFileGeneralOperTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnFileGeneralOperTopic_async, OnRtnFileGeneralOperTopic);
    uv_mutex_init (&g_RtnFileGeneralOperTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetBaseLineTopic_async, OnRspQryNetBaseLineTopic);
    uv_mutex_init (&g_RspQryNetBaseLineTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetBaseLineTopic_async, OnRtnNetBaseLineTopic);
    uv_mutex_init (&g_RtnNetBaseLineTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetBaseLineTaskTopic_async, OnRspQryNetBaseLineTaskTopic);
    uv_mutex_init (&g_RspQryNetBaseLineTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetBaseLineTaskTopic_async, OnRtnNetBaseLineTaskTopic);
    uv_mutex_init (&g_RtnNetBaseLineTaskTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetBaseLineResultTopic_async, OnRspQryNetBaseLineResultTopic);
    uv_mutex_init (&g_RspQryNetBaseLineResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetBaseLineResultTopic_async, OnRtnNetBaseLineResultTopic);
    uv_mutex_init (&g_RtnNetBaseLineResultTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPartyLinkStatusInfoTopic_async, OnRspQryNetPartyLinkStatusInfoTopic);
    uv_mutex_init (&g_RspQryNetPartyLinkStatusInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPartyLinkStatusInfoTopic_async, OnRtnNetPartyLinkStatusInfoTopic);
    uv_mutex_init (&g_RtnNetPartyLinkStatusInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetMemberSDHLineInfoTopic_async, OnRspQryNetMemberSDHLineInfoTopic);
    uv_mutex_init (&g_RspQryNetMemberSDHLineInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetMemberSDHLineInfoTopic_async, OnRtnNetMemberSDHLineInfoTopic);
    uv_mutex_init (&g_RtnNetMemberSDHLineInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetDDNLinkInfoTopic_async, OnRspQryNetDDNLinkInfoTopic);
    uv_mutex_init (&g_RspQryNetDDNLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetDDNLinkInfoTopic_async, OnRtnNetDDNLinkInfoTopic);
    uv_mutex_init (&g_RtnNetDDNLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPseudMemberLinkInfoTopic_async, OnRspQryNetPseudMemberLinkInfoTopic);
    uv_mutex_init (&g_RspQryNetPseudMemberLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPseudMemberLinkInfoTopic_async, OnRtnNetPseudMemberLinkInfoTopic);
    uv_mutex_init (&g_RtnNetPseudMemberLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryOuterDeviceInfTopic_async, OnRspQryOuterDeviceInfTopic);
    uv_mutex_init (&g_RspQryOuterDeviceInfTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetOuterDeviceInfTopic_async, OnRtnNetOuterDeviceInfTopic);
    uv_mutex_init (&g_RtnNetOuterDeviceInfTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetLocalPingResultInfoTopic_async, OnRspQryNetLocalPingResultInfoTopic);
    uv_mutex_init (&g_RspQryNetLocalPingResultInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetLocalPingResultInfoTopic_async, OnRtnNetLocalPingResultInfoTopic);
    uv_mutex_init (&g_RtnNetLocalPingResultInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetRomotePingResultInfoTopic_async, OnRspQryNetRomotePingResultInfoTopic);
    uv_mutex_init (&g_RspQryNetRomotePingResultInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetRomotePingResultInfoTopic_async, OnRtnNetRomotePingResultInfoTopic);
    uv_mutex_init (&g_RtnNetRomotePingResultInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMonitorTopProcessInfo_async, OnRtnMonitorTopProcessInfo);
    uv_mutex_init (&g_RtnMonitorTopProcessInfo_mutex);

    uv_async_init (uv_default_loop(), &g_RspQrySysInternalTopologyTopic_async, OnRspQrySysInternalTopologyTopic);
    uv_mutex_init (&g_RspQrySysInternalTopologyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnSysInternalTopologyTopic_async, OnRtnSysInternalTopologyTopic);
    uv_mutex_init (&g_RtnSysInternalTopologyTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryMemberLinkCostTopic_async, OnRspQryMemberLinkCostTopic);
    uv_mutex_init (&g_RspQryMemberLinkCostTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnMemberLinkCostTopic_async, OnRtnMemberLinkCostTopic);
    uv_mutex_init (&g_RtnMemberLinkCostTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetPartylinkMonthlyRentTopic_async, OnRspQryNetPartylinkMonthlyRentTopic);
    uv_mutex_init (&g_RspQryNetPartylinkMonthlyRentTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetPartylinkMonthlyRentTopic_async, OnRtnNetPartylinkMonthlyRentTopic);
    uv_mutex_init (&g_RtnNetPartylinkMonthlyRentTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RspQryNetNonPartyLinkInfoTopic_async, OnRspQryNetNonPartyLinkInfoTopic);
    uv_mutex_init (&g_RspQryNetNonPartyLinkInfoTopic_mutex);

    uv_async_init (uv_default_loop(), &g_RtnNetNonPartyLinkInfoTopic_async, OnRtnNetNonPartyLinkInfoTopic);
    uv_mutex_init (&g_RtnNetNonPartyLinkInfoTopic_mutex);

}


void DeInitV8Transformdata () {
    
    uv_close ((uv_handle_t*)&g_FrontConnected_async, NULL);

    uv_close ((uv_handle_t*)&g_FrontDisconnected_async, NULL);

    uv_close ((uv_handle_t*)&g_HeartBeatWarning_async, NULL);
            
    uv_close ((uv_handle_t*) &g_RspQryTopCpuInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTopCpuInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTopMemInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTopMemInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTopProcessInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTopProcessInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFileSystemInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFileSystemInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetworkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetworkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientLoginTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMonitorObjectTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMonitorObjectTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryObjectRationalTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnObjectRationalTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySyslogInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSyslogInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySubscriberTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryOidRelationTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnOidRelationTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryUserInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnUserInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryOnlineUserInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnOnlineUserInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryWarningEventTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnWarningEventTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryCPUUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnCPUUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMemoryUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMemoryUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryDiskUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnDiskUsageTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryInvalidateOrderTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnInvalidateOrderTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryOrderStatusTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnOrderStatusTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryBargainOrderTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnBargainOrderTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryInstPropertyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnInstPropertyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMarginRateTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMarginRateTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPriceLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPriceLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPartPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPartPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnClientPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySpecialPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSpecialPosiLimitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTransactionChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTransactionChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnClientChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPartClientChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPartClientChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHedgeDetailChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnHedgeDetailChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryParticipantChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnParticipantChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMarginRateChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMarginRateChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryUserIpChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnUserIpChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnClientPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySpecPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSpecPosiLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHistoryObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnHistoryObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFrontInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFrontInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysUserLoginTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysUserLogoutTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysUserPasswordUpdateTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysUserRegisterTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysUserDeleteTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryParticipantInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnParticipantInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryUserInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnUserInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnClientInitTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeLogTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTradeLogTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeUserLoginInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTradeUserLoginInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPartTradeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradepeakTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnUpdateSysConfigTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSysUser_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPriceLimitChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHistoryCpuInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHistoryMemInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHistoryNetworkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMonitorOnlineUser_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFrontStat_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSysTimeSyncTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnDataCenterChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryHistoryTradePeakTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnHistoryTradePeakTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySyslogEventTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSyslogEventTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeDayChangeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryWebAppInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnWebAppInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryServletInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnServletInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFileInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFileInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySessionInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSessionInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryJDBCInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnJDBCInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryThreadInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnThreadInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryVMInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnVMInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPropertyInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPropertyInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMemPoolInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMemPoolInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFileContentInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFileContentInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryConnectionInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnConnectionInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryConnectorInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnConnectorInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryDBQueryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnDBQueryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryGeneralFieldTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnGeneralFieldTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryGetFileTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryWarningQueryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnWarningQueryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnHostConfig_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryGeneralOperateTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnGeneralOperateTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceLinkedTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDeviceLinkedTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeUserLoginStatTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeFrontOrderRttStatTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTradeFrontOrderRttStatTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryParticTradeOrderStatesTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnParticTradeOrderStatesTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryRouterInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnRouterInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryDiskIOTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnDiskIOTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryStatInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnStatInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryTradeOrderRttCutLineTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnTradeOrderRttCutLineTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryClientInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnClientInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryEventDescriptionTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnEventDescriptionTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFrontUniqueIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFrontUniqueIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPartyLinkAddrChangeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPartyLinkAddrChangeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDelPartyLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDelPartyLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryPerformanceTopTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnPerformanceTopTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryInstrumentStatusTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnInstrumentStatusTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryCurrTradingSegmentAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnCurrTradingSegmentAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetSubAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetSubAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetSubAreaIPTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetSubAreaIPTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDeviceTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceDetectTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetBuildingTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetBuildingTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetRoomTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetRoomTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetCabinetsTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetCabinetsTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetOIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetOIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetTimePolicyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetTimePolicyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetGatherTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetGatherTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDeviceChgTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDeviceTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDeviceCategoryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDeviceCategoryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetManufactoryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetManufactoryTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetCommunityTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetCommunityTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPortTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPortTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPartAccessSpotTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPartAccessSpotTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetInterfaceTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetInterfaceTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetGeneralOIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetGeneralOIDTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorAttrScopeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorAttrScopeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorAttrTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorAttrTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorObjectAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetFuncAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetFuncAreaTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorCommandTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorCommandTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorActionGroupTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorActionGroupTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorDeviceGroupTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorDeviceGroupTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTaskInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTaskInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTaskResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTaskResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTaskObjectSetTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTaskObjectSetTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPartyLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPartyLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorActionAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorActionAttrTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetModuleTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetModuleTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetEventExprTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetEventExprTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetEventTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetEventTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetSubEventTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetSubEventTypeTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetEventLevelTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetEventLevelTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTaskStatusResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTaskStatusResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetCfgFileTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetCfgFileTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorDeviceTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorDeviceTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMonitorTaskInstAttrsTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMonitorTaskInstAttrsTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryFileGeneralOperTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnFileGeneralOperTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetBaseLineTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetBaseLineTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetBaseLineTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetBaseLineTaskTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetBaseLineResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetBaseLineResultTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPartyLinkStatusInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPartyLinkStatusInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetMemberSDHLineInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetMemberSDHLineInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetDDNLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetDDNLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPseudMemberLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPseudMemberLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryOuterDeviceInfTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetOuterDeviceInfTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetLocalPingResultInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetLocalPingResultInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetRomotePingResultInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetRomotePingResultInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMonitorTopProcessInfo_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQrySysInternalTopologyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnSysInternalTopologyTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryMemberLinkCostTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnMemberLinkCostTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetPartylinkMonthlyRentTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetPartylinkMonthlyRentTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RspQryNetNonPartyLinkInfoTopic_async,NULL);

    uv_close ((uv_handle_t*) &g_RtnNetNonPartyLinkInfoTopic_async,NULL);

}

uv_mutex_t   g_FrontConnected_mutex;
uv_async_t   g_FrontConnected_async;
vector<FRONT_ID>   g_FrontConnected_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_FrontConnected_Data_map;

uv_mutex_t   g_FrontDisconnected_mutex;
uv_async_t   g_FrontDisconnected_async;
vector<FRONT_ID>   g_FrontDisconnected_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_FrontDisconnected_Data_map;

uv_mutex_t   g_HeartBeatWarning_mutex;
uv_async_t   g_HeartBeatWarning_async;
vector<FRONT_ID>   g_HeartBeatWarning_IOUser_vec;
map<FRONT_ID, queue<void**> >  g_HeartBeatWarning_Data_map;
                
uv_mutex_t   g_RspQryTopCpuInfoTopic_mutex;
uv_async_t   g_RspQryTopCpuInfoTopic_async;
vector<FRONT_ID>    g_RspQryTopCpuInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTopCpuInfoTopic_Data_map;

uv_mutex_t   g_RtnTopCpuInfoTopic_mutex;
uv_async_t   g_RtnTopCpuInfoTopic_async;
vector<FRONT_ID>    g_RtnTopCpuInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTopCpuInfoTopic_Data_map;

uv_mutex_t   g_RspQryTopMemInfoTopic_mutex;
uv_async_t   g_RspQryTopMemInfoTopic_async;
vector<FRONT_ID>    g_RspQryTopMemInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTopMemInfoTopic_Data_map;

uv_mutex_t   g_RtnTopMemInfoTopic_mutex;
uv_async_t   g_RtnTopMemInfoTopic_async;
vector<FRONT_ID>    g_RtnTopMemInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTopMemInfoTopic_Data_map;

uv_mutex_t   g_RspQryTopProcessInfoTopic_mutex;
uv_async_t   g_RspQryTopProcessInfoTopic_async;
vector<FRONT_ID>    g_RspQryTopProcessInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTopProcessInfoTopic_Data_map;

uv_mutex_t   g_RtnTopProcessInfoTopic_mutex;
uv_async_t   g_RtnTopProcessInfoTopic_async;
vector<FRONT_ID>    g_RtnTopProcessInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTopProcessInfoTopic_Data_map;

uv_mutex_t   g_RspQryFileSystemInfoTopic_mutex;
uv_async_t   g_RspQryFileSystemInfoTopic_async;
vector<FRONT_ID>    g_RspQryFileSystemInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFileSystemInfoTopic_Data_map;

uv_mutex_t   g_RtnFileSystemInfoTopic_mutex;
uv_async_t   g_RtnFileSystemInfoTopic_async;
vector<FRONT_ID>    g_RtnFileSystemInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFileSystemInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetworkInfoTopic_mutex;
uv_async_t   g_RspQryNetworkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetworkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetworkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetworkInfoTopic_mutex;
uv_async_t   g_RtnNetworkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetworkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetworkInfoTopic_Data_map;

uv_mutex_t   g_RspQryClientLoginTopic_mutex;
uv_async_t   g_RspQryClientLoginTopic_async;
vector<FRONT_ID>    g_RspQryClientLoginTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientLoginTopic_Data_map;

uv_mutex_t   g_RspQryMonitorObjectTopic_mutex;
uv_async_t   g_RspQryMonitorObjectTopic_async;
vector<FRONT_ID>    g_RspQryMonitorObjectTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMonitorObjectTopic_Data_map;

uv_mutex_t   g_RtnMonitorObjectTopic_mutex;
uv_async_t   g_RtnMonitorObjectTopic_async;
vector<FRONT_ID>    g_RtnMonitorObjectTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMonitorObjectTopic_Data_map;

uv_mutex_t   g_RspQryObjectRationalTopic_mutex;
uv_async_t   g_RspQryObjectRationalTopic_async;
vector<FRONT_ID>    g_RspQryObjectRationalTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryObjectRationalTopic_Data_map;

uv_mutex_t   g_RtnObjectRationalTopic_mutex;
uv_async_t   g_RtnObjectRationalTopic_async;
vector<FRONT_ID>    g_RtnObjectRationalTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnObjectRationalTopic_Data_map;

uv_mutex_t   g_RspQrySyslogInfoTopic_mutex;
uv_async_t   g_RspQrySyslogInfoTopic_async;
vector<FRONT_ID>    g_RspQrySyslogInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySyslogInfoTopic_Data_map;

uv_mutex_t   g_RtnSyslogInfoTopic_mutex;
uv_async_t   g_RtnSyslogInfoTopic_async;
vector<FRONT_ID>    g_RtnSyslogInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSyslogInfoTopic_Data_map;

uv_mutex_t   g_RspQrySubscriberTopic_mutex;
uv_async_t   g_RspQrySubscriberTopic_async;
vector<FRONT_ID>    g_RspQrySubscriberTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySubscriberTopic_Data_map;

uv_mutex_t   g_RspQryOidRelationTopic_mutex;
uv_async_t   g_RspQryOidRelationTopic_async;
vector<FRONT_ID>    g_RspQryOidRelationTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryOidRelationTopic_Data_map;

uv_mutex_t   g_RtnOidRelationTopic_mutex;
uv_async_t   g_RtnOidRelationTopic_async;
vector<FRONT_ID>    g_RtnOidRelationTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnOidRelationTopic_Data_map;

uv_mutex_t   g_RspQryUserInfoTopic_mutex;
uv_async_t   g_RspQryUserInfoTopic_async;
vector<FRONT_ID>    g_RspQryUserInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryUserInfoTopic_Data_map;

uv_mutex_t   g_RtnUserInfoTopic_mutex;
uv_async_t   g_RtnUserInfoTopic_async;
vector<FRONT_ID>    g_RtnUserInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnUserInfoTopic_Data_map;

uv_mutex_t   g_RspQryOnlineUserInfoTopic_mutex;
uv_async_t   g_RspQryOnlineUserInfoTopic_async;
vector<FRONT_ID>    g_RspQryOnlineUserInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryOnlineUserInfoTopic_Data_map;

uv_mutex_t   g_RtnOnlineUserInfoTopic_mutex;
uv_async_t   g_RtnOnlineUserInfoTopic_async;
vector<FRONT_ID>    g_RtnOnlineUserInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnOnlineUserInfoTopic_Data_map;

uv_mutex_t   g_RspQryWarningEventTopic_mutex;
uv_async_t   g_RspQryWarningEventTopic_async;
vector<FRONT_ID>    g_RspQryWarningEventTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryWarningEventTopic_Data_map;

uv_mutex_t   g_RtnWarningEventTopic_mutex;
uv_async_t   g_RtnWarningEventTopic_async;
vector<FRONT_ID>    g_RtnWarningEventTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnWarningEventTopic_Data_map;

uv_mutex_t   g_RspQryCPUUsageTopic_mutex;
uv_async_t   g_RspQryCPUUsageTopic_async;
vector<FRONT_ID>    g_RspQryCPUUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryCPUUsageTopic_Data_map;

uv_mutex_t   g_RtnCPUUsageTopic_mutex;
uv_async_t   g_RtnCPUUsageTopic_async;
vector<FRONT_ID>    g_RtnCPUUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnCPUUsageTopic_Data_map;

uv_mutex_t   g_RspQryMemoryUsageTopic_mutex;
uv_async_t   g_RspQryMemoryUsageTopic_async;
vector<FRONT_ID>    g_RspQryMemoryUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMemoryUsageTopic_Data_map;

uv_mutex_t   g_RtnMemoryUsageTopic_mutex;
uv_async_t   g_RtnMemoryUsageTopic_async;
vector<FRONT_ID>    g_RtnMemoryUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMemoryUsageTopic_Data_map;

uv_mutex_t   g_RspQryDiskUsageTopic_mutex;
uv_async_t   g_RspQryDiskUsageTopic_async;
vector<FRONT_ID>    g_RspQryDiskUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryDiskUsageTopic_Data_map;

uv_mutex_t   g_RtnDiskUsageTopic_mutex;
uv_async_t   g_RtnDiskUsageTopic_async;
vector<FRONT_ID>    g_RtnDiskUsageTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnDiskUsageTopic_Data_map;

uv_mutex_t   g_RspQryObjectAttrTopic_mutex;
uv_async_t   g_RspQryObjectAttrTopic_async;
vector<FRONT_ID>    g_RspQryObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryObjectAttrTopic_Data_map;

uv_mutex_t   g_RtnObjectAttrTopic_mutex;
uv_async_t   g_RtnObjectAttrTopic_async;
vector<FRONT_ID>    g_RtnObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnObjectAttrTopic_Data_map;

uv_mutex_t   g_RspQryInvalidateOrderTopic_mutex;
uv_async_t   g_RspQryInvalidateOrderTopic_async;
vector<FRONT_ID>    g_RspQryInvalidateOrderTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryInvalidateOrderTopic_Data_map;

uv_mutex_t   g_RtnInvalidateOrderTopic_mutex;
uv_async_t   g_RtnInvalidateOrderTopic_async;
vector<FRONT_ID>    g_RtnInvalidateOrderTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnInvalidateOrderTopic_Data_map;

uv_mutex_t   g_RspQryOrderStatusTopic_mutex;
uv_async_t   g_RspQryOrderStatusTopic_async;
vector<FRONT_ID>    g_RspQryOrderStatusTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryOrderStatusTopic_Data_map;

uv_mutex_t   g_RtnOrderStatusTopic_mutex;
uv_async_t   g_RtnOrderStatusTopic_async;
vector<FRONT_ID>    g_RtnOrderStatusTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnOrderStatusTopic_Data_map;

uv_mutex_t   g_RspQryBargainOrderTopic_mutex;
uv_async_t   g_RspQryBargainOrderTopic_async;
vector<FRONT_ID>    g_RspQryBargainOrderTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryBargainOrderTopic_Data_map;

uv_mutex_t   g_RtnBargainOrderTopic_mutex;
uv_async_t   g_RtnBargainOrderTopic_async;
vector<FRONT_ID>    g_RtnBargainOrderTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnBargainOrderTopic_Data_map;

uv_mutex_t   g_RspQryInstPropertyTopic_mutex;
uv_async_t   g_RspQryInstPropertyTopic_async;
vector<FRONT_ID>    g_RspQryInstPropertyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryInstPropertyTopic_Data_map;

uv_mutex_t   g_RtnInstPropertyTopic_mutex;
uv_async_t   g_RtnInstPropertyTopic_async;
vector<FRONT_ID>    g_RtnInstPropertyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnInstPropertyTopic_Data_map;

uv_mutex_t   g_RspQryMarginRateTopic_mutex;
uv_async_t   g_RspQryMarginRateTopic_async;
vector<FRONT_ID>    g_RspQryMarginRateTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMarginRateTopic_Data_map;

uv_mutex_t   g_RtnMarginRateTopic_mutex;
uv_async_t   g_RtnMarginRateTopic_async;
vector<FRONT_ID>    g_RtnMarginRateTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMarginRateTopic_Data_map;

uv_mutex_t   g_RspQryPriceLimitTopic_mutex;
uv_async_t   g_RspQryPriceLimitTopic_async;
vector<FRONT_ID>    g_RspQryPriceLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPriceLimitTopic_Data_map;

uv_mutex_t   g_RtnPriceLimitTopic_mutex;
uv_async_t   g_RtnPriceLimitTopic_async;
vector<FRONT_ID>    g_RtnPriceLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPriceLimitTopic_Data_map;

uv_mutex_t   g_RspQryPartPosiLimitTopic_mutex;
uv_async_t   g_RspQryPartPosiLimitTopic_async;
vector<FRONT_ID>    g_RspQryPartPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPartPosiLimitTopic_Data_map;

uv_mutex_t   g_RtnPartPosiLimitTopic_mutex;
uv_async_t   g_RtnPartPosiLimitTopic_async;
vector<FRONT_ID>    g_RtnPartPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPartPosiLimitTopic_Data_map;

uv_mutex_t   g_RspQryClientPosiLimitTopic_mutex;
uv_async_t   g_RspQryClientPosiLimitTopic_async;
vector<FRONT_ID>    g_RspQryClientPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientPosiLimitTopic_Data_map;

uv_mutex_t   g_RtnClientPosiLimitTopic_mutex;
uv_async_t   g_RtnClientPosiLimitTopic_async;
vector<FRONT_ID>    g_RtnClientPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnClientPosiLimitTopic_Data_map;

uv_mutex_t   g_RspQrySpecialPosiLimitTopic_mutex;
uv_async_t   g_RspQrySpecialPosiLimitTopic_async;
vector<FRONT_ID>    g_RspQrySpecialPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySpecialPosiLimitTopic_Data_map;

uv_mutex_t   g_RtnSpecialPosiLimitTopic_mutex;
uv_async_t   g_RtnSpecialPosiLimitTopic_async;
vector<FRONT_ID>    g_RtnSpecialPosiLimitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSpecialPosiLimitTopic_Data_map;

uv_mutex_t   g_RspQryTransactionChgTopic_mutex;
uv_async_t   g_RspQryTransactionChgTopic_async;
vector<FRONT_ID>    g_RspQryTransactionChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTransactionChgTopic_Data_map;

uv_mutex_t   g_RtnTransactionChgTopic_mutex;
uv_async_t   g_RtnTransactionChgTopic_async;
vector<FRONT_ID>    g_RtnTransactionChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTransactionChgTopic_Data_map;

uv_mutex_t   g_RspQryClientChgTopic_mutex;
uv_async_t   g_RspQryClientChgTopic_async;
vector<FRONT_ID>    g_RspQryClientChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientChgTopic_Data_map;

uv_mutex_t   g_RtnClientChgTopic_mutex;
uv_async_t   g_RtnClientChgTopic_async;
vector<FRONT_ID>    g_RtnClientChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnClientChgTopic_Data_map;

uv_mutex_t   g_RspQryPartClientChgTopic_mutex;
uv_async_t   g_RspQryPartClientChgTopic_async;
vector<FRONT_ID>    g_RspQryPartClientChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPartClientChgTopic_Data_map;

uv_mutex_t   g_RtnPartClientChgTopic_mutex;
uv_async_t   g_RtnPartClientChgTopic_async;
vector<FRONT_ID>    g_RtnPartClientChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPartClientChgTopic_Data_map;

uv_mutex_t   g_RspQryPosiLimitChgTopic_mutex;
uv_async_t   g_RspQryPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RspQryPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RtnPosiLimitChgTopic_mutex;
uv_async_t   g_RtnPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RtnPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RspQryHedgeDetailChgTopic_mutex;
uv_async_t   g_RspQryHedgeDetailChgTopic_async;
vector<FRONT_ID>    g_RspQryHedgeDetailChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHedgeDetailChgTopic_Data_map;

uv_mutex_t   g_RtnHedgeDetailChgTopic_mutex;
uv_async_t   g_RtnHedgeDetailChgTopic_async;
vector<FRONT_ID>    g_RtnHedgeDetailChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnHedgeDetailChgTopic_Data_map;

uv_mutex_t   g_RspQryParticipantChgTopic_mutex;
uv_async_t   g_RspQryParticipantChgTopic_async;
vector<FRONT_ID>    g_RspQryParticipantChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryParticipantChgTopic_Data_map;

uv_mutex_t   g_RtnParticipantChgTopic_mutex;
uv_async_t   g_RtnParticipantChgTopic_async;
vector<FRONT_ID>    g_RtnParticipantChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnParticipantChgTopic_Data_map;

uv_mutex_t   g_RspQryMarginRateChgTopic_mutex;
uv_async_t   g_RspQryMarginRateChgTopic_async;
vector<FRONT_ID>    g_RspQryMarginRateChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMarginRateChgTopic_Data_map;

uv_mutex_t   g_RtnMarginRateChgTopic_mutex;
uv_async_t   g_RtnMarginRateChgTopic_async;
vector<FRONT_ID>    g_RtnMarginRateChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMarginRateChgTopic_Data_map;

uv_mutex_t   g_RspQryUserIpChgTopic_mutex;
uv_async_t   g_RspQryUserIpChgTopic_async;
vector<FRONT_ID>    g_RspQryUserIpChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryUserIpChgTopic_Data_map;

uv_mutex_t   g_RtnUserIpChgTopic_mutex;
uv_async_t   g_RtnUserIpChgTopic_async;
vector<FRONT_ID>    g_RtnUserIpChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnUserIpChgTopic_Data_map;

uv_mutex_t   g_RspQryClientPosiLimitChgTopic_mutex;
uv_async_t   g_RspQryClientPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RspQryClientPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RtnClientPosiLimitChgTopic_mutex;
uv_async_t   g_RtnClientPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RtnClientPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnClientPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RspQrySpecPosiLimitChgTopic_mutex;
uv_async_t   g_RspQrySpecPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RspQrySpecPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySpecPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RtnSpecPosiLimitChgTopic_mutex;
uv_async_t   g_RtnSpecPosiLimitChgTopic_async;
vector<FRONT_ID>    g_RtnSpecPosiLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSpecPosiLimitChgTopic_Data_map;

uv_mutex_t   g_RspQryHistoryObjectAttrTopic_mutex;
uv_async_t   g_RspQryHistoryObjectAttrTopic_async;
vector<FRONT_ID>    g_RspQryHistoryObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHistoryObjectAttrTopic_Data_map;

uv_mutex_t   g_RtnHistoryObjectAttrTopic_mutex;
uv_async_t   g_RtnHistoryObjectAttrTopic_async;
vector<FRONT_ID>    g_RtnHistoryObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnHistoryObjectAttrTopic_Data_map;

uv_mutex_t   g_RspQryFrontInfoTopic_mutex;
uv_async_t   g_RspQryFrontInfoTopic_async;
vector<FRONT_ID>    g_RspQryFrontInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFrontInfoTopic_Data_map;

uv_mutex_t   g_RtnFrontInfoTopic_mutex;
uv_async_t   g_RtnFrontInfoTopic_async;
vector<FRONT_ID>    g_RtnFrontInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFrontInfoTopic_Data_map;

uv_mutex_t   g_RspQrySysUserLoginTopic_mutex;
uv_async_t   g_RspQrySysUserLoginTopic_async;
vector<FRONT_ID>    g_RspQrySysUserLoginTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysUserLoginTopic_Data_map;

uv_mutex_t   g_RspQrySysUserLogoutTopic_mutex;
uv_async_t   g_RspQrySysUserLogoutTopic_async;
vector<FRONT_ID>    g_RspQrySysUserLogoutTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysUserLogoutTopic_Data_map;

uv_mutex_t   g_RspQrySysUserPasswordUpdateTopic_mutex;
uv_async_t   g_RspQrySysUserPasswordUpdateTopic_async;
vector<FRONT_ID>    g_RspQrySysUserPasswordUpdateTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysUserPasswordUpdateTopic_Data_map;

uv_mutex_t   g_RspQrySysUserRegisterTopic_mutex;
uv_async_t   g_RspQrySysUserRegisterTopic_async;
vector<FRONT_ID>    g_RspQrySysUserRegisterTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysUserRegisterTopic_Data_map;

uv_mutex_t   g_RspQrySysUserDeleteTopic_mutex;
uv_async_t   g_RspQrySysUserDeleteTopic_async;
vector<FRONT_ID>    g_RspQrySysUserDeleteTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysUserDeleteTopic_Data_map;

uv_mutex_t   g_RspQryParticipantInitTopic_mutex;
uv_async_t   g_RspQryParticipantInitTopic_async;
vector<FRONT_ID>    g_RspQryParticipantInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryParticipantInitTopic_Data_map;

uv_mutex_t   g_RtnParticipantInitTopic_mutex;
uv_async_t   g_RtnParticipantInitTopic_async;
vector<FRONT_ID>    g_RtnParticipantInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnParticipantInitTopic_Data_map;

uv_mutex_t   g_RspQryUserInitTopic_mutex;
uv_async_t   g_RspQryUserInitTopic_async;
vector<FRONT_ID>    g_RspQryUserInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryUserInitTopic_Data_map;

uv_mutex_t   g_RtnUserInitTopic_mutex;
uv_async_t   g_RtnUserInitTopic_async;
vector<FRONT_ID>    g_RtnUserInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnUserInitTopic_Data_map;

uv_mutex_t   g_RspQryClientInitTopic_mutex;
uv_async_t   g_RspQryClientInitTopic_async;
vector<FRONT_ID>    g_RspQryClientInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientInitTopic_Data_map;

uv_mutex_t   g_RtnClientInitTopic_mutex;
uv_async_t   g_RtnClientInitTopic_async;
vector<FRONT_ID>    g_RtnClientInitTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnClientInitTopic_Data_map;

uv_mutex_t   g_RspQryTradeLogTopic_mutex;
uv_async_t   g_RspQryTradeLogTopic_async;
vector<FRONT_ID>    g_RspQryTradeLogTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeLogTopic_Data_map;

uv_mutex_t   g_RtnTradeLogTopic_mutex;
uv_async_t   g_RtnTradeLogTopic_async;
vector<FRONT_ID>    g_RtnTradeLogTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTradeLogTopic_Data_map;

uv_mutex_t   g_RspQryTradeUserLoginInfoTopic_mutex;
uv_async_t   g_RspQryTradeUserLoginInfoTopic_async;
vector<FRONT_ID>    g_RspQryTradeUserLoginInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeUserLoginInfoTopic_Data_map;

uv_mutex_t   g_RtnTradeUserLoginInfoTopic_mutex;
uv_async_t   g_RtnTradeUserLoginInfoTopic_async;
vector<FRONT_ID>    g_RtnTradeUserLoginInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTradeUserLoginInfoTopic_Data_map;

uv_mutex_t   g_RspQryPartTradeTopic_mutex;
uv_async_t   g_RspQryPartTradeTopic_async;
vector<FRONT_ID>    g_RspQryPartTradeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPartTradeTopic_Data_map;

uv_mutex_t   g_RspQryTradepeakTopic_mutex;
uv_async_t   g_RspQryTradepeakTopic_async;
vector<FRONT_ID>    g_RspQryTradepeakTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradepeakTopic_Data_map;

uv_mutex_t   g_RtnUpdateSysConfigTopic_mutex;
uv_async_t   g_RtnUpdateSysConfigTopic_async;
vector<FRONT_ID>    g_RtnUpdateSysConfigTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnUpdateSysConfigTopic_Data_map;

uv_mutex_t   g_RtnSysUser_mutex;
uv_async_t   g_RtnSysUser_async;
vector<FRONT_ID>    g_RtnSysUser_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSysUser_Data_map;

uv_mutex_t   g_RtnPriceLimitChgTopic_mutex;
uv_async_t   g_RtnPriceLimitChgTopic_async;
vector<FRONT_ID>    g_RtnPriceLimitChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPriceLimitChgTopic_Data_map;

uv_mutex_t   g_RspQryHistoryCpuInfoTopic_mutex;
uv_async_t   g_RspQryHistoryCpuInfoTopic_async;
vector<FRONT_ID>    g_RspQryHistoryCpuInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHistoryCpuInfoTopic_Data_map;

uv_mutex_t   g_RspQryHistoryMemInfoTopic_mutex;
uv_async_t   g_RspQryHistoryMemInfoTopic_async;
vector<FRONT_ID>    g_RspQryHistoryMemInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHistoryMemInfoTopic_Data_map;

uv_mutex_t   g_RspQryHistoryNetworkInfoTopic_mutex;
uv_async_t   g_RspQryHistoryNetworkInfoTopic_async;
vector<FRONT_ID>    g_RspQryHistoryNetworkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHistoryNetworkInfoTopic_Data_map;

uv_mutex_t   g_RspQryMonitorOnlineUser_mutex;
uv_async_t   g_RspQryMonitorOnlineUser_async;
vector<FRONT_ID>    g_RspQryMonitorOnlineUser_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMonitorOnlineUser_Data_map;

uv_mutex_t   g_RspQryFrontStat_mutex;
uv_async_t   g_RspQryFrontStat_async;
vector<FRONT_ID>    g_RspQryFrontStat_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFrontStat_Data_map;

uv_mutex_t   g_RtnSysTimeSyncTopic_mutex;
uv_async_t   g_RtnSysTimeSyncTopic_async;
vector<FRONT_ID>    g_RtnSysTimeSyncTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSysTimeSyncTopic_Data_map;

uv_mutex_t   g_RtnDataCenterChgTopic_mutex;
uv_async_t   g_RtnDataCenterChgTopic_async;
vector<FRONT_ID>    g_RtnDataCenterChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnDataCenterChgTopic_Data_map;

uv_mutex_t   g_RspQryHistoryTradePeakTopic_mutex;
uv_async_t   g_RspQryHistoryTradePeakTopic_async;
vector<FRONT_ID>    g_RspQryHistoryTradePeakTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryHistoryTradePeakTopic_Data_map;

uv_mutex_t   g_RtnHistoryTradePeakTopic_mutex;
uv_async_t   g_RtnHistoryTradePeakTopic_async;
vector<FRONT_ID>    g_RtnHistoryTradePeakTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnHistoryTradePeakTopic_Data_map;

uv_mutex_t   g_RspQrySyslogEventTopic_mutex;
uv_async_t   g_RspQrySyslogEventTopic_async;
vector<FRONT_ID>    g_RspQrySyslogEventTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySyslogEventTopic_Data_map;

uv_mutex_t   g_RtnSyslogEventTopic_mutex;
uv_async_t   g_RtnSyslogEventTopic_async;
vector<FRONT_ID>    g_RtnSyslogEventTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSyslogEventTopic_Data_map;

uv_mutex_t   g_RspQryTradeDayChangeTopic_mutex;
uv_async_t   g_RspQryTradeDayChangeTopic_async;
vector<FRONT_ID>    g_RspQryTradeDayChangeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeDayChangeTopic_Data_map;

uv_mutex_t   g_RspQryWebAppInfoTopic_mutex;
uv_async_t   g_RspQryWebAppInfoTopic_async;
vector<FRONT_ID>    g_RspQryWebAppInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryWebAppInfoTopic_Data_map;

uv_mutex_t   g_RtnWebAppInfoTopic_mutex;
uv_async_t   g_RtnWebAppInfoTopic_async;
vector<FRONT_ID>    g_RtnWebAppInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnWebAppInfoTopic_Data_map;

uv_mutex_t   g_RspQryServletInfoTopic_mutex;
uv_async_t   g_RspQryServletInfoTopic_async;
vector<FRONT_ID>    g_RspQryServletInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryServletInfoTopic_Data_map;

uv_mutex_t   g_RtnServletInfoTopic_mutex;
uv_async_t   g_RtnServletInfoTopic_async;
vector<FRONT_ID>    g_RtnServletInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnServletInfoTopic_Data_map;

uv_mutex_t   g_RspQryFileInfoTopic_mutex;
uv_async_t   g_RspQryFileInfoTopic_async;
vector<FRONT_ID>    g_RspQryFileInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFileInfoTopic_Data_map;

uv_mutex_t   g_RtnFileInfoTopic_mutex;
uv_async_t   g_RtnFileInfoTopic_async;
vector<FRONT_ID>    g_RtnFileInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFileInfoTopic_Data_map;

uv_mutex_t   g_RspQrySessionInfoTopic_mutex;
uv_async_t   g_RspQrySessionInfoTopic_async;
vector<FRONT_ID>    g_RspQrySessionInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySessionInfoTopic_Data_map;

uv_mutex_t   g_RtnSessionInfoTopic_mutex;
uv_async_t   g_RtnSessionInfoTopic_async;
vector<FRONT_ID>    g_RtnSessionInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSessionInfoTopic_Data_map;

uv_mutex_t   g_RspQryJDBCInfoTopic_mutex;
uv_async_t   g_RspQryJDBCInfoTopic_async;
vector<FRONT_ID>    g_RspQryJDBCInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryJDBCInfoTopic_Data_map;

uv_mutex_t   g_RtnJDBCInfoTopic_mutex;
uv_async_t   g_RtnJDBCInfoTopic_async;
vector<FRONT_ID>    g_RtnJDBCInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnJDBCInfoTopic_Data_map;

uv_mutex_t   g_RspQryThreadInfoTopic_mutex;
uv_async_t   g_RspQryThreadInfoTopic_async;
vector<FRONT_ID>    g_RspQryThreadInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryThreadInfoTopic_Data_map;

uv_mutex_t   g_RtnThreadInfoTopic_mutex;
uv_async_t   g_RtnThreadInfoTopic_async;
vector<FRONT_ID>    g_RtnThreadInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnThreadInfoTopic_Data_map;

uv_mutex_t   g_RspQryVMInfoTopic_mutex;
uv_async_t   g_RspQryVMInfoTopic_async;
vector<FRONT_ID>    g_RspQryVMInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryVMInfoTopic_Data_map;

uv_mutex_t   g_RtnVMInfoTopic_mutex;
uv_async_t   g_RtnVMInfoTopic_async;
vector<FRONT_ID>    g_RtnVMInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnVMInfoTopic_Data_map;

uv_mutex_t   g_RspQryPropertyInfoTopic_mutex;
uv_async_t   g_RspQryPropertyInfoTopic_async;
vector<FRONT_ID>    g_RspQryPropertyInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPropertyInfoTopic_Data_map;

uv_mutex_t   g_RtnPropertyInfoTopic_mutex;
uv_async_t   g_RtnPropertyInfoTopic_async;
vector<FRONT_ID>    g_RtnPropertyInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPropertyInfoTopic_Data_map;

uv_mutex_t   g_RspQryMemPoolInfoTopic_mutex;
uv_async_t   g_RspQryMemPoolInfoTopic_async;
vector<FRONT_ID>    g_RspQryMemPoolInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMemPoolInfoTopic_Data_map;

uv_mutex_t   g_RtnMemPoolInfoTopic_mutex;
uv_async_t   g_RtnMemPoolInfoTopic_async;
vector<FRONT_ID>    g_RtnMemPoolInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMemPoolInfoTopic_Data_map;

uv_mutex_t   g_RspQryFileContentInfoTopic_mutex;
uv_async_t   g_RspQryFileContentInfoTopic_async;
vector<FRONT_ID>    g_RspQryFileContentInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFileContentInfoTopic_Data_map;

uv_mutex_t   g_RtnFileContentInfoTopic_mutex;
uv_async_t   g_RtnFileContentInfoTopic_async;
vector<FRONT_ID>    g_RtnFileContentInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFileContentInfoTopic_Data_map;

uv_mutex_t   g_RspQryConnectionInfoTopic_mutex;
uv_async_t   g_RspQryConnectionInfoTopic_async;
vector<FRONT_ID>    g_RspQryConnectionInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryConnectionInfoTopic_Data_map;

uv_mutex_t   g_RtnConnectionInfoTopic_mutex;
uv_async_t   g_RtnConnectionInfoTopic_async;
vector<FRONT_ID>    g_RtnConnectionInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnConnectionInfoTopic_Data_map;

uv_mutex_t   g_RspQryConnectorInfoTopic_mutex;
uv_async_t   g_RspQryConnectorInfoTopic_async;
vector<FRONT_ID>    g_RspQryConnectorInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryConnectorInfoTopic_Data_map;

uv_mutex_t   g_RtnConnectorInfoTopic_mutex;
uv_async_t   g_RtnConnectorInfoTopic_async;
vector<FRONT_ID>    g_RtnConnectorInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnConnectorInfoTopic_Data_map;

uv_mutex_t   g_RspQryDBQueryTopic_mutex;
uv_async_t   g_RspQryDBQueryTopic_async;
vector<FRONT_ID>    g_RspQryDBQueryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryDBQueryTopic_Data_map;

uv_mutex_t   g_RtnDBQueryTopic_mutex;
uv_async_t   g_RtnDBQueryTopic_async;
vector<FRONT_ID>    g_RtnDBQueryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnDBQueryTopic_Data_map;

uv_mutex_t   g_RspQryGeneralFieldTopic_mutex;
uv_async_t   g_RspQryGeneralFieldTopic_async;
vector<FRONT_ID>    g_RspQryGeneralFieldTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryGeneralFieldTopic_Data_map;

uv_mutex_t   g_RtnGeneralFieldTopic_mutex;
uv_async_t   g_RtnGeneralFieldTopic_async;
vector<FRONT_ID>    g_RtnGeneralFieldTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnGeneralFieldTopic_Data_map;

uv_mutex_t   g_RspQryGetFileTopic_mutex;
uv_async_t   g_RspQryGetFileTopic_async;
vector<FRONT_ID>    g_RspQryGetFileTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryGetFileTopic_Data_map;

uv_mutex_t   g_RspQryWarningQueryTopic_mutex;
uv_async_t   g_RspQryWarningQueryTopic_async;
vector<FRONT_ID>    g_RspQryWarningQueryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryWarningQueryTopic_Data_map;

uv_mutex_t   g_RtnWarningQueryTopic_mutex;
uv_async_t   g_RtnWarningQueryTopic_async;
vector<FRONT_ID>    g_RtnWarningQueryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnWarningQueryTopic_Data_map;

uv_mutex_t   g_RtnHostConfig_mutex;
uv_async_t   g_RtnHostConfig_async;
vector<FRONT_ID>    g_RtnHostConfig_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnHostConfig_Data_map;

uv_mutex_t   g_RspQryGeneralOperateTopic_mutex;
uv_async_t   g_RspQryGeneralOperateTopic_async;
vector<FRONT_ID>    g_RspQryGeneralOperateTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryGeneralOperateTopic_Data_map;

uv_mutex_t   g_RtnGeneralOperateTopic_mutex;
uv_async_t   g_RtnGeneralOperateTopic_async;
vector<FRONT_ID>    g_RtnGeneralOperateTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnGeneralOperateTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceLinkedTopic_mutex;
uv_async_t   g_RspQryNetDeviceLinkedTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceLinkedTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceLinkedTopic_Data_map;

uv_mutex_t   g_RtnNetDeviceLinkedTopic_mutex;
uv_async_t   g_RtnNetDeviceLinkedTopic_async;
vector<FRONT_ID>    g_RtnNetDeviceLinkedTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDeviceLinkedTopic_Data_map;

uv_mutex_t   g_RspQryTradeUserLoginStatTopic_mutex;
uv_async_t   g_RspQryTradeUserLoginStatTopic_async;
vector<FRONT_ID>    g_RspQryTradeUserLoginStatTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeUserLoginStatTopic_Data_map;

uv_mutex_t   g_RspQryTradeFrontOrderRttStatTopic_mutex;
uv_async_t   g_RspQryTradeFrontOrderRttStatTopic_async;
vector<FRONT_ID>    g_RspQryTradeFrontOrderRttStatTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeFrontOrderRttStatTopic_Data_map;

uv_mutex_t   g_RtnTradeFrontOrderRttStatTopic_mutex;
uv_async_t   g_RtnTradeFrontOrderRttStatTopic_async;
vector<FRONT_ID>    g_RtnTradeFrontOrderRttStatTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTradeFrontOrderRttStatTopic_Data_map;

uv_mutex_t   g_RspQryParticTradeOrderStatesTopic_mutex;
uv_async_t   g_RspQryParticTradeOrderStatesTopic_async;
vector<FRONT_ID>    g_RspQryParticTradeOrderStatesTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryParticTradeOrderStatesTopic_Data_map;

uv_mutex_t   g_RtnParticTradeOrderStatesTopic_mutex;
uv_async_t   g_RtnParticTradeOrderStatesTopic_async;
vector<FRONT_ID>    g_RtnParticTradeOrderStatesTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnParticTradeOrderStatesTopic_Data_map;

uv_mutex_t   g_RspQryRouterInfoTopic_mutex;
uv_async_t   g_RspQryRouterInfoTopic_async;
vector<FRONT_ID>    g_RspQryRouterInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryRouterInfoTopic_Data_map;

uv_mutex_t   g_RtnRouterInfoTopic_mutex;
uv_async_t   g_RtnRouterInfoTopic_async;
vector<FRONT_ID>    g_RtnRouterInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnRouterInfoTopic_Data_map;

uv_mutex_t   g_RspQryDiskIOTopic_mutex;
uv_async_t   g_RspQryDiskIOTopic_async;
vector<FRONT_ID>    g_RspQryDiskIOTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryDiskIOTopic_Data_map;

uv_mutex_t   g_RtnDiskIOTopic_mutex;
uv_async_t   g_RtnDiskIOTopic_async;
vector<FRONT_ID>    g_RtnDiskIOTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnDiskIOTopic_Data_map;

uv_mutex_t   g_RspQryStatInfoTopic_mutex;
uv_async_t   g_RspQryStatInfoTopic_async;
vector<FRONT_ID>    g_RspQryStatInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryStatInfoTopic_Data_map;

uv_mutex_t   g_RtnStatInfoTopic_mutex;
uv_async_t   g_RtnStatInfoTopic_async;
vector<FRONT_ID>    g_RtnStatInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnStatInfoTopic_Data_map;

uv_mutex_t   g_RspQryTradeOrderRttCutLineTopic_mutex;
uv_async_t   g_RspQryTradeOrderRttCutLineTopic_async;
vector<FRONT_ID>    g_RspQryTradeOrderRttCutLineTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryTradeOrderRttCutLineTopic_Data_map;

uv_mutex_t   g_RtnTradeOrderRttCutLineTopic_mutex;
uv_async_t   g_RtnTradeOrderRttCutLineTopic_async;
vector<FRONT_ID>    g_RtnTradeOrderRttCutLineTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnTradeOrderRttCutLineTopic_Data_map;

uv_mutex_t   g_RspQryClientInfoTopic_mutex;
uv_async_t   g_RspQryClientInfoTopic_async;
vector<FRONT_ID>    g_RspQryClientInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryClientInfoTopic_Data_map;

uv_mutex_t   g_RtnClientInfoTopic_mutex;
uv_async_t   g_RtnClientInfoTopic_async;
vector<FRONT_ID>    g_RtnClientInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnClientInfoTopic_Data_map;

uv_mutex_t   g_RspQryEventDescriptionTopic_mutex;
uv_async_t   g_RspQryEventDescriptionTopic_async;
vector<FRONT_ID>    g_RspQryEventDescriptionTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryEventDescriptionTopic_Data_map;

uv_mutex_t   g_RtnEventDescriptionTopic_mutex;
uv_async_t   g_RtnEventDescriptionTopic_async;
vector<FRONT_ID>    g_RtnEventDescriptionTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnEventDescriptionTopic_Data_map;

uv_mutex_t   g_RspQryFrontUniqueIDTopic_mutex;
uv_async_t   g_RspQryFrontUniqueIDTopic_async;
vector<FRONT_ID>    g_RspQryFrontUniqueIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFrontUniqueIDTopic_Data_map;

uv_mutex_t   g_RtnFrontUniqueIDTopic_mutex;
uv_async_t   g_RtnFrontUniqueIDTopic_async;
vector<FRONT_ID>    g_RtnFrontUniqueIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFrontUniqueIDTopic_Data_map;

uv_mutex_t   g_RspQryNetPartyLinkAddrChangeTopic_mutex;
uv_async_t   g_RspQryNetPartyLinkAddrChangeTopic_async;
vector<FRONT_ID>    g_RspQryNetPartyLinkAddrChangeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkAddrChangeTopic_Data_map;

uv_mutex_t   g_RtnNetPartyLinkAddrChangeTopic_mutex;
uv_async_t   g_RtnNetPartyLinkAddrChangeTopic_async;
vector<FRONT_ID>    g_RtnNetPartyLinkAddrChangeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkAddrChangeTopic_Data_map;

uv_mutex_t   g_RspQryNetDelPartyLinkInfoTopic_mutex;
uv_async_t   g_RspQryNetDelPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetDelPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDelPartyLinkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetDelPartyLinkInfoTopic_mutex;
uv_async_t   g_RtnNetDelPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetDelPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDelPartyLinkInfoTopic_Data_map;

uv_mutex_t   g_RspQryPerformanceTopTopic_mutex;
uv_async_t   g_RspQryPerformanceTopTopic_async;
vector<FRONT_ID>    g_RspQryPerformanceTopTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryPerformanceTopTopic_Data_map;

uv_mutex_t   g_RtnPerformanceTopTopic_mutex;
uv_async_t   g_RtnPerformanceTopTopic_async;
vector<FRONT_ID>    g_RtnPerformanceTopTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnPerformanceTopTopic_Data_map;

uv_mutex_t   g_RspQryInstrumentStatusTopic_mutex;
uv_async_t   g_RspQryInstrumentStatusTopic_async;
vector<FRONT_ID>    g_RspQryInstrumentStatusTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryInstrumentStatusTopic_Data_map;

uv_mutex_t   g_RtnInstrumentStatusTopic_mutex;
uv_async_t   g_RtnInstrumentStatusTopic_async;
vector<FRONT_ID>    g_RtnInstrumentStatusTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnInstrumentStatusTopic_Data_map;

uv_mutex_t   g_RspQryCurrTradingSegmentAttrTopic_mutex;
uv_async_t   g_RspQryCurrTradingSegmentAttrTopic_async;
vector<FRONT_ID>    g_RspQryCurrTradingSegmentAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryCurrTradingSegmentAttrTopic_Data_map;

uv_mutex_t   g_RtnCurrTradingSegmentAttrTopic_mutex;
uv_async_t   g_RtnCurrTradingSegmentAttrTopic_async;
vector<FRONT_ID>    g_RtnCurrTradingSegmentAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnCurrTradingSegmentAttrTopic_Data_map;

uv_mutex_t   g_RspQryNetAreaTopic_mutex;
uv_async_t   g_RspQryNetAreaTopic_async;
vector<FRONT_ID>    g_RspQryNetAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetAreaTopic_Data_map;

uv_mutex_t   g_RtnNetAreaTopic_mutex;
uv_async_t   g_RtnNetAreaTopic_async;
vector<FRONT_ID>    g_RtnNetAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetAreaTopic_Data_map;

uv_mutex_t   g_RspQryNetSubAreaTopic_mutex;
uv_async_t   g_RspQryNetSubAreaTopic_async;
vector<FRONT_ID>    g_RspQryNetSubAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetSubAreaTopic_Data_map;

uv_mutex_t   g_RtnNetSubAreaTopic_mutex;
uv_async_t   g_RtnNetSubAreaTopic_async;
vector<FRONT_ID>    g_RtnNetSubAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetSubAreaTopic_Data_map;

uv_mutex_t   g_RspQryNetSubAreaIPTopic_mutex;
uv_async_t   g_RspQryNetSubAreaIPTopic_async;
vector<FRONT_ID>    g_RspQryNetSubAreaIPTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetSubAreaIPTopic_Data_map;

uv_mutex_t   g_RtnNetSubAreaIPTopic_mutex;
uv_async_t   g_RtnNetSubAreaIPTopic_async;
vector<FRONT_ID>    g_RtnNetSubAreaIPTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetSubAreaIPTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceTopic_mutex;
uv_async_t   g_RspQryNetDeviceTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceTopic_Data_map;

uv_mutex_t   g_RtnNetDeviceTopic_mutex;
uv_async_t   g_RtnNetDeviceTopic_async;
vector<FRONT_ID>    g_RtnNetDeviceTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDeviceTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceDetectTopic_mutex;
uv_async_t   g_RspQryNetDeviceDetectTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceDetectTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceDetectTopic_Data_map;

uv_mutex_t   g_RspQryNetBuildingTopic_mutex;
uv_async_t   g_RspQryNetBuildingTopic_async;
vector<FRONT_ID>    g_RspQryNetBuildingTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetBuildingTopic_Data_map;

uv_mutex_t   g_RtnNetBuildingTopic_mutex;
uv_async_t   g_RtnNetBuildingTopic_async;
vector<FRONT_ID>    g_RtnNetBuildingTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetBuildingTopic_Data_map;

uv_mutex_t   g_RspQryNetRoomTopic_mutex;
uv_async_t   g_RspQryNetRoomTopic_async;
vector<FRONT_ID>    g_RspQryNetRoomTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetRoomTopic_Data_map;

uv_mutex_t   g_RtnNetRoomTopic_mutex;
uv_async_t   g_RtnNetRoomTopic_async;
vector<FRONT_ID>    g_RtnNetRoomTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetRoomTopic_Data_map;

uv_mutex_t   g_RspQryNetCabinetsTopic_mutex;
uv_async_t   g_RspQryNetCabinetsTopic_async;
vector<FRONT_ID>    g_RspQryNetCabinetsTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetCabinetsTopic_Data_map;

uv_mutex_t   g_RtnNetCabinetsTopic_mutex;
uv_async_t   g_RtnNetCabinetsTopic_async;
vector<FRONT_ID>    g_RtnNetCabinetsTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetCabinetsTopic_Data_map;

uv_mutex_t   g_RspQryNetOIDTopic_mutex;
uv_async_t   g_RspQryNetOIDTopic_async;
vector<FRONT_ID>    g_RspQryNetOIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetOIDTopic_Data_map;

uv_mutex_t   g_RtnNetOIDTopic_mutex;
uv_async_t   g_RtnNetOIDTopic_async;
vector<FRONT_ID>    g_RtnNetOIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetOIDTopic_Data_map;

uv_mutex_t   g_RspQryNetTimePolicyTopic_mutex;
uv_async_t   g_RspQryNetTimePolicyTopic_async;
vector<FRONT_ID>    g_RspQryNetTimePolicyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetTimePolicyTopic_Data_map;

uv_mutex_t   g_RtnNetTimePolicyTopic_mutex;
uv_async_t   g_RtnNetTimePolicyTopic_async;
vector<FRONT_ID>    g_RtnNetTimePolicyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetTimePolicyTopic_Data_map;

uv_mutex_t   g_RspQryNetGatherTaskTopic_mutex;
uv_async_t   g_RspQryNetGatherTaskTopic_async;
vector<FRONT_ID>    g_RspQryNetGatherTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetGatherTaskTopic_Data_map;

uv_mutex_t   g_RtnNetGatherTaskTopic_mutex;
uv_async_t   g_RtnNetGatherTaskTopic_async;
vector<FRONT_ID>    g_RtnNetGatherTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetGatherTaskTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceChgTopic_mutex;
uv_async_t   g_RspQryNetDeviceChgTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceChgTopic_Data_map;

uv_mutex_t   g_RtnNetDeviceChgTopic_mutex;
uv_async_t   g_RtnNetDeviceChgTopic_async;
vector<FRONT_ID>    g_RtnNetDeviceChgTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDeviceChgTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceTypeTopic_mutex;
uv_async_t   g_RspQryNetDeviceTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceTypeTopic_Data_map;

uv_mutex_t   g_RtnNetDeviceTypeTopic_mutex;
uv_async_t   g_RtnNetDeviceTypeTopic_async;
vector<FRONT_ID>    g_RtnNetDeviceTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDeviceTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetDeviceCategoryTopic_mutex;
uv_async_t   g_RspQryNetDeviceCategoryTopic_async;
vector<FRONT_ID>    g_RspQryNetDeviceCategoryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDeviceCategoryTopic_Data_map;

uv_mutex_t   g_RtnNetDeviceCategoryTopic_mutex;
uv_async_t   g_RtnNetDeviceCategoryTopic_async;
vector<FRONT_ID>    g_RtnNetDeviceCategoryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDeviceCategoryTopic_Data_map;

uv_mutex_t   g_RspQryNetManufactoryTopic_mutex;
uv_async_t   g_RspQryNetManufactoryTopic_async;
vector<FRONT_ID>    g_RspQryNetManufactoryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetManufactoryTopic_Data_map;

uv_mutex_t   g_RtnNetManufactoryTopic_mutex;
uv_async_t   g_RtnNetManufactoryTopic_async;
vector<FRONT_ID>    g_RtnNetManufactoryTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetManufactoryTopic_Data_map;

uv_mutex_t   g_RspQryNetCommunityTopic_mutex;
uv_async_t   g_RspQryNetCommunityTopic_async;
vector<FRONT_ID>    g_RspQryNetCommunityTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetCommunityTopic_Data_map;

uv_mutex_t   g_RtnNetCommunityTopic_mutex;
uv_async_t   g_RtnNetCommunityTopic_async;
vector<FRONT_ID>    g_RtnNetCommunityTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetCommunityTopic_Data_map;

uv_mutex_t   g_RspQryNetPortTypeTopic_mutex;
uv_async_t   g_RspQryNetPortTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetPortTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPortTypeTopic_Data_map;

uv_mutex_t   g_RtnNetPortTypeTopic_mutex;
uv_async_t   g_RtnNetPortTypeTopic_async;
vector<FRONT_ID>    g_RtnNetPortTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPortTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetPartAccessSpotTopic_mutex;
uv_async_t   g_RspQryNetPartAccessSpotTopic_async;
vector<FRONT_ID>    g_RspQryNetPartAccessSpotTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPartAccessSpotTopic_Data_map;

uv_mutex_t   g_RtnNetPartAccessSpotTopic_mutex;
uv_async_t   g_RtnNetPartAccessSpotTopic_async;
vector<FRONT_ID>    g_RtnNetPartAccessSpotTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPartAccessSpotTopic_Data_map;

uv_mutex_t   g_RspQryNetInterfaceTopic_mutex;
uv_async_t   g_RspQryNetInterfaceTopic_async;
vector<FRONT_ID>    g_RspQryNetInterfaceTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetInterfaceTopic_Data_map;

uv_mutex_t   g_RtnNetInterfaceTopic_mutex;
uv_async_t   g_RtnNetInterfaceTopic_async;
vector<FRONT_ID>    g_RtnNetInterfaceTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetInterfaceTopic_Data_map;

uv_mutex_t   g_RspQryNetGeneralOIDTopic_mutex;
uv_async_t   g_RspQryNetGeneralOIDTopic_async;
vector<FRONT_ID>    g_RspQryNetGeneralOIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetGeneralOIDTopic_Data_map;

uv_mutex_t   g_RtnNetGeneralOIDTopic_mutex;
uv_async_t   g_RtnNetGeneralOIDTopic_async;
vector<FRONT_ID>    g_RtnNetGeneralOIDTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetGeneralOIDTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTypeTopic_mutex;
uv_async_t   g_RspQryNetMonitorTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTypeTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTypeTopic_mutex;
uv_async_t   g_RtnNetMonitorTypeTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorAttrScopeTopic_mutex;
uv_async_t   g_RspQryNetMonitorAttrScopeTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorAttrScopeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorAttrScopeTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorAttrScopeTopic_mutex;
uv_async_t   g_RtnNetMonitorAttrScopeTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorAttrScopeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorAttrScopeTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorAttrTypeTopic_mutex;
uv_async_t   g_RspQryNetMonitorAttrTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorAttrTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorAttrTypeTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorAttrTypeTopic_mutex;
uv_async_t   g_RtnNetMonitorAttrTypeTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorAttrTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorAttrTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorObjectAttrTopic_mutex;
uv_async_t   g_RspQryNetMonitorObjectAttrTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorObjectAttrTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorObjectAttrTopic_mutex;
uv_async_t   g_RtnNetMonitorObjectAttrTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorObjectAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorObjectAttrTopic_Data_map;

uv_mutex_t   g_RspQryNetFuncAreaTopic_mutex;
uv_async_t   g_RspQryNetFuncAreaTopic_async;
vector<FRONT_ID>    g_RspQryNetFuncAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetFuncAreaTopic_Data_map;

uv_mutex_t   g_RtnNetFuncAreaTopic_mutex;
uv_async_t   g_RtnNetFuncAreaTopic_async;
vector<FRONT_ID>    g_RtnNetFuncAreaTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetFuncAreaTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorCommandTypeTopic_mutex;
uv_async_t   g_RspQryNetMonitorCommandTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorCommandTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorCommandTypeTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorCommandTypeTopic_mutex;
uv_async_t   g_RtnNetMonitorCommandTypeTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorCommandTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorCommandTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorActionGroupTopic_mutex;
uv_async_t   g_RspQryNetMonitorActionGroupTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorActionGroupTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorActionGroupTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorActionGroupTopic_mutex;
uv_async_t   g_RtnNetMonitorActionGroupTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorActionGroupTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorActionGroupTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorDeviceGroupTopic_mutex;
uv_async_t   g_RspQryNetMonitorDeviceGroupTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorDeviceGroupTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorDeviceGroupTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorDeviceGroupTopic_mutex;
uv_async_t   g_RtnNetMonitorDeviceGroupTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorDeviceGroupTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorDeviceGroupTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTaskInfoTopic_mutex;
uv_async_t   g_RspQryNetMonitorTaskInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTaskInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskInfoTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTaskInfoTopic_mutex;
uv_async_t   g_RtnNetMonitorTaskInfoTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTaskInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTaskResultTopic_mutex;
uv_async_t   g_RspQryNetMonitorTaskResultTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTaskResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskResultTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTaskResultTopic_mutex;
uv_async_t   g_RtnNetMonitorTaskResultTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTaskResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskResultTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTaskObjectSetTopic_mutex;
uv_async_t   g_RspQryNetMonitorTaskObjectSetTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTaskObjectSetTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskObjectSetTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTaskObjectSetTopic_mutex;
uv_async_t   g_RtnNetMonitorTaskObjectSetTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTaskObjectSetTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskObjectSetTopic_Data_map;

uv_mutex_t   g_RspQryNetPartyLinkInfoTopic_mutex;
uv_async_t   g_RspQryNetPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetPartyLinkInfoTopic_mutex;
uv_async_t   g_RtnNetPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorActionAttrTopic_mutex;
uv_async_t   g_RspQryNetMonitorActionAttrTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorActionAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorActionAttrTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorActionAttrTopic_mutex;
uv_async_t   g_RtnNetMonitorActionAttrTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorActionAttrTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorActionAttrTopic_Data_map;

uv_mutex_t   g_RspQryNetModuleTopic_mutex;
uv_async_t   g_RspQryNetModuleTopic_async;
vector<FRONT_ID>    g_RspQryNetModuleTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetModuleTopic_Data_map;

uv_mutex_t   g_RtnNetModuleTopic_mutex;
uv_async_t   g_RtnNetModuleTopic_async;
vector<FRONT_ID>    g_RtnNetModuleTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetModuleTopic_Data_map;

uv_mutex_t   g_RspQryNetEventExprTopic_mutex;
uv_async_t   g_RspQryNetEventExprTopic_async;
vector<FRONT_ID>    g_RspQryNetEventExprTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetEventExprTopic_Data_map;

uv_mutex_t   g_RtnNetEventExprTopic_mutex;
uv_async_t   g_RtnNetEventExprTopic_async;
vector<FRONT_ID>    g_RtnNetEventExprTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetEventExprTopic_Data_map;

uv_mutex_t   g_RspQryNetEventTypeTopic_mutex;
uv_async_t   g_RspQryNetEventTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetEventTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetEventTypeTopic_Data_map;

uv_mutex_t   g_RtnNetEventTypeTopic_mutex;
uv_async_t   g_RtnNetEventTypeTopic_async;
vector<FRONT_ID>    g_RtnNetEventTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetEventTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetSubEventTypeTopic_mutex;
uv_async_t   g_RspQryNetSubEventTypeTopic_async;
vector<FRONT_ID>    g_RspQryNetSubEventTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetSubEventTypeTopic_Data_map;

uv_mutex_t   g_RtnNetSubEventTypeTopic_mutex;
uv_async_t   g_RtnNetSubEventTypeTopic_async;
vector<FRONT_ID>    g_RtnNetSubEventTypeTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetSubEventTypeTopic_Data_map;

uv_mutex_t   g_RspQryNetEventLevelTopic_mutex;
uv_async_t   g_RspQryNetEventLevelTopic_async;
vector<FRONT_ID>    g_RspQryNetEventLevelTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetEventLevelTopic_Data_map;

uv_mutex_t   g_RtnNetEventLevelTopic_mutex;
uv_async_t   g_RtnNetEventLevelTopic_async;
vector<FRONT_ID>    g_RtnNetEventLevelTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetEventLevelTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTaskStatusResultTopic_mutex;
uv_async_t   g_RspQryNetMonitorTaskStatusResultTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTaskStatusResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskStatusResultTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTaskStatusResultTopic_mutex;
uv_async_t   g_RtnNetMonitorTaskStatusResultTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTaskStatusResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskStatusResultTopic_Data_map;

uv_mutex_t   g_RspQryNetCfgFileTopic_mutex;
uv_async_t   g_RspQryNetCfgFileTopic_async;
vector<FRONT_ID>    g_RspQryNetCfgFileTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetCfgFileTopic_Data_map;

uv_mutex_t   g_RtnNetCfgFileTopic_mutex;
uv_async_t   g_RtnNetCfgFileTopic_async;
vector<FRONT_ID>    g_RtnNetCfgFileTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetCfgFileTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorDeviceTaskTopic_mutex;
uv_async_t   g_RspQryNetMonitorDeviceTaskTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorDeviceTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorDeviceTaskTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorDeviceTaskTopic_mutex;
uv_async_t   g_RtnNetMonitorDeviceTaskTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorDeviceTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorDeviceTaskTopic_Data_map;

uv_mutex_t   g_RspQryNetMonitorTaskInstAttrsTopic_mutex;
uv_async_t   g_RspQryNetMonitorTaskInstAttrsTopic_async;
vector<FRONT_ID>    g_RspQryNetMonitorTaskInstAttrsTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMonitorTaskInstAttrsTopic_Data_map;

uv_mutex_t   g_RtnNetMonitorTaskInstAttrsTopic_mutex;
uv_async_t   g_RtnNetMonitorTaskInstAttrsTopic_async;
vector<FRONT_ID>    g_RtnNetMonitorTaskInstAttrsTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMonitorTaskInstAttrsTopic_Data_map;

uv_mutex_t   g_RspQryFileGeneralOperTopic_mutex;
uv_async_t   g_RspQryFileGeneralOperTopic_async;
vector<FRONT_ID>    g_RspQryFileGeneralOperTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryFileGeneralOperTopic_Data_map;

uv_mutex_t   g_RtnFileGeneralOperTopic_mutex;
uv_async_t   g_RtnFileGeneralOperTopic_async;
vector<FRONT_ID>    g_RtnFileGeneralOperTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnFileGeneralOperTopic_Data_map;

uv_mutex_t   g_RspQryNetBaseLineTopic_mutex;
uv_async_t   g_RspQryNetBaseLineTopic_async;
vector<FRONT_ID>    g_RspQryNetBaseLineTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineTopic_Data_map;

uv_mutex_t   g_RtnNetBaseLineTopic_mutex;
uv_async_t   g_RtnNetBaseLineTopic_async;
vector<FRONT_ID>    g_RtnNetBaseLineTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineTopic_Data_map;

uv_mutex_t   g_RspQryNetBaseLineTaskTopic_mutex;
uv_async_t   g_RspQryNetBaseLineTaskTopic_async;
vector<FRONT_ID>    g_RspQryNetBaseLineTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineTaskTopic_Data_map;

uv_mutex_t   g_RtnNetBaseLineTaskTopic_mutex;
uv_async_t   g_RtnNetBaseLineTaskTopic_async;
vector<FRONT_ID>    g_RtnNetBaseLineTaskTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineTaskTopic_Data_map;

uv_mutex_t   g_RspQryNetBaseLineResultTopic_mutex;
uv_async_t   g_RspQryNetBaseLineResultTopic_async;
vector<FRONT_ID>    g_RspQryNetBaseLineResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetBaseLineResultTopic_Data_map;

uv_mutex_t   g_RtnNetBaseLineResultTopic_mutex;
uv_async_t   g_RtnNetBaseLineResultTopic_async;
vector<FRONT_ID>    g_RtnNetBaseLineResultTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetBaseLineResultTopic_Data_map;

uv_mutex_t   g_RspQryNetPartyLinkStatusInfoTopic_mutex;
uv_async_t   g_RspQryNetPartyLinkStatusInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetPartyLinkStatusInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPartyLinkStatusInfoTopic_Data_map;

uv_mutex_t   g_RtnNetPartyLinkStatusInfoTopic_mutex;
uv_async_t   g_RtnNetPartyLinkStatusInfoTopic_async;
vector<FRONT_ID>    g_RtnNetPartyLinkStatusInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPartyLinkStatusInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetMemberSDHLineInfoTopic_mutex;
uv_async_t   g_RspQryNetMemberSDHLineInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetMemberSDHLineInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetMemberSDHLineInfoTopic_Data_map;

uv_mutex_t   g_RtnNetMemberSDHLineInfoTopic_mutex;
uv_async_t   g_RtnNetMemberSDHLineInfoTopic_async;
vector<FRONT_ID>    g_RtnNetMemberSDHLineInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetMemberSDHLineInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetDDNLinkInfoTopic_mutex;
uv_async_t   g_RspQryNetDDNLinkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetDDNLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetDDNLinkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetDDNLinkInfoTopic_mutex;
uv_async_t   g_RtnNetDDNLinkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetDDNLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetDDNLinkInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetPseudMemberLinkInfoTopic_mutex;
uv_async_t   g_RspQryNetPseudMemberLinkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetPseudMemberLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPseudMemberLinkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetPseudMemberLinkInfoTopic_mutex;
uv_async_t   g_RtnNetPseudMemberLinkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetPseudMemberLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPseudMemberLinkInfoTopic_Data_map;

uv_mutex_t   g_RspQryOuterDeviceInfTopic_mutex;
uv_async_t   g_RspQryOuterDeviceInfTopic_async;
vector<FRONT_ID>    g_RspQryOuterDeviceInfTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryOuterDeviceInfTopic_Data_map;

uv_mutex_t   g_RtnNetOuterDeviceInfTopic_mutex;
uv_async_t   g_RtnNetOuterDeviceInfTopic_async;
vector<FRONT_ID>    g_RtnNetOuterDeviceInfTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetOuterDeviceInfTopic_Data_map;

uv_mutex_t   g_RspQryNetLocalPingResultInfoTopic_mutex;
uv_async_t   g_RspQryNetLocalPingResultInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetLocalPingResultInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetLocalPingResultInfoTopic_Data_map;

uv_mutex_t   g_RtnNetLocalPingResultInfoTopic_mutex;
uv_async_t   g_RtnNetLocalPingResultInfoTopic_async;
vector<FRONT_ID>    g_RtnNetLocalPingResultInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetLocalPingResultInfoTopic_Data_map;

uv_mutex_t   g_RspQryNetRomotePingResultInfoTopic_mutex;
uv_async_t   g_RspQryNetRomotePingResultInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetRomotePingResultInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetRomotePingResultInfoTopic_Data_map;

uv_mutex_t   g_RtnNetRomotePingResultInfoTopic_mutex;
uv_async_t   g_RtnNetRomotePingResultInfoTopic_async;
vector<FRONT_ID>    g_RtnNetRomotePingResultInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetRomotePingResultInfoTopic_Data_map;

uv_mutex_t   g_RtnMonitorTopProcessInfo_mutex;
uv_async_t   g_RtnMonitorTopProcessInfo_async;
vector<FRONT_ID>    g_RtnMonitorTopProcessInfo_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMonitorTopProcessInfo_Data_map;

uv_mutex_t   g_RspQrySysInternalTopologyTopic_mutex;
uv_async_t   g_RspQrySysInternalTopologyTopic_async;
vector<FRONT_ID>    g_RspQrySysInternalTopologyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQrySysInternalTopologyTopic_Data_map;

uv_mutex_t   g_RtnSysInternalTopologyTopic_mutex;
uv_async_t   g_RtnSysInternalTopologyTopic_async;
vector<FRONT_ID>    g_RtnSysInternalTopologyTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnSysInternalTopologyTopic_Data_map;

uv_mutex_t   g_RspQryMemberLinkCostTopic_mutex;
uv_async_t   g_RspQryMemberLinkCostTopic_async;
vector<FRONT_ID>    g_RspQryMemberLinkCostTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryMemberLinkCostTopic_Data_map;

uv_mutex_t   g_RtnMemberLinkCostTopic_mutex;
uv_async_t   g_RtnMemberLinkCostTopic_async;
vector<FRONT_ID>    g_RtnMemberLinkCostTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnMemberLinkCostTopic_Data_map;

uv_mutex_t   g_RspQryNetPartylinkMonthlyRentTopic_mutex;
uv_async_t   g_RspQryNetPartylinkMonthlyRentTopic_async;
vector<FRONT_ID>    g_RspQryNetPartylinkMonthlyRentTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetPartylinkMonthlyRentTopic_Data_map;

uv_mutex_t   g_RtnNetPartylinkMonthlyRentTopic_mutex;
uv_async_t   g_RtnNetPartylinkMonthlyRentTopic_async;
vector<FRONT_ID>    g_RtnNetPartylinkMonthlyRentTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetPartylinkMonthlyRentTopic_Data_map;

uv_mutex_t   g_RspQryNetNonPartyLinkInfoTopic_mutex;
uv_async_t   g_RspQryNetNonPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RspQryNetNonPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RspQryNetNonPartyLinkInfoTopic_Data_map;

uv_mutex_t   g_RtnNetNonPartyLinkInfoTopic_mutex;
uv_async_t   g_RtnNetNonPartyLinkInfoTopic_async;
vector<FRONT_ID>    g_RtnNetNonPartyLinkInfoTopic_IOUser_vec;
map<FRONT_ID, queue<void**> >   g_RtnNetNonPartyLinkInfoTopic_Data_map;

