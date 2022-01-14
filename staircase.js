// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true (Link to the hacker rank challenge)

function staircase(n) {
    // Write your code here  
for(let i=1; i<=n;i++){
    console.log(" ".repeat(n-i) + "#".repeat(i));
}
};
