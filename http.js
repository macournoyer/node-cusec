var sys = require('sys'), 
    http = require('http');

http.createServer(function (req, res) {
  
  res.sendHeader(200, {'Content-Type': 'text/plain'});
  res.sendBody('Hello');
  res.finish();
  
}).listen(8000);

sys.puts('Server running at http://0.0.0.0:8000/');