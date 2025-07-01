function fibbonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibbonacci(5); // 5

function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(5)); // 5