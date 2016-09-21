var spawn        = require('child_process').spawn;
var fs           = require ('fs');
var path         = require ('path');

var rspUserLoginCallNumb  = 1;
var rspMonitorObjCallNumb = 0;
var rtnObjectAttrCallNumb = 0;

var g_output_info = "";
var g_RtnObjectAttrTopic_spi_callbackNumb = 0;
var g_startTime = 0;
var g_endTime = 0;

var g_sec = 1
var g_min = 1
var g_stopusec = g_sec * g_min * 1000;

var g_testTimeIndex = 0;
var g_sec_array = [1,5,30,60,60,60,60];
var g_min_array = [1,1,1, 1, 5, 30,60];
var test_numb = 4;

var g_reqNumb = 1;
var g_rtn_over = false;

var g_sec_rtnSendNumber = 50;
var g_sec_rtnSendFreq = 1000;
var g_rtn_callback_onesec = g_sec_rtnSendNumber * g_sec_rtnSendFreq;

var testfileName = path.join (__dirname, './test-com-redhat-js-'+ g_rtn_callback_onesec +'.txt');

var g_curDate = "";
var g_stop = false;

var GetCurrTime = function() {
  myDate = new Date()
  return myDate;
}

var resetReqQrySubscriber = function() {
  if (g_reqNumb ==  6)
  {
    g_testTimeIndex++;

    if (g_testTimeIndex >= test_numb)
    {
      process.exit(0);
    }

    g_sec = g_sec_array[g_testTimeIndex];
    g_min = g_min_array[g_testTimeIndex];
    g_stopusec = g_sec * g_min * 1000;

    g_output_info = "\n----------- Reset Test Time! -----------" + '\n';
    g_output_info += "g_sec: " + g_sec + "    ";
    g_output_info += "g_min: " + g_min + '\n';
    g_output_info += "g_testTimeIndex:  " + g_testTimeIndex + '\n';

    fs.appendFileSync(testfileName, g_output_info);
    console.log (g_output_info);
    g_reqNumb = 1;
  }

  g_curDate = GetCurrTime();
  g_startTime = g_curDate.getTime();
  g_output_info = '\n' + 'StartTime:    ' + g_curDate + '\n';
  fs.appendFileSync (testfileName,  g_output_info);
  console.log (g_output_info);

  g_rtn_over = false;
  g_RtnObjectAttrTopic_spi_callbackNumb = 0;
}

var Spi = function(){

    this.user = {};

    this.HelloSpi = function() {
        console.log("Hello Spi: " + this.user);
    }

    this.OnFrontConnected = function() {

            var outputStr = '\n++++++++++++ JS FrontConnected START! +++++++++++++\n';

            // outputStr += '\nUserID:                   ' + this.user.loginField[0].UserID + "\n\n";

            // for (var i = 0; i < this.user.loginReqNumbers; ++i) {
            //     console.log("ReqQrySysUserLoginTopic "+ i + "  result:"
            //                         + this.user.userApi.ReqQrySysUserLoginTopic(this.user.loginField[i], 1) + "\n");
            // }

            for (var i = 0; i < this.user.ReqQrySubscriberNumbers; ++i) {
                console.log("ReqQrySubscriberTopic "+ i + "  result:"
                             + this.user.userApi.ReqQrySubscriberTopic(this.user.reqQrySubscriberData, 1) + "\n");

                 g_curDate = GetCurrTime();
                 g_startTime = g_curDate.getTime();
                 g_output_info = '\n*******************  Test Start *****************' + '\n'
                               + "g_rtn_callback_onesec: " + g_rtn_callback_onesec + "\n\n"
                               + '\n' + 'StartTime:     ' + g_curDate + '\n';
                 fs.appendFileSync (testfileName, g_output_info);
                 console.log (g_output_info);
            }

            outputStr += '++++++++++++ JS FrontConnected END! +++++++++++++\n';
            // console.log(outputStr);
    }

    this.OnRspQrySysUserLoginTopic = function(pRspQrySysUserLogin,pRspInfo,nRequestID,bIsLast) {
         var outputStr = "\n++++++++++++++++ JS OnRspQrySysUserLoginTopic: START! ++++++++++++++++++\n";
         outputStr += 'UserID:                     ' + this.user.loginField[0].UserID + "\n";
			 	if (pRspQrySysUserLogin instanceof Object) {
		      outputStr += "LoginTime :                 " + pRspQrySysUserLogin.LoginTime.toString() + "\n"
					           + "UserID :                    " + pRspQrySysUserLogin.UserID.toString() + "\n"
					           + "Privilege :                 " + pRspQrySysUserLogin.Privilege.toString() + "\n"
					           + "TradingDay :                " + pRspQrySysUserLogin.TradingDay.toString() + "\n"
					           + "VersionFlag :               " + pRspQrySysUserLogin.VersionFlag.toString() + "\n";

				} else {
		            outputStr += "pRspQrySysUserLogin is NULL!\n";
		    }

            for (var i = 0; i < this.user.ReqQrySubscriberNumbers; ++i) {
                console.log("ReqQrySubscriberTopic "+ i + "  result:"
                             + this.user.userApi.ReqQrySubscriberTopic(this.user.reqQrySubscriberData, 1) + "\n");
            }

            for (var i = 0; i < this.user.monitorObjectReqNumbers; ++i) {
                console.log("ReqQryMonitorObjectTopic "+ i + "  result:"
                             + this.user.userApi.ReqQryMonitorObjectTopic(this.user.monitorObjectField, 1) + "\n");
            }

            outputStr += "bIsLastNew :                " + bIsLast + "\n";
            outputStr += "rspCallNumb:                " + rspUserLoginCallNumb + "\n";
            outputStr += "++++++++++++++++ JS OnRspQrySysUserLoginTopic: END! ++++++++++++++++++" + "\n";
            rspUserLoginCallNumb++;
            console.log(outputStr);
	  }

    this.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
        rspMonitorObjCallNumb++;
        var outputStr =  "\n************ JS::OnRspQryMonitorObjectTopic: START! ***********\n";
        outputStr += 'UserID:                  ' + this.user.loginField[0].UserID + "\n";
        if (pRspQryMonitorObject instanceof Object) {
            outputStr += "ObjectID :               " + pRspQryMonitorObject.ObjectID.toString() + "\n"
                       + "ObjectName :             " + pRspQryMonitorObject.ObjectName.toString() + "\n"
                       + "WarningActive :          " + pRspQryMonitorObject.WarningActive.toString() + "\n";
        } else {
            outputStr += "pRspQryMonitorObject is NULL;\n";
        }

        outputStr += "bIsLast:                 " + bIsLast.toString() + "\n";
        outputStr += "rspMonitorObjCallNumb:   " + rspMonitorObjCallNumb + "\n";
        outputStr += "************ JS::OnRspQryMonitorObjectTopic: END! *********** \n";

        if (bIsLast === true) {
            console.log (outputStr);
        }

    }

    this.OnRspQrySysUserRegisterTopic = function (pRspQrySysUserRegister, pRspInfo, nRequestID, bIsLast) {
        var outputStr = "\n************ JS::OnRspQrySysUserRegisterTopic: START! ***********\n";

        if (pRspQrySysUserRegister instanceof Object) {
            outputStr += "UserID:                               " + pRspQrySysUserRegister.UserID.toString() + "\n"
                       + "Privilege:                            " + pRspQrySysUserRegister.Privilege.toString() + "\n";
        } else {
            outputStr += "pRspQrySysUserRegister is NULL!\n";
        }

        outputStr += "bIsLast in JS is:                     " + bIsLast.toString() + "\n";
        outputStr += "************ JS::OnRspQrySysUserRegisterTopic: END! ***********\n"

        console.log(outputStr);
        this.OnRspQrySysUserRegisterTopicCallTime++;

    }

    // this.OnRtnObjectAttrTopic = function (pRtnObjectAttr) {
    //     var outputStr = "\n************ JS::OnRtnObjectAttrTopic: START! ***********\n";
    //     ++rtnObjectAttrCallNumb;
    //     if (pRtnObjectAttr instanceof Object) {
    //         outputStr +=  "ObjectID:                " + pRtnObjectAttr.ObjectID + "\n"
    //                     + "AttrType:                " + pRtnObjectAttr.AttrType + "\n"
    //                     + "MonDate:                 " + pRtnObjectAttr.MonDate + "\n"
    //                     + "MonTime:                 " + pRtnObjectAttr.MonTime + "\n"
    //                     + "ValueType:               " + pRtnObjectAttr.ValueType + "\n"
    //                     + "AttrValue:               " + pRtnObjectAttr.AttrValue + "\n"
    //     } else {
    //         outputStr += "pRtnObjectAttr:          NULL!\n";
    //     }
    //     outputStr += "rtnObjectAttrCallNumb:   " + rtnObjectAttrCallNumb + "\n";
    //     outputStr += "************ JS::OnRtnObjectAttrTopic: END! *********** \n";
    //
    //     console.log(outputStr);
    // }

    this.OnRtnObjectAttrTopic = function (pRtnObjectAttr) {
      if (g_rtn_over === true) return

      ++g_RtnObjectAttrTopic_spi_callbackNumb;
      g_curDate = GetCurrTime();
      if ((g_curDate.getTime() - g_startTime) > g_stopusec)
      {
        g_output_info =  'TestTime :     ' + g_stopusec/1000 + 's\n'
        g_output_info += 'SumCallbkNumb: ' + g_RtnObjectAttrTopic_spi_callbackNumb + '\n'
        g_output_info += 'AveCallbkNumb: ' + g_RtnObjectAttrTopic_spi_callbackNumb / (g_stopusec/1000) + '\n'
        g_output_info += 'BandWidth:     ' + g_RtnObjectAttrTopic_spi_callbackNumb * 432 / g_stopusec * 1000 / 1024/1024 + 'M/s\n'
        g_output_info += 'g_reqNumb:     ' + g_reqNumb++ + '\n';
        g_output_info += 'EndTime:       ' + g_curDate + '\n';

        fs.appendFileSync (testfileName, g_output_info + '\n');
        console.log (g_output_info);

        g_rtn_over = true;
        resetReqQrySubscriber();
      }

    }
};

exports.Spi = Spi;
