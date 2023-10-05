/**
 * Input Format: N = 6
Result:
           *     
          ***    
         *****   
        *******  
       ********* 
      ***********
 */

/**
 * This function prints the above pattern
 */
function pattern7(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        // spaces
        for (let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }

        // stars
        for (let j = 0; j < 2*i+1; j++) {
            str += '*';
        }

        // spaces
        for (let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }
        str += '\n';
    }
    return str;
}

console.log(pattern7(3));