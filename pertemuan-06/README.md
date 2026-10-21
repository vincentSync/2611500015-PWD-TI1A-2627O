# Pertemuan 06 - PHP Dasar dan Pemrograman Sisi Peladen

Alamat proyek: http://localhost/pwd/2627o/ti1a/2611500015-PWD-TI1A-2627O/pertemuan-06/

## Catatan Pengembangan

-

### 1. Pemeriksaan Awal PHP

- Laragon dijalankan dengan Start All, Apache dan MySQL berjalan.
- Lokasi proyek: <path folder Anda>
- Halaman tampil normal melalui localhost.
- Foto profil, navigasi, tampilan responsif, dan JavaScript dari P5 masih berfungsi.
- Tidak ada galat. Belum ada kode PHP baru.
- Commit: catat pemeriksaan awal PHP di pertemuan-06\README.md

### 2. Tag PHP dan echo

- Kode uji ditambahkan di index.php, setelah tag `<body>` dan sebelum `<header>`:

```php
  <?php
  // Pengujian awal eksekusi PHP.
  echo "PHP berhasil dijalankan.";
  ?>
```

- Teks "PHP berhasil dijalankan." tampil di halaman.
- View Page Source (Ctrl+U) hanya menampilkan teks hasilnya, tanpa kode PHP mentah.
- Tidak ada galat.
- Kode uji dihapus setelah pengujian selesai.
- Commit: pengujian komentar, echo, tag dasar PHP

### 3. Komentar, echo, dan print

- Kode uji ditambahkan di index.php, setelah tag `<body>` dan sebelum `<header>`:

```php
  <?php
  // Komentar satu baris.
  echo "Keluaran menggunakan echo.";

  /*
  Komentar beberapa baris.
  Komentar ini tidak ditampilkan pada halaman.
  */
  ?>
```

- Uji echo: teks "Keluaran menggunakan echo." tampil di halaman.
- Isi komentar (satu baris maupun beberapa baris) tidak tampil di halaman dan tidak muncul di View Page Source.
- Uji print dilakukan terpisah dengan mengganti baris echo menjadi `print "Keluaran menggunakan print.";`. Teks "Keluaran menggunakan print." tampil di halaman.
- Perbedaan yang diamati: echo dan print sama-sama menghasilkan keluaran teks di halaman, sedangkan komentar hanya keterangan di kode dan tidak ditampilkan.
- Tidak ada galat.
- Kode uji dihapus setelah pengujian selesai.
- Commit: mempelajari komentar dan keluaran dengan echo dan print di PHP

### 4. Perbedaan Keluaran HTML Statis dan Keluaran Dinamis PHP

- Kode uji ditambahkan di index.php, setelah tag `<body>` dan sebelum `<header>`:

```php
  <p>Konten HTML statis.</p>
  <?php
  echo "<p>Konten yang dihasilkan oleh PHP.</p>";
  ?>
```

- Kedua teks tampil di halaman: "Konten HTML statis." dan "Konten yang dihasilkan oleh PHP.".
- View Page Source (Ctrl+U) menampilkan kedua paragraf sebagai HTML biasa. Kode PHP tidak muncul mentah, artinya sudah diproses oleh peladen.
- Perbedaan yang diamati: HTML statis ditulis langsung di markup, sedangkan keluaran PHP dihasilkan oleh instruksi program lalu disertakan dalam respons HTML. Hasilnya di peramban sama-sama berupa paragraf.
- Tidak ada galat.
- Kode uji dihapus setelah pengujian selesai.
- Commit: membandingkan keluaran tag HTML dan tag HTML di dalam tag PHP

### 5. Variabel PHP

- Blok PHP ditambahkan di bagian paling awal index.php, sebelum `<!doctype html>`:

```php
  <?php
  // P6: PHP dasar dan pemrograman sisi peladen
  // Bagian 1: Variabel dan konstanta
  $nim = "2611500015";
  $namaMahasiswa = "Vincent Surya Julianto";
  $programStudi = "TI";
  $tahunAkademik = "2026/2027";
  $semester = 1;
  $ipk = 3.75;
  $statusAktif = true;
  $catatanTambahan = null;
  ?>
```

- Variabel diawali tanda `$` dan nilainya ditetapkan dengan operator `=`. Nama variabel bersifat case sensitive.
- Halaman tetap tampil normal dan tidak muncul galat PHP.
- Nama dan nilai variabel sudah diperiksa ulang, tidak ada salah ketik.
- Variabel belum ditampilkan di halaman, hanya dideklarasikan.
- Commit: menambahkan deklarasi variabel PHP

### 6. Konstanta PHP

- Dua konstanta ditambahkan di blok PHP yang sama di index.php, setelah deklarasi variabel dan sebelum tag penutup `?>`:

```php
  const NAMA_MATA_KULIAH = "Pemrograman Web Dasar";
  const PROFIL_GITHUB = "<username GitHub Anda>";
```

- Konstanta dideklarasikan dengan `const` dan ditulis tanpa tanda `$`, baik saat didefinisikan maupun dipanggil.
- Penulisan `const`, nama konstanta, tanda kutip, dan titik koma sudah diperiksa di kode.
- Halaman tetap tampil normal melalui localhost dan tidak muncul galat PHP.
- Pada tahap ini hanya keberadaan deklarasi yang diperiksa. Penggunaan konstanta di halaman diuji pada tahap berikutnya (D.4).
- Commit: menambahkan konstanta PHP

### 7. Variabel dan Konstanta pada Halaman Profil

- Pada section `id="home"`, setelah judul Selamat Datang, paragraf lama diganti dengan paragraf berikut:

```php
  <p>Halo, saya <strong><?php echo $namaMahasiswa; ?></strong>. Saya sedang mempelajari matakuliah <strong><?php print NAMA_MATA_KULIAH; ?></strong> pada tahun akademik <?php echo $tahunAkademik; ?>.</p>
```

- Pada bagian Kontak, atribut `href` tautan GitHub diganti agar memakai konstanta `PROFIL_GITHUB`, teks tautan tetap dipertahankan:

```php
  <a target="_blank" href="https://github.com/<?= PROFIL_GITHUB ?>">profil GitHub saya</a>
```

- `echo` dipakai untuk menampilkan variabel, `print` dipakai untuk menampilkan konstanta nama mata kuliah.
- Hasil pengujian: nama mahasiswa, nama mata kuliah, dan tahun akademik tampil sesuai nilai yang dideklarasikan.
- Struktur dan tampilan halaman dari P5 tetap dipertahankan.
- Tautan GitHub diklik dan mengarah ke alamat yang dibentuk dari nilai `PROFIL_GITHUB`.
- Tidak ada galat.
- Commit: menampilkan data mahasiswa dengan variabel dan konstanta
