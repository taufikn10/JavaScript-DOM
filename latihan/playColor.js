const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  // document.body.style.backgroundColor = "lightblue";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

// manipulasi node membuat tombol
const tRandomWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tRandomWarna.appendChild(teksTombol);
tRandomWarna.setAttribute("type", "button");
tUbahWarna.after(tRandomWarna);

tRandomWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//custom warna slider
const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sGreen.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBlue.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// custom background mouse
document.body.addEventListener("mousemove", function (event) {
  //posisi mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
  // console.log(xPos);
});
