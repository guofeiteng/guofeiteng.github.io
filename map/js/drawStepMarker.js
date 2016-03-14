
function Mapselector(id)
{
  if(id==stepfree)
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
                      
//this fuction is for the step free entrances' version of the application, and this one is very similair with drawMarker.js.
/* this function will be called when user select the side menu.
different button will show different categories of location on the map, 
and the route of nevigation will be hidden when any menu be choosen*/

