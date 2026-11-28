# pertemuan-11

1. Menyalin berkas pertemuan-10 ke pertemuan-11 sebagai baseline. Halaman tampil normal.
2. Menjalankan Laragon, Apache dan MySQL aktif, pertemuan-11 bisa diakses di browser.
3. Database db_pwd_NIM dan tabel tbl_kontak_NIM tersedia, 9 kolom lengkap, berisi 2 baris data.
4. Membuat berkas baru dengan nama 'koneksi.php'.
5. Menulis parameter koneksi di koneksi.php: host localhost, user root, password kosong, database db_pwd_2611500015.
6. Menambahkan mysqli_report(MYSQLI_REPORT_OFF) agar kegagalan diperiksa sendiri dengan if.
7. Membuat koneksi dengan mysqli_connect() dan memeriksa kegagalan dengan if (!$koneksi) + die().
8. Menguji koneksi dengan berkas sementara uji_koneksi.php, muncul pesan "Koneksi ke basis data berhasil.", lalu berkas uji dihapus.
9. Menguji kegagalan koneksi dengan database db_tidak_tersedia, muncul pesan "Koneksi ke basis data gagal.". Setelah dikembalikan ke db_pwd_NIM, pesan gagal tidak muncul lagi.
10. Tahap koneksi selesai: koneksi.php berisi kode akhir yang benar dan uji_koneksi.php sudah dihapus.
11. Memahami require_once("koneksi.php") untuk memuat koneksi ke index.php. koneksi.php sejajar dengan index.php.
12. Memuat fungsi.php dan koneksi.php di bagian atas index.php dengan require_once(), session_start() dimatikan.
13. Memeriksa alur: koneksi.php dimuat di awal index.php, pemeriksaan kegagalan koneksi tetap di koneksi.php.
14. Menguji halaman utama pertemuan-11 di browser, halaman tampil normal tanpa pesan "Koneksi ke basis data gagal.".
15. Tahap integrasi selesai: index.php memuat koneksi.php dan halaman utama dapat diakses.
16. Menulis kueri SELECT \* FROM tbl_kontak_NIM di index.php setelah koneksi.php dimuat.
17. Menjalankan kueri dengan mysqli_query($koneksi, $sql), hasilnya disimpan di $hasil.
18. Menambahkan pemeriksaan if (!$hasil). Uji dengan tabel tbl_tabel_tidak_tersedia memunculkan "Kueri SELECT gagal dijalankan.". Setelah selesai dikembalikan ke tbl_kontak_2611500015, halaman normal.
19. Mengambil seluruh baris hasil kueri dengan while + mysqli_fetch_assoc() ke dalam larik $dataKontak.
20. Memeriksa $dataKontak dengan var_dump(): berisi 2 baris, setiap baris punya 9 indeks sesuai kolom tabel. Kode var_dump() lalu dijadikan komentar.
