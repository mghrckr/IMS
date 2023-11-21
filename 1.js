function hitungPembayaran(totalPemakaian) {
    let tarif = 0;
    
    if (totalPemakaian <= 10) {
      tarif = totalPemakaian * 1000;
    } else if (totalPemakaian <= 20) {
      tarif = 10 * 1000 + (totalPemakaian - 10) * 1500;
    } else if (totalPemakaian <= 35) {
      tarif = 10 * 1000 + 10 * 1500 + (totalPemakaian - 20) * 2000;
    } else {
      tarif = 10 * 1000 + 10 * 1500 + 15 * 2000 + (totalPemakaian - 35) * 3000;
    }
  
    return tarif;
  }
  
 
  let totalPembayaran = hitungPembayaran(45);
  console.log("Total yang perlu dibayar adalah: Rp." + totalPembayaran + ",-");
  