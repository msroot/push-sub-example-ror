$(function() {
  var faye = new Faye.Client('http://stream-server.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
