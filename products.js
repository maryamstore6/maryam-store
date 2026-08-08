// ============================================================
//  ✏️  SENARAI PRODUK — MARYAM STORE
//  ============================================================
//  DI SINI SAHAJA tempat nak edit produk!
//
//  Cara edit:
//  - TUKAR NAMA: ubah teks dalam tanda petik "..." sahaja
//  - TUKAR HARGA: ubah nombor (cth 3.00 -> 3.50)
//  - TUKAR GAMBAR: tukar nama fail dalam "images/covers/..." /
//    "images/..." (fail gambar mesti wujud dalam folder images)
//  - TAMBAH PRODUK: salin satu blok { ... }, tampal di bawah,
//    ubah ikut kehendak (jangan lupa koma di hujung blok)
//  - BUANG PRODUK: padam satu blok { ... } penuh
//
//  ⚠️ PENTING: jangan buang tanda petik "..." dan koma ( , )
//  ⚠️ Harga guna titik ( . ) bukan koma — contoh 3.00 bukan 3,00
//  ============================================================

const produk = [
  // ------------------------------------------------------------------
  //  Kategori "bawah2" = Bawah RM2  |  "bawah4" = Bawah RM4
  // ------------------------------------------------------------------

  { nama:"Botol Penutup Tekan",          cat:"bawah4", harga:3.00, tier:"RM3.40 / RM3.20 / RM3.00", cover:"images/covers/snap-lid.jpg",         asal:"images/9ef9R5bb4mh9RKIRhGYLqGVi1vdsBJvMWNuaQwIC.jpg" },
  { nama:"Tumbler Gaya Premium",         cat:"bawah4", harga:3.20, tier:"RM3.50 / RM3.30 / RM3.20", cover:"images/covers/elegant-tumbler.jpg",  asal:"images/qcY0xfyG8CkCuXHxe9HHEcFuxUoYGlHxa9cEIDbO.jpg" },
  { nama:"Shaker Minuman Sukan",         cat:"bawah4", harga:3.10, tier:"RM3.50 / RM3.30 / RM3.10", cover:"images/covers/sport-shaker.jpg",     asal:"images/lYPtSu926Sp4kYv7kRZg24fXxHsm5YTpuMjn3koO.jpg" },
  { nama:"Cawan Plastik Kukuh",          cat:"bawah2", harga:1.60, tier:"RM1.80 / RM1.70 / RM1.60", cover:"images/covers/solid-cup.jpg",        asal:"images/gsM2OMtBUZppvtFbSkKNGuwJRYKHPydNi9wEZ2FE.jpg" },
  { nama:"Cawan Mini Corak Bintang",     cat:"bawah2", harga:1.60, tier:"RM1.80 / RM1.70 / RM1.60", cover:"images/covers/star-mini.jpg",        asal:"images/oTFhLG2zaozg6O5p8zKGulb5Dip8D3TNjQ2zMNRf.jpg" },
  { nama:"Cawan Plastik Warna-Warni",    cat:"bawah2", harga:0.90, tier:"RM1.40 / RM1.10 / RM0.90", cover:"images/covers/colorful-cup.jpg",     asal:"images/fl50YsNtrRp32fQkDJm6gs19uOis3UkcHqxMUaT9.jpg" },
  { nama:"Botol Mini Berkilat",          cat:"bawah2", harga:1.60, tier:"RM1.80 / RM1.70 / RM1.60", cover:"images/covers/glossy-mini.jpg",      asal:"images/lNwXeM12frOokCTgL2pLWxRlLLcwD0Pp34lUs94c.jpg" },
  { nama:"Botol Plastik Bening",         cat:"bawah2", harga:1.60, tier:"RM1.80 / RM1.70 / RM1.60", cover:"images/covers/transparent.jpg",      asal:"images/peXeKK9s65BMNMCexKSuwkfdAd46JdgKEwlfa9gf.jpg" },
  { nama:"Botol Minum Bertutup Klip",    cat:"bawah2", harga:1.30, tier:"RM1.50 / RM1.40 / RM1.30", cover:"images/covers/clip-lids.jpg",        asal:"images/mDY8V2NR9ZXZSP37CH0ffkuBgsR9qZoyAZ2bZf0X.jpg" },
  { nama:"Botol Minum Dua Ruang",        cat:"bawah4", harga:2.69, tier:"RM2.89 / RM2.79 / RM2.69", cover:"images/covers/double-cup.jpg",       asal:"images/PBjB4I6Lb0k1Kd0bzv3VLAd5jhOcJCrlPYciuiMO.jpg" },
  { nama:"Botol Dua Ruang Bergagang",    cat:"bawah4", harga:2.90, tier:"RM3.10 / RM3.00 / RM2.90", cover:"images/covers/double-cup-handle.jpg", asal:"images/CLRu2ISxwrqTwAREJ5SWPsmNKmSVZf5vWpboQtbs.jpg" }
];

// JANGAN ubah bahagian bawah ini
const catLabel = { bawah2:"Bawah RM2", bawah4:"Bawah RM4" };
