var logo = document.querySelector(".logo");
var littleLogo = document.querySelector(".logoSmall");
var NUMBER_PIXEL_FROM_TOP = 100;

function handleScroll() {
  var logoBottom = logo.getBoundingClientRect().bottom;
  console.log("bottom", logoBottom);

  if (logoBottom < NUMBER_PIXEL_FROM_TOP) {
    logoSmall.classList.add("show")
  } else {
    logoSmall.classList.remove("show")
  }
}

window.addEventListener("scroll", handleScroll);

