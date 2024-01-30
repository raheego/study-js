//객체구조분해할당
const obj = {
	p : 42,
	q: true 
}
const { p , q } = obj; 
console.log(p,q); // 42 true
//
//
// 선언에서 분리한 할당
let a, b;
//{ a , b } = { a: 1 , b: 2 }; //unexpected token 
//코드 블록 블록으로 간주하기 때문에 표현식으로 디ㅗ도록 괄호로 감싸주기 
(  { a, b } = { a : 1 , b : 2} );

//새로운 변수 이름으로 할당 
const obj2 = { 
	p : 42, 
	q : true 
};
const { p : foo , q : bar }  = obj2;
console.log( foo, bar ); //42 true

