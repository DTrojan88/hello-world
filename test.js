var http = require('http');
var fs = require('fs');

//create a server object
http.createServer(function(req,res){
    fs.appendFile('test.log', Date() + '::Incoming server request from\n', function(err){
        if (err) throw (err);
        console.log('Saved');
    })
    res.writeHead(200, {'Content-Type': 'Text-html'});
    res.write('Welcome to FFN');
    res.end();

})
.listen(8080);

