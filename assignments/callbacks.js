// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.
/* 
  //Given this problem: 
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  firstItem(items, function(first) {
    console.log(first)
  });
*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// const list = ['Pencil', 'paper', 'bicycle', 'notebook', 'ruler'];


// Basic output callback function. basicOutput pushes whatever result from the function to the console.
const basicOutput = (len) => { console.log(len); };
// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(`The length of the array is "${arr.length}"`);
}
getLength(items, basicOutput);
// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(`The last item in the array is "${arr[arr.length - 1]}"`);  
}
last(items, basicOutput);


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(`SUM: ${x + y}`);
}
sumNums(3, 2, basicOutput);
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(`PRODUCT: ${x * y}`);
}
multiplyNums(3, 9, basicOutput);



// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
// I think there are quite a few ways I could have done this more efficiently.
function contains(item, list, cb) {
  let totalArr = [item.toUpperCase()];
  let match = false;
  
  list.forEach((itemInList) => {
    totalArr.push(itemInList.toUpperCase());
    totalArr.sort();
  });

  for (let i=0; i < totalArr.length; i++) {
    if (totalArr[i] === totalArr[i + 1]) {
      match = true;
    }
  }

  return cb(match);
}
contains('notebook', items, basicOutput);



/* STRETCH PROBLEM */
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
