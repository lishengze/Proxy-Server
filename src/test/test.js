// var reqFuncName = "ReqQryNetMemberSDHLineInfoTopic");
// var kernelFuncName = reqFuncName.substring(6, reqFuncName.length - 5));
// console.log (kernelFuncName));

// var myDate = new Date();
// console.log(myDate.getYear());        //获取当前年份(2位)
// console.log(myDate.getFullYear());    //获取完整的年份(4位,1970-????)
// console.log(myDate.getMonth());           //获取当前月份(0-11,0代表1月)
// console.log(myDate.getDate());            //获取当前日(1-31)
// console.log(myDate.getDay());             //获取当前星期X(0-6,0代表星期天)
// console.log(myDate.getTime());            //获取当前时间(从1970.1.1开始的毫秒数)
// console.log(myDate.getHours());           //获取当前小时数(0-23)
// console.log(myDate.getMinutes());         //获取当前分钟数(0-59)
// console.log(myDate.getSeconds());         //获取当前秒数(0-59)
// console.log(myDate.getMilliseconds());    //获取当前毫秒数(0-999)
// console.log(myDate.toLocaleDateString());     //获取当前日期

// var mytime = myDate.toLocaleTimeString();     //获取当前时间

function MinusTime(curTime, timeInterval) {
    var timeArray = curTime.split(':');
    for (var i = 0; i < timeArray.length; ++i) {
        timeArray[i] = parseInt(timeArray[i]);
    }
    // console.log(timeArray);

    var timeSum = timeArray[0] * 60 * 60 + timeArray[1]*60 + timeArray[2] - timeInterval;
    timeArray[0] = Math.floor(timeSum / (60*60));
    timeArray[1] = Math.floor((timeSum - timeArray[0] * 60 * 60) / 60);
    timeArray[2] = timeSum - timeArray[0] * 60 * 60 - timeArray[1] * 60;

    // console.log(timeSum);
    // console.log((timeArray[0] * 60 + timeArray[1])*60 + timeArray[2]);
    // console.log (timeArray)

    for (var i = 0; i < timeArray; ++i) {
        timeArray[i] = timeArray[i].toString();
    }

    return timeArray.join(':');
}

function testMinusTime() {
    var myDate = new Date();
    var wholeTime = myDate.toLocaleString();
    var date = (wholeTime.substring(0,11)).replace(/-/g, ':');
    var time = wholeTime.substring(11);
    console.log ('date: ' + date);
    console.log ('time: ' + time);
    // console.log (myDate.toLocaleString( ) + '\n');        //获取日期与时间

    console.log('MinusTime: '+  MinusTime(time, 3) );
}

function transID(originalData) {
    var dataArray = originalData.split('.');
    var Object = {};

    Object.AttrType = dataArray[dataArray.length-1];
    Object.ObjectID = originalData.substring(0, originalData.length - Object.AttrType.length-1);
    console.log(Object);
    return Object;
}

// testMinusTime();

function testTransID() {
    var testString = "a.b.c.defg";
    transID(testString);
}

function tranTimeToUTC(dateString, timeString) {
  var timeArray = timeString.split(':');
  var dateArray = dateString.split(':');

  for (var i = 0; i<timeArray.length; ++i) {
    timeArray[i] = parseInt(timeArray[i]);
    dateArray[i] = parseInt(dateArray[i]);
  }

  console.log (dateArray);
  console.log (timeArray);

  var utctime = Date.UTC(dateArray[0], dateArray[1], dateArray[2], 
                        timeArray[0], timeArray[1], timeArray[2]);

  return utctime;
}

function testTransTimeToUTC() {
    var myDate = new Date();
    var wholeTime = myDate.toLocaleString();
    var date = (wholeTime.substring(0,11)).replace(/-/g, ':');
    var time = wholeTime.substring(11);

    var dateb = (wholeTime.substring(0,11)).replace(/-/g, '');
    console.log('dateb: ' + dateb);
    console.log('UTC: ' + tranTimeToUTC(date,time));
}

testTransTimeToUTC();

// testTransID();