#ifndef _V8_TRANSFORM_FUNC_H_
#define _V8_TRANSFORM_FUNC_H_
#include <nan.h>
 
void   OnFrontConnected (uv_async_t *handle);

void   OnFrontDisconnected (uv_async_t *handle);

void   OnHeartBeatWarning (uv_async_t *handle);
             
void   OnRspQryTopCpuInfoTopic (uv_async_t *handle);

void   OnRtnTopCpuInfoTopic (uv_async_t *handle);

void   OnRspQryTopMemInfoTopic (uv_async_t *handle);

void   OnRtnTopMemInfoTopic (uv_async_t *handle);

void   OnRspQryTopProcessInfoTopic (uv_async_t *handle);

void   OnRtnTopProcessInfoTopic (uv_async_t *handle);

void   OnRspQryFileSystemInfoTopic (uv_async_t *handle);

void   OnRtnFileSystemInfoTopic (uv_async_t *handle);

void   OnRspQryNetworkInfoTopic (uv_async_t *handle);

void   OnRtnNetworkInfoTopic (uv_async_t *handle);

void   OnRspQryClientLoginTopic (uv_async_t *handle);

void   OnRspQryMonitorObjectTopic (uv_async_t *handle);

void   OnRtnMonitorObjectTopic (uv_async_t *handle);

void   OnRspQryObjectRationalTopic (uv_async_t *handle);

void   OnRtnObjectRationalTopic (uv_async_t *handle);

void   OnRspQrySyslogInfoTopic (uv_async_t *handle);

void   OnRtnSyslogInfoTopic (uv_async_t *handle);

void   OnRspQrySubscriberTopic (uv_async_t *handle);

void   OnRspQryOidRelationTopic (uv_async_t *handle);

void   OnRtnOidRelationTopic (uv_async_t *handle);

void   OnRspQryUserInfoTopic (uv_async_t *handle);

void   OnRtnUserInfoTopic (uv_async_t *handle);

void   OnRspQryOnlineUserInfoTopic (uv_async_t *handle);

void   OnRtnOnlineUserInfoTopic (uv_async_t *handle);

void   OnRspQryWarningEventTopic (uv_async_t *handle);

void   OnRtnWarningEventTopic (uv_async_t *handle);

void   OnRspQryCPUUsageTopic (uv_async_t *handle);

void   OnRtnCPUUsageTopic (uv_async_t *handle);

void   OnRspQryMemoryUsageTopic (uv_async_t *handle);

void   OnRtnMemoryUsageTopic (uv_async_t *handle);

void   OnRspQryDiskUsageTopic (uv_async_t *handle);

void   OnRtnDiskUsageTopic (uv_async_t *handle);

void   OnRspQryObjectAttrTopic (uv_async_t *handle);

void   OnRtnObjectAttrTopic (uv_async_t *handle);

void   OnRspQryInvalidateOrderTopic (uv_async_t *handle);

void   OnRtnInvalidateOrderTopic (uv_async_t *handle);

void   OnRspQryOrderStatusTopic (uv_async_t *handle);

void   OnRtnOrderStatusTopic (uv_async_t *handle);

void   OnRspQryBargainOrderTopic (uv_async_t *handle);

void   OnRtnBargainOrderTopic (uv_async_t *handle);

void   OnRspQryInstPropertyTopic (uv_async_t *handle);

void   OnRtnInstPropertyTopic (uv_async_t *handle);

void   OnRspQryMarginRateTopic (uv_async_t *handle);

void   OnRtnMarginRateTopic (uv_async_t *handle);

void   OnRspQryPriceLimitTopic (uv_async_t *handle);

void   OnRtnPriceLimitTopic (uv_async_t *handle);

void   OnRspQryPartPosiLimitTopic (uv_async_t *handle);

void   OnRtnPartPosiLimitTopic (uv_async_t *handle);

void   OnRspQryClientPosiLimitTopic (uv_async_t *handle);

void   OnRtnClientPosiLimitTopic (uv_async_t *handle);

void   OnRspQrySpecialPosiLimitTopic (uv_async_t *handle);

void   OnRtnSpecialPosiLimitTopic (uv_async_t *handle);

void   OnRspQryTransactionChgTopic (uv_async_t *handle);

void   OnRtnTransactionChgTopic (uv_async_t *handle);

void   OnRspQryClientChgTopic (uv_async_t *handle);

void   OnRtnClientChgTopic (uv_async_t *handle);

void   OnRspQryPartClientChgTopic (uv_async_t *handle);

void   OnRtnPartClientChgTopic (uv_async_t *handle);

void   OnRspQryPosiLimitChgTopic (uv_async_t *handle);

void   OnRtnPosiLimitChgTopic (uv_async_t *handle);

void   OnRspQryHedgeDetailChgTopic (uv_async_t *handle);

void   OnRtnHedgeDetailChgTopic (uv_async_t *handle);

void   OnRspQryParticipantChgTopic (uv_async_t *handle);

void   OnRtnParticipantChgTopic (uv_async_t *handle);

void   OnRspQryMarginRateChgTopic (uv_async_t *handle);

void   OnRtnMarginRateChgTopic (uv_async_t *handle);

void   OnRspQryUserIpChgTopic (uv_async_t *handle);

void   OnRtnUserIpChgTopic (uv_async_t *handle);

void   OnRspQryClientPosiLimitChgTopic (uv_async_t *handle);

void   OnRtnClientPosiLimitChgTopic (uv_async_t *handle);

void   OnRspQrySpecPosiLimitChgTopic (uv_async_t *handle);

void   OnRtnSpecPosiLimitChgTopic (uv_async_t *handle);

void   OnRspQryHistoryObjectAttrTopic (uv_async_t *handle);

void   OnRtnHistoryObjectAttrTopic (uv_async_t *handle);

void   OnRspQryFrontInfoTopic (uv_async_t *handle);

void   OnRtnFrontInfoTopic (uv_async_t *handle);

void   OnRspQrySysUserLoginTopic (uv_async_t *handle);

void   OnRspQrySysUserLogoutTopic (uv_async_t *handle);

void   OnRspQrySysUserPasswordUpdateTopic (uv_async_t *handle);

void   OnRspQrySysUserRegisterTopic (uv_async_t *handle);

void   OnRspQrySysUserDeleteTopic (uv_async_t *handle);

void   OnRspQryParticipantInitTopic (uv_async_t *handle);

void   OnRtnParticipantInitTopic (uv_async_t *handle);

void   OnRspQryUserInitTopic (uv_async_t *handle);

void   OnRtnUserInitTopic (uv_async_t *handle);

void   OnRspQryClientInitTopic (uv_async_t *handle);

void   OnRtnClientInitTopic (uv_async_t *handle);

void   OnRspQryTradeLogTopic (uv_async_t *handle);

void   OnRtnTradeLogTopic (uv_async_t *handle);

void   OnRspQryTradeUserLoginInfoTopic (uv_async_t *handle);

void   OnRtnTradeUserLoginInfoTopic (uv_async_t *handle);

void   OnRspQryPartTradeTopic (uv_async_t *handle);

void   OnRspQryTradepeakTopic (uv_async_t *handle);

void   OnRtnUpdateSysConfigTopic (uv_async_t *handle);

void   OnRtnSysUser (uv_async_t *handle);

void   OnRtnPriceLimitChgTopic (uv_async_t *handle);

void   OnRspQryHistoryCpuInfoTopic (uv_async_t *handle);

void   OnRspQryHistoryMemInfoTopic (uv_async_t *handle);

void   OnRspQryHistoryNetworkInfoTopic (uv_async_t *handle);

void   OnRspQryMonitorOnlineUser (uv_async_t *handle);

void   OnRspQryFrontStat (uv_async_t *handle);

void   OnRtnSysTimeSyncTopic (uv_async_t *handle);

void   OnRtnDataCenterChgTopic (uv_async_t *handle);

void   OnRspQryHistoryTradePeakTopic (uv_async_t *handle);

void   OnRtnHistoryTradePeakTopic (uv_async_t *handle);

void   OnRspQrySyslogEventTopic (uv_async_t *handle);

void   OnRtnSyslogEventTopic (uv_async_t *handle);

void   OnRspQryTradeDayChangeTopic (uv_async_t *handle);

void   OnRspQryWebAppInfoTopic (uv_async_t *handle);

void   OnRtnWebAppInfoTopic (uv_async_t *handle);

void   OnRspQryServletInfoTopic (uv_async_t *handle);

void   OnRtnServletInfoTopic (uv_async_t *handle);

void   OnRspQryFileInfoTopic (uv_async_t *handle);

void   OnRtnFileInfoTopic (uv_async_t *handle);

void   OnRspQrySessionInfoTopic (uv_async_t *handle);

void   OnRtnSessionInfoTopic (uv_async_t *handle);

void   OnRspQryJDBCInfoTopic (uv_async_t *handle);

void   OnRtnJDBCInfoTopic (uv_async_t *handle);

void   OnRspQryThreadInfoTopic (uv_async_t *handle);

void   OnRtnThreadInfoTopic (uv_async_t *handle);

void   OnRspQryVMInfoTopic (uv_async_t *handle);

void   OnRtnVMInfoTopic (uv_async_t *handle);

void   OnRspQryPropertyInfoTopic (uv_async_t *handle);

void   OnRtnPropertyInfoTopic (uv_async_t *handle);

void   OnRspQryMemPoolInfoTopic (uv_async_t *handle);

void   OnRtnMemPoolInfoTopic (uv_async_t *handle);

void   OnRspQryFileContentInfoTopic (uv_async_t *handle);

void   OnRtnFileContentInfoTopic (uv_async_t *handle);

void   OnRspQryConnectionInfoTopic (uv_async_t *handle);

void   OnRtnConnectionInfoTopic (uv_async_t *handle);

void   OnRspQryConnectorInfoTopic (uv_async_t *handle);

void   OnRtnConnectorInfoTopic (uv_async_t *handle);

void   OnRspQryDBQueryTopic (uv_async_t *handle);

void   OnRtnDBQueryTopic (uv_async_t *handle);

void   OnRspQryGeneralFieldTopic (uv_async_t *handle);

void   OnRtnGeneralFieldTopic (uv_async_t *handle);

void   OnRspQryGetFileTopic (uv_async_t *handle);

void   OnRspQryWarningQueryTopic (uv_async_t *handle);

void   OnRtnWarningQueryTopic (uv_async_t *handle);

void   OnRtnHostConfig (uv_async_t *handle);

void   OnRspQryGeneralOperateTopic (uv_async_t *handle);

void   OnRtnGeneralOperateTopic (uv_async_t *handle);

void   OnRspQryNetDeviceLinkedTopic (uv_async_t *handle);

void   OnRtnNetDeviceLinkedTopic (uv_async_t *handle);

void   OnRspQryTradeUserLoginStatTopic (uv_async_t *handle);

void   OnRspQryTradeFrontOrderRttStatTopic (uv_async_t *handle);

void   OnRtnTradeFrontOrderRttStatTopic (uv_async_t *handle);

void   OnRspQryParticTradeOrderStatesTopic (uv_async_t *handle);

void   OnRtnParticTradeOrderStatesTopic (uv_async_t *handle);

void   OnRspQryRouterInfoTopic (uv_async_t *handle);

void   OnRtnRouterInfoTopic (uv_async_t *handle);

void   OnRspQryDiskIOTopic (uv_async_t *handle);

void   OnRtnDiskIOTopic (uv_async_t *handle);

void   OnRspQryStatInfoTopic (uv_async_t *handle);

void   OnRtnStatInfoTopic (uv_async_t *handle);

void   OnRspQryTradeOrderRttCutLineTopic (uv_async_t *handle);

void   OnRtnTradeOrderRttCutLineTopic (uv_async_t *handle);

void   OnRspQryClientInfoTopic (uv_async_t *handle);

void   OnRtnClientInfoTopic (uv_async_t *handle);

void   OnRspQryEventDescriptionTopic (uv_async_t *handle);

void   OnRtnEventDescriptionTopic (uv_async_t *handle);

void   OnRspQryFrontUniqueIDTopic (uv_async_t *handle);

void   OnRtnFrontUniqueIDTopic (uv_async_t *handle);

void   OnRspQryNetPartyLinkAddrChangeTopic (uv_async_t *handle);

void   OnRtnNetPartyLinkAddrChangeTopic (uv_async_t *handle);

void   OnRspQryNetDelPartyLinkInfoTopic (uv_async_t *handle);

void   OnRtnNetDelPartyLinkInfoTopic (uv_async_t *handle);

void   OnRspQryPerformanceTopTopic (uv_async_t *handle);

void   OnRtnPerformanceTopTopic (uv_async_t *handle);

void   OnRspQryInstrumentStatusTopic (uv_async_t *handle);

void   OnRtnInstrumentStatusTopic (uv_async_t *handle);

void   OnRspQryCurrTradingSegmentAttrTopic (uv_async_t *handle);

void   OnRtnCurrTradingSegmentAttrTopic (uv_async_t *handle);

void   OnRspQryNetAreaTopic (uv_async_t *handle);

void   OnRtnNetAreaTopic (uv_async_t *handle);

void   OnRspQryNetSubAreaTopic (uv_async_t *handle);

void   OnRtnNetSubAreaTopic (uv_async_t *handle);

void   OnRspQryNetSubAreaIPTopic (uv_async_t *handle);

void   OnRtnNetSubAreaIPTopic (uv_async_t *handle);

void   OnRspQryNetDeviceTopic (uv_async_t *handle);

void   OnRtnNetDeviceTopic (uv_async_t *handle);

void   OnRspQryNetDeviceDetectTopic (uv_async_t *handle);

void   OnRspQryNetBuildingTopic (uv_async_t *handle);

void   OnRtnNetBuildingTopic (uv_async_t *handle);

void   OnRspQryNetRoomTopic (uv_async_t *handle);

void   OnRtnNetRoomTopic (uv_async_t *handle);

void   OnRspQryNetCabinetsTopic (uv_async_t *handle);

void   OnRtnNetCabinetsTopic (uv_async_t *handle);

void   OnRspQryNetOIDTopic (uv_async_t *handle);

void   OnRtnNetOIDTopic (uv_async_t *handle);

void   OnRspQryNetTimePolicyTopic (uv_async_t *handle);

void   OnRtnNetTimePolicyTopic (uv_async_t *handle);

void   OnRspQryNetGatherTaskTopic (uv_async_t *handle);

void   OnRtnNetGatherTaskTopic (uv_async_t *handle);

void   OnRspQryNetDeviceChgTopic (uv_async_t *handle);

void   OnRtnNetDeviceChgTopic (uv_async_t *handle);

void   OnRspQryNetDeviceTypeTopic (uv_async_t *handle);

void   OnRtnNetDeviceTypeTopic (uv_async_t *handle);

void   OnRspQryNetDeviceCategoryTopic (uv_async_t *handle);

void   OnRtnNetDeviceCategoryTopic (uv_async_t *handle);

void   OnRspQryNetManufactoryTopic (uv_async_t *handle);

void   OnRtnNetManufactoryTopic (uv_async_t *handle);

void   OnRspQryNetCommunityTopic (uv_async_t *handle);

void   OnRtnNetCommunityTopic (uv_async_t *handle);

void   OnRspQryNetPortTypeTopic (uv_async_t *handle);

void   OnRtnNetPortTypeTopic (uv_async_t *handle);

void   OnRspQryNetPartAccessSpotTopic (uv_async_t *handle);

void   OnRtnNetPartAccessSpotTopic (uv_async_t *handle);

void   OnRspQryNetInterfaceTopic (uv_async_t *handle);

void   OnRtnNetInterfaceTopic (uv_async_t *handle);

void   OnRspQryNetGeneralOIDTopic (uv_async_t *handle);

void   OnRtnNetGeneralOIDTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTypeTopic (uv_async_t *handle);

void   OnRtnNetMonitorTypeTopic (uv_async_t *handle);

void   OnRspQryNetMonitorAttrScopeTopic (uv_async_t *handle);

void   OnRtnNetMonitorAttrScopeTopic (uv_async_t *handle);

void   OnRspQryNetMonitorAttrTypeTopic (uv_async_t *handle);

void   OnRtnNetMonitorAttrTypeTopic (uv_async_t *handle);

void   OnRspQryNetMonitorObjectAttrTopic (uv_async_t *handle);

void   OnRtnNetMonitorObjectAttrTopic (uv_async_t *handle);

void   OnRspQryNetFuncAreaTopic (uv_async_t *handle);

void   OnRtnNetFuncAreaTopic (uv_async_t *handle);

void   OnRspQryNetMonitorCommandTypeTopic (uv_async_t *handle);

void   OnRtnNetMonitorCommandTypeTopic (uv_async_t *handle);

void   OnRspQryNetMonitorActionGroupTopic (uv_async_t *handle);

void   OnRtnNetMonitorActionGroupTopic (uv_async_t *handle);

void   OnRspQryNetMonitorDeviceGroupTopic (uv_async_t *handle);

void   OnRtnNetMonitorDeviceGroupTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTaskInfoTopic (uv_async_t *handle);

void   OnRtnNetMonitorTaskInfoTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTaskResultTopic (uv_async_t *handle);

void   OnRtnNetMonitorTaskResultTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTaskObjectSetTopic (uv_async_t *handle);

void   OnRtnNetMonitorTaskObjectSetTopic (uv_async_t *handle);

void   OnRspQryNetPartyLinkInfoTopic (uv_async_t *handle);

void   OnRtnNetPartyLinkInfoTopic (uv_async_t *handle);

void   OnRspQryNetMonitorActionAttrTopic (uv_async_t *handle);

void   OnRtnNetMonitorActionAttrTopic (uv_async_t *handle);

void   OnRspQryNetModuleTopic (uv_async_t *handle);

void   OnRtnNetModuleTopic (uv_async_t *handle);

void   OnRspQryNetEventExprTopic (uv_async_t *handle);

void   OnRtnNetEventExprTopic (uv_async_t *handle);

void   OnRspQryNetEventTypeTopic (uv_async_t *handle);

void   OnRtnNetEventTypeTopic (uv_async_t *handle);

void   OnRspQryNetSubEventTypeTopic (uv_async_t *handle);

void   OnRtnNetSubEventTypeTopic (uv_async_t *handle);

void   OnRspQryNetEventLevelTopic (uv_async_t *handle);

void   OnRtnNetEventLevelTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTaskStatusResultTopic (uv_async_t *handle);

void   OnRtnNetMonitorTaskStatusResultTopic (uv_async_t *handle);

void   OnRspQryNetCfgFileTopic (uv_async_t *handle);

void   OnRtnNetCfgFileTopic (uv_async_t *handle);

void   OnRspQryNetMonitorDeviceTaskTopic (uv_async_t *handle);

void   OnRtnNetMonitorDeviceTaskTopic (uv_async_t *handle);

void   OnRspQryNetMonitorTaskInstAttrsTopic (uv_async_t *handle);

void   OnRtnNetMonitorTaskInstAttrsTopic (uv_async_t *handle);

void   OnRspQryFileGeneralOperTopic (uv_async_t *handle);

void   OnRtnFileGeneralOperTopic (uv_async_t *handle);

void   OnRspQryNetBaseLineTopic (uv_async_t *handle);

void   OnRtnNetBaseLineTopic (uv_async_t *handle);

void   OnRspQryNetBaseLineTaskTopic (uv_async_t *handle);

void   OnRtnNetBaseLineTaskTopic (uv_async_t *handle);

void   OnRspQryNetBaseLineResultTopic (uv_async_t *handle);

void   OnRtnNetBaseLineResultTopic (uv_async_t *handle);

void   OnRspQryNetPartyLinkStatusInfoTopic (uv_async_t *handle);

void   OnRtnNetPartyLinkStatusInfoTopic (uv_async_t *handle);

void   OnRspQryNetMemberSDHLineInfoTopic (uv_async_t *handle);

void   OnRtnNetMemberSDHLineInfoTopic (uv_async_t *handle);

void   OnRspQryNetDDNLinkInfoTopic (uv_async_t *handle);

void   OnRtnNetDDNLinkInfoTopic (uv_async_t *handle);

void   OnRspQryNetPseudMemberLinkInfoTopic (uv_async_t *handle);

void   OnRtnNetPseudMemberLinkInfoTopic (uv_async_t *handle);

void   OnRspQryOuterDeviceInfTopic (uv_async_t *handle);

void   OnRtnNetOuterDeviceInfTopic (uv_async_t *handle);

void   OnRspQryNetLocalPingResultInfoTopic (uv_async_t *handle);

void   OnRtnNetLocalPingResultInfoTopic (uv_async_t *handle);

void   OnRspQryNetRomotePingResultInfoTopic (uv_async_t *handle);

void   OnRtnNetRomotePingResultInfoTopic (uv_async_t *handle);

void   OnRtnMonitorTopProcessInfo (uv_async_t *handle);

void   OnRspQrySysInternalTopologyTopic (uv_async_t *handle);

void   OnRtnSysInternalTopologyTopic (uv_async_t *handle);

void   OnRspQryMemberLinkCostTopic (uv_async_t *handle);

void   OnRtnMemberLinkCostTopic (uv_async_t *handle);

void   OnRspQryNetPartylinkMonthlyRentTopic (uv_async_t *handle);

void   OnRtnNetPartylinkMonthlyRentTopic (uv_async_t *handle);

void   OnRspQryNetNonPartyLinkInfoTopic (uv_async_t *handle);

void   OnRtnNetNonPartyLinkInfoTopic (uv_async_t *handle);

#endif

