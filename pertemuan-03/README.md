# Pertemuan 3 - Formulir HTML dan CSS Dasar

## Baseline

- Menggunakan hasil P2 sebagai dasar pengembangan P3.
- Menyalin `index.html` dan `img/foto-profil.jpg` ke `pertemuan-03/`.

## Implementasi Formulir

- Elemen form yang digunakan: form, label, input, select, option, textarea, button.
- Tipe input yang digunakan: text, email, number, date, radio, checkbox.
- Atribut validasi yang digunakan: required, minlength, maxlength, min, max.

## Pengujian GET dan POST

- Hasil pengujian GET: data formulir muncul di URL setelah tombol kirim diklik.
- Contoh URL encoding yang ditemukan: https://vincentsync.github.io/2611500015-PWD-TI1A-2627O/pertemuan-03/index.html?nama=Vincent+Surya+Julianto&email=2611500015%40mahasiswa.atmaluhur.ac.id&semester=1&tanggal=2026-09-28&jenis_pesan=saran&minat=HTML&minat=CSS&prodi=TI&pesan=ok. Spasi menjadi +, @ menjadi %40, dan checkbox yang dicentang lebih dari satu (HTML dan CSS) muncul sebagai dua pasangan minat=HTML&minat=CSS pada URL.
- Hasil pengujian POST: data tidak muncul di URL dan halaman menampilkan 405 Not Allowed karena GitHub Pages tidak punya pemrosesan di sisi server.

## CSS Dasar

- Selector elemen: label, button, h2, h3, p, ol (dipakai bersama ID, misalnya #contact label)
- Selector class: .form-group dan .input-form
- Selector ID: #about dan #contact
- Properti CSS dasar yang digunakan: color, background-color, font-family, font-size, font-weight, margin, padding, border

## Pengujian dan Perbaikan

- Galat yang ditemukan: tidak ada galat pada kode. Kekurangannya ada pada pengujian saya, saat percobaan POST pertama saya hanya mengubah method lalu mengembalikannya, jadi hasilnya belum saya lihat.
- Penyebab galat: belum menguji langsung di GitHub Pages.
- Perbaikan yang dilakukan: mengulang pengujian POST di GitHub Pages.
- Hasil pengujian ulang: muncul 405 Not Allowed, lalu method dikembalikan ke get dan berjalan normal.

## GitHub Pages

URL: https://vincentsync.github.io/2611500015-PWD-TI1A-2627O/pertemuan-03/
