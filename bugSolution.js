function bar() {
  return 1;
}

function foo(a) {
  return a + bar();
}

console.log(foo(2)); // Output: 3