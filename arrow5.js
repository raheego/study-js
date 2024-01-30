// arrow function 연결
//
const f = b => a => a + b + 1; 
f(1)  // a => a + 1 + 1;
console.log( f(1)(10) ); // 12
//
//
// function f(b) {
//    return function(a) {
//        return a + b + 1;
//    };
//}

