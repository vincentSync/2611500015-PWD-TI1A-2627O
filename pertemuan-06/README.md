# Pertemuan 06 - PHP Dasar dan Pemrograman Sisi Peladen

Alamat proyek: http://localhost/pwd/2627o/ti1a/2611500015-PWD-TI1A-2627O/pertemuan-06/

## Catatan Pengembangan

### 1. Pemeriksaan Awal PHP

- Laragon dijalankan dengan Start All, Apache dan MySQL berjalan.
- Halaman tampil normal melalui localhost.
- Foto profil, navigasi, tampilan responsif, dan JavaScript dari P5 masih berfungsi.
- Commit: catat pemeriksaan awal PHP di pertemuan-06\README.md

### 2. Tag PHP dan echo

- Kode uji `echo "PHP berhasil dijalankan.";` ditambahkan setelah tag `<body>` dan sebelum `<header>`.
- Teks tampil di halaman. View Page Source (Ctrl+U) hanya menampilkan hasilnya, tanpa kode PHP mentah.
- Kode uji dihapus setelah pengujian selesai.
- Commit: pengujian komentar, echo, tag dasar PHP

### 3. Komentar, echo, dan print

- `echo` dan `print` diuji terpisah dan sama-sama menampilkan teks di halaman.
- Isi komentar (satu baris dan beberapa baris) tidak tampil di halaman.
- Kode uji dihapus setelah pengujian selesai.
- Commit: mempelajari komentar dan keluaran dengan echo dan print di PHP

### 4. HTML Statis dan Keluaran PHP

- Paragraf HTML statis dan paragraf hasil `echo` sama-sama tampil di halaman.
- Di View Page Source keduanya berupa HTML biasa, artinya PHP sudah diproses peladen.
- Kode uji dihapus setelah pengujian selesai.
- Commit: membandingkan keluaran tag HTML dan tag HTML di dalam tag PHP

### 5. Variabel PHP

- Blok PHP ditambahkan di bagian paling awal index.php, sebelum `<!doctype html>`, berisi variabel `$nim`, `$namaMahasiswa`, `$programStudi`, `$tahunAkademik`, `$semester`, `$ipk`, `$statusAktif`, dan `$catatanTambahan`.
- Halaman tetap tampil normal tanpa galat.
- Commit: menambahkan deklarasi variabel PHP

### 6. Konstanta PHP

- Konstanta `NAMA_MATA_KULIAH` dan `PROFIL_GITHUB` ditambahkan dengan `const` di blok PHP yang sama.
- Penulisan konstanta diperiksa di kode, halaman tetap tampil normal tanpa galat.
- Commit: menambahkan konstanta PHP

### 7. Variabel dan Konstanta pada Halaman

- Nama mahasiswa, nama mata kuliah, dan tahun akademik ditampilkan di bagian Selamat Datang dengan `echo` dan `print`.
- Atribut `href` tautan GitHub di bagian Kontak memakai `PROFIL_GITHUB`. Tautan diklik dan mengarah ke profil yang benar.
- Commit: menampilkan data mahasiswa dengan variabel dan konstanta

### 8. Operator Aritmetika

- Ditambahkan `$batasSemester = 8` dan `$sisaSemester = $batasSemester - $semester`.
- Halaman menampilkan sisa semester sesuai hasil perhitungan.
- Commit: menambahkan operator aritmetika PHP

### 9. Operator Perbandingan dan Logika

- Ditambahkan `$semesterValid` (operator `>=`, `<=`, dan `&&`) dan `$statusSemester` (operator ternary).
- Halaman menampilkan "Sesuai rentang". Dengan `$semester` diubah sementara menjadi 9, keluaran menjadi "Perlu diperiksa". Nilai dikembalikan setelah uji.
- Commit: menerapkan pemeriksaan rentang semester

### 10. Percabangan if-elseif-else

- Keterangan semester ditentukan dari nilai `$semester`: kurang dari 3 "Semester awal", sampai 6 "Semester menengah", di atas 6 "Semester akhir".
- Diuji dengan nilai 4 dan 7, hasilnya sesuai. Nilai dikembalikan setelah uji.
- Galat: paragraf pemeriksaan rentang semester (tahap 9) salah ditempatkan karena kode ditempel tanpa menimpa bagian `section` sampai `article` yang lama. Akibatnya judul "Tentang Saya" dan "Profil Singkat" muncul dua kali.
- Perbaikan: blok ganda dihapus sehingga hanya ada satu `section` dan satu `article`, lalu paragraf dipindahkan ke tempat yang benar. Judul kini tampil satu kali.
- Commit: menerapkan percabangan if elseif else

### 11. Operator Ternary

- Ditambahkan `$namaProdi` dan paragraf Program Studi serta Status mahasiswa.
- `TI` dan `true` menampilkan "Teknik Informatika (TI)" dan "Aktif". Setelah diubah sementara menjadi `SI` dan `false`, menampilkan "Sistem Informasi (SI)" dan "Tidak aktif". Nilai dikembalikan.
- Commit: menerapkan operator ternary pada profil mahasiswa

### 12. Percabangan switch

- Fokus program studi ditentukan dengan `switch` dan `default`.
- `TI` dan `SI` menampilkan fokus masing-masing, sedangkan `MI` menampilkan "Belum ditentukan". Nilai dikembalikan.
- Commit: menerapkan percabangan switch case

### 13. Perulangan for

- Daftar Target Belajar yang statis diganti dengan perulangan `for` dan `switch`.
- Lima butir tampil, butir kelima "Belum dipetakan".
- Commit: menerapkan perulangan for untuk target belajar

### 14. Perulangan while

- Ditambahkan daftar nomor semester dengan `while` dan `$nomorSemester++`.
- Daftar Semester 1, 2, dan 3 tampil.
- Commit: menerapkan perulangan while untuk nomor semester

### 15. number_format()

- IPK ditampilkan dengan `number_format($ipk, 2, ',', '.')`.
- Halaman menampilkan "IPK: 3,75".
- Commit: memformat tampilan IPK dengan number_format

### 16. Pemeriksaan NULL

- Catatan tambahan diperiksa dengan `=== null` dan operator ternary.
- Nilai `null` menampilkan "Belum ada". Setelah diubah sementara menjadi "Catatan praktik PHP", teks itu yang tampil. Nilai dikembalikan ke `null`.
- Commit: menampilkan catatan tambahan berdasarkan nilai null

### 17. date() pada Footer

- Footer diganti dengan `date("Y")`, nama mahasiswa, dan NIM.
- Footer menampilkan tahun saat ini, nama, dan NIM.
- Commit: menampilkan tahun dinamis pada footer

### 18. Sintaks <?= ... ?>

- Sintaks singkat sudah dipakai pada tautan GitHub (`PROFIL_GITHUB`) dan footer (`date("Y")` dan `$nim`).
- Keduanya tampil dan berfungsi. Tidak ada perubahan kode baru, jadi tidak ada commit tambahan.

### 19. Atribut action Formulir

- Atribut `action` formulir di bagian Kontak diubah dari `index.html` menjadi `index.php`.
- Halaman tetap tampil normal tanpa galat.
- Commit: menyesuaikan action formulir ke index.php

## Pengujian Akhir

Seluruh halaman dijalankan melalui localhost dan semua keluaran PHP, percabangan, serta perulangan tampil sesuai yang diharapkan. Semua perubahan sudah di-commit dan di-push ke GitHub.
