//links routes to data

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  //api get requests

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//api post requests

  app.post("/api/friends", function(req, res) {
    
    //adds friend to array

      friends.push(req.body);
      res.json(true);
   
  });

//clear array option

  app.post("/api/clear", function() {

    // Empty out the arrays of data

    friends = [];

    console.log(friends);
  });
};