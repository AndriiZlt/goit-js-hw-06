// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в
//  консоль текст заголовка элемента (тега <h2>) и количество элементов в
//   категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

const liRefs = document.querySelectorAll("#categories .item");
console.log("Number of categories:", liRefs.length);
liRefs.forEach((ref) => {
  console.log("Category: ", ref.querySelector("h2").textContent);
  console.log("Elements: ", ref.querySelectorAll("ul li").length);
});
