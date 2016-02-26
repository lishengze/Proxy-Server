var EVENTS = require('./events.json');
var Spi = function(){
    
    this.user = {};    
    
    this.OnFrontConnected = function () {
    	  var outputStr = "\n***********  Communication FrontConnected! ***********\n";
    	  console.log(outputStr);
        this.user.socket.emit(EVENTS.FrontConnected, {});        
    }
    
    this.OnFrontDisConnected = function (nReason) {
        if (nReason instanceof Object) { 
            this.user.socket.emit(EVENTS.FrontDisConnected, nReason);
        }        
    }
    
    this.OnHeartBeatWarning = function (nTimeLapse) {
        if (nTimeLapse instanceof Object) { 
            this.user.socket.emit(EVENTS.HeartBeatWarning, nTimeLapse);
        }        
    }         
          
    this.RspQryTopCpuInfoTopicCallbackData = [];
    this.OnRspQryTopCpuInfoTopic = function (pRspQryTopCpuInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTopCpuInfo instanceof Object) { 
            this.RspQryTopCpuInfoTopicCallbackData.push( pRspQryTopCpuInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTopCpuInfoTopic, this.RspQryTopCpuInfoTopicCallbackData);
            this.RspQryTopCpuInfoTopicCallbackData = [];
        }
    }

    this.OnRtnTopCpuInfoTopic = function (pRtnTopCpuInfo){ 
        if (pRtnTopCpuInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTopCpuInfoTopic, pRtnTopCpuInfo);
        }
    }

    this.RspQryTopMemInfoTopicCallbackData = [];
    this.OnRspQryTopMemInfoTopic = function (pRspQryTopMemInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTopMemInfo instanceof Object) { 
            this.RspQryTopMemInfoTopicCallbackData.push( pRspQryTopMemInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTopMemInfoTopic, this.RspQryTopMemInfoTopicCallbackData);
            this.RspQryTopMemInfoTopicCallbackData = [];
        }
    }

    this.OnRtnTopMemInfoTopic = function (pRtnTopMemInfo){ 
        if (pRtnTopMemInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTopMemInfoTopic, pRtnTopMemInfo);
        }
    }

    this.RspQryTopProcessInfoTopicCallbackData = [];
    this.OnRspQryTopProcessInfoTopic = function (pRspQryTopProcessInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTopProcessInfo instanceof Object) { 
            this.RspQryTopProcessInfoTopicCallbackData.push( pRspQryTopProcessInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTopProcessInfoTopic, this.RspQryTopProcessInfoTopicCallbackData);
            this.RspQryTopProcessInfoTopicCallbackData = [];
        }
    }

    this.OnRtnTopProcessInfoTopic = function (pRtnTopProcessInfo){ 
        if (pRtnTopProcessInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTopProcessInfoTopic, pRtnTopProcessInfo);
        }
    }

    this.RspQryFileSystemInfoTopicCallbackData = [];
    this.OnRspQryFileSystemInfoTopic = function (pRspQryFileSystemInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFileSystemInfo instanceof Object) { 
            this.RspQryFileSystemInfoTopicCallbackData.push( pRspQryFileSystemInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFileSystemInfoTopic, this.RspQryFileSystemInfoTopicCallbackData);
            this.RspQryFileSystemInfoTopicCallbackData = [];
        }
    }

    this.OnRtnFileSystemInfoTopic = function (pRtnFileSystemInfo){ 
        if (pRtnFileSystemInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFileSystemInfoTopic, pRtnFileSystemInfo);
        }
    }

    this.RspQryNetworkInfoTopicCallbackData = [];
    this.OnRspQryNetworkInfoTopic = function (pRspQryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetworkInfo instanceof Object) { 
            this.RspQryNetworkInfoTopicCallbackData.push( pRspQryNetworkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetworkInfoTopic, this.RspQryNetworkInfoTopicCallbackData);
            this.RspQryNetworkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetworkInfoTopic = function (pRtnNetworkInfo){ 
        if (pRtnNetworkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetworkInfoTopic, pRtnNetworkInfo);
        }
    }

    this.RspQryClientLoginTopicCallbackData = [];
    this.OnRspQryClientLoginTopic = function (pRspQryClientLogin, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientLogin instanceof Object) { 
            this.RspQryClientLoginTopicCallbackData.push( pRspQryClientLogin);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientLoginTopic, this.RspQryClientLoginTopicCallbackData);
            this.RspQryClientLoginTopicCallbackData = [];
        }
    }

    this.RspQryMonitorObjectTopicCallbackData = [];
    this.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMonitorObject instanceof Object) { 
            this.RspQryMonitorObjectTopicCallbackData.push( pRspQryMonitorObject);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMonitorObjectTopic, this.RspQryMonitorObjectTopicCallbackData);
            this.RspQryMonitorObjectTopicCallbackData = [];
        }
        
    }

    this.OnRtnMonitorObjectTopic = function (pRtnMonitorObject){ 
        if (pRtnMonitorObject instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMonitorObjectTopic, pRtnMonitorObject);
        }
    }

    this.RspQryObjectRationalTopicCallbackData = [];
    this.OnRspQryObjectRationalTopic = function (pRspQryObjectRational, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryObjectRational instanceof Object) { 
            this.RspQryObjectRationalTopicCallbackData.push( pRspQryObjectRational);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryObjectRationalTopic, this.RspQryObjectRationalTopicCallbackData);
            this.RspQryObjectRationalTopicCallbackData = [];
        }
    }

    this.OnRtnObjectRationalTopic = function (pRtnObjectRational){ 
        if (pRtnObjectRational instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnObjectRationalTopic, pRtnObjectRational);
        }
    }

    this.RspQrySyslogInfoTopicCallbackData = [];
    this.OnRspQrySyslogInfoTopic = function (pRspQrySyslogInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySyslogInfo instanceof Object) { 
            this.RspQrySyslogInfoTopicCallbackData.push( pRspQrySyslogInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySyslogInfoTopic, this.RspQrySyslogInfoTopicCallbackData);
            this.RspQrySyslogInfoTopicCallbackData = [];
        }
    }

    this.OnRtnSyslogInfoTopic = function (pRtnSyslogInfo){ 
        if (pRtnSyslogInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSyslogInfoTopic, pRtnSyslogInfo);
        }
    }

    this.RspQrySubscriberTopicCallbackData = [];
    this.OnRspQrySubscriberTopic = function (pRspQrySubscriber, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySubscriber instanceof Object) { 
            this.RspQrySubscriberTopicCallbackData.push( pRspQrySubscriber);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySubscriberTopic, this.RspQrySubscriberTopicCallbackData);
            this.RspQrySubscriberTopicCallbackData = [];
        }
    }

    this.RspQryOidRelationTopicCallbackData = [];
    this.OnRspQryOidRelationTopic = function (pRspQryOidRelation, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryOidRelation instanceof Object) { 
            this.RspQryOidRelationTopicCallbackData.push( pRspQryOidRelation);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryOidRelationTopic, this.RspQryOidRelationTopicCallbackData);
            this.RspQryOidRelationTopicCallbackData = [];
        }
    }

    this.OnRtnOidRelationTopic = function (pRtnOidRelation){ 
        if (pRtnOidRelation instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnOidRelationTopic, pRtnOidRelation);
        }
    }

    this.RspQryUserInfoTopicCallbackData = [];
    this.OnRspQryUserInfoTopic = function (pRspQryUserInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryUserInfo instanceof Object) { 
            this.RspQryUserInfoTopicCallbackData.push( pRspQryUserInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryUserInfoTopic, this.RspQryUserInfoTopicCallbackData);
            this.RspQryUserInfoTopicCallbackData = [];
        }
    }

    this.OnRtnUserInfoTopic = function (pRtnUserInfo){ 
        if (pRtnUserInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnUserInfoTopic, pRtnUserInfo);
        }
    }

    this.RspQryOnlineUserInfoTopicCallbackData = [];
    this.OnRspQryOnlineUserInfoTopic = function (pRspQryOnlineUserInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryOnlineUserInfo instanceof Object) { 
            this.RspQryOnlineUserInfoTopicCallbackData.push( pRspQryOnlineUserInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryOnlineUserInfoTopic, this.RspQryOnlineUserInfoTopicCallbackData);
            this.RspQryOnlineUserInfoTopicCallbackData = [];
        }
    }

    this.OnRtnOnlineUserInfoTopic = function (pRtnOnlineUserInfo){ 
        if (pRtnOnlineUserInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnOnlineUserInfoTopic, pRtnOnlineUserInfo);
        }
    }

    this.RspQryWarningEventTopicCallbackData = [];
    this.OnRspQryWarningEventTopic = function (pRspQryWarningEvent, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryWarningEvent instanceof Object) { 
            this.RspQryWarningEventTopicCallbackData.push( pRspQryWarningEvent);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryWarningEventTopic, this.RspQryWarningEventTopicCallbackData);
            this.RspQryWarningEventTopicCallbackData = [];
        }
    }

    this.OnRtnWarningEventTopic = function (pRtnWarningEvent){ 
        if (pRtnWarningEvent instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnWarningEventTopic, pRtnWarningEvent);
        }
    }

    this.RspQryCPUUsageTopicCallbackData = [];
    this.OnRspQryCPUUsageTopic = function (pRspQryCPUUsage, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryCPUUsage instanceof Object) { 
            this.RspQryCPUUsageTopicCallbackData.push( pRspQryCPUUsage);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryCPUUsageTopic, this.RspQryCPUUsageTopicCallbackData);
            this.RspQryCPUUsageTopicCallbackData = [];
        }
    }

    this.OnRtnCPUUsageTopic = function (pRtnCPUUsage){ 
        if (pRtnCPUUsage instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnCPUUsageTopic, pRtnCPUUsage);
        }
    }

    this.RspQryMemoryUsageTopicCallbackData = [];
    this.OnRspQryMemoryUsageTopic = function (pRspQryMemoryUsage, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMemoryUsage instanceof Object) { 
            this.RspQryMemoryUsageTopicCallbackData.push( pRspQryMemoryUsage);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMemoryUsageTopic, this.RspQryMemoryUsageTopicCallbackData);
            this.RspQryMemoryUsageTopicCallbackData = [];
        }
    }

    this.OnRtnMemoryUsageTopic = function (pRtnMemoryUsage){ 
        if (pRtnMemoryUsage instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMemoryUsageTopic, pRtnMemoryUsage);
        }
    }

    this.RspQryDiskUsageTopicCallbackData = [];
    this.OnRspQryDiskUsageTopic = function (pRspQryDiskUsage, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryDiskUsage instanceof Object) { 
            this.RspQryDiskUsageTopicCallbackData.push( pRspQryDiskUsage);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryDiskUsageTopic, this.RspQryDiskUsageTopicCallbackData);
            this.RspQryDiskUsageTopicCallbackData = [];
        }
    }

    this.OnRtnDiskUsageTopic = function (pRtnDiskUsage){ 
        if (pRtnDiskUsage instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnDiskUsageTopic, pRtnDiskUsage);
        }
    }

    this.RspQryObjectAttrTopicCallbackData = [];
    this.OnRspQryObjectAttrTopic = function (pRspQryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryObjectAttr instanceof Object) { 
            this.RspQryObjectAttrTopicCallbackData.push( pRspQryObjectAttr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryObjectAttrTopic, this.RspQryObjectAttrTopicCallbackData);
            this.RspQryObjectAttrTopicCallbackData = [];
        }
    }

    this.OnRtnObjectAttrTopic = function (pRtnObjectAttr){ 
        if (pRtnObjectAttr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnObjectAttrTopic, pRtnObjectAttr);
        }
    }

    this.RspQryInvalidateOrderTopicCallbackData = [];
    this.OnRspQryInvalidateOrderTopic = function (pRspQryInvalidateOrder, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryInvalidateOrder instanceof Object) { 
            this.RspQryInvalidateOrderTopicCallbackData.push( pRspQryInvalidateOrder);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryInvalidateOrderTopic, this.RspQryInvalidateOrderTopicCallbackData);
            this.RspQryInvalidateOrderTopicCallbackData = [];
        }
    }

    this.OnRtnInvalidateOrderTopic = function (pRtnInvalidateOrder){ 
        if (pRtnInvalidateOrder instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnInvalidateOrderTopic, pRtnInvalidateOrder);
        }
    }

    this.RspQryOrderStatusTopicCallbackData = [];
    this.OnRspQryOrderStatusTopic = function (pRspQryOrderStatus, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryOrderStatus instanceof Object) { 
            this.RspQryOrderStatusTopicCallbackData.push( pRspQryOrderStatus);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryOrderStatusTopic, this.RspQryOrderStatusTopicCallbackData);
            this.RspQryOrderStatusTopicCallbackData = [];
        }
    }

    this.OnRtnOrderStatusTopic = function (pRtnOrderStatus){ 
        if (pRtnOrderStatus instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnOrderStatusTopic, pRtnOrderStatus);
        }
    }

    this.RspQryBargainOrderTopicCallbackData = [];
    this.OnRspQryBargainOrderTopic = function (pRspQryBargainOrder, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryBargainOrder instanceof Object) { 
            this.RspQryBargainOrderTopicCallbackData.push( pRspQryBargainOrder);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryBargainOrderTopic, this.RspQryBargainOrderTopicCallbackData);
            this.RspQryBargainOrderTopicCallbackData = [];
        }
    }

    this.OnRtnBargainOrderTopic = function (pRtnBargainOrder){ 
        if (pRtnBargainOrder instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnBargainOrderTopic, pRtnBargainOrder);
        }
    }

    this.RspQryInstPropertyTopicCallbackData = [];
    this.OnRspQryInstPropertyTopic = function (pRspQryInstProperty, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryInstProperty instanceof Object) { 
            this.RspQryInstPropertyTopicCallbackData.push( pRspQryInstProperty);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryInstPropertyTopic, this.RspQryInstPropertyTopicCallbackData);
            this.RspQryInstPropertyTopicCallbackData = [];
        }
    }

    this.OnRtnInstPropertyTopic = function (pRtnInstProperty){ 
        if (pRtnInstProperty instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnInstPropertyTopic, pRtnInstProperty);
        }
    }

    this.RspQryMarginRateTopicCallbackData = [];
    this.OnRspQryMarginRateTopic = function (pRspQryMarginRate, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMarginRate instanceof Object) { 
            this.RspQryMarginRateTopicCallbackData.push( pRspQryMarginRate);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMarginRateTopic, this.RspQryMarginRateTopicCallbackData);
            this.RspQryMarginRateTopicCallbackData = [];
        }
    }

    this.OnRtnMarginRateTopic = function (pRtnMarginRate){ 
        if (pRtnMarginRate instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMarginRateTopic, pRtnMarginRate);
        }
    }

    this.RspQryPriceLimitTopicCallbackData = [];
    this.OnRspQryPriceLimitTopic = function (pRspQryPriceLimit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPriceLimit instanceof Object) { 
            this.RspQryPriceLimitTopicCallbackData.push( pRspQryPriceLimit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPriceLimitTopic, this.RspQryPriceLimitTopicCallbackData);
            this.RspQryPriceLimitTopicCallbackData = [];
        }
    }

    this.OnRtnPriceLimitTopic = function (pRtnPriceLimit){ 
        if (pRtnPriceLimit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPriceLimitTopic, pRtnPriceLimit);
        }
    }

    this.RspQryPartPosiLimitTopicCallbackData = [];
    this.OnRspQryPartPosiLimitTopic = function (pRspQryPartPosiLimit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPartPosiLimit instanceof Object) { 
            this.RspQryPartPosiLimitTopicCallbackData.push( pRspQryPartPosiLimit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPartPosiLimitTopic, this.RspQryPartPosiLimitTopicCallbackData);
            this.RspQryPartPosiLimitTopicCallbackData = [];
        }
    }

    this.OnRtnPartPosiLimitTopic = function (pRtnPartPosiLimit){ 
        if (pRtnPartPosiLimit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPartPosiLimitTopic, pRtnPartPosiLimit);
        }
    }

    this.RspQryClientPosiLimitTopicCallbackData = [];
    this.OnRspQryClientPosiLimitTopic = function (pRspQryClientPosiLimit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientPosiLimit instanceof Object) { 
            this.RspQryClientPosiLimitTopicCallbackData.push( pRspQryClientPosiLimit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientPosiLimitTopic, this.RspQryClientPosiLimitTopicCallbackData);
            this.RspQryClientPosiLimitTopicCallbackData = [];
        }
    }

    this.OnRtnClientPosiLimitTopic = function (pRtnClientPosiLimit){ 
        if (pRtnClientPosiLimit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnClientPosiLimitTopic, pRtnClientPosiLimit);
        }
    }

    this.RspQrySpecialPosiLimitTopicCallbackData = [];
    this.OnRspQrySpecialPosiLimitTopic = function (pRspQrySpecialPosiLimit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySpecialPosiLimit instanceof Object) { 
            this.RspQrySpecialPosiLimitTopicCallbackData.push( pRspQrySpecialPosiLimit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySpecialPosiLimitTopic, this.RspQrySpecialPosiLimitTopicCallbackData);
            this.RspQrySpecialPosiLimitTopicCallbackData = [];
        }
    }

    this.OnRtnSpecialPosiLimitTopic = function (pRtnSpecialPosiLimit){ 
        if (pRtnSpecialPosiLimit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSpecialPosiLimitTopic, pRtnSpecialPosiLimit);
        }
    }

    this.RspQryTransactionChgTopicCallbackData = [];
    this.OnRspQryTransactionChgTopic = function (pRspQryTransactionChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTransactionChg instanceof Object) { 
            this.RspQryTransactionChgTopicCallbackData.push( pRspQryTransactionChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTransactionChgTopic, this.RspQryTransactionChgTopicCallbackData);
            this.RspQryTransactionChgTopicCallbackData = [];
        }
    }

    this.OnRtnTransactionChgTopic = function (pRtnTransactionChg){ 
        if (pRtnTransactionChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTransactionChgTopic, pRtnTransactionChg);
        }
    }

    this.RspQryClientChgTopicCallbackData = [];
    this.OnRspQryClientChgTopic = function (pRspQryClientChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientChg instanceof Object) { 
            this.RspQryClientChgTopicCallbackData.push( pRspQryClientChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientChgTopic, this.RspQryClientChgTopicCallbackData);
            this.RspQryClientChgTopicCallbackData = [];
        }
    }

    this.OnRtnClientChgTopic = function (pRtnClientChg){ 
        if (pRtnClientChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnClientChgTopic, pRtnClientChg);
        }
    }

    this.RspQryPartClientChgTopicCallbackData = [];
    this.OnRspQryPartClientChgTopic = function (pRspQryPartClientChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPartClientChg instanceof Object) { 
            this.RspQryPartClientChgTopicCallbackData.push( pRspQryPartClientChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPartClientChgTopic, this.RspQryPartClientChgTopicCallbackData);
            this.RspQryPartClientChgTopicCallbackData = [];
        }
    }

    this.OnRtnPartClientChgTopic = function (pRtnPartClientChg){ 
        if (pRtnPartClientChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPartClientChgTopic, pRtnPartClientChg);
        }
    }

    this.RspQryPosiLimitChgTopicCallbackData = [];
    this.OnRspQryPosiLimitChgTopic = function (pRspQryPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPosiLimitChg instanceof Object) { 
            this.RspQryPosiLimitChgTopicCallbackData.push( pRspQryPosiLimitChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPosiLimitChgTopic, this.RspQryPosiLimitChgTopicCallbackData);
            this.RspQryPosiLimitChgTopicCallbackData = [];
        }
    }

    this.OnRtnPosiLimitChgTopic = function (pRtnPosiLimitChg){ 
        if (pRtnPosiLimitChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPosiLimitChgTopic, pRtnPosiLimitChg);
        }
    }

    this.RspQryHedgeDetailChgTopicCallbackData = [];
    this.OnRspQryHedgeDetailChgTopic = function (pRspQryHedgeDetailChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHedgeDetailChg instanceof Object) { 
            this.RspQryHedgeDetailChgTopicCallbackData.push( pRspQryHedgeDetailChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHedgeDetailChgTopic, this.RspQryHedgeDetailChgTopicCallbackData);
            this.RspQryHedgeDetailChgTopicCallbackData = [];
        }
    }

    this.OnRtnHedgeDetailChgTopic = function (pRtnHedgeDetailChg){ 
        if (pRtnHedgeDetailChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnHedgeDetailChgTopic, pRtnHedgeDetailChg);
        }
    }

    this.RspQryParticipantChgTopicCallbackData = [];
    this.OnRspQryParticipantChgTopic = function (pRspQryParticipantChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryParticipantChg instanceof Object) { 
            this.RspQryParticipantChgTopicCallbackData.push( pRspQryParticipantChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryParticipantChgTopic, this.RspQryParticipantChgTopicCallbackData);
            this.RspQryParticipantChgTopicCallbackData = [];
        }
    }

    this.OnRtnParticipantChgTopic = function (pRtnParticipantChg){ 
        if (pRtnParticipantChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnParticipantChgTopic, pRtnParticipantChg);
        }
    }

    this.RspQryMarginRateChgTopicCallbackData = [];
    this.OnRspQryMarginRateChgTopic = function (pRspQryMarginRateChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMarginRateChg instanceof Object) { 
            this.RspQryMarginRateChgTopicCallbackData.push( pRspQryMarginRateChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMarginRateChgTopic, this.RspQryMarginRateChgTopicCallbackData);
            this.RspQryMarginRateChgTopicCallbackData = [];
        }
    }

    this.OnRtnMarginRateChgTopic = function (pRtnMarginRateChg){ 
        if (pRtnMarginRateChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMarginRateChgTopic, pRtnMarginRateChg);
        }
    }

    this.RspQryUserIpChgTopicCallbackData = [];
    this.OnRspQryUserIpChgTopic = function (pRspQryUserIpChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryUserIpChg instanceof Object) { 
            this.RspQryUserIpChgTopicCallbackData.push( pRspQryUserIpChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryUserIpChgTopic, this.RspQryUserIpChgTopicCallbackData);
            this.RspQryUserIpChgTopicCallbackData = [];
        }
    }

    this.OnRtnUserIpChgTopic = function (pRtnUserIpChg){ 
        if (pRtnUserIpChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnUserIpChgTopic, pRtnUserIpChg);
        }
    }

    this.RspQryClientPosiLimitChgTopicCallbackData = [];
    this.OnRspQryClientPosiLimitChgTopic = function (pRspQryClientPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientPosiLimitChg instanceof Object) { 
            this.RspQryClientPosiLimitChgTopicCallbackData.push( pRspQryClientPosiLimitChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientPosiLimitChgTopic, this.RspQryClientPosiLimitChgTopicCallbackData);
            this.RspQryClientPosiLimitChgTopicCallbackData = [];
        }
    }

    this.OnRtnClientPosiLimitChgTopic = function (pRtnClientPosiLimitChg){ 
        if (pRtnClientPosiLimitChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnClientPosiLimitChgTopic, pRtnClientPosiLimitChg);
        }
    }

    this.RspQrySpecPosiLimitChgTopicCallbackData = [];
    this.OnRspQrySpecPosiLimitChgTopic = function (pRspQrySpecPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySpecPosiLimitChg instanceof Object) { 
            this.RspQrySpecPosiLimitChgTopicCallbackData.push( pRspQrySpecPosiLimitChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySpecPosiLimitChgTopic, this.RspQrySpecPosiLimitChgTopicCallbackData);
            this.RspQrySpecPosiLimitChgTopicCallbackData = [];
        }
    }

    this.OnRtnSpecPosiLimitChgTopic = function (pRtnSpecPosiLimitChg){ 
        if (pRtnSpecPosiLimitChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSpecPosiLimitChgTopic, pRtnSpecPosiLimitChg);
        }
    }

    this.RspQryHistoryObjectAttrTopicCallbackData = [];
    this.OnRspQryHistoryObjectAttrTopic = function (pRspQryHistoryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHistoryObjectAttr instanceof Object) { 
            this.RspQryHistoryObjectAttrTopicCallbackData.push( pRspQryHistoryObjectAttr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHistoryObjectAttrTopic, this.RspQryHistoryObjectAttrTopicCallbackData);
            this.RspQryHistoryObjectAttrTopicCallbackData = [];
        }
    }

    this.OnRtnHistoryObjectAttrTopic = function (pRtnHistoryObjectAttr){ 
        if (pRtnHistoryObjectAttr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnHistoryObjectAttrTopic, pRtnHistoryObjectAttr);
        }
    }

    this.RspQryFrontInfoTopicCallbackData = [];
    this.OnRspQryFrontInfoTopic = function (pRspQryFrontInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFrontInfo instanceof Object) { 
            this.RspQryFrontInfoTopicCallbackData.push( pRspQryFrontInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFrontInfoTopic, this.RspQryFrontInfoTopicCallbackData);
            this.RspQryFrontInfoTopicCallbackData = [];
        }
    }

    this.OnRtnFrontInfoTopic = function (pRtnFrontInfo){ 
        if (pRtnFrontInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFrontInfoTopic, pRtnFrontInfo);
        }
    }

    this.RspQrySysUserLoginTopicCallbackData = [];
    this.rspUserLoginCallNumb = 1;
    this.OnRspQrySysUserLoginTopic = function (pRspQrySysUserLogin, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysUserLogin instanceof Object) { 
            this.RspQrySysUserLoginTopicCallbackData.push( pRspQrySysUserLogin);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysUserLoginTopic, this.RspQrySysUserLoginTopicCallbackData);
            this.RspQrySysUserLoginTopicCallbackData = [];
        }
        
        var outputStr = "\n++++++++++++++++ Communication OnRspQrySysUserLoginTopic: START! ++++++++++++++++++\n";
			 	if (pRspQrySysUserLogin instanceof Object) {
		      outputStr += "LoginTime :                 " + pRspQrySysUserLogin.LoginTime.toString() + "\n"
					           + "UserID :                    " + pRspQrySysUserLogin.UserID.toString() + "\n"
					           + "Privilege :                 " + pRspQrySysUserLogin.Privilege.toString() + "\n"
					           + "TradingDay :                " + pRspQrySysUserLogin.TradingDay.toString() + "\n"
					           + "VersionFlag :               " + pRspQrySysUserLogin.VersionFlag.toString() + "\n";	
					
				} else {
		            outputStr += "pRspQrySysUserLogin is NULL!\n";
		    }        	
		        
		    outputStr += "bIsLastNew :                " + bIsLast + "\n";
		    outputStr += "rspUserLoginCallNumb:       " + rspUserLoginCallNumb + "\n";
		    outputStr += "++++++++++++++++ Communication OnRspQrySysUserLoginTopic: END! ++++++++++++++++++" + "\n";        
		    rspUserLoginCallNumb++;
		    console.log(outputStr);           
    }

    this.RspQrySysUserLogoutTopicCallbackData = [];
    this.OnRspQrySysUserLogoutTopic = function (pRspQrySysUserLogout, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysUserLogout instanceof Object) { 
            this.RspQrySysUserLogoutTopicCallbackData.push( pRspQrySysUserLogout);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysUserLogoutTopic, this.RspQrySysUserLogoutTopicCallbackData);
            this.RspQrySysUserLogoutTopicCallbackData = [];
        }
    }

    this.RspQrySysUserPasswordUpdateTopicCallbackData = [];
    this.OnRspQrySysUserPasswordUpdateTopic = function (pRspQrySysUserPasswordUpdate, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysUserPasswordUpdate instanceof Object) { 
            this.RspQrySysUserPasswordUpdateTopicCallbackData.push( pRspQrySysUserPasswordUpdate);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysUserPasswordUpdateTopic, this.RspQrySysUserPasswordUpdateTopicCallbackData);
            this.RspQrySysUserPasswordUpdateTopicCallbackData = [];
        }
    }

    this.RspQrySysUserRegisterTopicCallbackData = [];
    this.OnRspQrySysUserRegisterTopic = function (pRspQrySysUserRegister, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysUserRegister instanceof Object) { 
            this.RspQrySysUserRegisterTopicCallbackData.push( pRspQrySysUserRegister);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysUserRegisterTopic, this.RspQrySysUserRegisterTopicCallbackData);
            this.RspQrySysUserRegisterTopicCallbackData = [];
        }
    }

    this.RspQrySysUserDeleteTopicCallbackData = [];
    this.OnRspQrySysUserDeleteTopic = function (pRspQrySysUserDelete, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysUserDelete instanceof Object) { 
            this.RspQrySysUserDeleteTopicCallbackData.push( pRspQrySysUserDelete);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysUserDeleteTopic, this.RspQrySysUserDeleteTopicCallbackData);
            this.RspQrySysUserDeleteTopicCallbackData = [];
        }
    }

    this.RspQryParticipantInitTopicCallbackData = [];
    this.OnRspQryParticipantInitTopic = function (pRspQryParticipantInit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryParticipantInit instanceof Object) { 
            this.RspQryParticipantInitTopicCallbackData.push( pRspQryParticipantInit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryParticipantInitTopic, this.RspQryParticipantInitTopicCallbackData);
            this.RspQryParticipantInitTopicCallbackData = [];
        }
    }

    this.OnRtnParticipantInitTopic = function (pRtnParticipantInit){ 
        if (pRtnParticipantInit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnParticipantInitTopic, pRtnParticipantInit);
        }
    }

    this.RspQryUserInitTopicCallbackData = [];
    this.OnRspQryUserInitTopic = function (pRspQryUserInit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryUserInit instanceof Object) { 
            this.RspQryUserInitTopicCallbackData.push( pRspQryUserInit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryUserInitTopic, this.RspQryUserInitTopicCallbackData);
            this.RspQryUserInitTopicCallbackData = [];
        }
    }

    this.OnRtnUserInitTopic = function (pRtnUserInit){ 
        if (pRtnUserInit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnUserInitTopic, pRtnUserInit);
        }
    }

    this.RspQryClientInitTopicCallbackData = [];
    this.OnRspQryClientInitTopic = function (pRspQryClientInit, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientInit instanceof Object) { 
            this.RspQryClientInitTopicCallbackData.push( pRspQryClientInit);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientInitTopic, this.RspQryClientInitTopicCallbackData);
            this.RspQryClientInitTopicCallbackData = [];
        }
    }

    this.OnRtnClientInitTopic = function (pRtnClientInit){ 
        if (pRtnClientInit instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnClientInitTopic, pRtnClientInit);
        }
    }

    this.RspQryTradeLogTopicCallbackData = [];
    this.OnRspQryTradeLogTopic = function (pRspQryTradeLog, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeLog instanceof Object) { 
            this.RspQryTradeLogTopicCallbackData.push( pRspQryTradeLog);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeLogTopic, this.RspQryTradeLogTopicCallbackData);
            this.RspQryTradeLogTopicCallbackData = [];
        }
    }

    this.OnRtnTradeLogTopic = function (pRtnTradeLog){ 
        if (pRtnTradeLog instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTradeLogTopic, pRtnTradeLog);
        }
    }

    this.RspQryTradeUserLoginInfoTopicCallbackData = [];
    this.OnRspQryTradeUserLoginInfoTopic = function (pRspQryTradeUserLoginInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeUserLoginInfo instanceof Object) { 
            this.RspQryTradeUserLoginInfoTopicCallbackData.push( pRspQryTradeUserLoginInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeUserLoginInfoTopic, this.RspQryTradeUserLoginInfoTopicCallbackData);
            this.RspQryTradeUserLoginInfoTopicCallbackData = [];
        }
    }

    this.OnRtnTradeUserLoginInfoTopic = function (pRtnTradeUserLoginInfo){ 
        if (pRtnTradeUserLoginInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTradeUserLoginInfoTopic, pRtnTradeUserLoginInfo);
        }
    }

    this.RspQryPartTradeTopicCallbackData = [];
    this.OnRspQryPartTradeTopic = function (pRspQryPartTrade, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPartTrade instanceof Object) { 
            this.RspQryPartTradeTopicCallbackData.push( pRspQryPartTrade);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPartTradeTopic, this.RspQryPartTradeTopicCallbackData);
            this.RspQryPartTradeTopicCallbackData = [];
        }
    }

    this.RspQryTradepeakTopicCallbackData = [];
    this.OnRspQryTradepeakTopic = function (pRspQryTradepeak, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradepeak instanceof Object) { 
            this.RspQryTradepeakTopicCallbackData.push( pRspQryTradepeak);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradepeakTopic, this.RspQryTradepeakTopicCallbackData);
            this.RspQryTradepeakTopicCallbackData = [];
        }
    }

    this.OnRtnUpdateSysConfigTopic = function (pRtnUpdateSysConfig){ 
        if (pRtnUpdateSysConfig instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnUpdateSysConfigTopic, pRtnUpdateSysConfig);
        }
    }

    this.OnRtnSysUser = function (pRtnSysUser){ 
        if (pRtnSysUser instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSysUser, pRtnSysUser);
        }
    }

    this.OnRtnPriceLimitChgTopic = function (pRtnPriceLimitChg){ 
        if (pRtnPriceLimitChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPriceLimitChgTopic, pRtnPriceLimitChg);
        }
    }

    this.RspQryHistoryCpuInfoTopicCallbackData = [];
    this.OnRspQryHistoryCpuInfoTopic = function (pRspQryHistoryCpuInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHistoryCpuInfo instanceof Object) { 
            this.RspQryHistoryCpuInfoTopicCallbackData.push( pRspQryHistoryCpuInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHistoryCpuInfoTopic, this.RspQryHistoryCpuInfoTopicCallbackData);
            this.RspQryHistoryCpuInfoTopicCallbackData = [];
        }
    }

    this.RspQryHistoryMemInfoTopicCallbackData = [];
    this.OnRspQryHistoryMemInfoTopic = function (pRspQryHistoryMemInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHistoryMemInfo instanceof Object) { 
            this.RspQryHistoryMemInfoTopicCallbackData.push( pRspQryHistoryMemInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHistoryMemInfoTopic, this.RspQryHistoryMemInfoTopicCallbackData);
            this.RspQryHistoryMemInfoTopicCallbackData = [];
        }
    }

    this.RspQryHistoryNetworkInfoTopicCallbackData = [];
    this.OnRspQryHistoryNetworkInfoTopic = function (pRspQryHistoryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHistoryNetworkInfo instanceof Object) { 
            this.RspQryHistoryNetworkInfoTopicCallbackData.push( pRspQryHistoryNetworkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHistoryNetworkInfoTopic, this.RspQryHistoryNetworkInfoTopicCallbackData);
            this.RspQryHistoryNetworkInfoTopicCallbackData = [];
        }
    }

    this.RspQryMonitorOnlineUserCallbackData = [];
    this.OnRspQryMonitorOnlineUser = function (pRspQryMonitorOnlineUser, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMonitorOnlineUser instanceof Object) { 
            this.RspQryMonitorOnlineUserCallbackData.push( pRspQryMonitorOnlineUser);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMonitorOnlineUser, this.RspQryMonitorOnlineUserCallbackData);
            this.RspQryMonitorOnlineUserCallbackData = [];
        }
    }

    this.RspQryFrontStatCallbackData = [];
    this.OnRspQryFrontStat = function (pRspQryFrontStat, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFrontStat instanceof Object) { 
            this.RspQryFrontStatCallbackData.push( pRspQryFrontStat);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFrontStat, this.RspQryFrontStatCallbackData);
            this.RspQryFrontStatCallbackData = [];
        }
    }

    this.OnRtnSysTimeSyncTopic = function (pRtnSysTimeSync){ 
        if (pRtnSysTimeSync instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSysTimeSyncTopic, pRtnSysTimeSync);
        }
    }

    this.OnRtnDataCenterChgTopic = function (pRtnDataCenterChg){ 
        if (pRtnDataCenterChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnDataCenterChgTopic, pRtnDataCenterChg);
        }
    }

    this.RspQryHistoryTradePeakTopicCallbackData = [];
    this.OnRspQryHistoryTradePeakTopic = function (pRspQryHistoryTradePeak, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryHistoryTradePeak instanceof Object) { 
            this.RspQryHistoryTradePeakTopicCallbackData.push( pRspQryHistoryTradePeak);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryHistoryTradePeakTopic, this.RspQryHistoryTradePeakTopicCallbackData);
            this.RspQryHistoryTradePeakTopicCallbackData = [];
        }
    }

    this.OnRtnHistoryTradePeakTopic = function (pRtnHistoryTradePeak){ 
        if (pRtnHistoryTradePeak instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnHistoryTradePeakTopic, pRtnHistoryTradePeak);
        }
    }

    this.RspQrySyslogEventTopicCallbackData = [];
    this.OnRspQrySyslogEventTopic = function (pRspQrySyslogEvent, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySyslogEvent instanceof Object) { 
            this.RspQrySyslogEventTopicCallbackData.push( pRspQrySyslogEvent);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySyslogEventTopic, this.RspQrySyslogEventTopicCallbackData);
            this.RspQrySyslogEventTopicCallbackData = [];
        }
    }

    this.OnRtnSyslogEventTopic = function (pRtnSyslogEvent){ 
        if (pRtnSyslogEvent instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSyslogEventTopic, pRtnSyslogEvent);
        }
    }

    this.RspQryTradeDayChangeTopicCallbackData = [];
    this.OnRspQryTradeDayChangeTopic = function (pRspQryTradeDayChange, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeDayChange instanceof Object) { 
            this.RspQryTradeDayChangeTopicCallbackData.push( pRspQryTradeDayChange);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeDayChangeTopic, this.RspQryTradeDayChangeTopicCallbackData);
            this.RspQryTradeDayChangeTopicCallbackData = [];
        }
    }

    this.RspQryWebAppInfoTopicCallbackData = [];
    this.OnRspQryWebAppInfoTopic = function (pRspQryWebAppInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryWebAppInfo instanceof Object) { 
            this.RspQryWebAppInfoTopicCallbackData.push( pRspQryWebAppInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryWebAppInfoTopic, this.RspQryWebAppInfoTopicCallbackData);
            this.RspQryWebAppInfoTopicCallbackData = [];
        }
    }

    this.OnRtnWebAppInfoTopic = function (pRtnWebAppInfo){ 
        if (pRtnWebAppInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnWebAppInfoTopic, pRtnWebAppInfo);
        }
    }

    this.RspQryServletInfoTopicCallbackData = [];
    this.OnRspQryServletInfoTopic = function (pRspQryServletInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryServletInfo instanceof Object) { 
            this.RspQryServletInfoTopicCallbackData.push( pRspQryServletInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryServletInfoTopic, this.RspQryServletInfoTopicCallbackData);
            this.RspQryServletInfoTopicCallbackData = [];
        }
    }

    this.OnRtnServletInfoTopic = function (pRtnServletInfo){ 
        if (pRtnServletInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnServletInfoTopic, pRtnServletInfo);
        }
    }

    this.RspQryFileInfoTopicCallbackData = [];
    this.OnRspQryFileInfoTopic = function (pRspQryFileInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFileInfo instanceof Object) { 
            this.RspQryFileInfoTopicCallbackData.push( pRspQryFileInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFileInfoTopic, this.RspQryFileInfoTopicCallbackData);
            this.RspQryFileInfoTopicCallbackData = [];
        }
    }

    this.OnRtnFileInfoTopic = function (pRtnFileInfo){ 
        if (pRtnFileInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFileInfoTopic, pRtnFileInfo);
        }
    }

    this.RspQrySessionInfoTopicCallbackData = [];
    this.OnRspQrySessionInfoTopic = function (pRspQrySessionInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySessionInfo instanceof Object) { 
            this.RspQrySessionInfoTopicCallbackData.push( pRspQrySessionInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySessionInfoTopic, this.RspQrySessionInfoTopicCallbackData);
            this.RspQrySessionInfoTopicCallbackData = [];
        }
    }

    this.OnRtnSessionInfoTopic = function (pRtnSessionInfo){ 
        if (pRtnSessionInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSessionInfoTopic, pRtnSessionInfo);
        }
    }

    this.RspQryJDBCInfoTopicCallbackData = [];
    this.OnRspQryJDBCInfoTopic = function (pRspQryJDBCInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryJDBCInfo instanceof Object) { 
            this.RspQryJDBCInfoTopicCallbackData.push( pRspQryJDBCInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryJDBCInfoTopic, this.RspQryJDBCInfoTopicCallbackData);
            this.RspQryJDBCInfoTopicCallbackData = [];
        }
    }

    this.OnRtnJDBCInfoTopic = function (pRtnJDBCInfo){ 
        if (pRtnJDBCInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnJDBCInfoTopic, pRtnJDBCInfo);
        }
    }

    this.RspQryThreadInfoTopicCallbackData = [];
    this.OnRspQryThreadInfoTopic = function (pRspQryThreadInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryThreadInfo instanceof Object) { 
            this.RspQryThreadInfoTopicCallbackData.push( pRspQryThreadInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryThreadInfoTopic, this.RspQryThreadInfoTopicCallbackData);
            this.RspQryThreadInfoTopicCallbackData = [];
        }
    }

    this.OnRtnThreadInfoTopic = function (pRtnThreadInfo){ 
        if (pRtnThreadInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnThreadInfoTopic, pRtnThreadInfo);
        }
    }

    this.RspQryVMInfoTopicCallbackData = [];
    this.OnRspQryVMInfoTopic = function (pRspQryVMInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryVMInfo instanceof Object) { 
            this.RspQryVMInfoTopicCallbackData.push( pRspQryVMInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryVMInfoTopic, this.RspQryVMInfoTopicCallbackData);
            this.RspQryVMInfoTopicCallbackData = [];
        }
    }

    this.OnRtnVMInfoTopic = function (pRtnVMInfo){ 
        if (pRtnVMInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnVMInfoTopic, pRtnVMInfo);
        }
    }

    this.RspQryPropertyInfoTopicCallbackData = [];
    this.OnRspQryPropertyInfoTopic = function (pRspQryPropertyInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPropertyInfo instanceof Object) { 
            this.RspQryPropertyInfoTopicCallbackData.push( pRspQryPropertyInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPropertyInfoTopic, this.RspQryPropertyInfoTopicCallbackData);
            this.RspQryPropertyInfoTopicCallbackData = [];
        }
    }

    this.OnRtnPropertyInfoTopic = function (pRtnPropertyInfo){ 
        if (pRtnPropertyInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPropertyInfoTopic, pRtnPropertyInfo);
        }
    }

    this.RspQryMemPoolInfoTopicCallbackData = [];
    this.OnRspQryMemPoolInfoTopic = function (pRspQryMemPoolInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMemPoolInfo instanceof Object) { 
            this.RspQryMemPoolInfoTopicCallbackData.push( pRspQryMemPoolInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMemPoolInfoTopic, this.RspQryMemPoolInfoTopicCallbackData);
            this.RspQryMemPoolInfoTopicCallbackData = [];
        }
    }

    this.OnRtnMemPoolInfoTopic = function (pRtnMemPoolInfo){ 
        if (pRtnMemPoolInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMemPoolInfoTopic, pRtnMemPoolInfo);
        }
    }

    this.RspQryFileContentInfoTopicCallbackData = [];
    this.OnRspQryFileContentInfoTopic = function (pRspQryFileContentInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFileContentInfo instanceof Object) { 
            this.RspQryFileContentInfoTopicCallbackData.push( pRspQryFileContentInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFileContentInfoTopic, this.RspQryFileContentInfoTopicCallbackData);
            this.RspQryFileContentInfoTopicCallbackData = [];
        }
    }

    this.OnRtnFileContentInfoTopic = function (pRtnFileContentInfo){ 
        if (pRtnFileContentInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFileContentInfoTopic, pRtnFileContentInfo);
        }
    }

    this.RspQryConnectionInfoTopicCallbackData = [];
    this.OnRspQryConnectionInfoTopic = function (pRspQryConnectionInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryConnectionInfo instanceof Object) { 
            this.RspQryConnectionInfoTopicCallbackData.push( pRspQryConnectionInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryConnectionInfoTopic, this.RspQryConnectionInfoTopicCallbackData);
            this.RspQryConnectionInfoTopicCallbackData = [];
        }
    }

    this.OnRtnConnectionInfoTopic = function (pRtnConnectionInfo){ 
        if (pRtnConnectionInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnConnectionInfoTopic, pRtnConnectionInfo);
        }
    }

    this.RspQryConnectorInfoTopicCallbackData = [];
    this.OnRspQryConnectorInfoTopic = function (pRspQryConnectorInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryConnectorInfo instanceof Object) { 
            this.RspQryConnectorInfoTopicCallbackData.push( pRspQryConnectorInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryConnectorInfoTopic, this.RspQryConnectorInfoTopicCallbackData);
            this.RspQryConnectorInfoTopicCallbackData = [];
        }
    }

    this.OnRtnConnectorInfoTopic = function (pRtnConnectorInfo){ 
        if (pRtnConnectorInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnConnectorInfoTopic, pRtnConnectorInfo);
        }
    }

    this.RspQryDBQueryTopicCallbackData = [];
    this.OnRspQryDBQueryTopic = function (pRspQryDBQuery, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryDBQuery instanceof Object) { 
            this.RspQryDBQueryTopicCallbackData.push( pRspQryDBQuery);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryDBQueryTopic, this.RspQryDBQueryTopicCallbackData);
            this.RspQryDBQueryTopicCallbackData = [];
        }
    }

    this.OnRtnDBQueryTopic = function (pRtnDBQuery){ 
        if (pRtnDBQuery instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnDBQueryTopic, pRtnDBQuery);
        }
    }

    this.RspQryGeneralFieldTopicCallbackData = [];
    this.OnRspQryGeneralFieldTopic = function (pSysGeneralField, pRspInfo, nRequestID, bIsLast) {
        if (pSysGeneralField instanceof Object) { 
            this.RspQryGeneralFieldTopicCallbackData.push( pSysGeneralField);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryGeneralFieldTopic, this.RspQryGeneralFieldTopicCallbackData);
            this.RspQryGeneralFieldTopicCallbackData = [];
        }
    }

    this.OnRtnGeneralFieldTopic = function (pSysGeneralField){ 
        if (pSysGeneralField instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnGeneralFieldTopic, pSysGeneralField);
        }
    }

    this.RspQryGetFileTopicCallbackData = [];
    this.OnRspQryGetFileTopic = function (pRspQryGetFile, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryGetFile instanceof Object) { 
            this.RspQryGetFileTopicCallbackData.push( pRspQryGetFile);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryGetFileTopic, this.RspQryGetFileTopicCallbackData);
            this.RspQryGetFileTopicCallbackData = [];
        }
    }

    this.RspQryWarningQueryTopicCallbackData = [];
    this.OnRspQryWarningQueryTopic = function (pRspQryWarningQuery, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryWarningQuery instanceof Object) { 
            this.RspQryWarningQueryTopicCallbackData.push( pRspQryWarningQuery);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryWarningQueryTopic, this.RspQryWarningQueryTopicCallbackData);
            this.RspQryWarningQueryTopicCallbackData = [];
        }
    }

    this.OnRtnWarningQueryTopic = function (pRtnWarningQuery){ 
        if (pRtnWarningQuery instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnWarningQueryTopic, pRtnWarningQuery);
        }
    }

    this.OnRtnHostConfig = function (pRtnHostConfig){ 
        if (pRtnHostConfig instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnHostConfig, pRtnHostConfig);
        }
    }

    this.RspQryGeneralOperateTopicCallbackData = [];
    this.OnRspQryGeneralOperateTopic = function (pRspQryGeneralOperate, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryGeneralOperate instanceof Object) { 
            this.RspQryGeneralOperateTopicCallbackData.push( pRspQryGeneralOperate);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryGeneralOperateTopic, this.RspQryGeneralOperateTopicCallbackData);
            this.RspQryGeneralOperateTopicCallbackData = [];
        }
    }

    this.OnRtnGeneralOperateTopic = function (pRtnGeneralOperate){ 
        if (pRtnGeneralOperate instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnGeneralOperateTopic, pRtnGeneralOperate);
        }
    }

    this.RspQryNetDeviceLinkedTopicCallbackData = [];
    this.OnRspQryNetDeviceLinkedTopic = function (pRspQryNetDeviceLinked, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDeviceLinked instanceof Object) { 
            this.RspQryNetDeviceLinkedTopicCallbackData.push( pRspQryNetDeviceLinked);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceLinkedTopic, this.RspQryNetDeviceLinkedTopicCallbackData);
            this.RspQryNetDeviceLinkedTopicCallbackData = [];
        }
    }

    this.OnRtnNetDeviceLinkedTopic = function (pRtnNetDeviceLinked){ 
        if (pRtnNetDeviceLinked instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDeviceLinkedTopic, pRtnNetDeviceLinked);
        }
    }

    this.RspQryTradeUserLoginStatTopicCallbackData = [];
    this.OnRspQryTradeUserLoginStatTopic = function (pRspQryTradeUserLoginStat, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeUserLoginStat instanceof Object) { 
            this.RspQryTradeUserLoginStatTopicCallbackData.push( pRspQryTradeUserLoginStat);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeUserLoginStatTopic, this.RspQryTradeUserLoginStatTopicCallbackData);
            this.RspQryTradeUserLoginStatTopicCallbackData = [];
        }
    }

    this.RspQryTradeFrontOrderRttStatTopicCallbackData = [];
    this.OnRspQryTradeFrontOrderRttStatTopic = function (pRspQryTradeFrontOrderRttStat, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeFrontOrderRttStat instanceof Object) { 
            this.RspQryTradeFrontOrderRttStatTopicCallbackData.push( pRspQryTradeFrontOrderRttStat);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeFrontOrderRttStatTopic, this.RspQryTradeFrontOrderRttStatTopicCallbackData);
            this.RspQryTradeFrontOrderRttStatTopicCallbackData = [];
        }
    }

    this.OnRtnTradeFrontOrderRttStatTopic = function (pRtnTradeFrontOrderRttStat){ 
        if (pRtnTradeFrontOrderRttStat instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTradeFrontOrderRttStatTopic, pRtnTradeFrontOrderRttStat);
        }
    }

    this.RspQryParticTradeOrderStatesTopicCallbackData = [];
    this.OnRspQryParticTradeOrderStatesTopic = function (pRspQryParticTradeOrderStates, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryParticTradeOrderStates instanceof Object) { 
            this.RspQryParticTradeOrderStatesTopicCallbackData.push( pRspQryParticTradeOrderStates);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryParticTradeOrderStatesTopic, this.RspQryParticTradeOrderStatesTopicCallbackData);
            this.RspQryParticTradeOrderStatesTopicCallbackData = [];
        }
    }

    this.OnRtnParticTradeOrderStatesTopic = function (pRtnParticTradeOrderStates){ 
        if (pRtnParticTradeOrderStates instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnParticTradeOrderStatesTopic, pRtnParticTradeOrderStates);
        }
    }

    this.RspQryRouterInfoTopicCallbackData = [];
    this.OnRspQryRouterInfoTopic = function (pRspQryRouterInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryRouterInfo instanceof Object) { 
            this.RspQryRouterInfoTopicCallbackData.push( pRspQryRouterInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryRouterInfoTopic, this.RspQryRouterInfoTopicCallbackData);
            this.RspQryRouterInfoTopicCallbackData = [];
        }
    }

    this.OnRtnRouterInfoTopic = function (pRtnRouterInfo){ 
        if (pRtnRouterInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnRouterInfoTopic, pRtnRouterInfo);
        }
    }

    this.RspQryDiskIOTopicCallbackData = [];
    this.OnRspQryDiskIOTopic = function (pRspQryDiskIO, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryDiskIO instanceof Object) { 
            this.RspQryDiskIOTopicCallbackData.push( pRspQryDiskIO);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryDiskIOTopic, this.RspQryDiskIOTopicCallbackData);
            this.RspQryDiskIOTopicCallbackData = [];
        }
    }

    this.OnRtnDiskIOTopic = function (pRtnDiskIO){ 
        if (pRtnDiskIO instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnDiskIOTopic, pRtnDiskIO);
        }
    }

    this.RspQryStatInfoTopicCallbackData = [];
    this.OnRspQryStatInfoTopic = function (pRspQryStatInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryStatInfo instanceof Object) { 
            this.RspQryStatInfoTopicCallbackData.push( pRspQryStatInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryStatInfoTopic, this.RspQryStatInfoTopicCallbackData);
            this.RspQryStatInfoTopicCallbackData = [];
        }
    }

    this.OnRtnStatInfoTopic = function (pRtnStatInfo){ 
        if (pRtnStatInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnStatInfoTopic, pRtnStatInfo);
        }
    }

    this.RspQryTradeOrderRttCutLineTopicCallbackData = [];
    this.OnRspQryTradeOrderRttCutLineTopic = function (pRspQryTradeOrderRttCutLine, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryTradeOrderRttCutLine instanceof Object) { 
            this.RspQryTradeOrderRttCutLineTopicCallbackData.push( pRspQryTradeOrderRttCutLine);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryTradeOrderRttCutLineTopic, this.RspQryTradeOrderRttCutLineTopicCallbackData);
            this.RspQryTradeOrderRttCutLineTopicCallbackData = [];
        }
    }

    this.OnRtnTradeOrderRttCutLineTopic = function (pRtnTradeOrderRttCutLine){ 
        if (pRtnTradeOrderRttCutLine instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnTradeOrderRttCutLineTopic, pRtnTradeOrderRttCutLine);
        }
    }

    this.RspQryClientInfoTopicCallbackData = [];
    this.OnRspQryClientInfoTopic = function (pRspQryClientInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryClientInfo instanceof Object) { 
            this.RspQryClientInfoTopicCallbackData.push( pRspQryClientInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryClientInfoTopic, this.RspQryClientInfoTopicCallbackData);
            this.RspQryClientInfoTopicCallbackData = [];
        }
    }

    this.OnRtnClientInfoTopic = function (pRtnClientInfo){ 
        if (pRtnClientInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnClientInfoTopic, pRtnClientInfo);
        }
    }

    this.RspQryEventDescriptionTopicCallbackData = [];
    this.OnRspQryEventDescriptionTopic = function (pRspQryEventDescription, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryEventDescription instanceof Object) { 
            this.RspQryEventDescriptionTopicCallbackData.push( pRspQryEventDescription);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryEventDescriptionTopic, this.RspQryEventDescriptionTopicCallbackData);
            this.RspQryEventDescriptionTopicCallbackData = [];
        }
    }

    this.OnRtnEventDescriptionTopic = function (pRtnEventDescription){ 
        if (pRtnEventDescription instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnEventDescriptionTopic, pRtnEventDescription);
        }
    }

    this.RspQryFrontUniqueIDTopicCallbackData = [];
    this.OnRspQryFrontUniqueIDTopic = function (pRspQryFrontUniqueID, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFrontUniqueID instanceof Object) { 
            this.RspQryFrontUniqueIDTopicCallbackData.push( pRspQryFrontUniqueID);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFrontUniqueIDTopic, this.RspQryFrontUniqueIDTopicCallbackData);
            this.RspQryFrontUniqueIDTopicCallbackData = [];
        }
    }

    this.OnRtnFrontUniqueIDTopic = function (pRtnFrontUniqueID){ 
        if (pRtnFrontUniqueID instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFrontUniqueIDTopic, pRtnFrontUniqueID);
        }
    }

    this.RspQryNetPartyLinkAddrChangeTopicCallbackData = [];
    this.OnRspQryNetPartyLinkAddrChangeTopic = function (pRspQryNetPartyLinkAddrChange, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPartyLinkAddrChange instanceof Object) { 
            this.RspQryNetPartyLinkAddrChangeTopicCallbackData.push( pRspQryNetPartyLinkAddrChange);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPartyLinkAddrChangeTopic, this.RspQryNetPartyLinkAddrChangeTopicCallbackData);
            this.RspQryNetPartyLinkAddrChangeTopicCallbackData = [];
        }
    }

    this.OnRtnNetPartyLinkAddrChangeTopic = function (pRtnNetPartyLinkAddrChange){ 
        if (pRtnNetPartyLinkAddrChange instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPartyLinkAddrChangeTopic, pRtnNetPartyLinkAddrChange);
        }
    }

    this.RspQryNetDelPartyLinkInfoTopicCallbackData = [];
    this.OnRspQryNetDelPartyLinkInfoTopic = function (pRspQryNetDelPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDelPartyLinkInfo instanceof Object) { 
            this.RspQryNetDelPartyLinkInfoTopicCallbackData.push( pRspQryNetDelPartyLinkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDelPartyLinkInfoTopic, this.RspQryNetDelPartyLinkInfoTopicCallbackData);
            this.RspQryNetDelPartyLinkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetDelPartyLinkInfoTopic = function (pRtnNetDelPartyLinkInfo){ 
        if (pRtnNetDelPartyLinkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDelPartyLinkInfoTopic, pRtnNetDelPartyLinkInfo);
        }
    }

    this.RspQryPerformanceTopTopicCallbackData = [];
    this.OnRspQryPerformanceTopTopic = function (pRspQryPerformanceTop, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryPerformanceTop instanceof Object) { 
            this.RspQryPerformanceTopTopicCallbackData.push( pRspQryPerformanceTop);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryPerformanceTopTopic, this.RspQryPerformanceTopTopicCallbackData);
            this.RspQryPerformanceTopTopicCallbackData = [];
        }
    }

    this.OnRtnPerformanceTopTopic = function (pRtnPerformanceTop){ 
        if (pRtnPerformanceTop instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnPerformanceTopTopic, pRtnPerformanceTop);
        }
    }

    this.RspQryInstrumentStatusTopicCallbackData = [];
    this.OnRspQryInstrumentStatusTopic = function (pRspQryInstrumentStatus, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryInstrumentStatus instanceof Object) { 
            this.RspQryInstrumentStatusTopicCallbackData.push( pRspQryInstrumentStatus);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryInstrumentStatusTopic, this.RspQryInstrumentStatusTopicCallbackData);
            this.RspQryInstrumentStatusTopicCallbackData = [];
        }
    }

    this.OnRtnInstrumentStatusTopic = function (pRtnInstrumentStatus){ 
        if (pRtnInstrumentStatus instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnInstrumentStatusTopic, pRtnInstrumentStatus);
        }
    }

    this.RspQryCurrTradingSegmentAttrTopicCallbackData = [];
    this.OnRspQryCurrTradingSegmentAttrTopic = function (pRspQryCurrTradingSegmentAttr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryCurrTradingSegmentAttr instanceof Object) { 
            this.RspQryCurrTradingSegmentAttrTopicCallbackData.push( pRspQryCurrTradingSegmentAttr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryCurrTradingSegmentAttrTopic, this.RspQryCurrTradingSegmentAttrTopicCallbackData);
            this.RspQryCurrTradingSegmentAttrTopicCallbackData = [];
        }
    }

    this.OnRtnCurrTradingSegmentAttrTopic = function (pRtnCurrTradingSegmentAttr){ 
        if (pRtnCurrTradingSegmentAttr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnCurrTradingSegmentAttrTopic, pRtnCurrTradingSegmentAttr);
        }
    }

    this.RspQryNetAreaTopicCallbackData = [];
    this.OnRspQryNetAreaTopic = function (pRspQryNetArea, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetArea instanceof Object) { 
            this.RspQryNetAreaTopicCallbackData.push( pRspQryNetArea);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetAreaTopic, this.RspQryNetAreaTopicCallbackData);
            this.RspQryNetAreaTopicCallbackData = [];
        }
    }

    this.OnRtnNetAreaTopic = function (pRtnNetArea){ 
        if (pRtnNetArea instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetAreaTopic, pRtnNetArea);
        }
    }

    this.RspQryNetSubAreaTopicCallbackData = [];
    this.OnRspQryNetSubAreaTopic = function (pRspQryNetSubArea, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetSubArea instanceof Object) { 
            this.RspQryNetSubAreaTopicCallbackData.push( pRspQryNetSubArea);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetSubAreaTopic, this.RspQryNetSubAreaTopicCallbackData);
            this.RspQryNetSubAreaTopicCallbackData = [];
        }
    }

    this.OnRtnNetSubAreaTopic = function (pRtnNetSubArea){ 
        if (pRtnNetSubArea instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetSubAreaTopic, pRtnNetSubArea);
        }
    }

    this.RspQryNetSubAreaIPTopicCallbackData = [];
    this.OnRspQryNetSubAreaIPTopic = function (pRspQryNetSubAreaIP, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetSubAreaIP instanceof Object) { 
            this.RspQryNetSubAreaIPTopicCallbackData.push( pRspQryNetSubAreaIP);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetSubAreaIPTopic, this.RspQryNetSubAreaIPTopicCallbackData);
            this.RspQryNetSubAreaIPTopicCallbackData = [];
        }
    }

    this.OnRtnNetSubAreaIPTopic = function (pRtnNetSubAreaIP){ 
        if (pRtnNetSubAreaIP instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetSubAreaIPTopic, pRtnNetSubAreaIP);
        }
    }

    this.RspQryNetDeviceTopicCallbackData = [];
    this.OnRspQryNetDeviceTopic = function (pRspQryNetDevice, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDevice instanceof Object) { 
            this.RspQryNetDeviceTopicCallbackData.push( pRspQryNetDevice);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceTopic, this.RspQryNetDeviceTopicCallbackData);
            this.RspQryNetDeviceTopicCallbackData = [];
        }
    }

    this.OnRtnNetDeviceTopic = function (pRtnNetDevice){ 
        if (pRtnNetDevice instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDeviceTopic, pRtnNetDevice);
        }
    }

    this.RspQryNetDeviceDetectTopicCallbackData = [];
    this.OnRspQryNetDeviceDetectTopic = function (pRspQryNetDeviceDetect, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDeviceDetect instanceof Object) { 
            this.RspQryNetDeviceDetectTopicCallbackData.push( pRspQryNetDeviceDetect);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceDetectTopic, this.RspQryNetDeviceDetectTopicCallbackData);
            this.RspQryNetDeviceDetectTopicCallbackData = [];
        }
    }

    this.RspQryNetBuildingTopicCallbackData = [];
    this.OnRspQryNetBuildingTopic = function (pRspQryNetBuilding, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetBuilding instanceof Object) { 
            this.RspQryNetBuildingTopicCallbackData.push( pRspQryNetBuilding);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetBuildingTopic, this.RspQryNetBuildingTopicCallbackData);
            this.RspQryNetBuildingTopicCallbackData = [];
        }
    }

    this.OnRtnNetBuildingTopic = function (pRtnNetBuilding){ 
        if (pRtnNetBuilding instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetBuildingTopic, pRtnNetBuilding);
        }
    }

    this.RspQryNetRoomTopicCallbackData = [];
    this.OnRspQryNetRoomTopic = function (pRspQryNetRoom, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetRoom instanceof Object) { 
            this.RspQryNetRoomTopicCallbackData.push( pRspQryNetRoom);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetRoomTopic, this.RspQryNetRoomTopicCallbackData);
            this.RspQryNetRoomTopicCallbackData = [];
        }
    }

    this.OnRtnNetRoomTopic = function (pRtnNetRoom){ 
        if (pRtnNetRoom instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetRoomTopic, pRtnNetRoom);
        }
    }

    this.RspQryNetCabinetsTopicCallbackData = [];
    this.OnRspQryNetCabinetsTopic = function (pRspQryNetCabinets, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetCabinets instanceof Object) { 
            this.RspQryNetCabinetsTopicCallbackData.push( pRspQryNetCabinets);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetCabinetsTopic, this.RspQryNetCabinetsTopicCallbackData);
            this.RspQryNetCabinetsTopicCallbackData = [];
        }
    }

    this.OnRtnNetCabinetsTopic = function (pRtnNetCabinets){ 
        if (pRtnNetCabinets instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetCabinetsTopic, pRtnNetCabinets);
        }
    }

    this.RspQryNetOIDTopicCallbackData = [];
    this.OnRspQryNetOIDTopic = function (pRspQryNetOID, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetOID instanceof Object) { 
            this.RspQryNetOIDTopicCallbackData.push( pRspQryNetOID);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetOIDTopic, this.RspQryNetOIDTopicCallbackData);
            this.RspQryNetOIDTopicCallbackData = [];
        }
    }

    this.OnRtnNetOIDTopic = function (pRtnNetOID){ 
        if (pRtnNetOID instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetOIDTopic, pRtnNetOID);
        }
    }

    this.RspQryNetTimePolicyTopicCallbackData = [];
    this.OnRspQryNetTimePolicyTopic = function (pRspQryNetTimePolicy, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetTimePolicy instanceof Object) { 
            this.RspQryNetTimePolicyTopicCallbackData.push( pRspQryNetTimePolicy);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetTimePolicyTopic, this.RspQryNetTimePolicyTopicCallbackData);
            this.RspQryNetTimePolicyTopicCallbackData = [];
        }
    }

    this.OnRtnNetTimePolicyTopic = function (pRtnNetTimePolicy){ 
        if (pRtnNetTimePolicy instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetTimePolicyTopic, pRtnNetTimePolicy);
        }
    }

    this.RspQryNetGatherTaskTopicCallbackData = [];
    this.OnRspQryNetGatherTaskTopic = function (pRspQryNetGatherTask, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetGatherTask instanceof Object) { 
            this.RspQryNetGatherTaskTopicCallbackData.push( pRspQryNetGatherTask);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetGatherTaskTopic, this.RspQryNetGatherTaskTopicCallbackData);
            this.RspQryNetGatherTaskTopicCallbackData = [];
        }
    }

    this.OnRtnNetGatherTaskTopic = function (pRtnNetGatherTask){ 
        if (pRtnNetGatherTask instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetGatherTaskTopic, pRtnNetGatherTask);
        }
    }

    this.RspQryNetDeviceChgTopicCallbackData = [];
    this.OnRspQryNetDeviceChgTopic = function (pRspQryNetDeviceChg, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDeviceChg instanceof Object) { 
            this.RspQryNetDeviceChgTopicCallbackData.push( pRspQryNetDeviceChg);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceChgTopic, this.RspQryNetDeviceChgTopicCallbackData);
            this.RspQryNetDeviceChgTopicCallbackData = [];
        }
    }

    this.OnRtnNetDeviceChgTopic = function (pRtnNetDeviceChg){ 
        if (pRtnNetDeviceChg instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDeviceChgTopic, pRtnNetDeviceChg);
        }
    }

    this.RspQryNetDeviceTypeTopicCallbackData = [];
    this.OnRspQryNetDeviceTypeTopic = function (pRspQryNetDeviceType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDeviceType instanceof Object) { 
            this.RspQryNetDeviceTypeTopicCallbackData.push( pRspQryNetDeviceType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceTypeTopic, this.RspQryNetDeviceTypeTopicCallbackData);
            this.RspQryNetDeviceTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetDeviceTypeTopic = function (pRtnNetDeviceType){ 
        if (pRtnNetDeviceType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDeviceTypeTopic, pRtnNetDeviceType);
        }
    }

    this.RspQryNetDeviceCategoryTopicCallbackData = [];
    this.OnRspQryNetDeviceCategoryTopic = function (pRspQryNetDeviceCategory, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDeviceCategory instanceof Object) { 
            this.RspQryNetDeviceCategoryTopicCallbackData.push( pRspQryNetDeviceCategory);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDeviceCategoryTopic, this.RspQryNetDeviceCategoryTopicCallbackData);
            this.RspQryNetDeviceCategoryTopicCallbackData = [];
        }
    }

    this.OnRtnNetDeviceCategoryTopic = function (pRtnNetDeviceCategory){ 
        if (pRtnNetDeviceCategory instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDeviceCategoryTopic, pRtnNetDeviceCategory);
        }
    }

    this.RspQryNetManufactoryTopicCallbackData = [];
    this.OnRspQryNetManufactoryTopic = function (pRspQryNetManufactory, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetManufactory instanceof Object) { 
            this.RspQryNetManufactoryTopicCallbackData.push( pRspQryNetManufactory);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetManufactoryTopic, this.RspQryNetManufactoryTopicCallbackData);
            this.RspQryNetManufactoryTopicCallbackData = [];
        }
    }

    this.OnRtnNetManufactoryTopic = function (pRtnNetManufactory){ 
        if (pRtnNetManufactory instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetManufactoryTopic, pRtnNetManufactory);
        }
    }

    this.RspQryNetCommunityTopicCallbackData = [];
    this.OnRspQryNetCommunityTopic = function (pRspQryNetCommunity, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetCommunity instanceof Object) { 
            this.RspQryNetCommunityTopicCallbackData.push( pRspQryNetCommunity);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetCommunityTopic, this.RspQryNetCommunityTopicCallbackData);
            this.RspQryNetCommunityTopicCallbackData = [];
        }
    }

    this.OnRtnNetCommunityTopic = function (pRtnNetCommunity){ 
        if (pRtnNetCommunity instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetCommunityTopic, pRtnNetCommunity);
        }
    }

    this.RspQryNetPortTypeTopicCallbackData = [];
    this.OnRspQryNetPortTypeTopic = function (pRspQryNetPortType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPortType instanceof Object) { 
            this.RspQryNetPortTypeTopicCallbackData.push( pRspQryNetPortType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPortTypeTopic, this.RspQryNetPortTypeTopicCallbackData);
            this.RspQryNetPortTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetPortTypeTopic = function (pRtnNetPortType){ 
        if (pRtnNetPortType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPortTypeTopic, pRtnNetPortType);
        }
    }

    this.RspQryNetPartAccessSpotTopicCallbackData = [];
    this.OnRspQryNetPartAccessSpotTopic = function (pRspQryNetPartAccessSpot, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPartAccessSpot instanceof Object) { 
            this.RspQryNetPartAccessSpotTopicCallbackData.push( pRspQryNetPartAccessSpot);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPartAccessSpotTopic, this.RspQryNetPartAccessSpotTopicCallbackData);
            this.RspQryNetPartAccessSpotTopicCallbackData = [];
        }
    }

    this.OnRtnNetPartAccessSpotTopic = function (pRtnNetPartAccessSpot){ 
        if (pRtnNetPartAccessSpot instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPartAccessSpotTopic, pRtnNetPartAccessSpot);
        }
    }

    this.RspQryNetInterfaceTopicCallbackData = [];
    this.OnRspQryNetInterfaceTopic = function (pRspQryNetInterface, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetInterface instanceof Object) { 
            this.RspQryNetInterfaceTopicCallbackData.push( pRspQryNetInterface);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetInterfaceTopic, this.RspQryNetInterfaceTopicCallbackData);
            this.RspQryNetInterfaceTopicCallbackData = [];
        }
    }

    this.OnRtnNetInterfaceTopic = function (pRtnNetInterface){ 
        if (pRtnNetInterface instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetInterfaceTopic, pRtnNetInterface);
        }
    }

    this.RspQryNetGeneralOIDTopicCallbackData = [];
    this.OnRspQryNetGeneralOIDTopic = function (pRspQryNetGeneralOID, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetGeneralOID instanceof Object) { 
            this.RspQryNetGeneralOIDTopicCallbackData.push( pRspQryNetGeneralOID);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetGeneralOIDTopic, this.RspQryNetGeneralOIDTopicCallbackData);
            this.RspQryNetGeneralOIDTopicCallbackData = [];
        }
    }

    this.OnRtnNetGeneralOIDTopic = function (pRtnNetGeneralOID){ 
        if (pRtnNetGeneralOID instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetGeneralOIDTopic, pRtnNetGeneralOID);
        }
    }

    this.RspQryNetMonitorTypeTopicCallbackData = [];
    this.OnRspQryNetMonitorTypeTopic = function (pRspQryNetMonitorType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorType instanceof Object) { 
            this.RspQryNetMonitorTypeTopicCallbackData.push( pRspQryNetMonitorType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTypeTopic, this.RspQryNetMonitorTypeTopicCallbackData);
            this.RspQryNetMonitorTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTypeTopic = function (pRtnNetMonitorType){ 
        if (pRtnNetMonitorType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTypeTopic, pRtnNetMonitorType);
        }
    }

    this.RspQryNetMonitorAttrScopeTopicCallbackData = [];
    this.OnRspQryNetMonitorAttrScopeTopic = function (pRspQryNetMonitorAttrScope, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorAttrScope instanceof Object) { 
            this.RspQryNetMonitorAttrScopeTopicCallbackData.push( pRspQryNetMonitorAttrScope);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorAttrScopeTopic, this.RspQryNetMonitorAttrScopeTopicCallbackData);
            this.RspQryNetMonitorAttrScopeTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorAttrScopeTopic = function (pRtnNetMonitorAttrScope){ 
        if (pRtnNetMonitorAttrScope instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorAttrScopeTopic, pRtnNetMonitorAttrScope);
        }
    }

    this.RspQryNetMonitorAttrTypeTopicCallbackData = [];
    this.OnRspQryNetMonitorAttrTypeTopic = function (pRspQryNetMonitorAttrType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorAttrType instanceof Object) { 
            this.RspQryNetMonitorAttrTypeTopicCallbackData.push( pRspQryNetMonitorAttrType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorAttrTypeTopic, this.RspQryNetMonitorAttrTypeTopicCallbackData);
            this.RspQryNetMonitorAttrTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorAttrTypeTopic = function (pRtnNetMonitorAttrType){ 
        if (pRtnNetMonitorAttrType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorAttrTypeTopic, pRtnNetMonitorAttrType);
        }
    }

    this.RspQryNetMonitorObjectAttrTopicCallbackData = [];
    this.OnRspQryNetMonitorObjectAttrTopic = function (pRspQryNetMonitorObjectAttr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorObjectAttr instanceof Object) { 
            this.RspQryNetMonitorObjectAttrTopicCallbackData.push( pRspQryNetMonitorObjectAttr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorObjectAttrTopic, this.RspQryNetMonitorObjectAttrTopicCallbackData);
            this.RspQryNetMonitorObjectAttrTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorObjectAttrTopic = function (pRtnNetMonitorObjectAttr){ 
        if (pRtnNetMonitorObjectAttr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorObjectAttrTopic, pRtnNetMonitorObjectAttr);
        }
    }

    this.RspQryNetFuncAreaTopicCallbackData = [];
    this.OnRspQryNetFuncAreaTopic = function (pRspQryNetFuncArea, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetFuncArea instanceof Object) { 
            this.RspQryNetFuncAreaTopicCallbackData.push( pRspQryNetFuncArea);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetFuncAreaTopic, this.RspQryNetFuncAreaTopicCallbackData);
            this.RspQryNetFuncAreaTopicCallbackData = [];
        }
    }

    this.OnRtnNetFuncAreaTopic = function (pRtnNetFuncArea){ 
        if (pRtnNetFuncArea instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetFuncAreaTopic, pRtnNetFuncArea);
        }
    }

    this.RspQryNetMonitorCommandTypeTopicCallbackData = [];
    this.OnRspQryNetMonitorCommandTypeTopic = function (pRspQryNetMonitorCommandType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorCommandType instanceof Object) { 
            this.RspQryNetMonitorCommandTypeTopicCallbackData.push( pRspQryNetMonitorCommandType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorCommandTypeTopic, this.RspQryNetMonitorCommandTypeTopicCallbackData);
            this.RspQryNetMonitorCommandTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorCommandTypeTopic = function (pRtnNetMonitorCommandType){ 
        if (pRtnNetMonitorCommandType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorCommandTypeTopic, pRtnNetMonitorCommandType);
        }
    }

    this.RspQryNetMonitorActionGroupTopicCallbackData = [];
    this.OnRspQryNetMonitorActionGroupTopic = function (pRspQryNetMonitorActionGroup, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorActionGroup instanceof Object) { 
            this.RspQryNetMonitorActionGroupTopicCallbackData.push( pRspQryNetMonitorActionGroup);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorActionGroupTopic, this.RspQryNetMonitorActionGroupTopicCallbackData);
            this.RspQryNetMonitorActionGroupTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorActionGroupTopic = function (pRtnNetMonitorActionGroup){ 
        if (pRtnNetMonitorActionGroup instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorActionGroupTopic, pRtnNetMonitorActionGroup);
        }
    }

    this.RspQryNetMonitorDeviceGroupTopicCallbackData = [];
    this.OnRspQryNetMonitorDeviceGroupTopic = function (pRspQryNetMonitorDeviceGroup, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorDeviceGroup instanceof Object) { 
            this.RspQryNetMonitorDeviceGroupTopicCallbackData.push( pRspQryNetMonitorDeviceGroup);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorDeviceGroupTopic, this.RspQryNetMonitorDeviceGroupTopicCallbackData);
            this.RspQryNetMonitorDeviceGroupTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorDeviceGroupTopic = function (pRtnNetMonitorDeviceGroup){ 
        if (pRtnNetMonitorDeviceGroup instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorDeviceGroupTopic, pRtnNetMonitorDeviceGroup);
        }
    }

    this.RspQryNetMonitorTaskInfoTopicCallbackData = [];
    this.OnRspQryNetMonitorTaskInfoTopic = function (pRspQryNetMonitorTaskInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorTaskInfo instanceof Object) { 
            this.RspQryNetMonitorTaskInfoTopicCallbackData.push( pRspQryNetMonitorTaskInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTaskInfoTopic, this.RspQryNetMonitorTaskInfoTopicCallbackData);
            this.RspQryNetMonitorTaskInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTaskInfoTopic = function (pRtnNetMonitorTaskInfo){ 
        if (pRtnNetMonitorTaskInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTaskInfoTopic, pRtnNetMonitorTaskInfo);
        }
    }

    this.RspQryNetMonitorTaskResultTopicCallbackData = [];
    this.OnRspQryNetMonitorTaskResultTopic = function (pRspQryNetMonitorTaskResult, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorTaskResult instanceof Object) { 
            this.RspQryNetMonitorTaskResultTopicCallbackData.push( pRspQryNetMonitorTaskResult);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTaskResultTopic, this.RspQryNetMonitorTaskResultTopicCallbackData);
            this.RspQryNetMonitorTaskResultTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTaskResultTopic = function (pRtnNetMonitorTaskResult){ 
        if (pRtnNetMonitorTaskResult instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTaskResultTopic, pRtnNetMonitorTaskResult);
        }
    }

    this.RspQryNetMonitorTaskObjectSetTopicCallbackData = [];
    this.OnRspQryNetMonitorTaskObjectSetTopic = function (pRspQryNetMonitorTaskObjectSet, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorTaskObjectSet instanceof Object) { 
            this.RspQryNetMonitorTaskObjectSetTopicCallbackData.push( pRspQryNetMonitorTaskObjectSet);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTaskObjectSetTopic, this.RspQryNetMonitorTaskObjectSetTopicCallbackData);
            this.RspQryNetMonitorTaskObjectSetTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTaskObjectSetTopic = function (pRtnNetMonitorTaskObjectSet){ 
        if (pRtnNetMonitorTaskObjectSet instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTaskObjectSetTopic, pRtnNetMonitorTaskObjectSet);
        }
    }

    this.RspQryNetPartyLinkInfoTopicCallbackData = [];
    this.OnRspQryNetPartyLinkInfoTopic = function (pRspQryNetPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPartyLinkInfo instanceof Object) { 
            this.RspQryNetPartyLinkInfoTopicCallbackData.push( pRspQryNetPartyLinkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPartyLinkInfoTopic, this.RspQryNetPartyLinkInfoTopicCallbackData);
            this.RspQryNetPartyLinkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetPartyLinkInfoTopic = function (pRtnNetPartyLinkInfo){ 
        if (pRtnNetPartyLinkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPartyLinkInfoTopic, pRtnNetPartyLinkInfo);
        }
    }

    this.RspQryNetMonitorActionAttrTopicCallbackData = [];
    this.OnRspQryNetMonitorActionAttrTopic = function (pRspQryNetMonitorActionAttr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorActionAttr instanceof Object) { 
            this.RspQryNetMonitorActionAttrTopicCallbackData.push( pRspQryNetMonitorActionAttr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorActionAttrTopic, this.RspQryNetMonitorActionAttrTopicCallbackData);
            this.RspQryNetMonitorActionAttrTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorActionAttrTopic = function (pRtnNetMonitorActionAttr){ 
        if (pRtnNetMonitorActionAttr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorActionAttrTopic, pRtnNetMonitorActionAttr);
        }
    }

    this.RspQryNetModuleTopicCallbackData = [];
    this.OnRspQryNetModuleTopic = function (pRspQryNetModule, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetModule instanceof Object) { 
            this.RspQryNetModuleTopicCallbackData.push( pRspQryNetModule);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetModuleTopic, this.RspQryNetModuleTopicCallbackData);
            this.RspQryNetModuleTopicCallbackData = [];
        }
    }

    this.OnRtnNetModuleTopic = function (pRtnNetModule){ 
        if (pRtnNetModule instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetModuleTopic, pRtnNetModule);
        }
    }

    this.RspQryNetEventExprTopicCallbackData = [];
    this.OnRspQryNetEventExprTopic = function (pRspQryNetEventExpr, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetEventExpr instanceof Object) { 
            this.RspQryNetEventExprTopicCallbackData.push( pRspQryNetEventExpr);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetEventExprTopic, this.RspQryNetEventExprTopicCallbackData);
            this.RspQryNetEventExprTopicCallbackData = [];
        }
    }

    this.OnRtnNetEventExprTopic = function (pRtnNetEventExpr){ 
        if (pRtnNetEventExpr instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetEventExprTopic, pRtnNetEventExpr);
        }
    }

    this.RspQryNetEventTypeTopicCallbackData = [];
    this.OnRspQryNetEventTypeTopic = function (pRspQryNetEventType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetEventType instanceof Object) { 
            this.RspQryNetEventTypeTopicCallbackData.push( pRspQryNetEventType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetEventTypeTopic, this.RspQryNetEventTypeTopicCallbackData);
            this.RspQryNetEventTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetEventTypeTopic = function (pRtnNetEventType){ 
        if (pRtnNetEventType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetEventTypeTopic, pRtnNetEventType);
        }
    }

    this.RspQryNetSubEventTypeTopicCallbackData = [];
    this.OnRspQryNetSubEventTypeTopic = function (pRspQryNetSubEventType, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetSubEventType instanceof Object) { 
            this.RspQryNetSubEventTypeTopicCallbackData.push( pRspQryNetSubEventType);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetSubEventTypeTopic, this.RspQryNetSubEventTypeTopicCallbackData);
            this.RspQryNetSubEventTypeTopicCallbackData = [];
        }
    }

    this.OnRtnNetSubEventTypeTopic = function (pRtnNetSubEventType){ 
        if (pRtnNetSubEventType instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetSubEventTypeTopic, pRtnNetSubEventType);
        }
    }

    this.RspQryNetEventLevelTopicCallbackData = [];
    this.OnRspQryNetEventLevelTopic = function (pRspQryNetEventLevel, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetEventLevel instanceof Object) { 
            this.RspQryNetEventLevelTopicCallbackData.push( pRspQryNetEventLevel);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetEventLevelTopic, this.RspQryNetEventLevelTopicCallbackData);
            this.RspQryNetEventLevelTopicCallbackData = [];
        }
    }

    this.OnRtnNetEventLevelTopic = function (pRtnNetEventLevel){ 
        if (pRtnNetEventLevel instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetEventLevelTopic, pRtnNetEventLevel);
        }
    }

    this.RspQryNetMonitorTaskStatusResultTopicCallbackData = [];
    this.OnRspQryNetMonitorTaskStatusResultTopic = function (pRspQryNetMonitorTaskStatusResult, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorTaskStatusResult instanceof Object) { 
            this.RspQryNetMonitorTaskStatusResultTopicCallbackData.push( pRspQryNetMonitorTaskStatusResult);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTaskStatusResultTopic, this.RspQryNetMonitorTaskStatusResultTopicCallbackData);
            this.RspQryNetMonitorTaskStatusResultTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTaskStatusResultTopic = function (pRtnNetMonitorTaskStatusResult){ 
        if (pRtnNetMonitorTaskStatusResult instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTaskStatusResultTopic, pRtnNetMonitorTaskStatusResult);
        }
    }

    this.RspQryNetCfgFileTopicCallbackData = [];
    this.OnRspQryNetCfgFileTopic = function (pRspQryNetCfgFile, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetCfgFile instanceof Object) { 
            this.RspQryNetCfgFileTopicCallbackData.push( pRspQryNetCfgFile);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetCfgFileTopic, this.RspQryNetCfgFileTopicCallbackData);
            this.RspQryNetCfgFileTopicCallbackData = [];
        }
    }

    this.OnRtnNetCfgFileTopic = function (pRtnNetCfgFile){ 
        if (pRtnNetCfgFile instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetCfgFileTopic, pRtnNetCfgFile);
        }
    }

    this.RspQryNetMonitorDeviceTaskTopicCallbackData = [];
    this.OnRspQryNetMonitorDeviceTaskTopic = function (pRspQryNetMonitorDeviceTask, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorDeviceTask instanceof Object) { 
            this.RspQryNetMonitorDeviceTaskTopicCallbackData.push( pRspQryNetMonitorDeviceTask);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorDeviceTaskTopic, this.RspQryNetMonitorDeviceTaskTopicCallbackData);
            this.RspQryNetMonitorDeviceTaskTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorDeviceTaskTopic = function (pRtnNetMonitorDeviceTask){ 
        if (pRtnNetMonitorDeviceTask instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorDeviceTaskTopic, pRtnNetMonitorDeviceTask);
        }
    }

    this.RspQryNetMonitorTaskInstAttrsTopicCallbackData = [];
    this.OnRspQryNetMonitorTaskInstAttrsTopic = function (pRspQryNetMonitorTaskInstAttrs, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMonitorTaskInstAttrs instanceof Object) { 
            this.RspQryNetMonitorTaskInstAttrsTopicCallbackData.push( pRspQryNetMonitorTaskInstAttrs);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMonitorTaskInstAttrsTopic, this.RspQryNetMonitorTaskInstAttrsTopicCallbackData);
            this.RspQryNetMonitorTaskInstAttrsTopicCallbackData = [];
        }
    }

    this.OnRtnNetMonitorTaskInstAttrsTopic = function (pRtnNetMonitorTaskInstAttrs){ 
        if (pRtnNetMonitorTaskInstAttrs instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMonitorTaskInstAttrsTopic, pRtnNetMonitorTaskInstAttrs);
        }
    }

    this.RspQryFileGeneralOperTopicCallbackData = [];
    this.OnRspQryFileGeneralOperTopic = function (pRspQryFileGeneralOper, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryFileGeneralOper instanceof Object) { 
            this.RspQryFileGeneralOperTopicCallbackData.push( pRspQryFileGeneralOper);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryFileGeneralOperTopic, this.RspQryFileGeneralOperTopicCallbackData);
            this.RspQryFileGeneralOperTopicCallbackData = [];
        }
    }

    this.OnRtnFileGeneralOperTopic = function (pRtnFileGeneralOper){ 
        if (pRtnFileGeneralOper instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnFileGeneralOperTopic, pRtnFileGeneralOper);
        }
    }

    this.RspQryNetBaseLineTopicCallbackData = [];
    this.OnRspQryNetBaseLineTopic = function (pRspQryNetBaseLine, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetBaseLine instanceof Object) { 
            this.RspQryNetBaseLineTopicCallbackData.push( pRspQryNetBaseLine);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetBaseLineTopic, this.RspQryNetBaseLineTopicCallbackData);
            this.RspQryNetBaseLineTopicCallbackData = [];
        }
    }

    this.OnRtnNetBaseLineTopic = function (pRtnNetBaseLine){ 
        if (pRtnNetBaseLine instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetBaseLineTopic, pRtnNetBaseLine);
        }
    }

    this.RspQryNetBaseLineTaskTopicCallbackData = [];
    this.OnRspQryNetBaseLineTaskTopic = function (pRspQryNetBaseLineTask, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetBaseLineTask instanceof Object) { 
            this.RspQryNetBaseLineTaskTopicCallbackData.push( pRspQryNetBaseLineTask);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetBaseLineTaskTopic, this.RspQryNetBaseLineTaskTopicCallbackData);
            this.RspQryNetBaseLineTaskTopicCallbackData = [];
        }
    }

    this.OnRtnNetBaseLineTaskTopic = function (pRtnNetBaseLineTask){ 
        if (pRtnNetBaseLineTask instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetBaseLineTaskTopic, pRtnNetBaseLineTask);
        }
    }

    this.RspQryNetBaseLineResultTopicCallbackData = [];
    this.OnRspQryNetBaseLineResultTopic = function (pRspQryNetBaseLineResult, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetBaseLineResult instanceof Object) { 
            this.RspQryNetBaseLineResultTopicCallbackData.push( pRspQryNetBaseLineResult);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetBaseLineResultTopic, this.RspQryNetBaseLineResultTopicCallbackData);
            this.RspQryNetBaseLineResultTopicCallbackData = [];
        }
    }

    this.OnRtnNetBaseLineResultTopic = function (pRtnNetBaseLineResult){ 
        if (pRtnNetBaseLineResult instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetBaseLineResultTopic, pRtnNetBaseLineResult);
        }
    }

    this.RspQryNetPartyLinkStatusInfoTopicCallbackData = [];
    this.OnRspQryNetPartyLinkStatusInfoTopic = function (pRspQryNetPartyLinkStatusInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPartyLinkStatusInfo instanceof Object) { 
            this.RspQryNetPartyLinkStatusInfoTopicCallbackData.push( pRspQryNetPartyLinkStatusInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPartyLinkStatusInfoTopic, this.RspQryNetPartyLinkStatusInfoTopicCallbackData);
            this.RspQryNetPartyLinkStatusInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetPartyLinkStatusInfoTopic = function (pRtnNetPartyLinkStatusInfo){ 
        if (pRtnNetPartyLinkStatusInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPartyLinkStatusInfoTopic, pRtnNetPartyLinkStatusInfo);
        }
    }

    this.RspQryNetMemberSDHLineInfoTopicCallbackData = [];
    this.OnRspQryNetMemberSDHLineInfoTopic = function (pRspQryNetMemberSDHLineInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetMemberSDHLineInfo instanceof Object) { 
            this.RspQryNetMemberSDHLineInfoTopicCallbackData.push( pRspQryNetMemberSDHLineInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetMemberSDHLineInfoTopic, this.RspQryNetMemberSDHLineInfoTopicCallbackData);
            this.RspQryNetMemberSDHLineInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetMemberSDHLineInfoTopic = function (pRtnNetMemberSDHLineInfo){ 
        if (pRtnNetMemberSDHLineInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetMemberSDHLineInfoTopic, pRtnNetMemberSDHLineInfo);
        }
    }

    this.RspQryNetDDNLinkInfoTopicCallbackData = [];
    this.OnRspQryNetDDNLinkInfoTopic = function (pRspQryNetDDNLinkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetDDNLinkInfo instanceof Object) { 
            this.RspQryNetDDNLinkInfoTopicCallbackData.push( pRspQryNetDDNLinkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetDDNLinkInfoTopic, this.RspQryNetDDNLinkInfoTopicCallbackData);
            this.RspQryNetDDNLinkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetDDNLinkInfoTopic = function (pRtnNetDDNLinkInfo){ 
        if (pRtnNetDDNLinkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetDDNLinkInfoTopic, pRtnNetDDNLinkInfo);
        }
    }

    this.RspQryNetPseudMemberLinkInfoTopicCallbackData = [];
    this.OnRspQryNetPseudMemberLinkInfoTopic = function (pRspQryNetPseudMemberLinkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPseudMemberLinkInfo instanceof Object) { 
            this.RspQryNetPseudMemberLinkInfoTopicCallbackData.push( pRspQryNetPseudMemberLinkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPseudMemberLinkInfoTopic, this.RspQryNetPseudMemberLinkInfoTopicCallbackData);
            this.RspQryNetPseudMemberLinkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetPseudMemberLinkInfoTopic = function (pRtnNetPseudMemberLinkInfo){ 
        if (pRtnNetPseudMemberLinkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPseudMemberLinkInfoTopic, pRtnNetPseudMemberLinkInfo);
        }
    }

    this.RspQryOuterDeviceInfTopicCallbackData = [];
    this.OnRspQryOuterDeviceInfTopic = function (pRspQryOuterDeviceInf, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryOuterDeviceInf instanceof Object) { 
            this.RspQryOuterDeviceInfTopicCallbackData.push( pRspQryOuterDeviceInf);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryOuterDeviceInfTopic, this.RspQryOuterDeviceInfTopicCallbackData);
            this.RspQryOuterDeviceInfTopicCallbackData = [];
        }
    }

    this.OnRtnNetOuterDeviceInfTopic = function (pRtnNetOuterDeviceInf){ 
        if (pRtnNetOuterDeviceInf instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetOuterDeviceInfTopic, pRtnNetOuterDeviceInf);
        }
    }

    this.RspQryNetLocalPingResultInfoTopicCallbackData = [];
    this.OnRspQryNetLocalPingResultInfoTopic = function (pRspQryNetLocalPingResultInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetLocalPingResultInfo instanceof Object) { 
            this.RspQryNetLocalPingResultInfoTopicCallbackData.push( pRspQryNetLocalPingResultInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetLocalPingResultInfoTopic, this.RspQryNetLocalPingResultInfoTopicCallbackData);
            this.RspQryNetLocalPingResultInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetLocalPingResultInfoTopic = function (pRtnNetLocalPingResultInfo){ 
        if (pRtnNetLocalPingResultInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetLocalPingResultInfoTopic, pRtnNetLocalPingResultInfo);
        }
    }

    this.RspQryNetRomotePingResultInfoTopicCallbackData = [];
    this.OnRspQryNetRomotePingResultInfoTopic = function (pRspQryNetRomotePingResultInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetRomotePingResultInfo instanceof Object) { 
            this.RspQryNetRomotePingResultInfoTopicCallbackData.push( pRspQryNetRomotePingResultInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetRomotePingResultInfoTopic, this.RspQryNetRomotePingResultInfoTopicCallbackData);
            this.RspQryNetRomotePingResultInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetRomotePingResultInfoTopic = function (pRtnNetRomotePingResultInfo){ 
        if (pRtnNetRomotePingResultInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetRomotePingResultInfoTopic, pRtnNetRomotePingResultInfo);
        }
    }

    this.OnRtnMonitorTopProcessInfo = function (pRtnMonitorTopProcessInfo){ 
        if (pRtnMonitorTopProcessInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMonitorTopProcessInfo, pRtnMonitorTopProcessInfo);
        }
    }

    this.RspQrySysInternalTopologyTopicCallbackData = [];
    this.OnRspQrySysInternalTopologyTopic = function (pRspQrySysInternalTopology, pRspInfo, nRequestID, bIsLast) {
        if (pRspQrySysInternalTopology instanceof Object) { 
            this.RspQrySysInternalTopologyTopicCallbackData.push( pRspQrySysInternalTopology);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQrySysInternalTopologyTopic, this.RspQrySysInternalTopologyTopicCallbackData);
            this.RspQrySysInternalTopologyTopicCallbackData = [];
        }
    }

    this.OnRtnSysInternalTopologyTopic = function (pRtnSysInternalTopology){ 
        if (pRtnSysInternalTopology instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnSysInternalTopologyTopic, pRtnSysInternalTopology);
        }
    }

    this.RspQryMemberLinkCostTopicCallbackData = [];
    this.OnRspQryMemberLinkCostTopic = function (pRspQryMemberLinkCost, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryMemberLinkCost instanceof Object) { 
            this.RspQryMemberLinkCostTopicCallbackData.push( pRspQryMemberLinkCost);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryMemberLinkCostTopic, this.RspQryMemberLinkCostTopicCallbackData);
            this.RspQryMemberLinkCostTopicCallbackData = [];
        }
    }

    this.OnRtnMemberLinkCostTopic = function (pRtnMemberLinkCost){ 
        if (pRtnMemberLinkCost instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnMemberLinkCostTopic, pRtnMemberLinkCost);
        }
    }

    this.RspQryNetPartylinkMonthlyRentTopicCallbackData = [];
    this.OnRspQryNetPartylinkMonthlyRentTopic = function (pRspQryNetPartylinkMonthlyRent, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetPartylinkMonthlyRent instanceof Object) { 
            this.RspQryNetPartylinkMonthlyRentTopicCallbackData.push( pRspQryNetPartylinkMonthlyRent);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetPartylinkMonthlyRentTopic, this.RspQryNetPartylinkMonthlyRentTopicCallbackData);
            this.RspQryNetPartylinkMonthlyRentTopicCallbackData = [];
        }
    }

    this.OnRtnNetPartylinkMonthlyRentTopic = function (pRtnNetPartylinkMonthlyRent){ 
        if (pRtnNetPartylinkMonthlyRent instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetPartylinkMonthlyRentTopic, pRtnNetPartylinkMonthlyRent);
        }
    }

    this.RspQryNetNonPartyLinkInfoTopicCallbackData = [];
    this.OnRspQryNetNonPartyLinkInfoTopic = function (pRspQryNetNonPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        if (pRspQryNetNonPartyLinkInfo instanceof Object) { 
            this.RspQryNetNonPartyLinkInfoTopicCallbackData.push( pRspQryNetNonPartyLinkInfo);
        }
        if (true === bIsLast) {
            this.user.socket.emit(EVENTS.RspQryNetNonPartyLinkInfoTopic, this.RspQryNetNonPartyLinkInfoTopicCallbackData);
            this.RspQryNetNonPartyLinkInfoTopicCallbackData = [];
        }
    }

    this.OnRtnNetNonPartyLinkInfoTopic = function (pRtnNetNonPartyLinkInfo){ 
        if (pRtnNetNonPartyLinkInfo instanceof Object) { 
            this.user.socket.emit(EVENTS.RtnNetNonPartyLinkInfoTopic, pRtnNetNonPartyLinkInfo);
        }
    }

}

exports.Spi = Spi;
