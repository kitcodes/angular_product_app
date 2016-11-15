var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var fs = require('fs');
var cors = require('cors');

var app = express();
var port = 5000;

app.use(cors({origin: '*'}));

app.get('/', function(req, res){
    fs.readFile(path.join(__dirname + '/view/js/products.json'), function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        var obj = JSON.parse(data);
        res.json(obj);
    });

});

app.get('/trending', function(req, res){
    fs.readFile(path.join(__dirname + '/view/js/trending.json'), function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        var obj = JSON.parse(data);
        res.json(obj);
    });

});

app.use(express.static('static'));
const server = app.listen(port, function(err){
    console.log("Application is Running on port " + port);
});
