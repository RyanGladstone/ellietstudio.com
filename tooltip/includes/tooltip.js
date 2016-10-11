/*  JavaScript Document                      */
/*  Written by Chris Converse for lynda.com  */

//need to check out .offset() to set the tooltip when positioning the div inside an element that is itself positioned.
$(document).ready(function () {
  
  $('.tooltip').mouseover(function (e) {
      
    if ($(this).attr('data-tip-type') == 'text') {
      $('#tooltip_container').html($(this).attr('data-tip-source'));
    }

    if ($(this).attr('data-tip-type') == 'html') {
      var elementToGet = '#' + $(this).attr('data-tip-source');
      var newHTML = $(elementToGet).html();
      $('#tooltip_container').html(newHTML);
    }

    $('#tooltip_container').css({'display':'block', 'opacity':0}).animate({opacity:1},250);

  }).mousemove(function (e) {
    var toolTipWidth = $('#tooltip_container').outerWidth();
    var toolTipHeight= $('#tooltip_container').outerHeight();
    
    $('#tooltip_container').css('left',(e.pageX-20)+'px');    
    $('#tooltip_container').css('top',(e.pageY+20)+'px');   
    
  }).mouseout(function (e) {
    
    $('#tooltip_container').animate({opacity:0}, 350, function () {
      $('#tooltip_container').css('display','none').html('');     
    });
      
  });
});
