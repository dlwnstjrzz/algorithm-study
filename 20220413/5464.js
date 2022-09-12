let input = require("fs").readFileSync("./test.txt").toString().split("\n");

const [n, m] = input[0].split(" ");

const parkingLot = [];
for (let i = 1; i <= n; i++) {
  parkingLot.push(input[i]);
}
parkingLot.sort((a, b) => a - b);

const carWeight = [];
for (let k = n + 1; k <= n + m; k++) {
  carWeight.push(input[k]);
}
const consequence = [];
for (let i = n + m + 1; i <= input.length; i++) {
  consequence.push(input[i]);
}

function sol() {
  let count = 0;
  consequence.forEach((el, idx) => {
    let waiting = [];
    let currParking = Array.from({ length: n }, (v, i) => 0);
    if (el > 0) {
      waiting.push(el);
    }
    for (let i = 0; i < currParking.length; i++) {
      if (currParking[i] === 0) {
        currParking[i] = waiting.shift();
      }
    }
    if (el < 0) {
      waiting.forEach((el, idx) => {
        if (Math.abs(el) - 1 === idx) {
          count += carWeight[Math.abs(el) - 1] * parkingLot[idx];
        }
      });
    }
  });
  return count;
}
