var express = require('express'),
    app = express.createServer(),
    rest = require('restler');

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/public'));
 });

app.get('/', function(req, res){    
    res.render('main.ejs', { layout: false });
});

console.log("Vertretungsplan running at http://localhost:3000");

app.listen(3000);