//함수 본문이 2줄 이상인 경우 {} 으로 감싸야합니다.
(itierator, needles) => {
	for(let obj of needles) {
		if(iterator.index(obj) === -1) return false;
	}
	return true;
}

// {}로 감싼 경우 값을 반환하려면 본문 줄 수에 상관없이 return keyword 를 사용해야 합니다.
const f = a => { return a }; // f(3) => 3
//const f3 = a => { a };  //f3(3) -> undefined;
