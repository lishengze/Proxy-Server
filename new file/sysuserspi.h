#ifndef _SYSUSERSPI_H_
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

        virtual void OnRspQryTopCpuInfoTopic(CShfeFtdcRspQryTopCpuInfoField *pRspQryTopCpuInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTopCpuInfoTopic(CShfeFtdcRtnTopCpuInfoField *pRtnTopCpuInfo);

        virtual void OnRspQryTopMemInfoTopic(CShfeFtdcRspQryTopMemInfoField *pRspQryTopMemInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTopMemInfoTopic(CShfeFtdcRtnTopMemInfoField *pRtnTopMemInfo);

        virtual void OnRspQryTopProcessInfoTopic(CShfeFtdcRspQryTopProcessInfoField *pRspQryTopProcessInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTopProcessInfoTopic(CShfeFtdcRtnTopProcessInfoField *pRtnTopProcessInfo);

        virtual void OnRspQryFileSystemInfoTopic(CShfeFtdcRspQryFileSystemInfoField *pRspQryFileSystemInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFileSystemInfoTopic(CShfeFtdcRtnFileSystemInfoField *pRtnFileSystemInfo);

        virtual void OnRspQryNetworkInfoTopic(CShfeFtdcRspQryNetworkInfoField *pRspQryNetworkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetworkInfoTopic(CShfeFtdcRtnNetworkInfoField *pRtnNetworkInfo);

        virtual void OnRspQryClientLoginTopic(CShfeFtdcRspQryClientLoginField *pRspQryClientLogin, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryMonitorObjectTopic(CShfeFtdcRspQryMonitorObjectField *pRspQryMonitorObject, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMonitorObjectTopic(CShfeFtdcRtnMonitorObjectField *pRtnMonitorObject);

        virtual void OnRspQryObjectRationalTopic(CShfeFtdcRspQryObjectRationalField *pRspQryObjectRational, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnObjectRationalTopic(CShfeFtdcRtnObjectRationalField *pRtnObjectRational);

        virtual void OnRspQrySyslogInfoTopic(CShfeFtdcRspQrySyslogInfoField *pRspQrySyslogInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSyslogInfoTopic(CShfeFtdcRtnSyslogInfoField *pRtnSyslogInfo);

        virtual void OnRspQrySubscriberTopic(CShfeFtdcRspQrySubscriberField *pRspQrySubscriber, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryOidRelationTopic(CShfeFtdcRspQryOidRelationField *pRspQryOidRelation, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnOidRelationTopic(CShfeFtdcRtnOidRelationField *pRtnOidRelation);

        virtual void OnRspQryUserInfoTopic(CShfeFtdcRspQryUserInfoField *pRspQryUserInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnUserInfoTopic(CShfeFtdcRtnUserInfoField *pRtnUserInfo);

        virtual void OnRspQryOnlineUserInfoTopic(CShfeFtdcRspQryOnlineUserInfoField *pRspQryOnlineUserInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnOnlineUserInfoTopic(CShfeFtdcRtnOnlineUserInfoField *pRtnOnlineUserInfo);

        virtual void OnRspQryWarningEventTopic(CShfeFtdcRspQryWarningEventField *pRspQryWarningEvent, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnWarningEventTopic(CShfeFtdcRtnWarningEventField *pRtnWarningEvent);

        virtual void OnRspQryCPUUsageTopic(CShfeFtdcRspQryCPUUsageField *pRspQryCPUUsage, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnCPUUsageTopic(CShfeFtdcRtnCPUUsageField *pRtnCPUUsage);

        virtual void OnRspQryMemoryUsageTopic(CShfeFtdcRspQryMemoryUsageField *pRspQryMemoryUsage, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMemoryUsageTopic(CShfeFtdcRtnMemoryUsageField *pRtnMemoryUsage);

        virtual void OnRspQryDiskUsageTopic(CShfeFtdcRspQryDiskUsageField *pRspQryDiskUsage, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnDiskUsageTopic(CShfeFtdcRtnDiskUsageField *pRtnDiskUsage);

        virtual void OnRspQryObjectAttrTopic(CShfeFtdcRspQryObjectAttrField *pRspQryObjectAttr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnObjectAttrTopic(CShfeFtdcRtnObjectAttrField *pRtnObjectAttr);

        virtual void OnRspQryInvalidateOrderTopic(CShfeFtdcRspQryInvalidateOrderField *pRspQryInvalidateOrder, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnInvalidateOrderTopic(CShfeFtdcRtnInvalidateOrderField *pRtnInvalidateOrder);

        virtual void OnRspQryOrderStatusTopic(CShfeFtdcRspQryOrderStatusField *pRspQryOrderStatus, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnOrderStatusTopic(CShfeFtdcRtnOrderStatusField *pRtnOrderStatus);

        virtual void OnRspQryBargainOrderTopic(CShfeFtdcRspQryBargainOrderField *pRspQryBargainOrder, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnBargainOrderTopic(CShfeFtdcRtnBargainOrderField *pRtnBargainOrder);

        virtual void OnRspQryInstPropertyTopic(CShfeFtdcRspQryInstPropertyField *pRspQryInstProperty, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnInstPropertyTopic(CShfeFtdcRtnInstPropertyField *pRtnInstProperty);

        virtual void OnRspQryMarginRateTopic(CShfeFtdcRspQryMarginRateField *pRspQryMarginRate, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMarginRateTopic(CShfeFtdcRtnMarginRateField *pRtnMarginRate);

        virtual void OnRspQryPriceLimitTopic(CShfeFtdcRspQryPriceLimitField *pRspQryPriceLimit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPriceLimitTopic(CShfeFtdcRtnPriceLimitField *pRtnPriceLimit);

        virtual void OnRspQryPartPosiLimitTopic(CShfeFtdcRspQryPartPosiLimitField *pRspQryPartPosiLimit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPartPosiLimitTopic(CShfeFtdcRtnPartPosiLimitField *pRtnPartPosiLimit);

        virtual void OnRspQryClientPosiLimitTopic(CShfeFtdcRspQryClientPosiLimitField *pRspQryClientPosiLimit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnClientPosiLimitTopic(CShfeFtdcRtnClientPosiLimitField *pRtnClientPosiLimit);

        virtual void OnRspQrySpecialPosiLimitTopic(CShfeFtdcRspQrySpecialPosiLimitField *pRspQrySpecialPosiLimit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSpecialPosiLimitTopic(CShfeFtdcRtnSpecialPosiLimitField *pRtnSpecialPosiLimit);

        virtual void OnRspQryTransactionChgTopic(CShfeFtdcRspQryTransactionChgField *pRspQryTransactionChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTransactionChgTopic(CShfeFtdcRtnTransactionChgField *pRtnTransactionChg);

        virtual void OnRspQryClientChgTopic(CShfeFtdcRspQryClientChgField *pRspQryClientChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnClientChgTopic(CShfeFtdcRtnClientChgField *pRtnClientChg);

        virtual void OnRspQryPartClientChgTopic(CShfeFtdcRspQryPartClientChgField *pRspQryPartClientChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPartClientChgTopic(CShfeFtdcRtnPartClientChgField *pRtnPartClientChg);

        virtual void OnRspQryPosiLimitChgTopic(CShfeFtdcRspQryPosiLimitChgField *pRspQryPosiLimitChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPosiLimitChgTopic(CShfeFtdcRtnPosiLimitChgField *pRtnPosiLimitChg);

        virtual void OnRspQryHedgeDetailChgTopic(CShfeFtdcRspQryHedgeDetailChgField *pRspQryHedgeDetailChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnHedgeDetailChgTopic(CShfeFtdcRtnHedgeDetailChgField *pRtnHedgeDetailChg);

        virtual void OnRspQryParticipantChgTopic(CShfeFtdcRspQryParticipantChgField *pRspQryParticipantChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnParticipantChgTopic(CShfeFtdcRtnParticipantChgField *pRtnParticipantChg);

        virtual void OnRspQryMarginRateChgTopic(CShfeFtdcRspQryMarginRateChgField *pRspQryMarginRateChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMarginRateChgTopic(CShfeFtdcRtnMarginRateChgField *pRtnMarginRateChg);

        virtual void OnRspQryUserIpChgTopic(CShfeFtdcRspQryUserIpChgField *pRspQryUserIpChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnUserIpChgTopic(CShfeFtdcRtnUserIpChgField *pRtnUserIpChg);

        virtual void OnRspQryClientPosiLimitChgTopic(CShfeFtdcRspQryClientPosiLimitChgField *pRspQryClientPosiLimitChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnClientPosiLimitChgTopic(CShfeFtdcRtnClientPosiLimitChgField *pRtnClientPosiLimitChg);

        virtual void OnRspQrySpecPosiLimitChgTopic(CShfeFtdcRspQrySpecPosiLimitChgField *pRspQrySpecPosiLimitChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSpecPosiLimitChgTopic(CShfeFtdcRtnSpecPosiLimitChgField *pRtnSpecPosiLimitChg);

        virtual void OnRspQryHistoryObjectAttrTopic(CShfeFtdcRspQryHistoryObjectAttrField *pRspQryHistoryObjectAttr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnHistoryObjectAttrTopic(CShfeFtdcRtnHistoryObjectAttrField *pRtnHistoryObjectAttr);

        virtual void OnRspQryFrontInfoTopic(CShfeFtdcRspQryFrontInfoField *pRspQryFrontInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFrontInfoTopic(CShfeFtdcRtnFrontInfoField *pRtnFrontInfo);

        virtual void OnRspQrySysUserLoginTopic(CShfeFtdcRspQrySysUserLoginField *pRspQrySysUserLogin, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQrySysUserLogoutTopic(CShfeFtdcRspQrySysUserLogoutField *pRspQrySysUserLogout, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQrySysUserPasswordUpdateTopic(CShfeFtdcRspQrySysUserPasswordUpdateField *pRspQrySysUserPasswordUpdate, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQrySysUserRegisterTopic(CShfeFtdcRspQrySysUserRegisterField *pRspQrySysUserRegister, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQrySysUserDeleteTopic(CShfeFtdcRspQrySysUserDeleteField *pRspQrySysUserDelete, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryParticipantInitTopic(CShfeFtdcRspQryParticipantInitField *pRspQryParticipantInit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnParticipantInitTopic(CShfeFtdcRtnParticipantInitField *pRtnParticipantInit);

        virtual void OnRspQryUserInitTopic(CShfeFtdcRspQryUserInitField *pRspQryUserInit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnUserInitTopic(CShfeFtdcRtnUserInitField *pRtnUserInit);

        virtual void OnRspQryClientInitTopic(CShfeFtdcRspQryClientInitField *pRspQryClientInit, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnClientInitTopic(CShfeFtdcRtnClientInitField *pRtnClientInit);

        virtual void OnRspQryTradeLogTopic(CShfeFtdcRspQryTradeLogField *pRspQryTradeLog, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTradeLogTopic(CShfeFtdcRtnTradeLogField *pRtnTradeLog);

        virtual void OnRspQryTradeUserLoginInfoTopic(CShfeFtdcRspQryTradeUserLoginInfoField *pRspQryTradeUserLoginInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTradeUserLoginInfoTopic(CShfeFtdcRtnTradeUserLoginInfoField *pRtnTradeUserLoginInfo);

        virtual void OnRspQryPartTradeTopic(CShfeFtdcRspQryPartTradeField *pRspQryPartTrade, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryTradepeakTopic(CShfeFtdcRspQryTradepeakField *pRspQryTradepeak, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnUpdateSysConfigTopic(CShfeFtdcRtnUpdateSysConfigField *pRtnUpdateSysConfig);

        virtual void OnRtnSysUser(CShfeFtdcRtnSysUserField *pRtnSysUser);

        virtual void OnRtnPriceLimitChgTopic(CShfeFtdcRtnPriceLimitChgField *pRtnPriceLimitChg);

        virtual void OnRspQryHistoryCpuInfoTopic(CShfeFtdcRspQryHistoryCpuInfoField *pRspQryHistoryCpuInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryHistoryMemInfoTopic(CShfeFtdcRspQryHistoryMemInfoField *pRspQryHistoryMemInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryHistoryNetworkInfoTopic(CShfeFtdcRspQryHistoryNetworkInfoField *pRspQryHistoryNetworkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryMonitorOnlineUser(CShfeFtdcRspQryMonitorOnlineUserField *pRspQryMonitorOnlineUser, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryFrontStat(CShfeFtdcRspQryFrontStatField *pRspQryFrontStat, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSysTimeSyncTopic(CShfeFtdcRtnSysTimeSyncField *pRtnSysTimeSync);

        virtual void OnRtnDataCenterChgTopic(CShfeFtdcRtnDataCenterChgField *pRtnDataCenterChg);

        virtual void OnRspQryHistoryTradePeakTopic(CShfeFtdcRspQryHistoryTradePeakField *pRspQryHistoryTradePeak, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnHistoryTradePeakTopic(CShfeFtdcRtnHistoryTradePeakField *pRtnHistoryTradePeak);

        virtual void OnRspQrySyslogEventTopic(CShfeFtdcRspQrySyslogEventField *pRspQrySyslogEvent, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSyslogEventTopic(CShfeFtdcRtnSyslogEventField *pRtnSyslogEvent);

        virtual void OnRspQryTradeDayChangeTopic(CShfeFtdcRspQryTradeDayChangeField *pRspQryTradeDayChange, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryWebAppInfoTopic(CShfeFtdcRspQryWebAppInfoField *pRspQryWebAppInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnWebAppInfoTopic(CShfeFtdcRtnWebAppInfoField *pRtnWebAppInfo);

        virtual void OnRspQryServletInfoTopic(CShfeFtdcRspQryServletInfoField *pRspQryServletInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnServletInfoTopic(CShfeFtdcRtnServletInfoField *pRtnServletInfo);

        virtual void OnRspQryFileInfoTopic(CShfeFtdcRspQryFileInfoField *pRspQryFileInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFileInfoTopic(CShfeFtdcRtnFileInfoField *pRtnFileInfo);

        virtual void OnRspQrySessionInfoTopic(CShfeFtdcRspQrySessionInfoField *pRspQrySessionInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSessionInfoTopic(CShfeFtdcRtnSessionInfoField *pRtnSessionInfo);

        virtual void OnRspQryJDBCInfoTopic(CShfeFtdcRspQryJDBCInfoField *pRspQryJDBCInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnJDBCInfoTopic(CShfeFtdcRtnJDBCInfoField *pRtnJDBCInfo);

        virtual void OnRspQryThreadInfoTopic(CShfeFtdcRspQryThreadInfoField *pRspQryThreadInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnThreadInfoTopic(CShfeFtdcRtnThreadInfoField *pRtnThreadInfo);

        virtual void OnRspQryVMInfoTopic(CShfeFtdcRspQryVMInfoField *pRspQryVMInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnVMInfoTopic(CShfeFtdcRtnVMInfoField *pRtnVMInfo);

        virtual void OnRspQryPropertyInfoTopic(CShfeFtdcRspQryPropertyInfoField *pRspQryPropertyInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPropertyInfoTopic(CShfeFtdcRtnPropertyInfoField *pRtnPropertyInfo);

        virtual void OnRspQryMemPoolInfoTopic(CShfeFtdcRspQryMemPoolInfoField *pRspQryMemPoolInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMemPoolInfoTopic(CShfeFtdcRtnMemPoolInfoField *pRtnMemPoolInfo);

        virtual void OnRspQryFileContentInfoTopic(CShfeFtdcRspQryFileContentInfoField *pRspQryFileContentInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFileContentInfoTopic(CShfeFtdcRtnFileContentInfoField *pRtnFileContentInfo);

        virtual void OnRspQryConnectionInfoTopic(CShfeFtdcRspQryConnectionInfoField *pRspQryConnectionInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnConnectionInfoTopic(CShfeFtdcRtnConnectionInfoField *pRtnConnectionInfo);

        virtual void OnRspQryConnectorInfoTopic(CShfeFtdcRspQryConnectorInfoField *pRspQryConnectorInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnConnectorInfoTopic(CShfeFtdcRtnConnectorInfoField *pRtnConnectorInfo);

        virtual void OnRspQryDBQueryTopic(CShfeFtdcRspQryDBQueryField *pRspQryDBQuery, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnDBQueryTopic(CShfeFtdcRtnDBQueryField *pRtnDBQuery);

        virtual void OnRspQryGeneralFieldTopic(CShfeFtdcSysGeneralFieldField *pSysGeneralField, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnGeneralFieldTopic(CShfeFtdcSysGeneralFieldField *pSysGeneralField);

        virtual void OnRspQryGetFileTopic(CShfeFtdcRspQryGetFileField *pRspQryGetFile, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryWarningQueryTopic(CShfeFtdcRspQryWarningQueryField *pRspQryWarningQuery, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnWarningQueryTopic(CShfeFtdcRtnWarningQueryField *pRtnWarningQuery);

        virtual void OnRtnHostConfig(CShfeFtdcRtnHostConfigField *pRtnHostConfig);

        virtual void OnRspQryGeneralOperateTopic(CShfeFtdcRspQryGeneralOperateField *pRspQryGeneralOperate, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnGeneralOperateTopic(CShfeFtdcRtnGeneralOperateField *pRtnGeneralOperate);

        virtual void OnRspQryNetDeviceLinkedTopic(CShfeFtdcRspQryNetDeviceLinkedField *pRspQryNetDeviceLinked, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDeviceLinkedTopic(CShfeFtdcRtnNetDeviceLinkedField *pRtnNetDeviceLinked);

        virtual void OnRspQryTradeUserLoginStatTopic(CShfeFtdcRspQryTradeUserLoginStatField *pRspQryTradeUserLoginStat, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryTradeFrontOrderRttStatTopic(CShfeFtdcRspQryTradeFrontOrderRttStatField *pRspQryTradeFrontOrderRttStat, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTradeFrontOrderRttStatTopic(CShfeFtdcRtnTradeFrontOrderRttStatField *pRtnTradeFrontOrderRttStat);

        virtual void OnRspQryParticTradeOrderStatesTopic(CShfeFtdcRspQryParticTradeOrderStatesField *pRspQryParticTradeOrderStates, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnParticTradeOrderStatesTopic(CShfeFtdcRtnParticTradeOrderStatesField *pRtnParticTradeOrderStates);

        virtual void OnRspQryRouterInfoTopic(CShfeFtdcRspQryRouterInfoField *pRspQryRouterInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnRouterInfoTopic(CShfeFtdcRtnRouterInfoField *pRtnRouterInfo);

        virtual void OnRspQryDiskIOTopic(CShfeFtdcRspQryDiskIOField *pRspQryDiskIO, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnDiskIOTopic(CShfeFtdcRtnDiskIOField *pRtnDiskIO);

        virtual void OnRspQryStatInfoTopic(CShfeFtdcRspQryStatInfoField *pRspQryStatInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnStatInfoTopic(CShfeFtdcRtnStatInfoField *pRtnStatInfo);

        virtual void OnRspQryTradeOrderRttCutLineTopic(CShfeFtdcRspQryTradeOrderRttCutLineField *pRspQryTradeOrderRttCutLine, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnTradeOrderRttCutLineTopic(CShfeFtdcRtnTradeOrderRttCutLineField *pRtnTradeOrderRttCutLine);

        virtual void OnRspQryClientInfoTopic(CShfeFtdcRspQryClientInfoField *pRspQryClientInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnClientInfoTopic(CShfeFtdcRtnClientInfoField *pRtnClientInfo);

        virtual void OnRspQryEventDescriptionTopic(CShfeFtdcRspQryEventDescriptionField *pRspQryEventDescription, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnEventDescriptionTopic(CShfeFtdcRtnEventDescriptionField *pRtnEventDescription);

        virtual void OnRspQryFrontUniqueIDTopic(CShfeFtdcRspQryFrontUniqueIDField *pRspQryFrontUniqueID, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFrontUniqueIDTopic(CShfeFtdcRtnFrontUniqueIDField *pRtnFrontUniqueID);

        virtual void OnRspQryNetPartyLinkAddrChangeTopic(CShfeFtdcRspQryNetPartyLinkAddrChangeField *pRspQryNetPartyLinkAddrChange, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPartyLinkAddrChangeTopic(CShfeFtdcRtnNetPartyLinkAddrChangeField *pRtnNetPartyLinkAddrChange);

        virtual void OnRspQryNetDelPartyLinkInfoTopic(CShfeFtdcRspQryNetDelPartyLinkInfoField *pRspQryNetDelPartyLinkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDelPartyLinkInfoTopic(CShfeFtdcRtnNetDelPartyLinkInfoField *pRtnNetDelPartyLinkInfo);

        virtual void OnRspQryPerformanceTopTopic(CShfeFtdcRspQryPerformanceTopField *pRspQryPerformanceTop, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnPerformanceTopTopic(CShfeFtdcRtnPerformanceTopField *pRtnPerformanceTop);

        virtual void OnRspQryInstrumentStatusTopic(CShfeFtdcRspQryInstrumentStatusField *pRspQryInstrumentStatus, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnInstrumentStatusTopic(CShfeFtdcRtnInstrumentStatusField *pRtnInstrumentStatus);

        virtual void OnRspQryCurrTradingSegmentAttrTopic(CShfeFtdcRspQryCurrTradingSegmentAttrField *pRspQryCurrTradingSegmentAttr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnCurrTradingSegmentAttrTopic(CShfeFtdcRtnCurrTradingSegmentAttrField *pRtnCurrTradingSegmentAttr);

        virtual void OnRspQryNetAreaTopic(CShfeFtdcRspQryNetAreaField *pRspQryNetArea, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetAreaTopic(CShfeFtdcRtnNetAreaField *pRtnNetArea);

        virtual void OnRspQryNetSubAreaTopic(CShfeFtdcRspQryNetSubAreaField *pRspQryNetSubArea, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetSubAreaTopic(CShfeFtdcRtnNetSubAreaField *pRtnNetSubArea);

        virtual void OnRspQryNetSubAreaIPTopic(CShfeFtdcRspQryNetSubAreaIPField *pRspQryNetSubAreaIP, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetSubAreaIPTopic(CShfeFtdcRtnNetSubAreaIPField *pRtnNetSubAreaIP);

        virtual void OnRspQryNetDeviceTopic(CShfeFtdcRspQryNetDeviceField *pRspQryNetDevice, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDeviceTopic(CShfeFtdcRtnNetDeviceField *pRtnNetDevice);

        virtual void OnRspQryNetDeviceDetectTopic(CShfeFtdcRspQryNetDeviceDetectField *pRspQryNetDeviceDetect, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRspQryNetBuildingTopic(CShfeFtdcRspQryNetBuildingField *pRspQryNetBuilding, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetBuildingTopic(CShfeFtdcRtnNetBuildingField *pRtnNetBuilding);

        virtual void OnRspQryNetRoomTopic(CShfeFtdcRspQryNetRoomField *pRspQryNetRoom, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetRoomTopic(CShfeFtdcRtnNetRoomField *pRtnNetRoom);

        virtual void OnRspQryNetCabinetsTopic(CShfeFtdcRspQryNetCabinetsField *pRspQryNetCabinets, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetCabinetsTopic(CShfeFtdcRtnNetCabinetsField *pRtnNetCabinets);

        virtual void OnRspQryNetOIDTopic(CShfeFtdcRspQryNetOIDField *pRspQryNetOID, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetOIDTopic(CShfeFtdcRtnNetOIDField *pRtnNetOID);

        virtual void OnRspQryNetTimePolicyTopic(CShfeFtdcRspQryNetTimePolicyField *pRspQryNetTimePolicy, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetTimePolicyTopic(CShfeFtdcRtnNetTimePolicyField *pRtnNetTimePolicy);

        virtual void OnRspQryNetGatherTaskTopic(CShfeFtdcRspQryNetGatherTaskField *pRspQryNetGatherTask, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetGatherTaskTopic(CShfeFtdcRtnNetGatherTaskField *pRtnNetGatherTask);

        virtual void OnRspQryNetDeviceChgTopic(CShfeFtdcRspQryNetDeviceChgField *pRspQryNetDeviceChg, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDeviceChgTopic(CShfeFtdcRtnNetDeviceChgField *pRtnNetDeviceChg);

        virtual void OnRspQryNetDeviceTypeTopic(CShfeFtdcRspQryNetDeviceTypeField *pRspQryNetDeviceType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDeviceTypeTopic(CShfeFtdcRtnNetDeviceTypeField *pRtnNetDeviceType);

        virtual void OnRspQryNetDeviceCategoryTopic(CShfeFtdcRspQryNetDeviceCategoryField *pRspQryNetDeviceCategory, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDeviceCategoryTopic(CShfeFtdcRtnNetDeviceCategoryField *pRtnNetDeviceCategory);

        virtual void OnRspQryNetManufactoryTopic(CShfeFtdcRspQryNetManufactoryField *pRspQryNetManufactory, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetManufactoryTopic(CShfeFtdcRtnNetManufactoryField *pRtnNetManufactory);

        virtual void OnRspQryNetCommunityTopic(CShfeFtdcRspQryNetCommunityField *pRspQryNetCommunity, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetCommunityTopic(CShfeFtdcRtnNetCommunityField *pRtnNetCommunity);

        virtual void OnRspQryNetPortTypeTopic(CShfeFtdcRspQryNetPortTypeField *pRspQryNetPortType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPortTypeTopic(CShfeFtdcRtnNetPortTypeField *pRtnNetPortType);

        virtual void OnRspQryNetPartAccessSpotTopic(CShfeFtdcRspQryNetPartAccessSpotField *pRspQryNetPartAccessSpot, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPartAccessSpotTopic(CShfeFtdcRtnNetPartAccessSpotField *pRtnNetPartAccessSpot);

        virtual void OnRspQryNetInterfaceTopic(CShfeFtdcRspQryNetInterfaceField *pRspQryNetInterface, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetInterfaceTopic(CShfeFtdcRtnNetInterfaceField *pRtnNetInterface);

        virtual void OnRspQryNetGeneralOIDTopic(CShfeFtdcRspQryNetGeneralOIDField *pRspQryNetGeneralOID, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetGeneralOIDTopic(CShfeFtdcRtnNetGeneralOIDField *pRtnNetGeneralOID);

        virtual void OnRspQryNetMonitorTypeTopic(CShfeFtdcRspQryNetMonitorTypeField *pRspQryNetMonitorType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTypeTopic(CShfeFtdcRtnNetMonitorTypeField *pRtnNetMonitorType);

        virtual void OnRspQryNetMonitorAttrScopeTopic(CShfeFtdcRspQryNetMonitorAttrScopeField *pRspQryNetMonitorAttrScope, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorAttrScopeTopic(CShfeFtdcRtnNetMonitorAttrScopeField *pRtnNetMonitorAttrScope);

        virtual void OnRspQryNetMonitorAttrTypeTopic(CShfeFtdcRspQryNetMonitorAttrTypeField *pRspQryNetMonitorAttrType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorAttrTypeTopic(CShfeFtdcRtnNetMonitorAttrTypeField *pRtnNetMonitorAttrType);

        virtual void OnRspQryNetMonitorObjectAttrTopic(CShfeFtdcRspQryNetMonitorObjectAttrField *pRspQryNetMonitorObjectAttr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorObjectAttrTopic(CShfeFtdcRtnNetMonitorObjectAttrField *pRtnNetMonitorObjectAttr);

        virtual void OnRspQryNetFuncAreaTopic(CShfeFtdcRspQryNetFuncAreaField *pRspQryNetFuncArea, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetFuncAreaTopic(CShfeFtdcRtnNetFuncAreaField *pRtnNetFuncArea);

        virtual void OnRspQryNetMonitorCommandTypeTopic(CShfeFtdcRspQryNetMonitorCommandTypeField *pRspQryNetMonitorCommandType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorCommandTypeTopic(CShfeFtdcRtnNetMonitorCommandTypeField *pRtnNetMonitorCommandType);

        virtual void OnRspQryNetMonitorActionGroupTopic(CShfeFtdcRspQryNetMonitorActionGroupField *pRspQryNetMonitorActionGroup, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorActionGroupTopic(CShfeFtdcRtnNetMonitorActionGroupField *pRtnNetMonitorActionGroup);

        virtual void OnRspQryNetMonitorDeviceGroupTopic(CShfeFtdcRspQryNetMonitorDeviceGroupField *pRspQryNetMonitorDeviceGroup, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorDeviceGroupTopic(CShfeFtdcRtnNetMonitorDeviceGroupField *pRtnNetMonitorDeviceGroup);

        virtual void OnRspQryNetMonitorTaskInfoTopic(CShfeFtdcRspQryNetMonitorTaskInfoField *pRspQryNetMonitorTaskInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTaskInfoTopic(CShfeFtdcRtnNetMonitorTaskInfoField *pRtnNetMonitorTaskInfo);

        virtual void OnRspQryNetMonitorTaskResultTopic(CShfeFtdcRspQryNetMonitorTaskResultField *pRspQryNetMonitorTaskResult, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTaskResultTopic(CShfeFtdcRtnNetMonitorTaskResultField *pRtnNetMonitorTaskResult);

        virtual void OnRspQryNetMonitorTaskObjectSetTopic(CShfeFtdcRspQryNetMonitorTaskObjectSetField *pRspQryNetMonitorTaskObjectSet, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTaskObjectSetTopic(CShfeFtdcRtnNetMonitorTaskObjectSetField *pRtnNetMonitorTaskObjectSet);

        virtual void OnRspQryNetPartyLinkInfoTopic(CShfeFtdcRspQryNetPartyLinkInfoField *pRspQryNetPartyLinkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPartyLinkInfoTopic(CShfeFtdcRtnNetPartyLinkInfoField *pRtnNetPartyLinkInfo);

        virtual void OnRspQryNetMonitorActionAttrTopic(CShfeFtdcRspQryNetMonitorActionAttrField *pRspQryNetMonitorActionAttr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorActionAttrTopic(CShfeFtdcRtnNetMonitorActionAttrField *pRtnNetMonitorActionAttr);

        virtual void OnRspQryNetModuleTopic(CShfeFtdcRspQryNetModuleField *pRspQryNetModule, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetModuleTopic(CShfeFtdcRtnNetModuleField *pRtnNetModule);

        virtual void OnRspQryNetEventExprTopic(CShfeFtdcRspQryNetEventExprField *pRspQryNetEventExpr, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetEventExprTopic(CShfeFtdcRtnNetEventExprField *pRtnNetEventExpr);

        virtual void OnRspQryNetEventTypeTopic(CShfeFtdcRspQryNetEventTypeField *pRspQryNetEventType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetEventTypeTopic(CShfeFtdcRtnNetEventTypeField *pRtnNetEventType);

        virtual void OnRspQryNetSubEventTypeTopic(CShfeFtdcRspQryNetSubEventTypeField *pRspQryNetSubEventType, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetSubEventTypeTopic(CShfeFtdcRtnNetSubEventTypeField *pRtnNetSubEventType);

        virtual void OnRspQryNetEventLevelTopic(CShfeFtdcRspQryNetEventLevelField *pRspQryNetEventLevel, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetEventLevelTopic(CShfeFtdcRtnNetEventLevelField *pRtnNetEventLevel);

        virtual void OnRspQryNetMonitorTaskStatusResultTopic(CShfeFtdcRspQryNetMonitorTaskStatusResultField *pRspQryNetMonitorTaskStatusResult, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTaskStatusResultTopic(CShfeFtdcRtnNetMonitorTaskStatusResultField *pRtnNetMonitorTaskStatusResult);

        virtual void OnRspQryNetCfgFileTopic(CShfeFtdcRspQryNetCfgFileField *pRspQryNetCfgFile, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetCfgFileTopic(CShfeFtdcRtnNetCfgFileField *pRtnNetCfgFile);

        virtual void OnRspQryNetMonitorDeviceTaskTopic(CShfeFtdcRspQryNetMonitorDeviceTaskField *pRspQryNetMonitorDeviceTask, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorDeviceTaskTopic(CShfeFtdcRtnNetMonitorDeviceTaskField *pRtnNetMonitorDeviceTask);

        virtual void OnRspQryNetMonitorTaskInstAttrsTopic(CShfeFtdcRspQryNetMonitorTaskInstAttrsField *pRspQryNetMonitorTaskInstAttrs, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMonitorTaskInstAttrsTopic(CShfeFtdcRtnNetMonitorTaskInstAttrsField *pRtnNetMonitorTaskInstAttrs);

        virtual void OnRspQryFileGeneralOperTopic(CShfeFtdcRspQryFileGeneralOperField *pRspQryFileGeneralOper, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnFileGeneralOperTopic(CShfeFtdcRtnFileGeneralOperField *pRtnFileGeneralOper);

        virtual void OnRspQryNetBaseLineTopic(CShfeFtdcRspQryNetBaseLineField *pRspQryNetBaseLine, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetBaseLineTopic(CShfeFtdcRtnNetBaseLineField *pRtnNetBaseLine);

        virtual void OnRspQryNetBaseLineTaskTopic(CShfeFtdcRspQryNetBaseLineTaskField *pRspQryNetBaseLineTask, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetBaseLineTaskTopic(CShfeFtdcRtnNetBaseLineTaskField *pRtnNetBaseLineTask);

        virtual void OnRspQryNetBaseLineResultTopic(CShfeFtdcRspQryNetBaseLineResultField *pRspQryNetBaseLineResult, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetBaseLineResultTopic(CShfeFtdcRtnNetBaseLineResultField *pRtnNetBaseLineResult);

        virtual void OnRspQryNetPartyLinkStatusInfoTopic(CShfeFtdcRspQryNetPartyLinkStatusInfoField *pRspQryNetPartyLinkStatusInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPartyLinkStatusInfoTopic(CShfeFtdcRtnNetPartyLinkStatusInfoField *pRtnNetPartyLinkStatusInfo);

        virtual void OnRspQryNetMemberSDHLineInfoTopic(CShfeFtdcRspQryNetMemberSDHLineInfoField *pRspQryNetMemberSDHLineInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetMemberSDHLineInfoTopic(CShfeFtdcRtnNetMemberSDHLineInfoField *pRtnNetMemberSDHLineInfo);

        virtual void OnRspQryNetDDNLinkInfoTopic(CShfeFtdcRspQryNetDDNLinkInfoField *pRspQryNetDDNLinkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetDDNLinkInfoTopic(CShfeFtdcRtnNetDDNLinkInfoField *pRtnNetDDNLinkInfo);

        virtual void OnRspQryNetPseudMemberLinkInfoTopic(CShfeFtdcRspQryNetPseudMemberLinkInfoField *pRspQryNetPseudMemberLinkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPseudMemberLinkInfoTopic(CShfeFtdcRtnNetPseudMemberLinkInfoField *pRtnNetPseudMemberLinkInfo);

        virtual void OnRspQryOuterDeviceInfTopic(CShfeFtdcRspQryOuterDeviceInfField *pRspQryOuterDeviceInf, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetOuterDeviceInfTopic(CShfeFtdcRtnNetOuterDeviceInfField *pRtnNetOuterDeviceInf);

        virtual void OnRspQryNetLocalPingResultInfoTopic(CShfeFtdcRspQryNetLocalPingResultInfoField *pRspQryNetLocalPingResultInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetLocalPingResultInfoTopic(CShfeFtdcRtnNetLocalPingResultInfoField *pRtnNetLocalPingResultInfo);

        virtual void OnRspQryNetRomotePingResultInfoTopic(CShfeFtdcRspQryNetRomotePingResultInfoField *pRspQryNetRomotePingResultInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetRomotePingResultInfoTopic(CShfeFtdcRtnNetRomotePingResultInfoField *pRtnNetRomotePingResultInfo);

        virtual void OnRtnMonitorTopProcessInfo(CShfeFtdcRtnMonitorTopProcessInfoField *pRtnMonitorTopProcessInfo);

        virtual void OnRspQrySysInternalTopologyTopic(CShfeFtdcRspQrySysInternalTopologyField *pRspQrySysInternalTopology, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnSysInternalTopologyTopic(CShfeFtdcRtnSysInternalTopologyField *pRtnSysInternalTopology);

        virtual void OnRspQryMemberLinkCostTopic(CShfeFtdcRspQryMemberLinkCostField *pRspQryMemberLinkCost, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnMemberLinkCostTopic(CShfeFtdcRtnMemberLinkCostField *pRtnMemberLinkCost);

        virtual void OnRspQryNetPartylinkMonthlyRentTopic(CShfeFtdcRspQryNetPartylinkMonthlyRentField *pRspQryNetPartylinkMonthlyRent, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetPartylinkMonthlyRentTopic(CShfeFtdcRtnNetPartylinkMonthlyRentField *pRtnNetPartylinkMonthlyRent);

        virtual void OnRspQryNetNonPartyLinkInfoTopic(CShfeFtdcRspQryNetNonPartyLinkInfoField *pRspQryNetNonPartyLinkInfo, CShfeFtdcRspInfoField *pRspInfo, int nRequestID, bool bIsLast);

        virtual void OnRtnNetNonPartyLinkInfoTopic(CShfeFtdcRtnNetNonPartyLinkInfoField *pRtnNetNonPartyLinkInfo);

}; 

#endif