"use strict";

// var numberChosen = (prompt("please enter a number between 1 and 10"));
//
// var i =0;
//
// for (numberChosen; i <= 10; i++) {
//     var x = numberChosen * i;
//     console.log(numberChosen + " x " + i + " = " + x );
// }
//
// var number = Math.floor(Math.random() * 180) + 20;
// console.log(number);

for (var i = 1; i <= 10; i++) {
    var number = Math.floor(Math.random() * 180) + 20;
    if (number % 2 === 0) {
        console.log(number + " is even");
    }
    else {
        console.log(number + " is odd");
    }
}


