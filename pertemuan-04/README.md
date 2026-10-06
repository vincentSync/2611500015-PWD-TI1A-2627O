# Pertemuan 4 - CSS3 Layout dan Responsive Web Design

## Pengembangan

- Perubahan yang dilakukan: Saya memindahkan CSS dari index.html ke berkas style.css, lalu menata halaman dengan Box Model (box-sizing: border-box, padding, border, dan margin pada header, section, formulir, dan footer). Navigasi saya susun dengan Flexbox, tata letak utama (main) dengan CSS Grid, dan terakhir saya buat responsif dengan pendekatan mobile-first. Tampilan dasar untuk layar kecil memakai satu kolom dan navigasi vertikal. Mulai lebar 768px, main berubah menjadi dua kolom, navigasi menjadi horizontal, dan bagian Kontak membentang penuh.
- Commit dan push GitHub: Saya commit dan push per tahap, yaitu pemisahan CSS, Box Model, penataan elemen halaman, Flexbox navigasi, CSS Grid, desain responsif, lalu satu commit perapian aturan #contact.

## Pengujian

- Perangkat bergerak: 360px (preset Samsung Galaxy A55 di Browser DevTools). Navigasi tersusun vertikal, bagian Home, Tentang Saya, dan Kontak tersusun dalam satu kolom dari atas ke bawah. Seluruh konten sampai footer terlihat, formulir dapat digunakan, dan tidak ada tata letak yang rusak.
- Desktop: 1032px (preset iPad Pro 13 di Browser DevTools). Navigasi tersusun horizontal, Home dan Tentang Saya berdampingan dalam dua kolom, dan Kontak membentang penuh di bawahnya. Jarak antar-elemen konsisten dan tidak ada tata letak yang rusak.
- Galat dan perbaikan: Saya sempat punya dua blok #contact di style.css karena aturan lama tidak terhapus saat saya menambah aturan baru, jadi satu blok saya hapus. Saya juga memindahkan grid-column: 1 / -1 dari aturan dasar #contact ke dalam @media (min-width: 768px) supaya sesuai pendekatan mobile-first.
- Validasi CSS: Saya mengunggah style.css ke W3C CSS Validation Service dan tidak ditemukan galat.

## Repositori

URL GitHub: https://github.com/vincentSync/2611500015-PWD-TI1A-2627O
