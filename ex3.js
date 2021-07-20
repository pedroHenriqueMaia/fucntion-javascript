function alter(dna) {
    return dna.replaceAll("T", "U");
  }
  
  let result = alter("GGCATTCCCCC");
  console.log(result);
  