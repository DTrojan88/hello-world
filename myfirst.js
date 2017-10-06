var http = require('http');
var dt = require('./mydatenow');
var fs = require('fs');

//create a server object
http.createServer(function (req,res) {
    fs.readFile('index.html', function(err, data){
        
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
    console.log(dt.myDateTime() + 'Received request from: ' + req.connection.address);
})


.listen(8080);