var express = require("express");
var app = express();

app.get("/",inicio);
function inicio (peticion,resultado){
  resultado.sendfile("index.html")
};


app.listen(8080)
