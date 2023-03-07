function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("#controls input");
const divBoxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  createBoxes(amount);
});
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();
    divBoxesRef.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color:${randomColor}; width: ${boxSize}px; height: ${boxSize}px;"></div>`
    );
    boxSize += 10;
  }
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}
