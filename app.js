var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false ,upload:'/public/images'}));
app.use(express.static(path.join(__dirname, 'public')));
//-----------------------routes
app.use(logger('dev'));
var api = require('./routes/api.js');
app.use('/',api);
//-----------------------socket

//-----------------------port
var port = process.env.PORT || '3002';
http.listen(port, function () {
    console.log('listening on port ' + port);
});
