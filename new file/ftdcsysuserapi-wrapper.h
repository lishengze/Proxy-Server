#ifndef FTDCSYSUSERAPI_WRAPPER_H
#define FTDCSYSUSERAPI_WRAPPER_H

#include <nan.h>
#include "FtdcSysUserApi.h"
#include "sysuserspi.h"

class FtdcSysUserApi_Wrapper : public Nan::ObjectWrap{
 public:
     static void InitExports(v8::Handle<v8::Object> exports);

 public:
     explicit FtdcSysUserApi_Wrapper(const char *pszFlowPath);
     ~FtdcSysUserApi_Wrapper();
  
     static Nan::Persistent<v8::Function> constructor;
     CShfeFtdcSysUserApi* m_userApi;
     SysUserSpi* m_spi;

     static NAN_METHOD(New);
     static NAN_METHOD(Release);
     static NAN_METHOD(Init);
     static NAN_METHOD(Join);

     static NAN_METHOD(ReqUserLogin);
     static NAN_METHOD(ReqQrySysUserLoginTopic);
     static NAN_METHOD(GetTradingDay);
     static NAN_METHOD(RegisterFront);
     static NAN_METHOD(RegisterSpi);
     static NAN_METHOD(SubscribeMarketDataTopic);
     static NAN_METHOD(SubscribePartAccount);

     static NAN_METHOD(ReqQryTopMemInfoTopic);
     static NAN_METHOD(ReqQryTopProcessInfoTopic);
     static NAN_METHOD(ReqQryFileSystemInfoTopic);
     static NAN_METHOD(ReqQryNetworkInfoTopic);
     static NAN_METHOD(ReqQryMonitorObjectTopic);
     static NAN_METHOD(ReqQryObjectRationalTopic);
     static NAN_METHOD(ReqQrySyslogInfoTopic);
     static NAN_METHOD(ReqQrySubscriberTopic);
     static NAN_METHOD(ReqQryOidRelationTopic);
     static NAN_METHOD(ReqQryUserInfoTopic);
     static NAN_METHOD(ReqQryOnlineUserInfoTopic);
     static NAN_METHOD(ReqQryWarningEventTopic);
     static NAN_METHOD(ReqQryObjectAttrTopic);
     static NAN_METHOD(ReqQryInvalidateOrderTopic);
     static NAN_METHOD(ReqQryOrderStatusTopic);
     static NAN_METHOD(ReqQryBargainOrderTopic);
     static NAN_METHOD(ReqQryInstPropertyTopic);
     static NAN_METHOD(ReqQryMarginRateTopic);
     static NAN_METHOD(ReqQryPriceLimitTopic);
     static NAN_METHOD(ReqQryPartPosiLimitTopic);
     static NAN_METHOD(ReqQryClientPosiLimitTopic);
     static NAN_METHOD(ReqQrySpecialPosiLimitTopic);
     static NAN_METHOD(ReqQryTransactionChgTopic);
     static NAN_METHOD(ReqQryClientChgTopic);
     static NAN_METHOD(ReqQryPartClientChgTopic);
     static NAN_METHOD(ReqQryPosiLimitChgTopic);
     static NAN_METHOD(ReqQryHedgeDetailChgTopic);
     static NAN_METHOD(ReqQryParticipantChgTopic);
     static NAN_METHOD(ReqQryMarginRateChgTopic);
     static NAN_METHOD(ReqQryUserIpChgTopic);
     static NAN_METHOD(ReqQryClientPosiLimitChgTopic);
     static NAN_METHOD(ReqQrySpecPosiLimitChgTopic);
     static NAN_METHOD(ReqQryHistoryObjectAttrTopic);
     static NAN_METHOD(ReqQryFrontInfoTopic);
     static NAN_METHOD(ReqQrySysUserLogoutTopic);
     static NAN_METHOD(ReqQrySysUserPasswordUpdateTopic);
     static NAN_METHOD(ReqQrySysUserRegisterTopic);
     static NAN_METHOD(ReqQrySysUserDeleteTopic);
     static NAN_METHOD(ReqQryTradeLogTopic);
     static NAN_METHOD(ReqQryWarningEventUpdateTopic);
     static NAN_METHOD(ReqQryTradeUserLoginInfoTopic);
     static NAN_METHOD(ReqQryPartTradeTopic);
     static NAN_METHOD(ReqQryTradepeakTopic);
     static NAN_METHOD(ReqQryParticipantInitTopic);
     static NAN_METHOD(ReqQryUserInitTopic);
     static NAN_METHOD(ReqQryHistoryCpuInfoTopic);
     static NAN_METHOD(ReqQryHistoryMemInfoTopic);
     static NAN_METHOD(ReqQryHistoryNetworkInfoTopic);
     static NAN_METHOD(ReqQryHistoryTradePeakTopic);
     static NAN_METHOD(ReqQrySyslogEventTopic);
     static NAN_METHOD(ReqQrySyslogEventSubcriberTopic);
     static NAN_METHOD(ReqQryTomcatInfoTopic);
     static NAN_METHOD(ReqQryDBQueryTopic);
     static NAN_METHOD(ReqQryGetFileTopic);
     static NAN_METHOD(ReqQrySyslogEventUpdateTopic);
     static NAN_METHOD(ReqQryWarningQueryTopic);
     static NAN_METHOD(ReqQryWebVisitTopic);
     static NAN_METHOD(ReqQryGeneralOperateTopic);
     static NAN_METHOD(ReqQryNetDeviceLinkedTopic);
     static NAN_METHOD(ReqQryTradeUserLoginStatTopic);
     static NAN_METHOD(ReqQryTradeFrontOrderRttStatTopic);
     static NAN_METHOD(ReqQryParticTradeOrderStatesTopic);
     static NAN_METHOD(ReqQryRouterInfoTopic);
     static NAN_METHOD(ReqQryDiskIOTopic);
     static NAN_METHOD(ReqQryStatInfoTopic);
     static NAN_METHOD(ReqQryTradeOrderRttCutLineTopic);
     static NAN_METHOD(ReqQryClientInfoTopic);
     static NAN_METHOD(ReqQryEventDescriptionTopic);
     static NAN_METHOD(ReqQryFrontUniqueIDTopic);
     static NAN_METHOD(ReqQryNetPartyLinkAddrChangeTopic);
     static NAN_METHOD(ReqQryNetDelPartyLinkInfoTopic);
     static NAN_METHOD(ReqQryPerformanceTopTopic);
     static NAN_METHOD(ReqQryInstrumentStatusTopic);
     static NAN_METHOD(ReqQryCurrTradingSegmentAttrTopic);
     static NAN_METHOD(ReqQryRealTimeNetObjectAttrTopic);
     static NAN_METHOD(ReqQryNetAreaTopic);
     static NAN_METHOD(ReqQryNetSubAreaTopic);
     static NAN_METHOD(ReqQryNetSubAreaIPTopic);
     static NAN_METHOD(ReqQryNetDeviceDetectTopic);
     static NAN_METHOD(ReqQryNetDeviceRequestTopic);
     static NAN_METHOD(ReqQryNetBuildingTopic);
     static NAN_METHOD(ReqQryNetRoomTopic);
     static NAN_METHOD(ReqQryNetCabinetsTopic);
     static NAN_METHOD(ReqQryNetOIDTopic);
     static NAN_METHOD(ReqQryNetTimePolicyTopic);
     static NAN_METHOD(ReqQryNetGatherTaskTopic);
     static NAN_METHOD(ReqQryNetDeviceChgTopic);
     static NAN_METHOD(ReqQryNetDeviceTypeTopic);
     static NAN_METHOD(ReqQryNetDeviceCategoryTopic);
     static NAN_METHOD(ReqQryNetManufactoryTopic);
     static NAN_METHOD(ReqQryNetCommunityTopic);
     static NAN_METHOD(ReqQryNetPortTypeTopic);
     static NAN_METHOD(ReqQryNetPartAccessSpotTopic);
     static NAN_METHOD(ReqQryNetInterfaceTopic);
     static NAN_METHOD(ReqQryNetGeneralOIDTopic);
     static NAN_METHOD(ReqQryNetMonitorTypeTopic);
     static NAN_METHOD(ReqQryNetMonitorAttrScopeTopic);
     static NAN_METHOD(ReqQryNetMonitorAttrTypeTopic);
     static NAN_METHOD(ReqQryNetMonitorObjectAttrTopic);
     static NAN_METHOD(ReqQryNetMonitorDeviceGroupTopic);
     static NAN_METHOD(ReqQryNetMonitorTaskInfoTopic);
     static NAN_METHOD(ReqQryNetMonitorTaskResultTopic);
     static NAN_METHOD(ReqQryNetMonitorTaskObjectSetTopic);
     static NAN_METHOD(ReqQryNetPartyLinkInfoTopic);
     static NAN_METHOD(ReqQryNetMonitorActionAttrTopic);
     static NAN_METHOD(ReqQryNetModuleTopic);
     static NAN_METHOD(ReqQryNetMonitorTaskStatusResultTopic);
     static NAN_METHOD(ReqQryNetCfgFileTopic);
     static NAN_METHOD(ReqQryNetMonitorDeviceTaskTopic);
     static NAN_METHOD(ReqQryFileGeneralOperTopic);
     static NAN_METHOD(ReqQryNetBaseLineTopic);
     static NAN_METHOD(ReqQryNetBaseLineResultTopic);
     static NAN_METHOD(ReqQryNetPartyLinkStatusInfoTopic);
     static NAN_METHOD(ReqQryNetLocalPingResultInfoTopic);
     static NAN_METHOD(ReqQryNetRomotePingResultInfoTopic);
     static NAN_METHOD(ReqQryNetNonPartyLinkInfoTopic);
};

#endif