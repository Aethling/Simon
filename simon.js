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
		// console.log(simonArr);
		for (var i = 0; i < simonArr.length; i++) {
			var item = simonArr[i];
			timeOut(item)
		}
	function timeOut(item) {
			setTimeout(function(){ 
				displayColor(item)}, 1000*i);
		}
	}
	function randomColor() { //gets random color, pushes it to array.
		var rando = Math.floor(Math.random()*4);
		return colorArray[rando];
	}

	function displayColor(item) {
			$("." + item).addClass("light");
			setTimeout(function(){
				$("." + item).removeClass("light")}, 300);
	}
	function userTurn(val) {
		myArr.push(val);
		console.log(myArr);
		displayColor(val);
		if (myArr.length === simonArr.length) {
			if (areEqual()) {
				myArr = [];
				setTimeout(function(){
				simonTurn()}, 1000); 
				//displayScore() //write this
			} else {
				setTimeout(function(){
				alert("Sorry, you have failed")}, 1000);
				reset();
			}
		}
	}//end userTurn
	function areEqual() {
		if (JSON.stringify(myArr) === JSON.stringify(simonArr)) {
			return true;
		} else {
			return false;
		}
	}
	function reset(){
		simonArr = [];
		myArr = [];
	}


}) //end doc ready