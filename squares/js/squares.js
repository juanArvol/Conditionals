/*
	Name excercise: squares
	Description: the first excercise of conditionals made with js 
	Autor: unArvoL
	Date: march 19th 2025
*/

let sideOne=prompt("choose a sideOne");
let sideTwo=prompt("choose a sideTwo");
let sideThree=prompt("choose a sideThree");
let squareOne; 
let squareTwo;
let squareThree;

squareOne= sideOne*sideOne;
squareTwo= sideTwo*sideTwo;
squareThree= sideThree*sideThree;

if(squareOne==squareTwo && squareOne==squareThree && squareTwo==squareThree){
			console.log("All squares are equals");
}
else if(squareOne>squareTwo && squareOne>squareThree && squareTwo==squareThree){
			console.log("Square One is Greatter than square two and three");
}
else if(squareOne>squareTwo && squareOne==squareThree && squareTwo<squareThree){
			console.log("Square one and square three are greatter than square two");
}
else if(squareOne>squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square One is greatter than Two and Three and Two is greatter than Three but is minor than One");
}
else if(squareOne==squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square one and square two are greatter than square three");
}
else if(squareOne==squareTwo && squareOne<squareThree && squareTwo<squareThree){
			console.log("Square Three is greatter than One and Two");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than square One and square Three");
}
else if(squareOne<squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than Three and One and One is greatter than Three but is minor than Two");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than Three and One and Three is greatter than One but is minor than Two");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo==squareThree){
			console.log("Square Two and Three are equals and are greatter than square One");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two and Three are equals and are greatter than square One");
}

