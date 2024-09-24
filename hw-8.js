// Підготувати властивість PI:3.14 у своєму власному об'єкті таким чином,
// щоб її не можна було змінити або видалити.

// const obj = {
//   PI: 3.14,
// };
// const piValue = Object.getOwnPropertyDescriptor(obj, "PI");
// console.log(piValue);

// Object.defineProperty(obj, "PI", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// console.log(obj.PI);

// obj.PI = 3.5415;
// console.log(obj.PI);

// delete obj.PI;
// console.log(obj.PI);

// Створити інтерактивний список справ (To-Do List), де користувач може додавати нові справи та
// відзначати виконані. Використовувати this для позначення конкретного елемента, який взаємодіє
// з користувачем, а також document для роботи з елементами сторінки.
// Інструкція:
// Створи HTML-сторінку, яка містить:
// Поле вводу для нової справи (інпут).
// Кнопку "Додати справу".
// Порожній список (тег <ul>) для відображення справ.
// Написати JavaScript-код, який:
// -Додає нову справу до списку після натискання на кнопку "Додати справу".
// -Додає можливість відзначати справу як виконану. Коли користувач натискає на конкретну справу у списку,
// ця справа перекреслюється (стиль text-decoration: line-through).
// -Використовує this для доступу до конкретного елемента списку, на який користувач натиснув, щоб змінити його стиль.
// Підказки:
// Для додавання нової справи використовувати метод document.createElement() для створення нового <li>.
// Щоб змінювати стилі, використовуй style.textDecoration або додати/змінити клас елемента.

// Очікуваний результат:
// Користувач вводить текст нової справи у поле вводу.
// Після натискання на кнопку "Додати справу", нова справа додається до списку.
// При натисканні на будь-яку справу у списку, ця справа позначається як виконана (перекреслюється).
// Повторний клік на виконану справу прибирає перекреслення.

// Це завдання демонструє, як використовувати this у контексті подій для доступу до конкретних елементів списку,
// а також як працювати з елементами через document для динамічного оновлення веб-сторінки.

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".my_tasks ul");

form.onsubmit = function (event) {
  event.preventDefault();
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  newTask.style.cursor = "pointer";

  newTask.onclick = function () {
    if (this.style.textDecoration === "line-through") {
      this.style.textDecoration = "none";
    } else {
      this.style.textDecoration = "line-through";
    }
  };

  taskList.appendChild(newTask);

  taskInput.value = "";
};
