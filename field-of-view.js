// .Область видимості

// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }

// console.log(sum());//150
// .....................

// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }

// console.log(sum());//15
// ......................

// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(100, 300));//400

// ................

// let a = 5;
// let b = 10;

// function sum() {
//   let a = 10;

//   //   function sum2() {
//   //     let a = 30;
//   //     return a + b;
//   //   }

//   return a + b;
// }

// console.log(sum());//20

// ...................

// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2();

//   function sum2() {
//     let a = 30;
//     return a + b;//30+10=40
//   }

//   return a + b;//40+10=50
// }

// console.log(sum());
