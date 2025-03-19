/*
	Name excercise: squares
	Description: the first excercise of conditionals made with js 
	Autor: unArvoL
	Date: march 19th 2025
*/

let sideOne=1;
let sideTwo=1;
let sideThree=1;
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
			console.log("Square One is Greatter than square two and thre");
}
else if(squareOne==squareTwo && squareOne>squareThree && squareTwo==squareThree){
			console.log("Square si");
}
else if(squareOne>squareTwo && squareOne==squareThree && squareTwo==squareThree){
			console.log("Square si");
}