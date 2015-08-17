$(document).ready(function(){
  $.getJSON( '/itinerary', function( data ) {
    var ul = $('<ul class="collapsible flow-text" data-collapsible="accordion">').appendTo('#collegeList');
    ul.className = "data-collapsible";
    console.log(data);
    $(data).each(function(index, item) {
      //console.log("Index: ", index,"Item: ", item);
        var newHeader = ul.append($(document.createElement('div')))

        var header = ul.append($(document.createElement('p')).text(item.name +
          " . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . " +
          ". . . . . . . . . . . . . . . . . . . . . . . . . ." +
          item.date + " at " + item.time + ":00"));
    });
  });
});

/*
$(document).ready(function(){
  $.getJSON( '/itinerary', function( data ) {
    var ul = $('<ul class="collapsible" data-collapsible="accordion">').appendTo('p');
    ul.className = "data-collapsible";
    console.log(data);
    $(data).each(function(index, item) {
      //console.log("Index: ", index,"Item: ", item);
        var newHeader = ul.append($(document.createElement('div')))
        newHeader.className = "collapsible-header";

        var header = ul.append($(document.createElement('p')).text(item.name))

        var newBody = ul.append($(document.createElement('div')))
        newBody.className = "collapsible-body";

        var newPar = ul.append($(document.createElement('p')).text(item.date + " at " + item.time));
    });
  });
});

$(document).ready(function(){
  $.getJSON( '/itinerary', function( data ) {
    var ul = $('<p>').appendTo('<div class="collapsible-header">');
    console.log(data);
    $(data).each(function(index, item) {
      //console.log("Index: ", index,"Item: ", item);
        ul.append($(document.createElement('p')).text(item.name))
    });

    var p = $('<p>').appendTo('<div class="collapsible-body">');
    console.log(data);
    $(data).each(function(index, item) {
      //console.log("Index: ", index,"Item: ", item);
        p.append($(document.createElement('p')).text(item.date))
    });

  });
});
*/



/*
<div style=float:"left; width:100px;">--> <!-- width:67% --><!--
  <ul class="collapsible" style=float:"left; position:absolute;" data-collapsible="accordion">
   <li>
     <div class="collapsible-header"><p>Brown University</p></div>
     <div class="collapsible-body">
       <p>Scheduled Date: 8/27/2015</p>
       <p>Scheduled Time: 9:00</p>
       <p><a href="https://www.brown.edu/">Visit the site</a></p>
     </div>
   </li>
 </ul>
</div>


<div class="collapsible-header"><li>

var collapse;

collapse = '<ul class="collapsible" style=float:"left; position:absolute;" data-collapsible="accordion">' +
'<li>' +
  '<div class="collapsible-header"><p>' + itineraryData[1] + '</p></div>'+
  '</li>' +
'</ul>';

$('#collapsibleList').html = collapse;

<ul class="collapsible" style=float:"left; position:absolute;" data-collapsible="accordion">
 <li>
   <div class="collapsible-header"><p>Brown University</p></div>
   <div class="collapsible-body">
     <p>Scheduled Date: 8/27/2015</p>
     <p>Scheduled Time: 9:00</p>
     <p><a href="https://www.brown.edu/">Visit the site</a></p>
   </div>
 </li>
</ul>
*/
