let input = require("fs").readFileSync("./test.txt").toString().trim().split("\n"); //'/dev/stdin'
const [N, M] = input[0].split(" ").map(Number);

const test = input.slice(N + 1);

const poList = input.slice(1, N + 1);

function sol() {
  let answer = "";
  const poMap = new Map();
  poList.forEach((el, idx) => {
    poMap.set(el, idx + 1);
  });

  test.forEach((el, idx) => {
    if (poMap.has(`${el}\r`)) {
      answer += `${poMap.get(`${el}\r`)}\n`;
      return;
    }
    if (poMap.has(el)) {
      answer += `${poMap.get(el)}\n`;
    } else {
      answer += `${poList[Number(el) - 1]}\n`;
    }
  });
  return answer;
}

console.log(sol());

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = a.slice(6, 11333333);
console.log(b);
