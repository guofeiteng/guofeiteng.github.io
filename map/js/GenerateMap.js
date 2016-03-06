var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

//set three maps while get into the application.
var AllEntrance;
AllEntranceOverlay.prototype = new google.maps.OverlayView();

var ATM;
ATMOverlay.prototype = new google.maps.OverlayView();

var Cafe;
CafeOverlay.prototype = new google.maps.OverlayView();


function initialize() 
{
  //set the begining point.
  var hartley = new google.maps.LatLng(50.935072,-1.395726);
  var mapOptions = 
  {
    zoom:17,
    center: hartley
  }
  //set the map for navigation function
  directionsDisplay = new google.maps.DirectionsRenderer();  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);

  //read three dataset for setting up the locations.
  d3.json("json/AllEntrance.json",drawMap);
  d3.json("json/ATM.json",drawATMMap);
  d3.json("json/cafe.json",drawCafeMap);
  //set the all entrance locations initially.
  AllEntrance = new AllEntranceOverlay();

  
}


google.maps.event.addDomListener(window, 'load', initialize);



//set the allentrance overlays
function AllEntranceOverlay()
{
  this.div_ = null;
  this.setMap(map);
}


function drawMap(data)
{
  AllEntranceOverlay.prototype.onAdd = function() 
  {
    //select the style of entrance, whcih draw circle as color yellow.
   layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "Entrance");
  };

    // Draw markers as SVG elements on overlays.

  AllEntranceOverlay.prototype.draw = function() 
  {
    var projection = this.getProjection(),
        pad = 10;
    var marker = layer.selectAll("svg")
        .data(d3.entries(data))
        .each(transform) 
        .enter().append("svg:svg")
        .each(transform)
        .attr("class", "marker");

    // Draw circles.
    marker.append("svg:circle")
        .attr("r", 4.5)
        .attr("cx", pad)
        .attr("cy", pad);

    // Draw labels.
    marker.append("svg:text")
        .attr("x", pad + 7)
        .attr("y", pad)
        .attr("dy", ".31em")
        .text(function(d) { return d.key; });

    function transform(d) 
    {
      d = new google.maps.LatLng(d.value[0], d.value[1]);
      d = projection.fromLatLngToDivPixel(d);
      return d3.select(this)
          .style("left", (d.x - pad) + "px")
          .style("top", (d.y - pad) + "px");
    }
  };
}


///////////////////////////////////////////////////
//Set ATM overlay

function ATMOverlay()
{
  this.div_ = null;
  this.setMap(map);
}


function drawATMMap(data)
{
  ATMOverlay.prototype.onAdd = function() 
  {
    //select the style of ATM, whcih draw circle as color green.
   layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "ATM");

  };

    // Draw markers as SVG elements on overlays.
  ATMOverlay.prototype.draw = function() 
  {
   var projection = this.getProjection(),
        pad = 10;
    var marker = layer.selectAll("svg")
        .data(d3.entries(data))
        .each(transform) 
        .enter().append("svg:svg")
        .each(transform)
        .attr("class", "marker");

    // Draw circles.
    marker.append("svg:circle")
        .attr("r", 4.5)
        .attr("cx", pad)
        .attr("cy", pad);

    // Draw labels.
    marker.append("svg:text")
        .attr("x", pad + 7)
        .attr("y", pad)
        .attr("dy", ".31em")
        .text(function(d) { return d.key; });

    function transform(d) 
    {
      d = new google.maps.LatLng(d.value[0], d.value[1]);
      d = projection.fromLatLngToDivPixel(d);
      return d3.select(this)
          .style("left", (d.x - pad) + "px")
          .style("top", (d.y - pad) + "px");
    }
  };
}


///////////////////////////////////////////////////

//set Cafe overlay

function CafeOverlay()
{
  this.div_ = null;
  this.setMap(map);
}
function drawCafeMap(data)
{
  //select the style of Cafe, whcih draw circle as color brown.
  CafeOverlay.prototype.onAdd = function() 
  {
   layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "Cafe");
  };

    // Draw markers as SVG elements on overlays.
  CafeOverlay.prototype.draw = function() 
  {
    var projection = this.getProjection(),
        pad = 10;
    var marker = layer.selectAll("svg")
        .data(d3.entries(data))
        .each(transform) 
        .enter().append("svg:svg")
        .each(transform)
        .attr("class", "marker");

    // Draw circles.
    marker.append("svg:circle")
        .attr("r", 4.5)
        .attr("cx", pad)
        .attr("cy", pad);

    // Draw labels.
    marker.append("svg:text")
        .attr("x", pad + 7)
        .attr("y", pad)
        .attr("dy", ".31em")
        .text(function(d) { return d.key; });

    function transform(d) 
    {
      d = new google.maps.LatLng(d.value[0], d.value[1]);
      d = projection.fromLatLngToDivPixel(d);
      return d3.select(this)
          .style("left", (d.x - pad) + "px")
          .style("top", (d.y - pad) + "px");
    }
  };
}




