//https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    let slice = s.slice(i, i + m);
    sum = slice.reduce((acc, curr) => acc + curr);
    if (sum === d && slice.length === m) {
      count += 1;
    }
  }
  return count;
}

birthday([1, 2, 1, 3, 2], 3, 2);
birthday([1, 1, 1, 1, 1, 1], 3, 2);
birthday([4], 4, 1);
