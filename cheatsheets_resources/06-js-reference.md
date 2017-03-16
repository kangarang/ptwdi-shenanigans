# JavaScript

## Notes
- JavaScript was built in 10 days
- Created by Brendan Eich (Netscape / Mozilla)
- Definitely not the most respected programming language
- Lots of trip-ups
- JS has evolved a LOT - has super cool features now
- Has a lot of flexibility -- multi-paradigm

### TEST YOUR CODE
- Proper syntax is key
- use `typeof()` and `console.log()` to test / debug your program


## Primitives

Most basic form of JS data.

Primitives | String | Number | Boolean | null | undefined
--- | --- | --- | --- | --- | ---
**Meaning** | plain text with single or double quotes | numerical value | logic, used for testing conditions | reference to something that exists, but has no value | no reference, therefore -- doesn't exist / no value
**Examples** | `"nycda-shenanigans"`, `'Hello, world!'` | `100`, `2.5` |  `true`, `false` | `null` | `undefined`



#### Exercise

```js
console.log(typeof(5))
// number
console.log(typeof(5.0))
// number
console.log(typeof('five'))
// string
console.log(typeof('boolean'))
// string
console.log(typeof(true))
// boolean
console.log(typeof('true'))
// string
console.log(typeof(false))
// boolean
console.log(typeof('false'))
// string
console.log(typeof('null'))
// string
console.log(typeof(null))
// object -- JS quirk!
console.log(typeof(undefined))
// undefined
console.log(typeof(five))
// undefined
console.log(typeof(NaN))
// number
```


## Logic / Control Flow

### Comparison Operators

Used to check the values and the type of value (primitives)

assignment | comparison | inequality | strict comparison | strict inequality
--- | --- | --- | --- | ---
`=` | `==` | `!==` | `===` | `!===`

Get in the habit of using `===` and `!==`

#### Exercise

```js
console.log(5 === 6)
// false
console.log(5 === '5')
// false
console.log(5 == '5')
// true
console.log(13098 !== '13098')
// true
console.log(13098 == '13098')
// true
console.log(13098 === '13098')
// false
console.log(13098 != '13098')
// false
console.log(true == 'true')
// false
console.log(true === 'true')
// false
console.log(false === 'false')
// false
console.log(false == 'false')
// false
```


### Math Operator Shortcuts

We're gonna add and subtract a lot

#### Exercise

```js
var diez = 10
diez ++
diez += 11
diez -= 89
diez --
diez += 70
// now what is diez ??
```


## Arrays

#### Trippy Exercise

```js
var index = 2
var myArray = [1, "two", 3.4]
// variables are written using camelCase
// thisIsCamelCase
// humps!

console.log(myArray[1]);
// "two"
console.log(myArray[2]);
// 3.4
console.log(myArray[0]);
// 1
console.log(myArray[3]);
// undefined
console.log(myArray[4]);
// undefined

var four = undefined

myArray.push(four);
console.log(myArray);
// [1, "two", 3.4, undefined]

var four = "four";
myArray.push(four);
console.log(myArray);
// [1, "two", 3.4, undefined, "four"]


console.log(myArray[4]);
// "four"
console.log(myArray);
// [1, "two", 3.4, undefined, "four"]


console.log(myArray[3]);
// undefined (the primitive)
console.log(myArray[three]);
// three is not defined
console.log(myArray);
// [1, "two", 3.4, undefined, "four"]


var three = index;

console.log(myArray[three]);
// 3.4

three = 1

console.log(myArray[index]);
// 3.4

console.log(myArray[three]);
// two

console.log(myArray);
// [1, "two", 3.4, undefined, "four"]

console.log(myArray[four]);
// undefined

myArray[0] = "shenanigans"
console.log(myArray);
// ["shenanigans", "two", 3.4, undefined, "four"]

console.log(myArray["0"]);
// shenanigans

console.log(myArray["index"]);
// undefined

```
