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

### 8. Operator Aritmetika dan Penugasan

- Pada blok PHP di bagian awal index.php, setelah deklarasi variabel dan konstanta, ditambahkan:

```php
  // Bagian 2: Operator
  $batasSemester = 8;
  $sisaSemester = $batasSemester - $semester;
```

- Pada bagian Tentang Saya, di dalam `<article>` Profil Singkat, setelah judul `<h3>Profil Singkat</h3>` ditambahkan paragraf:

```php
  <p>Sisa semester hingga batas: <?php echo $sisaSemester; ?></p>
```

- Operator `-` dipakai untuk pengurangan dan operator `=` untuk memberi nilai ke variabel.
- Hasil pengujian: halaman tampil normal tanpa galat PHP dan menampilkan "Sisa semester hingga batas: 6" (batas semester 8 dikurangi semester 2).
- Perubahan diperiksa dengan `git status` sebelum commit.
- Commit: menambahkan operator aritmetika PHP

### 9. Operator Perbandingan dan Logika

- Pada blok PHP di bagian awal index.php, setelah deklarasi `$sisaSemester`, ditambahkan:

```php
  $semesterValid = $semester >= 1 && $semester <= $batasSemester;
  $statusSemester = ($semesterValid && $statusAktif) ? "Sesuai rentang" : "Perlu diperiksa";
```

- Operator `>=` dan `<=` memeriksa apakah semester berada dalam rentang 1 sampai batas semester. Operator `&&` menggabungkan hasil pemeriksaan rentang dengan status aktif mahasiswa. Operator ternary `? :` memilih teks berdasarkan hasil pemeriksaan.
- Pada bagian Tentang Saya, di dalam `<article>` Profil Singkat, setelah paragraf sisa semester ditambahkan:

```php
  <p>Pemeriksaan rentang semester: <?php echo $statusSemester; ?></p>
```

- Hasil pengujian dengan `$semester = 2` dan `$statusAktif = true`: halaman menampilkan "Pemeriksaan rentang semester: Sesuai rentang".
- Pengujian kondisi lain: `$semester` diubah sementara menjadi 9, halaman dimuat ulang, dan keluaran berubah menjadi "Pemeriksaan rentang semester: Perlu diperiksa".
- Setelah pengujian, `$semester` dikembalikan menjadi 2 dan keluaran kembali menjadi "Sesuai rentang".
- Tidak ada galat.
- Commit: menerapkan pemeriksaan rentang semester

### 10. Percabangan if-elseif-else

- Pada blok PHP di bagian awal index.php, setelah deklarasi variabel operator, ditambahkan:

```php
  // Bagian 3: Percabangan if-elseif-else
  if ($semester < 3) {
    $keteranganSemester = "Semester awal";
  } elseif ($semester <= 6) {
    $keteranganSemester = "Semester menengah";
  } else {
    $keteranganSemester = "Semester akhir";
  }
```

- Semester kurang dari 3 dikategorikan semester awal, sampai dengan 6 semester menengah, dan di atas 6 semester akhir.
- Pada bagian Tentang Saya, di dalam `<article>` Profil Singkat, ditambahkan:

```php
  <p>Semester: <?php echo $semester . " (" . $keteranganSemester . ")"; ?></p>
```

- Operator titik (`.`) dipakai untuk menggabungkan teks dan nilai menjadi satu keluaran.
- Hasil pengujian dengan `$semester = 2`: halaman menampilkan "Semester: 2 (Semester awal)".
- Pengujian kondisi lain: `$semester = 4` menghasilkan "Semester menengah", dan `$semester = 7` menghasilkan "Semester akhir". Setelah pengujian, `$semester` dikembalikan menjadi 2.
- Galat yang ditemukan (saat memeriksa kode di GitHub): pada tahap E.3, paragraf pemeriksaan rentang semester salah ditempatkan karena kode tidak menimpa bagian `section` sampai `article` yang lama. Akibatnya `<section id="about">`, `<h2>Tentang Saya</h2>`, `<article>`, dan `<h3>Profil Singkat</h3>` muncul dua kali, sehingga judul "Tentang Saya" dan "Profil Singkat" tampil ganda dan paragraf berada di urutan yang salah.
- Perbaikan: blok ganda dihapus sehingga hanya ada satu `section`, satu `article`, dan satu `<h3>Profil Singkat</h3>`, dan paragraf pemeriksaan rentang semester dipindahkan ke tempat yang benar. Setelah dimuat ulang, judul hanya tampil satu kali.
- Commit: menerapkan percabangan if elseif else

### 11. Operator Ternary untuk Program Studi dan Status Mahasiswa

- Pada blok PHP di bagian awal index.php, setelah percabangan if-elseif-else, ditambahkan:
  ```php
  $namaProdi = ($programStudi == "SI") ? "Sistem Informasi" : (($programStudi == "TI") ? "Teknik Informatika" : "Lainnya");
  ```
- Jika `$programStudi` bernilai SI hasilnya "Sistem Informasi", jika TI hasilnya "Teknik Informatika", selain itu "Lainnya".
- Pada bagian Tentang Saya, di dalam `<article>` Profil Singkat, ditambahkan dua paragraf:
  ```php
  <p>Program Studi: <?php echo $namaProdi . " (" . $programStudi . ")"; ?></p>
  <p>Status mahasiswa: <?php echo $statusAktif ? "Aktif" : "Tidak aktif"; ?></p>
  ```
- Paragraf pertama menampilkan nama program studi beserta kodenya. Paragraf kedua memakai operator ternary untuk menampilkan status berdasarkan nilai boolean `$statusAktif`.
- Hasil pengujian dengan `$programStudi = "TI"` dan `$statusAktif = true`: halaman menampilkan "Program Studi: Teknik Informatika (TI)" dan "Status mahasiswa: Aktif".
- Pengujian kondisi alternatif: `$programStudi` diubah sementara menjadi SI dan `$statusAktif` menjadi false. Halaman menampilkan "Program Studi: Sistem Informasi (SI)" dan "Status mahasiswa: Tidak aktif".
- Setelah pengujian, kedua variabel dikembalikan ke nilai awal, yaitu TI dan true.
- Tidak ada galat.
- Commit: menerapkan operator ternary pada profil mahasiswa

### 12. Percabangan switch-case-default

- Pada blok PHP di bagian awal index.php, setelah deklarasi `$namaProdi`, ditambahkan:
  ```php
  // Bagian 4: Percabangan switch-case-default
  switch ($programStudi) {
    case "SI":
      $fokusProgramStudi = "Sistem informasi dan proses bisnis";
      break;
    case "TI":
      $fokusProgramStudi = "Komputasi dan pengembangan perangkat lunak";
      break;
    default:
      $fokusProgramStudi = "Belum ditentukan";
  }
  ```
- Setiap `case` menangani nilai program studi tertentu, `break` mengakhiri pelaksanaan cabang yang sesuai, dan `default` dipakai jika tidak ada nilai yang cocok. `break` tidak wajib pada `default` karena merupakan cabang terakhir.
- Pada bagian Tentang Saya, di dalam `<article>` Profil Singkat, ditambahkan:
  ```php
  <p>Fokus program studi: <?php echo $fokusProgramStudi; ?></p>
  ```
- Hasil pengujian dengan `$programStudi = "TI"`: halaman menampilkan "Fokus program studi: Komputasi dan pengembangan perangkat lunak".
- Pengujian cabang lain: `$programStudi` diubah sementara menjadi SI dan keluaran menjadi "Sistem informasi dan proses bisnis". Kemudian diubah menjadi MI (nilai yang tidak ditangani case) dan keluaran menjadi "Belum ditentukan".
- Setelah pengujian, `$programStudi` dikembalikan menjadi TI.
- Tidak ada galat.
- Commit: menerapkan percabangan switch case

### 13. Perulangan for untuk Target Belajar

- Pada bagian Tentang Saya, judul Target Belajar dan daftar statis yang lama diganti dengan kode berikut:
  ```php
  <h3>Target Belajar (Perulangan for)</h3>
  <ol>
    <?php
    // Perulangan for tanpa array; materi larik dibahas pada P9.
    for ($i = 1; $i <= 5; $i++) {
      echo "<li>Target belajar ke-" . $i . ": ";
      switch ($i) {
        case 1:
          echo "Memahami sintaks dasar PHP.";
          break;
        case 2:
          echo "Menggunakan variabel dan konstanta.";
          break;
        case 3:
          echo "Menerapkan operator dan percabangan.";
          break;
        case 4:
          echo "Menggunakan perulangan for dan while.";
          break;
        default:
          echo "Belum dipetakan";
          break;
      }
      echo "</li>";
    }
    ?>
  </ol>
  ```
- Perulangan `for` memakai penghitung `$i` yang dimulai dari 1 dan bertambah satu selama nilainya tidak melebihi 5. Setiap pengulangan menghasilkan satu butir daftar, dan `switch` menentukan teks target berdasarkan nilai `$i`.
- Empat target pertama ditentukan oleh `case`, sedangkan target kelima memakai `default`. Array tidak digunakan karena materinya dibahas pada P9.
- Hasil pengujian: bagian Target Belajar menampilkan lima butir, mulai dari "Target belajar ke-1: Memahami sintaks dasar PHP." sampai "Target belajar ke-5: Belum dipetakan".
- Tidak ada galat.
- Commit: menerapkan perulangan for untuk target belajar
