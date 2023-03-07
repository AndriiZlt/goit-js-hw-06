function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
btnRef.addEventListener("click", onClick);

function onClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = document.body.style.backgroundColor;
}
