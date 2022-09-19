function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) current[letter] = [0, {}];
      current[letter][0] = 1 + current[letter][0];
      current = current[letter][1];
    }
  }

  return root; // 반환
}

const a = makeTrie(["go", "gone", "guild"]);
console.log(a);

function solution(words) {
  const wordTrie = makeTrie(words);
  let count = 0;
  words.forEach((word) => {
    let current = wordTrie;
    for (const letter of word) {
      if (current[letter][0] !== 1) {
        count += 1;
        current = current[letter][1];
      } else {
        count += 1;
        break;
      }
    }
  });
  return count;
}

console.log(solution(["go", "gone", "guild"]));
