/*An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.*/


//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

function climbingLeaderboard(ranked, player) {
  let result = [];
  let uniqueScores = [...new Set(ranked)];
  for (const score of player) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  console.log(result);
  return result;
}
function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);
    // base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
    // recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}


climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);    //4 3 1
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);     //6 4 2 1
climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90,102]);    //6 5 4 2 1
