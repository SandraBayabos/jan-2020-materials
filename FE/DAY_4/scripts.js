// Demo of DOM manipulation and interactivity with

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  alert("Hello World");
});

const header = document.getElementById("header");
let click = 0;

header.addEventListener("click", function() {
  header.innerHTML = "Hello Frontend Class of Jan 2020";
  click++;
  console.log(click);
  if (click % 2 == 0) {
    header.innerHTML = "Hello World";
  }
});

// DEMO OF VARIABLES & WHY WE USE THEM

// let's say you have a website and each user has a homepage. Are you going to say hello to them one by one? Obviously not, if I have thousands of users

// So, we can store all our user in an array and give them a variable

let users = [
  "Consuwella Carrington",
  "Hazwan Faizul",
  "Jovan Goh Chia Guan",
  "Jun Yee Chan",
  "Lee Siew Hwei",
  "Melissa Teh Hui Wen",
  "Ng Jia Wei",
  "Ng Jyn Mun",
  "Phoong Shen Yang",
  "Thieng Zhong Vei",
  "Voon Hui Sen",
  "Nur Azlina Abdul Manap",
  "Ahmad Ridza Bin Mohd Rozlan",
  "Amir Luqman Bin Riyad",
  "Chan Yong Siang",
  "Darren Soon Kai Xuan",
  "Eric Lim Tau Wee",
  "Jack Lai Hao Bin",
  "Jayashini M Patmanathan",
  "Kumar",
  "Lee Yi Ling",
  "Lim Kay Shaun",
  "Muhammad Firdaus Bin Helmy",
  "Muhammad Irsyad Mohd Ariff",
  "Nur Aiman Iskandar",
  "Pradeep Raj Vasudevan",
  "Raphael Anak Kassim",
  "Shabir Singh Dhillon",
  "Sirhan Sulaiman",
  "Vishnuraj Shanmugaraj",
  "Wathiqah Rosli",
  "Max Choo",
  "Mohamed Ridzwan Bin Mohamed Haniffa"
];

const greetBtn = document.getElementById("greet-btn");
const greetDiv = document.getElementById("greet-div");

greetBtn.addEventListener("click", function() {
  for (i = 0; i < users.length; i++) {
    let text = document.createElement("H3");
    text.innerHTML = `Hello ${users[i]}`;
    greetDiv.appendChild(text);
  }
});

// ARRAYS

const mentors = ["sandra", "mei", "nic", "liren", "jinqwen", "matt"];

// get mentors[0]
// mentors.push("ming hao")
// mentors.slice(1,2) to extract these items from the array
// mentors.splice(1) to remove the selected item from the array
// index vs length

// OBJECTS

const mentor = {
  name: "Sandra",
  age: 21,
  favouriteFood: "sushi",
  numOfFriends: 5
};

// mentor.name gives "Sandra"
// get all the keys => Object.keys(mentor) will return an array of the keys

// nested objects

const amazonCart = {
  ebooks: {
    author: "JK Rowling",
    title: "Harry Potter"
  },
  electronics: [
    { name: "Macbook", price: 500 },
    { name: "Nikon", price: 800 },
    { name: "Roomba", price: 1000 }
  ]
};

console.log(amazonCart.ebooks.title);
console.log(amazonCart.electronics[0].name);

// nested arrays in objects

const newClass = {
  subject: "Coding",
  numOfStudents: 30,
  students: ["sandra", "mei", "jinqwen", "matt", "liren", "nic"]
};

// CONDITIONAL STATEMENTS

if (condition) {
  //then do this
}

let x = 10;
let y = 10;
let z = 11;

if (x == y) {
  console.log("X is the same as Y");
}

if (x == y) {
  console.log("X is the same as Y");
} else if (x < z) {
  console.log("X is smaller than Z");
}

// FUNCTIONS

function sayHello() {
  console.log("Hello");
}

sayHello();

// with one parameter

function greetFriends(users) {
  for (i = 0; i < users.length; i++) {
    console.log(`Hello, ${users[i]}`);
  }
}

greetFriends(users);

// with parameters

const box = 0;
const letter = 1;

function addToBox(x, y) {
  newBox = x + y;
  console.log(`I have ${newBox} item in my box`);
  return newBox;
}

addToBox(box, letter);

// arrow function -> return is implicit

const arrowSayHi = () => console.log("Hi");

const addItem = (box, letter) => box + letter;

console.log(addItem(box, letter));
