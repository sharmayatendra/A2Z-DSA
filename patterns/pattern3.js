/**
 * Input Format: N = 3

    Result: 
            1
            1 2 
            1 2 3
*/

/**
 * This function will return a pattern matches with above example
 */
function pattern3(n) {

    let pattern = 0;
    for(let i = 1; i < n; i++) {
        for (let j = 1; j < i + 1; j++) {
            pattern = pattern +  j + ' '
        }
        pattern += '\n'
    }
    return pattern
}

console.log(pattern3(5))