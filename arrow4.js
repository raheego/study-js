//method 로 사용할 경우 this바인딩이 되지 않습니다.

const obj = { 
	i : 10,
	b: () =>  console.log(this.i, this),
	c: function(){
		console.log(this.i, this)
	}
}

obj.b(); // undefined , window
obj.c();  // 10, obj { }
