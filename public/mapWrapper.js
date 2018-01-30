var MapWrapper = function (container, coords, zoom) {
    var container = document.getElementById('main-map');
    this.googleMap = new google.maps.Map(container,
        {
            center: coords,
            zoom: zoom
        });
    this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
    })
    this.markers.push(marker);
    return marker;
}

MapWrapper.prototype.bounceMarkers = function () {
    this.markers.forEach(function (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    })
}

MapWrapper.prototype.addInfoWindow = function (marker) {
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: "This is london"
            })
            infoWindow.open(this.googleMap, marker);
    });
}

MapWrapper.prototype.addClickEvent = function () {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
        var coords = {lat: event.latLng.lat(), lng:event.latLng.lng()}
        this.addMarker(coords);
    }.bind(this));

}

MapWrapper.prototype.goToChicago = function () {
        console.log(this.googleMap.getCenter());
        var chicago = {lat: 41.8781, lng: -87.6298};
        this.googleMap.setCenter(chicago);
        this.addMarker(chicago);
        console.log('Method Called')
}

MapWrapper.prototype.currentLocation = function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            var currentCoords = {lat: position.coords.latitude, lng: position.coords.longitude};
            this.googleMap.setCenter(currentCoords);
            this.addMarker(currentCoords)
        }.bind(this));
    }
}