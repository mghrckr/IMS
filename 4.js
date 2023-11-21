function hitungPangkat(angka, pangkat) {
    return Math.pow(angka, pangkat);
  }
  
 
  const bilanganPertama = 2;
  const bilanganKedua = 3;
  const hasilPangkat = hitungPangkat(bilanganPertama, bilanganKedua);
  console.log(`${bilanganPertama}^${bilanganKedua} = ${hasilPangkat}`);
  