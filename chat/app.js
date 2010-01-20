require.paths.unshift('/Users/ma/projects/express/lib');
require('express');
require('express/plugins');

configure(function(){
  use(MethodOverride);
  use(ContentLength);
  use(CommonLogger);
  set('root', dirname(__filename));
});

get('/', function(){
  this.contentType('html');
  return '<h1>Hello World<h1>';
});

get('/*.css', function(file){
  this.render(file + '.sass.css', { layout: false });
});

get('/*.js', function(file){
  this.sendfile(dirname(__filename) + '/public/' + file + '.js');
});

run();