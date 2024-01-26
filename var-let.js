//var , let의 for 문에서의 바인딩 비교

for(var i = 0; i < 3; i ++ ) {
	setTimeout(function(){
		console.log('setTimout var :',i);	
	},i * 200);

}

for(let i = 0; i < 3; i ++ ) {
	setTimeout(function(){
		console.log('setTimeout let : ',i);
	}, i * 200);
}
