let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); // null

let 반점수 = [10, 20, 30, null, 40, 50];

for (const i of 반점수) {
  console.log(i);
}
