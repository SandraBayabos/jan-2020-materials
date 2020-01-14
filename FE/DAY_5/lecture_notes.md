# Loops

- Loops have many purposes, they allow us to run code a pre defined amount of times
- They can be used for iterating over arrays
- They prevent the need to repeating the same piece of code over and over again

### While Loop

- While loops is pretty straight-forward, while a certain condition is true, keep repeating the same piece of code over and over again until the condition is no longer true.
- Beware of infinite loops, if the condition is never met it will run forever and your laptop will explode

```js
while (condition == true) {
  // Keep running this logic
  // Do something
}
```

### For Loop

- For loop can be a little more confusing at first glance as there is more to it in the initial setup
- It still does the same as a while loop but a little differently, it is generally the prefered way to perform iterations over an array

```js
let array = [0,1,2,3,4,5]

for(let i = 0; i < array.length; i++){
  console.log(array[i])
}

for(startingCondition; whileCondition; incrementOrDecrement;){
  // Logic to perform goes here
}
```

### ForEach

- Easier to understand for loop for iterating over an array
- Each time it will move along to the next item, will return a function with 2 arguments, the item itself and the index inside of the array

```js
let array = [9, 8, 7, 6, 5];

array.forEach(function(num, index) {
  console.log(`Number at index ${index} is: ${num}`);
});
```
