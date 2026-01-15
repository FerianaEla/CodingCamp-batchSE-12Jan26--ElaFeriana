// 1. Fungsi Prompt Nama saat halaman pertama kali dimuat
window.onload = function () {
  // Meminta input nama dari user
  let userName = prompt("Silakan masukkan nama Anda:", "Guest");
  const welcomeText = document.getElementById("welcome-text");

  // Validasi jika user mengisi nama atau membatalkannya
  if (userName && userName.trim() !== "") {
    welcomeText.innerText = `Hi ${userName}, Welcome To Website`;
  } else {
    welcomeText.innerText = "Hi User, Welcome To Website";
  }
};

// 2. Logika Form Submission & Update Result Box
const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman refresh (reload)

  // A. Mengambil data dari input form
  const nameInput = document.getElementById("input-name").value;
  const birthDateRaw = document.getElementById("input-birthdate").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const messageInput = document.getElementById("input-message").value;

  // B. Validasi Sederhana (Memastikan tidak ada field yang kosong)
  if (!nameInput || !birthDateRaw || !genderInput || !messageInput) {
    alert("Mohon lengkapi semua data formulir!");
    return;
  }

  // C. Format Tanggal Lahir (Mengubah YYYY-MM-DD menjadi DD-MM-YYYY)
  const dateParts = birthDateRaw.split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  // D. Mendapatkan Waktu Saat Ini
  const currentTime = new Date();

  // E. Menampilkan hasil input ke Result Box di sebelah kanan
  document.getElementById("current-time").innerText =
    currentTime.toLocaleString("id-ID"); // Format waktu lokal Indonesia
  document.getElementById("res-name").innerText = nameInput;
  document.getElementById("res-birthdate").innerText = formattedDate;
  document.getElementById("res-gender").innerText = genderInput.value;
  document.getElementById("res-message").innerText = messageInput;

  // F. Update Teks Welcome di Header secara otomatis setelah submit
  document.getElementById(
    "welcome-text"
  ).innerText = `Hi ${nameInput}, Welcome To Website`;

  // G. Notifikasi Sukses
  alert("Terima kasih! Pesan Anda telah berhasil ditampilkan.");
});
