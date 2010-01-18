require.paths.unshift('/Users/ma/projects/express/lib');
require('express')
require('express/plugins')

configure(function(){
  use(MethodOverride)
  use(ContentLength)
  use(CommonLogger)
  set('root', dirname(__filename))
})

get('/', function(){
  this.contentType('html')
  return '<h1>Hello World<h1>'
})

var messages = []

get('/chat', function(id) {
  this.render('chat.haml.html', { locals: { messages: messages } })
})

post('/chat', function(){
  messages.push(escape(this.param('message')))
  this.halt(200)
})

get('/chat/poll', function(){
  var self = this, previousLength = messages.length
  
  var timer = setInterval(function(){
    if (messages.length > previousLength) {
      self.contentType('json')
      previousLength = messages.length
      
      // We send the response
      self.halt(200, JSON.encode(messages))
      
      clearInterval(timer)
    }
  }, 100)
})

get('/*.css', function(file){
  this.render(file + '.sass.css', { layout: false })
})

get('/*.js', function(file){
  this.sendfile(dirname(__filename) + '/public/' + file + '.js')
})

run()