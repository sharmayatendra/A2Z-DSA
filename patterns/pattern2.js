// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

/**
 * This function will take a param `n` and returns the above pattern
 */
function pattern2(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str += '* '
        }
        str += '\n'
    }

    return str;
}

console.log(pattern2(3));