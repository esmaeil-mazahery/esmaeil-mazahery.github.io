$(document).ready(function () {
  $("ul.tree")
    .find(".caret")
    .each(function (index) {
      this.addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    });

  $(".sidebarـsub_category").click(function () {
    $(this)
      .nextUntil(".c-grid")
      .filter(".libdoc-sidebar-item")
      .toggleClass("active");
  });

  // .find(".caret")
  // .each(function (index) {
  //   this.addEventListener("click", function () {
  //     this.parentElement.querySelector(".nested").classList.toggle("active");
  //     this.classList.toggle("caret-down");
  //   });
  // });

  // console.log("hello fancybox");
  // $("a#single_image").fancybox();

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 0,
    'imageFadeDuration': 0
  })

  showSlides(slideIndex);
});



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(slides.length == 0) return;
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
