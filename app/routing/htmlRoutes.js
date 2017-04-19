//path dependency for app routing

var path = require("path");

//app routing

module.exports = function(app) {

  //get requests include paths with corresponding content

    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //default path when path is not otherwise specified

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};