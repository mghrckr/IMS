function faktorial(n) {
    if (n < 0) {
      return "Masukkan bilangan positif!";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let hasil = 1;
      for (let i = n; i >= 1; i--) {
        hasil *= i;
      }
      return hasil;
    }
  }
  
  const angka = 5; 
  const hasilFaktorial = faktorial(angka);
  console.log(`${angka}! = ${hasilFaktorial}`);
  