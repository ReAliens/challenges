//https://www.hackerrank.com/challenges/drawing-book/problem

//this is a hacker reank solution for drawing 

//soution steps
/*
- we created a variable that brings the pages count from the begining of book
- we created another variable that count the pages from the end
- we comparing values of two variables and returning the minimum one 

that's it happy hacking
*/

function pageCount(n, p) {
  const pageStart = Math.floor(p / 2);
  const flippedpages = Math.floor(n / 2 - pageStart);
  const count = Math.min(pageStart, flippedpages);
  return count;
}
