

function slide() {
  if(!$("#shitboyy").hasClass("slided")){
    $("#slider_menu").animate({right: "+=200"}, 1000);
    $("#acpage").animate({left: "-=200", right: "+=200"}, 1000);
    $("#shitboyy").addClass("slided");
  }
  else{
    $("#slider_menu").animate({right: "-=200"}, 1000);
    $("#acpage").animate({left: "+=200", right: "-=200"}, 1000);
    $("#shitboyy").removeClass("slided");
  }
}

$(document).ready(function(){

  $("#shitboyy").click(function(){
    slide();
  })

  $("#home_but").click(function(){
    $("#acpage").load("home.html");
    slide();
  })

  $("#about_but").click(function(){
    $("#acpage").load("about.html");
    slide();
  })

  $("#tech_but").click(function(){
    $("#acpage").load("tech.html");
    slide();
  })

  $("#acpage").load("home.html");


})
