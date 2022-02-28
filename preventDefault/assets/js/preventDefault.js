// DOM Traversal preventDefault
const close = document.querySelectorAll(".close");

close.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
  });
});
