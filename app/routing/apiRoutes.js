// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/app/data/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/app/data/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    var newUser = req.body;

    // console.log("The new user's score array: " + req.body.scores);
    // console.log("User  in friendsData array: " + friendsData[0].scores);
    var scoreTotals = [];

    for (n = 0; n < friendsData.length; n++) {
      var x = 0;
      var friendsDataValue = friendsData[n];
      for (i = 0; i < friendsDataValue.scores.length; i++) {
        var currentScore = friendsDataValue.scores[i];
        x += Math.abs(parseInt(currentScore) - parseInt(newUser.scores[i]));
      }
      scoreTotals.push(x);
      // console.log(x);
    }
    console.log("--------------------------------------");
    var totalValues = parseInt(scoreTotals);
    console.log(scoreTotals);
    var min = Math.min(...scoreTotals);

    // console.log(scoreTotals[3] + scoreTotals[4]);
    // console.log(scoreTotals.indexOf(Math.min(parseInt(scoreTotals))));
    var match = scoreTotals.indexOf(min);

    //The new user's responses is stored into friendsData
    friendsData.push(req.body);
    res.json(friendsData[match]);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/app/data/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    // console.log(friendsData);
  });
};
