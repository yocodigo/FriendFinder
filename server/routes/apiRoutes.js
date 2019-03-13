// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
let friendsData = require("../../client/data/friends");
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("../../client/data/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  app.post("/client/data/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    const newUser = req.body,
      scoreTotals = [];
      
    // for (n = 0; n < friendsData.length; n++) {
    for (let element of friendsData) {
      let x = 0;
      // const friendsDataValue = friendsData[n];
      for (i = 0; i < element.scores.length; i++) {
        const currentScore = element.scores[i];
        x += Math.abs(parseInt(currentScore) - parseInt(newUser.scores[i]));
      }
      scoreTotals.push(x);
    }
    console.log("--------------------------------------");
    const totalValues = parseInt(scoreTotals);
    console.log(scoreTotals);
    const min = Math.min(...scoreTotals);
    const match = scoreTotals.indexOf(min);

    //The new user's responses is stored into friendsData
    friendsData.push(req.body);
    res.json(friendsData[match]);
  });
  // app.post("/client/data/clear", function() {
  app.post("../../client/data/clear", function() {
    // double check 1st argument
    // Empty out the arrays of data
    friendsData = [];
  });
};
