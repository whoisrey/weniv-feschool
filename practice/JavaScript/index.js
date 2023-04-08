for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let word = "hello world";
let result = "";
for (let i = 0; i < word.length; i++) {
  result = word[i] + result;
}

let factorial = 1;
for (let x = 1; x < 6; x++) {
  factorial = factorial * x;
}
