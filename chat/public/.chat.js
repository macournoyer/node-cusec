$(function(){
  // Send message
  
  $('form').submit(function(){
    var message = $("#message");
    $.post('/chat', { message: message.val() }, function(){
      message.val('');
    });
    return false;
  });
  
  function poll() {
    $.getJSON('/chat/poll', function(messages){
      $('#log').empty();
      
      $.each(messages, function(i, msg){
        $('#log').append('<p>' + msg + '</p>');
      });
      
      poll();
    });
  };
  
  poll();
});