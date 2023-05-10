let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}







let slideIndex_media = 1;
        showSlides_media(slideIndex_media);

        function plusSlides_media(n) {
            showSlides_media(slideIndex_media += n);
        }

        function currentSlide(n) {
            showSlides_media(slideIndex_media = n);
        }

        function showSlides_media(n) {
            let i;
            let slides_media = document.getElementsByClassName("mySlides_media");


            if (n > slides_media.length) { slideIndex_media = 1 }
            if (n < 1) { slideIndex_media = slides_media.length }
            for (i = 0; i < slides_media.length; i++) {
                slides_media[i].style.display = "none";
            }

            slides_media[slideIndex_media - 1].style.display = "block";

        }