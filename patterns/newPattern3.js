function newPattern3(n) {
  let numberPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      numberPattern += j + 1 + " ";
    }
    numberPattern += "\n";
  }
  return numberPattern;
}

console.log(newPattern3(2));
