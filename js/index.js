//Change Carousel UI
let carousel = document.querySelectorAll(".carousel-inner .row");
if (window.innerWidth <= 990) {
  carousel.forEach((element) => {
    element.children[0].classList.remove("col-6");
    element.children[1].classList.remove("col-6");
    element.children[0].style.minHeight = "30vh";
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 990) {
    carousel.forEach((element) => {
      element.children[0].classList.remove("col-6");
      element.children[1].classList.remove("col-6");
      element.children[0].style.minHeight = "30vh";
    });
  } else {
    carousel.forEach((element) => {
      element.children[0].classList.add("col-6");
      element.children[1].classList.add("col-6");
      element.children[0].style.height = "auto";
    });
  }
});
