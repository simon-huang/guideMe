var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.PORT || 1337;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  console.log('Server says hi');
  res.send();
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});