// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const assert = require('assert');
const jsdom = require('mocha-jsdom');

let phantom = require('phantom');
let phInstance = null, sitepage = null;
describe('w02 Diagnostic', function(){
  before(function(){
    this.timeout(6000);
    return phantom.create()
    .then(instance => {
      phInstance = instance;
      return instance.createPage();
    })
    .then(page => {
      sitepage = page;
      return page.open( process.env.PWD + '/index.html');
    })
    .then(status => {
      console.log(`PAGE FINISHED LOADING; STATUS ${status}`);
    })
    .catch(error => {
        console.log(error);
        sitepage.close();
        phInstance.exit();
    });
  });
  describe("nthFibonacci(n)", function(){
    it("gives the nth Fibonacci number", function(){
      let testCases = [
        {n: 1, fib: 1},
        {n: 2, fib: 1},
        {n: 3, fib: 2},
        {n: 4, fib: 3},
        {n: 5, fib: 5},
        {n: 10, fib: 55},       // 1 1 2 3 5 8 13 21 34 55
        {n: 20, fib: 6765},     // 89 144 233 377 610 987 1597 2584 4181 6765
      ]
      return sitepage.evaluate(function(testCases){
        return testCases.map(function(testCase){
          return {expected: testCase.fib, actual: nthFibonacci(testCase.n)};
        });
      }, testCases).then(function(testCases){
        testCases.forEach(function(testCase){
          assert.equal(testCase.expected, testCase.actual);
        });
      });
    });
    it("returns `null` for values of n less than 1", function(){
      let testCases = [
        {n: 0, fib: null},
        {n: -1, fib: null}
      ]
      return sitepage.evaluate(function(testCases){
        return testCases.map(function(testCase){
          return {expected: testCase.fib, actual: nthFibonacci(testCase.n)};
        });
      }, testCases).then(function(testCases){
        testCases.forEach(function(testCase){
          assert.equal(testCase.expected, testCase.actual);
        });
      });
    });
  });
  describe("renderTaskList(tasks)", function(){
    it("takes a list of tasks, generates a set of <li> elements, and sets these elements as the content of a <ul> element with the id 'task-list'", function(){
      var taskList = document.createElement('ul');
      taskList.id = 'task-list';
      document.body.appendChild(taskList);
      var tasks = [
        'mow the lawn',
        'walk the dog',
        'feed the cat',
        'take out the trash',
        'do the laundry',
        'X the Y'
      ];
      renderTaskList(tasks);
      assert.equal(taskList.children.length, tasks.length);
      for (let i = 0; i < tasks.length; i++) {
        assert.equal(taskList.children[i].tagName, 'LI');
        assert.equal(taskList.children[i].innerHTML, tasks[i]);
      }
    })
  });
});

jsdom();
describe("rotateBackgroundColor()", function(){
  context("when the background color of the body is white", function(){
    it("changes the background color to red", function(){
      document.body.style.backgroundColor = "white";
      rotateBackgroundColor();
      assert.equal(document.body.style.backgroundColor, "red");
    });
  });
  context("when the background color of the body is red", function(){
    it("changes the background color to blue", function(){
      document.body.style.backgroundColor = "red";
      rotateBackgroundColor();
      assert.equal(document.body.style.backgroundColor, "blue");
    });
  });
  context("when the background color of the body is blue", function(){
    it("changes the background color to green", function(){
      document.body.style.backgroundColor = "blue";
      rotateBackgroundColor();
      assert.equal(document.body.style.backgroundColor, "green");
    });
  });
  context("when the background color of the body is green", function(){
    it("changes the background color to white", function(){
      document.body.style.backgroundColor = "green";
      rotateBackgroundColor();
      assert.equal(document.body.style.backgroundColor, "white");
    });
  });
});
