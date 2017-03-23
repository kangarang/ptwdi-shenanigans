# JS Functions
- Functions allow for cleaner code and bring programs to life
- DRY: Don't Repeat Yourself -- if you find yourself writing the same thing over and over, you're wrong
- Reusability


## Function Tips
- Think about what you want out of your function before you write it
- After you're done writing a function, write a comment about it
- Comment what the function does, and (even better) why you wrote it
- This will help you **catch stupid mistakes**, and help you **understand** what your code does on a deeper lever
- Keep your functions SMALL -- your function is longer than 10-15 lines of code, you should probably make another function

## Built-in JS Methods
JS comes with built-in intrinsic helper functionsthat do different things
- `console.log()`, `typeof()`, `parseInt()` are all built-in functions

### Built-in methods are specific
##### Be mindful of:
- syntax
- what does it do?
- what does it **return**?
- how is it useful?
- any 'gotchas'?

### Built-in String Methods
[String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Some common ones:

`.toUpperCase()`, `.toLowerCase()`, `.charAt()`, `.indexOf()`, `.replace()`, `.slice()`, `.split()`

## Built-in Array Methods
[Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Some common ones:

`.push()`, `.pop()`, `.unshift()`, `.shift()`, `.split()`, `.slice()`, `.join()`, `.reverse()`, `.sort()`

## Functions
[MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

#### 2 ways to write a function

**1. Anonymous Function**
```js
// anonymous function expression
// no name for the function
// function is stored in a variable
// which is a reference to the anonymous function
var referenceToFunction = function(param1, param2) {
    // execute code
}

// invoke a function by using it's reference to run the code inside of it
referenceToFunction()
```
#### Break it down

keyword var to "declare" a variable | name your variable | single equals means assignment | keyword function creates scope | assign local scope variables using parameter(s) | execute code once function is called | invoke the function to execute its code
--- | --- | --- | --- | --- | --- | ---
var | referenceToFunction | = | function | (param1, param2) | { code } | referenceToFunction()

**2. Named Function**
```js
// named function expression
function nameOfFunction(param1, param2) {
    // execute code
}

// invoke function using its name
nameOfFunction()
```

## Parameters
Parameters are optional, and you can have as many as you want.

Parameters create function-scope variables that **only exist within that function**.

Those variables are not available outside of the function.

```js
// no parameters
var sayHi = function() {
    alert("Hi!")
}

sayHi()
// "Hi!"



var globalVar = 23

function messWithGlobal() {
    globalVar += 7
    console.log(globalVar)
}

messWithGlobal()
// 30



// one parameter
var addOne = function(parameter) {
    // code goes here
    console.log(parameter + 1)
}

console.log(parameter)
// parameter is not defined

addOne(parameter)
// parameter is not defined

addOne(1)
// 2

addOne(5)
// 6

addOne("Hello")
// Hello1


// two parameters
var addTwoParams = function(param1, param2) {
    param2 = param1
    console.log(param1 + param2)
}

addTwoParams(3, 7)
// 6

addTwoParams(6)
// 12
```


# `return`

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

The `return` statement ends function execution and specifies a value to be returned to the function caller.

When a return statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, undefined is returned instead.

...to be continued