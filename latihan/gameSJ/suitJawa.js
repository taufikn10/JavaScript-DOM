// Menangkap pilihan Komputer
function getPilihanComputer() {
  // Membangkitkan bilangan komputer
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// rules
function getHasil(comp, player) {
  // Menentukan rules gamenya
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "assets/img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// ringkasan
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "assets/img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// event
/*
const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "assets/img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
  // console.log("comp: " + pilihanComputer);
  // console.log("player: " + pilihanPlayer);
  // console.log("hasil: " + hasil);
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "assets/img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "assets/img/" + pilihanComputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
*/
