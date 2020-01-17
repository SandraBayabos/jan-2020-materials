// let count = 0;

// while (count < 10) {
//   console.log("Hello World");
//   count++;
// }

// console.log("Loop exited!");

// let names = ["Stave", "JOhn", "Adam", "Tim", "Sandra"];

// // for (let i = 0; i < names.length; i++) {
// //   console.log(`Hello, ${names[i]}`);
// // }

// // console.log("Loop exited!");

// names.forEach((name, index) => {
//   if (index % 2 == 0) {
//     console.log(`Hello, ${name.toUpperCase()}`);
//   }
// });

// while (true) {
//   let name = window.prompt("What is your name? ");

//   if (name == "Sandra") {
//     break;
//   }
// }

// console.log("Loop exited!");

let number;

while (number != "exit") {
  number = window.prompt("Please provide a number: ");
  // Function to check if the input is a valid number or not
  const checkValidNum = num => {
    if (!isNaN(parseInt(num))) {
      return true;
    }
    return false;
  };

  // Function for FizzBuzz output logic
  const fizzBuzz = inputNum => {
    if (checkValidNum(inputNum)) {
      // Write my logic for the FizzBuzz Output
      if (inputNum % 3 == 0 && inputNum % 5 == 0) {
        console.log("FizzBuzz");
      } else if (inputNum % 3 == 0) {
        console.log("Fizz");
      } else if (inputNum % 5 == 0) {
        console.log("Buzz");
      } else {
        console.log(inputNum);
      }
    } else {
      console.log("You gave me gobbledygook!");
    }
  };

  fizzBuzz(number);
}

// let obj = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5
// };

// let keys = Object.keys(obj);

// console.log(keys);

// keys.forEach(key => {
//   console.log(obj[key]);
// });
