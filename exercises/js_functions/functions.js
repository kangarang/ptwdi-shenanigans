// use the cheatsheets for help
// use MDN, stack overflow, and google for help






// 1
// build a function that logs the variable `logThis` to the console

function logToConsole() {
	var logThis = "Hello, world!"
	// enter code here
	// console.log(logThis);
};

logToConsole();






// 2
// build a function that takes two number parameters, adds them,
// and logs the sum to the console

function returnSum(x, y) {
	// enter code here

};

returnSum(4, 6);

returnSum(2, 5);







// 3
// build a function that uses a for loop
// loop 5 times and console.log('Hello, world!');

function helloWorld() {
	// enter code here

};

helloWorld();






const config = {
    
}



// 4
// build a function that takes 1 parameter (a string)
// and logs to the console "Hello: " and then whatever the string was

function logOneParam(p) {
	// enter code here

};

logOneParam("Nanigans");









// 5
// build a function that takes 2 parameters
// and returns the largest of them.
// use if-else statement

function maxOfTwoNumbers(x, y) {
	// enter code here

};

maxOfTwoNumbers(4, 10);










// 6
// build a function that takes 3 numbers as parameters
// and returns the largest of them

function maxOfThree(x, y, z) {
	// enter code here

};

maxOfThree(10, 39, 59);











// 7
// build a function that takes 1 character (string)
// and returns `true` if it's a vowel, and `false` otherwise
// note: .indexOf returns -1 if the char is not in the array

function isCharacterAVowel(c) {
	// enter code here

};

isCharacterAVowel('a');
isCharacterAVowel('f');









// 8
// build two functions
// one that adds all the numbers in an array of numbers
// and another that multiplies all the numbers in an array of numbers
// for example, sumArr([1, 2, 3, 4]) should return 10
// multiplyArr([1, 2, 3, 4]) should return 24

function summArr(arr) {
	// enter code here

};

summArr([1, 2, 3, 4]);

function multiplyArr() {
	// enter code here

};

multiplyArr([1, 2, 3, 4]);










// 9
// build a function that returns the numbers of parameters passed to the function when called
// hint: google search

function numberOfArguments() {
	// enter code here

};

numberOfArguments(1, 'a', 3, 'd', 'f');









// 10
// build a function that reverses a string
// so reverseString('Isaac Kang') should return 'gnaK caasI'
// hint: one way to do this is to convert the string into an array, then back into a string
// use built-in JS string/array

function reverseString(str) {
	// enter code here

};

reverseString('Isaac Kang');











// 11
// build a function that takes an array of words and returns
// the length of the longest word in the array

function findLongestWord(arr) {
	// enter code here

};


findLongestWord(['Cody', 'Shenanigans', 'JavaScript']);











// 12
// build a function that takes an array as a parameter
// reverse the array and return the new array

function arrayReverser(arr) {
	// enter code here

};

arrayReverser(["C", "O", "D", "Y"]);









// 13
// build a function that takes an array of numbers as a paramter
// find the max value in the array

function maxValue(arr) {
	// enter code here

};

maxValue([2, 6, 4, 9, 1]);








// bonus
// build a program that creates a deck of 52 cards and 2 players
// the deck of cards should have
// 4 suits (D, C, H, S)
// and values (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
// "shuffle" the deck and deal 2 cards (1 to each player)
// The player with the higher card wins. Change the DOM using the winner variable
// if you can get this far, add some more rules!


// enter code here
var winner = document.querySelector("#winner")
// enter code here




// this part is for click events
var two = document.getElementById("two");
var one = document.getElementById("one");

one.addEventListener('click', function() {
	// execute this code once the user clicks on
	// one, aka the element with id="one"
	console.log("user clicked div one!");
	console.log(two.innerText);
	two.innerText = "meg";
});






// this part is for keypress events
var two = document.getElementById("two");
var one = document.getElementById("one");

window.addEventListener('keypress', function(e) {
	// execute this code once the user presses a key
	console.log(e.key);
	changeText(e.key);
});

function changeText(param) {
	console.log("user pressed a key! This is the key! " + param);
	console.log(two.innerText);
	two.innerText = param;
};
























//
//
//
//
// var name = "isaac"
//
// var isaac = 12323;
//
// var myObject = {
// 	kang: isaac
// }
//
// function first() {
// 	// var waterBottle = "water"
// 	console.log("first");
// }
//
// function second() {
// 	// var chair = "chair"
// 	console.log("second");
// }
//
// second()
//
// first()
// // console.log(myObject);
