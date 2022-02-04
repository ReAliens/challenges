//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
   const length = arr.length;
    let diagonal1 = 0, diagonal2 = 0;
        for(let i = 0; i < length; i++){
        diagonal1 += arr[i][i];
        diagonal2 += arr[length -1 - i][i]
    }
     return Math.abs(diagonal1 - diagonal2);  
}
