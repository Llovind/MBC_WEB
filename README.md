# 🌐 MBC Laboratory Web

Situs resmi MBC Laboratory — pusat pengembangan teknologi di bidang **Cybersecurity**, **Big Data**, **Game Technology**, dan **GIS**. Website ini dibangun dengan teknologi web modern dan terintegrasi dengan backend Node.js + Express untuk pengiriman form kontak melalui EmailJS.

---

## 🚀 Fitur Utama

- Tampilan responsif & modern (HTML, CSS, JS + AOS animation)
- Navigasi navbar yang stylish dan adaptif
- Hero section dengan highlight divisi utama
- Penjabaran visi dan misi laboratorium
- Detail divisi & layanan (Cybersecurity, Big Data, Game Tech, GIS)
- Kontak lengkap beserta form pengiriman pesan
- Daftar tim developer
- Tombol “scroll to top”
- Backend pengiriman email (Node.js + Express + EmailJS)

---

## 🏗️ Struktur Folder

```
.
├── public/
│   ├── index.html
│   ├── css/
|   |    |_style.css
│   |── js/
|   |    |_script.js 
|   |__ assets
|   |    |_(foto yang dibutuhkan)  
|
├── server.js
├── .env
├── package-lock.json
├── package.json
└── README.md
```

---

## 🔧 Instalasi Lokal

1. **Clone repo:**

```bash
git clone https://github.com/namamu/mbc-laboratory-website.git
cd mbc-laboratory-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Buat file `.env` dan isi dengan:**

```env
EMAIL_USER=*youremail
EMAIL_PASS=*yourapppassword
```

4. **Jalankan server:**

```bash
node server.js
```

5. Akses website di `http://localhost:3000`

---

## 📨 Pengiriman Form Kontak

- Form kontak menggunakan `POST` dan dikirim ke endpoint `/send-email`.
- EmailJS digunakan di sisi backend (server.js) dengan environment variable.
- Pastikan kredensial EmailJS valid dan `.env` sudah diisi dengan benar.

---

## 🌍 Deployment

Project ini bisa dideploy dengan:

- **Vercel** (frontend)
- **Render / Railway / Cyclic** (backend Node.js)

⚠️ Untuk deployment di Vercel:
- Tambahkan variabel environment langsung di dashboard (Settings > Environment Variables)
- Jangan upload file `.env` ke GitHub demi keamanan.

---

---

## 🧑‍💻 Developer

| Nama | Role | LinkedIn |
|------|------|----------|
| Lovind Luthfan Hakeem Firdaus | Frontend & Backend Developer | [LinkedIn](https://www.linkedin.com/in/lovind-luthfan-hakeem-firdaus) |

---

## 📄 Lisensi

MIT License © 2025 MBC Laboratory

---

## 📬 Kontak

📍 Telkom University, Bandung  
📧 info@mbclaboratory.com  
🌐 https://mbclaboratory.vercel.app (contoh)
