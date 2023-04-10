const canvas = document.querySelector(".canvas");
const btnBlue = document.querySelector(".btn-blue");
const btnTeal = document.querySelector(".btn-teal");
const btnSand = document.querySelector(".btn-sand");
btnBlue.addEventListener("click", () => {
  canvas.classList.remove("royalblue", "teal", "sandybrown");
  canvas.classList.add("royalblue");
});
btnTeal.addEventListener("click", () => {
  canvas.classList.remove("royalblue", "teal", "sandybrown", "radius");
  canvas.classList.add("teal");
});
btnSand.addEventListener("click", () => {
  canvas.classList.remove("royalblue", "teal", "sandybrown");
  canvas.classList.add("sandybrown");
});
