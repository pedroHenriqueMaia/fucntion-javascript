function jumps(...values) {
    var quantity = values.length;
    var sum = 0;
    for (let i of values) {
      sum = sum + i;
    }
    return sum / quantity;
  }
  
  let result = jumps(1, 2, 3, 4, 6);
  console.log(result);