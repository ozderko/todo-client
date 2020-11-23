var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist/todo-client'));
app.get('/assets', function (req, res) {
  res.sendFile(__dirname + '/dist/todo-client/assets');
});
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/todo-client/index.html')
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('server running on port ' + port + '.')
});
