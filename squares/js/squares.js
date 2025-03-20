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
			console.log("Square One is Greatter than square two and three and this are equals");
}
else if(squareOne>squareTwo && squareOne==squareThree && squareTwo<squareThree){
			console.log("Square One and square Three are greatter than square Two and are equals");
}
else if(squareOne>squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square One is greatter than Two and Three and Two is greatter than Three but is minor than One");
}
else if(squareOne==squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square One and square Two are greatter than square Three and square One and Two are equals");
}
else if(squareOne==squareTwo && squareOne<squareThree && squareTwo<squareThree){
			console.log("Square Three is greatter than One and Two and this are equals");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than square One and square Three and square Three is gratter than One but lower than Two");
}
else if(squareOne<squareTwo && squareOne>squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than Three and One and One is greatter than Three but is lower than Two");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than Three and One and Three is greatter than One but is lower than Two");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo==squareThree){
			console.log("Square Two and Three are equals and are greatter than square One");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo>squareThree){
			console.log("Square Two and Three are equals and are greatter than square One");
}
else if(squareOne<squareTwo && squareOne<squareThree && squareTwo<squareThree){
			console.log("Square Three is greatter than One and Two and Two is greatter than One but lower than Three");
}
else if(squareOne>squareTwo && squareOne>squareThree && squareTwo<squareThree){
			console.log("Square One is greatter than Two and Three and Three is greatter than Two but lower than One");
}
else if(squareOne>squareTwo && squareOne<squareThree && squareTwo<squareThree){
			console.log("Square Three is greatter than One and Two and One is greatter than Two but lower than Three");
}
else if(squareOne<squareTwo && squareOne==squareThree && squareTwo>squareThree){
			console.log("Square Two is greatter than One and Three and this are equals");
}