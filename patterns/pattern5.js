/**
 * Input Format: N = 3
    Result: 
            * * *
            * * 
            *
 */

/**
 * This function will print the above pattern
 */
function pattern5(n) {
    let str = '';
    for (let i = n; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            str += '* '
        }
        str += '\n'
    }

    return str
}

console.log(pattern5(8))