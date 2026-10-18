# P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien

## Deskripsi

Halaman profil dari P4 saya kembangkan di folder pertemuan-05/ supaya bisa
merespons pengguna dengan JavaScript. Ada dua fitur utama: menu navigasi yang
bisa dibuka dan ditutup di layar kecil, serta validasi formulir kontak.
Validasi hanya berjalan di browser. Data belum dikirim atau disimpan ke server.

## Fitur dan Pengembangan

- Baseline: file P4 (index.html, style.css, img/foto-profil.jpg) disalin ke
  folder pertemuan-05/. Cara menjalankan: buka pertemuan-05/index.html di
  browser.
- script.js dibuat dan dihubungkan ke index.html dengan
  `<script src="script.js"></script>` sebelum `</body>`.
- Elemen tambahan di index.html yang belum ada di baseline P4: id="contactForm"
  dan novalidate pada form, `<p id="formFeedback">` untuk pesan, tombol menu
  button#navToggle di dalam div.header-top, dan id="navMenu" pada daftar menu.
- Menu navigasi: klik tombol ☰ memanggil classList.toggle("nav-open") pada
  menu. Nilai hasilnya (isOpen) dipakai untuk memperbarui aria-expanded dan
  aria-label. Aturan CSS untuk menu ditambahkan di style.css.
- Event pada formulir: listener submit (dengan event.preventDefault() supaya
  halaman tidak refresh), listener input, dan listener reset. Dua yang
  terakhir mengosongkan pesan di formFeedback.
- Validasi formulir: nilai dibaca di listener submit (value, trim(), Number(),
  querySelector(), querySelectorAll()), lalu diperiksa berurutan dan berhenti
  di kegagalan pertama dengan return. Aturannya: nama 3 sampai 50 karakter,
  email dengan pola sederhana, semester 1 sampai 14, tanggal diisi, jenis pesan
  dipilih, minimal satu topik, program studi dipilih, dan pesan tidak kosong
  serta maksimal 300 karakter.
- Umpan balik: pesan kegagalan sesuai aturan yang dilanggar atau pesan
  "Form berhasil divalidasi." ditampilkan lewat formFeedback.textContent di
  halaman yang sama. Warna pesan diatur dengan class form-feedback-error dan
  form-feedback-success lewat formFeedback.className, dengan aturan CSS di
  style.css.

## Pengujian

- Baseline: halaman dibuka di browser dan tampilannya sama seperti P4
  (navigasi, formulir, footer, gambar, dan CSS). Tidak ada galat.
- Koneksi script.js: saat script.js berisi console.log percobaan, pesan muncul
  di Console. Setelah baris itu dihapus, Console tidak menampilkan galat baru
  dan tampilan tidak berubah.
- Latihan DOM di Console (F.2 sampai F.7): getElementById, querySelector,
  querySelectorAll, value, textContent, dan classList sudah dicoba dan
  hasilnya sesuai. Contohnya, id navToggle, navMenu, dan contactForm bernilai
  null saat itu karena elemennya belum ditambahkan, dan selector radio
  :checked bernilai null sebelum ada yang dipilih.
- Latihan event (G.2 sampai G.8): klik, submit, input, reset, event object, dan
  preventDefault sudah dicoba dan hasilnya sesuai. Sebelum preventDefault
  dipasang halaman refresh saat Kirim diklik, setelah dipasang tidak lagi.
  Kode percobaan sementara sudah dihapus.
- Menu navigasi (H.2 sampai H.7, K.1): di layar kecil menu tersembunyi, klik
  tombol membuka menu (aria-expanded "true", aria-label "Tutup navigasi"), klik
  kedua menutup menu (aria-expanded "false", aria-label "Buka navigasi"). Di
  layar lebih dari 768px menu tampil mendatar dan tombol tidak tampil.
  Hasilnya sesuai.
- Pengambilan nilai (I.2): console.log sementara menampilkan nilai setiap
  kolom. Semester terbaca sebagai angka, jenisPesan null saat radio belum
  dipilih, dan topikDipilih kosong saat tidak ada checkbox dicentang.
  console.log dihapus setelah pengujian.
- Validasi formulir (I.3 sampai I.14, K.2): semua kasus sudah dicoba, yaitu
  nama pendek, email tidak sesuai pola, semester kosong atau di luar 1 sampai
  14, tanggal kosong, jenis pesan belum dipilih, topik belum dipilih, program
  studi belum dipilih, pesan kosong, pesan 300 karakter, dan semua isian
  benar. Pesan yang muncul sesuai aturan.
- Umpan balik (J, K.3): pesan kegagalan muncul sesuai aturan yang dilanggar,
  hilang saat isian diubah, dan hilang saat tombol Batal diklik. Pesan
  "Form berhasil divalidasi." hanya muncul setelah semua pemeriksaan lolos
  dan tidak menyatakan data sudah dikirim atau disimpan.
- Temuan: semester berupa angka desimal (pakai titik atau koma) tetap lolos
  validasi karena kode tidak memeriksa bilangan bulat. Ini sesuai batasan yang
  disebut di modul.
- Debugging dan pengujian ulang (K.4 sampai K.8): Console tidak menampilkan
  galat JavaScript selama pengujian, jadi tidak ada perbaikan yang diperlukan.
- Masalah yang ditemukan: tidak ada galat. Hanya keterbatasan semester desimal
  di atas.

## Riwayat Pengembangan

- Siapkan baseline P5 dari artefak P4: file P4 disalin dan tampilan awal
  dicek, hasilnya sesuai.
- Hubungkan JavaScript eksternal ke HTML: script.js ditambahkan dan
  dihubungkan ke index.html, hubungan diverifikasi lewat Console.
- Menambah elemen formFeedback: elemen pesan ditambahkan di index.html dan
  diuji lewat Console.
- Tambahkan penanganan event submit: id contactForm dan novalidate
  ditambahkan, event submit teramati lewat Console.
- Tambahkan penanganan event input: pesan umpan balik terhapus saat isian
  diubah.
- Tambahkan penanganan event reset: pesan umpan balik terhapus saat form
  di-reset.
- Terapkan pencegahan submit bawaan peramban: preventDefault ditambahkan pada
  listener submit, halaman tidak refresh saat Kirim diklik.
- Tambah tombol navigasi responsif: tombol navToggle ditambahkan pada header
  dan diperiksa di browser.
- Pilih elemen navigasi dengan DOM: navToggle dan navMenu dipilih dan
  diverifikasi lewat Console.
- Tambah toggle class menu navigasi: klik tombol menambah atau menghapus class
  nav-open, aturan CSS menu ditambahkan, menu buka-tutup sesuai.
- Perbarui status tombol navigasi: aria-expanded dan aria-label berubah
  mengikuti keadaan menu.
- Tambahkan pemeriksaan kelengkapan data formulir: pemeriksaan tanggal, jenis
  pesan, topik, program studi, dan pesan ditambahkan dan diuji.
- Terapkan validasi formulir sisi klien: validasi nama, email, semester, batas
  panjang pesan, dan pesan keberhasilan ditambahkan dan diuji.
- Tambah warna pesan dan perbarui README P5: aturan warna pesan ditambahkan di
  style.css dan README dilengkapi.
