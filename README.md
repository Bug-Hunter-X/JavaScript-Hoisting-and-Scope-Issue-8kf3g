# JavaScript Hoisting and Scope Issue

This repository demonstrates a common JavaScript error related to hoisting and variable scope. The issue occurs when a function attempts to use a variable that has not been properly declared or is not within the correct scope.

## The Problem

The `foo` function calls the `bar` function, but there is an issue with how 'bar' is handled.

## The Solution

The solution involves ensuring that 'bar' is properly defined and accessible within the scope of the `foo` function, perhaps by moving it to a higher level or using closures if needed.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the code (node bug.js and node bugSolution.js) to observe the difference in behavior. 