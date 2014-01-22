/*
 *  Event handlers to control the news menu.
 */

$('.newslistlink').click(function() {
  $('#newsframe').attr('src', './content/' + $(this).attr('id') + '.html');
  $('.newsletterlink').parent().removeClass('active');
  $('.newslistlink').parent().removeClass('active');
  $(this).parent().addClass('active');
  return false;
});

$('.newsletterlink').click(function() {
  $('#newsframe').attr('src', './newsletters/' + $(this).attr('id') + '.html');
  $('.newslistlink').parent().removeClass('active');
  $('#newsletters').parent().addClass('active');

  $('.newsletterlink').parent().removeClass('active');
  $(this).parent().addClass('active');
  return false;
});

function setHeight() {
  $('#newsframe').contents().find('body').css({"min-height": "100", "overflow" : "hidden"});
  setInterval( "$('#newsframe').height($('#newsframe').contents().find('body').height() + 20)", 1 );
}