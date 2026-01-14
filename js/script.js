// 1. Prompts for User Name (Workflow poin 4)
window.onload = function () {
  let userName = prompt("Silakan masukkan nama Anda:", "Harfi");
  const welcomeText = document.getElementById("welcome-name");

  if (userName && userName.trim() !== "") {
    welcomeText.innerText = `Hi ${userName}, Welcome To Website`;
  } else {
    welcomeText.innerText = "Hi User, Welcome To Website";
  }
};

// 2. Form Submission & Validation (Workflow poin 5)
const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Mengambil data dari input
  const name = document.getElementById("input-name").value;
  const birthDateRaw = document.getElementById("input-birthdate").value; // Format: YYYY-MM-DD
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("input-message").value;

  // --- LOGIKA FORMAT TANGGAL D-M-Y ---
  // Memecah string YYYY-MM-DD menjadi array [YYYY, MM, DD]
  const dateParts = birthDateRaw.split("-");
  // Menyusun kembali menjadi format Day-Month-Year (D-M-Y)
  const formattedBirthDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  // Mendapatkan waktu saat ini
  const currentTime = new Date();

  // Menampilkan ke result box di sebelah kanan
  document.getElementById("current-time").innerText = currentTime.toString();
  document.getElementById("res-name").innerText = name;
  document.getElementById("res-birthdate").innerText = formattedBirthDate; // Menggunakan format D-M-Y
  document.getElementById("res-gender").innerText = gender;
  document.getElementById("res-message").innerText = message;

  // Optional: Alert sukses
  alert("Formulir berhasil dikirim!");
});
