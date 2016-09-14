var fs = require('fs');
var options = {
  key: fs.readFileSync("sfit.key"),
  cert: fs.readFileSync("sfit.cert"),
};

var app = require('https').createServer(options,onRequest); // 创建代理服务器;
var io  = require('socket.io')(app);
app.listen(8000);

// var app = require('http').createServer(onRequest); // 创建代理服务器;
// var io  = require('socket.io')(app);
// app.listen(80);

var server = require('./server.js');

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
	
	console.log('rootSocket connected!');	
		
	server.RegisterFront(rootSocket);
	
	rootSocket.on('ReqQrySysUserLoginTopic', function(userName){				
		console.log('Client ReqQrySysUserLoginTopic');						
		server.ReqQrySysUserLoginTopic(rootSocket);						
	});	
			
	rootSocket.on('ReqNetMonitorAttrScope', function(username) {
		console.log('Client ReqNetMonitorAttrScope');		
		server.ReqNetMonitorAttrScope(rootSocket);
	});	
	
	rootSocket.on('ReqQryMonitorObjectTopic', function(username) {
		console.log('Test-Server: ReqQryMonitorObjectTopic');
		server.ReqQryMonitorObjectTopic(rootSocket);
	});		
	
});

