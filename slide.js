var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
   if (n > slides.length){
      n = 1
    }
  if (n < 1){
      n = slides.length
    } 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
  slides[n-1].style.display = "block";
}