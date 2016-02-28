// var spawn = require('child_process').spawn();
// var free = spawn('ll  ', ['-t']);

// // ������׼������������ӡ������̨ 
// free.stdout.on('data', function (data) { 
//  console.log('standard output:\n' + data); 
//  });

// // ������׼����������������ӡ������̨ 
// free.stderr.on('data', function (data) { 
//  console.log('standard error output:\n' + data); 
//  });

// // ע���ӽ��̹ر��¼� 
// free.on('exit', function (code, signal) { 
//  console.log('child process eixt ,exit:' + code); 
//  });
 
 
 var spawn = require('child_process').spawn,
    grep  = spawn('grep', ['ssh']);

console.log('Spawned child pid: ' + grep.pid);
grep.stdin.end();


    
// var spawn = require('child_process').spawn,
//     ls    = spawn('ll', ['-t']);

// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

// ls.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });

// var exec = require('child_process').exec; 
//  var cmdStr = 'mkdir lee';
//  exec(cmdStr, function(err,stdout,stderr){
//      if(err) {
//          console.log('get weather api error:'+stderr);
//      } else {
//          /*
//          ����stdout�����ݾ���������curl����������������
//         {"weatherinfo":{"city":"����","cityid":"101010100","temp":"3","WD":"������","WS":"3��","SD":"23%","WSE":"3","time":"21:20","isRadar":"1","Radar":"JC_RADAR_AZ9010_JB","njd":"����ʵ��","qy":"1019"}}
//          */
//          var data = JSON.parse(stdout);
//          console.log(data);
//      }
//  });

// var spawn = require('child_process').spawn,
//     ls    = spawn('ls', ['-lt']);

// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

// ls.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });

 // 创建目录;
// var spawn = require('child_process').spawn,
//     mkdir  = spawn('mkdir', ['-v', 'lee2']);


// mkdir.stdout.on('data', function (data) {
//   console.log('mkdir stdout: ' + data);
// });

// mkdir.on('close', function (code) {
//   console.log('mkdir child process exited with code ' + code);
// });

var spawn = require('child_process').spawn('mkdir', ['-v', 'lee2']);