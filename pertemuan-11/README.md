# pertemuan-11

1. Menyalin berkas pertemuan-10 ke pertemuan-11 sebagai baseline. Halaman tampil normal.
2. Menjalankan Laragon, Apache dan MySQL aktif, pertemuan-11 bisa diakses di browser.
3. Database db_pwd_NIM dan tabel tbl_kontak_NIM tersedia, 9 kolom lengkap, berisi 2 baris data.
4. Membuat berkas baru dengan nama 'koneksi.php'.
5. Menulis parameter koneksi di koneksi.php: host localhost, user root, password kosong, database db_pwd_2611500015.
6. Menambahkan mysqli_report(MYSQLI_REPORT_OFF) agar kegagalan diperiksa sendiri dengan if.
7. Membuat koneksi dengan mysqli_connect() dan memeriksa kegagalan dengan if (!$koneksi) + die().
8. Menguji koneksi dengan berkas sementara uji_koneksi.php, muncul pesan "Koneksi ke basis data berhasil.", lalu berkas uji dihapus.
