//express lib
var express = require('express');
//general lib
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/html', { redirect : false }));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
