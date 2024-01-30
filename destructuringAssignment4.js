//중첩객체
//
const metadata = {
	title : "Scratchpad",
	translations: [{
		locale: "de",
		localization_tag: [],
		title: "JS1"
	},{
		local: "de",
		localiztion_tag: [],
		title:"JS2"
	}],
	url : "/en-US/docs/Tools/Scratchpad"
};

const {
	title: engTitle,
	translations: [{
		title : t1	
	},{
		title: t2
	}]
} = metadata;

console.log(engTitle, t1, t2); //Scratchpad JS1 JS2
