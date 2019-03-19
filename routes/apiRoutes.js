let friendsData = require("../client/data/friends"); // Source of friend information

module.exports = function(app) {
  // API GET request - Route renders JSON of friend data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests - The submitted form data(JSON object) is sent to the server. The server saves the
  // the data to the array
  app.post("/client/data/friends", function(req, res) {
    const newUser = req.body,
      scoreTotals = [];

    for (let element of friendsData) {
      let x = 0;
      for (i = 0; i < element.scores.length; i++) {
        const currentScore = element.scores[i];
        x += Math.abs(parseInt(currentScore) - parseInt(newUser.scores[i]));
      }
      scoreTotals.push(x);
    }
    console.log("--------------------------------------");
    const min = Math.min(...scoreTotals),
      match = scoreTotals.indexOf(min);
    console.log(scoreTotals);

    //The new user's responses is stored into friendsData
    friendsData.push(req.body);
    res.json(friendsData[match]);
  });
  app.post("/client/data/clear", function() {
    friendsData = []; // Empty out the arrays of data
  });
};
