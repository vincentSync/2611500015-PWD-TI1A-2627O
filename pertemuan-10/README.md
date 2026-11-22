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
11. membuka phpmyadmin dan memastikan tampilannya dapat dibuka dan terhubung dengan layanan MySQL
12. membuat basis data db_pwd_2611500015 lewat menu Databases dengan collation bawaan, lalu memastikan basis data muncul pada daftar basis data
13. memilih basis data db_pwd_2611500015, mengisi nama tabel tbl_kontak_2611500015 dengan jumlah kolom 9, lalu memastikan formulir pembuatan tabel menampilkan nama tabel yang benar dan 9 kolom untuk diisi
14. mengisi 9 kolom tabel sesuai rancangan (id, nama, email, semester, tanggal, jenis_pesan, minat, prodi, pesan), memilih PRIMARY pada index dan mencentang A_I untuk id, lalu menyimpan tabel dan memeriksa hasilnya pada tab Structure
15. mempelajari perintah SQL CREATE DATABASE, USE, dan CREATE TABLE sebagai bentuk SQL dari pembuatan basis data dan tabel yang sudah dilakukan lewat phpmyadmin, lalu mencocokkan nama basis data, nama tabel, dan 9 atribut dengan struktur tabel yang dibuat
