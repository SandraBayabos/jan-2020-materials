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

function extraCharacters(myName, myAge) {
  return {
    myName,
    myAge
  };
}

console.log(extraCharacters("Ron Weasley", 35));

// OR WITH ARROW FUNCTION

// If what you are returning is the same as in the parameters then you don't need to repeat yourself
// Just using shorthand
const favouriteCharacter = (myName, myAge) => {
  return { myName, myAge };
};
console.log(favouriteCharacter("Harry Potter", 25));

// Just with an object

const personA = "Harry Potter";
const personB = "Ron Weasley";

const cast = {
  personA,
  personB
};

console.log(cast);

// ignore the following example
const randomString = Math.random()
  .toString(36)
  .substring(6);
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
    }
  },
  hobbies: [
    function() {
      console.log("I want to sleep");
    },
    function() {
      console.log("I want sushi");
    },
    function() {
      console.log("Fuck this shit");
    }
  ],
  randomString
};

obj = {
  key1: "Hello"
};

let randomString = "key1";

obj[randomString]; // "hello"

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
const filteredList = shoppingList.filter(item => {
  return item === "Tomatoes"; // will return a new array with JUST tomatoes
  // return item !== "Tomatoes"; // will return everything else other than Tomatoes
});

// destructuring an array

const languages = ["Javascript", "Python", "Go", "Ruby", "Dart"];

const [langOne, langTwo, langThree, langFour, langFive] = languages;

console.log(langFive); // should return me Dart

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

// I can also select only the specific items that i want from a very nested object

const pokemon = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
  abilities: {
    mainAbility: "Static",
    hiddenAbility: "Lightning Rod",
    ultimateAbility: "Cuteness"
  },
  evolution: {
    first: "Pichu",
    second: "Pikachu",
    third: "Raichu"
  }
};

const {
  id,
  name,
  abilities: { mainAbility, ultimateAbility },
  evolution: { second }
} = pokemon;

console.log(name);
console.log(mainAbility, ultimateAbility);
console.log(second);

// another great thing about destructuring is that I can use it with functions, which will make my life a lot easier:-

const whoIsMyPokemon = ({
  name,
  type,
  abilities: { mainAbility },
  evolution: { first }
}) => {
  console.log(
    `My pokemon's name is ${name} and he is a ${type} type pokemon. His main ability is ${mainAbility} and he is currently in his first evolution as ${first}`
  );
};

whoIsMyPokemon(pokemon);

// SPREAD SYNTAX

// Spreading an array

const mentors = ["Sandra", "Matt", "Liren", "Jinqwen", "Nic"];

const [a, b, ...offMentors] = mentors;

console.log(offMentors); // should return Liren, Jinqwen, Nic

// combining two arrays
const marketingTeam = ["Peony", "Jess", "Wan"];

const employees = [...mentors, ...marketingTeam];

console.log(employees);

// note the difference between this:-
// this will return to me an array of two arrays
const team = [mentors, marketingTeam];

console.log(team);

// adding new users

const newMentor = "Ming Hao";

const updatedMentorList = [...mentors, newMentor];

console.log(updatedMentorList);

// Spread

// spreading an object

let pokemon = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
  abilities: {
    mainAbility: "Static",
    hiddenAbility: "Lightning Rod",
    ultimateAbility: "Cuteness"
  },
  evolution: {
    first: "Pichu",
    second: "Pikachu",
    third: "Raichu"
  }
};

const { id, name, type, ...rest } = pokemon;

console.log(rest); // will return to me abilities and evolution in an object

// merging two objects using the spread syntax

const trainer = {
  owner: "Ash"
};

pokemon = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
  ...trainer,
  abilities: {
    mainAbility: "Static",
    hiddenAbility: "Lightning Rod",
    ultimateAbility: "Cuteness"
  },
  evolution: {
    first: "Pichu",
    second: "Pikachu",
    third: "Raichu"
  }
};

// or I can create a new object entirely with the spread syntax

const newPokemonDetails = { ...pokemon, ...trainer };

console.log(newPokemonDetails);

//

console.log(addAndMultiply(4, 8, 5));

const selfIntro = (name, hobby, count) =>
  `My name is ${name}. I practice ${hobby} ${count} times a day.`;
console.log(selfIntro("Shanqyeet", "Kendama", "18"));

let squared = x => x * x;
console.log(squared(2));

const prices = [1.0, 2.0, 3.0, 4.0];
const gst = 0.06;
const pricesWithTax = prices.map(x => x * 1.06);
console.log(pricesWithTax);

const prices = [1.0, 2.0, 3.0, 4.0];
const gst = 0.06;
const pricesWithTax = [];
prices.forEach(
  (tax = x => {
    tax = x * 1.06;
    pricesWithTax.push(tax);
  })
);
// prices.forEach(function(x) {
//     tax =  x * 1.06;
//     pricesWithTax.push(tax);
// })
console.log(pricesWithTax);

class Car {
  constructor(owner) {
    this.brand = "Tesla";
    this.model = "Model X";
    this.owner = owner;
  }

  drive() {
    console.log(`${this.owner.name} is driving his ${this.brand}`);
  }

  doSomethingTwice(action) {
    for (let i = 0; i < 2; i++) {
      action();
    }
  }
}

const mycar = new Car({
  name: "Nicholas",
  age: 21,
  gender: "male"
});

mycar.doSomethingTwice(mycar.drive.bind(mycar));

class Car {
  constructor(owner) {
    this.brand = "Tesla";
    this.model = "Model X";
    this.owner = owner;
  }

  drive = () => {
    console.log(`${this.owner.name} is driving his ${this.brand}`);
  };

  doSomethingTwice(action) {
    for (let i = 0; i < 2; i++) {
      action();
    }
  }
}

const mycar = new Car({
  name: "Nicholas",
  age: 21,
  gender: "male"
});

mycar.doSomethingTwice(mycar.drive);

const getState = state => {
  // complete this
  logstate = () => console.log(`Your state is ${state}`);
  return [state, logstate];
};

const [state, logState] = getState("stable");
console.log(state); // The console should print out 'stable'
logState(); // The console should print out 'Your state is stable'

const user = {
  id: 101,
  email: "josh@nextacademy.com",
  personalInfo: {
    name: "Josh",
    address: {
      line1: "AG-7, Glomac Damansara",
      state: "Kuala Lumpur",
      country: "Malaysia"
    }
  }
};
const {
  gender = "male",
  email,
  personalInfo: {
    address: { line1, state, country }
  }
} = user;

const josh = {
  gender,
  email,
  personalInfo: {
    address: `${line1}, ${state}, ${country}`
  }
};
console.log(josh);

const discount = {
  rate: 0.5,
  reason: "New Year Sales"
};

const products = [
  {
    name: "Laptop",
    price: 800
  },
  {
    name: "Keyboard",
    price: 160
  },
  {
    name: "Mouse",
    price: 70
  }
];

const updatedProducts = products.map(product => {
  // complete your code
  let newPrice = product.price * discount.rate;
  let updateProducts = { ...product, ...discount, newPrice: newPrice };
  return updateProducts;
});
console.log(updatedProducts);

//
const getState = oldState => {
  changeState = function() {
    console.log(`Your state is ${oldState}`);
  };
  return [oldState, changeState];
};

const [state, logState] = getState("stable");
console.log(state); // The console should print out 'stable'
logState(); // The console should print out 'Your state is stable'
