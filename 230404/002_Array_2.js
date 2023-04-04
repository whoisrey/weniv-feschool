// 짝수만 출력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

// 홀수만 출력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 !== 0;
});

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

// 모음 제거
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

// reduce
const arr1 = [1, 2, 3, 4, 5];
arr.reduce((a, c) => a + c, 0);

// const arr1 = [1, 2, 3, 4, 5]
// arr.reduce((a, c) => a + c)
// 0을 항상 넣어주세요!

// min, max도 있는데 sum이 없다?
Math.sum(arr1);

// includes
const arr1 = ["hello", "world", "leche"];
arr1.includes("world");

const arr1 = ["hello", "world", "leche"];
arr1.includes("leeleche"); // false

const arr1 = ["hello", "world", "leche"];
arr1.includes("che");

// join
const arr1 = ["hello", "world", "leche"];
arr1.join("!");

const arr2 = ["010", "5044", "2903"];
arr2.joun("-");

const arr1 = [010, 5044, 2903];
arr1.join("-"); // 8-5044-2903
// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.
