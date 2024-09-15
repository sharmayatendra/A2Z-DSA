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

// * * *
// * *
// *
function newPattern5(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(newPattern5(3));

// 123
// 12
// 1
function newPattern6(n) {
  let numberPattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      numberPattern += j + 1 + " ";
    }
    numberPattern += "\n";
  }
  return numberPattern;
}

console.log(newPattern6(3));

//    *
//  * * *
// * * * * *
// logic building: i = 0 ==> space: 2, star: 1, space: 2 || i = 1 => space:1, star: 3, space:1 and so onn.
function newPattern7(n) {
  let str = " ";
  for (let i = 0; i < n; i++) {
    // space:
    for (let j = 0; j < n - (i + 1); j++) {
      str += " ";
    }

    // star
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    // space:
    for (let j = 0; j < n - (i + 1); j++) {
      str += " ";
    }

    str += "\n";
  }
  return str;
}

console.log(newPattern7(5));

//  * * *
//   * *
//    *
// logic: i = 0 ==> space:0, star: 3, space:0 || i=1 => space: 1, star: 2, space:1, & so onn.
function newPattern8(n) {
  let str = " ";
  for (let i = 0; i < n; i++) {
    // space
    for (let j = 0; j <= i; j++) {
      str += " ";
    }

    // stars
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      str += "*";
    }

    // space
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(newPattern8(4));

// for n = 3
//     *
//   * * *
// * * * * *
// * * * * *
//   * * *
//     *
// logic i=0, space: 2
function newPattern9(n) {
  const x = newPattern7(n);
  const y = newPattern8(n);
  const z = x + y;
  return z;
}

console.log(newPattern9(4));
