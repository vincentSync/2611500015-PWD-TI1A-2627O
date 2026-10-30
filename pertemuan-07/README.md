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
