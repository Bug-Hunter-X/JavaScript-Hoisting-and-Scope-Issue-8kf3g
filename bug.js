function foo(a) {
  return a + bar();
}

function bar() {
  return 1;
}

console.log(foo(2)); // Output: 3