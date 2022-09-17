function solution(no, works) {
  let count = no;
  let counts = 0;
  let index = 1;
  works.sort((a, b) => b - a);
  while (count > 0) {
    if (works[0] === 0) return 0;
    if (works[0] >= works[1]) {
      works[0] = works[0] - 1;
      count -= 1;
      console.log(111, works, count);
    } else {
      while (counts === 0 && index < works.length) {
        if (works[index] <= works[0]) {
          console.log(222, works, count);
          works.splice(index, 0, works[0]);
          works.shift();
          counts += 1;
        }
        index += 1;
      }

      if (counts === 0) {
        works.push(works[0]);
        works.shift();
      } else {
        count -= 1;
      }
    }
  }

  return works.reduce((acc, work, index) => {
    return acc + work ** 2;
  }, 0);
}

console.log(solution(2, [1]));
