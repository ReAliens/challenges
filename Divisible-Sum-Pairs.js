//Given an array of integers and a positive integer k , determine the number of (i,j) pairs where (i<j) and  ar[i] +ar[j]  is divisible by k 
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
.

function divisibleSumPairs(n, k, ar) {
  var count = 0;

  for (let i = 0; i < n; i++) {
    ar.slice(i + 1, n).filter((item) => {
      if ((item + ar[i]) % k === 0) {
        count++;
      }
    });
  }
  console.log(count);
  return count;
}
