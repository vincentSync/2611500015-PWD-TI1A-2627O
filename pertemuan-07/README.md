# PERTEMUAN-07

Pada pertemuan ini saya melakukan:

1. Menyalin artefak pertemuan-06 ke pertemuan-07 untuk digunakan sebagai baseline.
2. Menguji `http://localhost/pwd/0344300002-PWD-TI1A-2627O/pertemuan-07/` lewat Laragon, hasilnya sama dengan pertemuan-06.
3. Memeriksa formulir pada `index.php` (atribut `name`, `method`, `action`) dan event `submit` pada `script.js`.
4. Mempelajari metode GET: data dikirim lewat URL (query string) dan dibaca PHP dengan `$_GET`.
5. Menambahkan kode `$_GET['nama']` pada `index.php` lalu mengujinya lewat URL `?nama=Andi`, `?nama=Budi%20Anduk`, dan tanpa parameter.
6. Mempelajari URL dengan beberapa parameter: tanda `?` memisahkan alamat dan parameter, tanda `&` memisahkan antarparameter, dan `%40` adalah `@`.
7. Mengubah `script.js` dengan menambahkan `contactForm.submit();` setelah validasi berhasil, lalu menguji pengiriman formulir dengan GET. Data terkirim lewat URL dan PHP menampilkan nilai `nama`. Jika ada kolom kosong atau tidak valid, formulir tidak terkirim.
8. Menyalin `index.php` menjadi `indexGet.php` sebagai demonstrasi GET, lalu mengubah `action` menjadi `indexGet.php`. Saat diuji, data terkirim lewat URL dan nama tampil di halaman.
9. Mengubah atribut `method` pada formulir utama `index.php` dari `get` menjadi `post`, lalu memeriksa kode sumber (CTRL+U) untuk memastikan formulir memakai `method="post"`. Tampilan formulir, navigasi, dan tombol tetap tersedia, sedangkan demonstrasi GET tetap ada di `indexGet.php`.
10. Mengubah kode PHP di bagian atas `index.php` dari `$_GET` menjadi `$_POST`, lalu menguji dengan mengisi formulir dan klik Kirim. Nama yang dikirim tampil di halaman, dan nilai input tidak muncul sebagai parameter di URL.
11. Menambahkan pembacaan input lain dari `$_POST`, mengubah checkbox menjadi `name="minat[]"`, dan menyesuaikan selector `script.js`. Pengujian di `index.php` dan `indexGet.php`: memilih dua topik, satu topik, dan tanpa topik. Hasil: validasi mengenali pilihan topik dan menampilkan pesan saat tidak ada topik yang dipilih.
12. Menambahkan validasi kelengkapan data di sisi peladen pada `index.php` (F.2): variabel `$pesanKesalahan` dan pemeriksaan wajib isi untuk semua input dengan `trim()` dan `empty()`.
13. Menambahkan validasi format di sisi peladen pada `index.php` (F.3): semester diperiksa dengan `filter_var()` `FILTER_VALIDATE_INT` dan harus antara 1 dan 14, email diperiksa dengan `FILTER_VALIDATE_EMAIL`. Pemeriksaan format hanya dijalankan jika kolom tidak kosong.
14. Menambahkan validasi nilai pilihan pada `index.php` (F.4): `jenis_pesan`, `prodi`, dan `minat` diperiksa dengan `in_array()` agar hanya nilai yang diizinkan yang diterima.
15. Menambahkan normalisasi data masukan dengan `trim((string) ...)` (F.5) yang diletakkan sebelum blok validasi.
16. Menampilkan pesan kesalahan validasi PHP pada `index.php` (F.6 Tahap 1) dengan `htmlspecialchars()`. Pengujian dilakukan dengan menonaktifkan `script.js` sementara, lalu mengirim formulir kosong, mengisi email `bukan-email`, dan mengirim tanpa memilih minat. Pesan kesalahan tampil sesuai kondisi, lalu `script.js` diaktifkan kembali.
17. Menampilkan data yang diterima melalui POST pada `index.php` (F.6 Tahap 2) menggunakan `htmlspecialchars()`, `foreach` untuk minat, dan `nl2br()` untuk pesan. Diuji dengan data valid dan dengan teks `<b>Mahasiswa</b>` pada kolom pesan. Data tampil sesuai isian dan teks HTML ditampilkan sebagai teks biasa.
