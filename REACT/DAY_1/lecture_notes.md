### ES6

1. What is ES6

- Ecma Script 2015

2. Changes in ES6

- Variables
  => var to const and let
  => const and let create block scope variables so anything within {} like in a for loop, won't be able to be accessed outside, whereas var can kind of bleed outside

- String concatenation
  => using backticks is also an ES6 thing, which allows us to interpolate variables into our strings

- Object Literals
  => Basically shorthanding your objects whether in functions based on the param or because you've already defined the values of your keys before

- Arrow Functions
  => You've seen me use these a bunch of times before but we'll go through them again
  => removes the need for the return keyword
  => but if you're going to be using curly braces then you need to explicitly return

- Looping/Array methods
  => forEach: you've all done forEach loops because I've been using them in all my examples over the past two weeks, but the forEach loop is actually a new introduction from ES6
  => But now we introduct you to a new type of loop or method that is specific to arrays called .map() and this will be very important for when you start actually working with react
  => What .map() does is it makes a copy of an original array. So in react, when it comes to arrays, we can never reassign an array or mutate it as we call it, so no array.push(), array.pop(). The original array will always be as it is. So whenever we want to make a change to an original array, we first have to make a copy of it and only then do we modify it however we want.
  => whenever we use .map() we ALWAYS have to return something otherwise our new array is going to be undefined
  => filter() is a new type of method as well that allows us to filter through an array and return to us specific items that we want without having to use the index like in a traditional array

3. What is destructuring?

- destructuring is a way to shorten your code and also make things neater and more readable, especially when it comes to objects and arrays, and especially when we're constantly calling upon/using values from objects and arrays
- we can prevent our code from looking too bloated
- oftentimes we might write our code the normal, lengthy way, and then only destructure it afterwards, so I'd recommend that you guys do that so you become first comfortable with writing the code the way it's mean to be written, and then destructure it aftewards when you become more confident in it
- this will also come in handy when you start passing props (properties/variables) between your different react components

4. What is spread syntax?
