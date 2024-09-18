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

//  *
//  * *
//  * * *
//  * *
//  *
function newPattern10(n) {
  let str = "";
  for (i = 0; i < 2 * n - 1; i++) {
    if (i >= n) {
      for (j = i; j < 2 * n - 1; j++) {
        str += "*";
      }
    } else {
      for (j = 0; j < i + 1; j++) {
        str += "*";
      }
    }

    str += "\n";
  }
  return str;
}

console.log(newPattern10(3));

//   1
//   0 1
//   1 0 1
// logic: i=1,
function newPattern11(n) {
  let start;
  let row = "";

  // Outer loop for the no. of rows
  for (let i = 0; i < n; i++) {
    // if the row index is even, print 1 first
    if (i % 2 === 0) start = 1;
    // if odd, print 0 first
    else start = 0;

    // We alternatively print 1's and 0's in each row
    for (let j = 0; j <= i; j++) {
      row += start;
      start = 1 - start; // Toggle between 1 and 0
    }
    row += "\n";
  }
  return row;
}

console.log(newPattern11(3));

//   1         1
//   1 2     2 1
//   1 2 3 3 2 1
// logic: i=1,
function newPattern12(n) {
  let numberPattern = "";
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    // number
    for (let j = 1; j <= i; j++) {
      numberPattern += j;
    }

    // space
    for (let j = 1; j <= space; j++) {
      numberPattern += " ";
    }

    // number
    for (let j = i; j >= 1; j--) {
      numberPattern += j;
    }

    numberPattern += "\n";
    space -= 2;
  }
  return numberPattern;
}

console.log(newPattern12(3));
