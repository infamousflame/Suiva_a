var toggleHam = false;
var nav = $("nav");
nav.css("display", "none");
function animation(){
  if(!toggleHam){
    $(".line").addClass("clicked");
    toggleNav();
    toggleHam = true;
  }else if(toggleHam){
    $(".line").removeClass("clicked");
    toggleNav();
    toggleHam = false;
  }
}


$("#hamburger").on("click", animation);

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 600){
          $(".line").css("background-color", "black");
        }else{
          $(".line").css("background-color", "white");
        }
    });
});


function toggleNav(){
  if(nav.hasClass("opened")){
    $("nav ul").animate({
      left: "-=13vw"
    });
    setTimeout(function() {
      nav.css("display", "none");
    }, 200);
    $("nav ul").css("position", "fixed");
    nav.removeClass("opened");
  }else{
    $("nav ul").animate({
      left: "+=13vw"
    });
    nav.css("display", 'block');
    nav.addClass("opened");
  }
}
