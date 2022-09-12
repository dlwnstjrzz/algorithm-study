let input = require("fs").readFileSync("./test.txt").toString().split("\n"); //'/dev/stdin'

const [M, N] = input[0].split(" ").map(Number);

const snack = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function check(mid) {
  let cnt = 0;
  snack.forEach((el, idx) => {
    cnt += Math.floor(el / mid);
  });
  if (cnt >= M) {
    return true;
  }
  return false;
}

function binarySearch() {
  let st = 1;
  let end = 1000000000;
  let answer = 0;
  while (st <= end) {
    let mid = Math.floor((st + end) / 2);

    if (check(mid)) {
      st = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(binarySearch());
