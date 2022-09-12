const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
  "23:05 5961 IN",
];

function calculateTime(inTime, outTime) {
  return (
    Number(outTime.slice(0, 2)) * 60 +
    Number(outTime.slice(3, 5)) -
    (Number(inTime.slice(0, 2)) * 60 + Number(inTime.slice(3, 5)))
  );
}

function solution(fees, records) {
  const defaultTime = Number(fees[0]);
  const defaultFee = fees[1];
  const unitTime = fees[2];
  const unitFee = fees[3];
  const checkInOut = {};
  const carNumbers = [];
  const answer = [];

  records.forEach((el, idx) => {
    const record = el.split(" ");
    const time = record[0];
    const carNumber = record[1];
    const inOut = record[2];
    carNumbers.push(carNumber);

    if (checkInOut[carNumber] === undefined) {
      checkInOut[carNumber] = [time, 1, 0];
    } else if (checkInOut[carNumber][1] === 1) {
      checkInOut[carNumber][2] =
        checkInOut[carNumber][2] + calculateTime(checkInOut[carNumber][0], time);
      checkInOut[carNumber][1] = 0;
    } else if (checkInOut[carNumber][1] === 0) {
      checkInOut[carNumber][0] = time;
      checkInOut[carNumber][1] = 1;
    }
  });

  carNumbersUnique = [...new Set(carNumbers.sort((a, b) => a - b))];
  console.log(checkInOut);
  carNumbersUnique.forEach((el, idx) => {
    if (checkInOut[el][1] === 0) {
      if (checkInOut[el][2] <= defaultTime) {
        answer.push(defaultFee);
      } else {
        answer.push(defaultFee + Math.ceil((checkInOut[el][2] - defaultTime) / unitTime) * unitFee);
      }
    } else if (checkInOut[el][1] === 1) {
      answer.push(
        Math.ceil(
          (calculateTime(checkInOut[el][0], "23:59") + checkInOut[el][2] - defaultTime) / unitTime
        ) *
          unitFee +
          defaultFee
      );
    }
  });
  return answer;
}

console.log(solution(fees, records));
