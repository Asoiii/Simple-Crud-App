
Dokumentasi Aplikasi CRUD Dokter dan Pasien
1. Deskripsi Aplikasi
Aplikasi ini adalah sistem manajemen data untuk dokter dan pasien yang dibuat menggunakan React.js untuk antarmuka pengguna (frontend) dan MockAPI untuk pengelolaan data (backend). Aplikasi ini mendukung fungsionalitas CRUD (Create, Read, Update, Delete) baik untuk data dokter maupun pasien.

2. Teknologi yang Digunakan
-React.js:
Digunakan untuk membangun antarmuka pengguna yang dinamis dan responsif.
- React Router DOM:
Digunakan untuk navigasi antar halaman dalam aplikasi.
- MockAPI:
Digunakan sebagai server backend untuk menyimpan dan mengelola data dokter dan pasien.
- Axios:
Library HTTP client untuk mengirimkan request ke MockAPI.
- ESLint:
Digunakan untuk menjaga kualitas kode dan memastikan aplikasi bebas dari kesalahan sintaks.
- Tailwind CSS:
Framework CSS untuk mendesain antarmuka aplikasi dengan cepat dan mudah.

3. Cara Kerja Aplikasi

1. Dokter dan Pasien:
-Halaman HomeDokter dan HomePasien masing-masing menampilkan tabel data dokter dan pasien dengan fungsionalitas seperti edit, detail, dan hapus.
-Tombol Tambah Dokter atau Tambah Pasien mengarahkan pengguna ke formulir input.
-Tombol Edit membuka halaman formulir yang sudah terisi dengan data untuk diperbarui.
-Tombol Detail menampilkan informasi lengkap dokter atau pasien dalam format card-style.
-Semua request (GET, POST, PUT, DELETE) dikirim menggunakan Axios ke MockAPI sesuai endpoint masing-masing.
2. Routing:
-Navigasi antar halaman diatur dengan React Router DOM, memastikan aplikasi memiliki alur yang terstruktur dengan navigasi URL.
3. UI/UX:
-Desain aplikasi responsif dengan bantuan Tailwind CSS, memastikan tampilan yang baik di berbagai ukuran layar.



