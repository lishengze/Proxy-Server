// while (true) {
// 	var chunk = process.stdin.read();
// 	console.log('inputed chunk: ' + chunk.toString());
// }

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});