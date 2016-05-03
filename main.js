$(function() {

  // hide the story from view
  	$("#casenote").hide();
  // ---- event handler ---- //
  $("#btn-click").click(function(e) {

    e.preventDefault()

    // grab the values from the input boxes, then append them to the DOM
    $(".name").empty().append($("input.name").val());
    $(".employer").empty().append($("input.employer").val());
    $(".occupation").empty().append($("input.occupation").val());
    $(".years").empty().append($("input.years").val());
    $(".desired").empty().append($("input.desired").val());
    $(".salary").empty().append($("input.salary").val());
    $(".work-shift").empty().append($("input.work-shift").val());
    $(".lmi").empty().append($("input.lmi").val());
    $(".add").empty().append($("input.add").val());

      		//if else statement
      		
      		if (document.getElementById("occupation").value === document.getElementById("desired").value)
      		{
				document.getElementById("qual").innerHTML = " will continue looking for work in the same field";
			}
			else 
			{
				document.getElementById("qual").innerHTML = " is looking to transition to another career";
			}
			
    // show the story
    $("#casenote").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#assessment").hide();

  });

  // ---- event handler ---- //
  $("#play-btn").click(function(e) {
    $("#assessment").show();
    $("#casenote").hide();
  });

});

//button opacity animation
$(document).ready(function() {

    $('#btn-click').mouseenter(function() {
        $('#btn-click').fadeTo('600', 1);
        });        
    $('#btn-click').mouseleave(function() {
        $('#btn-click').fadeTo('fast', .5);
        });
});
