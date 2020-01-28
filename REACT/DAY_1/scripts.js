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

// FUNCTIONS

// old JS

let name = "Adam";

function sayHello() {
  name = "Bella";
  console.log(name);
}
// scope of name outside is global and scope of name inside is local so local scope can't be accessed outside
sayHello(); // will return "Bella"
console.log(name); // will return "Adam"

// ES6
