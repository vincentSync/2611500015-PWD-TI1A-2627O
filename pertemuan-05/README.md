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
- Menyiapkan form untuk event submit: menambahkan id="contactForm" dan atribut
  novalidate pada tag form di index.html, serta menambahkan listener submit di
  script.js.
- Menambahkan penanganan event input: listener input pada contactForm di
  script.js yang mengosongkan formFeedback saat pengguna mengubah isian form.
- Menambahkan penanganan event reset: listener reset pada contactForm di
  script.js yang mengosongkan formFeedback saat tombol Batal diklik.
- Menerapkan pencegahan submit bawaan: event.preventDefault() ditambahkan di
  awal listener submit pada script.js agar halaman tidak refresh atau
  berpindah saat form dikirim. Validasi pada P5 berjalan di sisi klien dan
  belum mengirim atau menyimpan data ke server.
- Menambahkan tombol navigasi responsif: button#navToggle ditambahkan pada
  header di index.html, dan ul navigasi diberi id="navMenu".
- Memilih elemen navigasi lewat DOM: navToggle dan navMenu dipilih dengan
  getElementById() di script.js dan disimpan dalam variabel.
- Menambahkan penanganan event click pada tombol navigasi: listener click
  sementara pada navToggle di script.js yang mencetak pesan ke Console. Isinya
  akan diganti dengan mekanisme buka-tutup menu pada tahap berikutnya.
- Menambahkan toggle class menu navigasi: listener click pada navToggle memanggil navMenu.classList.toggle("nav-open"). Aturan CSS untuk .header-top, #navMenu, #navMenu.nav-open, .nav-toggle, dan media query desktop ditambahkan di style.css karena belum tersedia di baseline P4.

## Pengujian

- Halaman dibuka di browser: tampil sama seperti P4 (navigasi, formulir,
  footer, gambar profil muncul, CSS jalan). Tidak ada galat.
- Koneksi script.js: saat script.js berisi
  `console.log("script.js berhasil dijalankan.");`, pesan tersebut muncul di
  tab Console. Setelah baris itu dihapus dan halaman dimuat ulang, Console
  tidak menampilkan galat baru dan tampilan halaman tidak berubah.
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
- F.7 classList (Console): add, remove, contains, dan toggle diuji pada elemen
  #home dengan class latihan. toggle mengembalikan true saat class ditambahkan
  dan false saat dihapus. Pengujian pada navMenu dilakukan di bagian H setelah
  elemennya tersedia.
- G.2 addEventListener: kode percobaan sementara pada elemen h1 di script.js.
  Saat judul diklik, pesan "Judul diklik." muncul di Console pada setiap klik.
  Kode percobaan dihapus setelah pengujian karena listener final dipasang pada
  navToggle dan contactForm pada bagian berikutnya.
- G.3 event click: kode percobaan sementara pada foto profil di script.js.
  Setiap klik mencetak pesan dan jumlah klik di Console. Kode percobaan dihapus
  setelah pengujian karena listener click final dipasang pada navToggle di
  bagian H.
- G.4 event submit: saat tombol Kirim diklik, pesan "Form dikirim." muncul di
  Console. Halaman memuat ulang setelahnya karena preventDefault belum dipasang.
- G.5 event input: pesan pengujian dimunculkan manual lewat Console. Setelah
  salah satu isian diubah, pesan hilang dari formFeedback. Diulang pada
  beberapa kolom.
- G.6 event reset: pesan pengujian dimunculkan manual lewat Console, isian form
  diisi, lalu tombol Batal diklik. Isian kembali kosong dan pesan di
  formFeedback hilang.
- G.7 event object: console.log(event) sementara pada listener submit. Console
  menampilkan SubmitEvent dengan type "submit" dan target form#contactForm.
  Kode dikembalikan seperti semula setelah pengamatan.
- G.8 preventDefault: tombol Kirim diklik. Pesan "Form dikirim." tetap tampil
  di Console, halaman tidak refresh, dan URL tidak berubah. Pengujian pesan
  validasi dilakukan setelah validasi dibuat di bagian I.
- H.2 tombol navigasi: tombol button#navToggle sudah ditambahkan pada header di
  index.html sebelum tahap H.2. Diperiksa di browser: tombol tampil, tautan
  navigasi tetap tersedia, atribut aria-label dan aria-expanded sesuai.
  Perilaku buka-tutup menu belum dibuat.
- H.3 akses elemen navigasi: console.log(navToggle) dan console.log(navMenu)
  menampilkan elemen tombol dan menu, bukan null. Tidak ada galat di Console
  saat halaman dimuat.
- H.4 event click pada tombol navigasi: tombol ☰ diklik. Pesan "Tombol
  navigasi diklik." muncul di Console pada setiap klik, satu pesan per klik.
  Menu belum membuka atau menutup karena mekanisme class dibuat pada tahap
  berikutnya.
- H.5 classList.toggle: pada lebar layar kecil, menu tersembunyi saat awal. Klik tombol menambahkan class nav-open dan menu tampil; klik berikutnya menghapus class dan menu tersembunyi. Pada lebar layar besar, menu tampil mendatar dan tombol tidak tampil.
- Masalah yang ditemukan: tidak ada.

## Riwayat Pengembangan

- Siapkan baseline P5 dari artefak P4: salin file P4 dan cek tampilan awal,
  hasilnya sesuai.
- Hubungkan JavaScript eksternal ke HTML: menambahkan script.js dan tag
  `<script src>` di index.html, hubungan berhasil diverifikasi lewat Console.
- Tambah elemen formFeedback: elemen ditambahkan di index.html dan diuji lewat
  Console.
- Tambahkan penanganan event submit: id contactForm dan novalidate
  ditambahkan, event submit berhasil teramati lewat Console.
- Tambahkan penanganan event input: listener input ditambahkan dan pesan
  umpan balik terhapus saat isian diubah.
- Tambahkan penanganan event reset: listener reset ditambahkan dan pesan
  umpan balik terhapus saat form di-reset.
- Terapkan pencegahan submit bawaan peramban: preventDefault ditambahkan pada
  listener submit, halaman tidak lagi refresh saat form dikirim.
- Pilih elemen navigasi dengan DOM: navToggle dan navMenu dipilih dan
  diverifikasi lewat Console.
