let progress = [93, 30, 55];
let speed = [1, 30, 5];

function sol() {
  let answer = [];
  let count = 0;
  let prevBigProgress = (100 - progress[0]) / speed[0];
  let prevRestDay = 0;
  progress.forEach((el, idx) => {
    let restProgress = 100 - el;
    let restDay = restProgress / speed[idx];

    let bigProgress = prevBigProgress >= restDay ? prevBigProgress : restDay;

    if (bigProgress !== prevBigProgress) {
      answer.push(count);
      count = 0;
    }
    count++;
    if (idx === progress.length - 1 && count !== 0) {
      answer.push(count);
    }
    prevBigProgress = bigProgress;
  });
  return answer;
}

console.log(sol());
