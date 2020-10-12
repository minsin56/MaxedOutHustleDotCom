var express = require("express");
var app = express();

app.use(express.static("maxed-out-hustle"));

app.get("/",function(req,res,next)
{
    res.redirect("/");
});

app.listen(8080,"localhost");
console.log("SERVER STARTED");