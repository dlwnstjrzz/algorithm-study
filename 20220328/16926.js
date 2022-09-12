let input = require("fs").readFileSync("./test.txt").toString().split("\n"); //'/dev/stdin'
const [N, M, R] = input[0].trim().split(" ").map(Number);

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

function sol() {
  let mapArr = Array.from({ length: N }, () => Array(M).fill(0));
  let stIdx = M;
  let [xStIdx, yStIdx, xEndIdx, yEndIdx] = [0, 0, N - 1, M - 1];
  while (stIdx >= 2) {
    arr.forEach((el, xIdx) => {
      el.forEach((el, yIdx) => {
        if (xStIdx == xIdx && yEndIdx >= yIdx && yIdx > yStIdx) {
          mapArr[xIdx][yIdx - 1] = arr[xIdx][yIdx];
        } else if (yIdx == yStIdx && xIdx >= xStIdx && xIdx < xEndIdx) {
          mapArr[xIdx + 1][yIdx] = arr[xIdx][yIdx];
        } else if (xIdx == xEndIdx && yIdx >= xStIdx && yIdx < yEndIdx) {
          mapArr[xIdx][yIdx + 1] = arr[xIdx][yIdx];
        } else if (yIdx == yEndIdx && xIdx <= xEndIdx && xIdx > xStIdx) {
          mapArr[xIdx - 1][yIdx] = arr[xIdx][yIdx];
        }
      });
    });
    stIdx = stIdx - 2;
    xStIdx = xStIdx + 1;
    yStIdx = yStIdx + 1;
    xEndIdx = xEndIdx - 1;
    yEndIdx = yEndIdx - 1;
  }
  arr = mapArr;
}

function solve() {
  for (let i = 0; i < R; i++) {
    sol();
  }
}

solve();
let ans = "";
arr.forEach((el) => {
  ans += el.join(" ") + "\n";
});
console.log(ans);
