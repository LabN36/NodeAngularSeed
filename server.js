var express = require('express');
var app = express();
app.set('port',3000);
app.listen(app.get('port'),function(error){
    console.log("server is up and running"+error)
})