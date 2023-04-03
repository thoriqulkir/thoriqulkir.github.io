// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilankan nav
const hamburger = document.querySelector("#hamburger-menu");


document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// menghitung total harga

function hitungHarga() {
  // mengambil nilai dari form
  var hargaTiket = 1000000;
  var jumlahTiket = document.getElementById("jumlah_tiket").value;

  // menghitung harga total
  var hargaTotal = hargaTiket * jumlahTiket;

  // menampilkan harga total pada elemen HTML
  document.getElementById("totalharga").innerHTML = hargaTotal;
}
