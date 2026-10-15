# P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien

## Deskripsi

Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM,
event listener, interaksi navigasi, dan validasi formulir sisi klien.

## Fitur dan Pengembangan

- Penyiapan baseline: menyalin index.html, style.css, dan img/foto-profil.jpg
  dari P4 ke folder pertemuan-05/. Belum ada JavaScript.
- Cara menjalankan: buka pertemuan-05/index.html di browser.
- Menghubungkan JavaScript eksternal: membuat berkas script.js di
  pertemuan-05/ dan menambahkan `<script src="script.js"></script>` sebelum
  tag penutup `</body>` pada index.html. script.js dibiarkan kosong setelah
  kode pengujian sementara dihapus.
- Menambahkan elemen umpan balik: menambahkan `<p id="formFeedback"></p>` di
  dalam form pada index.html sebagai tempat pesan hasil validasi.

## Pengujian

- Halaman dibuka di browser: tampil sama seperti P4 (navigasi, formulir,
  footer, gambar profil muncul, CSS jalan). Tidak ada galat.
- Koneksi script.js: saat script.js berisi `console.log("script.js berhasil
dijalankan.");`, pesan tersebut muncul di tab Console. Setelah baris itu
  dihapus dan halaman dimuat ulang, Console tidak menampilkan galat baru dan
  tampilan halaman tidak berubah.
- F.2 getElementById (Console): id `nama`, `email`, `semester`, dan `contact`
  menghasilkan elemen yang sesuai. id `navToggle`, `navMenu`, dan `contactForm`
  menghasilkan `null` karena elemennya belum ditambahkan di index.html.
  Hasil `getElementById("nama")` juga berhasil disimpan ke variabel `namaInput`.
- F.3 querySelector (Console): `#nama`, `.input-form` (hanya elemen pertama),
  `h1`, dan `#contact` ditemukan. Selector
  `input[name="jenis_pesan"]:checked` menghasilkan `null` sebelum radio
  dipilih dan menghasilkan radio `saran` setelah dipilih.
- F.4 querySelectorAll (Console): jumlah checkbox minat yang terpilih adalah 0
  saat kosong, 1 saat HTML dicentang, dan 2 saat HTML dan CSS dicentang.
- F.5 value (Console): kolom kosong menghasilkan string kosong; setelah diisi,
  value sesuai isian, dan semester terbaca sebagai teks.
- F.6 textContent (Console): `formFeedback` ditemukan; teks dapat diubah dan
  dihapus melalui `textContent`.
- Masalah yang ditemukan: tidak ada.

## Riwayat Pengembangan

- Siapkan baseline P5 dari artefak P4: salin file P4 dan cek tampilan awal,
  hasilnya sesuai.
- Hubungkan JavaScript eksternal ke HTML: menambahkan script.js dan tag
  `<script src>` di index.html, hubungan berhasil diverifikasi lewat Console.
- Tambah elemen formFeedback: elemen ditambahkan di index.html dan diuji lewat
  Console.
