var sys = require('sys'), 
    http = require('http');

http.createServer(function (req, res) {
  res.sendHeader(200, {'Content-Type': 'text/plain'});

  if (req.uri.path == "/slow") {
    // Send body in 5 sec
    res.sendBody('Waiting ...\n');
    // Some padding for browser to stop buffering
    for (var i=0; i < 1024; i++) {
      res.sendBody(' ');
    }
    setTimeout(function () {
      res.sendBody('Sloooow!');
      res.finish();
    }, 5000);
  
  } else {
    res.sendBody('Hello');
    res.finish();
    
  }
}).listen(8000);

sys.puts('Server running at http://0.0.0.0:8000/');