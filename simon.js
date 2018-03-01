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
		displayArray(simonArr);
	}
	function randomColor() { //gets random color, pushes it to array.
		var rando = Math.floor(Math.random()*4);
		var theColor = colorArray[rando];
		return theColor;
	}

	function displayArray(array) {
		console.log(array);
		$.each(array, function(i, item){
			setTimeout(function(){
				$("." + item).addClass("light")}, 500);
			setTimeout(function(){
				$("." + item).removeClass("light")}, 500);
		});
	}
	function displaySelection(val) {
		$("." + val).addClass("light");
		setTimeout(function(){
			$("." + val).removeClass("light")}, 500);
	}
	function userTurn(val) {
		myArr.push(val);
		displaySelection(val);
		if (myArr.length === simonArr.length) {
			if (areEqual()) {
				console.log(myArr);
				myArr = [];
				setTimeout(function(){
				simonTurn()}, 1000); 
				//displayScore() //write this
			} else {
				alert("Sorry, you have failed");
			}
		}
	}//end userTurn
	//function to compare arrays
	var areEqual = function() {
		if (JSON.stringify(myArr) === JSON.stringify(simonArr)) {
			console.log(true);
			return true;
		} else {
			return false;
		}
	}


}) //end doc ready