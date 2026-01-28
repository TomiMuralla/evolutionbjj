document.addEventListener("DOMContentLoaded", function () {

  var bjjSlides = document.querySelectorAll(".cont-img-bjj img");
  var bjjIndex = 0;

  if (bjjSlides.length > 0) {
    bjjSlides[0].classList.add("active");

    setInterval(function () {
      bjjSlides[bjjIndex].classList.remove("active");
      bjjIndex = (bjjIndex + 1) % bjjSlides.length;
      bjjSlides[bjjIndex].classList.add("active");
    }, 4000);
  }

  var mmaSlides = document.querySelectorAll(".cont-img-mma img");
  var mmaIndex = 0;

  if (mmaSlides.length > 0) {
    mmaSlides[0].classList.add("active");

    setInterval(function () {
      mmaSlides[mmaIndex].classList.remove("active");
      mmaIndex = (mmaIndex + 1) % mmaSlides.length;
      mmaSlides[mmaIndex].classList.add("active");
    }, 4000);
  }

});
