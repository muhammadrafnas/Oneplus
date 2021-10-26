var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav2").style.top = "0";
    
  } else {
    document.getElementById("nav2").style.top = "-50px";
    
  }
  prevScrollpos = currentScrollPos;
}
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".menu").css({"background-color":"transparent"});   
        }
        else{
            $(".menu").css({"background-color":"white"});
        }

    })
})
