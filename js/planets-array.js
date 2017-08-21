(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];


    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log(planets.splice(0,0, 'Sun'));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.splice(9,0, 'Pluto'));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.splice(0,1));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.splice(8,1));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.indexOf('Earth'));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log(planets.splice(3, 1));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.splice(planets.indexOf('Earth') +1, 0, 'Mars'));
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.reverse());
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.sort());
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
})();
