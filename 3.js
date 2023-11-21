function cetakPola() {
    const height = 5; 
  
    for (let i = 1; i <= height; i++) {
      let line = "";
      let spaces = Math.abs(3 - i); 
  
      for (let j = 1; j <= spaces; j++) {
        line += " ";
      }
  
      if (i === 1 || i === 5) {
        line = "  @";
      } else if (i === 3) {
        line = "@@@@@";
      } else {
        let hashes = i <= 3 ? i * 2 - 1 : (6 - i) * 2 - 1; 
        for (let k = 1; k <= hashes; k++) {
          line += "#";
        }
      }
  
      console.log(line);
    }
  }
  

  cetakPola();
  