function definisiSkalaRichter(SR) {
    if (SR >= 0.0 && SR < 5.0) {
      return "Tidak ada kerusakan, jika ada hanya kerusakan kecil.";
    } else if (SR >= 5.0 && SR < 5.5) {
      return "Beberapa bangunan akan rusak!";
    } else if (SR >= 5.5 && SR < 6.5) {
      return "Tembok retak atau roboh.";
    } else if (SR >= 6.5 && SR < 7.5) {
      return "Bahaya! Banyak bangunan dan gedung roboh.";
    } else if (SR >= 7.5) {
      return "Sangat Bahaya! Banyak bangunan dan gedung hancur.";
    } else {
      return "Masukkan nilai yang valid pada skala Richter.";
    }
  }
  
  
  const nilaiSR = 7.5;
  const definisi = definisiSkalaRichter(nilaiSR);
  console.log(`Definisi skala Richter untuk SR ${nilaiSR}: ${definisi}`);
  