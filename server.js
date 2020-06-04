var express = require('express'),
app = express(),

bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
methodOverride = require('method-override'),
hostname = process.env.HOSTNAME || 'localhost',
port = parseInt(process.env.PORT,10) || 4567;

app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static(__dirname + '/src'));

app.use(errorHandler({
    dumpExceptions: true,
    ShowStack: true
}));

app.get("/", function(req, res){
    res.redirect("/index.html");
});

console.log("Simple server at http://" + hostname + ":" + port);

app.listen(port, hostname);