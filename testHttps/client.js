var isHttps        = false;


if (true === isHttps) {
	var localUrl   = 'https://localhost:8000'
	var serverUrl  = 'https://172.1.128.169:8000'
	var curUrl     = serverUrl;
	var rootSocket = io.connect(curUrl, {secure:true});	
} else {
	var localUrl   = 'http://localhost';
    var serverUrl  = 'http://172.1.128.169';
    var curUrl     = localUrl;
	var rootSocket = io.connect(curUrl);
}

console.log("client rootsocket: \n");
console.log(rootSocket);

rootSocket.on("connection complete", function(data){
	if (true === isHttps) {
		console.log("https connection complete!");
	} else {
		console.log("http connection complete!");
	}
	
	var userName = "lee";
	
	rootSocket.emit('new user', userName);
	
	rootSocket.on('new user done', function(data) {
		
		var usersocket = io.connect(curUrl + '/' + userName);
		console.log("client usersocket: \n");
		console.log(usersocket);
		
	});
	
});

// 连接断裂,定时重连.
rootSocket.on('disconnect', function(data) {
	console.log('rootSocket disconnect!');
});