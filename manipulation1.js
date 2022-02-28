// DOM Manipulation
// Manipulasi Element

// innerHTML
/*
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Taufik Nurrahman</em>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "<div><p>paragraf1</p></div>";
*/

// element.style.<property CSS>
/*
const judul = document.querySelector("#judul");
judul.style.color = "lightblue";
judul.style.backgroundColor = "salmon";
*/

// element.setAttribute(),
// element.getAttribute(),
// element.removeAttribute()
/*
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "judul");
const a = document.querySelector("section#a a");
a.setAttribute("id", "link");
a.getAttribute("href");
a.removeAttribute("href");
*/

// classList
// element.classList.add(),remove(),toggle(),item(),contains(),replace()
const p2 = document.querySelector(".p2");
p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label");
p2.classList.toggle("label");
// document.body.classList.toggle("biru-muda");
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");

// p2.classList.item(2);

// p2.classList.contains("dua");
// p2.classList.contains("empat");

p2.classList.replace("tiga", "empat");
