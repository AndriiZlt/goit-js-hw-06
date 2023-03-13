const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newList = [];

ingredients.forEach((ingridient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingridient;
  newLi.classList.add("item");
  newList.push(newLi);
});

const ulRef = document.querySelector("#ingredients");

ulRef.append(...newList);
