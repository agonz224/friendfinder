//storing dependencies in variables to be called later

var express = require ("express");
var bodyParser = require ("body-parser");

//creates express server
var app = express();

//establishing port 

var PORT = process.env.PORT || 8080;

//boilerplate code essential to server's interpretation of data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//connects server to route files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//initiates server listening through port 8080

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
