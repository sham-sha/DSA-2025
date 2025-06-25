function fibbonacci(num) {
  if (num <= 1) return num;
  let a = 0, b = 1, c;
  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}       

