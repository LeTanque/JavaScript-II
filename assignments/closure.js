// ==== Challenge 1: Write your own closure ====
// // Write a simple closure of your own creation.  Keep it simple!
// function kingdom(title) {
//   console.log(`Ye ole kingdom of ~${title}~`);
//   function town() {
//     console.log(`Welcome to the township of ${title}shire`);
//   }
//   town();
// }
// kingdom('Dragonscale');


// ==== Challenge 2: Create a counter function ====
// // Return a function that when invoked increments and returns a counter variable.
// const counter = () => {
//   let count = 8100;
//   // console.count(`Power level`);
//   // return count += 1;
//   return function() {
//     count += 10;
//     // console.count(``);
//     console.log(`Power level:`);
//     return count;
    
//   }
// };
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());
// const newCounter = counter();
// console.log(newCounter()); 
// console.log(newCounter()); 
// console.log(newCounter()); 
// console.log(newCounter()); 
// console.log(`~~~ Almost there! ~~~`);

// // Function to increment counter ES5
// // not really a counter though. console.log is tracking invocation, 
// // but the value of each previous iteration is not actually being stored (?)
// let counter = 0;
// function add() {
//   counter += 1;
//   console.log(counter);
// }
// add();
// add();
// add();


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
// const counterFactory = (start, direction) => {
//   let count = start;
//   if (direction = 'up') {
//     return function() {
//       count += 1;
//       return count;
//     }
//   } else if (direction = 'down') {
//     return function() {
//       count -= 1;
//       return count;
//     }
//   } else {
//     return 'choose either up or down';
//   }
  
// };

// const countFact = counterFactory(0,up);
// console.log(countFact());
// console.log(countFact());
// console.log(countFact());
// console.log(countFact());

// // Ok, this isn't working.  ... reads MDN ... meditates ...
// // Challenge 3 Round 2
const counter = (function() {
  let countDracula = 0;
  function changeBy(val) {
    countDracula += val;
  }
  return {
    increment: () => {
      changeBy(1);
      return `${countDracula} banana, ha. ha. ha.`;
    },
    decrement: () => {
      changeBy(-1);
      return `${countDracula} banana, ha. ha. ha.`;
    },
    value: function() {
      return `Count Dracula's current value is ${countDracula}`;
    }
  };   
}) ();

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.value()); 
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());