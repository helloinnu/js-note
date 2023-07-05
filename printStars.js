function stars(baris) {
  let max = baris;
  let result = "";
  for (let i = 1; i <= max; i++) {
    let maxStar = i * 2 - 1;
    let maxSpace = max - i;
    for (let j = 1; j <= maxSpace; j++) {
      result += " ";
    }
    for (let k = 1; k <= maxStar; k++) {
      result += "*";
    }
    result += "\n";
  }
  // triangle bawah
  for (let i = 1; i <= max; i++) {
    let maxStar = i * 2 - 1;
    let maxSpace = max - i;
    for (let j = 1; j <= maxSpace; j++) {
      result += " ";
    }
    for (let k = maxStar; k <= 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

stars(5);
