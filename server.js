// Setting up the connection
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});