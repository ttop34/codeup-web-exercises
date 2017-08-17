"use strict";


var userInput = prompt('Please enter an odd number between 1 and 50.');

for (var i = 1; i < 10 ; i++) {
    if (userInput % 2 === 0) {
       userInput=prompt('Please enter an odd number between 1 and 50.');
    }
    else {
        console.log('thakns for entering an odd number!')
        break;
    }

}
for (var j = 1; j < 50; j++) {
    if (j % 2 === 0) {
        continue;
    }

    if (userInput == j) {
        console.log(' Yikes!! skipping this number! ' + j);
    }
    else {
        console.log('here is an odd number ' + j);
    }

    if (j > 49) {
        break;
    }
}