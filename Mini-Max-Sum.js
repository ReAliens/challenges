//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

function miniMaxSum(arr) {
  // Write your code here
  const arraySum = arr.reduce((curr, acc) => curr + acc);
  const minSum = arraySum - Math.max(...arr);
  const maxSum = arraySum - Math.min(...arr);
  console.log(minSum + ' ' + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);
