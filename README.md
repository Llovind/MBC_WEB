# 🌐 MBC Laboratory Web

Situs Ini Dibangun Sebagai Tugas Technical Test Rekruitasi MBC Laboratory Divisi Cyber Security
---

## 🚀 Fitur Utama

- Tampilan responsif (HTML, CSS, JS + AOS animation)
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
|        |_(foto yang dibutuhkan)  
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
git clone https://github.com/Llovind/mbc-laboratory-website.git
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

---

## 🌍 Deployment

Project ini dideploy menggunakan:

- **Vercel** (frontend)
- **Railway** (backend Node.js)



---

## 🧑‍💻 Developer

| Nama | Role | LinkedIn |
|------|------|----------|
| Lovind Luthfan Hakeem Firdaus | Frontend & Backend Developer | [LinkedIn](https://www.linkedin.com/in/lovind-luthfan-hakeem-firdaus) |

---



## 📬 Kontak

📍 Telkom University, Bandung  
📧 info@mbclaboratory.com  
🌐 https://mbc-web-lovind.vercel.app/
