/**
 * Input Format: N = 6
Result:
        1 2 3 4 5 6
        1 2 3 4 5
        1 2 3 4
        1 2 3
        1 2 
        1
 */


/**
 * This function defines the logic of above pattern
 */
function pattern6(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= n-i+1; j++) {
            str = str + j + ' '
        }
        str += '\n'
    }
    return str
}

console.log(pattern6(6));