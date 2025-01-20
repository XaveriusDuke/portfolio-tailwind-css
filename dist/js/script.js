// Inisialisasi EmailJS
emailjs.init("ZI6uQR31DBYIdWXys"); // Ganti dengan Public Key Anda dari EmailJS

// Tangkap elemen form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validasi input
  if (!name || !email || !message) {
    alert("Semua bidang harus diisi!");
    return;
  }

  // Kirim data ke EmailJS
  emailjs
    .send("xaveriusduke2134", "template_37d3pyh", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email berhasil dikirim:", response);
        alert("Pesan berhasil dikirim!");
        document.getElementById("contactForm").reset(); // Reset form
      },
      function (error) {
        console.error("Gagal mengirim pesan:", error);
        alert("Gagal mengirim pesan, coba lagi!");
      }
    );
});

// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


