# Getting Started with Create React App

#Tujuan Akhir Submission Tahap Pertama
Buatlah aplikasi React bertemakan “Aplikasi Forum Diskusi” yang memanfaatkan API dari Dicoding Forum API. Kami mengedepankan kreativitas Anda dalam membangun aplikasi, tetapi pastikan aplikasi yang dibuat memenuhi kriteria yang dijelaskan di bawah ini.


Kriteria Utama 1: Fungsionalitas Aplikasi
Terdapat cara untuk mendaftar akun.
Terdapat cara untuk login akun.
Menampilkan daftar thread.
Ketika item thread dipilih, menampilkan detail thread beserta komentar di dalamnya.
Pengguna dapat membuat thread.
Pengguna dapat membuat komentar di dalam sebuah thread.
Menampilkan Loading bar ketika memuat data dari API.

Catatan penting.

Perihal authorization dalam mengakses resource threads kami bebaskan. Anda boleh mengharuskan pengguna untuk login ataupun tidak ketika ingin melihat threads. Namun, dalam berinteraksi mengubah data, seperti membuat thread atau komentar, pengguna wajib terotentikasi.
Item thread pada halaman daftar thread yang ditampilkan harus mengandung informasi berikut ini.
Judul dari thread.
Potongan dari body thread (opsional).
Waktu pembuatan thread.
Jumlah komentar.
Informasi pembuat thread:
Nama
Avatar (opsional)
Halaman detail thread harus mengandung informasi berikut ini.
Judul dari thread.
Body dari thread.
Waktu pembuatan thread.
Informasi pembuat thread:
Nama
Avatar
Komentar pada thread tersebut. Minimal informasi yang harus ditampilkan adalah:
Konten dari komentar.
Waktu pembuatan komentar.
Informasi pembuat komentar:
Nama
Avatar (opsional)


Kriteria Utama 2: Bugs Highlighting
Menggunakan ESLint pada source code aplikasi. Indikasinya adalah terdapat berkas konfigurasi ESLint pada proyek.
Menerapkan salah satu Code Convention berikut.
AirBnB JavaScript Style Guide.
Google JavaScript Style Guide.
StandardJS Style Guide.
Tidak ada indikasi error yang ditampilkan ESLint.
Menggunakan React Strict Mode.


Kriteria Utama 3: Arsitektur Aplikasi
Hampir seluruh state aplikasi (terutama yang bersumber dari API) disimpan pada Redux Store. Form input atau controlled component diperbolehkan untuk mengelola state-nya sendiri.
Tidak ada pemanggilan REST API yang dilakukan di dalam lifecycle atau efek pada komponen.
Memisahkan kode UI dengan State di folder yang terpisah.
React component bersifat modular dan reusable.


Buat Proyekmu Unggul!
Selain kriteria utama yang wajib Anda penuhi, kami beri beberapa saran yang bisa Anda terapkan agar proyek lebih unggul dan mendapat nilai terbaik.

Saran 1: Fitur Votes pada Thread dan Komentar
Menyediakan tombol yang dapat digunakan untuk votes pada thread dan komentar.
Menampilkan indikasi pada tombol bila pengguna sudah mem-vote thread dan komentar. Contohnya, mengubah warna tombol dari abu-abu menjadi merah bila pengguna sudah up-vote/down-vote.
Mengedepankan User Experience dengan menerapkan Optimistically Apply Actions.
Menampilkan jumlah votes pada thread dan komentar.

Saran 2: Menampilkan Leaderboard
Terdapat halaman untuk menampilkan leaderboard.
Setiap item leaderboard, harus menampilkan informasi berikut ini.
Nama pengguna.
Avatar pengguna.
Score.

Saran 3: Filter Daftar Thread Berdasarkan Kategori
Terdapat fitur untuk mem-filter item thread yang ditampilkan pada halaman daftar threads.

#Tujuan Akhir Submission Tahap Akhir
Buat pengujian mulai dari Unit, Integration, dan End-to-End pada Aplikasi Forum Diskusi.
Deploy Aplikasi Forum Diskusi dengan teknik CI/CD.
Memanfaatkan salah satu React Ecosystem pada Aplikasi Forum Diskusi.
Kriteria Utama 1: Automation Testing
Buat minimal dua pengujian fungsi Reducer.
Buat minimal dua pengujian Thunk Function.
Buat minimal dua pengujian React Components.
Buat minimal satu pengujian End-to-End untuk alur login aplikasi.
Wajib menulis skenario pengujian pada masing-masing berkas pengujian.
Pengujian dapat dijalankan dengan perintah npm test dan npm run e2e.
Catatan penting.
Anda bisa tentukan sendiri fungsi reducer, thunk, dan React component yang hendak diuji. Untuk mengasah kemampuan, kami sarankan untuk menguji unit yang kompleks. Contonya, fungsi reducer yang memiliki banyak kondisi atau fungsi thunk yang men-dispatch banyak action.


Kriteria Utama 2: Deployment Aplikasi
Deploy aplikasi dengan menggunakan teknik CI/CD.
Continuous Integration diterapkan dengan GitHub Actions.
Continuous Deployment diterapkan dengan Vercel.
Memproteksi branch master.
Melampirkan URL Vercel aplikasi Anda pada catatan submission.
Melampirkan screenshot sebagai bukti telah menerapkan konfigurasi CI/CD dan branch protection dengan benar. Screenshot yang perlu dilampirkan:
1_ci_check_error: menunjukkan CI check error karena pengujian gagal, contohnya.dos:9ad5ec697da017001967f5a230f0c0f020221111102335.jpeg

2_ci_check_pass: menunjukkan CI check pass karena pengujian lolos, contohnya.
dos:d5d5fc9ae2eb95f6682dbd4266f2ef5d20221111102422.jpeg

3_branch_protection: menunjukkan branch proteksi pada halaman PR, contohnya.
dos:7b70f73cc59019697967ec26f092c8eb20221111102459.jpeg


Catatan penting.

Untuk mengurangi tingkat plagiarisme, kami menyarankan untuk membuat repository GitHub secara private.
Screenshot dilampirkan di dalam berkas ZIP proyek. Berikut contoh struktur folder proyeknya.
dos:41cb311286c38353c5030f2d9dc7fb0120221111102537.jpeg


Kriteria Utama 3: Memanfaatkan Salah Satu Ecosystem React
Memanfaatkan minimal satu React Ecosystem pada daftar berikut.
Berikut penggunaan Ecosystem React yang tidak kami pertimbangkan untuk memenuhi kriteria.
Create React Apps
React Router
React Icons
Redux
Redux Thunk
Redux Toolkit
Jest
React Testing Library


Kriteria Utama 4: Mempertahankan Kriteria Submission Sebelumnya
Aplikasi harus tetap mempertahankan kriteria utama yang ada di submission sebelumnya.

Fungsionalitas Aplikasi
Bugs Highlighting
Arsitektur Aplikasi
