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
const list = ['Pencil', 'paper', 'bicycle', 'notebook', 'ruler'];


// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(len) {
  console.log(len);
})


// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr[arr.length - 1]);  
}
last(items, function(lastCB) {
  console.log(lastCB);
})


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x+y);
}
sumNums(1, 2, function(sumNumsCB) {
  console.log(sumNumsCB);
})


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y);
}
multiplyNums(3, 9, function(multNumsCB) {
  console.log(multNumsCB);
})

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  totalArr = [];
  console.log(totalArr);
  for (let i=0; i < list.length; i++) {
    totalArr.push(list[i]);
  }
  totalArr.push(item);
  console.log(totalArr);
  totalArr.sort();
  console.log(totalArr);
  for (let i=0; i < totalArr.length; i++) {
    if (totalArr[i] === totalArr[i + 1]) {
      console.log(totalArr);
      return true;
    } else {
      return false;
    }
  }
   
}
contains('Notebook', items, function(containsCB) {
  console.log(containsCB);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
