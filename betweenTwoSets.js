/*There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.*/

//https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    let count = 0;
    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int === 0))) {
            if (b.every(item => (item % x === 0))) {
                count++;
            }
        }
    }
    return count;
}
