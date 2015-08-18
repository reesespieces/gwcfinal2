$(document).ready(function(){
  $.getJSON( '/itinerary', function( data ) {
    var ul = $('<ul class="flow-text">').appendTo('#collegeList');
    console.log(data);
    var email = $('<div>').appendTo('#emailText');
    email.append($(document.createElement('p')).text(data.date));

    $(data).each(function(index, item) {
      //console.log("Index: ", index,"Item: ", item);

        var header = ul.append($(document.createElement('p')).text(item.name + " - " + item.date + " at " + item.time));
    });
  });
});
