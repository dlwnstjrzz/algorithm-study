const fs = require("fs");
const path = require("path");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";

let input = require("fs").readFileSync(filePath).toString().split("-"); //'/dev/stdin'

let sumArr = [];

input.forEach((el, idx) => {
  if (!Number(el)) {
    sumArr.push(
      el.split("+").reduce((acc, el2, idx) => {
        return acc + Number(el2);
      }, 0)
    );
  } else {
    sumArr.push(el);
  }
});

console.log(
  sumArr.reduce((acc, el, idx) => {
    return acc - Number(el);
  }, sumArr[0] * 2)
);
