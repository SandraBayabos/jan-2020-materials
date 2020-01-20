// getElementById()

const header = document.getElementById("header");
// if i console.log it, I get the entire HTML element
console.log(header);

// querySelector()

// takes in an argument that is an attribute e.g. a paragraph, an id, a class etc. but it will only return to you the first item
const firstPara = document.querySelector("p");
// if i console.lot it, it's only going to give me the FIRST element that has a p tag
console.log(firstPara);

// querySelector() can also choose by class etc.
const firstList = document.querySelector(".list");

console.log(firstList);

// querySelector() can take in multiple argument, just like in your CSS

const firstItem = document.querySelector(".list .first-item");

console.log(firstItem);

// getElementsByClassName()

// this will return to you an HTMLCollection of Nodes that LOOKS like an array but is NOT an array.
// But you can still extract/go through each element by using the index, just like an array, but you won't be able to use any of the array methods like push, pop, etc.
// HTMLCollection items can be accessed by their name, id, or index number.
const lists = document.getElementsByClassName("list");

console.log(lists);

// and now, like an array, I can loop through it to get each one! It may not seem very intuitive yet why I would do this yet, but it will!

for (i = 0; i < lists.length; i++) {
  console.log(lists[i]);
}

// querySelectorAll()
// will return to you ALL the elements in an array-like object
// returns a NodeList, which is also like an array and therefore you can get things by their index and also loop through them

const paras = document.querySelectorAll("p");

console.log(paras);

for (i = 0; i < paras.length; i++) {
  console.log(paras[i]);
}

// getElementsByTagName()
// also looks like an array so you can loop through it
const allParas = document.getElementsByTagName("p");
// will return all the paragraphs to us
console.log(allParas);

// Types of DOM Methods

// createElement()

// takes in an element e.g. p, button, div, li etc.

const listItem = document.createElement("li");

// mention difference between innerHTML and innerText
listItem.innerHTML = "<strong>I am a new Item</strong>";
// listItem.innerText = "<strong>I am a new Item</strong>";

// difference between append() and appendChild(). Append() is a javascript function and appendChild() is a DOM function. Append() is quite new - since 2018. Before that you had to do some complicated things like insert before etc.

// this will work because listItem is a node i.e. an actual element
firstList.appendChild(listItem);

// firstList.append(listItem) will also work

// but this will not work. It will return the error parameter 1 is not of of type Node

// firstList.appendChild("I am another new Item");

// you can use either append() or appendChild() but if i'm not mistaken append() doesn't work in IE

// Styling with Javascript

// maybe you run some code when the person logs in and inserts all their information, you can change the innerText of the button as well as the colour

// styling by using the style attribute
const button = document.getElementsByTagName("button");

const myButton = button[0];
console.log(button);

myButton.addEventListener("click", () => {
  myButton.innerText = "Logged In";
  myButton.style.backgroundColor = "green";
});

// styling by adding a classList that links to your CSS
const disabledButton = button[1];

disabledButton.addEventListener("click", () => {
  disabledButton.classList.add("disabledButton");
});

// adding a src to an image

const imageDiv = document.querySelector("#imageDiv");

const image = document.createElement("img");

image.src = "kitten.jpg";

imageDiv.append(image);
