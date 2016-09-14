var userSocketClient = {};
var userNameArry     = [];
var userCount        = 0;
var isHttps          = false;
var isFrontConnected = false;

if (true === isHttps) {
//	var ipAddress  = 'https://192.168.10.11';
	var ipAddress  = 'https://localhost'
//	var ipAddress  = 'https://172.1.128.169';
	var port       = 8000;
	var url        = ipAddress + ':' + port.toString();
	var rootSocket = io.connect(url,{secure:true});	
} else {
	var url        = 'http://localhost';
	var rootSocket = io.connect(url);
}

rootSocket.emit('start data stream', 'start');
rootSocket.on('new data comes', function(data){
     console.log('did receive data');
});

writeData('Connect default io namespace');

// 注册来自服务端的消息.	
rootSocket.on('ready to establish connect', function(username){
				
	writeData('establish connect ' + username);
					
	userSocketClient[username] = io.connect(url + '/' + username); 
							
	userSocketClient[username].on('connect completed', function(username){	
		userNameArry[userCount++] = username;		
		writeData(username + ' connect completed');		
		
		userSocketClient[username].emit('Connect Front', 'Connect Front');		
																										
	});	
	
	userSocketClient[username].on('FrontConnected', function(data) {
		console.log('\nTest_Client: FrontConnected!\n');
		alert('\nTest_Client: FrontConnected!\n');
		isFrontConnected = true;
	})
	
	userSocketClient[username].on('connect_server', function(data){
		writeData(data);								
	});
	

				
		
	userSocketClient[username].on('Get from Server', function(data){				
		writeData('Get from Server: Hi Client '+ data);				
	});		
	
	userSocketClient[username].on("ReqQrySysUserLoginTopic CallbackData", function (callbackData) {
		if (0!==callbackData.length) {
			alert(callbackData[0].LoginTime);
		}
		
	});
	
	userSocketClient[username].on("RtnNetLocalPingResultInfoTopic CallbackData", function (callbackData) {
		if (0!==callbackData.length) {
			alert(callbackData.PTimeSta);
		}
		
	});
	
	userSocketClient[username].on("RtnSysTimeSyncTopic CallbackData", function (callbackData) {
		if (0!==callbackData.length) {
			alert(callbackData.MonTime);
		}
		
	});
						
	userSocketClient[username].on("ReqNetMonitorAttrScope CallbackData", function (callbackData) {
		if (0!==callbackData.length) {
			alert(callbackData[0].Comments);
		}
		
	});
	
	userSocketClient[username].on('ReqQryMonitorObjectTopic CallbackData', function (callbackData) {
		if (0!==callbackData.length) {
			alert(callbackData[0].ObjectID.toString());
		}
		
	});
												
});
						
function addUser(username) {		
	writeData(url + '/' + username);		
	rootSocket.emit('new user', username);			
}

function disconnectServer (username) {
	userSocketClient[username].disconnect();
}
	
function testCommunicateUser(username){
	var bIsUserNameConnected = false;
	for (var i = 0; i<userCount; ++i) {
		if (userNameArry[i] === username) {
			bIsUserNameConnected = true;
			break;
		} 
	}
	
	if (true === bIsUserNameConnected) {
		userSocketClient[username].emit('Get from Client', username);
	} else {
		alert(username + " doesn't connect to the server.");
		return;
	}			
}
	
function ReqQrySysUserLoginTopic(username){
	var bIsUserNameConnected = false;
	for (var i = 0; i<userCount; ++i) {
		if (userNameArry[i] === username) {
			bIsUserNameConnected = true;
			break;
		} 
	}
	
	if (true === bIsUserNameConnected && true === isFrontConnected) {
		userSocketClient[username].emit('ReqQrySysUserLoginTopic', username);	
	} else {
		alert(username + " doesn't connect to the server.");
		return;
	}								
}
								
function ReqNetMonitorAttrScope(username){
	var bIsUserNameConnected = false;
	for (var i = 0; i<userCount; ++i) {
		if (userNameArry[i] === username) {
			bIsUserNameConnected = true;
			break;
		} 
	}
	
	if (true === bIsUserNameConnected && true === isFrontConnected) {
		userSocketClient[username].emit('ReqNetMonitorAttrScope', username);	
	} else {
		alert(username + " doesn't connect to the server.");
		return;
	}						
}	

function ReqQryMonitorObjectTopic(username) {
	var bIsUserNameConnected = false;
	for (var i = 0; i<userCount; ++i) {
		if (userNameArry[i] === username) {
			bIsUserNameConnected = true;
			break;
		} 
	}
	
	if (true === bIsUserNameConnected && true === isFrontConnected ) {
		userSocketClient[username].emit('ReqQryMonitorObjectTopic', username);	
	} else {
		alert(username + " doesn't connect to the server.");
		return;
	}		
}


function writeData(Data){
		console.log(Data);								
}		

// function readTextFile(file)
//     {
//         var rawFile = new XMLHttpRequest();
//         rawFile.open("GET", file, false);
//         rawFile.onreadystatechange = function ()
//         {
//             if(rawFile.readyState === 4)
//             {
//                 if(rawFile.status === 200 || rawFile.status == 0)
//                 {
//                     var allText = rawFile.responseText;
//                     document.getElementById("inputValue").value=allText

//                 }
//             }
//         }
//         rawFile.send(null);
//     }
	
// readTextFile("test.txt")

		// if (username === 'admin') {
		// 		ReqQrySysUserLoginTopic(username);
		// }