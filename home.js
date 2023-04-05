// ambil elemen tombol login, register, dan pop-up
const loginBtn = document.getElementById("login-btn");
const regisBtn = document.getElementById("regis-btn");
const popup = document.getElementById("popup");
const kotakLogin = document.querySelector(".kotak-login");
const kotakRegis = document.querySelector(".kotak-regis");
const linkRegis = document.getElementById('link-register');
const registerForm = document.getElementById('register-form');
const linkLogin = document.getElementById('link-login');
const loginForm = document.getElementById('login-form');

// ketika tombol login dan regis diklik, menampilkan pop-up
loginBtn.addEventListener("click", function() {
  popup.style.display = "block";
  kotakLogin.style.display = "block";
  kotakRegis.style.display = "none";
  linkLogin.style.display = 'none';
  linkRegis.style.display = 'block';
});

regisBtn.addEventListener("click", function() {
  popup.style.display = "block";
  kotakLogin.style.display = "none";
  kotakRegis.style.display = "block";
  registerForm.style.display = 'flex';
  linkLogin.style.display = 'block';
  linkRegis.style.display = 'none';
});

// ketika tombol submit ditekan akan diarahkan ke menu dan terdapat popup berhasil
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  // tambahkan kode untuk memproses form registrasi di sini
  
  window.location.href = 'index.html';
  alert("Berhasil Login!");
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    registerForm.style.display = 'none';
    // tambahkan kode untuk memproses form registrasi di sini
    
    window.location.href = 'index.html';
    alert("Registrasi Berhasil!");
  });

// ketika tombol klik login/regist pada form login/regist diklik akan muncul popup juga
linkRegis.addEventListener('click', function() {
  kotakRegis.style.display = 'block';
  registerForm.style.display = 'flex';
  linkRegis.style.display = 'none';
  kotakLogin.style.display = 'none';
  linkLogin.style.display = 'block';
});

linkLogin.addEventListener('click', function() {
  kotakLogin.style.display = 'block';
  loginForm.style.display = 'flex';
  linkLogin.style.display = 'none';
  kotakRegis.style.display = 'none';
  linkRegis.style.display = 'block';
});

// ketika diklik di luar pop-up login, sembunyikan pop-up login
window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

var navBar = document.getElementById("navBar");
function togglebtn() {
  navBar.classList.toggle("hidemenu");
}

document.addEventListener('DOMContentLoaded', function() {
    const categoryList = document.getElementById('category-list');
    const prevButton = document.getElementById('category-button-prev');
    const nextButton = document.getElementById('category-button-next');

    const scrollAmount = 100; // Anda dapat menggantinya sesuai kebutuhan

    prevButton.addEventListener('click', function() {
        categoryList.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        categoryList.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

