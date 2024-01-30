// 배열을 순회하여 callback 의 결과값에 하나라도 true  가 있을경우 true 아닐경우 false
// some
//
const arr1 = [1,2,3,4,5];
console.log( arr1.some(n=>n>100)) //false
console.log( arr1.some(n=>n>4)) //true



// every some 비교
const arr = [2, 4, 6, 8, 10];

// 모든 요소가 짝수인지 확인
const allEven = arr.every(num => num % 2 === 0);
console.log(allEven); // 출력: true

// 어떤 요소라도 짝수인지 확인
const someEven = arr.some(num => num % 2 === 0);
console.log(someEven); // 출력: true

