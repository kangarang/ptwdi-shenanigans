# Data Structures

## Variables

A variable is just a container that stores data.

You can store strings, numbers, booleans, arrays, objects, functions, anything really...

Once you store data in a variable, you can use the variable name as a **reference** to the data that you stored in it. How convenient!

Just like as the name suggests, variables can change.

```js
var name = "isaac"; // use keyword var to declare a variable. variables don't exist unless you declare them.
// name is a variable with string value "isaac"

console.log(name);
// isaac

name = "cody";
// name is now string "cody"

name = 4;
// name is now number 4

name = {
    first: "cody",
    last: "robbins"
};
// name is now an object,
// with 2 keys, first and last,
// which have string values "cody" and "robbins", respectively
```

## Arrays [ ]

An array is another type of container that stores data.

An array is a **ordered list**.

Arrays are sorted by **index**.

Index is always a number.

Index starts at 0.

You can access and change an array's values using index.

```js
var emptyArray = [];
// create an empty array and store it in the variable emptyArray

var myArray = ["zero", "one", "two", "three"]
// create an array and store it in the variable myArray

console.log(myArray[0]) // the 0 index of myArray is:
// zero

console.log(myArray[3]); // the 3 index of myArray is:
// three

myArray[3] = 1000 // single equal sign is used for assignment
// the 3 index of myArray is now number 1000

console.log(myArray);
// ["zero", "one", "two", 1000]

console.log(myArray.length); // Array.length is a built-in method which returns the greatest index in the array + 1
// 4

console.log(myArray[myArray.length - 1]); //myArray.length returns the value 4, so this essentially means: console.log(myArray[3])
// 1000
```

## Objects { }

Objects are another type of container that stores data.

Objects are kind of like arrays, except they are sorted by **keys**, not indices.

Keys are variables.

Each key has a value.

Value is the data that is stored in a key.

key: value

The key is a reference to its value.

Access the value by calling the key.

Keys are also called **properties**

### Dot notation

```js
var codE = {
    firstName: "cody",
    lastName: "robbins"
};
// codE is an object
// codE the object has keys: firstName and lastName,
// which have string values: "cody" and "robbins", respectively

console.log(codE.firstName);
// cody

console.log(codE.lastName);
// robbins
```

### Bracket notation
```js
var codE = {
    firstName: "cody",
    lastName: "robbins"
}

console.log(codE["firstName"]); // string surrounded by square brackets
// cody
```

#### Assignment
```js

var codE = {
    firstName: "cody",
    lastName: "robbins"
};

codE.cohort = "pt wdi"
codE["ta"] = "isaac"

console.log(codE);
// {
//     firstName: "cody",
//     lastName: "robbins",
//     cohort: "pt wdi",
//     ta: "isaac"
// }


var group = "shenanigans";
// declare group with string value "shenanigans"
// remember: variables can be referenced somewhere else

codE.cohort = group;

console.log(codE);
// {
//     firstName: "cody",
//     lastName: "robbins",
//     cohort: "shenanigans",
//     ta: "isaac"
// }
```
...what just happened?

## Pass by reference

When we wrote `codE.cohort = group`, we changed the value of cohort (which is a key in the codE object). we assigned it the value of group. group is a variable -- it's a reference to a value, the string "shenanigans".

## Mutability
```js
var person = {
    first: "isaac",
    last: "kang",
    age: 50
};

var x = person;
x.age = 10;

console.log(x.age);
// 10

console.log(person.age);
// 10 huh ??????
```

### WTF?

nrabinowitz, http://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value

- Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.

- Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.

- However, changing a property of an object referenced by a variable does change the underlying object.


**So in other words...**

When we declared the variable x and assigned it a value of person, x did not become a copy of person.

x became a **reference** to person. Essentially, x IS person.

So then when we mutated the value of x.age, we changed the value of person.age, because x was still referencing person.

Therefore, we changed the value of person.


```js
var arr = [];
var v2 = arr.push(2);

console.log(arr);
// [2]

console.log(v2);
// 1
```

....**huh**?
