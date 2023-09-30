/**
 * Input Format: N = 3
    Result: 
        1
        2 2 
        3 3 3
 */

/**
 * This function use to display the above pattern as required.
 */
function pattern4(n) {
    let pattern = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i + 1; j++) {
            pattern = pattern + i + ' ';
        }
        pattern += '\n';
    }

    return pattern
}

console.log(pattern4(8))
