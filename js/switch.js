"use strict";
//
// // Don't change the next two lines!
// // This creates two variables:
// //     one with the colors of the rainbow, and another with a single randome
// //     another with a single random color value
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];
//
// switch (color) {
//     case 'red':
//         console.log('red is the color of fire.');
//         break;
//     case 'blue':
//         console.log('blue is the color of the ocean.');
//         break;
//     case 'green':
//         console.log('green is the color of money.');
//         break;
//     case 'orange':
//         console.log('orange is the color of a basketball.');
//         break;
//     case 'yellow':
//         console.log('yellow is the color of a banana');
//         break;
//     default :
//         console.log('I do not know anything by that color.');
//         break;
//
//     // TODO: create a case statement that will handle every color except indigo and violet
//     // TODO: when a color is encountered log a message that tells the color, and an object of that color
//     //       example: Blue is the color of the sky.
//
//     // TODO: create a default case that will catch indigo and violet
//     // TODO: for the default case, log: I do not know anything by that color.
// }

//
//
// var ryanAmount = 250;
// var cameronAmount = 180;
// var georgeAmount = 320;
//
// var ryanFinalPrice = ryanAmount;
// var cameronFinalPrice = cameronAmount;
// var georgeFinalPrice = georgeAmount;
//
//
// // for each individual
// // write an if statement that checks if their amount is >= 200
//     // reassign their final price to equal original amount * 0.9
//
// // write 3 console.logs that use both variables for each person
//
//     if (ryanAmount >= 200)  {
//         console.log('Ryans price was ' + ryanAmount + ', but is now ' + parseInt(ryanAmount * 0.9));
//     }
//     else {
//         console.log('Ryans final price is ' + ryanFinalPrice)
//     }
//
// if (georgeAmount >= 200)  {
//     console.log('georges price was ' + georgeAmount + ', but is now ' + parseInt(georgeFinalPrice * 0.9));
// }
// else {
//     console.log('georges final price is ' + georgeFinalPrice)
// }
// if (cameronAmount >= 200)  {
//     console.log('camerons price was ' + cameronAmount + ', but is now ' + parseInt(cameronFinalPrice * 0.9));
// }
// else {
//     console.log('camerons final price is ' + cameronFinalPrice)
// }
//


// var flipACoin = Math.floor(Math.random()* 2);
//
// var buyHouse = 1;
//
// var buyCar = 0;
//
// //  if (flipACoin === buyHouse) {
// //     console.log('buy a house dude!');
// // }
// // else {
// //     console.log('buy that new ride bro!');
// // }
//
// (flipACoin === buyHouse) ? console.log('buy that house!') : console.log('Buy that car');

var confirmed = confirm('would you like to enter a number?');
console.log(confirmed);



    if (confirmed === true) {
        var numberPicked = parseInt(prompt('please enter your number'));
    }

    if (isNaN(numberPicked)) {
        alert("Nice try! That is not a real number buddy!");

    }
     else if (numberPicked % 2 === 0 && numberPicked > 0) {
        alert(numberPicked + " is even");
        alert(numberPicked + " plus 100 is " + (numberPicked + 100));
        alert(numberPicked + " is positive");
    }

    else if (numberPicked % 2 === 1 && numberPicked > 0){
        alert(numberPicked + " is odd");
        alert(numberPicked + " plus 100 is " + (numberPicked + 100));
        alert(numberPicked + " is positive");
    }

    else if (numberPicked % 2 === 0 && numberPicked < 0) {
         alert(numberPicked + " is even");
         alert(numberPicked + " plus 100 is " + (numberPicked + 100));
         alert(numberPicked + " is negative");
     }


    else if (numberPicked < 0) {
        alert(numberPicked + " is odd");
        alert(numberPicked + " plus 100 is " + (numberPicked + 100));
        alert(numberPicked + " is negative");
     }