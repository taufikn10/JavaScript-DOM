// DOM Selection
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// document.querySelector() -> element
/**/
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "20px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll()
const p = document.querySelectorAll("p");
p[2].style.backgroundColor = "lightblue";

// Mengubah Node Root
const sectionB = document.querySelector("section#b");
const p4Custom = sectionB.getElementsByTagName("p")[0];
p4Custom.style.backgroundColor = "orange";
