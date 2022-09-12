let input = require("fs").readFileSync("./test.txt").toString().split("\n"); //'/dev/stdin'

const [N, M] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);

const mapArr = [];
for (let i = 2; i < input.length; i++) {
  mapArr.push(input[i].split(" ").map(Number));
}

function sol() {
  let [curX, curY] = [r, c];
  let cleanedRoom = 0;
  let curDirection = d;
  let count = 0;

  if (!mapArr[curX][curY]) {
    //첫 좌표
    cleanedRoom++;
    mapArr[curX][curY] = 2;

    while (true) {
      let tempPos = [curX, curY];
      moveLeft();
      if (tempPos[0] == curX && tempPos[1] == curY) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        moveBack();
        count = 0;
        if (mapArr[curX][curY] == 1) {
          return cleanedRoom;
        }
      }
    }
  } else {
    return 0;
  }

  function moveLeft() {
    if (curDirection == 0) {
      if (!mapArr[curX][curY - 1]) {
        curY--;
        mapArr[curX][curY] = 2;
        cleanedRoom++;
      }
      curDirection = 3;
    } else if (curDirection == 1) {
      if (!mapArr[curX - 1][curY]) {
        curX--;
        mapArr[curX][curY] = 2;
        cleanedRoom++;
      }
      curDirection = 0;
    } else if (curDirection == 2) {
      if (!mapArr[curX][curY + 1]) {
        curY++;
        mapArr[curX][curY] = 2;
        cleanedRoom++;
      }
      curDirection = 1;
    } else if (curDirection == 3) {
      if (!mapArr[curX + 1][curY]) {
        curX++;
        mapArr[curX][curY] = 2;
        cleanedRoom++;
      }
      curDirection = 2;
    }
  }
  function moveBack() {
    if (curDirection == 0) {
      curX++;
    } else if (curDirection == 1) {
      curY--;
    } else if (curDirection == 2) {
      curX--;
    } else if (curDirection == 3) {
      curY++;
    }
  }
}

console.log(sol());
