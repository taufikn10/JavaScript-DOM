// Event Handler
const p3 = document.querySelector(".p3");

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  alert("data berhasil ditambah");
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item Baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// perbedaan eventhandler dan addEventListener
const p1 = document.querySelector(".p1");
/*
p1.onclick = function () {
  p1.style.backgroundColor = "lightblue";
};

p1.onclick = function () {
  p1.style.color = "red";
};
*/

p1.addEventListener("click", function () {
  p1.style.backgroundColor = "lightblue";
});

p1.addEventListener("click", function () {
  p1.style.color = "red";
});
