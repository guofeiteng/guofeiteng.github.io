function calcRoute() {
  directionsDisplay.setMap(map);
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}


/*  
This javascript file is for calculating route, 
this function will be called when everytime user changes the option on dropdown menu in index.html and step.html.
This function will call the google map api and return the route( walking mode) on map.
*/


