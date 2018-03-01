$(document).ready(function(){
	$(".square").on("click", function(){
		var val = $(this).attr("value");
		userTurn(val);
	});
	$(".start").on("click", function(){
		simonTurn();
	}); //end start game

	var simonArr = [];
	var myArr = [];
	var colorArray = ["red", "blue", "green", "yellow"];

	function simonTurn() {
		simonArr.push(randomColor());
		displayColor(); //need to write this still
	}
	function randomColor() { //gets random color, pushes it to array.
		var rando = Math.floor(Math.random()*4);
		var theColor = colorArray[rando];
		return theColor;
	}

	function displayColor(array) {
		$.each(array, function(i, item){
			$(item).addClass("light");
		})
	}
		//function that lights up squares
		//function compares arrays and signals game end
		//add random # to array
		//display score

	function userTurn(val) {
		myArr.push(val);
		displayColor() //write this
		if (areEqual) {
			simonTurn();
			displayScore() //write this
		} else {
			alert("Sorry, you have failed")
		}
	}
	//function to compare arrays
	var areEqual = function() {
		if (simonArr[length] === myArr[length] && simonArr === simonArr ) {
			return true;
		} else {
			return false;
		}
	}


}) //end doc ready