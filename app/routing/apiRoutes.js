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
    		// var scoreTotals = [];
				// for (n = 0;  < data.length; n++) {
					// var userScore = [];
					// for (i = 0; i < data[0].scores.length; i++) {
            console.log(req);
            var x;
            for (i = 0; i < 11; i++) {	
              // var	x = Math.abs(userData.scores[i] - data[0].scores[i]);
              x = userData.scores[i] - res[0].scores[i];
            }
            console.log(x);
            // userScore.push(x);
            
          // }
      friendsData.push(req.body);
      res.json(matchingUser);
    
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