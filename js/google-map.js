function myMap() {
    var e = {
        center: new google.maps.LatLng(55.508742, 12.12085),
        zoom: 5
    };
    new google.maps.Map(document.getElementById("googleMap"), e)
}