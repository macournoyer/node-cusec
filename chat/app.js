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


// Serve assets
get('/*.css', function(file){
  this.render(file + '.sass.css', { layout: false });
});
get('/*.js', function(file){
  this.sendfile(dirname(__filename) + '/public/' + file + '.js');
});

// Run the app
run();