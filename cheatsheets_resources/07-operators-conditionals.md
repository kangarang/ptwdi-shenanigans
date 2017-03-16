# Operators / Conditionals

## Arithmetic Operators
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` remainder/modulus
- `**` exponent

## Comparison Operators
- `==`, `===` equal / strict equal (type checking)
- `!=`, `!==` not equal / strictly not equal (type checking)
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal

[MDN Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Logical Operators
- `&&` and (both are true)
- `||` or (at least one is true)
- `!` not

**AND**
```js
true && true
// true

true && false
// false

false && false
// false
```

**OR**
```js
true || true
// true

true || false
// true

false || false
// false
```

**NOT**
```js
!false || !false
// true
```

## Conditional statements
- `else if` and `else` are optional
- as many `else if` statements as you want
- 1 `else` statement

### Example Structure

```js
if (...) { // line 1
    // execute this code if the code inside the parentheses on line 1 evaluates to true

} else if (...) { // line 4
    // execute this code if
    // line 1 evaluated to false, but the code on line 4 evaluates to true

    if (...) { // line 8
        // nested if statement
        // execute this code if
        // line 1 is false, line 4 is true, and line 8 is true

    } else {
        // execute this code if
        // line 1 is false, line 4 is true, and line 8 is false

    };

    // more code can be executed here

} else if (...) { // line 21
    // execute this code if
    // lines 1 and 4 are false, but line 21 is true

} else {
    // no parentheses necessary
    // execute this code if
    // lines 1, 4, and 21 are all false

};
```
