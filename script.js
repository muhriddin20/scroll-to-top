const scrollTopBtn = document.querySelector(".icon");

window.addEventListener("scroll", toggleScrollBtn);
scrollTopBtn.addEventListener("click", scrollToTop);

function toggleScrollBtn() {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
