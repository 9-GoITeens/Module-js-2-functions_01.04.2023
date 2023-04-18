// Задачка з кахута
// function duble(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] *= 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// duble(numbers);
// console.log(numbers);

// ...................................

/*
- Стек викликів
- Stack trace і пошук помилок
 */
// const valule = 10;

const fnA = function () {
  console.log("Виконується функція A");
  //   fnB();
};

const fnB = function () {
  console.log("Виконується функція B");
  //   fnC();
  //   console.log(valule);
};

const fnC = function () {
  console.log("Виконується функція C");
};

// console.log("Лог перед викликом функції A");

fnA();

// console.log("Лог після викликом функції A");

// console.log("Лог перед викликом функції B");
fnB();
// console.log("Лог після викликом функції B");

// console.log("Лог перед викликом функції C");
fnC();
// console.log("Лог після викликом функції C");
