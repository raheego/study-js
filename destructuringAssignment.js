//배열 구조분해할당
const foo = [ "one", "two","three"];
const [one,two,three] = foo;
console.log(one,two,three);

//객체 구조분해할당
const obj = { p : 42 , q : true };
const {p , q} = obj
console.log(p,q);

