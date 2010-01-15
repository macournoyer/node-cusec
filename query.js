var dbslayer = require('./dbslayer'),
    sys = require('sys');

var db = new dbslayer.Server("test");

sys.puts("sending query #1 ...");
db.query("SELECT * FROM users").addCallback(function(results) {
  sys.puts("query #1 done!");
});

sys.puts("sending query #2 ...");
db.query("SELECT name FROM users WHERE id = 3").addCallback(function(results) {
  sys.puts("query #2 done!");
});
