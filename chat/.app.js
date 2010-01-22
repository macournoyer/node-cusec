require.paths.unshift('/Users/ma/projects/express/lib');
require('express');
require('express/plugins');

configure(function(){
  use(ContentLength);
  use(CommonLogger);
  set('root', dirname(__filename));
});


get('/', function(){
  return 'Hello World';
});

get('/chat', function(){
  this.render('chat.haml.html');
});

var messages = [];

post('/chat', function(){
  messages.push(this.param('message'));
  puts(messages);
  this.halt(200);
});

get('/poll', function(){
  var lastLength = messages.length;
  var that = this;
  
  var timer = setInterval(function(){
    if (messages.length > lastLength) {
      that.contentType("json");
      that.halt(200, JSON.encode(messages));
      clearInterval(timer);
    };
  }, 100);
});


// Serve assets
get('/*.css', function(file){
  this.render(file + '.sass.css', { layout: false });
});
get('/*.js', function(file){
  this.sendfile(dirname(__filename) + '/public/' + file + '.js');
});

// Run the app
run();