"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 * Now store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

(function () {

function sayHello(name) {
    return "Hello, " + name + "!"
}

sayHello("Elvin");

var helloMessage = sayHello("Elvin");



var myName = "Elvin";

sayHello(myName);

})();

/// done with this part of the code ////


//_________________________________________________________________________________________________________________//



// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

(function () {

    function isOdd(number) {
        return random % 2 === 1 ? random + " is odd" : random + " is not odd";

    }

    console.log(isOdd(49)); //this is how to check if what im doing is right!//

})();

// were done with this part of the code //


/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */
/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

(function () {


    function calculateTip(tipPercentage, total) {
        return "$" + tipPercentage * total;

    }

// console.log(calculateTip(0.10, 60)); // this is how to test the function yet again//

    var billTotal = parseInt(prompt("What was your bill total?"));
    var wantToTip = parseInt(prompt("what percentage would you like to tip?"));

    var shouldTip = wantToTip / 100;

    alert("You should tip " + calculateTip(shouldTip, billTotal));

})();






