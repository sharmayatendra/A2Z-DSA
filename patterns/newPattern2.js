function newPattern2(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(newPattern2(3));

// example
// *
// * *
// * * *
