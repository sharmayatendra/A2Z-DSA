/**
 * Input Format: N = 3
Result: 
        *  
       ***
      ***** 
      *****  
       ***
        * 
 */

function patternNum7(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    // space:
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    // stars:
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    // space:
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

function patternNum8(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //space
    for (let j = 0; j <= i - 1; j++) {
      str += " ";
    }
    // star
    for (let j = 0; j < 2 * n - 1 - 2 * i; j++) {
      str += "*";
    }
    //space
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

function pattern9(n) {
  const x = patternNum7(n);
  const y = patternNum8(n);
  const z = x + y;
  return z;
}

console.log(pattern9(5));
