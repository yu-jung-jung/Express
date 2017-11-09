
var friends = require("../data/friends.js")
var path = require("path");

module.exports = function(app){

	app.get("/api/friends", function(req, res){

		res.json(friends);
	})

	app.post("/api/friends", function(req, res){

		var userScores = req.body.scores;


		//loop through scores of friends list and user data

		for (var i = 0; i < friends.length; i++){


			for(var j = 0; j < userScores.length; j++){

				var diff = Math.abs(userScores[j] - friends.scores[i]);

				var outcome = 0 += diff;


			}
			
		}

		
	})


	// app.post(" ", function(req, res){

	// 	friends = [];

	// 	console.log(friends)
	// })
}