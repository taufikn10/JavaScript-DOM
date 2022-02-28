// Event Handling
/*
const close = document.querySelector(".close");
const card = document.querySelector(".card");

close.addEventListener("click", function () {
  card.style.display = "none";
});
*/

// DOM Traversal
const close = document.querySelectorAll(".close");

/*
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (event) {
    // close[i].parentElement.style.display = "none";
    // console.log(event.target);
    event.target.parentElement.style.display = "none";
  });
}
*/

close.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
console.log(nama.parentElement.parentElement);
console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSlibing);
