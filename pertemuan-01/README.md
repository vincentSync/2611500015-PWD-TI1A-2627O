# Bukti Belajar P1

1. Konsep Dasar Pemrograman Web

   Proses bikin kode yang menentukan apa yang ditampilkan di browser dan apa yang diproses di server, supaya keduanya bisa saling berkomunikasi dan menghasilkan halaman yang bisa diakses lewat browser.

2. Arsitektur Klien-Peladen
   
    Klien (browser/aplikasi yang kita pakai) yang mengirim permintaan, dan Peladen/server (komputer yang nyimpen data dan memproses permintaan) yang menjawabnya. Contohnya app Instagram itu klien, server Meta yang nyimpen dan ngirim data feed-nya.

3. HTTP Request dan Response
   
   Request itu permintaan yang dikirim klien ke server, misalnya "kasih saya reels berikutnya". Response itu jawaban yang dikirim server balik ke klien, berupa data yang kemudian ditampilkan di layar.

4. HTML, CSS, JavaScript, PHP, MySQL
   
   HTML, CSS, dan JavaScript jalan di klien (browser) — HTML bikin struktur/kerangka halaman, CSS bikin tampilannya bagus, JavaScript bikin halaman interaktif (misal respon saat tombol diklik). PHP jalan di server, tugasnya jadi "logika" seperti mengecek data (misal cek password benar/salah). MySQL adalah database di server, tempat data seperti username dan password disimpan.

5. Hubungan Antarteknologi

   Saat login: HTML nampilin form, JavaScript ambil data yang diketik dan kirim sebagai request ke server. Server jalankan PHP untuk cek data ke MySQL. Server kirim balik response (misalnya "password salah"), lalu JavaScript dan HTML yang menampilkan pesan itu ke layar.