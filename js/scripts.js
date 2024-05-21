$(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() > $("#carousel1").offset().top) {
            $('#nav').addClass("nav-color");
        } else {
            $("#nav").removeClass("nav-color");
        }
    });
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
