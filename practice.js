/*
 Задача №1
* Напиши функцію findSmallesNumber(numbers)
 для пошуку найменшого числа в масиві,
 * при умові що числа унікальні (не повторюються).
 */

// function findSmallesNumber(numbers) {
//   let smalNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smalNumber) {
//       smalNumber = number;
//     }
//   }
//   return smalNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// .............................
// Задача №2
// Функція checkStorage(available, ordered)
// перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат.
//  Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження,
// доповни код функції таким чином, що:

// Якщо в замовленні вказане число,
// яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".
// функція декларейшин
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered < available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   return message;
// }

// Стрілкова функція
// const checkStorage = (available, ordered) => {
//   let message;
//   if (ordered < available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   return message;
// };

// Тернарник
// const checkStorage = (available, ordered) =>
//   ordered < available
//     ? "Not enough goods in stock!"
//         : "Order is processed, our manager will contact you.";

// const r1 = checkStorage(100, 50);
// console.log(r1);

// const r2 = checkStorage(100, 130);
// console.log(r2);

// const r3 = checkStorage(200, 20);
// console.log(r3);

// const r4 = checkStorage(200, 150);
// console.log(r4);
// .............................

// Задачки ДЗ№9
// Задача №1
// Оголоси функцію sayHi,
// всередині якої додай console.log()
//  з рядком "Hello, this is my first function!".
// Після оголошення виклич функцію sayHi.

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();
// стрілка
// const sayHi = () => console.log("Hello, this is my first function!");
// sayHi();

// ..........
// Задача №2
// Функція add повинна вміти додавати три числа
//  і виводити результат у консоль.
// Додай функції add три параметри: a, b і c,
// які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином,
// щоб він логував рядок
// "Addition result equals <result>",
// де < result > - це сума переданих чисел.

// function add(a, b, c) {
//   const total = a + b + c;
//   console.log(`Addition result equals ${total}`);
// }

// стрілка
// const add = (a, b, c) => {
//   const total = a + b + c;
//   console.log(`Addition result equals ${total}`);
// };

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// .........................
// Задача №3
// Доповни код функції add таким чином,
// щоб вона повертала результат додавання значень трьох
// параметрів: a, b і c.

// function add(a, b, c) {
//   return a + b + c;
// }

// стрілка
// const add = (a, b, c) => a + b + c;

// console.log(add(2, 5, 8)); // 15
// console.log(add(15, 27, 10)); //52
// console.log(add(10, 20, 30));//60
// console.log(add(5, 10, 15));//30

// ...............................
// Задача №4
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
// де < product name > і < product price > - це значення параметрів name і price.
// Використовуй синтаксис шаблонних рядків.

// function makeMessage(name, price) {
//   const message = ;
//   return message;
// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);
// .............................
// Задача №5
// Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином,
// щоб у змінну totalPrice записувалася загальна сума покупки -
// результат множення кількості товарів на ціну одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = ;
//   return totalPrice;
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// ..........................
// Задача №6
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// складає і повертає повідомлення про покупку ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.
//
// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення
// у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// .......................
// Задача №7
// Функція isAdult оголошує один параметр age(вік),
// значення якого буде задаватися під час її виклику.
// Присвой змінній passed вираз перевірки віку користувача на повноліття.
// Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {

//   const passed = ;

//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// .....................
// Задача №8
// Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів
// і повертає результат перевірки - буль true або false.
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.
// Введений пароль передається у параметр password.
//
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = ;

//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");
// .......................
