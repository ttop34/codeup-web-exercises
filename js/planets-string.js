(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    planetsArray = planetsString.split('|');

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

   var resHtml= planetsArray.join("<br/>");
   console.log(resHtml);


    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    // <ul>
    //     <li></li>
    // </ul>

    var listHmtl = "<ol><li>";
    listHmtl += planetsArray.join("</li><li>");
    listHmtl += "</li><ol>";

    console.log(listHmtl);

    document.body.innerHTML = listHmtl;

})();
