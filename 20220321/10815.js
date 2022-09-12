// 2번째 줄 정렬한 배열
//

let input = require('fs').readFileSync('./test.txt').toString().split('\n');
const N = Number(input[0]);

const numArr = input[1].split(' ').map((v => +v)).sort((a, b) => {
  return a - b;
});
const targetArr = input[3].split(' ').map((v => +v));

function sol() {
  targetArr.forEach((target, idx) => {
    let st = 0;
    let end = N - 1;
    while(st <= end) {
      let mid = Math.floor((st + end) / 2);
      if (numArr[mid] < target) {
        st = mid + 1;
      } else if (numArr[mid] > target) {
        end = mid - 1;
      } else {
        targetArr[idx] = 1;
        break;
      }
      targetArr[idx] = 0;
    }
  })
}
sol()
console.log(targetArr.join(' '))
