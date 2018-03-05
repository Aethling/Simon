$(document).ready(function(){
	$(".square").on("click", function(){
		let val = $(this).attr("value");
		userTurn(val);
	});
	$(".start").on("click", function(){
		reset();
		simonArr.push(randomColor());
		setTimeout(function(){simonTurn()}, 300);
		
	});
	$(".reset").on("click", function(){
		reset();
		simonArr.push(randomColor());
	})

	const red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	const blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
	const green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
	const yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

	const simonArr = [];
	const playerArr = [];
	const colorArray = ["red", "blue", "green", "yellow"];
	let count = 0;

	function simonTurn() {
		for (let i = 0; i < simonArr.length; i++) {
			let item = simonArr[i];
			setTimeout(function(){ 
				displayColor(item)}, 700*i);
		}
	}
	function randomColor() { //returns random color
		const rando = Math.floor(Math.random()*4);
		return colorArray[rando];
	}

	function displayColor(item) {
			 playBeep(item);
			$("." + item).addClass("light");
			setTimeout(function(){
				$("." + item).removeClass("light")}, 350);
	}
	function playBeep(item) {
			var sound = eval(item);
			sound.load();
			sound.play();
		
	}
	let secondTime = false;
	function userTurn(val) {
		playerArr.push(val);
		displayColor(val);
		if (isValidMove()){
			if (playerArr.length === simonArr.length) {
				if (JSON.stringify(playerArr) === JSON.stringify(simonArr)) {
					update();
				} else if (strictMode() || secondTime == true){
					youFail();
				} else {
					playerArr.length = 0;
					setTimeout(function(){
						simonTurn()}, 2000);
					secondTime = true
					} 
			}
		} else {
			//beep
			if (strictMode() || secondTime == true){
				youFail();
			} else {
				secondTime = true;
				playerArr.length = 0;
				simonTurn();
			}
		}
	}//end userTurn
	function strictMode() {
		if ($("#myCheck").is(":checked")) {
			return true;
		} else {
			return false;
		}
	}
	function update() {
		count++
		displayScore();
		if (count === 20) {
			youWin();
		} else {
		playerArr.length = 0;
		simonArr.push(randomColor());
		setTimeout(function(){
			simonTurn()}, 1000); 
		}
	}
	function displayScore() {
		$("span.counter").html(count);
	}
	function isValidMove(){
		for (let i = 0; i < playerArr.length; i++) {
			return (playerArr[i] === simonArr[i]);
		}
	}
	function youWin() {
		$(".control").append('<h1 id="win">You Win!!</h1>')
			.append('<h4>Press start to play again</4>');
	}
	function youFail(){
		setTimeout(function(){
			$(".control").append('<h1 id="fail">You have failed</h1>')
				.append('<h4 class="playAgain">Press start to play again</4>')}, 500);
	}
	function reset(){
		simonArr.length = 0;
		playerArr.length = 0;
		count = 0;
		secondTime = false;
		displayScore();
		$('#win, #fail').remove();
		$('h4.playAgain').remove();
	}




}) //end doc ready