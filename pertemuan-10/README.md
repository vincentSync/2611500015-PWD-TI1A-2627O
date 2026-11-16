# pertemuan-10

1. menyalin file dari folder pertemuan 09 ke dalam folder pertemuan 10 sebagai baseline
2. menjalankan laragon dan menguji tampilan web lewat localhost dan hasilnya normal seperti pertemuan sebelumnya
3. membuka halaman phpmyadmin dan memastikannya dapat terhubung dengan layanan MySQL dengan mengisi halaman login. pada bagain username disi dengan 'root' lalu pada bagian password dikosongkan
4. mengidentifikasi 8 data formulir kontak di index.php beserta atribut name dan jenis input-nya: nama (text), email (email), semester (number), tanggal (date), jenis_pesan (radio), minat[] (checkbox), prodi (select), dan pesan (textarea)
5. menentukan data yang akan disimpan ke basis data, yaitu hanya 8 data dari formulir kontak. data profil seperti nim, nama mahasiswa, dan program studi di bagian profil tidak ikut disimpan karena bukan data yang dikirim lewat formulir
6. memeriksa checkbox minat dan memastikan keduanya memakai name="minat[]" dengan nilai HTML dan CSS. karena hanya memakai satu tabel, pilihan minat akan disimpan dalam satu kolom sebagai teks dipisah koma, contohnya HTML, CSS
7. menentukan nama basis data dan nama tabel sesuai pola pada modul, yaitu db_pwd_2611500015 dan tbl_kontak_2611500015
8. merancang atribut dan tipe data tabel berdasarkan 8 data formulir: nama (VARCHAR(50)), email (VARCHAR(255)), semester (TINYINT), tanggal (DATE), jenis_pesan (VARCHAR(20)), minat (VARCHAR(50)), prodi (VARCHAR(2)), dan pesan (VARCHAR(300))
9. menentukan atribut id bertipe INT sebagai primary key dengan AUTO_INCREMENT agar nilainya bertambah otomatis dan setiap data punya identitas unik
10. memeriksa rancangan akhir tabel yang terdiri dari 9 atribut (id dan 8 atribut dari formulir), memastikan seluruh data formulir sudah terwakili, tipe data sesuai, dan hanya id yang menjadi primary key dengan AUTO_INCREMENT
