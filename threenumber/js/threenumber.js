/*
	Name exercise: Two numbers
	Description: Two Numbers
	Autor: AndresMC
	Date: march 15th 2025
*/

let numberOne=4;
let numberTwo=2;
let numberThree=10;


if(numberOne==numberTwo && numberOne==numberThree && numberTwo==numberThree){
			console.log("All numbers are equals");
}
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo==numberThree){
			console.log("Number One is Greatter than Number two and three and this are equals");
}
else if(numberOne>numberTwo && numberOne==numberThree && numberTwo<numberThree){
			console.log("Number One and Number Three are greatter than number Two and are equals");
}
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo>numberThree){
			console.log("Number One is greatter than Two and Three and Two is greatter than Three but is minor than One");
}
else if(numberOne==numberTwo && numberOne>numberThree && numberTwo>numberThree){
			console.log("Number One and number Two are greatter than number Three and number One and Two are equals");
}
else if(numberOne==numberTwo && numberOne<numberThree && numberTwo<numberThree){
			console.log("Number Three is greatter than One and Two and this are equals");
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo>numberThree){
			console.log("Number Two is greatter than number One and number Three and number Three is gratter than One but lower than Two");
}
else if(numberOne<numberTwo && numberOne>numberThree && numberTwo>numberThree){
			console.log("Number Two is greatter than Three and One and One is greatter than Three but is lower than Two");
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo>numberThree){
			console.log("Number Two is greatter than Three and One and Three is greatter than One but is lower than Two");
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo==numberThree){
			console.log("Number Two and Three are equals and are greatter than number One");
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo>numberThree){
			console.log("Number Two and Three are equals and are greatter than number One");
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo<numberThree){
			console.log("Number Three is greatter than One and Two and Two is greatter than One but lower than Three");
}
else if(numberOne>numberTwo && numberOne>numberThree && numberTwo<numberThree){
			console.log("Number One is greatter than Two and Three and Three is greatter than Two but lower than One");
}
else if(numberOne>numberTwo && numberOne<numberThree && numberTwo<numberThree){
			console.log("Number Three is greatter than One and Two and One is greatter than Two but lower than Three");
}
else if(numberOne<numberTwo && numberOne==numberThree && numberTwo>numberThree){
			console.log("Number Two is greatter than One and Three and this are equals");
}
