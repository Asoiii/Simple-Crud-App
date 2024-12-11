/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Agar container selalu di tengah
        padding: "16px", // Memberikan padding global pada container
      },
      colors: {
        primary: "#0ea5e9", // Warna utama, misalnya untuk link atau tombol
        dark: "#020617", // Warna gelap, misalnya untuk background
        secondary: "#64748b", // Warna sekunder, misalnya untuk teks tambahan
        hover: "#0369a1", // Tambahkan warna untuk efek hover
      },
      screens: {
        "2xl": "1320px", // Breakpoint untuk layar besar
        sm: "640px", // Pastikan breakpoint untuk perangkat kecil sudah terdefinisi
      },
      spacing: {
        18: "4.5rem", // Jika membutuhkan jarak tambahan
      },
    },
  },
  plugins: [],
};
