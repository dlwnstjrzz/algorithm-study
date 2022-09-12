let n = 5;
let lost = [1, 2, 4];
let reserve = [2, 3, 4, 5];

//lost 를 돌면서 a-1 a a+1이 reserve에 있는지 검사하고 없으면 n에서 1씩 뺌
function sol() {
  let answer = n;
  lost.forEach((number) => {
    if (reserve.some((numb) => numb === number)) {
      reserve[reserve.indexOf(number)] = 100;
    }
  });

  lost
    .sort((a, b) => a - b)
    .forEach((number, idx) => {
      let reserves = reserve
        .sort((a, b) => a - b)
        .filter((spareNum) => Math.abs(spareNum - number) <= 1);
      if (!reserves.length) {
        answer -= 1;
      } else {
        reserve[reserve.indexOf(reserves[0])] = 100;
      }
    });

  return answer;
}

console.log(sol());
