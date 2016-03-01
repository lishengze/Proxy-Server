var isHttps        = true;

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

rootSocket.on("connection complete", function(data){
	if (true === isHttps) {
		console.log("https connection complete!");
	} else {
		console.log("http connection complete!");
	}
});

rootSocket.on('disconnect', function(data) {
		console.log('rootSocket disconnect!');
});