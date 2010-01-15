var sys = require('sys'), 
    http = require('http');

http.createServer(function (req, res) {
  res.sendHeader(200, {'Content-Type': 'text/plain'});

  if(req.uri.path == "/slow") {
    // Send body in 5 sec
    setTimeout(function () {
      res.sendBody('Sloooow\n');
      res.finish();
    }, 5000);
  
  } else {
    res.sendBody('Hello World\n');
    res.finish();
    
  }
}).listen(8000);

sys.puts('Server running at http://0.0.0.0:8000/');