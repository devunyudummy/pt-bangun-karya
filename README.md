# PT. Bangun Karya — Website Perusahaan Konstruksi

Mockup website perusahaan konstruksi PT. Bangun Karya, dibangun dengan **React + Vite + Tailwind CSS**.

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js **v18+** (cek dengan `node -v`)
- npm **v9+** (cek dengan `npm -v`)

### Langkah-langkah

```bash
# 1. Masuk ke folder project
cd pt-bangun-karya

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser dan akses **http://localhost:5173**

---

## 📦 Build untuk Production

```bash
npm run build    # output ke folder dist/
npm run preview  # preview hasil build secara lokal
```

---

## 📁 Struktur Project

```
pt-bangun-karya/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               ← Entry point
    ├── App.jsx                ← Root component
    ├── index.css              ← Tailwind + custom CSS
    ├── translations/
    │   └── index.js           ← Teks bilingual (ID + EN)
    ├── context/
    │   └── LanguageContext.jsx ← State bahasa global
    ├── hooks/
    │   ├── useScrollAnimation.js ← IntersectionObserver hook
    │   └── useCounter.js         ← Animated number counter
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── About.jsx
        ├── VisionMission.jsx
        ├── Services.jsx
        ├── Portfolio.jsx
        ├── Partners.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🎨 Mengganti Placeholder

Semua bagian yang membutuhkan gambar asli ditandai dengan placeholder.
Untuk menggantinya:

1. **Hero** — ubah komponen `<ImgPlaceholder />` di `Hero.jsx` menjadi `<img src="..." />`
2. **About** — ganti placeholder di `About.jsx` (section kiri)
3. **Portfolio** — tiap kartu portofolio punya placeholder `bg-gradient-to-br`; ganti dengan `<img src="..." />`
4. **Partners** — ganti placeholder teks logo dengan `<img src="/logos/nama.svg" />`

---

## 🌐 Fitur

| Fitur | Keterangan |
|---|---|
| Bilingual ID/EN | Toggle `ID \| EN` di navbar, konten berubah seketika |
| Scroll Animations | Setiap section muncul dengan animasi saat di-scroll |
| Counter Animation | Angka statistik terhitung secara animasi |
| Partner Marquee | Logo mitra bergerak otomatis, berhenti saat di-hover |
| Portfolio Filter | Filter proyek berdasarkan kategori |
| Testimonial Slider | Auto-advance, manual kontrol |
| Responsive | Mobile, tablet, desktop |
| Reduced Motion | Animasi dimatikan bila user minta (`prefers-reduced-motion`) |

---

## ✏️ Mengedit Konten

Semua teks tersimpan di **`src/translations/index.js`**.
Edit objek `id` untuk bahasa Indonesia, objek `en` untuk bahasa Inggris.

```js
// src/translations/index.js
export const translations = {
  id: {
    hero: {
      line1: 'MEMBANGUN',   // ← edit di sini
      ...
    }
  },
  en: {
    hero: {
      line1: 'BUILDING',   // ← dan di sini
      ...
    }
  }
}
```

---

*Dibuat dengan React + Vite + Tailwind CSS*
"# pt-bangun-karya" 
