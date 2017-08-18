(function(){
    "use strict";
var names = ['Jessie', 'Max', 'James', 'Mark'];
//
// console.log('Number of elements in array is ' +names.length + ".");
//
// console.log(names[0] + ', ' + names[1] + ', ' + names[2] + ', ' + names[3] + '.');

var numbers= [1, 2, 3, 4, 5];

    // for (var i = 1; i < numbers; i++){
    //     numbers = numbers + 2;
    // }
    //


    numbers.forEach(function (element, index){
        numbers [index] = element + 2;
    });

console.log(numbers);




})();



