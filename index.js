var express = require('express');
var app = express();

app.get('/',function (req, res){
    res.send('Hello World')
});

app.post('/',function(req, res){
    res.send('Got a post request');
});
app.put('/user',function (req,res) {
    res.send('Got a put request at /user');
});
app.delete('/user',function(req,res){
    res.send('Got a delete request at /user');
});
app.use(function(req, res, next){
    res.status(404).send('error')
});
app.listen(3000, function(){
    console.log('Start')
});