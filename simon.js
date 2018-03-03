$(document).ready(function(){
	$(".square").on("click", function(){
		let val = $(this).attr("value");
		userTurn(val);
	});
	$(".start").on("click", function(){
		reset();
		setTimeout(function(){simonTurn()}, 500);
	});
	$(".reset").on("click", function(){
		reset();
	})

	const simonArr = [];
	const playerArr = [];
	const colorArray = ["red", "blue", "green", "yellow"];
	let count = 0;

	function simonTurn() {
		simonArr.push(randomColor());
		for (let i = 0; i < simonArr.length; i++) {
			let item = simonArr[i];
			setTimeout(function(){ 
			displayColor(item)}, 700*i);
		}
	}
	function randomColor() { //gets random color, pushes it to array.
		const rando = Math.floor(Math.random()*4);
		return colorArray[rando];
	}

	function displayColor(item) {
			$("." + item).addClass("light");
			setTimeout(function(){
				$("." + item).removeClass("light")}, 350);
	}
	function userTurn(val) {
		playerArr.push(val);
		displayColor(val);
		if (playerArr.length === simonArr.length) {
			if (JSON.stringify(playerArr) === JSON.stringify(simonArr)) {
				count++
				displayScore();
				if (count === 2) {
					youWin();
				} else {
				playerArr.length = 0;
				setTimeout(function(){
					simonTurn()}, 1000); 
				}
			} else {
				setTimeout(function(){
					alert("Sorry, you have failed")}, 500);
					reset();
			}
		}
	}//end userTurn
	function displayScore() {
		$("span").html(count);
	}
	function youWin() {
		$(".control").append('<h1 id="win">You Win!!</h1>')
			.append('<h4>Press start to play again</4>');
	}
	function reset(){
		simonArr.length = 0;
		playerArr.length = 0;
		count = 0;
		$('#win').remove();
		$('h4').remove();
	}

}) //end doc ready