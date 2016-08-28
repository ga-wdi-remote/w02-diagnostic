// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

//// Complete the Functions

// 1. The Fibonacci sequence is a sequence of numbers, starting with
//    "1, 1, 2, 3, 5, ...", where each number is the sum of the two previous
//    numbers. Complete the method `nthFibonacci`, below, which, given some
//    number `n`, returns the nth number in that sequence. If `n` is zero or
//    negative, return `null`. Assume that `n` will only be whole numbers.

var nthFibonacci = function(n){
  // Your Code Here
};

// 2. Objects are combinations of keys and values. Write a function that takes
//    two objects as arguments, and returns a new object containing the keys and
//    values of both original objects. The third argument, `isLeftDominant`, is
//    a boolean used to resolve situations in which both objects share a key; if
//    it is `true`, the new object should always take the value from objA, and
//    if it is `false`, the new object should always take the value from objB.
//
////  Hint: There are a couple of ways to solve this; one involves using the
////        `Object.keys()` method...

var mergeObjects = function(objA, objB, isLeftDominant){
  // Your Code Here
};

// Note: These next two questions involve using the DOM. Don't worry, just call
// `document` just like you normally would.

// 3. Write a function that takes an array of tasks (e.g. "walk the dog") and
//    turns them into <li> elements; then, it should grab a <ul> element with
//    id 'task-list' and replace (NOT append) the inner content of that <ul>
//    with the new <li> elements.

var renderTaskList = function(tasks){
  // Your Code Here
};

// 4. Write a function that can be used as an 'onclick' handler for a button.
//    When the button is pressed, the background color of the page's <body>
//    element should change to red, then blue, then green, then back to white
//    again with every click.

var rotateBackgroundColor = function(){
  // Your Code Here
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  nthFibonacci: nthFibonacci,
  mergeObjects: mergeObjects,
  renderTaskList: renderTaskList,
  rotateBackgroundColor: rotateBackgroundColor
};
