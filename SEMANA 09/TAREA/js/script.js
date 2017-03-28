
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var slideIndexx = 1;
showDivs(slideIndexx);

function plusDivs(n) {
  showDivs(slideIndexx += n);
}

function currentDiv(n) {
  showDivs(slideIndexx = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndexx-1].style.display = "block";  
  dots[slideIndexx-1].className += " w3-white";
}