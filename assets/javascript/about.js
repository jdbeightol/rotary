$(function() {
  //Automatically load content for the #history div.
  $("#history").load("./dtlockhaven.html");
});

$(".histitem").click(function() {
  $('.historynav .navbar-nav').children().removeClass('active');
  $(this).parent().addClass('active');
  return false;
});

$("#dtlh").click(function() {
  $('#history').load('./dtlockhaven.html');
  return false;
});

$("#mhs").click(function() {
  $('#history').load('./millhall.html');
  return false;
});

$("#lh").click(function() {
  $('#history').load('./lockhaven.html');
  return false;
});

$("#ren").click(function() {
  $('#history').load('./renovo.html');
  return false;
});
