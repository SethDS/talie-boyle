/**
 * Created by Seth on 1/10/2018.
 */
// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');

// CONFIG //
var config = require('../config');

// EXPRESS //
var app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + './../public'));



// CONNECTIONS //
app.listen(3051, function() {
    console.log('Listening on port thirty fifty one...');
});
