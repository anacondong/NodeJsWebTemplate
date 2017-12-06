var express = require('express');


var app = express();

// Serve static files
app.use(express.static('assets'));

/**
 * CLIENT-SIDE
 */
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(9999);
console.log('Server listening on port 9090');
