$(function(){
  // Send message
  $('form').submit(function(){
    var message = $('input#message');
    $.post('/chat', { message: message.val() }, function(){
      message.val('');
    });
    return false;
  });
  
  // Longpoll
  (function poll(){
    $.getJSON('/chat/poll', function(messages){
      // A new message arrived!
      $("#log").empty();
      
      $.each(messages, function(i, msg){
        $('#log').append('<p>' + msg + '</p>');
      });
      
      // Start polling again
      poll();
    });
  })();
});