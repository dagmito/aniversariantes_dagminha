var express = require('express');
var app = express();
var consign = require('consign');

var ui5 = require('../app/ui5/ui5Router');

app.use('/', ui5.getRouter(express));

module.exports = function(){
    return app;
}