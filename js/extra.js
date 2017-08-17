"use strict";

var stars = prompt('choose a number of stars between 1 and 10?');
var star = "";

for(var i=1;i <= stars;i++){
    for(var j= 0;j <= i;j++){
    }
    star = star + "*";
    console.log(star);
}