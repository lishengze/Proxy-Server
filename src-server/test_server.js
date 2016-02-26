var server           = require('./server.js');
var fs               = require('fs');
var userSocketServer = {};
var userNameArry     = [];
var userCount        = 0;
var isHttps          = false;

if (true === isHttps) {
	var options = {
		key:  fs.readFileSync("9249652-www.sfit.shfe.com.cn.key"),
		cert: fs.readFileSync("9249652-www.sfit.shfe.com.cn.cert"),
	};
	var app  = require('https').createServer(options,onRequest); 
	var io   = require('socket.io')(app)
	var port = 8000;
	app.listen(port);	
} else {
	var app  = require('http').createServer(onRequest); 
	var io   = require('socket.io')(app);
	var port = 80;
	app.listen(port);
}

function onRequest(request, response){
	try {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello Socket.io');
			response.end();
	}catch (err) {
			console.error(err);
	}
}

// 连接后台服务器.
io.on('connection', function(rootSocket) {
	
	console.log('\nrootSocket connected!\n');	
	rootSocket.on('new user', function(userName) {				
		for (var i = 0, length = userNameArry.length; i < length; ++i)
		{
			if (userNameArry[i] === userName) {				
				console.log(userName + ' is already in.');
				return;
			}			
		}
		
		userNameArry[userCount] = userName;		
		userCount += 1;
						
		// 为每个用户以用户名注册专属连接;				
		userSocketServer[userName] = io.of('/' + userName);
								 				 
		// 为每个用户建立专属连接, 
		// 所有的通讯都在 connection 响应的事件里, 通过emit, on控制;		
		userSocketServer[userName].on('connection', function(curSocket){
			
			curSocket.on('Connect Front', function(data) {
				console.log('Connect Front!');
				server.RegisterFront(curSocket);				
			});
			
			
			console.log(userName + ' connect completed.');			
			curSocket.emit('connect completed', userName);
				
			curSocket.on('Get from Client', function(data){				
				console.log('\nGet from Client: Hi server ' + data);																			
				curSocket.emit('Get from Server', data);
			});								
			
			// 为每个后台请求建立专属连订阅事件;			
			curSocket.on('ReqQrySysUserLoginTopic', function(userName){				
				console.log(userName + ' Login server');						
				server.ReqQrySysUserLoginTopic(curSocket);						
			});	
			
			///指标统表
			curSocket.on('ReqNetMonitorAttrScope', function(username) {
				server.ReqNetMonitorAttrScope(curSocket);
			});			
			
			// treeView
			curSocket.on('ReqQryMonitorObjectTopic', function(username) {
				console.log('Test-Server: ReqQryMonitorObjectTopic' + username.toString());
				server.ReqQryMonitorObjectTopic(curSocket);
			});				
			
	   });
	  
	   rootSocket.emit('ready to establish connect', userName);	  
	   console.log('\nnew user: ' + userName + ' arrived');											
	});
	
});
