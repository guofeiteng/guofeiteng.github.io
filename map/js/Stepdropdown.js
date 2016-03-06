
//read the step free entrances data for generating the drop down options in the step free version pages..
d3.json("json/StepFree.json", draw);

function draw(data) 
{

//generate two drop down menu for start and end.
  d3.select("section").attr("class","sidebar").append("select").attr("id","start").attr("onchange","calcRoute();").selectAll("option").data(data).enter().append("option")
  .attr("value",function(d){return d.location})
  .text(function (d) 
  {
    return d.Building_Entrance;
  }); 

  d3.select("section").attr("class","sidebar").append("select").attr("id","end").attr("onchange","calcRoute();").selectAll("option").data(data).enter().append("option")
  .attr("value",function(d){return d.location})
  .text(function (d) 
  {
    return d.Building_Entrance;
  }); 

}

