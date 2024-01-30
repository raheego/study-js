//객체구조분해 할당
//기본값 할당
const { a = 10, b = 5 } = { a:3 };
console.log(a,b); // 3 5
//
// 기본값 갖는 새롱누 이름의 변수에 할당
const {
	a1 : aa = 10, 
	b2 : bb = 5
} = { a1 : 3 };
console.log( aa, bb); // 3 5
//
// 나머지 분해 할당
const { a2 , b2 , ...rest } = { a2: 10, b2: 20, c: 30, d: 40}
console.log(a2, b2); // 10 20 
console.log(rest); // { c : 30 , d: 40};
