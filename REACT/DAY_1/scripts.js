// VARIABLES

const list = [1, 2, 3, 4, 5];

for (var i = 0; i < list.length; i++) {
  console.log(i);
}

console.log(i); // i will be able to be accessed outside but if we use let, it won't be

// STRING CONCATENATION

const fruit = "strawberries";

console.log(`My favourite fruits are ${fruit}`);

console.log("My favourite fruits are " + fruit);

// OBJECT LITERALS

// original JS
// create a function that returns an object

function favouriteCharacter(name, age) {
  return {
    name: name,
    age: age
  };
}

const book = favouriteCharacter("Harry Potter", 12);
console.log(book);

// ES6
// If what you are returning is the same as in the parameters then you don't need to repeat yourself
// Just using shorthand
const favouriteCharacter = (myName, myAge) => {
  return { myName, myAge };
};
console.log(favouriteCharacter("Harry Potter", 25));

// OR

function extraCharacters(myName, myAge) {
  return {
    myName,
    myAge
  };
}

console.log(extraCharacters("Ron Weasley", 35));

// Just with an object

const personA = "Harry Potter";
const personB = "Ron Weasley";

const cast = {
  personA,
  personB
};

console.log(cast);

const user = {
  firstName: "Joey",
  lastName: "Tribbiani",
  printFullName: function fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  actions: {
    laugh: function() {
      console.log("Muahaha");
    },
    getJoke: function() {
      console.log("A lawyer walks into a bar exam");
    },
    hobbies: [["I like to eat"], [" love to sleep"], ["I am not real"]]
  }
};

// FUNCTIONS

// old JS

let name = "Adam";

function sayHello() {
  let name = "Bella";
  console.log(name);
}
// scope of name outside is global and scope of name inside is local so local scope can't be accessed outside
sayHello(); // will return "Bella"
console.log(name); // will return "Adam"
// declaring variables is different from reassigning variables, so if I were to just say name = Bella then the function reassigns the original from "Adam" to "Bella"

// ES6
// here, we are essentially saving a function in a variable but we would call the function the same way
let name = "Hermione";

const sayHello = () => {
  let name = "Luna";
  return name;
};

console.log(sayHello()); // will return "Luna"
console.log(name); // will return "Hermione" due to scoping unless I actually reassign name = "Luna"

// arrow function with 1 parameter

function sayMyName(name) {
  return name;
}

console.log(sayMyName("Sandra")); // will return sandra

// implicit return of name but ONLY if you're returning one thing i.e. in this case, we're only returning name
const sayMyName = name => name;
console.log(sayMyName("Jupiter"));

// it's the same as:-

const sayMyName = name => {
  return name;
};

console.log(sayMyName("GG"));

// arrow functions with more than one parameter
// since we have more than one, we need to use curly braces and return the two params
// need to return them in curly braces
const userLocation = (city, country) => {
  return `I live in the city of ${city} in ${country}`;
};

console.log(userLocation("Kuala Lumpur", "Malaysia"));

// LOOPS

// forEach with just one parameter, which is just each product within your array

const shoppingList = ["Tomatoes", "Mushrooms", "Broccoli", "Kimchi", "Rice"];

// if you only have one parameter, you don't need the parentheses around it

shoppingList.forEach(product => {
  console.log(`I have ${product} in my shopping bag`);
});

// forEach with two parameters
// when you have two or more parameters, you need to add in the parentheses. such is the case for arrow functions

shoppingList.forEach((product, index) => {
  console.log(`The index for ${product} is ${index}`);
});

// Map
const newList = shoppingList.map(item => {
  console.log(item);
});
// if we treat it like a forEach, it's going to loop through it, but look what happens when we console.log newList => the array is going to be undefined!

// SO, we need to return WITHIN the .map()
const newerList = shoppingList.map(item => {
  return item;
});

console.log(newerList); // will return to me the new array and now I can actually do stuff with THIS array, like add things to it, remove things, etc.

// another way to write the above without the return would be like this:-
// so we've implicitly returned item
const newerList = shoppingList.map(item => item);
console.log(newerList); // will still return to us the new array

//filter
const filterList = shoppingList.filter(item => {
  return item === "Tomatoes"; // will return a new array with JUST tomatoes
  // return item !== "Tomatoes"; // will return everything else other than Tomatoes
});

// DESTRUCTURING

// destructuring an object

const newUser = {
  firstName: "Jupiter",
  lastName: "Moon",
  age: undefined
};

// so to get the elements inside i need to use the dot notation because it's an object and i can save them to variables

const userFirstName = newUser.firstName; // will give me Jupiter
const userLastName = newUser.lastName; // will give me Moon

// but we can destructure it like this using the curly braces!

const { firstName, lastName, age } = newUser;

console.log(firstName, lastName, age);

// i can also assign a new value to something when i destructure but ONLY if the original value was undefined

const { firstName, lastName, age = 4 } = newUser;

// SPREAD SYNTAX
