/*
 *  Event handlers to control the news menu.
 */

$(".newsyearlist").on("click", ".newsyear", function() {
  $('.newsyearlist').children().removeClass('active');
  $('.newsmonthlist').addClass('hidden');
  $(this).parent().addClass('active');
  $(this).parent().children().removeClass('hidden');
  return false;
});

$(".newsyearlist").on("click", ".newsmonth", function() {
  $('#newsletterdiv').load('./' + $(this).attr('id') + '.html');
  $('.newsmonthlist').children().removeClass('active');
  $(this).parent().addClass('active');
  return false;
});

/*   This function generates the newsletter list */
$(function() {
  var longMonth = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

  var shortMonth = ["jan", "feb", "mar", "apr", "may", "jun",
"jul", "aug", "sep", "oct", "nov", "dec"];

  var startYear = 2010;
  var currentYear = (new Date).getFullYear();
  var currentMonth = (new Date).getMonth();
  var activeDate = startYear + "\\/jan";

  var genHTML = "";

  genHTML += '<li class="active" id="' + currentYear + '"><a href="#" class="newsyear">' + currentYear + '</a>';
  genHTML += '<ul class="nav newsmonthlist">';

  for(var mnt = 0; mnt <= currentMonth; mnt++)
  {

    if(fileExist("./" + currentYear + '/' + shortMonth[mnt] + '.html'))
    {
      genHTML += '<li><a href="#" class="newsmonth" id="'+currentYear+'/'+shortMonth[mnt]+'">'+longMonth[mnt]+'</a></li>';
      activeDate = currentYear+'\\/'+shortMonth[mnt];
    }
  }

  genHTML += '</ul></li>';

  for(var year=currentYear-1; year>=startYear; year--)
  {
    genHTML += '<li id="' + year + '"><a href="#" class="newsyear">' + year + '</a>';
    genHTML += '<ul class="nav newsmonthlist hidden">';

    for(var mnt = 0; mnt < 12; mnt++)
    {
      if(fileExist("./" + year + '/' + shortMonth[mnt] + '.html'))
      {
        genHTML += '<li><a href="#" class="newsmonth" id="'+year+'/'+shortMonth[mnt]+'">'+longMonth[mnt]+'</a></li>';
      }
    }

    genHTML += '</ul></li>';
  }

  $(".newsyearlist").append(genHTML);
  $("#" + activeDate).parent().addClass("active");

  $('#newsletterdiv').load('./' + activeDate + '.html');
});

function fileExist(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
