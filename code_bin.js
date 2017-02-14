// Change button color on hover
$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});

// Toggle fields on click
$(".toggleButton").click(function() {
  $(this).toggleClass("active");

  $(this).removeClass("highlightedButton");

  var panelId = $(this).attr("id") + "Panel";

  $("#" + panelId).toggleClass("hidden");
  // Divide window among active panels
  var numberActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numberActivePanels) - 10);

})

// Set height of fields
$(".panel").height($(window).height() - $("#header").height() - 15);
// Set width for initial active fields
$(".panel").width(($(window).width() / 2) - 10);

// Change output field when other fields change 
$("textarea").on('change keyup paste', function() {
  $("iframe").contents().find("html").html($("#htmlPanel").val());
});
