var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 8
    });

    marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        map: map,
        title: 'Current Location'
    });
}

document.getElementById('trackButton').addEventListener('click', function() {
    // Simulated user's location (replace with actual geolocation code)
    var userLocation = { lat: 37.7749, lng: -122.4194 };

    updateMarker(userLocation);
});

function updateMarker(location) {
    marker.setPosition(location);
    map.panTo(location);
}
