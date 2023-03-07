let counterValue = 0;

const value = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener("click", onClick);
btnDecrement.addEventListener("click", onClick);

function onClick(event) {
  event.target.innerHTML === "+1" ? (counterValue += 1) : (counterValue -= 1);
  value.textContent = counterValue;
}
