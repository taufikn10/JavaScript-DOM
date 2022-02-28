// DOM Traversal Prevent Default Event Bubbling close ditombol
/*
const close = document.querySelectorAll(".close");

close.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
    event.stopPropagation();
  });
});
*/

// card ditombol
/*
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("ok");
  });
});
*/

// event bubbling
const container = document.querySelector(".container");

container.addEventListener("click", function (close) {
  // console.log(close.target);
  if (close.target.className == "close") {
    close.target.parentElement.style.display = "none";
  }
});
