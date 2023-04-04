const dog = {
  name: "leche",
  age: 4,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
  0: "01074847047",
};

console.log(dog.name);
console.log(dog.age);
console.log(dog["name"]);
console.log(dog["age"]);
// dog.0 //error;
dog["0"];
dog[0]; // '01074847047'

const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

arr[0]; // 10
arr[1]; // 20
arr[2]; // 30
arr.length; // 3
//배열이 아닙니다. 유사배열객체라고 합니다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다.

const dog = {
  name: "leche",
  age: 4,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
};

dog.name = "leche";
dog.name;
dog.askingHim();
delete human.job; // 객체의 속성 삭제

// 다른 언어와 동작방식이 달라 주의해주세요.
console.log("age" in dog);
// console.log(20 in [10, 20, 30, 40]);
// console.log('length' in [10, 20, 30, 40]);

// 객체의 메소드
const aespa = {
  members: ["카리나", "윈터", "지젤", "닝닝"],
  from: "광야",
  sing: function () {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!";
  },
};
// **
console.log(aespa.hasOwnProperty("itzy"));
console.log(aespa.hasOwnProperty("itzy"));

// ***
// aespa.keys()
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)); // 불편한 코드입니다.
console.log(Object.values(aespa)); // 불편한 코드입니다.
