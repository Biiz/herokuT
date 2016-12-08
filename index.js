//express lib
var express = require('express');
//general lib
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', function(request, response) 
{

    
	response.redirect('/index.html');
  	response.end();
  	
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
