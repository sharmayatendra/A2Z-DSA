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

// pattern-4
// 1
// 2 2
// 3 3 3
// 4 4 4 4
function newPattern4(n) {
  let numberPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      numberPattern += i + 1 + " ";
    }
    numberPattern += "\n";
  }
  return numberPattern;
}

console.log(newPattern4(3));
