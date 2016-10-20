var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/client'));

app.set('port', (process.env.PORT || 5000) );

app.listen(app.get('port'), function () {
  console.log('listening');
})