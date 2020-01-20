// // let count = 0;

// // while (count < 10) {
// //   console.log("Hello World");
// //   count++;
// // }

// // console.log("Loop exited!");

// // let names = ["Stave", "JOhn", "Adam", "Tim", "Sandra"];

// // // for (let i = 0; i < names.length; i++) {
// // //   console.log(`Hello, ${names[i]}`);
// // // }

// // // console.log("Loop exited!");

// // names.forEach((name, index) => {
// //   if (index % 2 == 0) {
// //     console.log(`Hello, ${name.toUpperCase()}`);
// //   }
// // });

// // while (true) {
// //   let name = window.prompt("What is your name? ");

// //   if (name == "Sandra") {
// //     break;
// //   }
// // }

// // console.log("Loop exited!");

// let number;

// while (number != "exit") {
//   number = window.prompt("Please provide a number: ");
//   // Function to check if the input is a valid number or not
//   const checkValidNum = num => {
//     if (!isNaN(parseInt(num))) {
//       return true;
//     }
//     return false;
//   };

//   // Function for FizzBuzz output logic
//   const fizzBuzz = inputNum => {
//     if (checkValidNum(inputNum)) {
//       // Write my logic for the FizzBuzz Output
//       if (inputNum % 3 == 0 && inputNum % 5 == 0) {
//         console.log("FizzBuzz");
//       } else if (inputNum % 3 == 0) {
//         console.log("Fizz");
//       } else if (inputNum % 5 == 0) {
//         console.log("Buzz");
//       } else {
//         console.log(inputNum);
//       }
//     } else {
//       console.log("You gave me gobbledygook!");
//     }
//   };

//   fizzBuzz(number);
// }

// let obj = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5
// };

// let keys = Object.keys(obj);

// // console.log(keys);

// keys.forEach(key => {
//   console.log(obj[key]);
// });

let number = 1492;

/* STRATEGY ONE */

const romanNumerals = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M"
];

const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

let answer = "";

// For Loop While Loop Addition Subtration

for (let i = values.length - 1; i >= 0; i--) {
  while (number >= values[i]) {
    answer += romanNumerals[i];
    number -= values[i];
  }
}

// console.log(answer);

let number = 1492;

/* STRATEGY TWO */

let answer = "";

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

// for loop while loop addition subtraction

for (key in romanNumerals) {
  while (number >= romanNumerals[key]) {
    answer += key;
    number -= romanNumerals[key];
  }
}

console.log(answer);

/* STRATEGY 3 */

const romanNumerals = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "",
  "C",
  "CC",
  "CCC",
  "CD", // 24
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
  "",
  "M" // 31
];

let userInput = "1492"; // Length is 4
let answer = "";
let i = 0;

while (i < userInput.length) {
  let rowInArray = userInput.length - i; // 3 (Value is 3)

  let positionInArray = (rowInArray - 1) * 10 + parseInt(userInput[i]); // (3 - 1) * 10 + 4 // 24

  answer += romanNumerals[positionInArray];
  i++;
}

// M CD XC II
console.log(answer);
