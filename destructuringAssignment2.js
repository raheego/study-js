//배열 구조분해 할당
const foo = ["one", "two", "three"]
const [one,two,three] =  foo;
console.log(one,two,three);

//선언에서 분리 할당
let a , b; 
[a,b] = [1,2];
console.log(a,b); // 1 2

//할당값이 undefinded일경우
const [a = 5, b=7,c=9] = [1,null];
console.log(a,b,c); // 1 null 9
