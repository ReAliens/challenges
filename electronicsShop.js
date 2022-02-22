/*A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget,
find the cost to buy them. If it is not possible to buy both items, return -1 .*/

//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, b) {
  let maxCost = -1;
  for (let i = 0; i <= keyboards.length; i++) {
    let temp = 0;
    for (let j = 0; j <= drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        temp = keyboards[i] + drives[j];
        maxCost = temp > maxCost ? temp : maxCost;
      }
    }
  }
  console.log(maxCost);
  return maxCost;
}

getMoneySpent([3, 1], [5, 2, 8], 10); //=>9
getMoneySpent(4, 5, 5); //=>-1
