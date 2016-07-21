var express = require('express');
routes = require('./routes');
var util = require('util');

http.createServer(function(req, res){

    req.on('data',function(data){
        console.log(data);
    })
    res.writeHead(req);
   // console.log(req);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);