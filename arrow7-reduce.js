const arr = [1,2,3,4,5];
const r = arr.reduce((a,b) => a + b);
const r2 = arr.reduce((a,b) => a + b, 2);
console.log(r);
console.log(r2);
