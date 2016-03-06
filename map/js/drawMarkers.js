
function Mapselector(id)
{
  if(id==all)
  {
    directionsDisplay.setMap(null);
    
  }
  if(id==atm)
  {
    directionsDisplay.setMap(null);
    ATM = new ATMOverlay();
  }
  if(id==cafe)
  {
    directionsDisplay.setMap(null);
    Cafe = new CafeOverlay();
  }
}                       
                      
//this fuction is for the all entrances' version of the application, and this one is very similair with drawStepMarker.js.
/* this function will be called when user select the side menu.
different button will show different categories of location on the map, 
and the route of nevigation will be hidden when any menu be choosen*/