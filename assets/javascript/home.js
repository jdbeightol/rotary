$("#myCarousel").ready(updateHeight);
$(window).resize(updateHeight);

$(function() {
  //Automatically load content for the #info div.
  $("#info").load("./home/homeinfo.html");

  //Automatically load content for the #contacts div.
  $("#contacts").load("./home/contacts.html");

  //Automatically load content for the #highlights div.
  $("#highlights").load("./home/highlights.html");
});

function updateHeight() {
  var calcHeight = $("#myCarousel").width() * 4 / 16
  var newHeight = (calcHeight > 250)?calcHeight:250;

  $("#myCarousel").css('height', newHeight);
  $("#myCarousel .item").css('height', newHeight);
}
