var express = require('express');

var app = express();

var msg = 'Hi Andrew! What are you doing? --from Coursera/Startup Engineering!';
app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
