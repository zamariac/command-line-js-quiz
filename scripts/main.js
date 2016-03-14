
var questionOne = prompt('what does css stand for?');
var answerOne = 'cascading style sheet';
var counter = 0;

//1.

 if (questionOne === answerOne){
	console.log ("You are correct!")
	counter++;
}else if (questionOne === ''){
	console.log ("Please enter an answer");
}else {
	questionOne !== answerOne
		console.log("You are wrong!")
	}

//2.

var questionTwo = prompt('what kind of element is a <div>?');
var answerTwo = 'block';

if (questionTwo === answerTwo){
	console.log ("You are correct!")
	counter ++ ;
}else if (questionTwo === ''){
	console.log ("Please enter an answer");
}else {
	questionTwo !== answerTwo
		console.log("You are wrong!")
	}

//3.

var questionThree = prompt('How do you count string characters?');
var answerThree = '.length';

if (questionThree === answerThree){
	console.log ("You are correct!")
	counter ++;
}else if (questionThree === ''){
	console.log ("Please enter an answer");
}else {
	questionThree !== answerThree
		console.log("You are wrong!")
		
	}
	

//4.

var questionFour = prompt("In CSS, how would you select all the <p> tags on a page?");
var answerFour = 'p{}';

if (questionFour === answerFour){
	console.log ("You are correct!")
	counter ++;
}else if (questionFour === ''){
	console.log ("Please enter an answer");
}else {
	questionFour !== answerFour
		console.log("You are wrong!")
		
	}

console.log(counter);	








//confirm (); gives a yes or no prompt
// if (condition) {
//    statements1
// } else {
//    statements2
// }