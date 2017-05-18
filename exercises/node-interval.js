// using setTimeout
var printer = function () {
    console.log(" * ".repeat(counter))
}

for (var i = 0; i < 10; i++) {
    setTimeout(printer, 500 * i)
}


// using setInterval
var counter = 10

var printer = function () {
    console.log(" * ".repeat(counter))
    counter--
    if (counter === 0) {
        clearInterval(timer)
    }
}

var timer = setInterval(printer, 500)
