let fact = (n) => n < 2 ? 1 : n * fact(n-1);
let ans = fact(3);
console.log(ans);