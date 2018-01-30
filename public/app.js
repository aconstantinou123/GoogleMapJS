var initialize = function () {
    var container = document.getElementById('main-map');
    var center = {lat: 51.507351, lng: -0.127758};
    var shoreditch = {lat: 51.528490, lng: -0.084728}
    var chesterfieldGardens = {lat: 51.579779, lng: -0.099005}
    var infowindow = new google.maps.InfoWindow({
        content: "This is London" });
    var mainMap = new MapWrapper(container, center, 10);
    var firstMarker = mainMap.addMarker(center);
    mainMap.addInfoWindow(firstMarker);
    mainMap.addMarker(shoreditch);
    mainMap.addMarker(chesterfieldGardens);
    mainMap.addClickEvent();
    var bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
    var chicagoButton = document.getElementById('set-chicago');
    chicagoButton.addEventListener('click', mainMap.goToChicago.bind(mainMap));
    var currentPositionButton = document.getElementById('current-position');
    currentPositionButton.addEventListener('click', mainMap.currentLocation.bind(mainMap));
}

window.addEventListener('load', initialize);