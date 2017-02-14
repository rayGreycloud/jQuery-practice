
$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function() {
  $(this).toggleClass("active");

  $(this).removeClass("highlightedButton");

  var panelId = $(this).attr("id") + "Panel";

  $("#" + panelId).toggleClass("hidden");

  var numberActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numberActivePanels) - 10);

})

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

$("textarea").on('change keyup paste', function() {
  $("iframe").contents().find("html").html($("#htmlPanel").val());
});
