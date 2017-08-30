"use strict";

    // Set our map options
var mapOptions = {
        // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    // Render the map
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


var pepperjax = { lat: 41.298063, lng: -96.023206 };


// Add the marker to our existing map
var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: pepperjax

});

var infowindow = new google.maps.InfoWindow({
    content: "<h3>This is PepperJax Grill</h3>This place has an awesome steak wrap"
});

marker.addListener('click', function() {
    infowindow.open(map, marker);
});

var address = "4303 N 72nd St, Omaha, NE 68134";

// Init geocoder object
var geocoder = new google.maps.Geocoder();

// Geocode our address
geocoder.geocode({ "address": address }, function(results, status) {

    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {
        // Recenter the map over the address
        map.setCenter(results[0].geometry.location);
    } else {

        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
});
