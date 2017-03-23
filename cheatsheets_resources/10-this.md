# `this`

Adapted from [YouDontKnowJS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

`this` is **not** literally the function that it's written in.

```js
function numbFunc(number) {
	console.log("numbFunc: " + number)
	this.count ++
}

numbFunc.count = 0

for (var i = 0; i < 4; i ++) {
	numbFunc(i)
}
// numbFunc: 0
// numbFunc: 1
// numbFunc: 2
// numbFunc: 3
// numbFunc: 4

console.log(numbFunc.count)
// 0
// huh??
```
<hr>

`this` is **not author-time binding**

`this` is **run-time binding**

what `this` references is determined entirely by the **call-site**, or **where the function was called**

`this` is a binding that is created when a function is invoked.

`this` is **contextual**, based on the **conditions** of the function's **invocation**

`this` has to do with the manner in which the function is called.

```js
var name = "isaac"

function sayMyName() {
	console.log(this.name)
}

sayMyName()
// isaac
```

when `sayMyName` is called, the binding for `this` applies to the location of the function call

<!--note: this will not work in `strict mode`.-->

so `this` refers to the global object, and `this.name` points to the global variable `name`.

<hr>

```js
var kangarang = {
	name: "isaac",
	speak: sayMyName
}

function sayMyName() {
	console.log(this.name)
}

kangarang.speak()
// isaac
```

when `speak` is called, it is preceded by an object reference `kangarang`

when there is a context object for a function reference, it's THAT object which should be used for the function call's `this` binding.

however, it is only the top-level, or the last context, of an object property reference chain that matters in terms of call-site.

```js
function sayMyName() {
	console.log(this.name)
}

var codE = {
	name: "cody",
	ta: kangarang
}

var kangarang = {
	name: "isaac",
	speak: sayMyName
}

codE.ta.speak()
// isaac
```

even though `codE` is part of the context in which we call `sayMyName()` in `codE.ta.speak()`

only the last object matters in terms of call-site.

thus...

`kangarang` is the `this` for the `sayMyName()` call.

so..

`this.name` means `kangarang.name`

<hr>

...to be continued