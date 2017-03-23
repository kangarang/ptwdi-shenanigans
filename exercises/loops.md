# 1
## Build a program that asks the user to guess a secret number
- randomly generate a number between 1 - 10. store it in a variable.
- ask the user to guess a number 1-10.
- use conditional statements to determine if the user guessed correctly.
- if user guesses correctly, tell them they win.
- if user guesses less than or greater than the number, tell them they're over or under.

```js
var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = parseInt(prompt("Guess a number between 1-10"))

if (guess === secretNumber) {
	console.log("You win!");
} else if (guess > secretNumber) {
	console.log('You guessed over!');
} else if (guess < secretNumber) {
	console.log('You guessed under!');
} else {
	console.log('Hmm...not sure what to do with that input');
}
```

### Little safer version
```js
var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = parseInt(prompt("Guess a number between 1-10"))

if (guess <= 10 && guess >= 1) {
	if (guess > secretNumber) {
		console.log('You guessed over!');
	} else if (guess < secretNumber) {
		console.log('You guessed under!');
	} else {
		console.log('You win!');
	}
} else {
	console.log('Hmm...not sure what to do with that input');
}

```

# 2
## Rewrite exercise number 1 using a while loop

```js
var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = parseInt(prompt("Guess a number between 1-10"))

var gameOver = false;

while (gameOver === false) { // (!gameOver) works too
	if (guess <= 10 && guess >= 1) {
		if (guess > secretNumber) {
			guess = parseInt(prompt("You guessed " + guess + ". That's too high. Try again!"));
		} else if (guess < secretNumber) {
			guess = parseInt(prompt("You guessed " + guess + ". That's too low. Try again!"));
		} else {
			console.log("You guessed " + guess + ". You win!");
			gameOver = true;
		}
	} else {
		guess = parseInt(prompt("Hm.. not sure what to do with that input. Try again!"))
	}
};
```

# 3
## Rewrite exercise 1 using a for loop. This time, the user only gets 3 guesses.

```js
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess a number between 1-10"));

if (userGuess >= 1 && userGuess <= 10) {
	forLoop()
}

function forLoop() {
	for (var i = 0; i < 3; i++) {
		if (i === 2) {
			if (userGuess === secretNumber) {
				console.log("You won!");
			} else {
				console.log("You lose!");
			}
		} else {
			if (userGuess === secretNumber) {
				return console.log("You won!")
			} else if (userGuess < secretNumber) {
				userGuess = parseInt(prompt("Nope! Try higher."))
			} else if (userGuess > secretNumber) {
				userGuess = parseInt(prompt("Nope! Try lower."))
			} else {
				userGuess = parseInt(prompt("Hm..not sure what to do with that input. Try again!"))
			}
		}
	};
}
```


# 4
## Build a program that prompts the user to enter a number. Find all numbers between 1 and 1000 that are evenly divisible by that number.

```js
var userNumber = parseInt(prompt("Enter a number between 1-1000"));

for (var i = 1; i <= 1000; i++) {
	if (i % userNumber === 0) {
		console.log(i);
	}
}
```

### Safer version
```js
// declare global variables
var userNumber;
var arrayOfNums = [];

// start the program by invoking a function
askUserForNumber();

// prompts the user, sets the user's number
// invoke another function to check the number
function askUserForNumber() {
	userNumber = parseInt(prompt("Enter a number between 1-1000"));
	checkForNumber(userNumber);
};

// make sure the number is between 1 - 1000
// if so, invoke the next function
// if not, invoke the previous function again
function checkForNumber(num) {
	if (num <= 1000 && num >= 1) {
		createArray(num);
	} else {
		alert("Invalid entry");
		askUserForNumber();
	};
};

// display the results as an array
function createArray(n) {
	console.log("You entered " + userNumber + ". Theses are all the numbers between 1-1000 that are divisible by " + userNumber + ".");

	for (var i = 1; i <= 1000; i++) {
		if (i % n === 0) {
			arrayOfNums.push(i);
		};
	};

	console.log(arrayOfNums);
};
```
