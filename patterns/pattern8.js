/**
 * Input Format: N = 3
Result: 
        *****  
         ***
          * 
 */

function pattern8(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        // space
        for (let j = 0; j <= i; j++) {
            str += ' '
        }

        // stars
        for (let j = 0; j < 2*n-2*i-1; j++) {
            str += '*'
        }

        // space
        for (let j = 0; j <= i; j++) {
            str += ' '
        }
        str += '\n';
    }
    return str;
}

console.log(pattern8(3));