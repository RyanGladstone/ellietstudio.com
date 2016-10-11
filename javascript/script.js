// JavaScript Document

//handle the form submit event
function prepareEventHandlers () {
  document.getElementById("frmContact").onsubmit = function () {
  //prevent a form from being submitted with no email.

  if ((document.getElementById("name").value == "") && (document.getElementById("email").value == "")){
      document.getElementById("errormessage").innerHTML = "It seems you forgot something...";
      document.getElementById("name").className = "formerror";
      document.getElementById("email").className = "formerror";
      //stop the form from being submitted
      return false;
  } else if (document.getElementById("name").value == "") {
      document.getElementById("errormessage").innerHTML = "It seems you forgot something...";
      document.getElementById("name").className = "formerror";
      //stop the form from being submitted
      return false;
  } else if (document.getElementById("email").value == "") {
    document.getElementById("errormessage").innerHTML = "It seems you forgot something...";
    document.getElementById("email").className = "formerror";
    //stop the form from being submitted
    return false;
  } else {
    //reset and allow the form to submit
    document.getElementById("errormessage").innerHTML = "";
    return true;
    } 
  };
}

//hide extra info
function show () {
  $(".extraIdentity").show(1000);
}

$("#extraIdentity").hide();
$("#extra_beets").hide();

$('.showExtra').click(function () {
  $('.showExtra').hide();
  $('#extraIdentity').show(500, function () {
  // Animation complete.
  });
  $('#extra_beets').show(500, function () {
  });
});

//when document loads
window.onload = function () {
  prepareEventHandlers();
  preparePage();
}


 if (screen.width > 500) {
        // download complicated script
        // swap in full-source images for low-source ones
    
    $(function() {   
            
                var theWindow        = $(window),
                    $bg              = $("#bg"),
                    aspectRatio      = $bg.width() / $bg.height();
                        
                            
                function resizeBg() {
                    
                    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                        $bg
                            .removeClass()
                            .addClass('bgheight');
                    } else {
                        $bg
                            .removeClass()
                            .addClass('bgwidth');
                    }
                                
                }
                                            
                theWindow.resize(function() {
                    resizeBg();
                }).trigger("resize");
            
            });
    
    
    } else {
        $("#bg").hide();
    };
            
    
    
//gazpo.com/2012/02/scrolltop/    
$('.scrollup').hide();    
//Jump to top on portfolio page    
$(window).scroll(function(){
    var scrolled = 0;
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn();
              scrolled = 1;
          } else if($(this).scrollTop()<=100 && scrolled <0) {
              $('.scrollup').fadeOut();           
          } else {
              $('.scrollup').hide();
          }
});



var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1324463-11']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();