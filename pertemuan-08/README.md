# UTS Pemrograman Web Dasar - Pertemuan 08

## Proses Pengerjaan

PADA PERTEMUAN-08 UTS SAYA MELAKUKAN :

1. Mengekstrak bahan-pertemuan-08.zip ke folder pertemuan-08, menjalankannya di localhost, lalu melakukan commit awal
2. Menambahkan menu navigasi "Rencana Kegiatan" pada index.php yang mengarah ke section baru (#rencana-kegiatan)
3. Menambahkan section "Rencana Kegiatan Mahasiswa" sebelum section#contact, berisi formulir (Nama Kegiatan, Kategori Kegiatan, Tanggal Pelaksanaan, Lokasi Kegiatan, Deskripsi Kegiatan) dengan tombol Kirim dan Batal
4. Menambahkan CSS agar tampilan section mengikuti pola section#contact
5. Menambahkan validasi sisi klien dengan JavaScript pada script.js (semua field wajib diisi sesuai panjang yang ditentukan, pengiriman ditahan jika ada yang salah)
6. Menambahkan pemrosesan data dengan metode POST pada PHP di index.php: validasi sisi peladen, normalisasi/sanitasi masukan (trim, rapikan spasi, buang karakter kontrol), dan pengecekan kategori terhadap daftar yang diizinkan
7. Menyimpan data ke session lalu menerapkan pola Post-Redirect-Get (PRG) agar data tidak terkirim ulang saat halaman di-refresh
8. Menampilkan kembali data pada section Rencana Kegiatan Mahasiswa dengan pengamanan keluaran `htmlspecialchars()`
9. Melakukan git add, git commit, dan git push secara bertahap pada setiap tahapan

## Hasil Pengujian

Pengujian dilakukan lewat localhost:

- Menu "Rencana Kegiatan" menggulir halaman ke section yang benar
- Form kosong ditolak oleh validasi JavaScript dengan pesan kesalahan
- Data yang valid tampil pada section Rencana Kegiatan Mahasiswa
- Refresh halaman (F5) tidak memunculkan kirim ulang formulir, sehingga pola PRG berfungsi
- Input `<script>alert(1)</script>` tampil sebagai teks biasa dan tidak dijalankan, sehingga `htmlspecialchars()` berfungsi
- Formulir Kontak dan fitur aplikasi sebelumnya tetap berjalan dengan baik
