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
        if ($(window).scrollTop() > 550){
          // $(".line").css("background-color", "black");
          // $("nav ul").css("color", "white");
          // $("nav ul").css("background-color", "rgba(0, 0, 0, .6)");
          $(".media ul li a").css("color","black");
        }else{
          // $("nav ul").css("background-color", "rgba(255, 255, 255, .6)");
          // $("nav ul").css("color", "black");
          // $(".line").css("background-color", "white");
          $(".media ul li a").css("color","white");
        }
    });
});


function toggleNav(){

  if($(".media").hasClass("opened")){
      $(".media").removeClass("opened");

      $(".media ul li:first-child").animate({
          left: "-=6vw"
      });
      $(".media ul li:nth-child(2)").animate({
          left: "-=4.5vw",top:"-=4.5vw"
      });
      $(".media ul li:last-child").animate({
          top: "-=7vw"
      });


  }else{
    $(".media ul li").css("display","block");
    $(".media ul li").css("translate","rotate(45deg)");
    $(".media ul li:first-child").animate({
        left: "+=6vw"
    });
    $(".media ul li:nth-child(2)").animate({
        left: "+=4.5vw",top:"+=4.5vw"
    });
    $(".media ul li:last-child").animate({
        top: "+=7vw"
    });

    $(".media").addClass("opened");
  }

  // if(nav.hasClass("opened")){
  //   $("nav ul").animate({
  //     left: "-=9vw"
  //   });
  //   setTimeout(function() {
  //     nav.css("display", "none");
  //   }, 350);
  //   $("nav ul").css("position", "fixed");
  //   nav.removeClass("opened");
  // }else{
  //   $("nav ul").animate({
  //     left: "+=9vw"
  //   });
  //   nav.css("display", 'block');
  //   nav.addClass("opened");
  // }
}
