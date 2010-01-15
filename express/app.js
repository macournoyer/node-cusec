require.paths.unshift('/Users/ma/projects/express/lib')

require('express')
require('express/plugins')

configure(function(){
  use(MethodOverride)
  use(ContentLength)
  set('root', dirname(__filename))
})

get('/hello', function(){
  this.contentType('html')
  return '<h1>World<h1>'
})

get('/user/:id?', function(id) {
  this.render('user.haml.html', {
    locals: {
      name: id ? 'User ' + id : 'You' 
    }
  })
})

run()