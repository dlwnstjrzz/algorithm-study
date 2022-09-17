// 1. 같은 장르끼리 묶는다
// 2. 묶은 노래를 재생순으로 정렬
// 3. 정렬된 노래를 2개씩 자름

function solution(genres, plays) {
  const genreMap = new Map();
  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, plays: [] };
      genreMap.set(genre, {
        total: data.total + play,
        plays: [...data.plays, { play, index }].sort((a, b) => b.play - a.play).slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].plays)
    .map((song) => song.index);
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

// 키값에 스트링이 들억마ㅕㄴ 마지막 값으로 바뀜
