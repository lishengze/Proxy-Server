var fs = require('fs');
var isHttps = false;

if (true === isHttps) {
	var options = {
		key:  fs.readFileSync("sfit.key"),
		cert: fs.readFileSync("sfit.cert"),
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

io.on('connection', function(rootSocket) {
	
	// console.log("server rootsocket: \n");
	// console.log(rootSocket);
	
	if (true === isHttps) {
		console.log("https connection complete!");
	} else {
		console.log("http connection complete!");
	}
		
	rootSocket.emit("connection complete", {});
	
	// rootSocket.on('new user', function (userName){
	// 	var usernamespace = io.of('/' + userName);
		
	// 	rootSocket.emit('new user done', {});
		
	// 	usernamespace.on('connection', function(usersocket){
	// 		console.log('server usersocket: \n');
	// 		console.log(usersocket);
			
	// 		console.log('server usernamespace: \n');
	// 		console.log(usernamespace);			
						
	// 	});			
	// });
	
	rootSocket.on('disconnect', function(data) {
		console.log('rootSocket disconnect!');
	});
	
});


function onRequest(request, response){
	try {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello Socket.io');
			response.end();
	}catch (err) {
			console.error(err);
	}
}