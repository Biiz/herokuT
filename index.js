//express lib
var express = require('express');
//general lib
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) 
{
	
	data= fs.readFile('/index.html',
		function (err, data) {
    		//Other information required...
    		res.setHeader('Content-Type', 'text/html');
    		res.send(data);
		}
	);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
