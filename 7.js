function tukarNilai(a, b) {
    console.log("Sebelum pertukaran:");
    console.log("A =", a);
    console.log("B =", b);
  
    let temp = a;
    a = b;
    b = temp;
  
    console.log("Setelah pertukaran:");
    console.log("A =", a);
    console.log("B =", b);
  }
  
  
  let A = 5;
  let B = 6;
  tukarNilai(A, B);
  