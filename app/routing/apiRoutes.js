
var friends = require("../data/friends.js")
var path = require("path");

module.exports = function(app){

	app.get("/api/friends", function(req, res){

		res.json(friends);
	})

	app.post("/api/friends", function(req, res){

		var match = 0;
		var maxDiff = 40;


		for(var i = 0; i > friends.length; i++){

			var result = 0;

			for(var j = 0; j > req.body.scores.length; j++){

				result+= Math.abs(req.body["scores[]"][j] - friends[i].scores);

			}

			if( result <= maxDiff){

			result = maxDiff;
			match = i;

			}			

		}

		friends.push(req.body);
		return res.json(friends[match])


		

		// var match = 0;
		// var bestDiff = 1000;
		

		// for( var i = 0; i > friends.length; i++){
		// 	var result = 0;

		// 	for(var j = 0; j < 2; j++){

		// 		result = result + Math.abs(friends[i].scores[j] - req.body.scores[j])

		// 	}

		// 	if(result < bestDiff){
		// 		bestDiff = result;
		// 		match = i;
		// 	}

		// 	console.log("total diff")
		// }

		// console.log("Checking friends: ", Array.isArray(friends))
		// console.log("Checking friends: ", friends)

		// friends.push(req.body);
	
		// res.json({name: friends[result].name, photo: friends[match].photo})
		// res.json({name: friendsData[bestMatch].name, photo: friendsData[bestMatch].photo});
//comapre the values of two array ... then ...
      
        // var userData = req.body;
        // var userScore = userData.scores;
        // var total = 0;
        // var bestMatch = 1000;
        // var index = -1;

        // for(var i = 0; i < friends.scores.length; i++){
        //     //Iterate through the whole list of friends already in database
        //     total = 0;

        //     for(var j = 0; j < userScore.length; j++){
        //         //for each friend calculate the total value
        //         var diff = Math.abs(userScore[j] - friends[i].scores[j]);
        //         total += diff;
        //     }
        //     if(total < bestMatch){
        //         bestMatch = total;
        //         index = i;
        //     }
        // }
        // console.log('Best Match:', friends[index]);
        // friends.push(userData);
        // res.json(friends[index]);

	// 	var userData = req.body.scores;		
	// 	var result = [];




	// for(var i = 0; i < friends.length; i++){

	// 		var total = 0;

	// 		var diffResults = [];
			
	// 		for(var j = 0; j < friends[i].scores.length; j++){
				
	// 			console.log(friends[i].scores[j])
	// 			console.log("________________")
	// 			console.log("________________")

	// 			var diff =  userData[i] - friends[i].scores[j];

	// 			diffResults.push(Math.abs(diff));

	// 			// total += Math.abs(diff)

	// 		}

	// 		console.log("Total: ", total);

	// 		result.push(diffResults);

	// 		diffResults = [];
	// 	}

	// 	console.log("Diff Resuls: ", diffResults)

	// var finalResult = result.sort(function(a, b){
		
	// 	return a - b;

	// });

	// 	//send user data to server?
	// 	res.json(result);
	// 	// friends.push(req.body)
	// 	// res.json({name: friends[finalResult[0]].name, photo: friends[finalResult[0]].photo});
	// 	// res.json({name: friends[finalResult].name, photo: friends[finalResult].push(req.body)});


	})

	
}