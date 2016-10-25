var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var request = require('request');
var unirest = require('unirest');
var rest = require('restler');
var FormData = require('form-data');
var router = express.Router();
var palette = require('image-palette');
var Color = require('color');
var form = new FormData();
var needle = require('needle');
var url = "http://ec2-54-214-136-144.us-west-2.compute.amazonaws.com:3001/count";
//var url = "http://192.168.0.1:3001/count";
var p = './public/images/a.png';
var temp;
var colors = palette(p, function (colors) {
    console.log(colors);
    temp=
    temp=colors[0];
request({
  uri: url,
  method: "POST",
  form: {
    count: colors[0][1]*1000000+colors[0][0]*1000+colors[0][2]
  }
}, function(error, response, body) {
    if(error)
        console.log(error);
  console.log(body);
});
});
module.exports = router;
