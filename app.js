console.log('야호!');

var http = require('http');

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];

  console.log(`-> ${request.method} ${request.url}`);

  response.end('hello!');

}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받습니다.
