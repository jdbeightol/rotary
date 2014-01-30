$("#myCarousel").ready(updateHeight);

function updateHeight() {
  var calcHeight = $("#myCarousel").width() * 4 / 16
  var newHeight = (calcHeight > 250)?calcHeight:250;

  $("#myCarousel").css('height', newHeight);
  $("#myCarousel .item").css('height', newHeight);
}
