var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var ball = document.getElementById("ball");
var start = document.getElementById("start");


console.log(rod1,rod2);

var keyPress = document.addEventListener("keypress",function(e){

	var currX = rod1.getBoundingClientRect().left;

	if(e.key =="d"){

		currX+=15;

		if(currX + rod1.getBoundingClientRect().width <= window.innerWidth){
			rod2.style.left = currX+"px";
			rod1.style.left = currX+"px";
		}
	}

	if(e.key == "a"){
		currX-=15;

		if(currX >= 0){
			rod2.style.left = currX+"px";
			rod1.style.left = currX+"px";
		}
	}

});

var one = false;

var Lower = rod2.getBoundingClientRect().top - rod1.getBoundingClientRect().height;
var dummyLower = Lower;
var Upper = rod1.getBoundingClientRect().top + rod1.getBoundingClientRect().height;
var Left = 0 ;
var Right = window.innerWidth - ball.getBoundingClientRect().width - 17; 

var ballX = ball.getBoundingClientRect().x;
var ballY = ball.getBoundingClientRect().y;

var rodX = rod1.getBoundingClientRect().x;

var myName = prompt("Enter Your Name: ");
localStorage.setItem(myName,0);
var count = 0;

start.onclick = function(){

	start.style.display = "none";

	var changeX = 20;
	var changeY = -10;

	var ch = true;

	var startMoving = setInterval(function(){

		let currY = ball.getBoundingClientRect().top;
		let currX = ball.getBoundingClientRect().left;
		
		// console.log(currY,currX);

		if( currY < Upper || currY > Lower){

			console.log("outside",currX,rod1.getBoundingClientRect().x);

			if(currX < rod1.getBoundingClientRect().x || currX > (rod1.getBoundingClientRect().x + rod1.getBoundingClientRect().width )){
				
				start.style.display = "block";
				let highScore = localStorage.getItem(myName);
				highScore = Math.max(parseInt(highScore) , parseInt(count));
				localStorage.setItem(myName,highScore);

				alert(myName + "'s Highest Score is: " + highScore + "\n Current score is: " + count);
				
				ball.style.left = ballX+"px";
				ball.style.top = ballY+"px";

				rod1.style.left = rodX+"px";
				rod2.style.left = rodX+"px";

				count = 0;
				ch = true;
				Lower = dummyLower;

				clearInterval(startMoving);
				return;
			}

			if(currY < Upper && ch){
				ch = false;
				Lower -= 10;
			}

			changeY = -changeY;
			count++;
		}

		if(currX < Left || currX >= Right){
			changeX = -changeX;
		}


		ball.style.left = currX+changeX+"px";
		ball.style.top  = currY+changeY+"px";
	},50);
};


