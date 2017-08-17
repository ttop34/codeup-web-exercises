var i = 1;

while (i < 65536) {
    i = i * 2
    console.log(i)
}

// This is how you get a random number between 50 and 100

// var allCones = Math.floor(Math.random() * 50) + 50;
// var remainingCones = allCones;
//
// do {
//
// // This is how you get a random number between 1 and 5
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//
//     if (conesSold > remainingCones) {
//         console.log('Cannot sell you ' + conesSold + " i only have " + remainingCones);
//     }
//     else {
//         remainingCones = remainingCones - conesSold;
//         console.log(conesSold + " cones sold!");
//     }
// } while (remainingCones > 0);
// console.log('out of cones');

